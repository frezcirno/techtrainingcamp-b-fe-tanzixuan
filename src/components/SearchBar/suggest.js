import React, { Component } from "react";
import styled from "styled-components";
const SuggList = styled.div`
  position: absolute;
  top: 40px;
  left: 0;
  width: 100%;
  background-color: white;
  transition: height 0.4s linear;
  border: 2px solid #1e88e5;
  border-top: 0;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  box-sizing: border-box;
  padding: 10px 0 10px;
  &:before{
    content:"";
    left: 2%;
    width: 96%;
    height: 2px;
    position: absolute;
    background-color: #f0f0f0;
  }
`;
const SuggItem = styled.div`
  height: 48px;
  line-height: 48px;
  text-align: left;
  font-size: 13pt;
  padding-left: 13px;
  color: #525252;
  background-color: white;
  cursor: default;
  
  &:hover {
    background-color: #f0f0f0;
  }
`;


export default class Suggest extends Component {
  render() {
    return (
      <SuggList style={{ display: (this.props.show ? "block" : "none") }} onClick={this.props.onSuggest}>
        {
          this.props.sug.map((item, index) => (
            <SuggItem key={index}>
              {item.keyword}
              {(index < 3) && <link/>}
            </SuggItem>
          ))
        }
      </SuggList >
    );
  }
}