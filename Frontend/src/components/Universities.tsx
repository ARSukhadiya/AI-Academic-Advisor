import { Avatar, Box, List, ListItem, ListItemAvatar, styled, Typography } from '@mui/material';
import * as React from 'react';
import universities from '../data/universities.tsx';

const StyledListItem = styled(ListItem)(({ theme }) => ({
  '&:nth-of-type(even)': {
    backgroundColor: '#3f6fbf',
    color: 'white',
    '& *': { color: 'white' },
  },
  '&:nth-of-type(odd)': {
    backgroundColor: 'white',
    '& *': { color: '#000000' }
  },
  cursor: 'pointer'
}));

const avatarStyle = (index) => {
  const c1 = '#ffffff';
  const c2 = '#0a4eb2';
  return index % 2 === 0 ? `radial-gradient(circle,${c1} 0%, ${c2} 100%)` : `radial-gradient(circle, ${c2} 0%, ${c1} 100%)`;
};

export default function Universities() {
  const handleClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper', py: 0, pb: 0 }}>
      {universities.map((uni, index) => (
        <StyledListItem
          key={uni.id}
          onClick={() => handleClick(uni.url)}
          sx={{
            mb: 1,
            px: 2,
            m: 0,
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <Box flex={1}>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
              {uni.id}. {uni.title}
            </Typography>
          </Box>

          {/* Right: University Logo */}
          <ListItemAvatar sx={{ minWidth: 0 }}>
            <Avatar
              src={uni.image}
              sx={{
                width: 40,
                height: 40,
                background: avatarStyle(index),
                boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.2)',
              }}
            />
          </ListItemAvatar>
        </StyledListItem>
      ))}
    </List>
  );
}
