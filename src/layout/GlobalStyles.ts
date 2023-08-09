import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
    html {
    line-height: 1;
    text-size-adjust: 100%;
    margin: 0;
    padding: 0;
    font-size: 62.5%;
  }

  body {
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: 'Inter', sans-serif;
    overflow-x: hidden;
    color: #1E2022;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    padding: 0;
    margin: 0;
    font-weight: normal;
    line-height: 1.5em;
  }

  a {
    background-color: transparent;
    color: inherit;
    font-weight: inherit;
  }

  b {
    font-weight: 700;
  }

  strong {
    font-weight: inherit;
  }

  img {
    border-style: none;
  }

  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit;
    font-size: 100%;
    margin: 0;
    border: none;
    background-color: transparent;
    padding: 0;
  }

  textarea {
    overflow: auto;
  }

  button {
    cursor: pointer;
  }

  ul {
    margin: 0;
    padding: 0;
  }
`

export default GlobalStyles