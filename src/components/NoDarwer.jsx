import React from "react";
import styled from "styled-components";
import Google from "../assets/google.png";
import FB from "../assets/facebook.png";

const ModalWrapper = styled.div`
  max-width: 400px;
  width: 100%;
//   border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #007bff;
    color: #fff;
    padding: 10px 15px;

    .title {
      font-size: 1.2em;
      font-weight: bold;
    }

    .close-button {
      background: none;
      border: none;
      color: #fff;
      font-size: 1.2em;
      cursor: pointer;
    }
  }

  .social-images {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 3rem;
    padding-top: 8%;
    padding-left: 8%;
    padding-right: 8%;


    .image-wrapper {
      border: 1px solid gray; /* Gray border */
      border-radius: 4px; /* Rounded corners */
      padding: 10px; /* Padding between border and image */
      display: inline-block;
     
    }
      

    img {
      width: 70%; 
      height: auto;
      curosor: pointer;
    }


  }

  p{
      color: gray;
      font-size:16px;
      text-align: center;
      margin-top: 30px;
      }
`;

const NoDrawer = () => {
  return (
    <ModalWrapper>
      <div className="header">
        <span className="title">yes</span>
        <button className="close-button" onClick={() => console.log("Modal closed")}>
          X
        </button>
      </div>

      <div className="social-images">
        <div className="image-wrapper">
          <a href="https://www.google.com/maps/place//data=!4m3!3m2!1s0x89c2f6b56ef690c1:0x1f651db035113a54!12e1?source=g.page.m.ia._&laa=nmx-review-solicitation-ia2" target="_blank"><img src={Google} alt="Google" /></a>
        </div>
        <div className="image-wrapper">
          <a href="https://www.facebook.com/ParkwayToyotaNJ/reviews" target="_blank"><img src={FB} alt="Facebook" /></a>
        </div>
       
      </div>
      <p>Please share your experience at Parkway Toyota on any of the websites listed above.</p>
    </ModalWrapper>
  );
};

export default NoDrawer;
