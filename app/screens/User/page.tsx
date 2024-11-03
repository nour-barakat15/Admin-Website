"use client"

import React, { useState } from 'react';
import { User, users } from './types'; // Import types and mock data
import { styles } from '../../styles/User.styles'; // Import styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { useTranslation } from "next-i18next";

const Users: React.FC = () => {
  const { t } = useTranslation("common"); 

  // Constants for translated text
  const Dashboard = t('Dashboard');
  const user = t('user');
  const Staff = t('Staff');
  const Admin = t('Admin');
  const Create = t('Create');
  const FirstName = t('First name');
  const LastName = t('Last name');
  const Email = t('Email');
  const Phone = t('Phone');
  const Status = t('Status');
  const Action = t('Action');
  const Edit = t('Edit');
  const Delete = t('Delete');
  const Previous = t('Previous');
  const Next = t('Next');
  const Page = t('Page');
  const ActiveStatus = t('status.active');  
  const InactiveStatus = t('status.inactive'); 

  const [activeTab, setActiveTab] = useState<string>('User'); // State to track the active tab
  const [isDropdownOpen, setIsDropdownOpen] = useState<Record<number, boolean>>({});

  // Filter data based on the active tab
  const filteredUsers = users.filter(user => user.role === activeTab.toLowerCase());

  // Toggle dropdown for a specific row
  const toggleDropdown = (id: number) => {
    setIsDropdownOpen((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <div>
      <h2 style={styles.heading}>{Dashboard} &gt; {user}</h2>

      <div style={styles.tableContainer}>
        <div style={styles.tabContainer}>
            <button 
            style={activeTab === 'User' ? styles.activeTabButton : styles.tabButton} 
            onClick={() => setActiveTab('User')}
            >
            {user}
            </button>
            <button 
            style={activeTab === 'Staff' ? styles.activeTabButton : styles.tabButton} 
            onClick={() => setActiveTab('Staff')}
            >
            {Staff}
            </button>
            <button 
            style={activeTab === 'Admin' ? styles.activeTabButton : styles.tabButton} 
            onClick={() => setActiveTab('Admin')}
            >
            {Admin}
            </button>
        
            <div style={styles.createContainer}>
            <button style={styles.createButton}>+ {Create}</button>
            </div>
        </div>

        <table style={styles.table}>
          <thead style={styles.tableHeader}>
            <tr>
              <th style={styles.tableCell}>ID</th>
              <th style={styles.tableCell}>{FirstName}</th>
              <th style={styles.tableCell}>{LastName}</th>
              <th style={styles.tableCell}>{Email}</th>
              <th style={styles.tableCell}>{Phone}</th>
              <th style={styles.tableCell}>{Status}</th>
              <th style={styles.tableCell}>{Action}</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user: User) => (
              <tr key={user.id} style={styles.tableRow}>
                <td style={styles.tableCell}>#{user.id}</td>
                <td style={styles.tableCell}>{user.firstName}</td>
                <td style={styles.tableCell}>{user.lastName}</td>
                <td style={styles.tableCell}>{user.email}</td>
                <td style={styles.tableCell}>{user.phone}</td>
                <td style={styles.statusCell}>
                <span style={user.status === 'Active' ? styles.activeStatus : styles.inactiveStatus}>
                    {user.status === 'Active' ? ActiveStatus : InactiveStatus}
                </span>
                </td>
                <td style={styles.actionMenu}>
                  <button
                    style={styles.menuButton}
                    onClick={() => toggleDropdown(user.id)}
                  >
                    ...
                  </button>
                  {isDropdownOpen[user.id] && (
                    <div style={styles.dropdown}>
                      <Link href="/screens/User/modify" passHref>
                        <button style={styles.editButton}>
                          <FontAwesomeIcon icon={faEdit} style={styles.icon} /> {Edit}
                        </button>
                      </Link>
                      <button style={styles.deleteButton}>
                        <FontAwesomeIcon icon={faTrashAlt} style={styles.icon} /> {Delete}
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div style={styles.pagination}>
        <button style={styles.paginationButton}>
          <FontAwesomeIcon icon={faArrowLeft} size="lg" style={{ marginRight: '8px', color: '#093D56'}} />
          <span>{Previous}</span>
        </button>
        <span style={styles.pageNumber}>{Page} 1 of 13</span>
        <button style={styles.paginationButton}>
          <span>{Next}</span>
          <FontAwesomeIcon icon={faArrowRight} size="lg" style={{ marginLeft: '8px', color: '#093D56' }}
          />
        </button>
      </div>
    </div>
  );
};

export default Users;
