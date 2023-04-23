import { Box, Button, Link, Typography, styled } from '@mui/material'
import { Logo } from '../components'
import { CardUrl } from './CardUrl'
import { useDispatch, useSelector } from 'react-redux'
import { onLogout } from '../store/auth/thunks'
import { UrlForm } from '../components/UrlForm'

export const Home = () => {
  const { email, name } = useSelector(state => state.auth)
  const dispatch = useDispatch()

  const LogoutButton = styled(Button)({
    borderColor: '#007AFF',
    fontSize: '12px',
    height: '32px'
  })

  const handleLogout = () => {
    dispatch(onLogout())
  }

  return (
    <Box mt={4} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', padding: '0 16px' }}>
        <Logo h='62px' w='70px' />
        <LogoutButton variant='outlined'>
          <Link color='inherit' underline='none' onClick={handleLogout}>
            LOGOUT
          </Link>
        </LogoutButton>
      </Box>
      <Box mt='38px' sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <img src='https://i.pravatar.cc/68' style={{ maxHeight: '68px', maxWidth: '68px', borderRadius: '100%' }} />
        <Typography sx={{ fontSize: '20px', marginTop: '12px' }}>
          {name}
        </Typography>
        <Typography mt='4px' sx={{ color: '#002239', fontWeight: '300', fontSize: '14px' }}>
          {email}
        </Typography>
      </Box>
      <UrlForm />
      <CardUrl />
    </Box>
  )
}
