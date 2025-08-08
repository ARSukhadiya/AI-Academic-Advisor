import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import MuiCard from "@mui/material/Card";
import CssBaseline from "@mui/material/CssBaseline";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useLocation, useNavigate } from "react-router-dom";

const Card = styled(MuiCard)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignSelf: "center",
  width: "100%",
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  margin: "auto",
  [theme.breakpoints.up("sm")]: {
    maxWidth: "1000px",
  },
  boxShadow:
    "hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px",
  ...theme.applyStyles("dark", {
    boxShadow:
      "hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px",
  }),
}));

const SignUpContainer = styled(Stack)(({ theme }) => ({
  height: "calc((1 - var(--template-frame-height, 0)) * 100dvh)",
  minHeight: "100%",
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

export function SignUp(props: { disableCustomTheme?: boolean }) {

  const [genderText, setGenderText] = React.useState('male');

  const [firstNameText, setFirstNameText] = React.useState('');
  const [firstNameError, setFirstNameError] = React.useState(false);
  const [firstNameErrorMessage, setFirstNameErrorMessage] = React.useState("");

  const [lastNameText, setLastNameText] = React.useState('');
  const [lastNameError, setLastNameError] = React.useState(false);
  const [lastNameErrorMessage, setLastNameErrorMessage] = React.useState("");

  const [userNameText, setUserNameText] = React.useState('');
  const [userNameError, setUserNameError] = React.useState(false);
  const [userNameErrorMessage, setUserNameErrorMessage] = React.useState("");

  const [emailText, setEmailText] = React.useState('');
  const [emailError, setEmailError] = React.useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = React.useState("");

  const [phoneNumberText, setPhoneNumberText] = React.useState('');
  const [phoneNumberError, setPhoneNumberError] = React.useState(false);
  const [phoneNumberErrorMessage, setPhoneNumberErrorMessage] = React.useState("");

  const [passwordText, setPasswordText] = React.useState('');
  const [passwordError, setPasswordError] = React.useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = React.useState("");

  const [confirmPasswordText, setConfirmPasswordText] = React.useState('');
  const [confirmPasswordError, setConfirmPasswordError] = React.useState(false);
  const [confirmPasswordErrorMessage, setConfirmPasswordErrorMessage] = React.useState("");

  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate()

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
      setEmailErrorMessage("Please enter a valid email address.");
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


    return isValid;
  };

  const handleSubmit = () => {
    if (validateInputs()) {
      navigate('/');
    }
  };

  return (
    <>
      <CssBaseline enableColorScheme />
      <SignUpContainer direction="column" justifyContent="space-between">
        <Card variant="outlined">
          <Typography
            component="h1"
            variant="h4"
            alignSelf={'center'}
            sx={{ fontSize: 'clamp(2rem, 10vw, 2.15rem)' }}

          >
            Sign up
          </Typography>
          <Box
            // component="form"
            // onSubmit={handleSubmit}
            // noValidate
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
              <FormControl>
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

              <FormControl>
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
                  required
                  fullWidth
                  size="small"
                  variant="outlined"
                  color={lastNameError ? "error" : "primary"}
                />
              </FormControl>

              <FormControl>
                <FormLabel htmlFor="email">User Name</FormLabel>
                <TextField
                  value={userNameText}
                  error={userNameError}
                  helperText={userNameErrorMessage}
                  onChange={(e) => { setUserNameText(e.target.value) }}
                  id="username"
                  type="text"
                  name="username"
                  // placeholder="your@email.com"
                  // autoComplete="email"
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
              <FormControl>
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
                  required
                  fullWidth
                  size="small"
                  variant="outlined"
                  color={emailError ? "error" : "primary"}
                />
              </FormControl>

              <FormControl>
                <FormLabel htmlFor="phoneNumber">Phone number</FormLabel>
                <TextField
                  value={phoneNumberText}
                  error={phoneNumberError}
                  helperText={phoneNumberErrorMessage}
                  onChange={(e) => { setPhoneNumberText(e.target.value) }}
                  id="phoneNumber"
                  type="phoneNumber"
                  name="phoneNumber"
                  placeholder="1(XXX)-XXX-XXXX"
                  required
                  fullWidth
                  size="small"
                  variant="outlined"
                  color={phoneNumberError ? "error" : "primary"}
                />
              </FormControl>

              <FormControl>
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
            <Box
              display={"flex"}
              flexDirection={"row"}
              alignItems={"center"}
              gap={8}
              justifyContent={"center"}
            >
              <FormControl>
                <FormLabel htmlFor="password">Password</FormLabel>
                <TextField
                  value={passwordText}
                  error={passwordError}
                  helperText={passwordErrorMessage}
                  onChange={(e) => { setPasswordText(e.target.value) }}
                  name="password"
                  placeholder="••••••"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  required
                  fullWidth
                  size="small"
                  variant="outlined"
                  color={passwordError ? "error" : "primary"}
                />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="confirmPassword">Confirm Password</FormLabel>
                <TextField
                  value={confirmPasswordText}
                  error={confirmPasswordError}
                  helperText={confirmPasswordErrorMessage}
                  onChange={(e) => { setConfirmPasswordText(e.target.value) }}
                  name="CoPassword"
                  placeholder="••••••"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  required
                  fullWidth
                  size="small"
                  variant="outlined"
                  color={confirmPasswordError ? "error" : "primary"}
                />
              </FormControl>
            </Box>
            <Box justifyContent={'center'} display={'flex'}>
              <Button
                type="submit"
                variant="contained"
                size="large"
                sx={{ backgroundColor: "#0A4EB2" }}
                onClick={handleSubmit}
              >
                Sign in
              </Button>
            </Box>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Typography sx={{ textAlign: "center" }}>
              Do you have an account?{" "}
              <Link href="/" variant="body2" sx={{ alignSelf: "center" }}>
                Sign in
              </Link>
            </Typography>
          </Box>
        </Card>
      </SignUpContainer>
    </>
    // {/* </AppTheme> */ }
  );
}
