import { Box, Button, Link, styled } from '@mui/material'
import { Logo } from '../components'

export const Home = () => {
  const SignButton = styled(Button)({
    borderColor: '#007AFF',
    fontSize: '12px',
    height: '32px'
  })

  return (
    <Box mt={4}>
      <Box sx={{ display: 'flex', alignItems: 'center', border: 'dashed 1px', justifyContent: 'space-between' }}>
        <Logo />
        <SignButton variant='outlined'>
          <Link color='inherit' underline='none'>
            LOGOUT
          </Link>
        </SignButton>
      </Box>
    </Box>
  )
}
