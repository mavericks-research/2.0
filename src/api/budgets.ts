import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore';
import app from '../firebase'; // Import the initialized app
import { getAuth } from 'firebase/auth';

const db = getFirestore(app);

export interface Budget {
  id?: string;
  name: string;
  month: string; // e.g., "2025-07"
  income: {
    planned: number;
    actual: number;
  };
  expenses: {
    [category: string]: {
      planned: number;
      actual: number;
    };
  };
  uid: string;
  createdAt: any; // Let Firestore handle the timestamp
}

import { query, where, getDocs } from 'firebase/firestore';

export const addBudget = async (budgetData: Omit<Budget, 'uid' | 'createdAt'>): Promise<string> => {
  const auth = getAuth(app);
  const user = auth.currentUser;

  if (!user) {
    throw new Error('No user is signed in to add a budget.');
  }

  try {
    const docRef = await addDoc(collection(db, 'budgets'), {
      ...budgetData,
      uid: user.uid,
      createdAt: serverTimestamp(),
    });
    console.log('Budget added with ID: ', docRef.id);
    return docRef.id;
  } catch (error) {
    console.error('Error adding budget:', error);
    throw error;
  }
};

export const getBudgets = async (): Promise<Budget[]> => {
  const auth = getAuth(app);
  const user = auth.currentUser;

  if (!user) {
    throw new Error('No user is signed in to fetch budgets.');
  }

  const budgetsCol = collection(db, 'budgets');
  const q = query(budgetsCol, where('uid', '==', user.uid));

  const querySnapshot = await getDocs(q);
  const budgets: Budget[] = [];
  querySnapshot.forEach((doc) => {
    budgets.push({ id: doc.id, ...doc.data() } as Budget);
  });

  return budgets;
};
