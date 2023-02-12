import React, { useState,useEffect } from 'react'
import Footer from './Footer';
import Navbar from './Navbar';
import { Link  } from 'react-router-dom';
import {Typography, AppBar,Card, CardActions, CardContent, CardMedia, CssBaseline, Grid,Box, Toolbar,Button, Container} from '@mui/material';
import HerosectionPhonesPage from './HerosectionPhonesPage';
import phonepic1 from './phonepics/phonepic1.png'
import phonepic2 from './phonepics/phonepic2.png'
import phonepic3 from './phonepics/phonepic3.png'
import phonepic4 from './phonepics/phonepic4.png'
import phonepic5 from './phonepics/phonepic5.png'
import phonepic6 from './phonepics/phonepic6.png'
import phonepic7 from './phonepics/phonepic7.png'
import phonepic8 from './phonepics/phonepic8.png'
import phonepic9 from './phonepics/phonepic9.png'
import phonepic10 from './phonepics/phonepic10.png' 
export default function PhonesPage() {
 const phones=  [

        {"name":"Google Pixel 7", "price":18,"img":phonepic1,'link':'https://buy.stripe.com/test_aEU9B16yUdHr7ni4gg'},
        {"name":"Google Pixel 7 Pro", "price":28,"img":phonepic2,'link':'https://buy.stripe.com/test_4gw3cD1eA0UFdLG5kl'}     ,
        {"name":"Samsung Galaxy Z Flip4", "price":34,"img":phonepic3,'link':'https://buy.stripe.com/test_3cs00rf5q8n75fa28a'} ,
        {"name":"Apple iPhone 14 Pro", "price":39,"img":phonepic4 ,'link':'https://buy.stripe.com/test_eVafZp1eAbzj8rm9AD'},
        {"name":"Apple iPhone 14 Pro Max", "price":43,"img":phonepic4,'link':'https://buy.stripe.com/test_3csbJ97CYfPzazufZ2'},
    {"name":"Apple iPhone 14 Plus", "price":34,"img":phonepic5,'link':'https://buy.stripe.com/test_14k28z0aweLv6je4gm'},
    {"name":"Apple iPhone 14", "price":30,"img":phonepic5,'link':'https://buy.stripe.com/test_dR6dRh9L6gTD5fa5kr'},
    {"name":"Google Pixel 6a", "price":13,"img":phonepic6,'link':'https://buy.stripe.com/test_cN26oPaPa46R7nibIN'},
    {"name":"Samsung Galaxy Z Fold4", "price":65,"img":phonepic7,'link':'https://buy.stripe.com/test_00g4gHe1m5aV6je6ox'},
    {"name":"Apple iPhone 13", "price":27,"img":phonepic8,'link':'https://buy.stripe.com/test_7sIbJ9f5qcDn3724gq'},
    {"name":"Google Pixel 6 5G", "price":20,"img":phonepic9,'link':'https://buy.stripe.com/test_00gcNd0awdHr7nieV5'},
    {"name":"Samsung Galaxy A52s 5G", "price":12,"img":phonepic10,'link':'https://buy.stripe.com/test_3csbJ9cXicDnazu00c'}
    ]
    useEffect(() => {
      window.scrollTo(0, 0)
    }, [])
        


    return (
        <>
<Navbar/>
<HerosectionPhonesPage/>
<Box sx={{height:'fit-content',width:'100%',bgcolor:'#191714',paddingY:'50px'}}>
<Typography variant="h3" color='white' sx={{fontWeight:'900',padding:'10px'}} >
Mobile Phone Deals
</Typography>
 <Box className='phoneBox' sx={{
    display:'flex',flexDirection:'row',flexFlow: 'wrap',rowGap:'75px'
  }}> 
 {
    phones.map((value )=>{

    return(
        <Box sx={{display:'flex',flexDirection:'column',margin:'auto',}} key={value.name}>
<Box sx={{display:'flex',flexDirection:'row',margin:'auto',height:'380px',width:'370px',backgroundColor:'#191714'
,border:'1px solid lightblue',padding:'5px'}}>
  <Box sx={{backgroundColor:'#302e2b',height:'100%',width:'100%'}}>
    {/* <img src={require(value.img)} /> */} 
    
  <Box sx={{display:'flex',flexDirection:'row',height: '300px'}}>
<Box component='img' src={value.img}  sx={{height:' 180px',width:'min-content',marginTop:'20px'}} />
<Box sx={{display:'flex',flexDirection:'column',marginRight:'26px',marginTop:'20px',marginLeft:'19px',gap:'7px'}}>
<Typography variant="h5" color='white' sx={{fontWeight : '800',fontSize:'28px',}}>{value.name}</Typography>
<Typography variant="h5" color='white' sx={{fontWeight : '900',fontSize:'15px',marginTop:'10px'}}>Available in</Typography>
<Box sx={{display:'flex',flexDirection:'row',gap:'3px',marginTop:'10px'}}>
  <Box sx={{height:'17px',width:'17px',backgroundColor:'black',border:'1px solid black'}}></Box>
  <Box sx={{height:'17px',width:'17px',backgroundColor:'beige',border:'1px solid black'}}></Box>
  <Box sx={{height:'17px',width:'17px',backgroundColor:'white',border:'1px solid black'}}></Box>

 <Box sx={{height:'17px',width:'17px',backgroundColor:'darkGray',border:'1px solid black'}}></Box>
</Box>
<Typography variant="h5" color='white' sx={{fontWeight : '900',fontSize:'15px',marginTop:'10px'
,backgroundColor:'black',width:'fit-content',padding:'7px 5px'}}>128GB</Typography>
<Typography variant="h5" color='white' sx={{fontWeight : '400',fontSize:'17px'}}>From</Typography>
<Box sx={{display :'flex',flexDirection:'row',placeItems: 'baseline',marginTop:'-7px'}}> 
<Typography variant="h5" color='white' sx={{fontWeight : '900',fontSize:'28px'}}>£{value.price}</Typography>
<Typography variant="h5" color='white' sx={{fontWeight : 'light',fontSize:'17px'}}>/month</Typography>
</Box>

</Box>
  </Box>
  <Link to={`/PhonesPage/${value.name}`} state={{value:value}} >
<Button variant='contained' sx={{ height: '45px',margin:'auto',textDecoration:'none',fontSize:'16px',fontWeight:'900'
,textTransform:'none',backgroundColor:'white'
,width:'90%',borderRadius:'0',color:'black',marginLeft:'5%','&:hover': {
        color: 'black',
        backgroundColor: 'white',
      }}}>View phone</Button>
      </Link>
</Box>
</Box>
</Box>
        )
}
 )}
</Box> 
</Box>
<Footer/>
    </>
      )
    }

