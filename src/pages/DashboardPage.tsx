import type React from "react";
import AccountsTable from "../components/Dashboard/AccountsTable";
import BudgetProgress from "../components/Dashboard/BudgetProgress";
import NetWorthCard from "../components/Dashboard/NetWorthCard";
import TransactionList from "../components/Dashboard/RecentTxList";
import { Link } from "react-router-dom";

const DashboardPage: React.FC = () => {
	return (
		<div>
			<h1>Dashboard</h1>
			<Link to="/add-expense">Add Expense</Link>
			<NetWorthCard />
			<AccountsTable />
			<BudgetProgress />
			<TransactionList />
			{/* Further layout and styling will be needed */}
		</div>
	);
};

export default DashboardPage;
