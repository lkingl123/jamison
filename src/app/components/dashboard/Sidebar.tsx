'use client';

import { FiHome, FiSettings } from 'react-icons/fi'; // Feather icons
import Link from 'next/link';

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white shadow-lg p-6 hidden md:block">
      <h2 className="text-lg font-bold mb-4">Dashboard</h2>
      <nav className="space-y-2">
        <Link href="/dashboard" className="flex items-center text-gray-700 hover:text-blue-600">
          <FiHome className="w-5 h-5 mr-2" />
          Home
        </Link>

        <Link href="/dashboard/settings" className="flex items-center text-gray-700 hover:text-blue-600">
          <FiSettings className="w-5 h-5 mr-2" />
          Settings
        </Link>
      </nav>
    </aside>
  );
}
