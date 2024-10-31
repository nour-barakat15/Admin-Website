// app/screens/dashboard.tsx

import React from 'react';
import Cards from '@/app/components/Cards';
import StatisticsChart from '@/app/components/StatisticsChart ';
import UserTable from '@/app/components/UserTable';
import TenderNews from '@/app/components/TenderNews';

const Dashboard = () => {
  return (
    <div className="main-content flex-grow p-4 flex flex-col justify-start mt-10">
      <h5 className="text-lg text-black pr-2 ml-6 font-bold">Dashboard</h5> {/* Adjust ml-* value as needed */}
      
      <Cards />
      
      {/* Container for StatisticsChart and UserTable */}
      <div className="flex flex-col md:flex-row mt-4"> {/* Added margin-top for spacing */}
        <div className="md:w-1/2 md:mr-4"> {/* Width for the StatisticsChart */}
          <StatisticsChart />
        </div>
        
        {/* Flex container for UserTable and TenderNews */}
        <div className="md:w-1/2 mt-4 ml-2"> {/* Added margin-top for TenderNews */}
          <TenderNews />
        </div>
      </div>
      
      {/* Container for UserTable below the StatisticsChart */}
      <div className="mt-0"> {/* Adjust margin as needed */}
        <UserTable />
      </div>
    </div>
  );
};

export default Dashboard;
