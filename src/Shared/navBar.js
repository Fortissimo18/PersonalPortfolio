import React from 'react';
import { Menu } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

export default function NavBar(){
    return (
        <Menu text style={{marginLeft: '70vw', marginRight:'4vw', fontSize: '20px'}}>
          <Menu.Item name='Home' as={NavLink} to='/' exact/>
          <Menu.Item name='Experience' as={NavLink} to='/experience'/>
          <Menu.Item name='Projects' as={NavLink} to='/projects'/>
          <Menu.Item name='Hobby' as={NavLink} to='/hobby'/>
        </Menu>
      )

}