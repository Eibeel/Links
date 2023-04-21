
export const signUp = ({ name = '', email = '', password = '' }) => {
  const baseURL = 'http://ec2-54-160-84-172.compute-1.amazonaws.com:3000'

  fetch(baseURL, {
    method: 'POST',
    body: {
      name,
      email,
      password,
      image: ''
    }
  })
    .then(resp => resp.json())
    .then(data => console.log(data))
}
