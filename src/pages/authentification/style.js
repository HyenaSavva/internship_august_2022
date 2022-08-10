import styled, { createGlobalStyle } from "styled-components";
import img from "../../assets/Frame3.png";

export const LogBlock = styled.div`
  width: 50vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Log = styled.div`
  width: 25vw;
  height: 50vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const ImageBlock = styled.div`
  width: 50vw;
  height: 100vh;

  background-image: url(${img});
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Main = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  font-family: "Inter", sans-serif;
`;

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
`;

export const Img = styled.img`
  width: 100px;
  height: 30px;
  margin-bottom: 42px;
`;

export const H1 = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  color: #1c1c1e;
  margin: 0 0 4px 0;
`;

export const P = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 22px;
  color: #98a2b3;
  margin: 0;
`;

export const Line = styled.div`
  border-top: 1px solid #d0d0d0;
  display: flex; 
  flex-grow: 1;
`;

export const Div = styled.div`
  display: flex;  
  flex-direction: row;
  align-items: center;
  margin: 16px 0;
`

export const Por = styled.p`
color: #6C6C6C;
font-weight: 600;
margin: 0 8px;
`
