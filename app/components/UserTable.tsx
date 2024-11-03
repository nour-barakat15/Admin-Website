"use client"; // Specify this file is a client component

import { useState, FC, memo } from 'react';
import { useTranslation } from 'next-i18next'; // Import useTranslation

// Define types for user data and tab options
type User = {
    name: string;
    email: string;
    status: 'Active' | 'Inactive';
};

const users: User[] = [
    { name: "Hassan Mahadjir", email: "hm.Mahadjir@gmail.com", status: "Active" },
    { name: "Nour Barakat", email: "no.Barakat@gmail.com", status: "Active" },
    { name: "Ayesha Atif", email: "20001909@gmail.com", status: "Active" },
    { name: "Melisa", email: "20001909@gmail.com", status: "Inactive" },
];

// Tab options type
type TabOption = 'User' | 'Staff' | 'Admin';

// Status Badge Component
const StatusBadge = memo(({ status }: { status: User['status'] }) => (
    <span
        className={`px-3 py-1 rounded-full text-sm font-medium ${
            status === "Active" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
        }`}
    >
        {status}
    </span>
));

// Table Header Component
const TableHeader: FC = () => (
    <thead>
        <tr>
            <th className="px-16 pr-28 text-center text-gray-600 font-semibold">{useTranslation("common").t("name")}</th>
            <th className="px-16 pr-28 text-center text-gray-600 font-semibold">{useTranslation("common").t("email")}</th>
            <th className="px-10 pr-28 text-center text-gray-600 font-semibold">{useTranslation("common").t("accountStatus")}</th>
        </tr>
    </thead>
);

// Tab Button Component
const TabButton: FC<{ tab: TabOption; isActive: boolean; onClick: () => void }> = ({ tab, isActive, onClick }) => (
    <button
        onClick={onClick}
        className={`pb-2 transition-colors ${isActive ? "text-Primary border-b-2 border-Primary font-semibold" : "text-gray-500"}`}
    >
        {tab}
    </button>
);

const UserTable: FC = () => {
    const { t } = useTranslation("common"); // Use the correct namespace for translations
    const [activeTab, setActiveTab] = useState<TabOption>("User");

    return (
        <div className="w-[640px] p-6 bg-white rounded-lg shadow-lg h-86 ml-4">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-Secondary font-semibold text-lg">{t("applicationUsers")}</h2> {/* Translated title */}
                {/* Tab Navigation */}
                <div className="flex space-x-6 border-b">
                    {["User", "Staff", "Admin"].map((tab) => (
                        <TabButton 
                            key={tab} 
                            tab={tab as TabOption} 
                            isActive={activeTab === tab} 
                            onClick={() => setActiveTab(tab as TabOption)} 
                        />
                    ))}
                </div>
            </div>

            {/* User Table */}
            <div className="overflow-hidden h-60">
                <table className="min-w-full bg-white">
                    {/* Fixed Header */}
                    <TableHeader />
                </table>
                {/* Scrollable Body */}
                <div className="overflow-y-auto h-48">
                    <table className="min-w-full bg-white">
                        <tbody>
                            {users.map((user, index) => (
                                <tr key={index} className="border-b last:border-0">
                                    <td className="px-6 py-4 flex items-center space-x-3">
                                        <img
                                            src="/logo.png" // Placeholder image, replace with actual path
                                            alt="Profile"
                                            className="w-8 h-8 rounded-full"
                                        />
                                        <span className="text-gray-800">{user.name}</span>
                                    </td>
                                    <td className="px-6 py-4 text-gray-700">{user.email}</td>
                                    <td className="px-6 py-4"><StatusBadge status={user.status} /></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default UserTable; // Export the component
