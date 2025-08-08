import { Box, Button, Modal, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import * as React from 'react';
import { courses, course2 } from '../data/course.tsx';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};



const StyledTableCell = styled(TableCell)(({ theme }) => ({
    fontSize: 16,
    fontWeight: 500,
    padding: '12px 16px',
    borderBottom: 'none',
    whiteSpace: 'nowrap', // Prevent text wrapping
    '&:last-child': {
        textAlign: 'right',
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(even)': {
        backgroundColor: '#3f6fbf', // Blue background for even rows
        color: 'white',
        '& *': { color: 'white' }, // Ensure all text remains white
    },
    '&:nth-of-type(odd)': {
        backgroundColor: 'white',
    },
}));

export default function CourseTable(props: any) {

    const [isModalOpen, setIsModalOpen] = React.useState(false)
    const [selectedCourse, setSelectedCourse] = React.useState<any>(null);
    const handleViewDetails = (row) => {
        setSelectedCourse(row);
        setIsModalOpen(true);
    }
    const handleClose = () => {
        setIsModalOpen(false);
        setSelectedCourse(null);
    }
    const data = props.isSearch ? course2 : courses
    return (
        <>
            <Modal
                keepMounted
                open={isModalOpen}
                onClose={handleClose}
                aria-labelledby="keep-mounted-modal-title"
                aria-describedby="keep-mounted-modal-description"
            >
                <Box
                    sx={style}
                >
                    {
                        selectedCourse &&
                        <>
                            <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
                                {selectedCourse?.name}
                            </Typography><Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
                                {selectedCourse.description}
                            </Typography>
                        </>
                    }
                </Box>
            </Modal>
            <TableContainer
                component={Paper}
                sx={{
                    boxShadow: 3,
                    borderRadius: 2,
                    height: 'calc(100vh - 200px)',  // Ensures vertical scroll if content overflows
                    overflowY: 'auto' // Enables vertical scrolling
                }}
            >
                <Table sx={{ minWidth: 700 }}>
                    <TableBody>
                        {data.map((row, index) => (
                            <StyledTableRow key={index}>
                                <StyledTableCell>
                                    {index + 1}. {row.name}
                                </StyledTableCell>
                                <StyledTableCell>
                                    <Button variant="text" sx={{ textTransform: 'none', color: 'inherit' }} onClick={() => handleViewDetails(row)}>
                                        View Details
                                    </Button>
                                </StyledTableCell>
                                <StyledTableCell>
                                    {row.duration}
                                </StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}
