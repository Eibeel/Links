import { useDispatch, useSelector } from 'react-redux'
import { Box, Divider, IconButton, Paper, Stack, Typography, styled } from '@mui/material'
import DeleteOutlined from '@mui/icons-material/DeleteOutlined'
import { deleteUrl } from '../store/url/thunks'

export const CardUrl = () => {
  const { urls } = useSelector(state => state.url)
  const dispatch = useDispatch()

  const Item = styled(Paper)({
    padding: '28px 0',
    flexWrap: 'wrap',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  })

  const handleDelete = (id) => {
    const updateUrl = urls.filter(url => url.id !== id)
    dispatch(deleteUrl(updateUrl))
  }

  return (
    <Box sx={{ width: '320px', margin: '42px 0' }}>
      <Stack divider={<Divider />} flexDirection='column-reverse'>
        {
          urls?.map(url => (
            <Box key={url.id}>
              <Item elevation={0}>
                <Stack sx={{ width: '260px', overflow: 'hidden', rowGap: '8px', paddingLeft: '8px', textOverflow: 'ellipsis' }}>
                  <Typography variant='subtitle2' color='#007AFF' sx={{ fontSize: '16px' }}>
                    {url.url}
                  </Typography>
                  <Typography variant='body2'>
                    {url.name}
                  </Typography>
                </Stack>
                <IconButton onClick={() => handleDelete(url.id)}>
                  <DeleteOutlined sx={{ color: '#FF5C6C' }} />
                </IconButton>
              </Item>
            </Box>
          ))
        }
      </Stack>
    </Box>
  )
}
