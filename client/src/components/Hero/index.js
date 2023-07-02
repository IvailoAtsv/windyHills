import React, { useState } from 'react';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import {
  HeroContainer,
  HeroContent,
  HeroItems,
  HeroH1,
  HeroP,
  HeroBtn,
  BgContainer,
} from './HeroElements';

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const handleClickScroll = () => {
    const element = document.getElementById('reservation')
    if(element){
      element.scrollIntoView({ behavior: "smooth"})
    }else{
      console.log('ne brat ne stava');
    }
  }
  return (
    <BgContainer>
      <HeroContainer id='hero'>
        <Navbar toggle={toggle} />
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <HeroContent>
          <HeroItems>
            <HeroH1>Windy Hills</HeroH1>
            <HeroP>Wine and fine dining</HeroP>
            <HeroBtn onClick={handleClickScroll}>Резервирайте маса</HeroBtn>
          </HeroItems>
        </HeroContent>
      </HeroContainer>
    </BgContainer>
  );
};

export default Hero;
