export const styles = {
    heading: {
      fontSize: '18px',
      fontWeight: 'bold',
      marginBottom: '5px',
      marginTop: '80px',
      color: 'black'
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
      padding: '12px 16px',
      textAlign: 'left' as const,
    },
    menuButton: {
      background: 'none',
      border: 'none',
      fontSize: '20px',
      cursor: 'pointer',
      color: '#4a5568',
    },
    dropdown: {
      display: 'block',
      position: 'absolute' as const,
      top: '275px',
      right: '5px',
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
    avatar: {
      height: 25,
      width: 25,
      borderRadius: 12.5,
    },
    responsibleContainer: {
      display: 'flex',
      flexDirection: 'row' as 'row',
      gap: 20
    }
  };