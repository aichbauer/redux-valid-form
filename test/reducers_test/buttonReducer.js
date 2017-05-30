import test from 'ava';

import buttonReducer from '../../src/reducers/buttonReducer';

test('ADD_BUTTON | to a empty state', (t) => {
  const state = buttonReducer([], {
    type: 'ADD_BUTTON',
    id: '1',
    formId: '1',
    disabled: true,
  });
  t.deepEqual(state,
    [
      { id: '1', formId: '1', disabled: true },
    ],
  );
});

test('ADD_BUTTON | to a filled state', (t) => {
  const state = buttonReducer([{ id: '1', formId: '1', disabled: true }],
    {
      type: 'ADD_BUTTON',
      id: '2',
      formId: '2',
      disabled: false,
    },
  );

  t.deepEqual(state,
    [
      { id: '1', formId: '1', disabled: true },
      { id: '2', formId: '2', disabled: false },
    ],
  );
});

test('CHANGE_BUTTON_VALIDATION | state with only one button', (t) => {
  const state = buttonReducer([{ id: '1', formId: '1', disabled: true }], {
    type: 'CHANGE_BUTTON_VALIDATION',
    id: '1',
    disabled: false,
  });
  t.deepEqual(state,
    [
      { id: '1', formId: '1', disabled: false },
    ],
  );
});

test('CHANGE_BUTTON_VALIDATION | state with multiple buttons', (t) => {
  const state = buttonReducer([
    { id: '1', formId: '1', disabled: true },
    { id: '2', formId: '1', disabled: false },
    { id: '3', formId: '3', disabled: true },
  ],
    {
      type: 'CHANGE_BUTTON_VALIDATION',
      id: '2',
      disabled: true,
    },
  );

  t.deepEqual(state,
    [
      { id: '1', formId: '1', disabled: true },
      { id: '2', formId: '1', disabled: true },
      { id: '3', formId: '3', disabled: true },
    ],
  );
});

test('RESET_BUTTONS', (t) => {
  const state = buttonReducer([
    { id: '1', formId: '1', disabled: true },
    { id: '2', formId: '1', disabled: false },
    { id: '3', formId: '3', disabled: true },
  ],
    {
      type: 'RESET_BUTTONS',
    },
  );

  t.deepEqual(state, []);
});

test('default | test with wrong type', (t) => {
  const state = buttonReducer([], {
    type: 'WRONG_TYPE',
  });
  t.deepEqual(state, []);
});
