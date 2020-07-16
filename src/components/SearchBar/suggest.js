import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class AutoComplete extends Component {
    render() {
        let mixin = ''
        if (!this.props.show) {
            mixin = ' hide'
        }
        if (this.props.loading) {
            return (<div className={"item" + mixin}>正在请求中...</div>)
        } else if (this.props.errorMsg) {
            return (<div className={"item" + mixin}>{this.props.errorMsg}</div>)
        } else if (!this.props.sug || this.props.sug.length === 0) {
            return (<div className={"item" + mixin}>找不到提示信息, 换个搜索词吧...</div>)
        } else {
            return (
                <div className={"autocomplete" + mixin}>
                    {
                        this.props.sug.map(item => (
                            <Link key={item.keyword} to={{
                                pathname: "/search",
                                query: { keyword: item.keyword }
                            }}>
                                <div className="item">
                                    {item.keyword}
                                </div>
                            </Link>
                        ))
                    }
                </div >
            )
        }
    }
}