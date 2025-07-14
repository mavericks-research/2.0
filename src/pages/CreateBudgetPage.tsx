import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addBudget } from '../api/budgets';

const CreateBudgetPage: React.FC = () => {
  const [name, setName] = useState('');
  const [month, setMonth] = useState('');
  const navigate = useNavigate();

  const handleSave = async () => {
    if (!name || !month) {
      alert('Please fill out all fields.');
      return;
    }

    try {
      const newBudgetId = await addBudget({
        name,
        month,
        income: { planned: 0, actual: 0 },
        expenses: {},
      });
      navigate(`/budgets/${newBudgetId}`);
    } catch (error) {
      console.error('Failed to save budget:', error);
      alert('Failed to save budget. Please try again.');
    }
  };

  return (
    <div>
      <h1>Create a New Budget</h1>
      <input
        type="text"
        placeholder="Budget Name (e.g., July 2025)"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="month"
        value={month}
        onChange={(e) => setMonth(e.target.value)}
      />
      <button onClick={handleSave}>Save Budget</button>
    </div>
  );
};

export default CreateBudgetPage;
