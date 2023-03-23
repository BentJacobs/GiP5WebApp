import './Header.css';
import {Box} from "@mui/material";
import React from "react";


function Header(){
    return (
        <Box sx={{ width: '100%', height: 100, bgcolor: '#1B263B' }}> 
        <h1>Welcome back, user!</h1>
        </Box>
    )
}
export default Header;