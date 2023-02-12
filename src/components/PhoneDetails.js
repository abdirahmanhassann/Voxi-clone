import React from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import PhonesPage from './PhonesPage';
import { useEffect } from 'react'
import { Link } from 'react-router-dom';
import {IoIosArrowBack} from 'react-icons/io'
import {CiWarning} from 'react-icons/ci'
import {FaCheckSquare} from 'react-icons/fa'
import {TbTruckDelivery} from 'react-icons/tb';
import {Typography, AppBar,Card, CardActions, CardContent, CardMedia, CssBaseline, Grid,Box, Toolbar,Button, Container} from '@mui/material';
import SimpleListMenu from './DropdownMenu';
import Footer from './Footer'
import SimpleBottomNavigation from './Bottomnav';
import { stripBasename } from '@remix-run/router'
export default function PhoneDetails() {
    const location= useLocation();
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
          

  return (
<>

   <Navbar/> 
   <Box sx={{Height:'fit-content',width:'100%',display:'flex',flexDirection:'row',flexFlow:'wrap',backgroundColor:'#191714',borderTop:'1px solid white'}}>
<Box sx={{Height:'fit-content',width:'40%',display:'flex',flexFlow:'wrap',gap:'10px',marginLeft:'3%',marginTop:'20px',flexDirection:'column'}}>
    <Box sx={{height:'fit-content',width:'fit-content',display:'flex', flexDirection:'row',}}>
        <IoIosArrowBack style={{height:'30px',width:'30px',color:'white'}}/>
        <Link to ='./..' style={{textDecoration:'none',marginTop:'5px'}}>
        <Typography variant="h5" color='white' sx={{fontWeight : '600',fontSize:'16px',alignSelf: 'center'}}>Back to phones</Typography>
        </Link>
    </Box>
    <Typography variant="h4" color='white' sx={{fontWeight:'900'}} >
{location.state.value.name}
</Typography>

<Box component='img' src={location.state.value.img}  sx={{height:' 650px',width:'max-content'}} />
</Box>
<Box sx={{Height:'fit-content',width:'29%',display:'flex',flexFlow:'wrap',gap:'10px',marginTop:'90px',flexDirection:'column'}}>
<Typography variant="h5" color='white' sx={{fontWeight : '600',fontSize:'18px',alignSelf: 'center',placeSelf:'flex-start'}}>
Select colour</Typography>
<SimpleListMenu />
<Box sx={{height:'fit-content',width:'fit-content',display:'flex',flexDirection:'row',gap:'5px'}}>
<FaCheckSquare style={{height:'26px',width:'26px',color:'white'}}/>
        <Typography variant="h5" color='white' sx={{fontWeight : '300',fontSize:'18px',alignSelf: 'center'}}>In stock</Typography>
    </Box>
    <Box sx={{height:'fit-content',width:'fit-content',display:'flex',flexDirection:'row',gap:'5px'}}>
<TbTruckDelivery style={{height:'26px',width:'26px',color:'white'}}/>
        <Typography variant="h5" color='white' sx={{fontWeight : '300',fontSize:'18px',alignSelf: 'center'}}>Order before 10pm for next working day free delivery
</Typography>
    </Box>


</Box>
   </Box>
<Box  sx={{Height:'fit-content',width:'95%',display:'flex',backgroundColor:'#191714'
,borderTop:'1px solid white',flexDirection:'column',paddingY:'50px',paddingLeft:'5%',gap:'10px'}}  >
<Typography variant="h3" color='white' sx={{fontWeight:'900'}} >
£{location.state.value.price}/month
</Typography>
<Typography variant="h5" color='white' sx={{
fontWeight : '300',fontSize:'15px'}}>£0 upfront cost. Subject to status and credit check.
</Typography>
<Typography variant="h5" color='white' sx={{
fontWeight : '300',fontSize:'15px',textDecorationLine:'underline'}}>Payement breakdown
</Typography>
<Typography variant="h5" color='white' sx={{
fontWeight : '300',fontSize:'15px',textDecorationLine:'underline'}}>Pay total today
</Typography>

</Box>
<SimpleBottomNavigation props={location.state.value} /> 
<Footer/>
   </>
  )
}
