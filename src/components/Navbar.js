import React, { lazy ,Suspense} from 'react'
import {BrowserRouter as Router ,Route,Routes,Link,Outlet}from 'react-router-dom'
//import Typography from '@mui/material/Typography';
import {Typography, AppBar,Card, CardActions, CardContent, CardMedia, CssBaseline, Grid,Box, Toolbar,Button, Container} from '@mui/material'
//import PhotoCamera from '@material-ui/icons/PhotoCamera'
import logo from '../voxilogo.png'
import {BiShoppingBag} from 'react-icons/bi';
import {BiUser} from 'react-icons/bi';
import PhonesPage from './PhonesPage';
export default function Navbar() {
  const display = {
   cursor:'pointer',width:'100px',fontSize: '20px',fontWeight : '500',
   display:'inline-block',flexGrow:'1.1'
   , "@media (max-width: 999px)": {
display:'none'
  },
    "@media (min-width: 1000px)": {
display:'block'
    }


};
const resize={
  height:'50px',marginRight:'3%',
  "@media (min-width: 499px)": {
    height :'35px'
    },
    "@media (min-width: 1000px)": {
height:'50px',marginRight:'3%'
    }
    
  }

  const  divresize={
    marginLeft: '8%', display:'flex', flexDirection:'row' , flexGrow: '2',
    "@media (min-width: 499px)": {
      height :'35px',
      fontSize:'10px'
      },
      "@media (min-width: 1000px)": {
  height:'50px'
      }
      
    }
const small={ display: { xs:{height:'10px'},sm:'none',md: 'none', lg: 'block' }}
const helpstyle={
  marginLeft: '5%', fontSize: '20px',fontWeight : '500',  marginTop: '10px',flexGrow:'0.6',
  display: { xs:'none',sm:'none',md: 'none', lg: 'block'}
}

  return (
    <>
      <AppBar position='relative' sx={{ bgcolor: "#191714", height:'81px',boxShadow:'none' }}>
      <Toolbar sx={{marginTop: '10px', marginLeft: '10px',display:'flex' , flexDirection:'row'}}>
    <Link to='/' style={{marginRight:'25px'}}>  
       <Box component='img' src={logo}  sx={resize}/>
    </Link>
    <Link to='/Simonly' style={{textDecoration:'none'}}>
     <Typography variant="h6" color='white' sx={display}>SIM only</Typography>
    </Link>
     <Link to='/PhonesPage' style={{textDecoration:'none'}}>      
     <Typography variant="h6" color='white' sx={display}  >Phones</Typography>
     </Link>
     <Typography variant="h6" color='white' sx={display}>Activate SIM</Typography>
     <Typography variant="h6" color='white' sx={{ fontSize: '20px',fontWeight : '500' , flexGrow:'8.3'}}>Why VOXI</Typography>
<div style={divresize}>
  <BiShoppingBag className='bag'  />
  <Typography variant="h6" color='white' sx={helpstyle}>Help</Typography>
  <Button variant="outlined"  size="large" sx={{borderColor:'white',borderRadius:'0'}}>
 <BiUser color='white' style={{height: '24px', width:'24px'}}/> 
<Typography variant='h6' color='white' sx={{fontSize: '20px',fontWeight : '500', textTransform:'none'}} >Sign in
    </Typography>
</Button>

</div>
     </Toolbar>
    </AppBar >
  
    </>
  )
}
