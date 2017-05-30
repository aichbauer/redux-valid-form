import test from 'ava';

import formReducer from '../../src/reducers/formReducer';

test('SET_FORM_CONFIGURATION | to a empty state', (t) => {
  const state = formReducer([], {
    type: 'SET_FORM_CONFIGURATION',
    form: { id: '1', isValid: true, className: '' },
  });
  t.deepEqual(state, [
    { id: '1', isValid: true, className: '' },
  ]);
});

test('SET_FORM_CONFIGURATION | to a filled state', (t) => {
  const state = formReducer(
    [
      { id: '1', isValid: true, className: '' },
      { id: '2', isValid: false, className: '' },
      { id: '3', isValid: true, className: '' },
    ],
    {
      type: 'SET_FORM_CONFIGURATION',
      form: { id: '4', isValid: false, className: '' },
    },
  );
  t.deepEqual(state, [
    { id: '1', isValid: true, className: '' },
    { id: '2', isValid: false, className: '' },
    { id: '3', isValid: true, className: '' },
    { id: '4', isValid: false, className: '' },
  ]);
});

test('CHANGE_FORM_VALIDATION', (t) => {
  const state = formReducer(
    [
      { id: '1', isValid: true, className: '' },
      { id: '2', isValid: false, className: '' },
      { id: '3', isValid: true, className: '' },
    ],
    {
      type: 'CHANGE_FORM_VALIDATION',
      id: '3',
      isValid: false,
    },
  );

  t.deepEqual(state, [
    { id: '1', isValid: true, className: '' },
    { id: '2', isValid: false, className: '' },
    { id: '3', isValid: false, className: '' },
  ]);
});

test('CHANGE_FORM_VALIDATION', (t) => {
  const state = formReducer(
    [
      { id: '1', isValid: true, className: '' },
      { id: '2', isValid: false, className: '' },
      { id: '3', isValid: true, className: '' },
      { id: '4', isValid: true, className: '' },
      { id: '5', isValid: false, className: '' },
      { id: '6', isValid: true, className: '' },
    ],
    {
      type: 'CHANGE_FORM_VALIDATION',
      id: '4',
      isValid: false,
    },
  );

  t.deepEqual(state, [
    { id: '1', isValid: true, className: '' },
    { id: '2', isValid: false, className: '' },
    { id: '3', isValid: true, className: '' },
    { id: '4', isValid: false, className: '' },
    { id: '5', isValid: false, className: '' },
    { id: '6', isValid: true, className: '' },
  ]);
});

test('RESET_FORMS', (t) => {
  const state = formReducer(
    [
      { id: '1', isValid: true, className: '' },
      { id: '2', isValid: false, className: '' },
      { id: '3', isValid: true, className: '' },
      { id: '4', isValid: true, className: '' },
      { id: '5', isValid: false, className: '' },
      { id: '6', isValid: true, className: '' },
    ],
    {
      type: 'RESET_FORMS',
    },
  );

  t.deepEqual(state, []);
});

test('default | test with wrong type', (t) => {
  const state = formReducer([], {
    type: 'WRONG_TYPE',
  });
  t.deepEqual(state, []);
});
