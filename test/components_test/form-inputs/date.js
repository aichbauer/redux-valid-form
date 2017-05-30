import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';

import Date from '../../../src/components/form-inputs/date';

test('Date | default props', (t) => {
  const dateWrapper = shallow(<Date />);

  t.deepEqual(dateWrapper.props(), {
    type: 'date',
    'data-form-id': '',
    className: '',
    id: '',
    placeholder: 'MM/DD/YYYY',
    required: 'false',
    value: '',
  });
});

test('Date | all props filled', (t) => {
  const dateWrapper = shallow(
    <Date
      className="test-class"
      data-form-id="test-form-id"
      id="test-id"
      placeholder="test-placeholder"
      required="true"
      value="12/12/1992"
    />,
  );

  t.deepEqual(dateWrapper.props(), {
    type: 'date',
    'data-form-id': 'test-form-id',
    className: 'test-class',
    id: 'test-id',
    placeholder: 'test-placeholder',
    required: 'true',
    value: '12/12/1992',
  });
});
