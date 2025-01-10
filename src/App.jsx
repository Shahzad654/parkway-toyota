import { useState } from 'react'
import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import styled from 'styled-components'
import Footer from './components/Footer'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import { IoMdClose } from "react-icons/io";
import Darwer from './components/Darwer'
import NoDarwer from './components/NoDarwer'

function App() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const [noopen, setNoOpen] = React.useState(false);

  const toggleNoDrawer = (newOpen) => () => {
    setNoOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <Darwer/>

      
    </Box>
  );

  const DrawerNoList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleNoDrawer(false)}>
      <NoDarwer/>

      
    </Box>
  );


  return (
    <>
    <Navbar/>

    <StyledHero>
      <h1>Would You Recommend Us to Your Family & Friends?</h1>
      <div className="button_container">
        <button className='yes-button' onClick={toggleNoDrawer(true)}>Yes</button>
        <button className='no-button' onClick={toggleDrawer(true)}>No</button>
      </div>
      <Drawer open={open} anchor='right' onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>

      <Drawer open={noopen} anchor='right' onClose={toggleNoDrawer(false)}>
        {DrawerNoList}
      </Drawer>
    </StyledHero>

    <Footer/>


      
    </>
  )
}

export default App

const StyledHero = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
  height: 100vh; 
  width: 100%; 
  h1{
  // font-size: 48px;
  font-size: 4rem;
  text-wrap: balance;
  text-align: center;
  max-width: 47ch;

 

  }

  .button_container{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
  .yes-button{
  border: none;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  font-size: 30px;
  font-weight: 700;
  height: 80px;
  width: 120px;
  background-color: green;
  }

  .no-button{
  border: none;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  font-size: 30px;
  font-weight: 700;
  height: 80px;
  width: 120px;
  background-color: red;
  }
  }

   @media (max-width: 640px) {
  h1 {
    font-size: 2rem;
  }
}
`;
