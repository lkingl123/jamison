'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebaseConfig';

import Sidebar from '../components/dashboard/Sidebar';
import DashboardTopbar from '../components/dashboard/Topbar';
import SpinnerWrapper from '../components/SpinnerWrapper';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user || !user.emailVerified) {
        router.push('/auth/signin');
      } else {
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, [router]);

  if (loading) {
    return <SpinnerWrapper><div /></SpinnerWrapper>; // Spinner only, no content
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex flex-col flex-grow">
        <DashboardTopbar />
        <main className="flex-grow p-6">
          <SpinnerWrapper>{children}</SpinnerWrapper>
        </main>
      </div>
    </div>
  );
}
