import React from "react";
import styled from "styled-components";
import Logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <StyledNavbar>
      <div className="main_container">
        <div className="logo">
          <img src={Logo} alt="Parkway Toyota Logo" />
          <h2>Parkway Toyota</h2>
        </div>

        <div className="info">
          <p>50 Sylvan Avenue (9W) Englewood Cliffs, NJ 07632</p>
          <a href="https://parkwaytoyota.com/" target="_blank"><button>Visit our website</button></a>
        </div>
      </div>
    </StyledNavbar>
  );
}

const StyledNavbar = styled.div`
  width: 100%;
  height: max-content;
  padding-bottom: 10px;
  padding-top: 10px;
  background-color: black;

  

  .main_container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 90%;
    margin: auto;
    gap: 3rem;
    height: max-content;

    .logo {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 2rem;
      flex-basis: 45%;
      img {
        width: 70%;
        max-width: 100px; 
        height: auto; 
        object-fit: contain; 
      }
      h2 {
        color: white;
      }
    }

    .info {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      flex-basis: 45%;
      gap: 1rem;
      p {
        color: white;
      }
      button {
        background-color: #4caf50;
        border: none;
        display: inline-block;
        padding: 5px 10px;
        color: white;
        cursor: pointer;
      }
    }
  }

 
 
`;
