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
import Herosection2 from './Herosection2'
import Reviewsection from './Reviewsection'
import Herosection3 from './Herosection3'
import PhonesPage from './PhonesPage'
export default function Home() {
    return (
    <>   
    <Navbar/>
    <main>
    <Herosection/>
<Herosection2/>
<Reviewsection/>
<Herosection3/>
    </main>
    <Footer/>
    </>
  )
}
