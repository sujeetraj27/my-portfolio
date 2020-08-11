import React from 'react';
import {BottomNavigation, BottomNavigationAction } from '@material-ui/core'
import{makeStyles} from '@material-ui/styles';
import Facebook from '@material-ui/icons/Facebook';
import Instagram from '@material-ui/icons/Instagram';
import Twitter from '@material-ui/icons/Twitter';
import LinkedIn from '@material-ui/icons/LinkedIn';



//import { Facebook } from '@material-ui/icons';
  

const useStyle = makeStyles({
root:{
  "& .MuiBottonNavigationAction-root":{
    minWidth:0,
    maxWidth:250
  },
  "& .MuiSvgIcon-root":{
    fill:"tan",
    "&:hover":{
      fill:"tomato",
      fontSize:"1.8rem"
    }
  }
},

})

const Footer =() =>{
  const classes = useStyle()
    return(
       <BottomNavigation width="auto"  style ={{background:"#222"}} >
           <a href="https://www.facebook.com/profile.php?id=100003096050007" target="_blank">
           <BottomNavigationAction
             style={{padding:0}}
             icon={<Facebook />}
             className={classes.root}
           />
           </a>
           <a href="https://www.instagram.com/kumarsujeet637/" target="_blank">
           <BottomNavigationAction 
            className={classes.root}
            className={classes.root}
             style={{padding:0}}
             icon={<Instagram />}
           />
           </a>
           <a href="https://twitter.com/kumarsujeet637" target="_blank">
           <BottomNavigationAction 
            className={classes.root}
             style={{padding:0}}
             icon={<Twitter />}
           />
           </a>
           <a href="https://www.linkedin.com/in/sujeet-kumar-2693b7aa/" target="_blank">
           <BottomNavigationAction 
            className={classes.root}
             style={{padding:0}}
            icon={<LinkedIn />}
           />
           </a>
       </BottomNavigation>
    )
}
export default Footer;