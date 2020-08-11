import React from 'react';
import Navbar from './Navbar';
import Header from './Header';
import Particles from 'react-particles-js';
//import Navbar from './Navbar';
import {makeStyle, makeStyles} from '@material-ui/styles'
//import Resume from './Resume';


const useStyle = makeStyles({
    particlescanva:{

        position:"absolute",

    }
})


const Home = () =>{
    const classes = useStyle ()
    return(
        <div>
            <Particles
            canvasClassName={classes.particlescanva}
            params ={{
                particles:{
                    number:{
                        value:45
                    }
                }
            }} />
       <Navbar />
       <Header />
      
        </div>
    )
}
export default Home;