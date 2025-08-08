import { Avatar, Box, List, ListItem, ListItemAvatar, styled, Typography } from '@mui/material';
import * as React from 'react';
import { certificates, certificates2 } from '../data/certificates.tsx';

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
}));

const avatarStyle = (index) => {
  const c1 = '#ffffff'
  const c2 = '#0a4eb2'
  return index % 2 === 0 ? `radial-gradient(circle,${c1} 0%, ${c2} 100%)` : `radial-gradient(circle, ${c2} 0%, ${c1} 100%)`
}

const HandleOnclickCert = (data: any) => {
  const win = window.open(data.link, '_blank');
  if (win != null) {
    win.focus();
  }
}

export default function Certificates(props) {
  const data = props.isSearch ? certificates2 : certificates;
  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper', py: 0, pb: 0 }}>
      {data.map((cert, index) => (
        <StyledListItem
          key={cert.id}
          sx={{
            mb: 1,
            px: 2,
            m: 0,
            display: 'flex',
            alignItems: 'center'
          }}
          onClick={() => HandleOnclickCert(cert)}
        >
          <Box flex={1}>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
              {index + 1}. {cert.title}
            </Typography>
            <Typography variant="body2"
              sx={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "-webkit-box",
                WebkitLineClamp: "2",
                WebkitBoxOrient: "vertical",
              }}>
              {cert.description}
            </Typography>
          </Box>

          {/* Right: Certificate Image */}
          <ListItemAvatar>
            <Avatar
              src={cert.image}
              sx={{
                width: 60,
                height: 60,
                background: avatarStyle(index),
                boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.2)',
                // border: '2px solid white'
              }}
            />
          </ListItemAvatar>
        </StyledListItem>
      ))}
    </List>
  );
}