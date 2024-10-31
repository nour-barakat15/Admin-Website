// app/layout.tsx

"use client"; // Ensures this is a client component

import Sidebar from './components/Sidebar'; 
import Navbar from './components/Navbar'; 
import './global.css'; 
import { usePathname } from 'next/navigation'; 
import { ReactNode } from 'react'; 

interface LayoutProps {
  children: ReactNode; 
}

const Layout = ({ children }: LayoutProps) => {
  const pathname = usePathname(); // Get the current pathname

  // Define pages where Sidebar and Navbar should not appear
  const noSidebarPaths = ['/screens/login'];

  return (
    <html lang="en">
      <body>
        <div className="flex">
          {!noSidebarPaths.includes(pathname) && <Sidebar />}
          <main className={`flex-grow flex flex-col ${!noSidebarPaths.includes(pathname) ? 'ml-64' : ''}`}> {/* Adjust margin based on presence of Sidebar */}
            {!noSidebarPaths.includes(pathname) && <Navbar />}
            <div className="main-content flex-grow p-4">
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  );
};

export default Layout;
