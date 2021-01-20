// require('./components/User');

require('./bootstrap');
// import "core-js/modules/es6.promise";
// import "core-js/modules/es6.array.iterator";
// import "core-js";
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from './App/store/reducers/configureStore';
import {ConnectedRouter} from 'connected-react-router/immutable';
import MasterComponent from "./App/layouts/MasterComponent/MasterComponent";
import {NavLink, withRouter} from 'react-router-dom';

ReactDOM.render(
    <Provider store={configureStore.store}>
        <ConnectedRouter history={configureStore.history}>
            <MasterComponent/>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('app')
)