import test from 'ava';

import createInput from '../../src/helpers/createInput';

test('createInput | default null', (t) => {
  const input = createInput();

  t.is(input, null);
});

test('createInput | Checkbox with all props filled', (t) => {
  const input = createInput('Checkbox', 'form-1-child-0', '1', {
    value: 'test-value',
    className: 'test-class',
    required: true,
    name: 'test-name',
    checked: true,
  });

  t.deepEqual(input.props, {
    type: 'checkbox',
    'data-form-id': '1',
    id: 'form-1-child-0',
    className: 'test-class',
    required: true,
    name: 'test-name',
    checked: true,
    value: 'test-value',
  });
});

test('createInput | Checkbox with no props filled', (t) => {
  const input = createInput('Checkbox', 'form-1-child-0', '1', {});

  t.deepEqual(input.props, {
    type: 'checkbox',
    'data-form-id': '1',
    id: 'form-1-child-0',
    className: '',
    required: false,
    value: '',
    name: '',
    checked: false,
  });
});

test('createInput | Button with all props filled', (t) => {
  const func = (e) => e;
  const input = createInput('Button', 'form-1-child-0', '1', { value: 'Click me!', onClick: func });

  t.deepEqual(input.props, {
    type: 'button',
    'data-form-id': '1',
    id: 'form-1-child-0',
    value: 'Click me!',
    onClick: func,
    className: '',
  });
  t.is(input.props.onClick('test'), 'test');
});

test('createInput | Button with no props filled', (t) => {
  const input = createInput('Button', 'form-1-child-0', '1', {});

  t.is(input.props.type, 'button');
  t.is(input.props['data-form-id'], '1');
  t.is(input.props.className, '');
  t.is(input.props.id, 'form-1-child-0');
  t.is(input.props.value, '');
});

test('createInput | Date with all props filled', (t) => {
  const input = createInput('Date', 'form-1-child-0', '1', {
    value: '12/12/1992',
    className: 'test-class',
    required: true,
    placeholder: 'test-placeholder',
  });

  t.deepEqual(input.props, {
    type: 'date',
    'data-form-id': '1',
    id: 'form-1-child-0',
    className: 'test-class',
    required: true,
    value: '12/12/1992',
    placeholder: 'test-placeholder',
  });
});

test('createInput | Date with no props filled', (t) => {
  const input = createInput('Date', 'form-1-child-0', '1', {});

  t.deepEqual(input.props, {
    type: 'date',
    'data-form-id': '1',
    id: 'form-1-child-0',
    className: '',
    required: false,
    value: '',
    placeholder: 'MM/DD/YYYY',
  });
});

test('createInput | Datetime with all props filled', (t) => {
  const input = createInput('Datetime', 'form-1-child-0', '1', {
    value: '12/12/1992 12:12:12',
    className: 'test-class',
    required: true,
    placeholder: 'test-placeholder',
  });

  t.deepEqual(input.props, {
    type: 'datetime',
    'data-form-id': '1',
    id: 'form-1-child-0',
    className: 'test-class',
    required: true,
    value: '12/12/1992 12:12:12',
    placeholder: 'test-placeholder',
  });
});

test('createInput | Datetime with no props filled', (t) => {
  const input = createInput('Datetime', 'form-1-child-0', '1', {});

  t.deepEqual(input.props, {
    type: 'datetime',
    'data-form-id': '1',
    id: 'form-1-child-0',
    className: '',
    required: false,
    value: '',
    placeholder: 'MM/DD/YYYY hh:mm:ss',
  });
});

test('createInput | Email with all props filled', (t) => {
  const input = createInput('Email', 'form-1-child-0', '1', {
    value: 'example@example.com',
    className: 'test-class',
    required: true,
    placeholder: 'test-placeholder',
  });

  t.deepEqual(input.props, {
    type: 'email',
    'data-form-id': '1',
    id: 'form-1-child-0',
    className: 'test-class',
    required: true,
    value: 'example@example.com',
    placeholder: 'test-placeholder',
  });
});

test('createInput | Email with no props filled', (t) => {
  const input = createInput('Email', 'form-1-child-0', '1', {});

  t.deepEqual(input.props, {
    type: 'email',
    'data-form-id': '1',
    id: 'form-1-child-0',
    className: '',
    required: false,
    value: '',
    placeholder: 'john@doe.com',
  });
});

test('createInput | Phonenumber with all props filled', (t) => {
  const input = createInput('Phonenumber', 'form-1-child-0', '1', {
    value: '+43768687687',
    className: 'test-class',
    required: true,
    placeholder: 'test-placeholder',
    min: 10,
    max: 15,
  });

  t.deepEqual(input.props, {
    type: 'phonenumber',
    'data-form-id': '1',
    id: 'form-1-child-0',
    className: 'test-class',
    required: true,
    value: '+43768687687',
    placeholder: 'test-placeholder',
    min: 10,
    max: 15,
  });
});

test('createInput | Phonenumber with no props filled', (t) => {
  const input = createInput('Phonenumber', 'form-1-child-0', '1', {});

  t.deepEqual(input.props, {
    type: 'phonenumber',
    'data-form-id': '1',
    id: 'form-1-child-0',
    className: '',
    required: false,
    value: '',
    placeholder: '+1 23456789',
    min: -1,
    max: -1,
  });
});

