import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';

import StyledInput from '../../../src/components/form-inputs/styledInput';

test('StyledInput | valid and focused', (t) => {
  const styledInputWrapper = shallow(<StyledInput data-is-valid={true} data-is-focused={true} />);

  t.is(styledInputWrapper.props()['data-is-valid'], true);
  t.is(styledInputWrapper.props()['data-is-focused'], true);
});

test('StyledInput | invalid and not focused', (t) => {
  const styledInputWrapper = shallow(<StyledInput data-is-valid={false} data-is-focused={false} />);

  t.is(styledInputWrapper.props()['data-is-valid'], false);
  t.is(styledInputWrapper.props()['data-is-focused'], false);
});

test('StyledInput | invalid and focused', (t) => {
  const styledInputWrapper = shallow(<StyledInput data-is-valid={false} data-is-focused={true} />);

  t.is(styledInputWrapper.props()['data-is-valid'], false);
  t.is(styledInputWrapper.props()['data-is-focused'], true);
});

test('StyledInput | date - invalid and not focused', (t) => {
  const styledInputWrapper = shallow(
    <StyledInput
      type="date"
      data-is-valid={false}
      data-is-focused={false}
    />,
  );

  t.is(styledInputWrapper.props()['data-is-valid'], false);
  t.is(styledInputWrapper.props()['data-is-focused'], false);
  t.is(styledInputWrapper.props().type, 'date');
});

test('StyledInput | time - invalid and not focused', (t) => {
  const styledInputWrapper = shallow(
    <StyledInput
      type="time"
      data-is-valid={false}
      data-is-focused={false}
    />,
  );

  t.is(styledInputWrapper.props()['data-is-valid'], false);
  t.is(styledInputWrapper.props()['data-is-focused'], false);
  t.is(styledInputWrapper.props().type, 'time');
});

