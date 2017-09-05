import test from 'ava';
import React from 'react';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import {
  applyMiddleware,
  createStore,
  combineReducers,
} from 'redux';
import configureMockStore from 'redux-mock-store';
import ReduxThunk from 'redux-thunk';

import setup from '../_setup/_setup';

import ConForm, { Form } from '../../src/containers/form';
import TextCon from '../../src/components/form-inputs/text';
import ButtonCon from '../../src/components/buttons/button';
import reduxValidButton from '../../src/reducers/buttonReducer';
import reduxValidForm from '../../src/reducers/formReducer';
import reduxValidInput from '../../src/reducers/inputReducer';

test.before('setup', () => {
  setup();
});

test('Form with all props set', (t) => {
  const mockStore = configureMockStore({});
  const store = mockStore();
  const formWrapper = shallow(
    <Provider store={store}>
      <Form id="test-id" className="test-class" />
    </Provider>,
  );
  t.is(formWrapper.hasClass('test-class'), true);
  t.is(formWrapper.props().id, 'test-id');
  t.is(formWrapper.props().className, 'test-class');
});

test('Form with no props set', (t) => {
  const mockStore = configureMockStore({});
  const store = mockStore();
  const formWrapper = shallow(
    <Provider store={store}>
      <Form />
    </Provider>,
  );
  t.is(formWrapper.hasClass('test-class'), false);
  t.is(formWrapper.props().id, '');
  t.is(formWrapper.props().className, '');
});

test('Form | mount with inputs check state', async (t) => {
  const allReducers = combineReducers({
    reduxValidButton,
    reduxValidForm,
    reduxValidInput,
  });
  const store = createStore(allReducers, applyMiddleware(ReduxThunk));

  const formWrapper = await mount(
    <Provider store={store}>
      <ConForm id="1">
        <TextCon />
        <TextCon />
        <ButtonCon onClick={(ev) => ev} />
      </ConForm>
    </Provider>,
  );

  t.deepEqual(formWrapper.props().store.getState(), store.getState());
  t.is(store.getState().reduxValidInput.length, 3);
  t.is(store.getState().reduxValidButton.length, 1);
  t.is(store.getState().reduxValidForm.length, 1);
  t.is(store.getState().reduxValidInput[0].value, '');

  const selectInputWrapper = formWrapper.find('#form-1-child-0');

  selectInputWrapper.simulate('change', { target: { value: 'CHANGE' } });

  t.is(store.getState().reduxValidInput[0].value, 'CHANGE');
});
