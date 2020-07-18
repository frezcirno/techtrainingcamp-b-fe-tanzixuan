// home page

import React, { Component } from 'react';
import SearchBar from '../../components/SearchBar';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

const StyledHome = styled.div`
    width       : 800px;
    margin-right: auto;
    margin-left : auto;
`;

class HomePage extends Component {
    handleSearch(value) {
        const { history } = this.props
        history.push(`/search?keyword=${value}`)
    }

    render() {
        return (
            <StyledHome>
                <h1 style={{ margin: "50px auto", textAlign: "center" }}>ByteSearch</h1>
                <SearchBar style={{ width: "600px", margin: "50px auto 0" }} onSearch={this.handleSearch.bind(this)} />
            </StyledHome >
        )
    }
}
export default withRouter(HomePage)