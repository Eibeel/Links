import { Box, Button, TextField, Typography, styled } from '@mui/material'

export const LoginForm = () => {
  const CustomButton = styled(Button)({
    backgroundColor: '#007AFF',
    borderRadius: '6px',
    height: '42px',
    marginTop: '28px'
  })

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', rowGap: '18px', mt: 5, width: '320px' }}>
      <Typography variant='h6' style={{ fontWeight: 'bold', fontFamily: 'Montserrat' }}>
        Login
      </Typography>
      <TextField label='Your email' />
      <TextField fullWidth label='Password' />
      <CustomButton variant='contained'>Login</CustomButton>
    </Box>
  )
}
