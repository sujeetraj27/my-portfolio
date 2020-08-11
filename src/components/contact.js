import React from 'react';
import {
    TextField,
    Grid,
    Box,
    Button,
    Typography,
    makeStyles, 
    Card,
    CardContent
    
} from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import {makeStyle, withStyles} from '@material-ui/styles';
import Navbar from './Navbar'
import Phone from '@material-ui/icons/Phone';
import Email from '@material-ui/icons/Email';
import Home from '@material-ui/icons/Home';
import { Height } from '@material-ui/icons';

//mport { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const useStyle = makeStyles(theme =>({
    form:{
        marginTop:"27%",
        marginLeft:"38%",
        transform:"translate(-50%, -50%)",
        position:"absolute",

        [theme.breakpoints.down("sm")]:{
            position:"absolute",
            marginLeft:"46%",
            marginTop:"50%",
            
        }
    },
    button:{
        marginLeft:"-5px",
        marginTop:"15px",
        color:"black",
        backgroundColor:"tomato"
    },
    Phone:{
        top:"45%",
        left:"70%",
        transform:"translate(-50%, -50%)",
        position:"absolute",
        
        [theme.breakpoints.down("sm")]:{
            marginTop: "63%",
            position: "absolute",
            marginLeft: "-14%",
        
           "&:nth-of-type(2n)":{
            float:"none",
            margin:" 0 auto"
        },
        "&:nth-of-type(2n):before":{
            display:"none"
        } 
        }
        
      },
      
     conDetails:{
         top:"17px",
         position:"relative"
        
     },
     conText:{
         color:"tan",
         marginLeft:"25px"
     },
     HeaderSize:{
         fontSize:"20px",
         color:"black",
         fontWeight:"bold"
     }
     
}))

const InputField = withStyles({
  root:{
  "& label.Mui-focused":{
      color:"tomato"
  },
  "& label":{
      color:"tan"
  },
  "& MuiOutlinedInput-root":{
      "& fieldset":{
          borderColor:"tan"
      }
  }
  },
  
})(TextField);



const Contact = () =>{
     const classes = useStyle()
    return (
        <div>
            <Navbar />
            <div style={{width: '100%', float: 'left !important'}} >
                <Box component ="div" className={classes.form}>
                    <Grid container >
                    <Box component="form">
                    <Typography variant="h4" className={classes.HeaderSize}>Hire or Contact me</Typography>
                    <InputField 
                    fullWidth={true} 
                    label="Name" 
                    varient="outLined" 
                    margin="dense"
                    size="medium"
                    inputProps={{style:{color:"white"}}}
                    />
                    <br />
                    <InputField 
                    fullWidth={true} 
                    label="Email" 
                    varient="outLined" 
                    margin="dense"
                    size="medium"
                    inputProps={{style:{color:"white"}}}
                    />
                    <br />
                    <InputField 
                    fullWidth={true} 
                    label="Comany name" 
                    varient="outLined" 
                    inputProps={{style:{color:"white"}}}
                    />
                    <br />
                     <Button type="button"  fullWidth={true} endIcon={<SendIcon />} className={classes.button} onClick={sendEmail}>
                     Contact Me
                         </Button>
                    

                    </Box>
                </Grid>
                </Box>
                <Box component="div" >
                   <Grid  className={classes.Phone}> 
                       <Typography variant="h4" className={classes.HeaderSize}>
                          Contact Details
                       </Typography>
                    <div className={classes.conDetails}>
                        <div style={{display: 'flex', margin:"15px"}}>
                            <Phone />
                            <div className={classes.conText}>9534796838</div>
                        </div>
                        <div style={{display: 'flex', margin:"15px"}}>
                            <Email />
                            <div className={classes.conText}>kumarsujeet637@gmail.com</div>
                        </div>
                        <div style={{display: 'flex', margin:"15px"}}>
                            <Home />
                            <div className={classes.conText}>Jaya Sai PG Near SGR Dental College, Bangalore, Karnatka-560037</div>
                        </div>
                     </div>
                   </Grid>
                </Box>
            </div>
        </div>
    );

}
export default Contact;
const sendEmail = () => {
    window.location.assign("mailto:kumarsujeet637@gmail.com?subject=join me");
    
	
} 