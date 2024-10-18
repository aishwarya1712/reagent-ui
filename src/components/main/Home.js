
import React from 'react';
import Paper from '@mui/material/Paper';
import NewMessage from '../chat/NewMessage';
import Chat from '../chat/Chat';
import { Stack } from '@mui/material';

function Home() {
    let markdownText = `
To assist you in finding a 3-bedroom apartment for rent in Seattle, the following information is needed:

1. **Budget**: What is your price range for monthly rent?
2. **Preferred Neighborhoods**: Are there specific neighborhoods in Seattle you are interested in?
3. **Amenities**: Are there any specific amenities you are looking for (e.g., parking, laundry, pet-friendly)?
4. **Move-in Date**: When do you plan to move in?
5. **Lease Duration**: How long do you intend to rent the apartment (e.g., 6 months, 1 year)?
6. **Contact Information**: How would you like to be contacted for potential listings (e.g., email, phone)?

Once this information is gathered, we can proceed to search for available listings.
`
    
  return (
    <Paper elevation={10} sx={{background:"", display: "flex", flexDirection:"column", justifyContent: "space-between", margin: "50px", height: "75vh", p:5}}>
        <Stack spacing={1} sx={{height: "70vh", overflowY: "scroll", pb: 1}}>
            <Chat role="user" messageContent={"Hi! I want to rent an apartment in Seattle with 3 bedrooms."}/>
            {/* Add support for rich text/html content */}
            <Chat role="agent" messageContent={markdownText}/>
            <Chat role="agent" messageContent={markdownText}/>
            <Chat role="agent" messageContent={markdownText}/>
            <Chat role="user" messageContent={"Hi! I want to rent an apartment in Seattle with 3 bedrooms."}/>
        </Stack>
        <div>
            <NewMessage/>
        </div>
    </Paper>
    );
}

export default Home;