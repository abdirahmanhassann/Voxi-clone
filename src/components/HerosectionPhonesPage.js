
import React from "react";
import voxibgpic from '../voxibgpic.jpg'
import voxibgpic2 from '../voxibgpic2.jpg'
import {Typography, AppBar,Card, CardActions, Box,CardContent, Button,CardMedia, CssBaseline, Grid, Toolbar, Container} from '@mui/material';
import blackpic from '../heropic.webp'
import heropic from '../heropic22.jpg'

export default function Herosection () {
   const displaynone={  
    display:'flex', flexDirection:'row',  gap:'10px'  ,marginLeft:' 50%', zIndex: '1', position: 'relative',padding:'28px',
    display: { xs:'none',sm:'none',md: 'block', lg: 'block' } };
   const heropicsize={
    height:' 315px',  zIndex: '1',  position: 'absolute' , padding: '7px',
    "@media (max-width: 499px)": {
 height:'180px'
      },
      "@media (max-width: 900px)": {
  height:'250px'
  ,display:'flex'
      }
      
    }
    return(
        <>
      <div style={{ backgroundColor: '#302e2b' ,height:'378px' ,width:'100%'}}>
        {/* <Box sx={{width: '100%',height:'100px'}} ></Box> */}
    <Box sx={{backgroundColor :'#191714',maxWidth:'100%',width:'100%',height:'315px',position:'absolute' }}  >
     <Box sx={{ align:'centre', width:'90%',height:'300px'  
   , width: '95%'}}>

      <Box component='img' src={heropic} sx={heropicsize} />
      <Box sx={{  
    display:'flex', flexDirection:'row',  gap:'10px'  ,marginLeft:' 50%', zIndex: '1', position: 'relative',padding:'28px',
    display: { xs:'none',sm:'none',md: 'block', lg: 'block' } }}>
<Typography variant="h4" color='white' sx={{paddingTop:'20px', lineHeight: '59px',fontSize: '39px', fontWeight : '800',letterSpacing: '1px'}}>
PERFECT GIFT THIS
CHRISTMAS</Typography>
<Button variant='contained' sx={{ height: '45px',textDecoration:'none',fontSize:'20px',textTransform:'none',width:'fit-content',borderRadius:'0',bgcolor:'white',color:'#191714','&:hover': {
        color: '#191714',
        backgroundColor: 'white',
      }}}>Shop Phone offers</Button>

      </Box>
    <Box component='img'  src={blackpic} sx={{width: '100%',top:'7px', height: '340px' ,position:'absolute'}}/>
   </Box>
    </Box>
    </div>
        </>
    )
}