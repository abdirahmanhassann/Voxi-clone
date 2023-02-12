
import React from 'react'
import {HiOutlineChatAlt2} from 'react-icons/hi'
import {Typography, AppBar,Card, CardActions, Box,CardContent, Button,CardMedia, CssBaseline, Grid, Toolbar, Container} from '@mui/material'
import {FaRegPaperPlane,FaTiktok,FaMedal} from 'react-icons/fa'
import {BsFacebook,BsWhatsapp,BsSnapchat,BsTwitter,BsInstagram,BsMessenger,BsYoutube} from 'react-icons/bs'
import {SiPrimevideo,SiNetflix,SiYoutubemusic} from 'react-icons/si'
import {TfiReload} from 'react-icons/tfi'
import useMediaQuery from '@mui/material/useMediaQuery';

export default function SayhiToVoxi () {

    return(
        <>
        <Box  className='say hi to voxi' sx={{width:'100%',margin:'auto',justifySelf:'center',alignItems:'center',display:'flex',
flexDirection:'column',paddingY:'40px'
}}>
<Typography variant="h3" color='white' sx={{fontWeight : '800',fontSize:'56px'}}>Say hi to VOXI</Typography>
<Typography variant="h5" color='white' sx={{fontWeight : '800',fontSize:'28px',textAlign:'center'}}>The mobile network with Unlimited Social Media</Typography>
<FaRegPaperPlane style={{height:'30px', width:'30px', marginTop:'40px', color:'white'}} />
<Typography variant="h6" color='white' sx={{fontWeight : '100',marginTop:'10px'}}>Unlimited</Typography>
<Typography variant="h6" color='white' sx={{fontWeight : '900',marginTop:'-5px'}}>Social Media + Video</Typography>
<Typography variant="h7" color='white' sx={{fontWeight : '100',marginTop:'5px'}}>Now get Unlimited YouTube & Video on top of Unlimited Social Media from £15/month.
</Typography>
<Box sx={{display:'flex', flexDirection:'row',gap:'17px',marginTop:'20px'}}>
<BsFacebook  style={{color:'white', height:'24px',width:'24px'}}/>
<BsWhatsapp style={{color:'white', height:'24px',width:'24px'}}/>
<BsSnapchat style={{color:'white', height:'24px',width:'24px'}}/>
<BsTwitter style={{color:'white', height:'24px',width:'24px'}}/>
<BsInstagram style={{color:'white', height:'24px',width:'24px'}}/>
<BsMessenger style={{color:'white', height:'24px',width:'24px'}}/>
</Box>
<Typography variant="h5" color='white' sx={{fontWeight : '800',fontSize:'28px'}}>+</Typography>
<Box sx={{display:'flex', flexDirection:'row',gap:'18px',marginTop:'10px'}}>
    <Box>
<FaTiktok  style={{color:'white', height:'17px',width:'19px',marginTop:'-5px'}} />
<Typography variant="h7" color='white' sx={{fontWeight : '700',fontSize:'18px'}}>TikTok</Typography>
</Box>
<Box sx={{display:'flex', flexDirection:'row',gap:'3px'}}>
<SiYoutubemusic style={{color:'white', height:'17px',width:'19px'}}/>
<Typography variant="h7" color='white' sx={{fontWeight : '900',fontSize:'17px',letterSpacing:'-1px', fontFamily:'sans-serif'}}>YouTube Music</Typography>
</Box>
<SiPrimevideo style={{color:'white', height:'86px',width:'86px',marginTop:'-25px'}}/>
<Box sx={{display:'flex', flexDirection:'row',gap:'3px'}}>
<BsYoutube style={{color:'white', height:'24px',width:'24px'}}/>
<Typography variant="h7" color='white' sx={{fontWeight : '900',fontSize:'17px',letterSpacing:'-1px', fontFamily:'sans-serif'}}>YouTube</Typography>
</Box>
<SiNetflix style={{color:'white', height:'24px',width:'24px'}}/>
</Box>
</Box>
<Box sx={
   {   display:'flex' , flexDirection:'row', alignItems:'center',placeContent:'center',gap:'11%',
      marginTop:'-40px',marginLeft:'150px',
      "@media (max-width: 699px)": {
         marginLeft:'0px'
          },
          "@media (max-width: 1000px)": {
  marginLeft:'0px'
          }
      }
}>
<Box  sx={{display:'flex', flexDirection:'column',gap:'3px', alignItems:'center',textAlign:'center'}} >
<TfiReload style={{color:'white', height:'30px',width:'30px'}}/>
<Typography variant="h6" color='white' sx={{fontWeight : '100',marginTop:'10px'}}>Unlimited</Typography>
<Typography variant="h6" color='white' sx={{fontWeight : '900'}}>Flexibility</Typography>
<Typography variant="h7" color='white' sx={{fontWeight : '100',marginTop:'5px'}}>No contract, cancel anytime.</Typography>


</Box>
<Box  sx={{display:'flex', flexDirection:'column',gap:'3px', alignItems:'center'}} >
<HiOutlineChatAlt2 style={{color:'white', height:'30px',width:'30px'}}/>
<Typography variant="h6" color='white' sx={{fontWeight : '100',marginTop:'10px'}}>Unlimited</Typography>
<Typography variant="h6" color='white' sx={{fontWeight : '900'}}>Calls & Texts</Typography>
<Typography variant="h7" color='white' sx={{fontWeight : '100',marginTop:'5px'}}>Unlimited calls, texts & picture messages.
</Typography>


</Box>
<Box  sx={{display:'flex', flexDirection:'column',gap:'3px', alignItems:'center'}} >
<FaMedal style={{color:'white', height:'30px',width:'30px'}}/>
<Typography variant="h6" color='white' sx={{fontWeight : '100',marginTop:'10px'}}>Award winning</Typography>
<Typography variant="h6" color='white' sx={{fontWeight : '900'}}>Network</Typography>
<Typography variant="h7" color='white' sx={{fontWeight : '100',marginTop:'5px'}}>Powered by Vodafone’s award-winning mobile network.
</Typography>

</Box>
</Box>
<Box sx={{alignItems:'center',  textAlignLast: 'center',marginTop:'40px',gap:'10px',display:'flex',flexDirection:'column'}}>
<Typography variant="body1" color='white' sx={{fontSize:'13px',fontWeight : '100',marginTop:'5px',textAlign:'center'}}>Making and receiving voice & video calls are not included on your Unlimited Social Media.
</Typography>
<Typography variant="h7" color='white' sx={{fontWeight : '100',marginTop:'5px',textAlign:'center',textDecoration:'underline'
,cursor:'pointer','&:hover': {
  textDecoration:'none'
}}}> More info
</Typography>
</Box>
</>
    )
}