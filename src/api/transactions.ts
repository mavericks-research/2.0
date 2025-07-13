import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore';
import app from '../firebase'; // Import the initialized app
import { getAuth } from 'firebase/auth';

const db = getFirestore(app);

interface TransactionData {
  // Define the shape of the transaction data
  date: string;
  category: string;
  amount: number;
  paymentMethod: string;
  frequency: string;
  // Add other fields as necessary, e.g., notes
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
