import { createGlobalStyle } from 'styled-components';

const global = createGlobalStyle`
  
  * {
    margin:0;
    padding:0;
    box-sizing: border-box;
    font-family:Helvetica;
  }

  html, body, #root {
    overflow-x:hidden;
    width:100%;
    height:100%;
  }

  input,
  button {
    outline: 0;
    border:unset;
  }
  
`;

export default global;
