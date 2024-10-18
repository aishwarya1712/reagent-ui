import React from "react";
import { useState, useEffect } from "react";
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { IconButton } from "@mui/material";

const NewMessage = () => {
    const [message, setMessage] = useState("")

    useEffect(() => {
        console.log("message changed! ", message)
    }, [message])

    const sendMessage = () => {
        // call back-end API
        console.log("Sending message: ", message)
        setMessage("")
    }
    return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
             <FormControl fullWidth sx={{width: "100vw"}}>
                <TextField
                
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                    slotProps={{
                        input: {
                          startAdornment: <InputAdornment position="start"><IconButton><AttachFileIcon/></IconButton></InputAdornment>,
                          endAdornment: <InputAdornment onClick={() => sendMessage()} position="start"><IconButton><ArrowUpwardIcon/></IconButton></InputAdornment>
                        },
                      }}
                    id="outlined-chat-input"
                    placeholder="Message REAgent"
                    autoComplete="current-password"
                    
                    />
        </FormControl>
        </Box>
    )
}

export default NewMessage