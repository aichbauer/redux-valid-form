export const SET_FORM_CONFIGURATION = 'SET_FORM_CONFIGURATION';
export const CHANGE_FORM_VALIDATION = 'CHANGE_FORM_VALIDATION';
export const RESET_FORMS = 'RESET_FORMS';

const receiveFormConfiguration = (id, form) => ({
  type: SET_FORM_CONFIGURATION,
  form,
});

export const setFormConfiguration = (id, form, isValid = false) =>
  (dispatch) => {
    const arrayOfChildren = [];
    let formWithArray;

    if (!Array.isArray(form.children)) {
      arrayOfChildren.push(form.children);
      formWithArray = Object.assign({}, form, {
        children: arrayOfChildren,
        id,
        isValid,
      });
    } else {
      formWithArray = Object.assign({}, form, {
        id,
        isValid,
      });
    }

    return dispatch(receiveFormConfiguration(id, formWithArray));
  };

export const changeFormValidation = (id, isValid) => ({
  type: CHANGE_FORM_VALIDATION,
  id,
  isValid,
});

export const resetForms = () => ({
  type: RESET_FORMS,
});
