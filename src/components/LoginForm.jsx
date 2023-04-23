import { Box, Button, FormControl, Stack, TextField, Typography, styled } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from '../store/auth/thunks'
import { Controller, useForm } from 'react-hook-form'
import { readUrl } from '../store/url/thunks'

export const LoginForm = () => {
  const dispatch = useDispatch()
  const { token } = useSelector(state => state.auth)

  const { handleSubmit, control } = useForm({ defaultValues: { email: '', password: '' }, mode: 'onChange' })

  const CustomButton = styled(Button)({
    backgroundColor: '#007AFF',
    borderRadius: '6px',
    height: '42px',
    marginTop: '28px'
  })

  const onSubmit = ({ email, password }) => {
    dispatch(loginUser(email, password))
  }

  if (token.length > 1) {
    dispatch(readUrl(token))
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', rowGap: '18px', mt: 5, width: '320px' }}>
      <Typography variant='h6' style={{ fontWeight: 'bold', fontFamily: 'Montserrat' }}>
        Login
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl>
          <Stack spacing={3}>
            <Controller
              control={control}
              name='email'
              render={({ field: { value, onChange } }) => (
                <TextField label='Your email' value={value} name='email' required onChange={onChange} />
              )}

            />
            <Controller
              control={control}
              name='password'
              render={({ field: { value, onChange } }) => (
                <TextField type='password' label='Password' value={value} name='password' required onChange={onChange} />
              )}

            />
            <CustomButton variant='contained' type='submit' onClick={onSubmit}>Login</CustomButton>
          </Stack>
        </FormControl>
      </form>
    </Box>
  )
}
