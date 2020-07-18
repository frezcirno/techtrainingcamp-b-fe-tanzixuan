import React, { Component } from "react";
import styled from "styled-components";
import queryString from 'query-string';

import SearchBar from "../../components/SearchBar";
import Swiper from "../../components/Swiper";
import { search } from "../../api";
import { withRouter } from "react-router-dom";

const Container = styled.div`
  width: 700px;
  margin: 0 auto;
  position: relative;
  transition: all 0.5s ease;
`;

class SearchPage extends Component {
  constructor(props) {
    super(props);
    let params = queryString.parse(this.props.location.search)
    var keyword = params.keyword.trim()
    var offset = (Number(params.offset) || 0)
    this.state.keyword = keyword
    this.state.offset = offset
    if (keyword !== '') {
      search(keyword, offset).then((result) => {
        this.setState({ result });
      });
    }
  }

  state = {
    keyword: '',
    offset: 0,
    result: [],
  }

  RedirectTo(keyword, offset) {
    this.setState({ keyword, offset });
    if (keyword !== '') {
      search(keyword, offset).then((result) => {
        this.setState({ result });
      });
    }
    const { history } = this.props
    history.push(`/search?keyword=${keyword}&offset=${offset}`)
  }

  handleSearch(value) {
    this.RedirectTo(value.trim(), 0)
  }

  prev() {
    this.RedirectTo(this.state.keyword, Math.max(0, this.state.offset - 9))
  }

  next() {
    this.RedirectTo(this.state.keyword, this.state.offset + 9)
  }

  render() {
    return (
      <Container>
        <SearchBar initValue={this.state.keyword} onSearch={this.handleSearch.bind(this)} />
        <Swiper page={1 + Math.ceil(this.state.offset / 9)} prev={this.prev.bind(this)} next={this.next.bind(this)} data={this.state.result} />
      </Container>
    );
  }
}

export default withRouter(SearchPage)