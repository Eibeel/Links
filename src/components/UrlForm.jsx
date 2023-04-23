import { useDispatch, useSelector } from 'react-redux'
import { Button, FormControl, Stack, TextField, styled } from '@mui/material'
import { Controller, useForm } from 'react-hook-form'
import { createUrl, readUrl } from '../store/url/thunks'

export const UrlForm = () => {
  const dispatch = useDispatch()
  const { token } = useSelector(state => state.auth)
  const { handleSubmit, control } = useForm({ defaultValues: { url: '', name: '' }, mode: 'onChange' })

  const AddButton = styled(Button)({
    backgroundColor: '#007AFF',
    height: '52px',
    marginTop: '20px'
  })

  const onSubmit = ({ name, url }) => {
    if (!url && !name) {
      return ''
    } else {
      dispatch(createUrl(token, name, url))
      dispatch(readUrl(token))
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl required>
        <Stack spacing={4} mt='36px'>
          <Controller
            control={control}
            name='url'
            render={({ field: { value, onChange } }) => (
              <TextField label='URL to save' name='url' type='url' value={value} onChange={onChange} autoComplete='off' required />
            )}
          />
          <Controller
            control={control}
            name='name'
            render={({ field: { value, onChange } }) => (
              <TextField label='Name of URL' name='name' value={value} onChange={onChange} autoComplete='off' required />
            )}
          />
          <AddButton variant='contained' type='submit' onClick={onSubmit}>ADD</AddButton>
        </Stack>
      </FormControl>
    </form>
  )
}
