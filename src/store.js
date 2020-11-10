import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import rootReducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import RootSaga from './sagas/RootSaga';


const sagaMiddleware = createSagaMiddleware();



// const initailState = {};

const middleware = [sagaMiddleware];

const store = createStore(rootReducer, 
    composeWithDevTools(applyMiddleware(...middleware)
    ));

    sagaMiddleware.run(RootSaga);


export default store 