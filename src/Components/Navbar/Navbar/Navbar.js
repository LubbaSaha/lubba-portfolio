import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Menu, Item, Image } from 'semantic-ui-react';

import Logo from "../../../img/nav_lubba.png";
import "./Navbar.css";

const Navbar = (props) => {

    const [activeItem, setActiveItem] = useState("home");

    const setMenuActive = (event, { name }) => {
        setActiveItem(name);
    }

    return (
        <nav>
            <Menu pointing secondary>
                <Menu.Item as={Link} to="/">
                    <Image className="main-logo" src={Logo} size="small" />
                </Menu.Item>

                <Menu.Menu position='right'>
                <Menu.Item
                    name='home'
                    active={activeItem === 'home'}
                    onClick={setMenuActive}
                />
                <Menu.Item
                    name='messages'
                    active={activeItem === 'messages'}
                    onClick={setMenuActive}
                />
                <Menu.Item
                    name='about_me'
                    active={activeItem === 'about_me'}
                    onClick={setMenuActive}
                />
                    <Menu.Item
                        name='logout'
                        active={activeItem === 'logout'}
                        onClick={setMenuActive}
                    />
                </Menu.Menu>
            </Menu>
        </nav>
    );

}

export default Navbar;
