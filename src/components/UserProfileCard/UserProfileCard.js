import React, {useState} from 'react'
import { Box, Avatar, Typography, Card } from '@mui/material'
function UserProfileCard({user, balance=100}) {
    return (
        <Card sx={{ width: '20em', height: '25em', p: 2,  boxShadow:'rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px' }}>
            <Box sx={{  height: '100%', display: 'flex', flexDirection: 'column', alignItems: "center" }}>
                <Box sx={{ border: '2px solid black', m: 0.5, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Box>
                        <Avatar alt={`${user.FirstName}`} src="/static/images/avatar/1.jpg" />
                    </Box>
                    <Box>
                        <Typography>{`${user.FirstName} ${user.LastName}`}</Typography>
                    </Box>
                </Box >
                <Box sx={{ border: '2px solid black', m: 0.5, maxWidth:'75%' }}>
                    <Box>
                        <Typography>
                            Account balance: ${balance}
                        </Typography>
                        <Typography>
                            Most recent transaction: 
                            <br></br>
                            transfer to Enda Pina: $50
                        </Typography>
                    </Box>
                </Box>
                <Box sx={{ border: '2px solid black', m: 0.5, justifySelf:'end' }}>
                    footer
                </Box>
            </Box>
        </Card>
    )
}

export default UserProfileCard;