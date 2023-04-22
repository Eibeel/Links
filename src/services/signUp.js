
export const signUp = async (name = '', email = '', password = '') => {
  const baseURL = 'http://ec2-54-160-84-172.compute-1.amazonaws.com:3000/auth/singin'
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: `{
      "name":"${name}",
      "email":"${email}",
      "password":"${password}"
    }`
  }

  const resp = await fetch(baseURL, options)
  const data = await resp.json()
  return data
}
