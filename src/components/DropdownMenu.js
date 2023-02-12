import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { Typography} from '@mui/material';

const options = [
  'Matte Black',
  'Purple',
  'Red',
  'White',
];

export default function SimpleListMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);

  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    console.log( anchorEl.innerText)
    setAnchorEl(null);

  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div  style={{height:'fit-content',width:'fit-content'}}>
      <List
        component="nav"
        aria-label="Device settings" 
        sx={{ bgcolor: 'rgb(48, 46, 43)',paddingTop:'0px',paddingBottom:'0px',color:'white',fontWeight:'600',fontSize:'18px' }}
      >
        <ListItem
          button
          id="lock-button"
          aria-haspopup="listbox"
          aria-controls="lock-menu"
          sx={{width:'375px',border:'1px solid white',color:'white',fontWeight:'600',fontSize:'18px',padding:'10px'}}
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClickListItem}
        >
          <Typography
       
            // secondary={options[selectedIndex]}
            sx={{backgroundColor:'rgb(48, 46, 43)',color:'white',fontWeight:'600',fontSize:'18px'}}
          >
            {options[selectedIndex]}
          </Typography>
        </ListItem>
      </List>
      <Menu
        id="lock-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'lock-button',
          role: 'listbox',color:'white'
        }}
      >
        {options.map((option, index) => (
          <MenuItem
            key={option}
            disabled={index === 0}
            selected={index === selectedIndex}
            onClick={(event) => handleMenuItemClick(event, index)}
            sx={{color:'#292929',fontWeight:'600',fontSize:'18px'}}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}