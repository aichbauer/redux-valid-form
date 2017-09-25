import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';

import Radio from '../../../src/components/form-inputs/radiobutton';

test('Checkbox | default props', (t) => {
  const radioWrapper = shallow(<Radio />);

  t.deepEqual(radioWrapper.props().children[0].props, {
    type: 'radio',
    'data-form-id': '',
    className: '',
    id: '',
    required: false,
    value: '',
    name: '',
    checked: false,
  });
});

test('Checkbox | all props filled', (t) => {
  const radioWrapper = shallow(
    <Radio
      className="test-class"
      data-form-id="test-form-id"
      id="test-id"
      required
      value="test-value"
      name="test-name"
      checked
    />,
  );

  t.deepEqual(radioWrapper.props().children[0].props, {
    type: 'radio',
    'data-form-id': 'test-form-id',
    className: 'test-class',
    id: 'test-id',
    required: true,
    value: 'test-value',
    name: 'test-name',
    checked: true,
  });
});
