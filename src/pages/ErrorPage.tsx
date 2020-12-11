import React from 'react'
import { Typography, Button } from '@material-ui/core'
import { Link } from 'react-router-dom'

const ErrorPage = () => (
  <>
    <img alt="404image" src={`${process.env.PUBLIC_URL}/404error.png`} style={{ width: '50%', height: 'auto' }} />
    <Typography variant="h1">ページが見つかりません</Typography>
    <Link to="/" style={{ textDecoration: 'none' }}>
      <Button variant="contained" color="primary">トップページに戻る</Button>
    </Link>
  </>
)

export default ErrorPage
