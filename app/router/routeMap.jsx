import React from 'react'

import { Router, Route, IndexRoute } from 'react-router'

import App from '../containers'

import Home from '../containers/Home'

import NotFound from '../containers/404'

class RouterMap extends React.Component {
    render() {
        return (
            <Router history={this.props.history}>
                <Route path='/' component={App}>
                    <IndexRoute component={Home}/>
                    <Route path='*' component={NotFound}/>
                </Route>
            </Router>
        )
    }
}

export default RouterMap
