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
      
      <nav className="flex flex-col flex-grow overflow-y-auto"> {/* Added overflow-y-auto for scrolling */}
        {[ // Sidebar Links
          { href: "/dashboard", icon: <FaHome className="mr-3 text-xl" />, label: "Overview" },
          { href: "/departments", icon: <FaBuilding className="mr-3 text-xl" />, label: "Departments" },
          { href: "/services", icon: <FaWrench className="mr-3 text-xl" />, label: "Services" },
          { href: "/reports", icon: <FaChartLine className="mr-3 text-xl" />, label: "Reports" },
          { href: "/requests", icon: <FaEnvelopeOpenText className="mr-3 text-xl" />, label: "Requests" },
          { href: "/users", icon: <FaUserFriends className="mr-3 text-xl" />, label: "Users" },
          { href: "/appointments", icon: <FaCalendarAlt className="mr-3 text-xl" />, label: "Appointments" },
          { href: "/training-news", icon: <FaNewspaper className="mr-3 text-xl" />, label: "Tender News" },
        ].map(({ href, icon, label }) => (
          <Link key={href} href={href}>
            <div className={`flex items-center p-2 my-2 transition-colors duration-200 border-transparent ${pathname === href ? "bg-Primary" : ""} hover:bg-Primary hover:rounded-lg hover:border-2 hover:border-Primary rounded`}>
              {icon} {label}
            </div>
          </Link>
        ))}
      </nav>

      <button className="mt-auto flex items-center p-2 rounded hover:bg-red-700 text-sm">
        <FaSignOutAlt className="mr-2 text-lg" /> Log out
      </button>
    </div>
  );
};

export default Sidebar; // This line exports the component
