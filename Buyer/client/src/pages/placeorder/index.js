import React from 'react'
import Typography from '@mui/material/Typography';
import { Box,Chip,Divider,Paper,Stack , Slider, Grid, Button, LinearProgress} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { amber, green, grey, orange, yellow } from '@mui/material/colors';
import axios from "axios";
import StarIcon from '@mui/icons-material/Star';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import {
    BrowserRouter as Router,
    Link,
    useLocation
  } from "react-router-dom";
  import { styled } from '@mui/material/styles';

  import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


const useStyles = makeStyles({
  card: {
     transition : "0.6s",
    '&:hover': {
      transform: "scale3d(1.05, 1.05, 1)"
      }
  },

  thumb : {
      width: "100%",
      height: "100%",
      maxHeight: 200,
      display: "block",
      objectFit: "contain"
  }
});


const OrderButton = styled(Button)(({ theme }) => ({
    
  backgroundColor: '#fb641b',
  height : 35,
  marginTop : 5,
  color : '#fff',
  '&:hover': {
    backgroundColor: '#f96c28',
  },
}));



const Product = (props) => {

  const classes = useStyles();

   const [quantity, setQuantity] = React.useState('1');

   const handleChange = (event) => {
     setQuantity(event.target.value);
   };



   const data = props.data ;
   const perc = Math.floor(100 - (data.price/data.MRP) * 100)

   console.log(data.image1)
   React.useEffect(() => {
      setQuantity(data.qty)
   },[])
  //  setQuantity(data.qty)

   return(
       <Box sx={{p : 2,mt : 1 ,backgroundColor : '#fff'}} >
       <Grid container>
           <Grid item xs={3} >
               <Paper variant='outlined' sx={{width: 250,height : 250, m:1}}>
               <img  className={classes.thumb} src={data.image} alt=""/>
               </Paper>
           </Grid>
           <Grid item xs ={9}>
               <Typography>
                   <Box color={grey[500]} sx ={{  textAlign : 'left', textTransform: 'uppercase' ,fontWeight: 'bold', m: 1}}>
                           {data.brand}
                   </Box>
                   <Box sx ={{  textAlign : 'left' , m: 1}}>
                          {data.name}
                   </Box>
                   <Stack direction="row"  sx ={{m :1}}>
                       <Typography variant = 'h5'>
                           ₹{data.price}
                       </Typography>
                       <Typography sx={{mt : 0.5, pl : 2, textDecoration :'line-through'}} color={grey[500]}>
                           ₹{data.MRP}
                       </Typography>

                       <Typography sx={{mt : 0.5, pl : 2 }} color={green[600]}>
                       {perc}% off
                       </Typography>

                   </Stack>

                   <FormControl sx={{minWidth : 100, mt : 2}} disabled >
                       <InputLabel id="demo-simple-select-label">Quantity</InputLabel>
                       <Select
                       labelId="demo-simple-select-label"
                       id="demo-simple-select"
                       value={quantity}
                       label="Quantity"
                       size="small"
                       onChange={handleChange}
                       >
                       <MenuItem value={1}>1</MenuItem>
                       <MenuItem value={2}>2</MenuItem>
                       <MenuItem value={3}>3</MenuItem>
                       <MenuItem value={4}>4</MenuItem>
                       <MenuItem value={5}>5</MenuItem>
                       </Select>
                   </FormControl>


               </Typography>


           </Grid>
       </Grid>
   </Box>
   )
} 


