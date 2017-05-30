import validateComponent from '../helpers/validateComponent';

export const ADD_INPUT = 'ADD_INPUT';
export const CHANGE_INPUT_ERROR = 'CHANGE_INPUT_ERROR';
export const CHANGE_INPUT_FOCUS = 'CHANGE_INPUT_FOCUS';
export const CHANGE_INPUT_VALIDATION = 'CHANGE_INPUT_VALIDATION';
export const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE';
export const SET_INPUT_CONFIGURATION = 'SET_INPUT_CONFIGURATION';
export const RESET_INPUTS = 'RESET_INPUTS';

export const addInput = (id, formId, error, value, isFocused, isValid, inputType, props) => ({
  type: ADD_INPUT,
  id,
  formId,
  error,
  value,
  isFocused,
  isValid: validateComponent(props, value),
  inputType,
});

export const changeInputError = (id, error) => ({
  type: CHANGE_INPUT_ERROR,
  id,
  error,
});

export const changeInputFocus = (id, isFocused) => ({
  type: CHANGE_INPUT_FOCUS,
  id,
  isFocused,
});

export const changeInputValidation = (id, isValid) => ({
  type: CHANGE_INPUT_VALIDATION,
  id,
  isValid,
});

export const changeInputValue = (id, value) => ({
  type: CHANGE_INPUT_VALUE,
  id,
  value,
});

export const resetInputs = () => ({
  type: RESET_INPUTS,
});
