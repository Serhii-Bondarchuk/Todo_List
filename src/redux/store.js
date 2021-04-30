import {todosReducer} from './todosReducer'


import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

export  const store = createStore(todosReducer, composeWithDevTools(
  applyMiddleware(),
  // other store enhancers if any
));



