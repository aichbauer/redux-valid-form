import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';

import StyledButton from '../../../src/components/buttons/styledButton';

test('StyledButton | disabled', (t) => {
  const styledButtonWrapper = shallow(<StyledButton disabled={true} />);

  t.is(styledButtonWrapper.props().disabled, true);
});

test('StyledButton | enabled', (t) => {
  const styledButtonWrapper = shallow(<StyledButton disabled={false} />);

  t.is(styledButtonWrapper.props().disabled, false);
});
