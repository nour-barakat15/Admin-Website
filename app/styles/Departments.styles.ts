export const styles = {
    container: {
      height: '100%',
      width: '100%',
      color: 'black', // Dark gray text color
      padding: '10px',
    },
    heading: {
      fontSize: '24px',
      fontWeight: 'bold',
      marginBottom: '5px',
      marginTop: '45px'
    },
    searchIcon: {
        width: '20px',
        height: '20px',
        position: 'absolute' as const,
        left: '10px',
        top: '50%',
        transform: 'translateY(-50%)',
        pointerEvents: 'none' as 'none', // Prevents the icon from blocking input clicks
    },
    searchContainer: {
        position: 'relative' as const,
        width: '300px',
    },
    searchBar: {
      padding: '8px',
      width: '300px',
      border: '1px solid #ccc',
      borderRadius: '25px',
    },
    createContainer: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    createButton: {
      backgroundColor: '#D1F0FA',
      color: '#4B88D9',
      border: 'none',
      padding: '10px 20px',
      borderRadius: '5px',
      cursor: 'pointer',
    },
    tableContainer: {
        height: '500px',
        width: '100%',
        backgroundColor: 'white',
        padding: '20px',
        border: 'none',
        borderRadius: '10px'
    },
    table: {
      width: '100%',
      backgroundColor: '#ffffff',
      borderCollapse: 'collapse' as const,
      marginTop: '20px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
    tableHeader: {
      backgroundColor: '#e2e8f0', // Light gray header
    },
    tableRow: {
      borderBottom: '1px solid #e2e8f0',
    },
    tableCell: {
      padding: '12px 16px',
      textAlign: 'left' as const,
      color: '#4a5568', // Darker gray for text
    },
    actionMenu: {
      position: 'relative' as const,
    },
    menuButton: {
      background: 'none',
      border: 'none',
      fontSize: '20px',
      cursor: 'pointer',
    },
    dropdown: {
      display: 'block',
      position: 'absolute' as const,
      top: '35px',
      right: '0',
      backgroundColor: 'white',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      zIndex: 1,
      overflow: 'hidden',
      minWidth: '120px',
    },
    icon: {
      marginRight: '8px', // Space between the icon and text
      fontSize: '16px',
    },
    editButton: {
      display: 'block',
      width: '100%',
      padding: '12px 16px',
      backgroundColor: 'white',
      border: 'none',
      textAlign: 'left' as const,
      fontSize: '14px',
      color: '#4a5568', // Dark gray
      cursor: 'pointer',
      transition: 'background-color 0.2s ease',
    },
    deleteButton: {
      display: 'block',
      width: '100%',
      padding: '12px 16px',
      backgroundColor: 'white',
      border: 'none',
      textAlign: 'left' as const,
      fontSize: '14px',
      color: '#e53e3e', // Red color for delete button
      cursor: 'pointer',
    },
    pagination: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '10px',
      marginTop: '20px'
    },
    paginationButton: {
      width: '135px',
      padding: '10px 20px',
      border: '2px solid #093D56',
      backgroundColor: '#f7fafc',
      color: '#093D56',
      borderRadius: '5px',
      cursor: 'pointer',
    },
    pageNumber: {
      color: '#093D56',
    },
  };