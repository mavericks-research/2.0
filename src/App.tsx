import { initializeApp } from "firebase/app";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { firebaseConfig } from "./firebaseConfig";
import BudgetsPage from "./pages/BudgetsPage";
import DashboardPage from "./pages/DashboardPage";
import SettingsPage from "./pages/SettingsPage";

// Initialize Firebase
initializeApp(firebaseConfig);

function App() {
	return (
		<Router>
			<div>
				<nav>
					<ul>
						<li>
							<Link to="/">Dashboard</Link>
						</li>
						<li>
							<Link to="/budgets">Budgets</Link>
						</li>
						<li>
							<Link to="/settings">Settings</Link>
						</li>
					</ul>
				</nav>

				<hr />

				<Routes>
					<Route path="/" element={<DashboardPage />} />
					<Route path="/budgets" element={<BudgetsPage />} />
					<Route path="/settings" element={<SettingsPage />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
