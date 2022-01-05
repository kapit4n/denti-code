const styles = () => {
  return {
    drawer: {
      width: 100,
      flexShrint: 0,
    },
    activeLink: {
      listStyle: "none",  
      textDecoration: 'none',
      padding: '0.5rem',
      color: 'white',
      fontSize: '1.2rem'
    },
    currentLink: {
      background:' #80b3ff',
      textDecoration: 'none',
      padding: '0.5rem',
      color: 'black',
      fontSize: '1.2rem'
    },
    linksContainer: {
      display: 'flex'
    }
  }
}

export default styles;