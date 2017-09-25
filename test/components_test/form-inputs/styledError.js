import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';

import StyledError from '../../../src/components/form-inputs/styledError';

test('StyledError | valid and focused', (t) => {
  const styledErrorWrapper = shallow(<StyledError data-is-valid={true} data-is-focused={true} />);

  t.is(styledErrorWrapper.props()['data-is-valid'], true);
  t.is(styledErrorWrapper.props()['data-is-focused'], true);
});

test('StyledError | invalid and not focused', (t) => {
  const styledErrorWrapper = shallow(<StyledError data-is-valid={false} data-is-focused={false} />);

  t.is(styledErrorWrapper.props()['data-is-valid'], false);
  t.is(styledErrorWrapper.props()['data-is-focused'], false);
});

test('StyledError | invalid and focused', (t) => {
  const styledErrorWrapper = shallow(<StyledError data-is-valid={false} data-is-focused={true} />);

  t.is(styledErrorWrapper.props()['data-is-valid'], false);
  t.is(styledErrorWrapper.props()['data-is-focused'], true);
});

test('StyledError | valid, focused and htmlFor = checkbox', (t) => {
  const styledErrorWrapper = shallow(<StyledError data-is-valid={true} data-is-focused={true} htmlFor="checkbox" />);

  t.is(styledErrorWrapper.props()['data-is-valid'], true);
  t.is(styledErrorWrapper.props()['data-is-focused'], true);
  t.is(styledErrorWrapper.props().htmlFor, 'checkbox');
});
