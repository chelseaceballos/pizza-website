import React from 'react'

import { SidebarContainer, Icon, CloseIcon ,SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from './SidebarElements';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Order from './Order'

const Sidebar = ({isOpen, toggle}) => {
    return (
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
                <SidebarRoute path='/order' component={Order}>Order Now</SidebarRoute>
            </SideBtnWrap>
        </SidebarContainer>
    )
}

export default Sidebar
