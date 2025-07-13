import React from 'react';
import SpendingForm from '../components/forms/SpendingForm';
import TransactionList from "../components/Dashboard/RecentTxList";

const SpendingEntryPage: React.FC = () => {
  return (
    <div>
      <h1>Enter a New Expense</h1>
      <SpendingForm />
      <TransactionList />
    </div>
  );
};

export default SpendingEntryPage;
