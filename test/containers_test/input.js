import test from 'ava';
import { shallow } from 'enzyme';
import React from 'react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';

import { Input } from '../../src/containers/input';

test('Input with all props set', (t) => {
  const mockStore = configureMockStore({});
  const store = mockStore();
  const inputWapper = shallow(
    <Provider store={store}>
      <Input
        id="test-id"
        className="test-class"
        placeholder="test-placeholder"
        required="true"
        value="test"
        min={2}
        max={10}
      />
    </Provider>,
  );
  t.is(inputWapper.hasClass('test-class'), true);
  t.is(inputWapper.props().className, 'test-class');
  t.is(inputWapper.props()['data-form-id'], '');
  t.is(inputWapper.props()['data-valid-color'], '#00796B');
  t.is(inputWapper.props()['data-warning-color'], '#D50000');
  t.is(inputWapper.props().form.length, 0);
  t.is(inputWapper.props().id, 'test-id');
  t.is(inputWapper.props().input.length, 0);
  t.is(inputWapper.props().max, 10);
  t.is(inputWapper.props().min, 2);
  t.is(inputWapper.props().placeholder, 'test-placeholder');
  t.is(inputWapper.props().required, 'true');
});

test('Input with no props set', (t) => {
  const mockStore = configureMockStore({});
  const store = mockStore();
  const inputWapper = shallow(
    <Provider store={store}>
      <Input />
    </Provider>,
  );
  t.is(inputWapper.hasClass('test-class'), false);
  t.is(inputWapper.props().className, '');
  t.is(inputWapper.props()['data-form-id'], '');
  t.is(inputWapper.props()['data-valid-color'], '#00796B');
  t.is(inputWapper.props()['data-warning-color'], '#D50000');
  t.is(inputWapper.props().form.length, 0);
  t.is(inputWapper.props().id, '');
  t.is(inputWapper.props().input.length, 0);
  t.is(inputWapper.props().max, -1);
  t.is(inputWapper.props().min, -1);
  t.is(inputWapper.props().placeholder, '');
  t.is(inputWapper.props().required, 'false');
});


