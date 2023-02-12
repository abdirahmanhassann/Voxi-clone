import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import PhonesPage from './PhonesPage'
import {BrowserRouter as Router ,Route,Routes,Link}from 'react-router-dom'
//import Typography from '@mui/material/Typography';
import {Typography, AppBar,Card, CardActions, Box,CardContent, Button,CardMedia, CssBaseline, Grid, Toolbar, Container} from '@mui/material'
//import PhotoCamera from '@material-ui/icons/PhotoCamera'
import logo from '../voxilogo.png'
import {BiShoppingBag} from 'react-icons/bi';
import {FaRegPaperPlane,FaTiktok,FaMedal} from 'react-icons/fa'
import {BsFacebook,BsWhatsapp,BsSnapchat,BsTwitter,BsInstagram,BsMessenger,BsYoutube} from 'react-icons/bs'
import {SiPrimevideo,SiNetflix,SiYoutubemusic} from 'react-icons/si'
import {TfiReload} from 'react-icons/tfi'
import {HiOutlineChatAlt2} from 'react-icons/hi'
import useMediaQuery from '@mui/material/useMediaQuery';
import refurbishedphones from '../refurbishedphones.png'
import voxibgpic from '../voxibgpic.jpg'
import voxibgpic2 from '../voxibgpic2.jpg'
import voxibgpic3 from '../voxibgpic3.jpg'
import voxibgpic4 from '../voxibgpic4.jpg'
import voxibgpic5 from '../voxibgpic5.png'
import fornow from '../voxipic6.png'
import networkpic from '../networkprov.png'
import iphone from '../iphone.png'
import googlepixel from '../googlepixel.png'
import samsungphone from '../samsungphone.png'

