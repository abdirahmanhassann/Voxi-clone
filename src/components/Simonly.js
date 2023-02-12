import React from 'react'
import Navbar from './Navbar'
import { useEffect } from 'react'
import HerosectionPhonesPage from './HerosectionPhonesPage';
import {Typography, AppBar,Card, CardActions, CardContent, CardMedia, CssBaseline, Grid,Box, Toolbar,Button, Container} from '@mui/material';
import Footer from './Footer'
import {TfiReload} from 'react-icons/tfi'
import {HiOutlineChatAlt2} from 'react-icons/hi'
import {FaMedal} from 'react-icons/fa'

export default function Simonly() {
    useEffect(()=> {
        window.scrollTo(0, 0)
      },[])
  
      const deal=[
          { id:1, data:'30GB', price:'£10',link:'https://buy.stripe.com/test_fZe5kL6yUeLv0YU14h'},
          { id:2, data:'60GB', price:'£15',link:'https://buy.stripe.com/test_eVaeVlbTe5aVcHCcN0'},
          { id:1, data:'200GB', price:'£20',link:'https://buy.stripe.com/test_eVa8wX5uQgTD7niaET'},
          { id:1, data:'UNLIMITED', price:'£30',link:'https://buy.stripe.com/test_bIYeVl5uQgTDcHCfZe'}
    ]
  return (
    <>
<Navbar/>
<HerosectionPhonesPage/>
<Box sx={{height:'fit-content',paddingY:'50px',width:'100%',backgroundColor:'#302e2b'}}>
    {
    deal.map((item)=>{

        return(
            <Box sx={{margin:'auto',border:'1px solid white',display:'flex',
flexDirection:'column',gap:'5%',marginBottom:'30px',width:'83%'
}}>
<Box sx={{margin:'auto',width:'80%',height:'67px',display:'flex',
flexDirection:'row',gap:'13%',marginBottom:'5px',alignItems:'center'
}}>
<Typography variant="h4" color='white' sx={{fontWeight:'900'}} >
{item.data}
</Typography>
<Typography variant="h4" color='white' sx={{fontWeight:'900',flexGrox:'1.3'}} >
{item.price}/month
</Typography>
<Button variant='contained' onClick={()=>{ window.open(item.link)}}
 sx={{ height: '45px',textDecoration:'none',fontSize:'16px',fontWeight:'900'
,textTransform:'none',backgroundColor:'white',marginInlineStart:'auto'
,width:'40%',borderRadius:'0',color:'black',marginLeft:'5%','&:hover': {
        color: 'black',
        backgroundColor: 'white',
    }}}>Choose this plan</Button>
</Box>
    <div style={{margin:'auto',width:'99%',height:'161px',marginBottom:'0.5%',backgroundColor:'#e8e7e7'}}>

<Box sx={{display:'flex',
flexDirection:'row',gap:'5%',
marginLeft: '10%', gap: '5%', textAlign: 'center'
}}>
<Box sx={{display:'flex',flexDirection:'row',marginTop:'6px'}}>
<Box  sx={{display:'flex', flexDirection:'column',gap:'3px', alignItems:'center',textAlign:'center'}} >
<TfiReload style={{color:'black', height:'25px',width:'25px'}}/>
<Typography variant="h6" color='black' sx={{fontSize:'18px',fontWeight : '100',marginTop:'10px'}}>Unlimited</Typography>
<Typography variant="h6" color='black' sx={{fontSize:'18px',fontWeight : '900'}}>Flexibility</Typography>
<Typography variant="h7" color='black' sx={{fontSize:'18px',fontWeight : '100',marginTop:'5px'}}>No contract, cancel anytime.</Typography>


</Box>
<Box  sx={{display:'flex', flexDirection:'column',gap:'3px', alignItems:'center'}} >
<HiOutlineChatAlt2 style={{color:'black', height:'25px',width:'25px'}}/>
<Typography variant="h6" color='black' sx={{fontSize:'18px',fontWeight : '100',marginTop:'10px'}}>Unlimited</Typography>
<Typography variant="h6" color='black' sx={{fontSize:'18px',fontWeight : '900'}}>Calls & Texts</Typography>
<Typography variant="h7" color='black' sx={{fontSize:'18px',fontWeight : '100',marginTop:'5px'}}>Unlimited calls, texts & picture messages.
</Typography>


</Box>
<Box  sx={{display:'flex', flexDirection:'column',gap:'3px', alignItems:'center'}} >
<FaMedal style={{color:'black', height:'25px',width:'25px'}}/>
<Typography variant="h6" color='black' sx={{fontSize:'18px',fontWeight : '100',marginTop:'10px'}}>Award winning</Typography>
<Typography variant="h6" color='black' sx={{fontSize:'18px',fontWeight : '900'}}>Network</Typography>
<Typography variant="h7" color='black' sx={{fontSize:'18px',fontWeight : '100',marginTop:'5px'}}>Powered by Vodafone’s award-winning mobile network.
</Typography>

</Box>

</Box>
</Box>
</div>
</Box>
   ) })}
</Box>
<Footer/>
    </>
  )
}
