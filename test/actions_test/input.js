import test from 'ava';

import {
  addInput,
  changeInputError,
  changeInputFocus,
  changeInputValidation,
  changeInputValue,
  resetInputs,
} from '../../src/actions/input';

test('addInput returns type: ADD_INPUT', (t) => {
  t.deepEqual(addInput('1', '1', 'testerror', 'testvalue', false, true, false, 'text', {}), {
    type: 'ADD_INPUT',
    id: '1',
    formId: '1',
    error: 'testerror',
    value: 'testvalue',
    checked: false,
    isFocused: true,
    isValid: false,
    inputType: 'text',
  });
});

test('changeInputError returns type: CHANGE_INPUT_ERROR', (t) => {
  t.deepEqual(changeInputError('1', 'testerror'), {
    type: 'CHANGE_INPUT_ERROR',
    id: '1',
    error: 'testerror',
  });
});

test('changeInputFocus returns type: CHANGE_INPUT_FOCUS', (t) => {
  t.deepEqual(changeInputFocus('1', true), {
    type: 'CHANGE_INPUT_FOCUS',
    id: '1',
    isFocused: true,
  });
});

test('changeInputValidation returns type: CHANGE_INPUT_VALIDATION', (t) => {
  t.deepEqual(changeInputValidation('1', true), {
    type: 'CHANGE_INPUT_VALIDATION',
    id: '1',
    isValid: true,
  });
});

test('changeInputValue returns type: CHANGE_INPUT_VALUE', (t) => {
  t.deepEqual(changeInputValue('1', 'testvalue'), {
    type: 'CHANGE_INPUT_VALUE',
    id: '1',
    value: 'testvalue',
  });
});

test('resetInputs returns type: RESET_INPUTS', (t) => {
  t.deepEqual(resetInputs(), {
    type: 'RESET_INPUTS',
  });
});
