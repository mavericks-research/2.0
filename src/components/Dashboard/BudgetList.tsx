import React from 'react';
import { Link } from 'react-router-dom';
import useBudgets from '../../hooks/useBudgets';

const BudgetList: React.FC = () => {
  const { budgets, loading, error } = useBudgets();

  if (loading) {
    return <p>Loading budgets...</p>;
  }

  if (error) {
    return <p>Error loading budgets: {error.message}</p>;
  }

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
