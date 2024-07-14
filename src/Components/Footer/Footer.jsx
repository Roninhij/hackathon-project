import React from 'react'
import { Box, Typography, Link, Container } from '@mui/material'
import { useTheme } from '@mui/material/styles'

const Footer = () => {
  const theme = useTheme()
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: theme.palette.primary.dark,
        color: theme.palette.common.white,
        py: 3,
        mt: 'auto',
        width: '100%',
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="body1" align="center">
          &copy; {new Date().getFullYear()} Be my Guest. All rights reserved.
        </Typography>
      </Container>
      {/*  */}
    </Box>
  )
}

export default Footer
