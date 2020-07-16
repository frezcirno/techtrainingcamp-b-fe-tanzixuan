import React, { Component } from 'react'
import { search } from '../../api'

export default class Swiper extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <ul>
                {
                    this.props.data.map(item =>
                        (<li>
                            {item}
                        </li>)
                    )
                }
            </ul>
        )
    }
}