// app/layout.tsx

"use client"; // Ensures this is a client component

import Sidebar from './components/Sidebar'; 
import Navbar from './components/Navbar'; 
import './global.css'; 
import { usePathname } from 'next/navigation'; 
import { ReactNode, useEffect } from 'react'; 
import { useTranslation } from 'next-i18next'; 
import i18n from '../i18'; // Import the i18n initialization

interface LayoutProps {
  children: ReactNode; 
}

const Layout = ({ children }: LayoutProps) => {
  const pathname = usePathname(); 
  const { t } = useTranslation('common'); 

  useEffect(() => {
    // Initialize i18next
    i18n.init();
  }, []);

  const noSidebarPaths = ['/screens/login'];

  return (
    <html lang="en">
      <body>
        <div className="flex">
          {!noSidebarPaths.includes(pathname) && <Sidebar />}
          <main className={`flex-grow flex flex-col ${!noSidebarPaths.includes(pathname) ? 'ml-64' : ''}`}>
            {!noSidebarPaths.includes(pathname) && <Navbar />}
            <div className="main-content flex-grow p-4">
              <h1 className="text-2xl font-bold">{t('welcome')}</h1>
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  );
};

export default Layout;