const PlaceOrder = (props) => {

  const [address, setAddress] = React.useState(0);
  const [fetching, setFetching] = React.useState(true)
  const [pds, setPDS ] = React.useState([]);

  const [total, setTotal]= React.useState(0);
  const [Qty, setQTy]= React.useState(0);

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  let t = 0;
  let q= 0;

  function getTotal(item, index){

    q = q + item.qty;
    t =  t + item.price * item.qty
    console.log("total" , t)


  }

  const [cust_addresses, setCust_addresses] = React.useState([])

  const handleChange = (event) => {
    setAddress(event.target.value);
  }

  

  React.useEffect(async () => {

    const cid = props.cid;
    console.log(cid);

    let add = []

    function myFunction(value, index, array){
      let a = value.name + " , " + value.city + " , " + value.doorno  + " , " + value.mobileno + " , " + value.pin;  
      add.push(a)
    }

    
    if(localStorage.getItem("authToken")){
  
      const config = 
      {
        headers: 
        {
          "Content-Type": "application/json",
        },
      };
      
      try 
      {
        const { data } = await axios.post("/api/cart/getAddress",{
            cid
        }, config);
        if(data.success){
          data.result.forEach(myFunction)
          setCust_addresses(add)
          console.log(cust_addresses)

          const oid = props.match.params.orderID

                    try 
                {
                  const { data } = await axios.post("/api/cart/getProducts",{
                      oid
                  }, config);
                  if(data.success){
                    
                    console.log(data.result)
                    setPDS(data.result)
                    data.result.forEach(getTotal);

                    
                  setTotal(t)
                  setQTy(q)

                  setFetching(false)


                    
                  }
                  else{ 
                    console.log(data)
                  setFetching(false)

                  }
                } 
                catch (error) 
                {
                  console.log(error)
                  setFetching(false)
                }
          
        }
        else{ 
          console.log(data)
        setFetching(false)

        }
      } 
      catch (error) 
      {
        console.log(error)
        setFetching(false)
      }

    }
    else{
      window.location = "/";


    }


   },[])

  
  return (
    <>
    {fetching ? <LinearProgress/> : 
    
  <>
  
  <Box height= "100%" sx = {{p : 2 ,backgroundColor : grey[200]}}>
      {/* <Box sx ={{backgroundColor : '#fff'}}>
        <Box sx ={{p : 2,backgroundColor : orange[600], color : '#fff'}}>
              Login
        </Box>
        <Box sx={{p : 2}}>
        <Stack direction="row"  sx ={{m :1}}>
                        <Typography variant = 'h6'>
                            Vivek Mani Charan
                        </Typography>

                        <Typography sx={{mt : 0.5, pl : 2, fontWeight : "bold" }}>
                            9398312945
                        </Typography>

                    </Stack>
        </Box>
      </Box> */}

      <Box sx ={{backgroundColor : '#fff' , mt : 2}}>
        <Box sx ={{p : 2,backgroundColor : orange[600], color : '#fff'}}>
              Select Address
        </Box>
        <Box sx={{p : 2}}>
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Address</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={address}
              label="Address"
              onChange={handleChange}
            >
                {cust_addresses.map((ad, index) => <MenuItem value={index}>{ad}</MenuItem>)}

            </Select>
          </FormControl>
        </Box>
      </Box>


      <Box sx ={{backgroundColor : '#fff' , mt : 2}}>
        <Box sx ={{p : 2,backgroundColor : orange[600], color : '#fff'}}>
              Order Summary
        </Box>
        <Box sx={{p : 2}}>
        <Stack direction="row"  sx ={{m :1}}>
              <Typography variant = 'h6'>
                  Total Items  :
              </Typography>

              <Typography sx={{mt : 0.5, pl : 2, fontWeight : "bold" }}>
                  {Qty}
              </Typography>

        </Stack>

        <Stack direction="row"  sx ={{m :1}}>
            <Typography variant = 'h6'>
                Order Value :
            </Typography>

            <Typography sx={{mt : 0.5, pl : 2, fontWeight : "bold" }}>
                ₹{total}
            </Typography>

        </Stack>
        </Box>
      </Box>
      {
        pds.map((pd)=> <Product  data={pd}/>)
      }

            <Box sx ={{backgroundColor : '#fff'}}>
        <Box sx ={{p : 2,backgroundColor : orange[600]}}>
             Payment
        </Box>
        <Box sx={{p : 2}}>
        <Stack direction="row"  sx ={{m :1}}>
              <Typography variant = 'h6'>
                  Wallet Balance :
              </Typography>

              <Typography sx={{mt : 0.5, pl : 2, fontWeight : "bold" }}>
                  ₹5000
              </Typography>

          </Stack>
          <OrderButton onClick={handleClickOpen}> Confirm Order</OrderButton>

          <div>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Success"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Your Order has failed to place as there is no enough balance.<br/> Balance : {5000}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => {window.location = '/'}} autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
        </Box>
      </Box>
    </Box></>

}</>
  )
}

export default PlaceOrder