test('createInput | Number with all props filled', (t) => {
  const input = createInput('Number', 'form-1-child-0', '1', {
    value: '67576',
    className: 'test-class',
    required: true,
    placeholder: 'test-placeholder',
    min: 10,
    max: 15,
  });

  t.deepEqual(input.props, {
    type: 'number',
    'data-form-id': '1',
    id: 'form-1-child-0',
    className: 'test-class',
    required: true,
    value: '67576',
    placeholder: 'test-placeholder',
    min: 10,
    max: 15,
  });
});

test('createInput | Number with no props filled', (t) => {
  const input = createInput('Number', 'form-1-child-0', '1', {});

  t.deepEqual(input.props, {
    type: 'number',
    'data-form-id': '1',
    id: 'form-1-child-0',
    className: '',
    required: false,
    value: '',
    placeholder: '',
    min: -1,
    max: -1,
  });
});

test('createInput | Password with all props filled', (t) => {
  const input = createInput('Password', 'form-1-child-0', '1', {
    value: 'my-super43-secure-*passw0rd',
    className: 'test-class',
    required: true,
    placeholder: 'test-placeholder',
    min: 10,
    max: 30,
  });

  t.deepEqual(input.props, {
    type: 'password',
    'data-form-id': '1',
    id: 'form-1-child-0',
    className: 'test-class',
    required: true,
    value: 'my-super43-secure-*passw0rd',
    placeholder: 'test-placeholder',
    min: 10,
    max: 30,
  });
});

test('createInput | Password with no props filled', (t) => {
  const input = createInput('Password', 'form-1-child-0', '1', {});

  t.deepEqual(input.props, {
    type: 'password',
    'data-form-id': '1',
    id: 'form-1-child-0',
    className: '',
    required: false,
    value: '',
    placeholder: '',
    min: -1,
    max: -1,
  });
});


test('createInput | Radio with all props filled', (t) => {
  const input = createInput('Radio', 'form-1-child-0', '1', {
    value: 'test-value',
    className: 'test-class',
    required: true,
    name: 'test-name',
    checked: true,
  });

  t.deepEqual(input.props, {
    type: 'radio',
    'data-form-id': '1',
    id: 'form-1-child-0',
    className: 'test-class',
    required: true,
    name: 'test-name',
    checked: true,
    value: 'test-value',
  });
});

test('createInput | Radio with no props filled', (t) => {
  const input = createInput('Radio', 'form-1-child-0', '1', {});

  t.deepEqual(input.props, {
    type: 'radio',
    'data-form-id': '1',
    id: 'form-1-child-0',
    className: '',
    required: false,
    value: '',
    name: '',
    checked: false,
  });
});

test('createInput | Text with all props filled', (t) => {
  const input = createInput('Text', 'form-1-child-0', '1', {
    value: 'test-text',
    className: 'test-class',
    required: true,
    placeholder: 'test-placeholder',
    min: 10,
    max: -1,
  });

  t.deepEqual(input.props, {
    type: 'text',
    'data-form-id': '1',
    id: 'form-1-child-0',
    className: 'test-class',
    required: true,
    value: 'test-text',
    placeholder: 'test-placeholder',
    min: 10,
    max: -1,
  });
});

test('createInput | Text with no props filled', (t) => {
  const input = createInput('Text', 'form-1-child-0', '1', {});

  t.deepEqual(input.props, {
    type: 'text',
    'data-form-id': '1',
    id: 'form-1-child-0',
    className: '',
    required: false,
    value: '',
    placeholder: '',
    min: -1,
    max: -1,
  });
});

test('createInput | Textarea with all props filled', (t) => {
  const input = createInput('Textarea', 'form-1-child-0', '1', {
    value: 'test-text',
    className: 'test-class',
    required: true,
    placeholder: 'test-placeholder',
    min: 10,
    max: -1,
  });

  t.deepEqual(input.props, {
    type: 'textarea',
    'data-form-id': '1',
    id: 'form-1-child-0',
    className: 'test-class',
    required: true,
    value: 'test-text',
    placeholder: 'test-placeholder',
    min: 10,
    max: -1,
  });
});

test('createInput | Textarea with no props filled', (t) => {
  const input = createInput('Textarea', 'form-1-child-0', '1', {});

  t.deepEqual(input.props, {
    type: 'textarea',
    'data-form-id': '1',
    id: 'form-1-child-0',
    className: '',
    required: false,
    value: '',
    placeholder: '',
    min: -1,
    max: -1,
  });
});

test('createInput | Time with all props filled', (t) => {
  const input = createInput('Time', 'form-1-child-0', '1', {
    value: '12:12',
    className: 'test-class',
    required: true,
    placeholder: 'test-placeholder',
  });

  t.deepEqual(input.props, {
    type: 'time',
    'data-form-id': '1',
    id: 'form-1-child-0',
    className: 'test-class',
    required: true,
    value: '12:12',
    placeholder: 'test-placeholder',
  });
});

test('createInput | Time with no props filled', (t) => {
  const input = createInput('Time', 'form-1-child-0', '1', {});

  t.deepEqual(input.props, {
    type: 'time',
    'data-form-id': '1',
    id: 'form-1-child-0',
    className: '',
    required: false,
    value: '',
    placeholder: 'hh:mm',
  });
});
