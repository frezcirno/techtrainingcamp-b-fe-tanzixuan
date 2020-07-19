import React, { Component } from "react";
import styled from "styled-components";

import Suggest from "./suggest";
import InputBar from "./inputBar";
import { searchsug } from "../../api";

const StyledSearchBar = styled.div`
  margin: 40px auto;
  height: 48px;
  min-width: 600px;
  position: relative;
  transition: all 0.5s ease;
`;

class SearchBar extends Component {
    constructor(props) {
        super(props)
        this.state.keyword = this.props.initValue || ''
        this.state.focus = false
        this.state.sug = []
    }

    state = {
        focus: false,
        keyword: "",
        sug: [],
    }

    componentDidMount() {
        document.addEventListener('click', (e) => {
            this.setState({
                focus: false,
            })
        })
    }

    componentWillUnmount() {
        this.unmount = true
    }

    get_suggest(keyword) {
        if (this.timer) {
            clearTimeout(this.timer);
        }

        if (keyword.length === 0) {
            this.setState({ sug: [] });
            return
        }

        this.timer = setTimeout(() => {
            searchsug(keyword)
                .then((res) => {
                    if (this.unmount) return
                    this.setState({
                        sug: res.data,
                    });
                })
                .catch((err) => {
                    if (this.unmount) return
                    this.setState({
                        errorMsg: err.message,
                    });
                });
        }, 150);
    }

    handleChange(e) {
        var keyword = e.target.value.trim()
        this.setState({ keyword })
        this.get_suggest(keyword)
    }

    handleSuggest(e) {
        var keyword = e.target.textContent
        this.setState({ keyword: keyword, focus: false }, () => {
            this.props.onSearch(this.state.keyword)
        })
    }

    render() {
        return (
            <StyledSearchBar>
                <InputBar onClick={(e) => { e.nativeEvent.stopImmediatePropagation(); this.setState({ focus: true }); }} value={this.state.keyword} onChange={this.handleChange.bind(this)} onSearch={this.props.onSearch} />
                <Suggest sug={this.state.sug} show={this.state.focus} onSuggest={this.handleSuggest.bind(this)} />
            </StyledSearchBar>
        );
    }
}

export default SearchBar