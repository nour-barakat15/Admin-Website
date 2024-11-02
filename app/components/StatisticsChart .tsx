"use client"; // Add this line

import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register necessary components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

// Sample data for the bar chart
const data = {
  labels: [
    "Street",
    "Market",
    "Accident",
    "Water",
    "School",
    "Traffic",
    "Garbage",
    "Others",
  ],
  datasets: [
    {
      backgroundColor: "rgba(241, 114, 42, 0.6)",
      borderColor: "rgba(241, 114, 42, 0.6)",
      borderWidth: 2,
      data: [0, 5, 10, 15, 20, 25, 30],
    },
  ],
};

const StatisticsChart: React.FC = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Select Option");

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
    setDropdownOpen(false);
  };

  return (
    <div className="flex  items-center p-4">
      <div className="flex flex-col w-full w-[685px] mb-0">
        {/* Wrapper div for Statistics heading, Sort by section, and Bar chart */}
        <div className="p-4 bg-white rounded-lg shadow-md w-full h-auto overflow-hidden"> 
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-gray-700">Statistics</h2>
            <div className="flex items-center">
              <span className="mr-2 text-lg text-black">Sort by:</span>
              <div className="relative">
                <button
                  onClick={toggleDropdown}
                  className="bg-[#CDE5F0] text-black px-4 py-2 rounded-full text-sm flex items-center w-34"
                >
                  {selectedOption}
                  <span className="ml-1">&#9660;</span> {/* Down arrow */}
                </button>
                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded shadow-lg z-10">
                    <ul className="py-1">
                      <li
                        onClick={() => handleOptionSelect("Report")}
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer"
                      >
                        Report
                      </li>
                      <li
                        onClick={() => handleOptionSelect("Requests")}
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer"
                      >
                        Requests
                      </li>
                      <li
                        onClick={() => handleOptionSelect("Appointments")}
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer"
                      >
                        Appointments
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
          {/* Bar chart inside the same wrapper */}
          <Bar data={data} />
        </div>
      </div>
    </div>
  );
};

export default StatisticsChart;
