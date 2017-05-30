import {
  ADD_BUTTON,
  CHANGE_BUTTON_VALIDATION,
  RESET_BUTTONS,
} from '../actions/button';

const button = (state = [], action) => {
  switch (action.type) {

    case ADD_BUTTON:
      return [
        ...state,
        {
          id: action.id,
          formId: action.formId,
          disabled: action.disabled,
        },
      ];

    case CHANGE_BUTTON_VALIDATION:
      return state.map((item) => {
        if (item.id === action.id) {
          return Object.assign({}, item, {
            disabled: action.disabled,
          });
        }

        return item;
      });

    case RESET_BUTTONS:
      return [];

    default:
      return state;

  }
};

export default button;
