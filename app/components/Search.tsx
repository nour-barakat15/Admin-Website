import React from 'react';
import Image from 'next/image';
import { styles } from '../styles/search.component';

interface SearchFieldProps {
  placeholder: string;
}

const SearchField: React.FC<SearchFieldProps> = ({ placeholder}) => {
  return (
    <div style={styles.searchContainer}>
      <Image
        src="https://th.bing.com/th/id/OIP._RTO9yp1xH5aQA0vS7fpHAHaHW?rs=1&pid=ImgDetMain"
        alt="Search Icon"
        style={styles.icon}
        width={20}
        height={20}
      />
      <input
        type="text"
        style={styles.searchInput}
        placeholder={placeholder}
      />
    </div>
  );
};

export default SearchField;
