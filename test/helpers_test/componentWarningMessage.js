import test from 'ava';

import componentWarningMessage from '../../src/helpers/componentWarningMessage';

test('warning message | date is valid', (t) => {
  const warningMessage = componentWarningMessage({
    type: 'date',
    id: '1',
    required: 'true',
  }, '12/12/1992');

  t.deepEqual(warningMessage, []);
});

test('warning message | date is not valid', (t) => {
  const warningMessage = componentWarningMessage({
    type: 'date',
    id: '1',
    required: 'true',
  }, '');

  t.is(warningMessage[0].props.children, '- This field is required!');
  t.is(warningMessage[1].props.children, '- The input has to be a valid date format!');
});

test('warning message | datetime is valid', (t) => {
  const warningMessage = componentWarningMessage({
    type: 'datetime',
    id: '1',
    required: 'true',
  }, '12/12/1992 12:12:12');

  t.deepEqual(warningMessage, []);
});

test('warning message | datetime is not valid', (t) => {
  const warningMessage = componentWarningMessage({
    type: 'datetime',
    id: '1',
    required: 'true',
  }, '');

  t.is(warningMessage[0].props.children, '- This field is required!');
  t.is(warningMessage[1].props.children, '- The input has to be a valid datetime format!');
});

test('warning message | email is valid', (t) => {
  const warningMessage = componentWarningMessage({
    type: 'email',
    id: '1',
    required: 'true',
  }, 'example@example.com');

  t.deepEqual(warningMessage, []);
});

test('warning message | email is not valid', (t) => {
  const warningMessage = componentWarningMessage({
    type: 'email',
    id: '1',
    required: 'true',
  }, '');

  t.is(warningMessage[0].props.children, '- This field is required!');
  t.is(warningMessage[1].props.children, '- The input has to be an email!');
});

test('warning message | phonenumber is valid', (t) => {
  const warningMessage = componentWarningMessage({
    type: 'phonenumber',
    id: '1',
    required: 'true',
  }, '+1234567890');

  t.deepEqual(warningMessage, []);
});

test('warning message | phonenumber is not valid', (t) => {
  const warningMessage = componentWarningMessage({
    type: 'phonenumber',
    id: '1',
    required: 'true',
  }, '');

  t.is(warningMessage[0].props.children, '- This field is required!');
  t.is(warningMessage[1].props.children, '- The input has to be a phonenumber!');
});

test('warning message | text is valid', (t) => {
  const warningMessage = componentWarningMessage({
    type: 'text',
    id: '1',
    min: 3,
    max: 7,
    required: 'true',
  }, 'abcde');

  t.deepEqual(warningMessage, []);
});

test('warning message | text is not valid, under min', (t) => {
  const warningMessage = componentWarningMessage({
    type: 'text',
    id: '1',
    min: 2,
    max: -1,
    required: 'true',
  }, '');

  t.is(warningMessage[0].props.children, '- This field is required!');
  t.is(warningMessage[1].props.children, '- The input has to be min. 2 letters!');
});

test('warning message | text is not valid, more than max', (t) => {
  const warningMessage = componentWarningMessage({
    type: 'text',
    id: '1',
    min: -1,
    max: 3,
    required: 'true',
  }, 'asdf');

  t.is(warningMessage[0].props.children, '- The input has to be max. 3 letters!');
});

test('warning message | textarea is valid', (t) => {
  const warningMessage = componentWarningMessage({
    type: 'textarea',
    id: '1',
    min: 3,
    max: 7,
    required: 'true',
  }, 'abcde');

  t.deepEqual(warningMessage, []);
});

test('warning message | textarea is not valid, under min', (t) => {
  const warningMessage = componentWarningMessage({
    type: 'textarea',
    id: '1',
    min: 2,
    max: -1,
    required: 'true',
  }, '');

  t.is(warningMessage[0].props.children, '- This field is required!');
  t.is(warningMessage[1].props.children, '- The input has to be min. 2 letters!');
});

test('warning message | textarea is not valid, more than max', (t) => {
  const warningMessage = componentWarningMessage({
    type: 'textarea',
    id: '1',
    min: -1,
    max: 3,
    required: 'true',
  }, 'asdf');

  t.is(warningMessage[0].props.children, '- The input has to be max. 3 letters!');
});

test('warning message | time is valid', (t) => {
  const warningMessage = componentWarningMessage({
    type: 'time',
    id: '1',
    required: 'true',
  }, '12:12');

  t.deepEqual(warningMessage, []);
});

test('warning message | time is not valid', (t) => {
  const warningMessage = componentWarningMessage({
    type: 'time',
    id: '1',
    required: 'true',
  }, '');

  t.is(warningMessage[0].props.children, '- This field is required!');
  t.is(warningMessage[1].props.children, '- The input has to be a valid time format!');
});
