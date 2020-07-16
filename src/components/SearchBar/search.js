import React, { Component } from 'react'
import AutoComplete from './autocomplete'
import { searchsug } from '../../api'
import './search-autocomplete.css'

export default class SearchAutoComplete extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    state = {
        loading: true,
        focus: false,
        keyword: '',
        sug: [],
        message: '',
    }

    handleChange(e) {
        this.setState({ keyword: e.target.value });
        console.log(this.state.keyword)
        if (this.state.keyword === '') {
            return
        }

        if (this.timer) {
            clearTimeout(this.timer)
        }

        this.timer = setTimeout(() => {
            console.log('Call ' + this.state.keyword)
            searchsug(this.state.keyword)
                .then(res => {
                    console.log(res)
                    this.setState({
                        loading: false,
                        sug: res.data,
                        message: res.message
                    })
                })
                .catch(err => {
                    this.setState({
                        errorMsg: err.message
                    })
                })
        }, 100);
    }

    render() {
        return (
            <div className="search-autocomplete"
                onFocus={() => { this.setState({ focus: true }); console.log('onFocus'); }}
                onBlur={() => { this.setState({ focus: false }); console.log('onBlur'); }}>
                <input className="input"
                    value={this.state.keyword}
                    onChange={this.handleChange}
                    type="text"
                    placeholder="请输入搜索内容"
                    autoComplete="off" />
                <button className="go" />
                <AutoComplete show={this.state.focus} loading={this.state.loading} sug={this.state.sug} />
            </div>
        )
    }
}

const styles={
    .hide {
        display: none;
    }
    
    .search-autocomplete {
        width           : 600px;
        margin          : 50px auto 50px;
        position        : relative;
        /* border       : 2px solid #1E88E5; */
        /* border-radius: 10px; */
        transition      : all 0.5s ease;
    }
    
    .input {
        border      : 0;
        margin      : 0;
        height      : 48px;
        width       : 480px;
        padding-left: 13px;
        color       : #9E9C9C;
        font-size   : 16pt;
    }
    
    .go {
        display   : inline;
        border    : 0;
        margin    : 0;
        padding   : 0;
        height    : 48px;
        width     : 85px;
        top       : 0px;
        right     : 0px;
        background: #1E88E5;
        cursor    : pointer;
        transition: all 0.5s ease;
    
        border-top-right-radius   : 10px;
        border-bottom-right-radius: 10px;
    }
    
    .go:before {
        content  : "Go";
        font-size: 18pt;
        color    : #F9F0DA;
    }
    
    .search-bar:focus .autocomplete {
        border-top: 2px solid #f0f0f0;
    }
    
    .search-bar:hover {
        border-color: #005cb2;
    }
    
    .go:hover {
        background: #005cb2;
    }
    
    .autocomplete {
        position        : absolute;
        width           : 100%;
        background-color: whitesmoke;
        transition      : height 0.4s linear;
        border-top      : 2px solid #f0f0f0;
    }
    
    .item {
        height          : 48px;
        line-height     : 48px;
        text-align      : left;
        font-size       : 13pt;
        padding-left    : 13px;
        color           : #525252;
        background-color: white;
        cursor          : default;
    }
    
    .item:hover {
        background-color: #f0f0f0;
    }
}