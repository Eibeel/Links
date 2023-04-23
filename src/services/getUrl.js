
export const getUrl = async (token = '') => {
  const baseURL = 'http://ec2-54-160-84-172.compute-1.amazonaws.com:3000/links'
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    }
  }

  const resp = await fetch(baseURL, options)
  const data = await resp.json()
  return data
}
