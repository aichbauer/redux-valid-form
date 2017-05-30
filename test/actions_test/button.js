import test from 'ava';

import {
  addButton,
  changeButtonValidation,
  resetButtons,
} from '../../src/actions/button';

test('addButton returns type: ADD_BUTTON', (t) => {
  t.deepEqual(addButton('1', '1', true), {
    type: 'ADD_BUTTON',
    id: '1',
    formId: '1',
    disabled: true,
  });
});

test('changeButtonValidation returns type: CHANGE_BUTTON_VALIDATION', (t) => {
  t.deepEqual(changeButtonValidation('1', false), {
    type: 'CHANGE_BUTTON_VALIDATION',
    id: '1',
    disabled: false,
  });
});

test('resetButtons returns type: RESET_BUTTONS', (t) => {
  t.deepEqual(resetButtons(), {
    type: 'RESET_BUTTONS',
  });
});

