import React from 'react';
import { Link } from 'react-router-dom';

const BudgetList: React.FC = () => {
  // This will be replaced with actual data fetched from Firebase
  const budgets = [
    { id: '1', name: 'July 2025' },
    { id: '2', name: 'August 2025' },
  ];

  return (
    <div>
      <h2>Budget Plans</h2>
      <ul>
        {budgets.map((budget) => (
          <li key={budget.id}>
            <Link to={`/budgets/${budget.id}`}>{budget.name}</Link>
          </li>
        ))}
      </ul>
      <Link to="/budgets/new">Create New Budget</Link>
    </div>
  );
};

export default BudgetList;
