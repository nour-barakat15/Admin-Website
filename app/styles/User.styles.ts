export const styles = {
    heading: {
      fontSize: '18px',
      fontWeight: 'bold',
      marginBottom: '5px',
      marginTop: '30px',
      color: 'black'
    },
    tabContainer: {
      display: 'flex',
      flexDirection: 'row' as 'row',
      marginBottom: '10px',

    },
    tabButton: {
      padding: '10px',
      cursor: 'pointer',
      background: 'none',
      color: 'black',
      textAlign: 'center' as const,
      fontSize: '16px'
    },
    activeTabButton: {
        padding: '10px 20px',
        borderBottom: '2px solid #f1722a',
        cursor: 'pointer',
        background: 'none',
        color: '#f1722a',
        fontWeight: 'bold',
        textAlign: 'center' as const,
      },
    activeStatus: {
      backgroundColor: '#e6f6e9',
      color: '#22d134',
      borderRadius: '15px',
      padding: '5px 10px',
      fontWeight: 'bold',
      fontSize: '12px',
    },
    inactiveStatus: {
        backgroundColor: '#f8d7da', // Light red for inactive
        color: '#dc3545', // Darker red text
        borderRadius: '15px',
        padding: '5px 10px',
        fontWeight: 'bold',
        fontSize: '12px',
    },
    createContainer: {
      marginLeft: 'auto',
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
      borderCollapse: 'collapse' as const,
      marginTop: '20px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
    tableHeader: {
      backgroundColor: '#f8f8f8',
    },
    tableRow: {
      borderBottom: '1px solid #e2e8f0',
    },
    tableCell: {
      padding: '12px 16px',
      textAlign: 'left' as const,
      color: '#4a5568',
    },
    statusCell: {
      padding: '12px 16px',
      textAlign: 'left' as const,
    },
    actionMenu: {
      position: 'relative' as const,
      textAlign: 'left' as const,
      padding: '12px 16px',
    },
    menuButton: {
      background: 'none',
      border: 'none',
      fontSize: '20px',
      cursor: 'pointer',
      color: '#4a5568',
    },
    dropdown: {
      position: 'absolute' as const,
      top: '100%',
      right: 0,
      backgroundColor: 'white',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      zIndex: 1,
      minWidth: '120px',
    },
    editButton: {
      padding: '10px 20px',
      backgroundColor: 'white',
      border: 'none',
      fontSize: '14px',
      color: '#4a5568',
      textAlign: 'left' as const,
      cursor: 'pointer',
      width: '100%',
    },
    icon: {
      marginRight: '8px', // Space between the icon and text
      fontSize: '16px',
    },
    deleteButton: {
      padding: '10px 20px',
      backgroundColor: 'white',
      border: 'none',
      fontSize: '14px',
      color: '#e53e3e',
      textAlign: 'left' as const,
      cursor: 'pointer',
      width: '100%',
    },
    pagination: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: '20px',
    },
    paginationButton: {
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
}