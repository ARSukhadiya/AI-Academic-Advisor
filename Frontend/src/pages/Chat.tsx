import {
    Box,
    Card,
    Stack,
    Typography,
    FormControl,
    InputAdornment,
    OutlinedInput,
    IconButton,
    Avatar,
    Paper,
  } from '@mui/material';
  import React from 'react';
  import SendIcon from '@mui/icons-material/Send';
  import AccountCircle from '@mui/icons-material/AccountCircle'; // User Avatar
  import ComputerIcon from '@mui/icons-material/Computer'; // Bot Avatar
  
  const messages = [
    { sender: 'user', text: 'Hello, how are you?' },
    { sender: 'bot', text: 'I am doing well, thank you!' },
    { sender: 'user', text: 'That\'s great to hear.' },
    { sender: 'bot', text: 'How can I assist you today?' },
    { sender: 'user', text: 'I have a question about my account.' },
    { sender: 'bot', text: 'Please provide your account details.' },
    // ... more messages
  ];
  
  export const Chat = () => {
    return (
      <Box sx={{ display: 'flex', flexDirection: 'column', height: '80vh' }} p={4} pt={2}>
        <Box mt={2} flexGrow={1} sx={{ display: 'flex', flexDirection: 'column' }}>
          <Card variant="outlined" sx={{ borderRadius: 2, boxShadow: 10, height: '100%', display: 'flex', flexDirection: 'column' }}>
            <Box sx={{ px: 2, pt: 1, pr: 2, pb: 1, flexGrow: 1, overflowY: 'auto' }}>
              <Stack spacing={2}>
                {messages.map((message, index) => (
                  <Stack
                    key={index}
                    direction="row"
                    justifyContent={message.sender === 'user' ? 'flex-end' : 'flex-start'}
                    alignItems="flex-start"
                  >
                    {message.sender === 'bot' && (
                      <Avatar sx={{ mr: 1 }}>
                        <ComputerIcon />
                      </Avatar>
                    )}
                    <Paper
                      sx={{
                        p: 1.5,
                        borderRadius: '20px',
                        maxWidth: '70%',
                        backgroundColor: message.sender === 'user' ? '#DCF8C6' : '#E1E1E1', // WhatsApp-like colors
                      }}
                    >
                      <Typography variant="body2">{message.text}</Typography>
                    </Paper>
                    {message.sender === 'user' && (
                      <Avatar sx={{ ml: 1 }}>
                        <AccountCircle />
                      </Avatar>
                    )}
                  </Stack>
                ))}
              </Stack>
            </Box>
            <Box m={3}>
              <FormControl variant="outlined" fullWidth>
                <OutlinedInput
                  id="outlined-adornment-weight"
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton>
                        <SendIcon />
                      </IconButton>
                    </InputAdornment>
                  }
                  aria-describedby="outlined-weight-helper-text"
                  inputProps={{
                    'aria-label': 'weight',
                  }}
                />
              </FormControl>
            </Box>
          </Card>
        </Box>
      </Box>
    );
  };