import {
  ADD_INPUT,
  CHANGE_INPUT_ERROR,
  CHANGE_INPUT_FOCUS,
  CHANGE_INPUT_VALUE,
  CHANGE_INPUT_VALIDATION,
  CHANGE_INPUT_CHECKED,
  RESET_INPUTS,
} from '../actions/input';

const input = (state = [], action) => {
  switch (action.type) {

    case ADD_INPUT:
      return [
        ...state,
        {
          id: action.id,
          formId: action.formId,
          error: action.error,
          name: action.name,
          value: action.value,
          checked: action.checked,
          isFocused: action.isFocused,
          isValid: action.isValid,
          inputType: action.inputType,
        },
      ];

    case CHANGE_INPUT_ERROR:
      return state.map(item => {
        if (item.id === action.id) {
          return Object.assign({}, item, {
            error: action.error,
          });
        }

        return item;
      });

    case CHANGE_INPUT_FOCUS:
      return state.map(item => {
        if (item.id === action.id) {
          return Object.assign({}, item, {
            isFocused: action.isFocused,
          });
        }

        return item;
      });

    case CHANGE_INPUT_VALUE:
      return state.map(item => {
        if (item.id === action.id) {
          return Object.assign({}, item, {
            value: action.value,
          });
        }

        return item;
      });

    case CHANGE_INPUT_CHECKED:
      return state.map(item => {
        if (item.id === action.id) {
          return Object.assign({}, item, {
            checked: action.checked,
          });
        }

        return item;
      });

    case CHANGE_INPUT_VALIDATION:
      return state.map(item => {
        if (item.id === action.id) {
          return Object.assign({}, item, {
            isValid: action.isValid,
          });
        }

        return item;
      });

    case RESET_INPUTS:
      return [];

    default:
      return state;

  }
};

export default input;
