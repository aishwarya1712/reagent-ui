
import React from 'react';
import Paper from '@mui/material/Paper';
import NewMessage from '../chat/NewMessage';
import Chat from '../chat/Chat';
import { Stack } from '@mui/material';

function Home() {
  return (
    <Paper elevation={10} sx={{ display: "flex", flexDirection:"column", justifyContent: "space-between", margin: "50px", height: "80vh", p:5}}>
        <Stack spacing={1}>
            <Chat role="user" messageContent={"Hi! I want to rent an apartment in Seattle with 3 bedrooms."}/>
            {/* Add support for rich text/html content */}
            <Chat role="agent" messageContent={"To assist you in finding a 3-bedroom apartment in Seattle, some additional information is needed."}/>
        </Stack>
        <div>
            <NewMessage/>
        </div>
    </Paper>
    );
}

export default Home;