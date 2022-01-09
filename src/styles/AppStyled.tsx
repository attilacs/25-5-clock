import { createGlobalStyle } from "styled-components";

const AppStyled = createGlobalStyle`
body {
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  margin: 0;
  overflow: hidden;
  user-select: none;
}`;

export default AppStyled;
