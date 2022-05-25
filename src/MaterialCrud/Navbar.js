import React from 'react';
import {AppBar, Toolbar,  styled} from '@mui/material';
import {NavLink} from 'react-router-dom'
const Header = styled(AppBar)`
background:#111111;
`
const Tabs = styled(NavLink)`
font-size: 20px;
margin-right:20px;
color:inherit;
text-decoration:none;
`

const Navbar = () => {
    return (
        <div>
            <Header position="static">
                <Toolbar>
                    <Tabs to="/">Crud</Tabs>
                    <Tabs to="/allUsers">All Users</Tabs>
                    <Tabs to="/adduser">Add User</Tabs>
                </Toolbar>
            </Header>
        </div>
    );
};

export default Navbar;