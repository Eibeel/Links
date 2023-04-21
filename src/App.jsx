import { AppRouter } from './router/AppRouter'
import { Wrapper } from './components/Wrapper'
import './App.css'
import { useEffect } from 'react'

const App = () => {
  useEffect(() => {
    const baseURL = 'http://ec2-54-160-84-172.compute-1.amazonaws.com:3000/auth/login'

    fetch(baseURL, {
      method: 'POST',
      body: {
        email: 'hello@test.com',
        password: '123456'
      }
    })
      .then(resp => resp.json())
      .then(data => console.log(data))
      .catch(error => console.log(error))
  }, [])

  return (
    <Wrapper>
      <AppRouter />
    </Wrapper>
  )
}

export default App
