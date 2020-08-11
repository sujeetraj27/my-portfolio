import React from 'react';
import {makeStyle, makeStyles} from '@material-ui/core/styles';
import {Typography, Box} from '@material-ui/core';
import Navbar from './Navbar';

const useStyles = makeStyles(theme =>({
    mainContainer:{
        backgroundColor:"#233"
    }, 

    timeLine:{
        position:"relative",
        padding:"1rem",
        margin: "0 auto",
        "&:before":{
            content: "''",
            position:"absolute",
            height:"100%",
            border:"1px solid tan",
            top:0,
            right:"40px",
        },
        "&:after":{
            content:"''",
            display:"table",
            clear:"both"
        },
        [theme.breakpoints.up("md")]:{
            padding:"2rem",
            "&:before":{
                left:"calc(50% - 1px)",
                right:"auto"
            }
        }
       
    },
    timeLineItem:{
        padding:"1rem",
        borderBottom:"2px solid tan",
        position:"relative",
        margin:"1rem 3reem 1rem 1rem",
        clear:"both",
        "&:after":{
        content:"''",
        position:"absolute"
        },
        "&:before":{
            content:"''",
            position:"absolute",
            right:"0.625rem",
            top:"calc(50% - 5px)",
            borderStyle:"solid",
            background:"tomato tomato transparent transparent",
            borderWidth:"0.625rem",
            transform:"rotate(45deg)"
        },
        [theme.breakpoints.up("md")]:{
            width:"44%",
            margin:"1rem",
            "&:nth-of-type(2n)":{
                float:"right",
                margin:"3rem",
                borderColor:"tan"
            }
        }
    },
    timeLineYear:{
        textAlign:"center",
        maxWidth:"9.375rem",
        margin:"0 3rem 0 auto",
        fontSize:"1.8rem",
        background:"tomato",
        color:"white",
        lineHight: 1,
        padding:" 0.5rem 0 1rem ",
        "&:before": {
            display:"none"
        },
        [theme.breakpoints.up("md")]:{
            textAlign:"center",
            margin:"0 auto",
           "&:nth-of-type(2n)":{
               float:"none",
               margin:" 0 auto"
           },
           "&:nth-of-type(2n):before":{
               display:"none"
           } 
        }
    },
    heading:{
        color:"tomato",
        padding:"3rem",
        texctTransform:"uppercase"
    },
    subHeading:{
        color:"white",
        padding:0,
        textTransform:"uppercase"
    }

}))

const Resume = () =>{
  const classes = useStyles();
    return(
        <>
        <Navbar />
        <Box component="header" className={classes.mainContainer}>
            <Typography variant="h4" align="center" className={classes.heading}>
                Working Experience
            </Typography>
            <Box component="div" className={classes.timeLine}>
              <Typography 
              className={`${classes.timeLineYear} ${classes.timeLineItem}`} variant="h2" >2020
              </Typography>
              <Box component="div" className={classes.timeLineItem}>
                  <Typography variant="h5" align="center" className={classes.subHeading}>
                      Front-end developer
                  </Typography>
                  <Typography variant="body1" align="center" style={{color:"tomato"}}>
                      NORTHMIST PVT. LTD.
                  </Typography>
                  <Typography variant="subtitle" align="center" style={{color:"tan"}}>
                  Worked on developing and maintenace E-commerce website in Shopify written in HTML, 
                  CSS, and JS. Worked on business logics and developed the functionality based 
                  on business needs.
                  </Typography>
              </Box>
              <Typography 
              className={`${classes.timeLineYear} ${classes.timeLineItem}`} variant="h2" >2017
              </Typography>
              <Box component="div" className={classes.timeLineItem}>
                  <Typography variant="h5" align="center" className={classes.subHeading}>
                      Front-end developer/manul testing
                  </Typography>
                  <Typography variant="body1" align="center" style={{color:"tomato"}}>
                      zorreka innovation pvt. ltd.
                  </Typography>
                  <Typography variant="subtitle" align="center" style={{color:"tan"}}>
                  Worked on developing and maintenace online school management  written in Angularjs/Reactjs. 
                  Worked on business logics and developed the functionality based 
                  on service needs. Also Worked on Manual testing.
                  </Typography>
              </Box>
            </Box>
            
        </Box>
        </>
    )
}
export default Resume;