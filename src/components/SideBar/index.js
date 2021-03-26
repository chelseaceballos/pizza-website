import React from 'react'

import { SidebarContainer, Icon, CloseIcon ,SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from './SidebarElements';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Order from './Order'

const Sidebar = ({isOpen, toggle}) => {
    return (
        <Router>
        <SidebarContainer isOpen={isOpen} onclick={toggle}>
            <Icon>
                <CloseIcon isOpen={!isOpen} onClick={toggle}/>
            </Icon>
            <SidebarMenu> 
                <SidebarLink to="/">Menu</SidebarLink>
                <SidebarLink to="/">Desserts</SidebarLink>
                <SidebarLink to="/">Confirmation</SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to='/'>Order Here</SidebarRoute>
            </SideBtnWrap>
        </SidebarContainer>
        </Router>
    )
}

export default Sidebar
