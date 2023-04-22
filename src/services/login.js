
export const login = async (email = '', password = '') => {
  const baseURL = 'http://ec2-54-160-84-172.compute-1.amazonaws.com:3000/auth/login'
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: `{"email":"${email}","password":"${password}"}`
  }

  try {
    const response = await fetch(baseURL, options)
    const data = await response.json()
    return data
  } catch (err) {
    console.error(err)
    throw err
  }
}
