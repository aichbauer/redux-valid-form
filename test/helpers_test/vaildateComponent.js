import test from 'ava';

import validateComponent from '../../src/helpers/validateComponent';

test('date | not filled but required', (t) => {
  const validComponent = validateComponent({
    type: 'date',
    required: 'true',
  }, '');

  t.is(validComponent, false);
});

test('date | filled and required', (t) => {
  const validComponent = validateComponent({
    type: 'date',
    required: 'true',
  }, '12/12/1992');

  t.is(validComponent, true);
});


test('date | not required and not filled', (t) => {
  const validComponent = validateComponent({
    type: 'date',
    required: 'false',
  }, '');

  t.is(validComponent, true);
});

test('datetime | not filled but required', (t) => {
  const validComponent = validateComponent({
    type: 'datetime',
    required: 'true',
  }, '');

  t.is(validComponent, false);
});

test('datetime | filled and required', (t) => {
  const validComponent = validateComponent({
    type: 'datetime',
    required: 'true',
  }, '12/12/1992 12:12:12');

  t.is(validComponent, true);
});


test('datetime | not filled and not required', (t) => {
  const validComponent = validateComponent({
    type: 'datetime',
    required: 'false',
  }, '');

  t.is(validComponent, true);
});

test('email | not filled but required', (t) => {
  const validComponent = validateComponent({
    type: 'email',
    required: 'true',
  }, '');

  t.is(validComponent, false);
});

test('email | filled and required', (t) => {
  const validComponent = validateComponent({
    type: 'email',
    required: 'true',
  }, 'example@example.com');

  t.is(validComponent, true);
});


test('email | not filled and not required', (t) => {
  const validComponent = validateComponent({
    type: 'email',
    required: 'false',
  }, '');

  t.is(validComponent, true);
});

test('phonenumber | not filled but required', (t) => {
  const validComponent = validateComponent({
    type: 'phonenumber',
    required: 'true',
    min: -1,
    max: -1,
  }, '');

  t.is(validComponent, false);
});

test('phonenumber | filled and required', (t) => {
  const validComponent = validateComponent({
    type: 'phonenumber',
    required: 'true',
    min: -1,
    max: -1,
  }, '+123123123123');

  t.is(validComponent, true);
});

test('phonenumber | filled and required, but more than max', (t) => {
  const validComponent = validateComponent({
    type: 'phonenumber',
    required: 'true',
    min: -1,
    max: 7,
  }, '+123123123123');

  t.is(validComponent, false);
});

test('phonenumber | filled and required, but less than min', (t) => {
  const validComponent = validateComponent({
    type: 'phonenumber',
    required: 'true',
    min: 7,
    max: -1,
  }, '+12313');

  t.is(validComponent, false);
});

test('phonenumber | not filled and not required', (t) => {
  const validComponent = validateComponent({
    type: 'phonenumber',
    required: 'false',
    min: -1,
    max: -1,
  }, '');

  t.is(validComponent, true);
});

test('text | not filled but required', (t) => {
  const validComponent = validateComponent({
    type: 'text',
    required: 'true',
    min: -1,
    max: -1,
  }, '');

  t.is(validComponent, false);
});

test('text | filled and required', (t) => {
  const validComponent = validateComponent({
    type: 'text',
    required: 'true',
    min: -1,
    max: -1,
  }, 'abcdef');

  t.is(validComponent, true);
});

test('text | filled and required, but more than max', (t) => {
  const validComponent = validateComponent({
    type: 'text',
    required: 'true',
    min: -1,
    max: 6,
  }, 'abcdefg');

  t.is(validComponent, false);
});

test('text | filled and required, but less than min', (t) => {
  const validComponent = validateComponent({
    type: 'text',
    required: 'true',
    min: 7,
    max: -1,
  }, 'abcdef');

  t.is(validComponent, false);
});

test('text | not filled and not required', (t) => {
  const validComponent = validateComponent({
    type: 'text',
    required: 'false',
    min: -1,
    max: -1,
  }, '');

  t.is(validComponent, true);
});

test('textarea | not filled but required', (t) => {
  const validComponent = validateComponent({
    type: 'textarea',
    required: 'true',
    min: -1,
    max: -1,
  }, '');

  t.is(validComponent, false);
});

test('textarea | filled and required', (t) => {
  const validComponent = validateComponent({
    type: 'textarea',
    required: 'true',
    min: -1,
    max: -1,
  }, 'abcdef');

  t.is(validComponent, true);
});

test('textarea | filled and required, but more than max', (t) => {
  const validComponent = validateComponent({
    type: 'textarea',
    required: 'true',
    min: -1,
    max: 6,
  }, 'abcdefg');

  t.is(validComponent, false);
});

test('textarea | filled and required, but less than min', (t) => {
  const validComponent = validateComponent({
    type: 'textarea',
    required: 'true',
    min: 7,
    max: -1,
  }, 'abcdef');

  t.is(validComponent, false);
});

test('textarea | not filled and not required', (t) => {
  const validComponent = validateComponent({
    type: 'textarea',
    required: 'false',
    min: -1,
    max: -1,
  }, '');

  t.is(validComponent, true);
});

test('time | not filled but required', (t) => {
  const validComponent = validateComponent({
    type: 'time',
    required: 'true',
  }, '');

  t.is(validComponent, false);
});

test('time | filled and required', (t) => {
  const validComponent = validateComponent({
    type: 'time',
    required: 'true',
  }, '12:12');

  t.is(validComponent, true);
});


test('time | not required and not filled', (t) => {
  const validComponent = validateComponent({
    type: 'time',
    required: 'false',
  }, '');

  t.is(validComponent, true);
});
