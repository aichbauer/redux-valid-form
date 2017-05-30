import test from 'ava';
import configureMockStore from 'redux-mock-store';
import ReduxThunk from 'redux-thunk';

import {
  setFormConfiguration,
  changeFormValidation,
  resetForms,
} from '../../src/actions/form';

test('setFormConfiguration returns type: SET_FORM_CONFIGURATION | with child as array', (t) => {
  const middlewares = [ReduxThunk];
  const mockStore = configureMockStore(middlewares);
  const store = mockStore({});

  t.deepEqual(store.dispatch(
    setFormConfiguration(1, { id: '1', isValid: true, className: '', children: [1, 2, 3] }, true),
  ),
    {
      type: 'SET_FORM_CONFIGURATION',
      form: { id: 1, isValid: true, className: '', children: [1, 2, 3] },
    },
  );
});

test('setFormConfiguration returns type: SET_FORM_CONFIGURATION | with child not as array', (t) => {
  const middlewares = [ReduxThunk];
  const mockStore = configureMockStore(middlewares);
  const store = mockStore({});

  t.deepEqual(store.dispatch(
    setFormConfiguration(1, { id: '1', isValid: true, className: '', children: 1 }, true),
  ),
    {
      type: 'SET_FORM_CONFIGURATION',
      form: { id: 1, isValid: true, className: '', children: [1] },
    },
  );
});

test('changeFormValidation returns type: CHANGE_FORM_VALIDATION', (t) => {
  t.deepEqual(changeFormValidation('1', false), {
    type: 'CHANGE_FORM_VALIDATION',
    id: '1',
    isValid: false,
  });
});

test('resetForms returns type: RESET_FORMS', (t) => {
  t.deepEqual(resetForms(), {
    type: 'RESET_FORMS',
  });
});
