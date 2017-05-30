import test from 'ava';

import inputReducer from '../../src/reducers/inputReducer';

test('ADD_INPUT | to empty state', (t) => {
  const state = inputReducer([], {
    type: 'ADD_INPUT',
    id: '1',
    formId: '1',
    error: 'testerror',
    value: 'testvalue',
    isFocused: true,
    isValid: false,
    inputType: 'text',
  });

  t.deepEqual(state, [
    {
      id: '1',
      formId: '1',
      error: 'testerror',
      value: 'testvalue',
      isFocused: true,
      isValid: false,
      inputType: 'text',
    },
  ]);
});

test('ADD_INPUT | to filled state', (t) => {
  const state = inputReducer(
    [
      { id: '1', formId: '1', error: 'testerror', value: 'testvalue', isFocused: false, isValid: true, inputType: 'text' },
      { id: '2', formId: '1', error: 'testerror', value: 'testvalue', isFocused: false, isValid: true, inputType: 'text' },
      { id: '3', formId: '1', error: 'testerror', value: 'testvalue', isFocused: false, isValid: false, inputType: 'text' },
      { id: '4', formId: '1', error: 'testerror', value: 'testvalue', isFocused: true, isValid: false, inputType: 'text' },
      { id: '5', formId: '1', error: 'testerror', value: 'testvalue', isFocused: false, isValid: false, inputType: 'text' },
    ],
    {
      type: 'ADD_INPUT',
      id: '6',
      formId: '1',
      error: 'testerror',
      value: 'testvalue',
      isFocused: false,
      isValid: true,
      inputType: 'text',
    },
  );

  t.deepEqual(state, [
    { id: '1', formId: '1', error: 'testerror', value: 'testvalue', isFocused: false, isValid: true, inputType: 'text' },
    { id: '2', formId: '1', error: 'testerror', value: 'testvalue', isFocused: false, isValid: true, inputType: 'text' },
    { id: '3', formId: '1', error: 'testerror', value: 'testvalue', isFocused: false, isValid: false, inputType: 'text' },
    { id: '4', formId: '1', error: 'testerror', value: 'testvalue', isFocused: true, isValid: false, inputType: 'text' },
    { id: '5', formId: '1', error: 'testerror', value: 'testvalue', isFocused: false, isValid: false, inputType: 'text' },
    { id: '6', formId: '1', error: 'testerror', value: 'testvalue', isFocused: false, isValid: true, inputType: 'text' },
  ]);
});

test('CHANGE_INPUT_ERROR', (t) => {
  const state = inputReducer(
    [
      { id: '1', formId: '1', error: 'testerror', value: 'testvalue', isFocused: false, isValid: true, inputType: 'text' },
      { id: '2', formId: '1', error: 'testerror', value: 'testvalue', isFocused: false, isValid: true, inputType: 'text' },
      { id: '3', formId: '1', error: 'testerror', value: 'testvalue', isFocused: false, isValid: false, inputType: 'text' },
      { id: '4', formId: '1', error: 'testerror', value: 'testvalue', isFocused: true, isValid: false, inputType: 'text' },
      { id: '5', formId: '1', error: 'testerror', value: 'testvalue', isFocused: false, isValid: false, inputType: 'text' },
    ],
    {
      type: 'CHANGE_INPUT_ERROR',
      id: '3',
      error: 'CHANGE ERROR',
    },
  );

  t.deepEqual(state, [
    { id: '1', formId: '1', error: 'testerror', value: 'testvalue', isFocused: false, isValid: true, inputType: 'text' },
    { id: '2', formId: '1', error: 'testerror', value: 'testvalue', isFocused: false, isValid: true, inputType: 'text' },
    { id: '3', formId: '1', error: 'CHANGE ERROR', value: 'testvalue', isFocused: false, isValid: false, inputType: 'text' },
    { id: '4', formId: '1', error: 'testerror', value: 'testvalue', isFocused: true, isValid: false, inputType: 'text' },
    { id: '5', formId: '1', error: 'testerror', value: 'testvalue', isFocused: false, isValid: false, inputType: 'text' },
  ]);
});

test('CHANGE_INPUT_FOCUS', (t) => {
  const state = inputReducer(
    [
      { id: '1', formId: '1', error: 'testerror', value: 'testvalue', isFocused: false, isValid: true, inputType: 'text' },
      { id: '2', formId: '1', error: 'testerror', value: 'testvalue', isFocused: false, isValid: true, inputType: 'text' },
      { id: '3', formId: '1', error: 'testerror', value: 'testvalue', isFocused: false, isValid: false, inputType: 'text' },
      { id: '4', formId: '1', error: 'testerror', value: 'testvalue', isFocused: false, isValid: false, inputType: 'text' },
      { id: '5', formId: '1', error: 'testerror', value: 'testvalue', isFocused: false, isValid: false, inputType: 'text' },
    ],
    {
      type: 'CHANGE_INPUT_FOCUS',
      id: '4',
      isFocused: false,
    },
  );

  t.deepEqual(state, [
    { id: '1', formId: '1', error: 'testerror', value: 'testvalue', isFocused: false, isValid: true, inputType: 'text' },
    { id: '2', formId: '1', error: 'testerror', value: 'testvalue', isFocused: false, isValid: true, inputType: 'text' },
    { id: '3', formId: '1', error: 'testerror', value: 'testvalue', isFocused: false, isValid: false, inputType: 'text' },
    { id: '4', formId: '1', error: 'testerror', value: 'testvalue', isFocused: false, isValid: false, inputType: 'text' },
    { id: '5', formId: '1', error: 'testerror', value: 'testvalue', isFocused: false, isValid: false, inputType: 'text' },
  ]);
});

