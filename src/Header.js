import { Avatar, IconButton } from '@material-ui/core'
import React from 'react'
import './Header.css'
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

function Header() {
    return (
        <div className='header'>
        <div className="header__left">
            <IconButton>
                <MenuIcon/>
            </IconButton>
            <img src="https://www.citypng.com/public/uploads/preview/-11597272377xtovj4zmfl.png" alt=""/>
        </div>
        <div className="header__middle">
            <SearchIcon/>
            <input type="text" placeholder='Search mail'/>
            <ArrowDownwardIcon className='header__inputCaret'/>
        </div>

        <div className="header__right">
            <IconButton>
                <AppsIcon/>
            </IconButton>
            <IconButton>
                <NotificationsIcon/>
            </IconButton>
            <Avatar/>
        </div>
            
        </div>
    )
}

export default Header
