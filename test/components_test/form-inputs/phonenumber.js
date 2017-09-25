import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';

import Phonenumber from '../../../src/components/form-inputs/phonenumber';

test('Phonenumber | default props', (t) => {
  const phonenumberWrapper = shallow(<Phonenumber />);

  t.deepEqual(phonenumberWrapper.props(), {
    type: 'phonenumber',
    'data-form-id': '',
    className: '',
    id: '',
    placeholder: '+1 23456789',
    required: false,
    value: '',
    min: -1,
    max: -1,
  });
});

test('Phonenumber | all props filled', (t) => {
  const phonenumberWrapper = shallow(
    <Phonenumber
      className="test-class"
      data-form-id="test-form-id"
      id="test-id"
      placeholder="test-placeholder"
      required
      value="01234567890"
      min={8}
      max={30}
    />,
  );

  t.deepEqual(phonenumberWrapper.props(), {
    type: 'phonenumber',
    'data-form-id': 'test-form-id',
    className: 'test-class',
    id: 'test-id',
    placeholder: 'test-placeholder',
    required: true,
    value: '01234567890',
    min: 8,
    max: 30,
  });
});
