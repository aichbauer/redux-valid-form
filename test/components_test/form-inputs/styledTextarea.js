import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';

import StyledTextarea from '../../../src/components/form-inputs/styledTextarea';

test('StyledTextarea | valid and focused', (t) => {
  const styledTextareaWrapper = shallow(
    <StyledTextarea
      data-is-valid={true}
      data-is-focused={true}
    />,
  );

  t.is(styledTextareaWrapper.props()['data-is-valid'], true);
  t.is(styledTextareaWrapper.props()['data-is-focused'], true);
});

test('StyledTextarea | invalid and not focused', (t) => {
  const styledTextareaWrapper = shallow(
    <StyledTextarea
      data-is-valid={false}
      data-is-focused={false}
    />,
  );

  t.is(styledTextareaWrapper.props()['data-is-valid'], false);
  t.is(styledTextareaWrapper.props()['data-is-focused'], false);
});

test('StyledTextarea | invalid and focused', (t) => {
  const styledTextareaWrapper = shallow(
    <StyledTextarea
      data-is-valid={false}
      data-is-focused={true}
    />,
  );

  t.is(styledTextareaWrapper.props()['data-is-valid'], false);
  t.is(styledTextareaWrapper.props()['data-is-focused'], true);
});
