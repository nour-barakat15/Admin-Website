export const styles = {
  searchContainer: {
    display: 'flex',
    flexDirection: 'row' as const,
    alignItems: 'center' as const,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 20,
    padding: 8,
    backgroundColor: '#FFF',
    marginTop: 0,
    marginLeft: 8,
    width: '35%',
  },
  icon: {
    width: 25,
    height: 20,
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: 'grey',
    marginLeft: 8,
    border: 'none',
    outline: 'none',
  },
};
