import React from 'react'
import { Avatar, Button } from '@material-ui/core'
const MyPage = () => {

  return (
    <div style={{ position: 'relative' }}>
      <h3>name</h3>
      <Avatar alt="user-icon" variant="circular" src="" style={{ width: '15%', height: 'auto', position: 'absolute', top: '10%', left: '5%' }} />
      <div style={{ display: 'flex', flexDirection: 'column', width: '75%', margin: '0 0 0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '10%' }}>
          <h3>acountname:hogehoge</h3>
          <Button variant="contained" color="primary" style={{ height: 'auto' }}>ページにいく</Button>
        </div>
        <img src="https://grass-graph.moshimo.works/images/cawauchi6204.png?background=none" style={{ width: "100%", margin: '0 0 0 auto', display: 'block' }} />
      </div>
    </div>
  );
}

export default MyPage
