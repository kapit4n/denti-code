const styles = () => {
  return {
    actionButton: {
      color: "white",

      '& a': {
        textDecoration: 'none',
        color: 'white'
      }
    },
    content: {
      display: 'grid',
      gridTemplateColumns: 'auto 3fr',
      columnGap: '1rem',
      rowGap: '1rem',
    },
    successMessage: {
      color: 'green'
    },
    errorMessage: {
      color: 'red'
    }
  }
}

export default styles;