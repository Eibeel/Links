import { Container } from '@mui/material'

export const Wrapper = ({ children }) => {
  return (
    <Container maxWidth='sm' sx={{ display: 'flex', flexDirection: 'column', height: 'auto' }}>
      {children}
    </Container>
  )
}
