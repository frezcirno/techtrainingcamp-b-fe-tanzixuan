import React, { Component } from "react";
import styled from "styled-components";

const StyledInputBar = styled.div`
  border: 2px solid #1e88e5;
  border-radius: 10px;
  background-color: #fefefe;
`;

const Input = styled.input`
  border: 0;
  margin-top: 2px;
  margin-left: 13px;
  height: 44px;
  width: 635px;
  font-size: 16pt;
  color: #9e9c9c;
`;


const Icon = styled.span`
  color: green;
  position: absolute;
  width: 26px;
  height: 26px;
  right: 13px;
  top: 13px;
  cursor: pointer;
`;

class InputBar extends Component {
  render() {
    return (
      <StyledInputBar>
        <Input
          value={this.props.value}
          onChange={this.props.onChange}
          onClick={this.props.onClick}
          onKeyUp={(e) => { if (e.keyCode === 13) { this.props.onSearch(this.props.value) } }}
          type="text"
          placeholder="请输入搜索内容"
          autoComplete="off"
        />
        <Icon onClick={() => { this.props.onSearch(this.props.value) }}>
          <svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></svg>
        </Icon>
      </StyledInputBar >
    )
  }
}

export default InputBar