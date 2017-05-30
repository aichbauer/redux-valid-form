import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';

import Email from '../../../src/components/form-inputs/email';

test('Email | default props', (t) => {
  const emailWrapper = shallow(<Email />);

  t.deepEqual(emailWrapper.props(), {
    type: 'email',
    'data-form-id': '',
    className: '',
    id: '',
    placeholder: 'john@doe.com',
    required: 'false',
    value: '',
  });
});

test('Email | all props filled', (t) => {
  const emailWrapper = shallow(
    <Email
      className="test-class"
      data-form-id="test-form-id"
      id="test-id"
      placeholder="test-placeholder"
      required="true"
      value="example@example.com"
    />,
  );

  t.deepEqual(emailWrapper.props(), {
    type: 'email',
    'data-form-id': 'test-form-id',
    className: 'test-class',
    id: 'test-id',
    placeholder: 'test-placeholder',
    required: 'true',
    value: 'example@example.com',
  });
});
