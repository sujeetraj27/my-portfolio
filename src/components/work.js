import React from 'react';
import {makeStyles} from '@material-ui/styles';
import {
    Box,
    Card,
    Grid,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography
} from '@material-ui/core';
import Navbar from './Navbar';
import project1 from "../image/school.jpeg"
import project2 from "../image/commerce.png"

const useStyle = makeStyles({
    mainContainer:{
        background:"#235",
        height:"100%"
    }, 
    cardContainers:{
        width:345,
        margin:"3rem",
        margin:"5rem auto"
    },
    toolsNames:{
        color:"black",
        fontSize:"1.25rem"
    }
    
});

const Work =()=>{
    const classes = useStyle()
    return(
        
    <Box component="div" className={classes.mainContainer}>
     <Navbar />
     <Grid container justify="center" alignItems="center">
      <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainers}>
              <CardActionArea>
                  <CardMedia 
                   component="img"
                   alt="project 1"
                   height="140"
                   image={project1}
                   className={classes.cardmediaContainer}/>
                  <CardContent>
                      <Typography gutterBottom variant="h5">
                           Online Schol Management system 
                      </Typography>
                      
                      <Typography variant="body2" color="textSecondary" component="p">
                          this is project decscription.
                      </Typography>
                      <Typography variant="h4" className={classes.toolsNames} component="p">
                          HTML, CSS,ANGULAR
                      </Typography>
                  </CardContent>
              </CardActionArea>
          </Card>
      </Grid>
      
      <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainers}>
              <CardActionArea>
                  <CardMedia 
                   component="img"
                   alt="project 2"
                   height="230"
                   image={project2}
                   className=
                   
                   {classes.cardmediaContainer}
                  />
                  <CardContent>
                      <Typography gutterBottom variant="h5">
                          project2 
                      </Typography>
                      <Typography variant="body2" color="textSecondary" component="p">
                          this is project decscription.
                      </Typography>
                      <Typography variant="h4" className={classes.toolsNames} component="p">
                          HTML, CSS, JS
                      </Typography>
                  </CardContent>
              </CardActionArea>
          </Card>
      </Grid>
      <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainers}>
              <CardActionArea>
                  <CardMedia 
                   component="img"
                   alt="project 3"
                   height="230"
                   image={project2}
                   className=
                   {classes.cardmediaContainer}
                  />
                  <CardContent>
                      <Typography gutterBottom variant="h5">
                          project3
                      </Typography>
                      <Typography variant="body2" color="textSecondary" component="p">
                          this is project decscription.
                      </Typography>
                  </CardContent>
              </CardActionArea>
          </Card>
      </Grid>
      <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainers}>
              <CardActionArea>
                  <CardMedia 
                   component="img"
                   alt="project 2"
                   height="230"
                   image={project2}
                   className={classes.cardmediaContainer}
                  />
                  <CardContent>
                      <Typography gutterBottom variant="h5">
                          project4
                      </Typography>
                      <Typography variant="body2" color="textSecondary" component="p">
                          this is project decscription.
                      </Typography>
                  </CardContent>
              </CardActionArea>
          </Card>
      </Grid>
     </Grid>
     </Box>
        
    )
}

export default Work;