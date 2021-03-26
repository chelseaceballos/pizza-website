import React, { useState } from 'react'
import Navbar from '../Navbar'
import { HeroContainer, HeroContent, HeroBtn, HeroH1, HeroItems, HeroP} from './HeroElements'
import Sidebar from '../SideBar';

const Hero = () => {
const [isOpen, setIsOpen] = useState(false)

const toggle = () => {
    setIsOpen(!isOpen)
}

    return (
        <HeroContainer>
            <Navbar toggle={toggle}/>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <HeroContent>
                <HeroItems>
                    <HeroH1>Voted Okayest Pizza 2021</HeroH1>
                    <HeroP>Ready In 30 Minutes!</HeroP>
                    <HeroBtn>Place Order</HeroBtn>
                </HeroItems>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero
