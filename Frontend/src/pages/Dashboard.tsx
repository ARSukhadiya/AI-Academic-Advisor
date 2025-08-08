import {
    Box,
    Button,
    Card,
    Chip,
    Container,
    Divider,
    Grid2 as Grid,
    IconButton,
    Slider,
    Stack,
    styled,
    Tab,
    Tabs,
    TextField,
    Typography,
    CircularProgress,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import CheckIcon from '@mui/icons-material/Check';
import { Colors } from "../components/Colors.tsx";
import CourseTable from "../components/CourseTable.tsx";
import Certificates from "../components/Certificates.tsx";
import Universities from "../components/Universities.tsx";
import Books from "../components/Books.tsx";

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ pt: 3 }}>{children}</Box>}
        </div>
    );
}
const CustomButton = styled(IconButton)({
    backgroundColor: Colors.defaultBlue, // Blue color
    color: "#fff",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
    borderRadius: "50%", // Circular button
    width: "30px",
    height: "30px",
    marginLeft: "8px", // Space between input and button
    transition: "all 0.3s ease",
    "&:hover": {
        backgroundColor: "#1565c0", // Slightly darker on hover
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)",
    },
});

const CustomTabs = styled(Tabs)({
    backgroundColor: "#F5F5F5",
    borderRadius: "50px",
    height: '31px',
    padding: "4px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    minHeight: "auto",
    width: "100%", // ✅ Make Tabs Full Width
    "& .MuiTabs-indicator": {
        display: "none", // ✅ Remove the underline completely
    },
});

const CustomTab = styled(Tab)({
    textTransform: "none",
    fontWeight: "bold",
    fontFamily: "'Comic Sans MS', cursive",
    borderRadius: "50px",
    minHeight: "auto",
    padding: "6px 16px",
    flex: 1, // ✅ Make each tab take equal space
    transition: "all 0.3s ease-in-out",
    "&.Mui-selected": {
        backgroundColor: "#ffffff",
        color: "#2979ff",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
    },
    "&:not(.Mui-selected):hover": {
        backgroundColor: "rgba(255, 255, 255, 0.4)",
    },
});

const skillBoxStyle = () => {
    return {
        input: {
            sx: {
                boxShadow: "inset 0px 4px 8px rgba(0, 0, 0, 0.2)", // Inner shadow
                backgroundColor: "#fff",
                borderRadius: "4px", // Keeps rounded corners subtle
                height: "2.4375em", // Default MUI input height
                // lineHeight: "1.4375em", // Ensures text stays vertically centered
            },
        },
    };
}

const textHeader = (title: string = '') => {
    return <Typography variant="body1" fontWeight="bold">{title}:</Typography>
}

const LoadingView = () => {
    return (
        <Card
            variant="outlined"
            sx={{
                height: "calc(100vh - 200px)", // Ensures vertical scroll if content overflows
                overflowY: "auto", // Enables vertical scrolling
                display: "flex", // Enables flexbox for centering
                alignItems: "center", // Centers vertically
                justifyContent: "center", // Centers horizontally
            }}
        >
            <CircularProgress disableShrink />
        </Card>
    )
}


