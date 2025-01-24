import React from 'react'
import './index.css'
import { Container, Grid, Box ,Typography, Button, Stack, Chip, Divider, LinearProgress} from '@mui/material';
import { styled } from '@mui/material/styles';
import { green, grey, orange, yellow } from '@mui/material/colors';
import StarIcon from '@mui/icons-material/Star';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BoltIcon from '@mui/icons-material/Bolt';
import axios from "axios";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';




const CartButton = styled(Button)(({ theme }) => ({
    
    backgroundColor: '#ff9f00',
    color : '#fff',
    '&:hover': {
      backgroundColor: '#ffa40d',
    },
  }));


const BuyButton = styled(Button)(({ theme }) => ({
    
    backgroundColor: '#fb641b',
    '&:hover': {
      backgroundColor: '#f96c28',
    },
  }));


const Product = ({history, match}) => {

    const [fetching, setFetching] = React.useState(true);
    const [src, setSRC] = React.useState([]);
    const [productDetails, setProductDetails] = React.useState([]);

    const [flag, setFlag] = React.useState(false);

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
      window.location = "/cart"
    };

    React.useEffect(async () => {

        const config = {
            header: {
              "Content-Type": "application/json",
            },
          };


          try 
          {
            const { data } = await axios.post(
              `/api/product/${match.params.productID}`,
              {

              },
              config
            );
            
            console.log("result", data.result[0])
            let imgs = []
            imgs.push(data.result[0].image1)
            imgs.push(data.result[0].image2)
            imgs.push(data.result[0].image3)

            setSRC(imgs)
            console.log("imgs", imgs)
            setProductDetails(data.result[0])

            
            setFetching(false)
              
          } 
          catch (error) 
          {
            console.log(error.response.data);
            setFetching(false)
          }
      }, []);


    const [index, setIndex] = React.useState(0)

    const myRef = React.createRef();

    const handleTab = (index) =>{
        setIndex(index)
        const images = myRef.current.children;
        for(let i=0; i<images.length; i++){
          images[i].className = images[i].className.replace("active", "");
        }
        images[index].className = "active";
    };

    React.useEffect(() => {
        if(!fetching)
            myRef.current.children[index].className = "active";
    },[fetching]);


    const calcPerc = Math.floor(100 - (productDetails.price/productDetails.MRP)*100)
    


    const AddToCart = async () => {
        if(localStorage.getItem("authToken")){
            const config = 
            {
              headers: 
              {
                "Content-Type": "application/json",
                "Authorization" : `Bearer ${localStorage.getItem("authToken")}`,
              },
            };

            try 
            {
              const { data } = await axios.get("/api/private", config);
              if(data.success){
                let cid = data.cid;
                let pid = match.params.productID
                console.log(cid, pid);
                let qty = 1;

                try{

                    const { data } = await axios.post("/api/cart/addToCart", {cid,pid,qty}, config);
                    if(data.success){
                        console.log("success");
                        setFlag(true);
                    }
                    else{
                        console.log("failure")
                    }

                }
                catch (error) 
                {
                    console.log(error);
                }

                

              }
              else{ 
                localStorage.removeItem("authToken");
                history.push("/login");
              }
            } 
            catch (error) 
            {
              localStorage.removeItem("authToken");
              history.push("/login");
            }
      
        }
        
        else{
            history.push("/login");
        }
        
    }

    const BuyNow = async () => {
        if(localStorage.getItem("authToken")){
            const config = 
            {
              headers: 
              {
                "Content-Type": "application/json",
                "Authorization" : `Bearer ${localStorage.getItem("authToken")}`,
              },
            };

            try 
            {
              const { data } = await axios.get("/api/private", config);
              if(data.success){
                let cid = data.cid;
                let pid = match.params.productID
                console.log(cid, pid);
              }
              else{ 
                localStorage.removeItem("authToken");
                history.push("/login");
              }
            } 
            catch (error) 
            {
              localStorage.removeItem("authToken");
              history.push("/login");
            }
      
        }
        
        else{
            history.push("/login");
        }
    }
    


    return (
        <>

        {fetching ? <LinearProgress/> : 
        
        <>
            <Container>
                <Grid container>
                    <Grid item xs={12} md ={6} sx={{p : 2}} >
                        <Box >
                        <div className="big-img">
                            <img src={src[index]} alt=""/>
                        </div>
    
                        <div className="thumb" ref={myRef}>
                            {
                                src.map((img, index) =>(
                                <img src={img} alt="" key={index} 
                                onClick={() => handleTab(index)}
                                />
                            ))
                            }
                        </div>

                        </Box>
                    </Grid>
                    <Grid item xs={12} md ={6}  sx={{mt :10}}>
                        <Typography component="div">
                                <Box color={grey[500]} sx ={{  textAlign : 'left', textTransform: 'uppercase' ,fontWeight: 'bold', m: 1}}>
                                    {productDetails.brand}
                                </Box>
                                <Box sx ={{  textAlign : 'left' , m: 1}}>
                                   {productDetails.name}
                                </Box>
                                <Stack direction="row"  sx ={{m :1}}>
                                    <Typography variant = 'h5'>
                                        ₹{productDetails.price}
                                    </Typography>
                                    <Typography sx={{mt : 0.5, pl : 2, textDecoration :'line-through'}} color={grey[500]}>
                                        ₹{productDetails.MRP}
                                    </Typography>

                                    <Typography sx={{mt : 0.5, pl : 2 }} color={green[600]}>
                                        {calcPerc}% off
                                    </Typography>

                                </Stack>

                                {/* <Stack direction= "row" sx={{m:1}}>
                                    <Chip  label="4.3" color="success" size="small" icon={<StarIcon />}/>
                                    <Typography sx={{ pl : 1}} color={grey[500]}>
                                        8,111 ratings
                                    </Typography>
                                </Stack> */}

                        <Box sx={{display : "flex", mt : 1}}>
                            <Stack direction="row" spacing={2}>
                                <CartButton variant="contained" onClick={AddToCart} sx={{color : 'white' }} startIcon ={<ShoppingCartIcon/>}>
                                    ADD TO CART
                                </CartButton>
                                <BuyButton variant="contained" onClick={BuyNow} sx={{color : 'white'}}  startIcon ={<BoltIcon />}>
                                    BUY NOW
                                </BuyButton>
                            </Stack>
                        </Box>

                                <Divider sx={{m : 1}}/>

                                <Box sx ={{ textAlign : 'left' , m: 1}}>
                                    <Typography variant = 'h6'>
                                        Product Description
                                    </Typography>
                                </Box>

                                <Box sx ={{  textAlign : 'left' , m: 1}}>
                                    <Typography variant='body2'>
                                        {productDetails.descrip}
                                    </Typography>
                                </Box>

                                {/* <Divider sx={{m : 1}}/>

                                <Box sx ={{ textAlign : 'left' , m: 1}}>
                                    <Typography variant = 'h6'>
                                        Product Details
                                    </Typography>
                                </Box>

                                {ProductDetails.map((detail) => { return(
                                    <Grid container  sx ={{m :1}}>
                                        <Grid item  xs={4}>
                                            <Box sx={{ fontWeight: 'bold'}} >
                                                <Typography variant = '' color={grey[400]} >
                                                    {detail.label}
                                                </Typography>
                                            </Box>
                                        </Grid>
                                        <Grid item  xs={8}>
                                            <Typography variant='body2'>
                                                {detail.Description}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                )})} */}
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
            <Dialog
        open={flag}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Success"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
             Product added to cart
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <CartButton onClick={handleClose}>Go to Cart</CartButton>

        </DialogActions>
      </Dialog>
        </>
        
        }
        
        
        </>

    )
}

export default Product