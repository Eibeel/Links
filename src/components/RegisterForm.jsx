import { Box, Button, TextField, Typography, styled } from '@mui/material'
import React from 'react'

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
      <TextField label='Full name' />
      <TextField label='Your email' />
      <TextField label='Password' />
      <CustomButton variant='contained'>Sign up</CustomButton>
      <Typography variant='caption' align='center'>
        By creating account You agree to the <CaptionText variant='caption'>Terms of use</CaptionText> and <CaptionText variant='caption'>Privacy Policy</CaptionText>
      </Typography>
    </Box>
  )
}
