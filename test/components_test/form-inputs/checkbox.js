import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';

import Checkbox from '../../../src/components/form-inputs/checkbox';

test('Checkbox | default props', (t) => {
  const checkboxWrapper = shallow(<Checkbox />);

  t.deepEqual(checkboxWrapper.props().children[0].props, {
    type: 'checkbox',
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
  const checkboxWrapper = shallow(
    <Checkbox
      className="test-class"
      data-form-id="test-form-id"
      id="test-id"
      required
      value="test-value"
      name="test-name"
      checked
    />,
  );

  t.deepEqual(checkboxWrapper.props().children[0].props, {
    type: 'checkbox',
    'data-form-id': 'test-form-id',
    className: 'test-class',
    id: 'test-id',
    required: true,
    value: 'test-value',
    name: 'test-name',
    checked: true,
  });
});
