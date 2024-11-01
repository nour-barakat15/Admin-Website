import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faCommentDots, faUserCircle } from '@fortawesome/free-solid-svg-icons'; // User profile icon
import SearchField from '../components/Search'
import { styles } from '../styles/header.component'

const Header: React.FC = () => {
  return (
    <div style={styles.headerContainer}>
      {/* Search Bar */}
      <SearchField placeholder="Search..." />

      {/* Action Icons */}
      <div style={styles.actions}>
        <FontAwesomeIcon icon={faMoon} style={styles.actionIcon} />
        <FontAwesomeIcon icon={faCommentDots} style={styles.actionIcon} />
        <FontAwesomeIcon icon={faUserCircle} style={styles.profileIcon} /> {/* Profile icon */}
      </div>
    </div>
  );
};

export default Header;