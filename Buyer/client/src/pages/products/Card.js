import React from 'react'
import { makeStyles } from '@mui/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea, CardActions } from '@mui/material';

const useStyles = makeStyles({
    card: {
      maxWidth: 345,

      borderRadius: 10,
      position: 'absolute',


      backgroundSize: '200%',
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      transition: '0.6s',
      backgroundImage: 'linear-gradient(45deg,  #fff,#fff, #00a8ff)',
      '&:hover': {
        transform: "scale3d(1.2, 1.2, 1)",
        backgroundPosition: 'right'
      }
    }
  });

const Product_Card = () => {
  
    const classes = useStyles();
    
  return (
    <Card className={classes.card} onClick = {Product_click_Handler}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          Default
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
          across all continents except Antarctica
        </Typography>
      </CardContent>    
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button  size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  )
}

export default Product_Card