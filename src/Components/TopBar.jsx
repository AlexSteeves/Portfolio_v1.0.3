import React from 'react'
import {useState} from 'react'
import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

export default function TopBar() {
    const[theme, setTheme] = useState('light')

    const changeTheme=()=>{
        if(theme === 'light'){
            document.documentElement.classList.add('dark')
            setTheme('dark')
        }else{
            document.documentElement.classList.remove('dark')
            setTheme('light')
        }
    }
  return (
    <div className="absolute top-0 right-0 p-2 text-pallet-primary dark:text-dark-primary ">


    <IconButton sx={{ ml: 1 }} onClick={changeTheme} color="inherit">
        {theme === 'light' ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
</div>
  )
}

