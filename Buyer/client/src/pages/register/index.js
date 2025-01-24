// All Imports...
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Logo from './logo.png'
import Typography from '@mui/material/Typography';
import Textfield from '../../utils/Textfield';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useEffect } from "react";
import { Link, Toolbar  ,Stack  } from '@mui/material';
import { useHistory } from "react-router-dom";
import axios from "axios";

import { styled} from '@mui/styles';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';

//--------------------------------------------------------------------------

const theme = createTheme();

const phoneRegExp=/^[7-9][0-9]{9}$/


// Adding style components - buttons
const Title = styled(Typography)({
  fontSize : 35,
  background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,212,255,1) 0%, rgba(162,222,131,1) 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent"
});

const StyledSubmitButton = styled(Button)({
  background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,212,255,1) 0%, rgba(162,222,131,1) 100%)",
  border: 0,
  borderRadius: 4,
  boxShadow: '0 3px 5px 2px rgba(2, 212, 225, .3)',
  color: 'white',
});

const INITIAL_FORM_STATE = {
    fname: '',
    lname: '',
    phone: '',
    password: '',
    confirmPassword : ''
  
  };

  const FORM_VALIDATION = Yup.object().shape({
    fname: Yup.string()
      .required('Required'),
  
    mobileno: Yup.string()
      .max(10, 'Enter a valid phone number')
      .matches(phoneRegExp,"Enter valid Phone number")
      .required("Required"),
    password: Yup.string()
      .min(8, "Minimum characters should be 8")
      .required('Required'),
    confirmPassword:Yup.string().oneOf([Yup.ref('password')],"Password not matches").required('Required')
  });

//----------------------------------------------------------------------

const  Register  = () => {

  //error messages
  const [error, setError] = React.useState("");
  const [open, setOpen] = React.useState(false);

  const [loading , setLoading] = React.useState(false)

  // false value by default
  const handleClose = () => {
    setOpen(false);
  };

  // If user already logged in , just redirect to dashboard
  let history = useHistory();
  useEffect(() => {
    if (localStorage.getItem("authToken")) {
      history.push("/buy");
    }
  }, [history]);


  const onSubmit  = async (values, props) => {
    setOpen(false);
    setLoading(true);

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    const mobileno = values.mobileno;
    const password = values.password;
    const fname = values.fname;
    const lname = values.lname;
    const phone = values.phone;

    try 
    {
      const { data } = await axios.post(
        "/api/auth/register",
        {
          fname,
          lname,
          mobileno,
          password,
        },
        config
      );
      
      localStorage.setItem("authToken", data.token);
      props.resetForm();
      
      console.log("Registration sucessful");
      setLoading(false)
      history.push("/buy")

    }
    catch (error) 
    {
          setLoading(false)
          setError(error.response.data.error);
          setOpen(true)
          console.log(error.response.data);
          setTimeout(handleClose, 5000);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
          
          <CssBaseline />

          <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
              backgroundImage: 'url(https://www.incimages.com/uploaded_files/image/1920x1080/getty_610118638_200010002000928072_378910.jpg)',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'right',
            }}
          />

          <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Toolbar >

                <Link underline="none" href="/">
                  <img style = {{ width :32, height :32, margin : 4}} alt = "logo" src = {Logo} />
                </Link>
                               
                <Title  variant="h4" component="div" sx={{ flexGrow: 1 }}>
                  <Link underline="none" href="/">
                    ShopEasy
                  </Link>
                </Title>

              </Toolbar>
                        
              <Grid container sx = {{pt : 4}} rowSpacing={2}>
                                    
                <Grid item xs ={12}>
                  <Typography    variant="h5">
                    Create an Account
                  </Typography>
                </Grid>

                <Grid item xs={12}>

                  <Box sx={{ width: '100%' , pt : 1}}>
                    <Collapse in={open} >

                      <Alert severity="error"
                        action={

                          <IconButton
                            aria-label="close"
                            color="inherit"
                            size="small"
                            onClick={() => {
                              setOpen(false);
                            }}
                          >
                            <CloseIcon fontSize="inherit" />

                          </IconButton>
                        }
                        sx={{ mb: 2 }}
                      >   
                        {error} 

                      </Alert>

                    </Collapse>
                  </Box>
                  
<Formik
  initialValues={{
    ...INITIAL_FORM_STATE
  }}
  validationSchema={FORM_VALIDATION}
  onSubmit={onSubmit}
>
    <Form>

        <Grid container spacing={2} rowSpacing = {2}>

          <Grid item xs={12}>
            <Textfield
              name="fname"
              label="First Name"
            />
          </Grid>
          <Grid item xs={12}>
            <Textfield
              name="lname"
              label="Last Name"
            />
          </Grid>

          <Grid item xs={12}>
            <Textfield
              name="mobileno"
              label="Mobile Number"
            />
          </Grid>


          <Grid item xs={12}>
            <Textfield
              type="password"
              name="password"
              label="Password"
            />
          </Grid>

                        
          <Grid item xs={12}>
            <Textfield
              type="password"
              name="confirmPassword"
              label="Confirm Password"
            />
          </Grid>

        </Grid>

        <Stack
          sx={{ p: 2}}
          direction="row"
          spacing={2}
          justifyContent="center">
          <StyledSubmitButton variant="contained" type = "submit" >Register</StyledSubmitButton>
        </Stack>

    </Form>
</Formik>
                </Grid>
              
              </Grid>

              <Grid container >
                <Grid item xs >

                  <Typography align = 'center'  variant="body1">
                    Already have an account? {''}

                    <Typography align = 'left' sx = {{color : '#00a6c1'}} as={Link} underline="none" href="/login" variant="body1">
                      Login
                    </Typography>

                  </Typography>

                </Grid>
              </Grid>      


            </Box>
          </Grid>

      </Grid>
    </ThemeProvider>
  )
}

export default Register;
