// app/components/Sidebar.tsx

"use client"; // Add this directive at the top of the file

import { usePathname } from 'next/navigation'; // Use usePathname instead of useRouter
import Link from 'next/link';
import { FaHome, FaBuilding, FaChartLine, FaWrench, FaEnvelopeOpenText, FaUserFriends, FaCalendarAlt, FaNewspaper, FaSignOutAlt } from 'react-icons/fa';

const Sidebar = () => {
  const pathname = usePathname(); // Get the current pathname

  return (
    <div className="fixed inset-y-0 left-0 h-screen w-64 bg-Secondary text-white flex flex-col p-4 z-40"> {/* Add z-index */}
      {/* Logo Section */}
      <div className="mb-8 flex items-center justify-center">
        <img src="/logo.png" alt="Streamline Logo" className="h-28" />
      </div>
      <nav className="flex flex-col flex-grow">
        <Link href="/dashboard">
          <div className={`flex items-center p-2 my-2 transition-colors duration-200 border-transparent ${pathname === "/dashboard" ? "bg-Primary" : ""} hover:bg-Primary hover:rounded-lg hover:border-2 hover:border-Primary rounded`}>
            <FaHome className="mr-3 text-xl" /> Overview
          </div>
        </Link>
        <Link href="/screens/Departments">
          <div className={`flex items-center p-2 my-2 transition-colors duration-200 border-transparent ${pathname === "/departments" ? "bg-Primary" : ""} hover:bg-Primary hover:rounded-lg hover:border-2 hover:border-Primary rounded`}>
            <FaBuilding className="mr-3 text-xl" /> Departments
          </div>
        </Link>
        <Link href="/services">
          <div className={`flex items-center p-2 my-2 transition-colors duration-200 border-transparent ${pathname === "/services" ? "bg-Primary" : ""} hover:bg-Primary hover:rounded-lg hover:border-2 hover:border-Primary rounded`}>
            <FaWrench className="mr-3 text-xl" /> Services
          </div>
        </Link>
        <Link href="/reports">
          <div className={`flex items-center p-2 my-2 transition-colors duration-200 border-transparent ${pathname === "/reports" ? "bg-Primary" : ""} hover:bg-Primary hover:rounded-lg hover:border-2 hover:border-Primary rounded`}>
            <FaChartLine className="mr-3 text-xl" /> Reports
          </div>
        </Link>
        <Link href="/requests">
          <div className={`flex items-center p-2 my-2 transition-colors duration-200 border-transparent ${pathname === "/requests" ? "bg-Primary" : ""} hover:bg-Primary hover:rounded-lg hover:border-2 hover:border-Primary rounded`}>
            <FaEnvelopeOpenText className="mr-3 text-xl" /> Requests
          </div>
        </Link>
        <Link href="/users">
          <div className={`flex items-center p-2 my-2 transition-colors duration-200 border-transparent ${pathname === "/users" ? "bg-Primary" : ""} hover:bg-Primary hover:rounded-lg hover:border-2 hover:border-Primary rounded`}>
            <FaUserFriends className="mr-3 text-xl" /> Users
          </div>
        </Link>
        <Link href="/appointments">
          <div className={`flex items-center p-2 my-2 transition-colors duration-200 border-transparent ${pathname === "/appointments" ? "bg-Primary" : ""} hover:bg-Primary hover:rounded-lg hover:border-2 hover:border-Primary rounded`}>
            <FaCalendarAlt className="mr-3 text-xl" /> Appointments
          </div>
        </Link>
        <Link href="/training-news">
          <div className={`flex items-center p-2 my-2 transition-colors duration-200 border-transparent ${pathname === "/training-news" ? "bg-Primary" : ""} hover:bg-Primary hover:rounded-lg hover:border-2 hover:border-Primary rounded`}>
            <FaNewspaper className="mr-3 text-xl" /> Tender News
          </div>
        </Link>
      </nav>

      <button className="mt-auto flex items-center p-2 rounded hover:bg-red-700 text-sm">
        <FaSignOutAlt className="mr-2 text-lg" /> Log out
      </button>
    </div>
  );
};

export default Sidebar; // This line exports the component
