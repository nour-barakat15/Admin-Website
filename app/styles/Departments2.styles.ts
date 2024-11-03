export const styles = {
    heading: {
      fontSize: '16px',
      fontWeight: 'bold',
      marginBottom: '5px',
      marginTop: '30px',
      color: 'black'
    },
    maincontainer: {
        backgroundColor: 'white',
        padding: '20px',
        border: 'none',
        borderRadius: '10px',
    },
    formSection: {
      display: 'flex',
      flexDirection: 'column' as 'column',
      gap: '8px',
      padding: '5px',
      fontFamily: 'Arial, sans-serif',
      fontSize: '16px',
      color: '#093D56', // Darker gray for text
    },
    input: {
      padding: '8px',
      borderRadius: '5px',
      border: '1px solid #093D56',
      width: '475px',
      height: '35px'
    },
    textarea: {
      padding: '8px',
      borderRadius: '5px',
      border: '1px solid #093D56',
      width: '475px',
      height: '125px'
    },
    dropdownContainer: {
      display: 'flex',
      alignItems: 'center',
      position: 'relative' as 'relative',
      width: '475px'
    },
    option: {
      display: 'flex',
      alignItems: 'center',
      padding: '5px',
      cursor: 'pointer',
    },
    optionImage: {
      width: '24px',
      height: '24px',
      borderRadius: '12px',
      marginRight: '10px',
    },
    singleValue: {
      display: 'flex',
      alignItems: 'center',
      transform: 'translateY(-18px)'
    },
    singleValueImage: {
      width: '20px',
      height: '20px',
      borderRadius: '10px',
      marginRight: '8px',
    },
    servicesSection: {
      marginLeft: '225px'
    },
    servicesHeading: {
        fontSize: '18px',
        color: '#093D56'
    },
    serviceCard: {
        display: 'flex',
        flexDirection: 'row' as 'row',
        alignItems: 'center',
        gap: '10px',
        border: '1px solid #093D56',
        borderRadius: '10px',
        padding: '10px',
        marginBottom: '10px',
        width: '500px'
    },
    serviceImage: {
        width: '40px',
        height: '40px',
        backgroundColor: '#eee',
        borderRadius: '5px',
    },
    serviceTitle: {
        fontWeight: 'bold' as 'bold',
        color: 'black',
        fontSize: '14px'
    },
    serviceDate: {
        fontSize: '12px',
        color: '#777',
    },
    editButton: {
        backgroundColor: '#FFD2B2',
        border: 'none',
        borderRadius: '20px',
        padding: '5px 10px',
        cursor: 'pointer',
        color: '#FF6B35',
        marginLeft: 'auto',
        width: '75px',
        fontSize: '14px'
    },
    saveContainer: {
        justifyContent: 'center',
        marginTop: '20px',
        marginLeft: '500px',
    },
    saveButton: {
        backgroundColor: '#FF6B35',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        padding: '10px 20px',
        fontSize: '20px',
        cursor: 'pointer',
        fontWeight: 'bold' as 'bold',
        width: '200px',
    },
}