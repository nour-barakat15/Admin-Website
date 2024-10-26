// app/screens/dashboard.tsx
import React from 'react';
import Sidebar from '@/app/components/Sidebar'; // Adjust the import path as necessary
import Navbar from '@/app/components/Navbar'; // Import Navbar if you want to include it
import Layout from '@/app/layout'; // Import the Layout component

const Dashboard = () => {
  return (
    <Layout>
      <div className="flex">
        <Sidebar />
        <main className="flex-grow flex flex-col">
          <Navbar />
          <div className="main-content flex-grow p-4">
            <h1 className="text-2xl font-bold">Dashboard</h1>
            {/* Add your dashboard content here */}
          </div>
        </main>
      </div>
    </Layout>
  );
};

export default Dashboard;
