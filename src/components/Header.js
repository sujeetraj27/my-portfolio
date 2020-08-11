import React from 'react';
import {Typography, Avatar, Grid, Box } from '@material-ui/core';
import img1 from '../sujeet.jpg';
import Typed from 'react-typed';
import {makeStyles} from '@material-ui/styles';


// CSS STYLE
const useStyle = makeStyles( theme => ({
img1:{
    width: "20%",
    height: "20%",
    margin: "3rem"  
},
title:{
    color:"tomato"
},
subtitle:{
    color:"tan"
},
typedcontainer:{
    position:"absolute",
    top:"20%",
    left:"2%",
    transform:"tranlate(-50% -50%)",
    width:"100vw",
    textAlign:"center",
    zIndex:1
}
}));


const Header = () =>{
    const classes =useStyle()
    return(
        <Box className={classes.typedcontainer}>
            <Grid container justify="center">
            <img className={classes.img1} src={img1} alt="sujeet kumar" />
            </Grid>
      
      <Typography className={classes.title} variant="h4">
          <Typed strings ={["SUJEET KUMAR"]} typeSpeed ={40} />
      </Typography>
      <br />
      <Typography className={classes.subtitle} variant="h4">
          <Typed strings ={["Web Designer", "Web Developer"]} 
          typeSpeed ={40}
          backSpeed={60}
          loop />
      </Typography>
        </Box>
    )
}

export default Header;