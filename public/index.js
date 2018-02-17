import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Calculator from './containers/calculator';

import Reducers from './reducers';

var store = createStore(Reducers);

ReactDOM.render(
    <Provider store={ store }>
        <Calculator />
    </Provider>
, document.getElementById('root'));
