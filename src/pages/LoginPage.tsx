import React from 'react'
import { Button } from '@material-ui/core'

import { ReactComponent as Logo } from '../images/github.svg'

const LoginPage = () => {
  return (
    <>
      <Logo style={{ width: '50%', height: 'auto', display: 'block', margin: '2rem auto' }} />
      <Button variant="contained" color="primary" style={{ margin: 'auto' }}>Githubアカウントでログインする</Button>
    </>
  )
}

export default LoginPage
