import * as React from 'react';
import Box from '@mui/material/Box';
import {AiOutlineCheck} from 'react-icons/ai'
import { Link  } from 'react-router-dom';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import {Typography,Button} from '@mui/material';
import { useEffect,useState } from 'react';
export default function SimpleBottomNavigation({props}) {
  const [value, setValue] = React.useState(0);
//   function RedirectPage(){
//       window.location.replace(props.link);
//     // Render some text when redirecting
//     // You can use a loading gif or something like that
//     return <div>
//       <h3>Redirecting...</h3>
//     </div>
//   }
  
  return (
    <Box sx={{ width: 500,backgroundColor:'#302e2b',position:'sticky', bottom:'0px' ,  width:' 100%',height:'88px'}}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        
        }}
        sx={{backgroundColor:'#302e2b',display:'flex',flexDirection:'row',paddingBottom:'20px', 
        paddingTop:'16px',gap:'6%',justifyContent:'flex-start'}}
      >
<Box sx={{height:'fit-content',width:'fit-content',display:'flex',flexDirection:'row',gap:'5px'
,borderBottom:'2px solid white',marginLeft:'40px',paddingY:'15px'}}>
<AiOutlineCheck style={{height:'22px',width:'22px',color:'green'}}/>
<Typography variant="h5" color='white' sx={{fontWeight : '500',fontSize:'16px',placeSelf:'flex-start'}}>
{props.name}</Typography>
    </Box>
    <Typography variant="h5" color='white' sx={{fontWeight : '300',fontSize:'15px',alignSelf: 'center'}}>
        Choose a plan
</Typography>
<Typography variant="h5" color='white' sx={{fontWeight : '300',fontSize:'15px',alignSelf: 'center',flexGrow:'2'}}>
        Extras
</Typography>
<Box sx={{display:'flex',flexDirection:'row',alignItems:'center'}}>
<Typography variant="h3" color='white' sx={{fontWeight:'900'}} >
£{props.price}
</Typography>
<Typography variant="h5" color='white' sx={{fontWeight : '300',fontSize:'15px',alignSelf: 'center',flexGrow:'2.5'}}>
        /month
</Typography>
</Box>
<Button variant='contained' sx={{ 
    height: '45px',textDecoration:'none',fontSize:'22px',textTransform:'none',fontWeight:'600',
    width:'fit-content',borderRadius:'0',bgcolor:'gray',color:'#191714',
    alignSelf:'center',marginRight:'4%','&:hover': {
        color: '#191714',
        backgroundColor: 'white',
      }}} onClick={()=>{ window.open(props.link)}}>Checkout</Button>
      </BottomNavigation>
      
    </Box>
  );
}