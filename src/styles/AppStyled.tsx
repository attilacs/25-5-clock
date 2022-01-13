import { createGlobalStyle } from "styled-components";

const AppStyled = createGlobalStyle`
body {
  align-items: center;
  background-color: #3b7eca;
  color:  #fff;
  display: flex;
  flex-direction: column;
  font-family: sans-serif;
  height: 100vh;
  justify-content: center;
  margin: 0;
  overflow: hidden;
  user-select: none;
}`;

export default AppStyled;
