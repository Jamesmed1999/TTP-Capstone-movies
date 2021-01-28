//done-ish, implement sidebar and search

import React, {  useState } from 'react'
import {  Menu } from "semantic-ui-react"
import { Link } from "react-router-dom"

// import SearchForm from './SearchForm'
import SideBar from './SideBar'      // this is to maybe have the info icon be the button to display the sidebar later

function MenuBar() {
    
    const pathname = window.location.pathname;

    let path = pathname === '/' ? 'home' : pathname.substr(1);
    const [activeItem, setActiveItem] = useState(path);

    const handleItemClick = (e, { name }) => setActiveItem(name);

    const menuBar = (
        <Menu pointing secondary size="massive">
            <Menu.Item>
                <SideBar />
            </Menu.Item>
            <Menu.Item
                position='right'
                name='home'
                active={activeItem === 'home'}
                onClick={handleItemClick}
                as={Link}
                to="/"
            >
                <h1>Capstone Movies</h1>
                
            </Menu.Item>
            {/* <Menu.Item
                name='home'
                active={activeItem === 'home'}
                onClick={handleItemClick}
                as={Link}
                to="/"
             */}
        </Menu>
    )
    return menuBar;
}
export default MenuBar;
