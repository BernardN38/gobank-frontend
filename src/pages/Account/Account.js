import React, {useEffect, useState} from 'react';
import { serverUrl } from '../../config';
import {Box} from '@mui/material'
import UserProfileCard from '../../components/UserProfileCard/UserProfileCard';
function Account({userId=1}) {
    const[user,setUser] = useState({})
    useEffect(() => {
        fetch(`${serverUrl}/users/${userId}`)
        .then((response) => response.json())
        .then((data) => setUser(data));
      },[]);
  return (
    <Box sx={{ display:'flex',justifyContent:'center', p:1}}>
        <UserProfileCard user={user}/>
    </Box>
  )
}

export default Account