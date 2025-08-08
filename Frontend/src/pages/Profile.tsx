import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import MuiCard from "@mui/material/Card";
import CssBaseline from "@mui/material/CssBaseline";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import { Colors } from "../components/Colors.tsx";

const Card = styled(MuiCard)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignSelf: "center",
  width: "100%",
  height: '100%',
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  margin: "auto",
  [theme.breakpoints.up("sm")]: {
    // maxWidth: "1000px",
  },
  boxShadow:
    "hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px",
  ...theme.applyStyles("dark", {
    boxShadow:
      "hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px",
  }),
}));

const ProfileContainer = styled(Stack)(({ theme }) => ({
  //   height: "calc((1 - var(--template-frame-height, 0)) * 100dvh)",
  //   minHeight: "100%",
  padding: theme.spacing(2),
  [theme.breakpoints.up("sm")]: {
    padding: theme.spacing(4),
  },
  "&::before": {
    content: '""',
    display: "block",
    position: "absolute",
    zIndex: -1,
    inset: 0,
    backgroundImage:
      "radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))",
    backgroundRepeat: "no-repeat",
    ...theme.applyStyles("dark", {
      backgroundImage:
        "radial-gradient(at 50% 50%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))",
    }),
  },
}));

export function Profile(props: { disableCustomTheme?: boolean }) {

  const [genderText, setGenderText] = React.useState('male');

  const [firstNameText, setFirstNameText] = React.useState('Ahmed');
  const [firstNameError, setFirstNameError] = React.useState(false);
  const [firstNameErrorMessage, setFirstNameErrorMessage] = React.useState("");

  const [lastNameText, setLastNameText] = React.useState('Banafa');
  const [lastNameError, setLastNameError] = React.useState(false);
  const [lastNameErrorMessage, setLastNameErrorMessage] = React.useState("");

  const [userNameText, setUserNameText] = React.useState('AhemadBanafaSFBU');
  const [userNameError, setUserNameError] = React.useState(false);
  const [userNameErrorMessage, setUserNameErrorMessage] = React.useState("");

  const [emailText, setEmailText] = React.useState('ahmed.banafa@sfbu.edu');
  const [emailError, setEmailError] = React.useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = React.useState("");

  const [phoneNumberText, setPhoneNumberText] = React.useState('1(408)-607-4456');
  const [phoneNumberError, setPhoneNumberError] = React.useState(false);
  const [phoneNumberErrorMessage, setPhoneNumberErrorMessage] = React.useState("");

  const [oldPasswordText, setOldPasswordText] = React.useState('');
  const [oldPasswordError, setOldPasswordError] = React.useState(false);
  const [oldPasswordErrorMessage, setOldPasswordErrorMessage] = React.useState("");

  const [passwordText, setPasswordText] = React.useState('');
  const [passwordError, setPasswordError] = React.useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = React.useState("");

  const [confirmPasswordText, setConfirmPasswordText] = React.useState('');
  const [confirmPasswordError, setConfirmPasswordError] = React.useState(false);
  const [confirmPasswordErrorMessage, setConfirmPasswordErrorMessage] = React.useState("");

  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    if (emailError || passwordError) {
      event.preventDefault();
      return;
    }
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  const validateInputs = () => {

    let isValid = true;

    if (!firstNameText) {
      setFirstNameError(true);
      setFirstNameErrorMessage("!! First Name can not be empty !!");
      isValid = false;
    } else {
      setFirstNameError(false);
      setFirstNameErrorMessage("");
    }

    if (!lastNameText) {
      setLastNameError(true);
      setLastNameErrorMessage("!! Last Name can not be empty !!");
      isValid = false;
    } else {
      setLastNameError(false);
      setLastNameErrorMessage("");
    }

    if (!userNameText) {
      setUserNameError(true);
      setUserNameErrorMessage("!! User Name can not be empty !!");
      isValid = false;
    } else {
      setUserNameError(false);
      setUserNameErrorMessage("");
    }

    if (!emailText || !/\S+@\S+\.\S+/.test(emailText)) {
      setEmailError(true);
      setEmailErrorMessage("!! Please enter a valid email address !!");
      isValid = false;
    } else {
      setEmailError(false);
      setEmailErrorMessage("");
    }

    if (!phoneNumberText || phoneNumberText.length < 10) {
      setPhoneNumberError(true);
      setPhoneNumberErrorMessage("!! Please enter a valid Phone address !!");
      isValid = false;
    } else {
      setPhoneNumberError(false);
      setPhoneNumberErrorMessage("");
    }
    if (oldPasswordText || passwordText || confirmPasswordText) {

      if (!oldPasswordText || oldPasswordText.length < 6) {
        setOldPasswordError(true);
        setOldPasswordErrorMessage("!! Please enter a valid old Password !!");
        isValid = false;
      } else {
        setOldPasswordError(false);
        setOldPasswordErrorMessage("");
      }

      if (!passwordText || passwordText.length < 6) {
        setPasswordError(true);
        setPasswordErrorMessage("!! Password must be at least 6 characters long  !!");
        isValid = false;
      } else {
        setPasswordError(false);
        setPasswordErrorMessage("");
      }

      if (!confirmPasswordText || confirmPasswordText !== passwordText) {
        setConfirmPasswordError(true);
        setConfirmPasswordErrorMessage("!! Confirm Password must match with the Password  !!");
        isValid = false;
      } else {
        setConfirmPasswordError(false);
        setConfirmPasswordErrorMessage("");
      }
    }


    return isValid;
  };

  const sectionHeader = (title: string) => {
    return <Typography sx={{ fontSize: 'clamp(1rem, 1vw, 1.15rem)', mt: 2, mb: -1, color: Colors.defaultBlue, fontWeight: 'bold' }}>{title}</Typography>
  }

  const handleSave = () => {
    // TODO validateInputs
    if (validateInputs()) {
      navigate('/dashboard')
    }
  }
  const handleCancel = () => {
    navigate('/dashboard')
  }
  return (
    <>
      <CssBaseline enableColorScheme />
      <ProfileContainer direction="column" justifyContent="space-between" sx={{}}>
        <Card variant="outlined">
          {sectionHeader('Personal Details')}
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              gap: 2,
            }}
          >
            <Box
              display={"flex"}
              flexDirection={"row"}
              alignItems={"center"}
              gap={8}
              justifyContent={"center"}
            >
              <FormControl sx={{ width: "100%", minWidth: "300px" }}>
                <FormLabel htmlFor="firstname">First Name</FormLabel>
                <TextField
                  value={firstNameText}
                  error={firstNameError}
                  helperText={firstNameErrorMessage}
                  onChange={(e) => { setFirstNameText(e.target.value) }}
                  id="firstname"
                  type='text'
                  name="firstname"
                  placeholder="firstname"
                  autoFocus
                  required
                  fullWidth
                  size="small"
                  variant="outlined"
                  color={firstNameError ? "error" : "primary"}
                />
              </FormControl>

              <FormControl sx={{ width: "100%", minWidth: "300px" }}>
                <FormLabel htmlFor="email">Last Name</FormLabel>
                <TextField
                  value={lastNameText}
                  error={lastNameError}
                  helperText={lastNameErrorMessage}
                  onChange={(e) => { setLastNameText(e.target.value) }}
                  id="lastname"
                  type="text"
                  name="lastname"
                  placeholder="lastname"
                  autoFocus
                  required
                  fullWidth
                  size="small"
                  variant="outlined"
                  color={lastNameError ? "error" : "primary"}
                />
              </FormControl>

              <FormControl sx={{ width: "100%", minWidth: "300px" }}>
                <FormLabel htmlFor="email">User Name</FormLabel>
                <TextField
                  value={userNameText}
                  error={userNameError}
                  helperText={userNameErrorMessage}
                  id="username"
                  type="text"
                  name="username"
                  placeholder="username"
                  onChange={(e) => { setUserNameText(e.target.value) }}
                  // autoComplete="email"
                  autoFocus
                  required
                  fullWidth
                  size="small"
                  variant="outlined"
                  color={userNameError ? "error" : "primary"}
                />
              </FormControl>
            </Box>
            <Box
              display={"flex"}
              flexDirection={"row"}
              alignItems={"center"}
              gap={8}
              justifyContent={"center"}
            >
              <FormControl sx={{ width: "100%", minWidth: "300px" }}>
                <FormLabel htmlFor="firstname">Email</FormLabel>
                <TextField
                  value={emailText}
                  error={emailError}
                  helperText={emailErrorMessage}
                  onChange={(e) => { setEmailText(e.target.value) }}
                  id="email"
                  type="email"
                  name="email"
                  placeholder="email"
                  autoFocus
                  required
                  fullWidth
                  size="small"
                  variant="outlined"
                  color={emailError ? "error" : "primary"}
                />
              </FormControl>

              <FormControl sx={{ width: "100%", minWidth: "300px" }}>
                <FormLabel htmlFor="phoneNumber">Phone number</FormLabel>
                <TextField
                  value={phoneNumberText}
                  error={phoneNumberError}
                  helperText={phoneNumberErrorMessage}
                  onChange={(e) => { setPhoneNumberText(e.target.value) }}
                  id="phoneNumber"
                  type="phoneNumber"
                  name="phoneNumber"
                  placeholder="1-XXX-XXX-XXXX"
                  autoFocus
                  required
                  fullWidth
                  size="small"
                  variant="outlined"
                  color={phoneNumberError ? "error" : "primary"}
                />
              </FormControl>

              <FormControl sx={{ width: "100%", minWidth: "300px" }}>
                {/* <FormControl sx={{ marginX: 0.5 }}> */}
                <FormLabel id="demo-row-radio-buttons-group-label">
                  Gender
                </FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                  defaultValue={genderText}
                  onSelect={(e) => { setGenderText((e.target as HTMLInputElement).value) }}
                >
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Female"
                  />
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Male"
                  />
                </RadioGroup>
              </FormControl>
            </Box>
            {sectionHeader('Change Password')}
            <Box
              display={"flex"}
              flexDirection={"row"}
              alignItems={"center"}
              gap={8}
              justifyContent={"center"}
            >
              <FormControl sx={{ width: "100%", minWidth: "300px" }}>
                <FormLabel htmlFor="OldPassword">Old Password</FormLabel>
                <TextField
                  value={oldPasswordText}
                  error={oldPasswordError}
                  helperText={oldPasswordErrorMessage}
                  name="oldPassword"
                  placeholder="••••••••"
                  type="password"
                  onChange={(e) => setOldPasswordText(e.target.value)}
                  id="oldpassword"
                  // autoComplete="current-password"
                  autoFocus
                  required
                  fullWidth
                  size="small"
                  variant="outlined"
                  color={oldPasswordError ? "error" : "primary"}
                />
              </FormControl>
              <FormControl sx={{ width: "100%", minWidth: "300px" }}>
                <FormLabel htmlFor="password">New Password</FormLabel>
                <TextField
                  value={passwordText}
                  error={passwordError}
                  helperText={passwordErrorMessage}
                  name="newPassword"
                  placeholder="••••••"
                  type="password"
                  onChange={(e) => setPasswordText(e.target.value)}
                  id="newPassword"
                  autoComplete="current-password"
                  autoFocus
                  required
                  fullWidth
                  size="small"
                  variant="outlined"
                  color={passwordError ? "error" : "primary"}
                />
              </FormControl>
              <FormControl sx={{ width: "100%", minWidth: "300px" }}>
                <FormLabel htmlFor="confirmPassword">Confirm Password</FormLabel>
                <TextField
                  value={confirmPasswordText}
                  error={confirmPasswordError}
                  helperText={confirmPasswordErrorMessage}
                  onChange={(e) => { setConfirmPasswordText(e.target.value) }}
                  name="CoPassword"
                  placeholder="••••••"
                  type="password"
                  id="CoPassword"
                  autoComplete="current-password"
                  autoFocus
                  required
                  fullWidth
                  size="small"
                  variant="outlined"
                  color={confirmPasswordError ? "error" : "primary"}
                />
              </FormControl>
            </Box>
            <Box justifyContent={'center'} display={'flex'} width={'100%'} gap={4} mt={10}>
              <Button
                type="submit"
                variant="contained"
                size="large"
                sx={{ backgroundColor: "#0A4EB2" }}
                onClick={handleSave}
              >
                Save
              </Button>
              <Button
                type="submit"
                variant="contained"
                size="large"
                sx={{ backgroundColor: "#0A4EB2" }}
                onClick={handleCancel}
              >
                Cancel
              </Button>
            </Box>
          </Box>
        </Card>
      </ProfileContainer>
    </>
    // {/* </AppTheme> */ }
  );
}
