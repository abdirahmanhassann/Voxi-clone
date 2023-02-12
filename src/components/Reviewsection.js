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


export default function Reviewsection(){
  
    return(
        <>


<Box sx={{paddingY:'36px',height:'245px',width:'100%',backgroundColor:'#302e2b',textAlign:'center', }}>
<Typography variant="h5" color='white' sx={{fontWeight : '800',fontSize:'36px',margin:'auto'}}>A mobile network worth shouting about
</Typography>
<Box sx={{display:'flex',flex:'row',gap:'11%',marginLeft:'25%',marginTop:'2%'}}>
<Box component='img' src={networkpic} sx={{height:'136px'}} />
<Typography variant="h5" color='white' sx={{fontWeight : '900',fontSize:'16px',width:'40%',lineHeight:'2',display:{xs:'none',sm:'none',md:'block',lg:'block',xl:'block'}}}>
I spent many years with EE, but I wanted to try something new and the offers by VOXI sounded too good to be true, so I thought it was worth a try. I made the right choice! 
</Typography>
</Box>
</Box>

        </>
    )
}