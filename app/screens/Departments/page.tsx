"use client"

import React, { useState } from 'react';
import { Department, departments } from './types'; // Import types and mock data
import { styles } from '../../styles/Departments.styles'; // Import styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const Departments: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<Record<number, boolean>>({});

  // Toggle dropdown for a specific row
  const toggleDropdown = (id: number) => {
    setIsDropdownOpen((prevState) => ({
      ...prevState,
      [id]: !prevState[id], // Toggle the dropdown for the clicked row
    }));
  };
  return (
    <div>
      <h2 style={styles.heading}>Dashboard &gt; Departments</h2>
      <div style={styles.tableContainer}>
        <div style={styles.createContainer}>
          <button style={styles.createButton}>+ Create</button>
        </div>

        <table style={styles.table}>
          <thead style={styles.tableHeader}>
            <tr>
              <th style={styles.tableCell}>ID</th>
              <th style={styles.tableCell}>Name</th>
              <th style={styles.tableCell}>Email</th>
              <th style={styles.tableCell}>Phone</th>
              <th style={styles.tableCell}>Responsible</th>
              <th style={styles.tableCell}>Action</th>
            </tr>
          </thead>
          <tbody>
            {departments.map((dept: Department) => (
              <tr key={dept.id} style={styles.tableRow}>
                <td style={styles.tableCell}>#{dept.id}</td>
                <td style={styles.tableCell}>{dept.name}</td>
                <td style={styles.tableCell}>{dept.email}</td>
                <td style={styles.tableCell}>{dept.phone}</td>
                <td style={styles.tableCell}>
                  <div style={styles.responsibleContainer}>
                    <img src={dept.avatar} alt="profile-pic" style={styles.avatar}/>
                    {dept.responsible}
                  </div>
                  </td>
                <td style={styles.actionMenu}>
                <button
                    style={styles.menuButton}
                    onClick={() => toggleDropdown(dept.id)} // Toggle dropdown
                  >
                    ...
                  </button>
                  {isDropdownOpen[dept.id] && (
                    <div style={styles.dropdown}>
                      <button style={styles.editButton}>
                        <FontAwesomeIcon icon={faEdit} style={styles.icon} /> Edit
                      </button>
                      <button style={styles.deleteButton}>
                        <FontAwesomeIcon icon={faTrashAlt} style={styles.icon} /> Delete
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
          <span>Previous</span>
        </button>
        <span style={styles.pageNumber}>Page 1 of 2</span>
        <button style={styles.paginationButton}>
          <span>Next</span>
          <FontAwesomeIcon icon={faArrowRight} size="lg" style={{ marginLeft: '8px', color: '#093D56' }}
          />
        </button>
      </div>
    </div>
  );
};

export default Departments;