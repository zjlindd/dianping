import {React} from "react";

import {Router, Route, IndexRoute} from "react-router";

import App from '../containers'

//定义路由
class RouterMap extends React.Component {
    render() {
        return (
            <Router history={this.prop.history}>
                <Route path="/" component={ App }> </Route>
            </Router>
        )
    }

}



