import type React from "react";

const AccountsTable: React.FC = () => {
	return (
		<div>
			<h2>Accounts</h2>
			<table>
				<thead>
					<tr>
						<th>Name</th>
						<th>Type</th>
						<th>Balance</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td colSpan={3}>Loading...</td>
					</tr>
					{/* Placeholder for account rows */}
				</tbody>
			</table>
		</div>
	);
};

export default AccountsTable;
