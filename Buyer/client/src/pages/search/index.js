import React from 'react'
import Typography from '@mui/material/Typography';
import { Box,Chip,Divider,Paper,Stack , Slider, Grid, Button, LinearProgress} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { green, grey, orange, yellow } from '@mui/material/colors';
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
  import Select from '@mui/material/Select';
  import MenuItem from '@mui/material/MenuItem';

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


const ProductCard = (props) => {

    const {data} = props
    
    const classes = useStyles();
    const Product_click_Handler = () => {
        window.location = "/product/" + data.pid;
      }

    const perc = Math.floor(100 - (data.price/data.MRP) * 100)

    return(
        <div className={classes.card} onClick = {Product_click_Handler}>
            <Paper variant="outlined" sx={{width: 230, m:1}}>
                <img  className={classes.thumb} src={data.image1} alt={data.name}/>
                <Typography component="div">
            <Box color={grey[500]} sx ={{  textAlign : 'left', textTransform: 'uppercase' ,fontWeight: 'bold', m: 1}}>
                                    {data.brand}
            </Box>
            <Box sx ={{  textAlign : 'left' , m: 1}}>
                                    {data.name}
                                </Box>
                                {/* <Stack direction= "row" sx={{m:1}}>
                                    <Chip  label="4.3" color="success" size="small" icon={<StarIcon />}/>
                                    <Typography sx={{ pl : 1}} color={grey[500]}>
                                        8,111 ratings
                                    </Typography>
                                </Stack> */}
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



            </Typography>
            </Paper>
        </div>
    )
}




function useQuery() {
    const { search } = useLocation();
    return React.useMemo(() => new URLSearchParams(search), [search]);
}

const Brand = (props) => {
  

  const {brand, check} = props;
  const [checked, setChecked] = React.useState(check);

  const handleChange = () => {
    if(checked){
      const queryParams = new URLSearchParams(window.location.search)
      const b= queryParams.getAll('b');
    
      const deleteb = brand

      queryParams.delete('b'); 
      b.forEach(generatenewQuery)
    
      function generatenewQuery(brd){
        if(brd !== deleteb){
          queryParams.append('b',brd)
        }
      }
    
      window.location = "/search?" + queryParams.toString();
    }
    else{
      const queryParams = new URLSearchParams(window.location.search)
      queryParams.append('b', brand)
      window.location = "/search?" + queryParams.toString();
    }
  }
  return <FormControlLabel control={<Checkbox checked = {checked} onClick={handleChange}/>} label={brand} />

}

const Category = (props) => {
  const {category, check} = props;



  const handleChange = () => {
    if(check){
      const queryParams = new URLSearchParams(window.location.search)
      const c = queryParams.getAll('c');
    
      const deleteb = category

      queryParams.delete('c'); 
      c.forEach(generatenewQuery)
    
      function generatenewQuery(cty){
        if(cty !== deleteb){
          queryParams.append('c',cty)
        }
      }
    
      window.location = "/search?" + queryParams.toString();
    }
    else{
      const queryParams = new URLSearchParams(window.location.search)
      queryParams.append('c', category)
      window.location = "/search?" + queryParams.toString();
    }
  }
  return <FormControlLabel control={<Checkbox checked = {check} onClick={handleChange}/>} label={category} />

}

