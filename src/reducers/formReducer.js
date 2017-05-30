import {
  SET_FORM_CONFIGURATION,
  CHANGE_FORM_VALIDATION,
  RESET_FORMS,
} from '../actions/form';

const form = (state = [], action) => {
  switch (action.type) {

    case SET_FORM_CONFIGURATION:
      return [
        ...state,
        action.form,
      ];

    case CHANGE_FORM_VALIDATION:
      return state.map(item => {
        if (item.id === action.id) {
          return Object.assign({}, item, {
            isValid: action.isValid,
          });
        }

        return item;
      });

    case RESET_FORMS:
      return [];

    default:
      return state;

  }
};

export default form;
