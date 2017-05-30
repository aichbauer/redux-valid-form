import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';

import Text from '../../../src/components/form-inputs/text';

test('Text | default props', (t) => {
  const textWrapper = shallow(<Text />);

  t.deepEqual(textWrapper.props(), {
    type: 'text',
    'data-form-id': '',
    className: '',
    id: '',
    placeholder: '',
    required: 'false',
    value: '',
    min: -1,
    max: -1,
  });
});

test('Text | all props filled', (t) => {
  const textWrapper = shallow(
    <Text
      className="test-class"
      data-form-id="test-form-id"
      id="test-id"
      placeholder="test-placeholder"
      required="true"
      value="test-value"
      min={8}
      max={30}
    />,
  );

  t.deepEqual(textWrapper.props(), {
    type: 'text',
    'data-form-id': 'test-form-id',
    className: 'test-class',
    id: 'test-id',
    placeholder: 'test-placeholder',
    required: 'true',
    value: 'test-value',
    min: 8,
    max: 30,
  });
});
