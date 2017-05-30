export const ADD_BUTTON = 'ADD_BUTTON';
export const CHANGE_BUTTON_VALIDATION = 'CHANGE_BUTTON_VALIDATION';
export const RESET_BUTTONS = 'RESET_BUTTONS';

export const addButton = (id, formId, disabled) => ({
  type: ADD_BUTTON,
  id,
  formId,
  disabled,
});

export const changeButtonValidation = (id, disabled) => {
  return {
    type: CHANGE_BUTTON_VALIDATION,
    id,
    disabled,
  };
};

export const resetButtons = () => ({
  type: RESET_BUTTONS,
});
