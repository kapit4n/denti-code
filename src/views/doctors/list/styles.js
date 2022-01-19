import commonStyles from '../../common/styles'

const styles = () => {
  return {
    doctorList: {
      width: '100%',
      maxWidth: '50rem',
    },
    list: {
      ...commonStyles().list,
    },
    listHeader: {
      ...commonStyles().listHeader,
    },
    listHeaderActions: {
      ...commonStyles().listHeaderActions,
    },
  }
}

export default styles;