const Search = () => {
  const [sort, setSort] = React.useState('R');

  const [value, setValue] = React.useState([0, 10000]);
  const [prices, setPrices] = React.useState({
    min : value[0],
    max : value[1]
})



  const handleChange = (event, newValue) => {

    setValue(event.target.value);
    setPrices({
        min : event.target.value[0],
        max: event.target.value[1]
    })
  };

  const queryParams = new URLSearchParams(window.location.search)


  const handlePrice = () => {
    queryParams.delete('min'); 
    queryParams.append('min', prices.min)
    queryParams.delete('max'); 
    queryParams.append('max', prices.max)
    window.location = "/search?" + queryParams.toString();

  }

    const handleSort = (event) => {
      setSort(event.target.value);
      queryParams.delete('s'); 
      queryParams.append('s', event.target.value)
      window.location = "/search?" + queryParams.toString();

  };





  const handlePrices  = (prop) => (event) => {
    if(prop === 'min'){
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


  
  const [brands, setBrands] = React.useState([])
  const selectedBrands = []

  const [categories, setCategories] = React.useState([])

  const selectedCategories = []

  let s = ""

  const selectedPriceRange = [0, 10000]

  for (const [key, value] of queryParams) {
    if(key === "b"){
      selectedBrands.push(value)
    }
    else if(key === "c"){
      selectedCategories.push(value)
    }
    else if(key === "min"){
      selectedPriceRange[0] = value

    }
    else if(key === "max"){
      selectedPriceRange[1] = value
    }
    else if(key === "s"){
      s = value
    }
  }

  const handleSetPrice = () => {
    setValue(selectedPriceRange)
    setPrices({
      min : selectedPriceRange[0],
      max: selectedPriceRange[1]
  })
  }

  const [fetching , setFetching] = React.useState(true)
  const [products, setProducts] = React.useState([]);
  let query = useQuery();

  function Initialize(item, index){

    if(brands.indexOf(item.brand) === -1) {
      let b = brands;
      b.push(item.brand)
      setBrands(b);

    }

    if(categories.indexOf(item.category) === -1) {

      let c = categories;
      c.push(item.category)
      setCategories(c)

    }
  

  }
  

  React.useEffect(async () => {
    handleSetPrice();
    setSort(s)
    let q = query.get("q");
    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };
    try 
    {
      const { data } = await axios.post(
        "/api/search?" + queryParams.toString(), 
        { },
        config
      );
          
      setProducts(data.result)


      data.result1.forEach(Initialize);

      setFetching(false)



    }
    catch (error) 
    {

        console.log(error);
        setFetching(false)

    }
  }, [])

  

  return (
    <>
      {/* <div>Searching : {query.get("q")} </div> */}
      <Box sx={{backgroundColor : grey[200]}}>

        {fetching ? <LinearProgress/> : <>
        

                
        <Box sx={{display : "flex"}}>

            <Box sx={{ maxWidth : 310, p : 2,m : 1 ,backgroundColor : '#fff'}}>
                <Typography component="div">
                    <Box sx={{display : 'flex'}}>
                    <Box sx={{ fontWeight: 'bold',fontSize: 'h6.fontSize', m: 1 , flex : 'auto'}}>Filters</Box>
    
                    <Button onClick = {()=>{window.location = "/search?q=all"}}> Clear Filters</Button>
                    </Box>
                    <Divider sx={{mr:-2, ml:-2}}/>
                    
                    <Box sx={{ m: 1 }}>Price</Box>
                    <Slider
                        min= {0}
                        max = {10000}
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
                        <Button onClick={handlePrice}>Set</Button>
                    </Stack>

                    <Divider sx={{mr:-2, ml:-2, p:-0.5, mt : 1, mb : 1 }}/>
                    
                    <Box sx={{ m: 1 }}>Category</Box>
                    <FormGroup>
                        {
                          categories.map((category) => {
                            
                            if(selectedCategories.includes(category))
                              return  <Category check ={true} category = {category} />
                            else
                              return  <Category check ={false} category = {category} />

                          }) 
                        }
                    

                    </FormGroup>

                    <Divider sx={{mr:-2, ml:-2, p:-0.5, mt : 1, mb : 1 }}/>
                    
                    <Box sx={{ m: 1 }}>Brand </Box>
                    <FormGroup>
                          {brands.map((brand) => {
                            if(selectedBrands.includes(brand))
                            return  <Brand check ={true} brand= {brand} />
                          else
                            return  <Brand check ={false} brand = {brand} />
                          })}
                    </FormGroup>
                </Typography>
            </Box>
            <Box  sx={{  width: 1,p : 2,m : 1 ,backgroundColor : '#fff'}}>
            <Typography component="div">
                    <Box sx={{display : 'flex'}}>
                        <Box sx={{ fontWeight: 'bold',fontSize: 'h6.fontSize', m: 1 , flex : 'auto'}}>Results</Box>
    
                        
                    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                              <InputLabel id="demo-select-small">Sort</InputLabel>
                              <Select
                                labelId="demo-select-small"
                                id="demo-select-small"
                                value={sort}
                                label="Sort"
                                onChange={handleSort}
                              >
                                <MenuItem value="R">
                                  <em>Relavance</em>
                                </MenuItem>
                                <MenuItem value="N">Newest First</MenuItem>
                                <MenuItem value="H">Price : High to Low</MenuItem>
                                <MenuItem value="L">Price : Low to High</MenuItem>
                              </Select>
                            </FormControl>

                            </Box>
                    <Divider sx={{mr:-2, ml:-2}}/>
                </Typography>
                    <Box sx={{display : "flex",alignSelf : "start" , flexWrap : "wrap", m: 1}}>
                        {products.map((product) => <ProductCard  data={product}/>)}
                    </Box> 

            </Box>

          </Box>
        
        
        </>}

        

      </Box>
    </>
    
  )
}

export default Search
