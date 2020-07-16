import React, { Component } from 'react';
import SearchAutocomplete from '../../components/search-autocomplete';


export default class HomePage extends Component {
    render() {
        return (
            <div className="home">
                <div className="container">
                    <h1 className="logo" style={{ textAlign: "center" }}>字节杜索</h1>
                    <SearchAutocomplete />
                </div>
            </div >
        )
    }
}