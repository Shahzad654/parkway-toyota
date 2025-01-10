import React from "react";
import styled from "styled-components";

export default function Footer() {
  return (
    <StyledFooter>
      <div className="main_footer">
        <p>
          © 2024 Parkway Toyota, 50 Sylvan Avenue (9W) Englewood Cliffs, NJ
          07632
        </p>

        <div className="second">
          <p>(201)944-3300</p>
          <a href="https://www.parkwaytoyota.com/" target="_blank">Privacy Policy</a>
        </div>
      </div>
    </StyledFooter>
  );
}

const StyledFooter = styled.div`
  width: 100%;
  height: max-content;
  padding-top: 2%;
  padding-bottom: 2%;
  background-color: black;
  .main_footer {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    flex-direction: column;
    p {
      color: white;
      font-size: 20px;
      text-align: center;
    }
    .second {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      flex-direction: column;
      a{
      color: white;
      }
    }
  }
`;
