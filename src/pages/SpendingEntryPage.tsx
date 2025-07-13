import React from 'react';
import SpendingForm from '../components/forms/SpendingForm';

const SpendingEntryPage: React.FC = () => {
  return (
    <div>
      <h1>Enter a New Expense</h1>
      <SpendingForm />
    </div>
  );
};

export default SpendingEntryPage;
