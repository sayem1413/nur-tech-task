import {createStore, applyMiddleware, compose, Store} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import {routerMiddleware} from 'connected-react-router/immutable'
import {createBrowserHistory} from 'history'
import {createLogger} from 'redux-logger'
import {fromJS} from 'immutable'
import rootReducer from "./rootReducer";

export const history = createBrowserHistory()

// Logger option for transforming immutable js
const logger = createLogger({
    stateTransformer: (state) => {
        return state.toJS()
    }
})
// - initial state
let initialState = {}
// - Config and create store of redux
const composeEnhancers = composeWithDevTools({
    // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
})
let store = createStore(rootReducer(history), fromJS(initialState), composeEnhancers(
    applyMiddleware(logger, thunk, routerMiddleware(history))
))
export default {store, history}
