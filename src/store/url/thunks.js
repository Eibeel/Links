import { login } from '../../services/login'

export const loginUser = () => {
  return async (dispatch) => {
    const result = await login()

    console.log(result)
  }
}
