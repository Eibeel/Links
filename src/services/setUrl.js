
export const setUrl = async (token = '', name = '', url = '') => {
  const baseURL = 'http://ec2-54-160-84-172.compute-1.amazonaws.com:3000/links/add'
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: `{"name":"${name}","url":"${url}"}`
  }

  const resp = await fetch(baseURL, options)
  const data = await resp.json()
  return data
}
