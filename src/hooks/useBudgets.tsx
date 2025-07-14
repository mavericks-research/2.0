import { useState, useEffect } from 'react';
import { getBudgets, Budget } from '../api/budgets';

const useBudgets = () => {
  const [budgets, setBudgets] = useState<Budget[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchBudgets = async () => {
      try {
        const fetchedBudgets = await getBudgets();
        setBudgets(fetchedBudgets);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchBudgets();
  }, []);

  return { budgets, loading, error };
};

export default useBudgets;
