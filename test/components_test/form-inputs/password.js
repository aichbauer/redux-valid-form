import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';

import Password from '../../../src/components/form-inputs/password';

test('Password | default props', (t) => {
  const passwordWrapper = shallow(<Password />);

  t.deepEqual(passwordWrapper.props(), {
    type: 'password',
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

test('Password | all props filled', (t) => {
  const passwordWrapper = shallow(
    <Password
      className="test-class"
      data-form-id="test-form-id"
      id="test-id"
      placeholder="test-placeholder"
      required
      value="my-super-secret-password"
      min={8}
      max={30}
    />,
  );

  t.deepEqual(passwordWrapper.props(), {
    type: 'password',
    'data-form-id': 'test-form-id',
    className: 'test-class',
    id: 'test-id',
    placeholder: 'test-placeholder',
    required: true,
    value: 'my-super-secret-password',
    min: 8,
    max: 30,
  });
});
