import React from 'react'
import { AppBar, Toolbar, Typography, Button, IconButton, Box, Avatar } from '@mui/material';
import * as AI_Academic_AdviserSvg from '../assets/AI_Academic_Adviser.svg';
import Logo from './logo.tsx';
import MenuIcon from '@mui/icons-material/Menu';
import ReviewsIcon from '@mui/icons-material/Reviews';
import { useLocation, useNavigate } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
export const Header = () => {
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const shouldProfileMenuVisible = pathname.includes('dashboard') || pathname.includes('profile') || pathname.includes('chat');
    const handleLogout = () => {
        navigate('/');
    }
    const handleProfileClick = () => {
        navigate('/profile');
    }
    const handleChat = () => {
        navigate('/chat')
    }
    return (
        <AppBar position="static" sx={{ backgroundColor: '#0A4EB2', paddingY: 1.5 }}>
            <Toolbar>
                <Box display={'flex'} alignItems={'center'} width={'100%'}>
                    <Box>
                        <Logo />
                    </Box>
                    <Box>
                        <div onClick={() => navigate('/dashboard')}>

                            <AI_Academic_AdviserSvg.ReactComponent />
                        </div>
                    </Box>
                    {shouldProfileMenuVisible &&
                        <Box flexGrow={1} display={'flex'} flexDirection={'row-reverse'} gap={2} alignItems={'center'}>
                            <Box>
                                <IconButton
                                    size="large"
                                    edge="start"
                                    color="inherit"
                                    aria-label="open drawer"
                                    onClick={handleLogout}
                                >
                                    <LogoutIcon />
                                </IconButton>
                            </Box>
                            <Box>
                                <IconButton onClick={handleChat}
                                    size="large"
                                    edge="start"
                                    color="inherit"
                                    aria-label="open drawer"

                                >
                                    <ReviewsIcon />
                                </IconButton>
                            </Box>
                            <Box>
                                <IconButton onClick={handleProfileClick}>
                                    <Avatar alt="Ahmed Banafa" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA-yYacHyLC3d2YSLrFM-7GliPtXb2VY6Byg&s" />
                                    {/* <Avatar alt="Remy Sharp" src="https://i.pravatar.cc/300" /> */}
                                </IconButton>
                            </Box>
                        </Box>
                    }
                </Box>

            </Toolbar>
        </AppBar>
    )
}
