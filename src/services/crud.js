import axios from 'axios'

export async function deleteAction({ entity, id }) {
  let failed = false;

  try {
    await axios.delete(`${process.env.REACT_APP_API_PATH}/${entity}/${id}`)
  } catch (error) {
    failed = true
    console.error(error)
  }

  return { failed, id }
}
