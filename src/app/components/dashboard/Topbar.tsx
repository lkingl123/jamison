'use client';

import { useRouter } from 'next/navigation';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebaseConfig';
import { useEffect, useState } from 'react';

export default function DashboardTopbar() {
  const router = useRouter();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [userEmail, setUserEmail] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUserEmail(user?.email ?? null);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    router.push('/auth/signin');
  };

  return (
    <div className="flex justify-between items-center px-6 py-4 bg-white shadow">
      <h1 className="text-xl font-bold text-gray-800">Welcome to your Dashboard</h1>

      <div className="relative">
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-800 rounded hover:bg-gray-200 transition"
        >
          <span className="font-medium truncate max-w-[350px]">{userEmail ?? 'Loading...'}</span>
          <svg
            className={`w-4 h-4 transform transition-transform ${dropdownOpen ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {dropdownOpen && (
          <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded z-20">
            <button
              onClick={handleLogout}
              className="block w-full text-left px-4 py-2 hover:bg-red-100 text-sm text-red-600 hover:text-red-800"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
