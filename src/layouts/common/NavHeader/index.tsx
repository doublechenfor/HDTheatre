import React from 'react'
import { NavLink } from 'react-router-dom';
import { AppRouter } from '../../../routes/app-route';
import './nav.styl';

export default function NavHeader() {

  const showTitle = AppRouter.map((item, index) => <NavLink key={index} end={false} to={item.path}>{item.title}</NavLink>);

  return (
    <div>
      <span className='title-theatre'>YouYou影院</span>
      <div className='nav-tabs'>
        {
          showTitle
        }
      </div>
    </div>
  )
}
