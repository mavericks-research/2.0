import React from 'react';
import { useParams } from 'react-router-dom';

const BudgetsPage: React.FC = () => {
  const { budgetId } = useParams<{ budgetId: string }>();

  // In the future, fetch budget data based on budgetId
  // For now, just display the ID.
  return (
    <div>
      <h1>Budget Details</h1>
      <p>Displaying budget with ID: {budgetId}</p>
      {/* The detailed budget view will be built out here */}
    </div>
  );
};

export default BudgetsPage;
