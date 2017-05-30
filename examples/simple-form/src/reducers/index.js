import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import {
  reduxValidButton,
  reduxValidForm,
  reduxValidInput,
} from '../../../../lib/index';

const allReducers = combineReducers({
  reduxValidButton,
  reduxValidForm,
  reduxValidInput,
  routing: routerReducer,
});

export default allReducers;
