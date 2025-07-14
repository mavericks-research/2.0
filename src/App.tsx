import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { AuthProvider, useAuth } from "./hooks/useAuth";
import BudgetsPage from "./pages/BudgetsPage";
import DashboardPage from "./pages/DashboardPage";
import LoginPage from "./pages/LoginPage";
import SettingsPage from "./pages/SettingsPage";
import SpendingEntryPage from "./pages/SpendingEntryPage";
import ProtectedRoute from "./components/ProtectedRoute";
import { signOut } from "./api/auth";

// Firebase is now initialized in src/firebase.ts

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
              <Link to="/spending/new">Add Expense</Link>
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


import CreateBudgetPage from "./pages/CreateBudgetPage";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/budgets/new" element={<CreateBudgetPage />} />
        <Route path="/budgets/:budgetId" element={<BudgetsPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/spending/new" element={<SpendingEntryPage />} />
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
