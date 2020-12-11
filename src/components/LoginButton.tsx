import React from 'react'
import { Button } from '@material-ui/core'
import { githubSignIn, googleSignIn,user,getAllUser } from '../firebase'

const LoginButton = () => {
  return (
    <>
      <Button variant="contained" color="primary" style={{ margin: 'auto' }} onClick={() => githubSignIn()}
      >Githubアカウントでログインする</Button>
      <Button variant="contained" color="primary" style={{ margin: 'auto' }} onClick={() => googleSignIn()}
      >Goocleアカウントでログインする</Button>
      <Button variant="contained" color="primary" style={{ margin: 'auto' }} onClick={() => getAllUser()}
      >ユーザーを取得数る</Button>
    </>
  )
}
export default LoginButton
