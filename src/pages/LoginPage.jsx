import { Box, Button, Link, styled } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import { LoginForm, Logo } from '../components'

export const LoginPage = () => {
  const SignButton = styled(Button)({
    borderColor: '#007AFF',
    fontSize: '12px',
    height: '32px'
  })

  return (
    <Box mt={4}>
      <Box textAlign='end'>
        <SignButton variant='outlined'>
          <Link color='inherit' underline='none' as={RouterLink} to='/register'>SIGNUP</Link>
        </SignButton>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 10 }}>
        <Logo />
        <LoginForm />
      </Box>
    </Box>
  )
}
