// src/app/layout.tsx
import Sidebar from './components/Sidebar'; 
import Navbar from './components/Navbar'; 
import './global.css'; 
import { ReactNode } from 'react'; 

interface LayoutProps {
  children: ReactNode; 
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <html lang="en">
      <body>
        <div className="flex">
          <Sidebar />
          <main className="flex-grow flex flex-col">
            <Navbar />
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
