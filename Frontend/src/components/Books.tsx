import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { Box, Container, Grid2 as Grid } from '@mui/material';
import { books, books2 } from '../data/books.tsx';

const handleBookClick = (url) => {
    const win = window.open(url, '_blank');
    if (win != null) {
        win.focus();
    }
};

export default function Books(props: any) {
    const data = props.isSearch ? books2 : books;
    return (
        <Container maxWidth="lg" sx={{
            py: 2,
            height: 'calc(100vh - 200px)',  // Ensures vertical scroll if content overflows
            overflowY: 'auto' // Enables vertical scrolling
        }} >
            {/* Grid Layout */}
            <Grid container spacing={6} marginBottom={5} justifyContent="center">
                {data.map((book) => (
                    <Grid item xs={12} sm={6} md={4} key={book.id} display="flex" justifyContent="center">
                        <Box sx={{ position: 'relative', textAlign: 'center', display: 'flex', justifyContent: 'center' }}>

                            {/* Shadow effect at the bottom (Placed BEFORE the book) */}
                            <Box
                                sx={{
                                    width: '120%',
                                    height: '30px',
                                    background: 'rgba(0, 0, 0,0.8)',
                                    borderRadius: '50%',
                                    position: 'absolute',
                                    bottom: '-18px',
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    filter: 'blur(8px)',
                                    zIndex: 0, // Shadow behind book
                                }}
                            />

                            {/* Book Card */}
                            <Card
                                sx={{
                                    zIndex: 1, // Book on top
                                    width: 200,
                                    height: 280,
                                    boxShadow: 3,
                                    borderRadius: 2,
                                    cursor: 'pointer',
                                    transition: 'transform 0.2s',
                                    '&:hover': { transform: 'scale(1.05)' },
                                }}
                                onClick={() => handleBookClick(book.link)}
                            >
                                <CardMedia
                                    component="img"
                                    image={book.img}
                                    alt="Book Cover"
                                    sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                            </Card>

                        </Box>
                    </Grid>
                ))}
            </Grid>

            {/* "View More" Link */}
            {/* <Box display="flex" justifyContent="center" mt={4}>
                <Link href="#" underline="hover" sx={{ color: 'blue', fontSize: '16px' }}>
                    + View More
                </Link>
            </Box> */}
        </Container>
    );
}