import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';

import Textarea from '../../../src/components/form-inputs/textarea';

test('Textarea | default props', (t) => {
  const textareaWrapper = shallow(<Textarea />);

  t.deepEqual(textareaWrapper.props(), {
    type: 'textarea',
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

test('Textarea | all props filled', (t) => {
  const textareaWrapper = shallow(
    <Textarea
      className="test-class"
      data-form-id="test-form-id"
      id="test-id"
      placeholder="test-placeholder"
      required
      value="test-value"
      min={8}
      max={30}
    />,
  );

  t.deepEqual(textareaWrapper.props(), {
    type: 'textarea',
    'data-form-id': 'test-form-id',
    className: 'test-class',
    id: 'test-id',
    placeholder: 'test-placeholder',
    required: true,
    value: 'test-value',
    min: 8,
    max: 30,
  });
});
