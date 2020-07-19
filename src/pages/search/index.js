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
    var keyword = params.keyword?.trim()
    var offset = (Number(params.offset) || 0)
    this.state.keyword = keyword
    this.state.offset = offset
    this.getContent(keyword, offset)
  }

  getContent(keyword, offset) {
    if (keyword !== '') {
      search(keyword, offset).then((result) => {
        if (this.unmount) return
        this.setState({ result });
      });
    }
  }

  componentWillUpdate(newprops) {
    const oldparams = queryString.parse(this.props.location.search)
    const oldkeyword = oldparams.keyword?.trim()
    const oldoffset = (Number(oldparams.offset) || 0)
    const newparams = queryString.parse(newprops.location.search)
    const newkeyword = newparams.keyword?.trim()
    const newoffset = (Number(newparams.offset) || 0)
    console.log('update')
    console.log(oldkeyword + oldoffset)
    console.log(newkeyword + newoffset)
    if (oldkeyword !== newkeyword || oldoffset !== newoffset) {
      this.setState({ keyword: newkeyword, offset: newoffset });
      this.getContent(newkeyword, newoffset)
    }
  }

  componentWillUnmount() {
    this.unmount = true;
  }

  state = {
    keyword: '',
    offset: 0,
    result: [],
  }

  RedirectTo(keyword, offset) {
    this.setState({ keyword, offset });
    // this.getContent(keyword, offset)
    const { history } = this.props
    history.push(`/search?keyword=${keyword}&offset=${offset}`)
  }

  handleSearch(value) {
    this.RedirectTo(value.trim(), 0)
  }

  prev() {
    this.RedirectTo(this.state.keyword, Math.max(0, this.state.offset - 10))
  }

  next() {
    this.RedirectTo(this.state.keyword, this.state.offset + 10)
  }

  render() {
    return (
      <Container>
        <SearchBar initValue={this.state.keyword} onSearch={this.handleSearch.bind(this)} />
        <Swiper page={1 + Math.ceil(this.state.offset / 10)} prev={this.prev.bind(this)} next={this.next.bind(this)} data={this.state.result} />
      </Container>
    );
  }
}

export default withRouter(SearchPage)