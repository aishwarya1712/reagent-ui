import React from "react"
import Avatar from '@mui/material/Avatar';
import { Stack } from "@mui/material";
import AdbIcon from '@mui/icons-material/Adb';
import ReactMarkdown from "react-markdown";

const Chat = ({role="user", messageContent}) => {
      
    return (
        <Stack direction={role === "agent" ? "row-reverse": "row"} spacing={1} alignItems="center" sx={{ alignSelf: role === "agent" ? "flex-start" : "flex-end"}}>
            <div style={{background: "rgb(244 244 244)", padding: "16px", borderRadius: "1.5rem"}}>
            <ReactMarkdown>{messageContent}</ReactMarkdown>
            </div>
            {
            role==="agent" ? 
                <Avatar>
                    <AdbIcon />
                </Avatar> :
                <Avatar />
            }
        </Stack>
    )
}

export default Chat