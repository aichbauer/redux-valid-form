import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';

import Button from '../../../src/components/buttons/button';

test('Button | default props', (t) => {
  const buttonWrapper = shallow(<Button />);

  t.is(buttonWrapper.props().type, 'submit');
  t.is(buttonWrapper.props()['data-form-id'], '');
  t.is(buttonWrapper.props().className, '');
  t.is(buttonWrapper.props().id, '');
  t.is(buttonWrapper.props().value, '');
});

test('Button | all props filled', (t) => {
  const func = (e) => e;
  const buttonWrapper = shallow(
    <Button
      id="test-id"
      data-form-id="test-form-id"
      className="test-class"
      value="test-value"
      onClick={func}
    />,
  );

  t.is(buttonWrapper.props().type, 'submit');
  t.is(buttonWrapper.props()['data-form-id'], 'test-form-id');
  t.is(buttonWrapper.props().className, 'test-class');
  t.is(buttonWrapper.props().id, 'test-id');
  t.is(buttonWrapper.props().value, 'test-value');
  t.is(buttonWrapper.props().onClick('test'), 'test');
});
