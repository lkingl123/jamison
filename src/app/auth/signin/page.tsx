'use client';

import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebaseConfig';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function SignInPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push('/dashboard');
    } catch (err: any) {
      setError(err.message || 'Login failed');
    }
  };

  return (
    <main className="min-h-[80vh] flex items-center justify-center bg-gray-100">
      <form onSubmit={handleSignIn} className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl mb-4 font-bold text-center">Sign In to Clairo</h2>

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="w-full p-3 border border-gray-300 rounded mb-4"
          required
        />

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="w-full p-3 border border-gray-300 rounded mb-4"
          required
        />

        <button
          type="submit"
          className="w-full bg-black text-white p-3 rounded hover:bg-customBlue transition"
        >
          Sign In
        </button>

        {error && <p className="mt-4 text-sm text-red-600 text-center">{error}</p>}

        <p className="text-sm text-center mt-6">
          Don’t have an account?{' '}
          <Link href="/auth/signup" className="text-blue-600 hover:underline">
            Sign up here
          </Link>
        </p>
      </form>
    </main>
  );
}
