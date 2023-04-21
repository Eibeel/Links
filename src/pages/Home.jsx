import { Box, Button, Link, TextField, Typography, styled } from '@mui/material'
import { Logo } from '../components'
import { CardUrl } from './CardUrl'

export const Home = () => {
  const LogoutButton = styled(Button)({
    borderColor: '#007AFF',
    fontSize: '12px',
    height: '32px'
  })

  const AddButton = styled(Button)({
    backgroundColor: '#007AFF',
    height: '52px',
    marginTop: '20px'
  })

  return (
    <Box mt={4} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', padding: '0 16px' }}>
        <Logo h='62px' w='70px' />
        <LogoutButton variant='outlined'>
          <Link color='inherit' underline='none'>
            LOGOUT
          </Link>
        </LogoutButton>
      </Box>
      <Box mt='38px' sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <img src='https://i.pravatar.cc/68' style={{ maxHeight: '68px', maxWidth: '68px', borderRadius: '100%' }} />
        <Typography sx={{ fontSize: '20px', marginTop: '12px' }}>
          Hola mundo
        </Typography>
        <Typography mt='4px' sx={{ color: '#002239', fontWeight: '300', fontSize: '14px' }}>
          helloworld@test.com
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', rowGap: '18px', marginTop: '36px', width: '320px' }}>
        <TextField label='URL to save' />
        <TextField label='Name of URL' />
        <AddButton variant='contained'>ADD</AddButton>
      </Box>
      <CardUrl />
    </Box>
  )
}
