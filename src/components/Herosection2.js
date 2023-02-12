import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

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
import SayhiToVoxi from './SayhiToVoxi'
import Herosection from './Herosection'


export default function Herosection2(){
    return (
        <>
  
         <div style={{ backgroundColor: '#191714' ,height:'fit-content' ,width:'100%'}}>
<Box sx={{height:'88px',width:'100%',display:'flex',flexDirection:'row',bgcolor:'#302e2b',alignItems:'center',justifyContent:'center'}}>
<Typography variant="h6" color='white' sx={{fontWeight : '800',marginRight:'4px',display:{xs:'none',sm:'none',lg:'block'}}}>Discover</Typography>
<Box component='img' src={refurbishedphones} sx={{height:' 23px',  zIndex: '1',marginTop:'3px'}} />
<Typography variant="h6" color='white' sx={{fontWeight : '800',marginLeft:'4px',display:{xs:'none',sm:'none',lg:'block'}}} >with our introductory offers</Typography>
<Button variant='contained' sx={{ marginLeft:'12px',height: '45px', paddingInline: '37px',fontWeight: 'bold',textDecoration:'none',fontSize:'16px',textTransform:'none',width:'fit-content',borderRadius:'0',bgcolor:'white',color:'#191714','&:hover': {
        color: 'black',
        backgroundColor: 'white',
        boxShadow:'none'
      }}}>See offers</Button>
</Box>
<Box sx={{width:'94%',margin:'auto',justifySelf:'center',alignItems:'center',display:'flex',
flexDirection:'column',paddingY:'50px',borderBottom:'1.4px solid #8f8f8f'
, gap: '20px'
}}>
<Typography variant="h5" color='white' sx={{fontWeight : '800',fontSize:'27px'}}>Already got a VOXI SIM?</Typography>
<Button variant="outlined"sx={{ marginLeft:'12px',height: '45px', paddingInline: '37px',fontWeight: 'bold',
textDecoration:'none',fontSize:'16px',textTransform:'none',width:'fit-content',borderRadius:'0',
bgcolor:'transparent',color:'white',border:'1px solid white',paddingX:'83px','&:hover': {  color: 'white',  
backgroundColor: 'transparent',
        boxShadow:'none',border:'1px solid white'
      }}} >Activate SIM</Button>
</Box>
<SayhiToVoxi/>
<Typography variant="h5" color='white' sx={{fontWeight : '800',fontSize:'26px',marginLeft:'52px',marginTop:'45px'}}>What are you looking for?</Typography>

<Box sx={{display:'flex' , flexDirection:'row', alignItems:'center',gap:'7%',
marginTop:'20px',marginBottom:'30px',marginLeft:'50px',height:'254px',objectFit:'contain'
,  "@media (max-width: 699px)": {
  flexDirection:'column',
  marginLeft:'0px',
  height:'220px'
   },
   "@media (max-width: 1245px)": {
flexDirection:'column',
marginLeft:'0px',
height:'220px'
   }
}}>

  <Box sx={{width:'fit-content', height:'100%',objectFit:'contain', border:'1px solid gray' }}>
    <Box component='img' src={voxibgpic} sx={{height:' 95%' , padding: '5px',opacity:'50%'}} >
  </Box>
    <Box sx={{ zIndex: '1',  position: 'relative', left:'4%',display:'flex',flexDirection:'row',textAlign:'initial',gap:'9%'
    ,marginTop:'-220px'}}>

    <Box component='img' src={voxibgpic2} sx={{height:' 186px'}} />
    <Box sx={{display:'flex',flexDirection:'column'}}>
      <Typography variant="h5" color='white' sx={{fontWeight : '800',fontSize:'38px',marginLeft:'52px',marginTop:'45px'}}>Phones</Typography>      
      <Typography variant="h7" color='white' sx={{fontWeight : '100',marginTop:'5px',textAlign:'initial'
}}> Get the phone you want with no upfront costs
</Typography>

    </Box>
      </Box>
    </Box>
    <Box sx={{width:'fit-content', height:'100%',objectFit:'contain', border:'1px solid gray' }}>
    <Box component='img' src={voxibgpic3} sx={{height:' 95%' , padding: '5px',opacity:'50%'}} >
  </Box>
    <Box sx={{ zIndex: '1',  position: 'relative', left:'4%',display:'flex',flexDirection:'row',textAlign:'center',gap:'9%'
    ,marginTop:'-220px'}}>

    <Box component='img' src={voxibgpic4} sx={{height:' 186px'}} />

    <Box sx={{display:'flex',flexDirection:'column'}}>
      <Typography variant="h5" color='white' sx={{fontWeight : '800',fontSize:'38px',marginLeft:'52px',marginTop:'45px'}}>SIM only</Typography>      
      <Typography variant="h7" color='white' sx={{fontWeight : '100',marginTop:'5px',textAlign:'initial'
}}> No contract so you're free to cancel anytime
</Typography>
    </Box>
      </Box>
    </Box>
</Box>
<Box sx={{height:'400px',width:'100%',
  "@media (max-width: 699px)": {
 margin:'auto',
 width:'80%'
   },
   "@media (max-width: 1245px)": {
marginTop:'350px'

   }}}>
<Box  style={{ background:`url(${voxibgpic5}) 0% 0%/ cover
`
    ,height:'238px' , width:'89%', backgroundRepeat:'no-repeat', marginLeft:'2.5%',martinTop:'53px',
    padding:'35px', 
}} >
<Box sx={{justifySelf:'center',margin:'auto',height:'82%',backgroundColor: '#191714',width:'100%',
display:'flex',flexDirection:'row', gap:'10%',placeContent:'center',paddingTop:'40px'
}}>
<Box sx={{display:'flex' , flexDirection:'column',gap:'20px',width:'36%',marginLeft:'15%',alignItems:'center'}}>
<Box component='img' src={logo} sx={{height:' 24%',width:'24%'}} />
<Box component='img' src={fornow} sx={{height:' 38%'}} />
</Box>
<Box sx={{display:'flex' , flexDirection:'column',gap:'20px',textAlign:'center',placeContent:'center',alignItems:'center',
marginRight:'12%',marginBottom:'4%',display:{xs:'none',sm:'none',md:'none',lg:'block'}
}}>
<Typography variant="h6" color='white' sx={{fontWeight : '900',width: '78%'}}>Financially vulnerable? We’ve set up Unlimited 5G-ready data, calls and texts at £10 a month – just for you.
</Typography>
<Button variant="outlined"sx={{ marginLeft:'12px',height: '45px', paddingInline: '37px',fontWeight: 'bold',
textDecoration:'none',fontSize:'16px',textTransform:'none',width:'fit-content',borderRadius:'0',
bgcolor:'transparent',color:'white',border:'1px solid white',paddingX:'83px','&:hover': {  color: 'white',  
backgroundColor: 'transparent',
        boxShadow:'none',border:'1px solid white'
      }}} >Learn more</Button>
</Box>
</Box>
  </Box>
</Box>
</div>
        </>
    )
}