export const DashboardContent = () => {
    const [tabValue, setTabValue] = React.useState(0);
    const [timeLimit, setTimeLimit] = React.useState(2);
    const [education, setEducation] = useState<string>("");
    const [yourSkillText, setYourSkillText] = useState<string>("");
    const [skillList, setSkillList] = useState<string[]>([]);
    const [interestedSkillText, setInterestedSkillText] = useState<string>("");
    const [interestedSkill, setInterestedSkillList] = useState<string[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [isSearch, setIsSearch] = useState<boolean>(false);


    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2000);
        //Runs on the first render
        //And any time any dependency value changes
    }, [skillList, interestedSkill]);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setTabValue(newValue);
    };

    const onChangeTimeLimit = (data: any) => {
        setTimeLimit(data?.target?.value)
    }

    const handleAddSkill = () => {
        if (yourSkillText.trim()) {
            setSkillList([...skillList, yourSkillText.trim()]);
            setYourSkillText(""); // Clear input after adding
        }
    };

    const handleDeleteSkill = (item: string, index: number) => {
        setSkillList((prevSkills) => prevSkills.filter((_, i) => i !== index));
    };

    const handleAddInterestedSkill = () => {
        if (interestedSkillText.trim()) {
            setInterestedSkillList([...interestedSkill, interestedSkillText.trim()]);
            setInterestedSkillText(""); // Clear input after adding
        }
    };

    const handleDeleteInterestedSkill = (item: string, index: number) => {
        setInterestedSkillList((prevSkills) => prevSkills.filter((_, i) => i !== index));
    };

    const onSearch = () => {
        let data = {
            education: education,
            userSkills: skillList,
            interestedSkill: interestedSkill,
            timeLimit: timeLimit
        }
        console.log('data', data)
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            setIsSearch(true)
        }, 2000);
    }

    console.log('loading', loading)
    return (
        <div>
            <Grid container spacing={2}>
                <Grid size={3} sx={{ height: 'calc(100vh - 130px)' }}> {/* Full height grid */}
                    <Box display="flex" flexDirection="column" height="100%"> {/* Full height wrapper */}
                        <Card
                            variant="outlined"
                            sx={{
                                flex: 1,
                                borderRadius: 2,
                                boxShadow: 10,
                                p: 2,
                                display: "flex",
                                flexDirection: "column",
                                height: "100%"  // Full height card
                            }}
                        >
                            {/* Keywords and Divider */}
                            {textHeader('Your Keywords')}
                            <Divider sx={{ backgroundColor: '#0A4EB2', my: 1 }} />

                            {/* Education Section */}
                            <Box>
                                {textHeader('Education')}
                                <TextField
                                    fullWidth
                                    multiline
                                    rows={2}
                                    value={education}
                                    onChange={(e) => setEducation(e?.target?.value)}
                                    sx={{ mt: 1, backgroundColor: "#fff", borderRadius: "4px" }}
                                    slotProps={{
                                        input: {
                                            sx: {
                                                boxShadow: "inset 0px 4px 8px rgba(0, 0, 0, 0.2)", // Inner shadow
                                                backgroundColor: "#fff",
                                                borderRadius: "4px", // Optional rounded corners
                                                padding: "10px", // Adjusting padding for better visibility
                                            },
                                        },
                                    }}
                                />
                            </Box>

                            {/* Your Skills Section */}
                            <Box pt={2}>
                                {textHeader('Your skills')}
                                <Box sx={{ display: "flex", alignItems: "center", width: "100%" }}>
                                    <TextField
                                        id="outlined-basic"
                                        fullWidth
                                        value={yourSkillText}
                                        onChange={(e) => setYourSkillText(e.target.value)}
                                        slotProps={skillBoxStyle()}
                                    />
                                    <CustomButton onClick={handleAddSkill}>
                                        <CheckIcon />
                                    </CustomButton>
                                </Box>

                                <Box pt={2} sx={{ maxHeight: '90px', marginTop: 1, overflow: 'scroll' }}>
                                    <Stack direction="row" sx={{ flexWrap: 'wrap', rowGap: 1 }}>
                                        {skillList.map((item, index) => {
                                            return <Chip color="primary" label={item} sx={{ mr: 1 }} size="small" onDelete={() => { handleDeleteSkill(item, index) }} />
                                        })}
                                    </Stack>
                                </Box>
                            </Box>


                            {/* Interested Skills Section */}
                            <Box pt={2}>
                                {textHeader('Interest skills')}
                                <Box sx={{ display: "flex", alignItems: "center", width: "100%" }}>
                                    <TextField
                                        id="outlined-basic"
                                        fullWidth
                                        value={interestedSkillText}
                                        onChange={(e) => setInterestedSkillText(e.target.value)}
                                        slotProps={skillBoxStyle()}
                                    />
                                    <CustomButton onClick={handleAddInterestedSkill}>
                                        <CheckIcon />
                                    </CustomButton>
                                </Box>

                                <Box pt={2} sx={{ maxHeight: '90px', marginTop: 1, overflow: 'scroll' }}>
                                    <Stack direction="row" sx={{ flexWrap: 'wrap', rowGap: 1 }}>
                                        {interestedSkill.map((item, index) => {
                                            return <Chip color="primary" label={item} sx={{ mr: 1 }} size="small" onDelete={() => { handleDeleteInterestedSkill(item, index) }} />
                                        })}
                                    </Stack>
                                </Box>
                            </Box>

                            {/* Time Limit Section */}
                            <Box pt={2}>
                                <Box display={'flex'} flexDirection={'row'} alignItems={'center'} justifyContent={'space-between'}>
                                    {textHeader('Time limit')}
                                    <Typography variant="body2">{timeLimit} Months</Typography>
                                </Box>
                                <Slider
                                    value={timeLimit}
                                    defaultValue={2}
                                    min={2}
                                    max={24}
                                    step={2}
                                    marks
                                    onChange={onChangeTimeLimit}
                                    sx={{ mt: 1 }}
                                />
                            </Box>

                            {/* Search Button */}
                            <Box mt="auto"> {/* Pushes button to bottom */}
                                <Button
                                    fullWidth
                                    variant="contained"
                                    sx={{ backgroundColor: '#0A4EB2' }}
                                    onClick={onSearch}
                                >
                                    Search
                                </Button>
                            </Box>

                        </Card>
                    </Box>
                </Grid>

                <Grid size={9}>
                    <Box display={"flex"} flexDirection={"column"} gap={1}>
                        <Box sx={{ width: "100%" }}>
                            <CustomTabs value={tabValue} onChange={handleChange} variant="scrollable">
                                <CustomTab label="Course" />
                                <CustomTab label="Books" />
                                <CustomTab label="Certificates" />
                                <CustomTab label="University" />
                            </CustomTabs>
                        </Box>
                        <Box>
                            <TabPanel value={tabValue} index={0}>
                                <Card variant="outlined">
                                    {loading ? LoadingView() : <CourseTable isSearch={isSearch} />}
                                </Card>
                            </TabPanel>
                            <TabPanel value={tabValue} index={1}>
                                <Card variant="outlined" sx={{}}>
                                    {loading ? LoadingView() : <Books isSearch={isSearch} />}
                                </Card>
                            </TabPanel>
                            <TabPanel value={tabValue} index={2}>
                                <Card
                                    variant="outlined"
                                    sx={{
                                        height: 'calc(100vh - 200px)',  // Ensures vertical scroll if content overflows
                                        overflowY: 'auto' // Enables vertical scrolling
                                    }}>
                                    {loading ? LoadingView() : <Certificates isSearch={isSearch} />}
                                </Card>
                            </TabPanel>
                            <TabPanel value={tabValue} index={3}>
                                <Card
                                    variant="outlined"
                                    sx={{
                                        height: 'calc(100vh - 200px)',  // Ensures vertical scroll if content overflows
                                        overflowY: 'auto' // Enables vertical scrolling
                                    }}>
                                    <Universities />
                                </Card>
                            </TabPanel>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </div>
    );
};

export const Dashboard = () => {
    return (
        <Container maxWidth="xl">
            <Box mt={2}>
                <DashboardContent />
            </Box>
        </Container>
    );
};
