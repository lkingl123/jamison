'use client';

import { useState } from 'react';
import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import { auth } from '../../firebaseConfig';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function SignUpPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const router = useRouter();

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage('');
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await sendEmailVerification(userCredential.user);
      setMessage('Verification email sent. Please check your inbox.');
      setTimeout(() => router.push('/auth/signin'), 3000);
    } catch (err: any) {
      setMessage(err.message || 'Sign up failed');
    }
  };

  return (
    <main className="min-h-[80vh] flex items-center justify-center bg-gray-100">
      <form onSubmit={handleSignUp} className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl mb-4 font-bold text-center">Create Your Clairo Account</h2>

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
          Sign Up
        </button>

        {message && <p className="mt-4 text-sm text-blue-600 text-center">{message}</p>}

        <p className="text-sm text-center mt-6">
          Already have an account?{' '}
          <Link href="/auth/signin" className="text-blue-600 hover:underline">
            Sign in here
          </Link>
        </p>
      </form>
    </main>
  );
}
