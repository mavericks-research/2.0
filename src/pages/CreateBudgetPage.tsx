import React from 'react';

const CreateBudgetPage: React.FC = () => {
  // For now, this will be a simplified version of the budget page.
  // In the future, this will contain a form to create a new budget.
  return (
    <div>
      <header>
        <h1>Create a New Budget</h1>
      </header>
      <main>
        <section className="income-section">
          <h2>Income</h2>
          <input type="text" placeholder="Salary" />
          <input type="text" placeholder="Freelance" />
        </section>
        <section className="expenses-section">
          <h2>Expenses</h2>
          <input type="text" placeholder="Housing" />
          <input type="text" placeholder="Transportation" />
          <input type="text" placeholder="Food" />
        </section>
        <button>Save Budget</button>
      </main>
    </div>
  );
};

export default CreateBudgetPage;
