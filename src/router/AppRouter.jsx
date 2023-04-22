import { useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Home, LoginPage, RegisterPage } from '../pages'

export const AppRouter = () => {
  const { status } = useSelector(state => state.auth)
  const navigate = useNavigate()

  useEffect(() => {
    if (status === 'success') {
      navigate('/home')
    } else {
      navigate('/')
    }
  }, [status])

  return (
    <Routes>

      <Route path='/*' element={<LoginPage />} />
      <Route path='/register' element={<RegisterPage />} />
      <Route path='/home' element={<Home />} />

    </Routes>
  )
}
