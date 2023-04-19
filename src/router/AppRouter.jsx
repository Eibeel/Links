import { Route, Routes } from 'react-router-dom'
import { Home, LoginPage, RegisterPage } from '../pages'

export const AppRouter = () => {
  return (
    <Routes>

      <Route path='/*' element={<LoginPage />} />
      <Route path='/register' element={<RegisterPage />} />
      <Route path='/home' element={<Home />} />

    </Routes>
  )
}
