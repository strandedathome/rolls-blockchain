import { createGlobalStyle } from 'styled-components';
import '@fontsource/roboto/700.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/300.css';
import '@fontsource/bebas-neue';
import '@fontsource/nunito-sans';
import '@fontsource/inconsolata';

export default createGlobalStyle`
  h1, h4, h5 {
    font-family: "Bebas Neue"!important;
  }
  h6 {
    font-family: "Inconsolata"!important;
  }
`;
