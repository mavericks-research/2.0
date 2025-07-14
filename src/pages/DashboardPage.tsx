import type React from "react";
import AccountsTable from "../components/Dashboard/AccountsTable";
import BudgetProgress from "../components/Dashboard/BudgetProgress";
import NetWorthCard from "../components/Dashboard/NetWorthCard";
import RecentTxList from "../components/Dashboard/RecentTxList";
import BudgetList from "../components/Dashboard/BudgetList";

const DashboardPage: React.FC = () => {
	return (
		<div>
			<h1>Dashboard</h1>
			<NetWorthCard />
			<AccountsTable />
			<BudgetProgress />
			<RecentTxList />
			<BudgetList />
			{/* Further layout and styling will be needed */}
		</div>
	);
};

export default DashboardPage;
