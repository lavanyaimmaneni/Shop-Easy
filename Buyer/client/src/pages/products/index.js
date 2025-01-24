import React from 'react'
import Typography from '@mui/material/Typography';
import { Box,Chip,Divider,Paper,Stack , Slider, Grid} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { green, grey, orange, yellow } from '@mui/material/colors';
import StarIcon from '@mui/icons-material/Star';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';


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


const ProductCard = () => {
    
    const classes = useStyles();
    const Product_click_Handler = () => {
        window.location = "/product/:pid"
      }
  
    return(
        <div className={classes.card} onClick = {Product_click_Handler}>
            <Paper variant="outlined" sx={{ maxWidth: 250, m:1}}>
                <img  className={classes.thumb} src="https://rukminim2.flixcart.com/image/800/960/ku79vgw0/watch/a/g/j/ch2601-fossil-men-original-imaff62hurpdhhha.jpeg?q=50" alt="Watch"/>
                <Typography component="div">
            <Box color={grey[500]} sx ={{  textAlign : 'left', textTransform: 'uppercase' ,fontWeight: 'bold', m: 1}}>
                                    Fossil
            </Box>
            <Box sx ={{  textAlign : 'left' , m: 1}}>
                                    CH2601 DECKER Analog Watch - For Men
                                </Box>
                                <Stack direction= "row" sx={{m:1}}>
                                    <Chip  label="4.3" color="success" size="small" icon={<StarIcon />}/>
                                    <Typography sx={{ pl : 1}} color={grey[500]}>
                                        8,111 ratings
                                    </Typography>
                                </Stack>
                                <Stack direction="row"  sx ={{m :1}}>
                                    <Typography variant = 'h5'>
                                        ₹6,494
                                    </Typography>
                                    <Typography sx={{mt : 0.5, pl : 2, textDecoration :'line-through'}} color={grey[500]}>
                                        ₹11,995
                                    </Typography>

                                    <Typography sx={{mt : 0.5, pl : 2 }} color={green[600]}>
                                        42% off
                                    </Typography>

                                </Stack>



            </Typography>
            </Paper>
        </div>
    )
}


const Products = () => {
  const [value, setValue] = React.useState([0, 100]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
    setPrices({
        min : value[0],
        max: value[1]
    })
  };

  const [prices, setPrices] = React.useState({
      min : value[0],
      max : value[1]
  })

  const handlePrices  = (prop) => (event) => {
    if(prop == 'min'){
        if(event.target.value <= prices.max){
            setPrices({ ...prices, [prop]: event.target.value });
            setValue([event.target.value, prices.max])
        }
        else{
            const min = prices.max
            setPrices({ min : prices.max, max: event.target.value });
            setValue([min, event.target.value])
        }

    }
    else{
        if(event.target.value >= prices.min){
            setPrices({ ...prices, [prop]: event.target.value });
            setValue([prices.min , event.target.value])
    
        }
        else{
            const max = prices.min
            setPrices({ max : prices.min, min: event.target.value });
            setValue([ event.target.value, max])
        }
      
    }

  }

  
  return (
      <Box sx={{backgroundColor : grey[200]}}>
        
        <Box sx={{display : "flex"}}>

            <Box sx={{ minWidth : 300, p : 2,m : 1 ,backgroundColor : '#fff'}}>
                <Typography component="div">
                    <Box sx={{ fontWeight: 'bold',fontSize: 'h6.fontSize', m: 1 }}>Filters</Box>
                    <Divider sx={{mr:-2, ml:-2}}/>
                    
                    <Box sx={{ m: 1 }}>Price</Box>
                    <Slider
                        min= {0}
                        max = {1000}
                        getAriaLabel={() => 'Price range'}
                        value={value}
                        onChange={handleChange}
                        valueLabelDisplay="auto"
            
                    />

                    <Stack direction="row">
                    <FormControl fullWidth sx={{ m: 1 }}>
                        <InputLabel htmlFor="outlined-adornment-amount">Min</InputLabel>
                        <OutlinedInput
                            id="Min price"
                            size="small"
                            value={prices.min}
                            onChange={handlePrices('min')}
                            startAdornment={<InputAdornment position="start">₹</InputAdornment>}
                            label="Min"
                        />
                        </FormControl>
                        <FormControl fullWidth sx={{ m: 1 }}>
                        <InputLabel htmlFor="outlined-adornment-amount">Max</InputLabel>
                        <OutlinedInput
                            id="Max price"
                            size="small"
                            value={prices.max}
                            onChange={handlePrices('max')}
                            startAdornment={<InputAdornment position="start">₹</InputAdornment>}
                            label="Max"
                        />
                        </FormControl>
                    </Stack>

                    <Divider sx={{mr:-2, ml:-2, p:-0.5, mt : 1, mb : 1 }}/>
                    
                    <Box sx={{ m: 1 }}>Brands </Box>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox defaultChecked />} label="All Brands" />
                        <FormControlLabel control={<Checkbox  />} label="Brand 1" />
                        <FormControlLabel control={<Checkbox  />} label="Brand 3 " />
                        <FormControlLabel control={<Checkbox  />} label="Brand 2" />
                        <FormControlLabel control={<Checkbox  />} label="Brand 4" />
                        <FormControlLabel control={<Checkbox  />} label="Brand 5 " />
                        <FormControlLabel control={<Checkbox  />} label="Brand 6" />
                        <FormControlLabel control={<Checkbox  />} label="Brand 7" />

                    </FormGroup>
                </Typography>
            </Box>
            <Box  sx={{  width: 1,m : 1 ,backgroundColor : '#fff'}}>
            <Typography component="div">
                    <Box sx={{ fontWeight: 'bold',fontSize: 'h6.fontSize', m: 1 }}>Results</Box>
                    <Divider sx={{mr:-2, ml:-2}}/>
                </Typography>
                    <Box sx={{display : "flex",alignSelf : "start" , flexWrap : "wrap", m: 1}}>
                        <ProductCard/>
                        <ProductCard/>
                        <ProductCard/>
                        <ProductCard/>
                        <ProductCard/>
                        <ProductCard/>
                    </Box> 

            </Box>

        </Box>

      </Box>
    // <ProductCard/>
  )
}

export default Products

