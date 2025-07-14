import React from 'react';

const BudgetsPage: React.FC = () => {
  return (
    <div>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1>My Monthly Budget</h1>
          {/* Implement a real date picker later */}
          <input type="month" defaultValue="2025-07" />
        </div>
        <div>
          {/* Placeholder for profile summary */}
          <span>User Icon</span>
          <span>Income: $XXXX | Balance: $YYYY</span>
        </div>
      </header>
      <main>
        <section className="income-section">
          <h2>Income</h2>
          <div>
            <h3>Planned Income</h3>
            <ul>
              <li>Salary: $3000</li>
              <li>Freelance: $500</li>
            </ul>
            <p>Total Planned: $3500</p>
          </div>
          <div>
            <h3>Actual Income</h3>
            <ul>
              {/* Actual income data will be fetched here */}
              <li>Salary Deposit: $3000</li>
            </ul>
            <p>Total Actual: $3000</p>
          </div>
          <div>
            <h3>Difference</h3>
            <p>-$500</p>
          </div>
        </section>
        <section className="expenses-section">
          <h2>Expenses</h2>
          {/* Example of a category */}
          <div className="category">
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>Housing</span>
              <span>Planned: $1200 | Actual: $1250</span>
            </div>
            <progress value="1250" max="1200" style={{ width: '100%' }} />
            <span style={{ color: 'red' }}>Over budget!</span>
          </div>
          {/* More categories would be listed here */}
        </section>
        <aside className="summary-panel" style={{ border: '1px solid #ccc', padding: '1rem', marginTop: '1rem' }}>
          <h2>Summary</h2>
          <p>Planned Income vs Planned Expenses: $3500 / $2500</p>
          <p>Total Actual Income vs Total Actual Expenses: $3000 / $2800</p>
          <h3>Remaining Budget: $200</h3>
        </aside>
      </main>
    </div>
  );
};

export default BudgetsPage;
