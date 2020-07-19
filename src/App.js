import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createGlobalStyle } from 'styled-components'
import HomePage from './pages/home'
import SearchPage from './pages/search'

const GlobalStyle = createGlobalStyle`
html {
    font-size: 12px;
    font-family: -apple-system, system-ui, BlinkMacSystemFont, Helvetica Neue,
      PingFang SC, Hiragino Sans GB, Microsoft YaHei, Arial, sans-serif;
    word-break: break-word;
    text-rendering: optimizeLegibility;
    color: #333;
    background-color: #f4f5f5;
  }
  body {
    word-break: break-word;
    overflow-y: scroll;
  }
  a {
    text-decoration: none;
    cursor: pointer;
    color: #909090;
  }
  a:hover {
    color: #007fff;
  }
  button {
    list-style: 1;
  }
  button:disabled {
    cursor: not-allowed;
  }
  button.disabled,
  button.disabled:hover {
    background-color: #d2d2d2;
    cursor: not-allowed;
  }
  ul {
    padding: 0;
    margin: 0;
  }
  li {
    list-style: none;
  }
  body {
    margin: 0;
  }
  a {
    background-color: transparent;
    -webkit-text-decoration-skip: objects;
  }
  a:active,
  a:hover {
    outline-width: 0;
  }
  h1 {
    font-size: 2em;
    margin: 0.67em 0;
  }
  img {
    border-style: none;
  }
  svg:not(:root) {
    overflow: hidden;
  }
  button,
  input,
  select,
  textarea {
    font: inherit;
    margin: 0;
  }
  button,
  input {
    overflow: visible;
  }
  button,
  select {
    text-transform: none;
  }
  [type="reset"],
  [type="submit"],
  button,
  html [type="button"] {
    -webkit-appearance: button;
  }
  [type="button"]::-moz-focus-inner,
  [type="reset"]::-moz-focus-inner,
  [type="submit"]::-moz-focus-inner,
  button::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }
  [type="button"]:-moz-focusring,
  [type="reset"]:-moz-focusring,
  [type="submit"]:-moz-focusring,
  button:-moz-focusring {
    outline: 1px dotted ButtonText;
  }
  fieldset {
    border: 1px solid silver;
    margin: 0 2px;
    padding: 0.35em 0.625em 0.75em;
  }
  legend {
    box-sizing: border-box;
    color: inherit;
    display: table;
    max-width: 100%;
    padding: 0;
    white-space: normal;
  }
  textarea {
    overflow: auto;
  }
  [type="checkbox"],
  [type="radio"] {
    box-sizing: border-box;
    padding: 0;
  }
  [type="number"]::-webkit-inner-spin-button,
  [type="number"]::-webkit-outer-spin-button {
    height: auto;
  }
  [type="search"] {
    -webkit-appearance: textfield;
    outline-offset: -2px;
  }
  [type="search"]::-webkit-search-cancel-button,
  [type="search"]::-webkit-search-decoration {
    -webkit-appearance: none;
  }
  ::-webkit-input-placeholder {
    color: inherit;
    opacity: 0.54;
  }
  ::-webkit-file-upload-button {
    -webkit-appearance: button;
    font: inherit;
  }
`;

class App extends Component {
  render() {
    return (
      <Router>
        <GlobalStyle />
        <Switch>
          <Route path="/" exact component={HomePage}></Route>
          <Route path="/search" component={SearchPage}></Route>
          <Route path="*">
            <p1>404 Not Found</p1>
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
