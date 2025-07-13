import React, { useState } from 'react';
import { addTransaction } from '../../api/transactions';

// Get today's date in YYYY-MM-DD format for the default value
const getTodayString = () => new Date().toISOString().split('T')[0];

const SpendingForm: React.FC = () => {
  const [formData, setFormData] = useState({
    date: getTodayString(),
    category: '',
    amount: '',
    paymentMethod: '',
    frequency: 'one-off',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      await addTransaction(formData);
      // Reset form on success
      setFormData({
        date: getTodayString(),
        category: '',
        amount: '',
        paymentMethod: '',
        frequency: 'one-off',
      });
      alert('Expense added successfully!'); // Simple feedback for now
    } catch (err) {
      setError('Failed to add expense. Please try again.');
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <form onSubmit={handleSubmit}>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div>
        <label htmlFor="date">Date</label>
        <input
          type="date"
          id="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="category">Category</label>
        <select
          id="category"
          name="category"
          value={formData.category}
          onChange={handleChange}
        >
          <option value="">Select Category</option>
          <option value="groceries">Groceries</option>
          <option value="rent">Rent</option>
          <option value="transport">Transport</option>
          <option value="entertainment">Entertainment</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div>
        <label htmlFor="amount">Amount</label>
        <input
          type="number"
          id="amount"
          name="amount"
          step="0.01"
          value={formData.amount}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="paymentMethod">Payment Method</label>
        <select
          id="paymentMethod"
          name="paymentMethod"
          value={formData.paymentMethod}
          onChange={handleChange}
        >
          <option value="">Select Method</option>
          <option value="cash">Cash</option>
          <option value="credit-card">Credit Card</option>
          <option value="bank-transfer">Bank Transfer</option>
          {/* Linked accounts will be populated here later */}
        </select>
      </div>
      <div>
        <label htmlFor="frequency">Frequency</label>
        <select
          id="frequency"
          name="frequency"
          value={formData.frequency}
          onChange={handleChange}
        >
          <option value="one-off">One-off</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
        </select>
      </div>
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default SpendingForm;
