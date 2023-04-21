import { Box, Divider, IconButton, Paper, Stack, Typography, styled } from '@mui/material'
import DeleteOutlined from '@mui/icons-material/DeleteOutlined'

export const CardUrl = () => {
  const Item = styled(Paper)({
    height: '96px',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  })

  return (
    <Box sx={{ width: '320px', marginTop: '42px' }}>
      <Stack divider={<Divider />}>
        <Item elevation={0}>
          <Stack spacing={1}>
            <Typography variant='subtitle2' color='#007AFF' sx={{ fontSize: '16px' }}>https://eibeldev.vercel.app</Typography>
            <Typography variant='body2'>Lorem ipsun dolor is simply</Typography>
          </Stack>
          <IconButton>
            <DeleteOutlined sx={{ color: '#FF5C6C' }} />
          </IconButton>
        </Item>
      </Stack>
    </Box>
  )
}
