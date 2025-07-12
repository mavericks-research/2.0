import { initializeApp } from "firebase/app";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { firebaseConfig } from "./firebaseConfig";
import { AuthProvider, useAuth } from "./hooks/useAuth";
import BudgetsPage from "./pages/BudgetsPage";
import DashboardPage from "./pages/DashboardPage";
import LoginPage from "./pages/LoginPage";
import SettingsPage from "./pages/SettingsPage";
import ProtectedRoute from "./components/ProtectedRoute";
import { signOut } from "./api/auth";

// Initialize Firebase
initializeApp(firebaseConfig);

function Navigation() {
  const { user } = useAuth();
  return (
    <nav>
      <ul>
        {user && (
          <>
            <li>
              <Link to="/">Dashboard</Link>
            </li>
            <li>
              <Link to="/budgets">Budgets</Link>
            </li>
            <li>
              <Link to="/settings">Settings</Link>
            </li>
            <li>
              <button type="button" onClick={signOut}>Sign Out</button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}


function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/budgets" element={<BudgetsPage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Route>
    </Routes>
  );
}

function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="app-container">
          <Navigation />
          <hr />
          <AppRoutes />
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
