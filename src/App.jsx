import { AppRouter } from './router/AppRouter'
import { Wrapper } from './components/Wrapper'
import './App.css'
/* import { loginUser, signInUser } from './store/url/thunks'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux' */

const App = () => {
  /*   const dispatch = useDispatch()
    useEffect(() => {
      dispatch(signInUser())
      dispatch(loginUser('hello@test.com', '123456'))
    }, []) */

  return (
    <Wrapper>
      <AppRouter />
    </Wrapper>
  )
}

export default App
