export const styles = {
    headerContainer: {
        position: 'absolute' as const,
        top: 0,
        width: '1240px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 20px',
        backgroundColor: 'white',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Subtle shadow for elevation
    },
    actions: {
      display: 'flex',
      alignItems: 'center',
      gap: '15px', // Space between icons
    },
    actionIcon: {
      fontSize: '20px',
      color: '#4a5568', // Gray icon color
      cursor: 'pointer',
    },
    profileIcon: {
      fontSize: '40px', // Larger size for profile icon
      color: '#4a5568',
      cursor: 'pointer',
    },
  };