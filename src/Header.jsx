import React, { useState } from 'react';
import './Header.css';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';
import { Link } from 'react-router-dom';

function Header() {
  const [inputSearch, setInputSearch] = useState('');

  return (
    <div className='header'>
      <div className='header__left'>
        <MenuIcon />
        <Link to="/">
        <img
          className="header__logo"
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/330px-YouTube_Logo_2017.svg.png'
          alt="YouTube Logo"
        />
        </Link>
        
      </div>
      <div className='header__input'>
        <input
          onChange={e => setInputSearch(e.target.value)}
          value={inputSearch}
          type="text"
          placeholder='Search'
        />
        <Link to={`/search/${inputSearch}`}>
          <SearchIcon className='header__inputButton' />
        </Link>
      </div>
      <div className='header__icons'>
        <VideoCallIcon className='header__icons' />
        <AppsIcon className='header__icons' />
        <NotificationsIcon className='header__icons' />
        <Avatar
          alt='Rishik'
          src='https://example.com/path/to/your/image.jpg' 
        />
      </div>
    </div>
  );
}

export default Header;
