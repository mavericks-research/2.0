import React from 'react';
import { signInWithGoogle } from '../api/auth';
import { useAuth } from '../hooks/useAuth';
import { Navigate } from 'react-router-dom';

const LoginPage: React.FC = () => {
  const { user, loading } = useAuth();

  const handleSignIn = async () => {
    await signInWithGoogle();
    // The onAuthStateChanged listener in AuthProvider will handle the redirect
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (user) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <h1>Login</h1>
      <p>Please sign in to continue.</p>
      <button type="button" onClick={handleSignIn}>
        Sign in with Google
      </button>
    </div>
  );
};

export default LoginPage;
