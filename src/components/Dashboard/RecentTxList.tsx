import React from 'react';
import useTransactions from '../../hooks/useTransactions';

const RecentTxList: React.FC = () => {
  const { transactions, loading, error } = useTransactions();

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
