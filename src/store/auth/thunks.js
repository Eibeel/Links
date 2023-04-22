import { login, signUp } from '../../services'
import { setUser } from './authSlice'

export const loginUser = (emai = '', password = '') => {
  return async (dispatch) => {
    const data = await login(emai, password)

    if (data?.message === 'success') {
      const { token, data: { id, email, name } } = data
      dispatch(setUser({ email, token, name, id }))
    }
  }
}

export const signInUser = ({ name = '', email = '', password = '' }) => {
  return async (dispatch) => {
    const data = await signUp(name, email, password)

    if (data?.message) {
      const { data: { name, email } } = data
      dispatch(setUser({ email, name }))
    }
  }
}
