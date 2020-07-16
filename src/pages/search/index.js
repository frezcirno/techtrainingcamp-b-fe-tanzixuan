import React, { Component } from 'react';
import SearchAutocomplete from '../../components/search-autocomplete';
import Swiper from '../../components/swiper';
import { search } from '../../api'


export default class Search extends Component {
    constructor(props) {
        super(props);
        console.log(this.props.location.keyword)
        search(this.props.keyword).then(res => {
            console.log(res)
            this.setState({ result: res })
        })
    }
    state = {
        result: []
    }
    render() {
        return (
            <div className="search">
                <SearchAutocomplete />
                <Swiper data={this.state.result} />
            </div>
        )
    }
}

const styles = {
    'search-autocomplete': {
        width: '600px',
        margin: '50px auto 50px',
        position: 'relative',
        transition: 'all 0.5s ease'
    }
}