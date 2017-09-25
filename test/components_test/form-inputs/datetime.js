import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';

import Datetime from '../../../src/components/form-inputs/datetime';

test('Datetime | default props', (t) => {
  const datetimeWrapper = shallow(<Datetime />);

  t.deepEqual(datetimeWrapper.props(), {
    type: 'datetime',
    'data-form-id': '',
    className: '',
    id: '',
    placeholder: 'MM/DD/YYYY hh:mm:ss',
    required: false,
    value: '',
  });
});

test('Datetime | all props filled', (t) => {
  const datetimeWrapper = shallow(
    <Datetime
      className="test-class"
      data-form-id="test-form-id"
      id="test-id"
      placeholder="test-placeholder"
      required
      value="12/12/1992 12:12"
    />,
  );

  t.deepEqual(datetimeWrapper.props(), {
    type: 'datetime',
    'data-form-id': 'test-form-id',
    className: 'test-class',
    id: 'test-id',
    placeholder: 'test-placeholder',
    required: true,
    value: '12/12/1992 12:12',
  });
});
