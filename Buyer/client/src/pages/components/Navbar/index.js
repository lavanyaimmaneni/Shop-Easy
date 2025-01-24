// All Imports ----------------------------------------------------------
import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import { useTheme, useMediaQuery, Menu, MenuItem , Link, Stack, IconButton} from '@mui/material';
import Textfield from '../../../utils/Textfield';
import CssBaseline from '@mui/material/CssBaseline';
import Logo from './logo.png';
import { alpha, styled } from '@mui/material/styles';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useHistory, useLocation} from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import AccountCircle from '@mui/icons-material/AccountCircle';
//-----------------------------------------------------------------------------

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.warning.dark, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.warning.dark, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));


const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(1)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '35ch'
    },
  },
}));

// Adding style components - buttons

const RootStyle = styled(AppBar)(({ theme }) => ({
  boxShadow: 'none',
  backdropFilter: 'blur(6px)',
  WebkitBackdropFilter: 'blur(6px)', // Fix on Mobile
  backgroundColor: alpha(theme.palette.background.default, 0.72),
  
}));

const Title = styled(Typography)({
  fontSize : 30,
  fontWeight: 2500,
  background: "linear-gradient(90deg, rgba(255,46,0,1) 0%, rgba(252,176,69,1) 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent"
});

const StyledSubmitButton = styled(Button)({
  background: "linear-gradient(90deg, rgba(255,46,0,1) 0%, rgba(252,176,69,1) 100%)",
  border: 0,
  borderRadius: 4,
  boxShadow: '0 3px 5px 2px rgba(2, 212, 225, .3)',
  color: 'white',
});

const phoneRegExp=/^[7-9][0-9]{9}$/

function useQuery() {
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
}

const settings = ['Profile', 'Account', 'Logout'];

export default function NavBar(props) 
{

  const data = props.data;
  const cid = props.cid;

  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };



  const [error, setError] = React.useState("");
  const [search, setSearch] = React.useState("");
  const onChange = (event) => {
    setSearch(event.target.value);
    // console.log(event.target.value);
  };




  let history = useHistory();

  const handleSearch= (props) => {
    window.location = `/search?q=${search}`;
    console.log(search)

  }

  let query = useQuery();
  const { pathname } = useLocation();


  useEffect(() => {

  if("/search"=== pathname)
    setSearch(query.get("q"))
    
  }, [history]);
  

  return (
    <React.Fragment>

      
      
      <Box sx={{ flexGrow: 1 }}>

        <RootStyle elevation ={0} color= "inherit"  sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
          <Toolbar  sx={{ borderBottom : 1, borderColor: 'grey.400' }}>
          
            <Link underline="none" href="/buy">
              <img style = {{ width :32, height :32, margin : 4}} alt = "logo" src = {Logo} />
            </Link>
          
            <Box sx={{ 
              flexGrow: 1 , 
              pt : 1 ,
              display: 'flex',
              alignItems: 'left',
              width: 'fit-content',
              edge: 'left'
            }}>
              <Title as={Link}underline="none" href="/buy" variant="h5" >
           
                  ShopEasy
            
              </Title>

              <Search>

                <StyledInputBase
                  placeholder="Search for products, brands and more ..."
                  value={search}
                  onChange = {onChange}
                  inputProps={{ 'aria-label': 'search' }}
                />

                
              <IconButton onClick = {handleSearch}>
                    <SearchIcon  />
                  </IconButton>
                  
              </Search>
            </Box>


              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'right',
                  width: 'fit-content',
                  edge: 'right'
                }}
              >
               
               {cid ? <>
               

                  <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={() => {history.push("/profile"); handleClose() }}>Profile</MenuItem>
                <MenuItem onClick={() => {history.push("/account"); handleClose()}}>Account</MenuItem>
                <MenuItem onClick={() => {history.push("/cart"); handleClose()}}>Cart</MenuItem>
                <MenuItem onClick={() => {localStorage.removeItem("authToken"); history.push("/")}}>Logout</MenuItem>
              </Menu>
            </div>
               
               </>
               
              
              : <>
                 
                 <Button color="primary" component={Link} href="/login">
                    Login
                  </Button>
          
                  <Button color="primary" variant = "outlined" component={Link} href="/register" >Signup</Button>
              </>}

              </Box>  
        
          </Toolbar>
        </RootStyle>
        <Toolbar/>
    
      </Box>

    </React.Fragment>
  );

}


