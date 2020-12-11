import React from 'react'
import { Box } from '@material-ui/core'

import LoginButton from './LoginButton'
import Title from './Atoms/Title'

const Header = () => {
  return (
    <>
      <Box display="flex">
        <Title />
        <LoginButton />
      </Box>
    </>
  )
}

export default Header
