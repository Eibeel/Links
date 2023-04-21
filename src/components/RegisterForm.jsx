import { Box, Button, Stack, Typography, styled } from '@mui/material'
import { FormContainer, TextFieldElement } from 'react-hook-form-mui'

export const RegisterForm = () => {
  const CustomButton = styled(Button)({
    backgroundColor: '#007AFF',
    borderRadius: '6px',
    height: '42px',
    marginTop: '28px'
  })

  const CaptionText = styled(Typography)({
    color: '#007AFF'
  })

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', rowGap: '18px', mt: 5, width: '320px' }}>
      <Typography variant='h6' style={{ fontWeight: 'bold', fontFamily: 'Montserrat' }}>
        Sign Up
      </Typography>
      <FormContainer defaultValues={{ email: '', name: '', password: '' }}>
        <Stack spacing={3}>
          <TextFieldElement label='Full name' name='name' required />
          <TextFieldElement label='Your email' type='email' name='email' required />
          <TextFieldElement label='Password' type='password' name='password' required />
          <CustomButton variant='contained' type='submit'>Sign up</CustomButton>
        </Stack>
      </FormContainer>
      <Typography variant='caption' align='center'>
        By creating account You agree to the <CaptionText variant='caption'>Terms of use</CaptionText> and <CaptionText variant='caption'>Privacy Policy</CaptionText>
      </Typography>
    </Box>
  )
}
