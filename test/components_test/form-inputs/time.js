import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';

import Time from '../../../src/components/form-inputs/time';

test('Time | default props', (t) => {
  const timeWrapper = shallow(<Time />);

  t.deepEqual(timeWrapper.props(), {
    type: 'time',
    'data-form-id': '',
    className: '',
    id: '',
    placeholder: 'hh:mm',
    required: 'false',
    value: '',
  });
});

test('Time | all props filled', (t) => {
  const timeWrapper = shallow(
    <Time
      className="test-class"
      data-form-id="test-form-id"
      id="test-id"
      placeholder="test-placeholder"
      required="true"
      value="12:12"
    />,
  );

  t.deepEqual(timeWrapper.props(), {
    type: 'time',
    'data-form-id': 'test-form-id',
    className: 'test-class',
    id: 'test-id',
    placeholder: 'test-placeholder',
    required: 'true',
    value: '12:12',
  });
});
