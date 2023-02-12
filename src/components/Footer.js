import React from 'react';
import {Typography, Container,Box} from '@mui/material'
import voxilogo from '../voxilogowhite.png'
import {FaRegPaperPlane,FaTiktok,FaMedal} from 'react-icons/fa'
import {BsFacebook,BsWhatsapp,BsSnapchat,BsTwitter,BsInstagram,BsMessenger,BsYoutube} from 'react-icons/bs'
import {SiPrimevideo,SiNetflix,SiYoutubemusic} from 'react-icons/si'
const Footer = () => {
  return (
    <Box sx={{ backgroundColor: 'white',height:'580px', display:'flex',flexDirection:'column',
    margin:'0px',marginLeft:'-17%' ,gap:'18px'  ,
    "@media (max-width: 699px)": {
      marginTop:'1200px',
      marginLeft:'auto'
    },
    "@media (max-width: 1000px)": {
      marginTop:'1000px',
      marginLeft:'auto'
      }}}>
           <Container maxWidth="md" sx={{display:'flex', flexDirection:'row',
              "@media (max-width: 699px)": {
                flexDirection:'column',
                margin:'auto'
              },
              "@media (max-width: 1000px)": {
                flexDirection:'column',
                margin:'auto'
              
                }
          }}>
     <Box component='img' src={voxilogo} sx={{height:' 80px',width:'min-content',marginTop:'20px'}} />
     <Typography variant="body1" sx={{ fontWeight:'500',fontSize:'12px',marginTop:'50px', 
     inlineSize:'max-content',flex:'none',width:'17%',marginLeft:'7%'}}>
     The mobile network with
Unlimited Social Media
          </Typography>
          <Container sx={{display:'flex', flexDirection:'column',paddingLeft:'10px'
        }}>

    <Container maxWidth="lg" sx={{display:'flex', flexDirection:'row'}}>
        <Container sx={{borderBottom:'1px solid black',height:'200px',display:'flex', flexDirection:'row'
    ,color:'black',fontWeight:'100',minInlineSize:'max-content',paddingLeft:'0px',
    "@media (max-width: 699px)": {
      flexDirection:'column',
      marginBottom:'450px',
      gap:'20px'
      },
      "@media (max-width: 1000px)": {
flexDirection:'column',
marginBottom:'450px',
gap:'20px'
      } 
    }}>
<Container >

        <Typography sx={{fontWeight:'900',color:'#191714'}} variant="h6" gutterBottom>
        Phones
        </Typography>
        <ul style={{ listStyle: 'none', margin: 0, padding: 0,display:'flex',flexDirection:'column'
    ,color:'#191714', fontSize:'13px', gap:'5px' }}>
          <li style={{ display: 'inline-block', marginRight: '16px' }}>
          Mobile phone deals
          </li>
          <li style={{ display: 'inline-block', marginRight: '16px' }}>
          iPhone
          </li>
          <li style={{ display: 'inline-block', marginRight: '16px' }}>
          Samsung phones
          </li>
          <li style={{ display: 'inline-block', marginRight: '16px' }}>
          5G phones
          </li>
          <li style={{ display: 'inline-block', marginRight: '16px' }}>
          Refurbished phones
          </li>
        </ul>
        </Container>
<Container>

        <Typography sx={{fontWeight:'900',color:'#191714'}} variant="h6" gutterBottom>
        SIM Plans
        </Typography>
        <ul style={{ listStyle: 'none', margin: 0, padding: 0,display:'flex',flexDirection:'column'
    ,color:'#191714', fontSize:'13px', gap:'5px' }}>
          <li style={{ display: 'inline-block', marginRight: '16px' }}>
          SIM only deals
          </li>
          <li style={{ display: 'inline-block', marginRight: '16px' }}>
          Free SIM card
          </li>
          <li style={{ display: 'inline-block', marginRight: '16px' }}>
          Unlimited data SIM
          </li>
          <li style={{ display: 'inline-block', marginRight: '16px' }}>
          Activate SIM
          </li>
          <li style={{ display: 'inline-block', marginRight: '16px' }}>
          Student SIM only deals
          </li>
        </ul>
</Container>

<Container>

        <Typography sx={{fontWeight:'900',color:'#191714'}} variant="h6" gutterBottom>
        Help & Support
        </Typography>
        <ul style={{ listStyle: 'none', margin: 0, padding: 0,display:'flex',flexDirection:'column'
    ,color:'#191714', fontSize:'13px', gap:'5px' }}>
          <li style={{ display: 'inline-block', marginRight: '16px' }}>
          Contact us
          </li>
          <li style={{ display: 'inline-block', marginRight: '16px' }}>
          Charges
          </li>
          <li style={{ display: 'inline-block', marginRight: '16px' }}>
          Complaints
          </li>
          <li style={{ display: 'inline-block', marginRight: '16px' }}>
          Joining and Set up
         </li>
          <li style={{ display: 'inline-block', marginRight: '16px' }}>
          Help
          </li>
        </ul> 
</Container>
<Container>
<Typography  sx={{fontWeight:'900'}} variant="h6" gutterBottom>
VOXI
        </Typography>
        <ul style={{ listStyle: 'none', margin: 0, padding: 0,display:'flex',flexDirection:'column'
    ,color:'#191714', fontSize:'13px', gap:'5px' }}>
          <li style={{ display: 'inline-block', marginRight: '16px' }}>
          Mobile phone deals
          </li>
          <li style={{ display: 'inline-block', marginRight: '16px' }}>
          iPhone
          </li>
          <li style={{ display: 'inline-block', marginRight: '16px' }}>
          Samsung phones
          </li>
          <li style={{ display: 'inline-block', marginRight: '16px' }}>
          5G phones
          </li>
          <li style={{ display: 'inline-block', marginRight: '16px' }}>
          Refurbished phones
          </li>
        </ul>
    </Container>  
    </Container>      

</Container>
<Container sx={{display:'flex',flexDirection:'column',gap:'10px',marginLeft:'20px'}}>
    <Typography variant="body1" sx={{ fontWeight:'400',fontSize:'12px', marginLeft: '16px',marginTop:'20px', flexGrow:'1.5' 
,color:'black',fontWeight:'100'
}}>
    T&Cs / Privacy Policy / Cookie Policy
          </Typography>
          <Box sx={{display:'flex', flexDirection:'row',gap:'25px',marginLeft:'14px',marginTop:'20px'}}>
<BsFacebook  style={{color:'black', height:'20px',width:'20px'}}/>
<BsWhatsapp style={{color:'black', height:'20px',width:'20px'}}/>
<BsSnapchat style={{color:'black', height:'20px',width:'20px'}}/>
<BsTwitter style={{color:'black', height:'20px',width:'20px'}}/>
<BsInstagram style={{color:'black', height:'20px',width:'20px'}}/>
<BsMessenger style={{color:'black', height:'20px',width:'20px'}}/>
</Box>

<Typography variant="body1" sx={{ fontWeight:'400',fontSize:'12px', marginLeft: '16px',marginTop:'20px', flexGrow:'1.5' 
,color:'black',fontWeight:'100'
}}>© 2022 VOXI trading under Vodafone Ltd. Registered office: Vodafone House, The Connection, Newbury, Berkshire, RG14 2FN. Registered in England No 1471587
          </Typography>
          <Typography variant="body1" sx={{ fontWeight:'400',fontSize:'12px', marginLeft: '16px',marginTop:'20px', flexGrow:'1.5' 
,color:'black',fontWeight:'100'
}}>VOXI has been recognised as a Which? Recommended Provider for Mobile Networks (April 2022). Which? is an independent consumer body and makes recommendations based exclusively on test and survey results. For more information, see here.
</Typography>
          <Typography variant="body1" sx={{ fontWeight:'400',fontSize:'13px', marginLeft: '16px',marginTop:'20px', flexGrow:'1.5' 
,color:'black',fontWeight:'100'
}}>Up to 6 months free. After 6m, Unlimited Music at £5/month unless you opt out. If opted out within trial, you lose access immediately. General data required. Subscription not included. Selected apps. UK only. Terms apply.
</Typography>

</Container>
          </Container>
</Container>
</Box>
  )}
  export default Footer;
