import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';
import img1 from '../sujeet.jpg';
import { makeStyles } from '@material-ui/core/styles';
import MobilRightMenuSlider from '@material-ui/core/Drawer';
import  Footer from './Footer';
import{
AppBar,
Toolbar,
ListItem,
IconButton,
ListItemText,
Avatar,
Divider,
List,
Typography,
Box,
Drawer,
ListItemIcon,
Slider
} from '@material-ui/core';
import {
    ViewHeadline,
    Home,
    Work,
    Assignment,
    Timeline,
    ContactMail
} from '@material-ui/icons';
import { keys } from '@material-ui/core/styles/createBreakpoints';



//CSS STYLE
 const useStyle = makeStyles( theme =>({  
     menuSliderContainer: {
         width: "auto",
         background:"#511",
         height: "50rem"
     }, 
     img1: {
         display:"block",
         margin: "0.5rem auto",
         width: theme.spacing(13),
         height: theme.spacing(13)
     },
     ListItem:{
         color: "tan"
     },
     listText:{
         color:"tan"
     }
 }));
 const menuItems =  [
     {
    listIcon: <Home/>,
    listText: "Home",
    listPath: "/"
 },
 {
    listIcon: <Work/>,
    listText: "Work",
    listPath: "/work"
 },
 {
    listIcon: <Assignment/>,
    listText: "Resume",
    listPath: "/resume"
 },
 {
    listIcon: <Timeline/>,
    listText: "Timeline"
 },
 {
    listIcon: <ContactMail/>,
    listText: "Contacts",
    listPath: "/contact"
 }
     

 ]
const Navbar =()=>{
    const [state, setState] = useState({
        right: false
    })
    const toggleSlider = (Slider, open) =>() =>{
        setState({...state, [Slider]: open});
    };
    const classes =useStyle()
    const slideList = Slider =>(
        <Box 
        className={classes.menuSliderContainer} 
        component="div"
         onClick={toggleSlider(Slider, false)}
        >
        <img className={classes.img1} src={img1} alt="Sujeet kumar" />
        <Drawer />
        <List>
            {menuItems.map((isItem, key) => (
                <ListItem button key ={key} component ={Link} to ={isItem.listPath}>
                <ListItemIcon className={classes.ListItem}>
                 {isItem.listIcon}   
                </ListItemIcon>
                <ListItemText className={classes.listText} primary={isItem.listText} /> 
                </ListItem>
            ))}
            
            
        </List>
       </Box>
    )
    return(
        <>
       
        <Box component="nav">
            <AppBar position="static" style ={{backgroundColor: "#222"}}>
                <Toolbar>
                    <IconButton onClick ={toggleSlider("right", true)}>
                    <ViewHeadline  style={{color: "tomato"}}/>
                    </IconButton>
                    <Typography variant= "h5" style={{color:"tan"}} >Portfolio</Typography>
                    <MobilRightMenuSlider 
                    open={state.right}
                    onClose={toggleSlider("right", false)}
                    >
                        {slideList("right")}
                        <Footer />
                    </MobilRightMenuSlider>
                    
                </Toolbar>
            </AppBar>
        
        </Box>
        </>
    )
}

export default Navbar;