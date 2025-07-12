import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut as firebaseSignOut,
  onAuthStateChanged,
  type User,
} from 'firebase/auth';

const provider = new GoogleAuthProvider();
const auth = getAuth();

export const signInWithGoogle = async (): Promise<User | null> => {
  try {
    const result = await signInWithPopup(auth, provider);
    return result.user;
  } catch (error) {
    console.error("Error during Google sign-in:", error);
    return null;
  }
};

export const signOut = async (): Promise<void> => {
  try {
    await firebaseSignOut(auth);
  } catch (error) {
    console.error("Error during sign-out:", error);
  }
};

export const onAuthStateChangedHelper = (callback: (user: User | null) => void) => {
  return onAuthStateChanged(auth, callback);
};
