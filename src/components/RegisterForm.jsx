import { Box, Button, FormControl, Stack, TextField, Typography, styled } from '@mui/material'
import { Controller, useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { signInUser } from '../store/auth/thunks'

export const RegisterForm = () => {
  const dispatch = useDispatch()
  const { handleSubmit, control } = useForm({ defaultValues: { name: '', email: '', password: '' }, mode: 'onChange' })

  const CustomButton = styled(Button)({
    backgroundColor: '#007AFF',
    borderRadius: '6px',
    height: '42px',
    marginTop: '28px'
  })

  const CaptionText = styled(Typography)({
    color: '#007AFF'
  })

  const onSubmit = (name, email, password) => {
    dispatch(signInUser(name, email, password))
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', rowGap: '18px', mt: 5, width: '320px' }}>
      <Typography variant='h6' style={{ fontWeight: 'bold', fontFamily: 'Montserrat' }}>
        Sign Up
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl>
          <Stack spacing={3}>
            <Controller
              control={control}
              name='name'
              render={({ field: { value, onChange } }) => (
                <TextField label='Full name' value={value} id='name' name='name' onChange={onChange} required />
              )}
            />
            <Controller
              control={control}
              name='email'
              render={({ field: { value, onChange } }) => (
                <TextField label='Your email' value={value} id='email' type='email' name='email' onChange={onChange} required />
              )}
            />
            <Controller
              control={control}
              name='password'
              render={({ field: { value, onChange } }) => (
                <TextField label='Password' value={value} id='password' name='password' type='password' onChange={onChange} required />
              )}
            />
            <CustomButton variant='contained' type='submit' onClick={onSubmit}>Sign up</CustomButton>
          </Stack>
        </FormControl>
      </form>
      <Typography variant='caption' align='center'>
        By creating account You agree to the <CaptionText variant='caption'>Terms of use</CaptionText> and <CaptionText variant='caption'>Privacy Policy</CaptionText>
      </Typography>
    </Box>
  )
}
