import { Box, Button, Stack, Typography, styled } from '@mui/material'
import { FormContainer, TextFieldElement } from 'react-hook-form-mui'

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
      <FormContainer defaultValues={{ email: '', password: '' }}>
        <Stack spacing={3}>
          <TextFieldElement label='Your email' name='email' required />
          <TextFieldElement label='Password' name='password' required />
          <CustomButton variant='contained' type='submit'>Login</CustomButton>
        </Stack>
      </FormContainer>
    </Box>
  )
}
