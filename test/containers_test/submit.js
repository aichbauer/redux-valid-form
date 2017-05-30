import test from 'ava';
import { shallow } from 'enzyme';
import React from 'react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';

import { Submit } from '../../src/containers/submit';

test('Submit with all props set', (t) => {
  const mockStore = configureMockStore({});
  const store = mockStore();
  const submitWrapper = shallow(
    <Provider store={store}>
      <Submit
        id="test-id"
        className="test-class"
        value="test"
      />
    </Provider>,
  );
  t.is(submitWrapper.hasClass('test-class'), true);
  t.is(submitWrapper.props().className, 'test-class');
  t.is(submitWrapper.props().id, 'test-id');
});

test('Submit with no props set', (t) => {
  const mockStore = configureMockStore({});
  const store = mockStore();
  const submitWrapper = shallow(
    <Provider store={store}>
      <Submit />
    </Provider>,
  );
  t.is(submitWrapper.hasClass('test-class'), false);
  t.is(submitWrapper.props().className, '');
  t.is(submitWrapper.props().id, '');
});
