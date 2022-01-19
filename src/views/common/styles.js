const styles = () => {
  return {
    list: {
      border: '1px solid #a8a4a3',
      marginTop: '1rem',
    },
    listHeaderActions: {
      '& a': {
        textDecoration: 'none',
        color: 'white'
      }
    },
    listHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      margin: 0,
      marginBottom: '1rem'
    }
  }
}

export default styles;