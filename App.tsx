import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import reducers from './Redux/Reducers';
import thunk from 'redux-thunk';
import Navigation from './Shared/Navigation';
export default function App() {
  return (
    <Provider store={createStore(reducers, applyMiddleware(thunk))}>
      <Navigation />
    </Provider>
  );
}
