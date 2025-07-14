import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore';
import app from '../firebase'; // Import the initialized app
import { getAuth } from 'firebase/auth';

const db = getFirestore(app);

interface TransactionData {
  id?: string;
  date: string;
  category: string;
  amount: number;
  paymentMethod: string;
  frequency: string;
}

export const addTransaction = async (data: TransactionData): Promise<void> => {
  const auth = getAuth(app);
  const user = auth.currentUser;

  if (!user) {
    throw new Error('No user is signed in to add a transaction.');
  }

  try {
    await addDoc(collection(db, 'transactions'), {
      ...data,
      uid: user.uid, // Associate the transaction with the user
      createdAt: serverTimestamp(), // Add a server-side timestamp
    });
    console.log('Transaction added successfully');
  } catch (error) {
    console.error('Error adding transaction:', error);
    throw error; // Re-throw the error to be handled by the caller
  }
};
import {
  query,
  where,
  orderBy,
  limit,
  getDocs,
} from 'firebase/firestore';

export const getTransactions = async () => {
  const auth = getAuth(app);
  const user = auth.currentUser;

  if (!user) {
    throw new Error('No user is signed in to fetch transactions.');
  }

  const transactionsCol = collection(db, 'transactions');
  const q = query(
    transactionsCol,
    where('uid', '==', user.uid),
    orderBy('createdAt', 'desc'),
    limit(10),
  );

  const querySnapshot = await getDocs(q);
  const transactions: TransactionData[] = [];
  querySnapshot.forEach((doc) => {
    transactions.push({ id: doc.id, ...doc.data() } as TransactionData);
  });

  return transactions;
};

import { deleteDoc, doc } from 'firebase/firestore';

export const deleteTransaction = async (transactionId: string): Promise<void> => {
  const auth = getAuth(app);
  const user = auth.currentUser;

  if (!user) {
    throw new Error('No user is signed in to delete a transaction.');
  }

  try {
    const transactionRef = doc(db, 'transactions', transactionId);
    await deleteDoc(transactionRef);
    console.log('Transaction deleted successfully');
  } catch (error) {
    console.error('Error deleting transaction:', error);
    throw error;
  }
};
