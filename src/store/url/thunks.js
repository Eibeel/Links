import { setUrl } from '../../services/setUrl'
import { createUrls } from './urlSlice'
import { getUrl } from '../../services/getUrl'

export const createUrl = (token = '', name = '', url = '') => {
  return async () => {
    await setUrl(token, name, url)
  }
}

export const readUrl = (token = '') => {
  return async (dispatch) => {
    const result = await getUrl(token)

    if (result?.message === 'success') {
      const { data } = result
      dispatch(createUrls({ urls: data }))
    }
  }
}

export const deleteUrl = (url) => {
  return async (dispatch) => {
    dispatch(createUrls({ urls: url }))
  }
}
