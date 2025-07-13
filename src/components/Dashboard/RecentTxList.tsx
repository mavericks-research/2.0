import React from 'react';
import useTransactions from '../../hooks/useTransactions';
import { deleteTransaction } from '../../api/transactions';

const RecentTxList: React.FC = () => {
  const { transactions, loading, error, setTransactions } = useTransactions();

  const handleDelete = async (transactionId: string) => {
    if (window.confirm('Are you sure you want to delete this transaction?')) {
      try {
        await deleteTransaction(transactionId);
        setTransactions(transactions.filter((tx) => tx.id !== transactionId));
      } catch (err) {
        console.error('Failed to delete transaction:', err);
        alert('Failed to delete transaction. Please try again.');
      }
    }
  };

  if (loading) {
    return <p>Loading transactions...</p>;
  }

  if (error) {
    return <p>Error loading transactions: {error.message}</p>;
  }

  return (
    <div>
      <h2>Recent Transactions</h2>
      {transactions.length > 0 ? (
        <ul>
          {transactions.map((tx) => (
            <li key={tx.id}>
              {tx.date} - {tx.category} - ${tx.amount}
              <button onClick={() => handleDelete(tx.id)}>Delete</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No recent transactions to display.</p>
      )}
    </div>
  );
};

export default RecentTxList;
