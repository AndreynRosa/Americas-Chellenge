import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

body {
    background: ${(props) => props.theme.colors.background};
    -webkit-font-smoothing: antialiased;
    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
    font-size: 14px;
    font-style: normal;
    font-variant: normal;
    font-weight: 400;
    line-height: 20px;
    color: ${props => props.theme.colors.text};
 }

h1 {
    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
    font-size: 24px;
    font-style: normal;
    font-variant: normal;
    font-weight: 700;
    line-height: 26.4px;
}

h3 {
    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
    font-size: 14px;
    font-style: normal;
    font-variant: normal;
    font-weight: 700;
    line-height: 15.4px;
}

p {
    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
    font-size: 14px;
    font-style: normal;
    font-variant: normal;
    font-weight: 400;
    line-height: 20px;
}

blockquote {
    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
    font-size: 21px;
    font-style: normal;
    font-variant: normal;
    font-weight: 400;
    line-height: 30px;
}

pre {
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 13px;
  font-style: normal;
  font-variant: normal;
  font-weight: 400;
  line-height: 18.5667px;
}
body, input, button {
  font: 16px Roboto, sans-serif
}

#root {
    width: 100%;
    margin: 0 auto;
}

button {
  cursor: pointer;
}
`;
