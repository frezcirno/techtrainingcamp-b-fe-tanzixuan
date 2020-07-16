import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from './pages/home'
import SearchPage from './pages/search'

class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/" exact component={HomePage}></Route>
                    <Route path="/search" component={SearchPage}></Route>
                    <Route path="*">
                        <p1>404 Not Found</p1>
                    </Route>
                </Switch>
            </Router>
        );
    }
}

export default App;
