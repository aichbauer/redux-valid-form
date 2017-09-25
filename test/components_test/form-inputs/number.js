import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';

import Number from '../../../src/components/form-inputs/number';

test('Number | default props', (t) => {
  const numberWrapper = shallow(<Number />);

  t.deepEqual(numberWrapper.props(), {
    type: 'number',
    'data-form-id': '',
    className: '',
    id: '',
    placeholder: '',
    required: false,
    value: '',
    min: -1,
    max: -1,
  });
});

test('Number | all props filled', (t) => {
  const numberWrapper = shallow(
    <Number
      className="test-class"
      data-form-id="test-form-id"
      id="test-id"
      placeholder="test-placeholder"
      required
      value="2"
      min={2}
      max={10}
    />,
  );

  t.deepEqual(numberWrapper.props(), {
    type: 'number',
    'data-form-id': 'test-form-id',
    className: 'test-class',
    id: 'test-id',
    placeholder: 'test-placeholder',
    required: true,
    value: '2',
    min: 2,
    max: 10,
  });
});