export default function (){
  const phonedivresize={
    display:'flex',flexDirection:'row',
    "@media (max-width: 699px)": {
      flexDirection:'column'
      },
      "@media (max-width: 1000px)": {
flexDirection:'column'
      }
  }
  
    return(
        <>
        <Box
sx={{height:'630px',width:'100%',display:'flex',flexDirection:'column'}}
>
  <Box sx={{display:'flex',flexDirection:'row',gap:'69%',margin:'30px'}}>
<Typography variant="h5" color='black' sx={{fontWeight : '800',fontSize:'28px',}}>Featured phones
</Typography>
<Link to='/PhonesPage' style={{textDecoration:'none'}}>      
<Typography variant="h7" color='black' sx={{fontWeight : '100',marginTop:'5px',textAlign:'center',textDecoration:'underline'
,cursor:'pointer','&:hover': {
  textDecoration:'none'
}}}> View all phones
</Typography>
</Link>
</Box>
<Box className='phoneBox' sx={{
    display:'flex',flexDirection:'row',
    "@media (max-width: 699px)": {
      flexDirection:'column'
      },
      "@media (max-width: 1000px)": {
flexDirection:'column'
      }
  }}>
<Box sx={{display:'flex',flexDirection:'row',margin:'auto',height:'420px',width:'370px',backgroundColor:'white'
,border:'1px solid black',padding:'5px'}}>
  <Box sx={{backgroundColor:'#e8e7e7',height:'100%',width:'100%'}}>
  <Box sx={{display:'flex',flexDirection:'row',margin:'auto',}}>
  <Box component='img' src={iphone} sx={{height:' 180px',width:'min-content',marginTop:'20px'}} />
<Box sx={{display:'flex',flexDirection:'column',marginRight:'26px',marginTop:'20px',marginLeft:'19px',gap:'7px'}}>
<Typography variant="h5" color='#191714' sx={{fontWeight : '800',fontSize:'28px',}}>Apple iPhone 14 Pro</Typography>
<Typography variant="h5" color='#191714' sx={{fontWeight : '900',fontSize:'15px',marginTop:'10px'}}>Available in</Typography>
<Box sx={{display:'flex',flexDirection:'row',gap:'3px',marginTop:'10px'}}>
  <Box sx={{height:'17px',width:'17px',backgroundColor:'black',border:'1px solid black'}}></Box>
  <Box sx={{height:'17px',width:'17px',backgroundColor:'beige',border:'1px solid black'}}></Box>
  <Box sx={{height:'17px',width:'17px',backgroundColor:'white',border:'1px solid black'}}></Box>
  <Box sx={{height:'17px',width:'17px',backgroundColor:'darkGray',border:'1px solid black'}}></Box>
</Box>
<Typography variant="h5" color='white' sx={{fontWeight : '900',fontSize:'15px',marginTop:'10px'
,backgroundColor:'#191714',width:'fit-content',padding:'5px 3px'}}>128GB</Typography>
<Typography variant="h5" color='#191714' sx={{fontWeight : '400',fontSize:'17px'}}>From</Typography>
<Box sx={{display :'flex',flexDirection:'row',placeItems: 'baseline',marginTop:'-7px'}}> 
<Typography variant="h5" color='#191714' sx={{fontWeight : '900',fontSize:'28px'}}>£39.50</Typography>
<Typography variant="h5" color='#191714' sx={{fontWeight : 'light',fontSize:'17px'}}>/month</Typography>
</Box>
</Box>
  </Box>
<Button variant='contained' sx={{ height: '45px',margin:'auto',textDecoration:'none',fontSize:'16px',fontWeight:'900'
,textTransform:'none'
,width:'90%',borderRadius:'0',bgcolor:'#302e2b',color:'white',marginBottom:'-180px',marginLeft:'5%','&:hover': {
        color: 'white',
        backgroundColor: '#302e2b',
      }}}>View phone</Button>
</Box>
</Box>
<Box sx={{display:'flex',flexDirection:'row',flexFlow:'wrap',margin:'auto',height:'420px',width:'370px',backgroundColor:'white'
,border:'1px solid black',padding:'5px'}}>
  <Box sx={{backgroundColor:'#e8e7e7',height:'100%',width:'100%'}}>
  <Box sx={{display:'flex',flexDirection:'row',margin:'auto'}}>
  <Box component='img' src={googlepixel} sx={{height:' 180px',width:'min-content',marginTop:'20px'}} />
<Box sx={{display:'flex',flexDirection:'column',marginRight:'26px',marginTop:'20px',marginLeft:'19px',gap:'7px'}}>
<Typography variant="h5" color='#191714' sx={{fontWeight : '800',fontSize:'28px',}}>Google Pixel 7</Typography>
<Typography variant="h5" color='#191714' sx={{fontWeight : '900',fontSize:'15px',marginTop:'10px'}}>Available in</Typography>
<Box sx={{display:'flex',flexDirection:'row',gap:'3px',marginTop:'10px'}}>
  <Box sx={{height:'17px',width:'17px',backgroundColor:'black',border:'1px solid black'}}></Box>
  <Box sx={{height:'17px',width:'17px',backgroundColor:'beige',border:'1px solid black'}}></Box>
  <Box sx={{height:'17px',width:'17px',backgroundColor:'white',border:'1px solid black'}}></Box>
  <Box sx={{height:'17px',width:'17px',backgroundColor:'darkGray',border:'1px solid black'}}></Box>
</Box>
<Typography variant="h5" color='white' sx={{fontWeight : '900',fontSize:'15px',marginTop:'10px'
,backgroundColor:'#191714',width:'fit-content',padding:'5px 3px'}}>128GB</Typography>
<Typography variant="h5" color='#191714' sx={{fontWeight : '400',fontSize:'17px'}}>From</Typography>
<Box sx={{display :'flex',flexDirection:'row',placeItems: 'baseline',marginTop:'-7px'}}> 
<Typography variant="h5" color='#191714' sx={{fontWeight : '900',fontSize:'28px'}}>£22.00</Typography>
<Typography variant="h5" color='#191714' sx={{fontWeight : 'light',fontSize:'17px'}}>/month</Typography>
</Box>
</Box>
  </Box>
<Button variant='contained' sx={{ height: '45px',margin:'auto',textDecoration:'none',fontSize:'16px',fontWeight:'900'
,textTransform:'none'
,width:'90%',borderRadius:'0',bgcolor:'#302e2b',color:'white',marginBottom:'-257px',marginLeft:'5%','&:hover': {
        color: 'white',
        backgroundColor: '#302e2b',
      }}}>View phone</Button>
</Box>
</Box>
<Box sx={{display:'flex',flexDirection:'row',margin:'auto',height:'420px',width:'370px',backgroundColor:'white'
,border:'1px solid black',padding:'5px'}}>
  <Box sx={{backgroundColor:'#e8e7e7',height:'100%',width:'100%'}}>
  <Box sx={{display:'flex',flexDirection:'row',margin:'auto'}}>
  <Box component='img' src={samsungphone} sx={{height:' 180px',width:'min-content',marginTop:'20px'}} />
<Box sx={{display:'flex',flexDirection:'column',marginRight:'26px',marginTop:'20px',marginLeft:'19px',gap:'7px'}}>
<Typography variant="h5" color='#191714' sx={{fontWeight : '800',fontSize:'28px',}}>
Samsung Galaxy S21 5G (Refurbished - Like New)</Typography>
<Typography variant="h5" color='#191714' sx={{fontWeight : '900',fontSize:'15px',marginTop:'10px'}}>Available in</Typography>
<Box sx={{display:'flex',flexDirection:'row',gap:'3px',marginTop:'10px'}}>
  <Box sx={{height:'17px',width:'17px',backgroundColor:'black',border:'1px solid black'}}></Box>
  <Box sx={{height:'17px',width:'17px',backgroundColor:'beige',border:'1px solid black'}}></Box>
  <Box sx={{height:'17px',width:'17px',backgroundColor:'white',border:'1px solid black'}}></Box>
  <Box sx={{height:'17px',width:'17px',backgroundColor:'darkGray',border:'1px solid black'}}></Box>
</Box>
<Typography variant="h5" color='white' sx={{fontWeight : '900',fontSize:'15px',marginTop:'10px'
,backgroundColor:'#191714',width:'fit-content',padding:'5px 3px'}}>128GB</Typography>
<Typography variant="h5" color='#191714' sx={{fontWeight : '400',fontSize:'17px'}}>From</Typography>
<Box sx={{display :'flex',flexDirection:'row',placeItems: 'baseline',marginTop:'-7px'}}> 
<Typography variant="h5" color='#191714' sx={{fontWeight : '900',fontSize:'28px'}}>£39.50</Typography>
<Typography variant="h5" color='#191714' sx={{fontWeight : 'light',fontSize:'17px'}}>/month</Typography>
</Box>
</Box>
  </Box>
<Button variant='contained' sx={{ height: '45px',margin:'auto',textDecoration:'none',fontSize:'16px',fontWeight:'900'
,textTransform:'none'
,width:'90%',borderRadius:'0',bgcolor:'#302e2b',color:'white',marginBottom:'-30px',marginLeft:'5%','&:hover': {
        color: 'white',
        backgroundColor: '#302e2b',
      }}}>View phone</Button>
</Box>
</Box>
</Box>
</Box>
        </>
    )
}