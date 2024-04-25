import React from 'react';
import Box from '@mui/material/Box';
import { IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
    return (
        <Box bgcolor={"#000"} padding={5} display="flex" flexDirection="column" alignItems="center" width={"100%"} height={"20vh"} >

            {/* Top Section: Search Input */}
            <Box display="flex" alignItems="center" width={"100%"} marginBottom={2}>
                <Box width={"30%"}>
                    <h3 style={{ color: "white" }}>Get The Rolling updates</h3>
                    <input
                        type='search' placeholder='search'
                        style={{
                            width: '80%',
                            padding: '0.5rem',
                            borderRadius: '20px',
                            border: '1px solid #ccc',
                            fontSize: '1rem',
                            marginTop: "10px",
                            backgroundColor: '#111',
                            color: 'white'
                        }}
                    />
                </Box>
                {/* Bottom Section: Navigation Columns */}
                <Box display="flex" justifyContent="" width={"60%"}>
                    {/* Navigation Column 1 */}
                    <Box width={"220px"}>
                        <h2 style={{ color: "white" }}>Rolling</h2>
                        <ul style={{ listStyleType: 'none', padding: 0 }}>
                            <li><a href="/link2" style={{ color: "white", textDecoration: 'none' }}>Explore</a></li>
                            <li><a href="/link3" style={{ color: "white", textDecoration: 'none' }}>Blog</a></li>
                            <li><a href="/link4" style={{ color: "white", textDecoration: 'none' }}>About Us</a></li>
                            <li><a href="/link5" style={{ color: "white", textDecoration: 'none' }}>Partner</a></li>
                        </ul>
                    </Box>

                    <Box width={"220px"}>
                        <h3 style={{ color: "white" }}>Community</h3>
                        <ul style={{ listStyleType: 'none', padding: 0 }}>
                            <li><a href="/link2" style={{ color: "white", textDecoration: 'none' }}>Explore</a></li>
                            <li><a href="/link3" style={{ color: "white", textDecoration: 'none' }}>Blog</a></li>
                            <li><a href="/link4" style={{ color: "white", textDecoration: 'none' }}>About Us</a></li>
                            <li><a href="/link5" style={{ color: "white", textDecoration: 'none' }}>Partner</a></li>
                        </ul>
                    </Box>

                    <Box width={"300px"}>
                        <h3 style={{ color: "white" }}>Community</h3>
                        <ul style={{ listStyleType: 'none', padding: 0 }}>
                            <li><a href="/link2" style={{ color: "white", textDecoration: 'none' }}>Explore</a></li>
                            <li><a href="/link3" style={{ color: "white", textDecoration: 'none' }}>Blog</a></li>
                            <li><a href="/link4" style={{ color: "white", textDecoration: 'none' }}>About Us</a></li>
                            <li><a href="/link5" style={{ color: "white", textDecoration: 'none' }}>Partner</a></li>
                        </ul>
                    </Box>
                </Box>
            </Box>




            {/* Horizontal Line */}
            <hr style={{ width: '100%', borderTop: '1px solid #444', margin: '20px 0' }} />


            {/* Social Media Icons */}
            <box>
                <h1></h1>
            </box>
            <Box display="flex" justifyContent="flex-end" width="90%" marginTop={2}>
                <IconButton style={{ color: 'white' }} aria-label="facebook">
                    <FacebookIcon />
                </IconButton>
                <IconButton style={{ color: 'white' }} aria-label="twitter">
                    <TwitterIcon />
                </IconButton>
                <IconButton style={{ color: 'white' }} aria-label="linkedin">
                    <LinkedInIcon />
                </IconButton>
            </Box>


        </Box>
    );
};

export default Footer;