test('CHANGE_INPUT_VALIDATION', (t) => {
  const state = inputReducer(
    [
      { id: '1', formId: '1', error: 'testerror', value: 'testvalue', isFocused: false, isValid: true, inputType: 'text' },
      { id: '2', formId: '1', error: 'testerror', value: 'testvalue', isFocused: false, isValid: true, inputType: 'text' },
      { id: '3', formId: '1', error: 'testerror', value: 'testvalue', isFocused: false, isValid: false, inputType: 'text' },
      { id: '4', formId: '1', error: 'testerror', value: 'testvalue', isFocused: false, isValid: false, inputType: 'text' },
      { id: '5', formId: '1', error: 'testerror', value: 'testvalue', isFocused: false, isValid: false, inputType: 'text' },
    ],
    {
      type: 'CHANGE_INPUT_VALIDATION',
      id: '4',
      isValid: true,
    },
  );

  t.deepEqual(state, [
    { id: '1', formId: '1', error: 'testerror', value: 'testvalue', isFocused: false, isValid: true, inputType: 'text' },
    { id: '2', formId: '1', error: 'testerror', value: 'testvalue', isFocused: false, isValid: true, inputType: 'text' },
    { id: '3', formId: '1', error: 'testerror', value: 'testvalue', isFocused: false, isValid: false, inputType: 'text' },
    { id: '4', formId: '1', error: 'testerror', value: 'testvalue', isFocused: false, isValid: true, inputType: 'text' },
    { id: '5', formId: '1', error: 'testerror', value: 'testvalue', isFocused: false, isValid: false, inputType: 'text' },
  ]);
});

test('CHANGE_INPUT_VALUE', (t) => {
  const state = inputReducer(
    [
      { id: '1', formId: '1', error: 'testerror', value: 'testvalue', isFocused: false, isValid: true, inputType: 'text' },
      { id: '2', formId: '1', error: 'testerror', value: 'testvalue', isFocused: false, isValid: true, inputType: 'text' },
      { id: '3', formId: '1', error: 'testerror', value: 'testvalue', isFocused: false, isValid: false, inputType: 'text' },
      { id: '4', formId: '1', error: 'testerror', value: 'testvalue', isFocused: false, isValid: false, inputType: 'text' },
      { id: '5', formId: '1', error: 'testerror', value: 'testvalue', isFocused: false, isValid: false, inputType: 'text' },
    ],
    {
      type: 'CHANGE_INPUT_VALUE',
      id: '4',
      value: 'CHANGED',
    },
  );

  t.deepEqual(state, [
    { id: '1', formId: '1', error: 'testerror', value: 'testvalue', isFocused: false, isValid: true, inputType: 'text' },
    { id: '2', formId: '1', error: 'testerror', value: 'testvalue', isFocused: false, isValid: true, inputType: 'text' },
    { id: '3', formId: '1', error: 'testerror', value: 'testvalue', isFocused: false, isValid: false, inputType: 'text' },
    { id: '4', formId: '1', error: 'testerror', value: 'CHANGED', isFocused: false, isValid: false, inputType: 'text' },
    { id: '5', formId: '1', error: 'testerror', value: 'testvalue', isFocused: false, isValid: false, inputType: 'text' },
  ]);
});

test('RESET_INPUTS', (t) => {
  const state = inputReducer(
    [
      { id: '1', formId: '1', error: 'testerror', value: 'testvalue', isFocused: false, isValid: true, inputType: 'text' },
      { id: '2', formId: '1', error: 'testerror', value: 'testvalue', isFocused: false, isValid: true, inputType: 'text' },
      { id: '3', formId: '1', error: 'testerror', value: 'testvalue', isFocused: false, isValid: false, inputType: 'text' },
      { id: '4', formId: '1', error: 'testerror', value: 'testvalue', isFocused: false, isValid: false, inputType: 'text' },
      { id: '5', formId: '1', error: 'testerror', value: 'testvalue', isFocused: false, isValid: false, inputType: 'text' },
    ],
    {
      type: 'RESET_INPUTS',
    },
  );

  t.deepEqual(state, []);
});

test('default | test with wrong type', (t) => {
  const state = inputReducer([], {
    type: 'WRONG_TYPE',
  });

  t.deepEqual(state, []);
});
