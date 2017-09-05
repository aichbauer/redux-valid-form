import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import {
  addButton,
  changeButtonValidation,
  resetButtons,
} from '../actions/button';
import {
  setFormConfiguration,
  changeFormValidation,
  resetForms,
} from '../actions/form';
import {
  addInput,
  resetInputs,
} from '../actions/input';
import createInput from '../helpers/createInput';

export class Form extends React.Component {
  componentWillMount() {
    new Promise((resolve) => {
      resolve(this.props.setFormConfiguration(this.props.id, this.props));
    })
      .then(() => {
        this.props.form.map((item) => {
          if (item.id === this.props.id) {
            item.children.map((child, idx) => {
              const id = child.props.id !== '' ? child.props.id : `form-${this.props.id}-child-${idx}`;
              const error = [];
              const disabled = true;
              const name = child.props.name || '';
              const value = child.props.value || '';
              const checked = child.props.checked || false;
              const isFocused = false;
              const isValid = false;
              const inputType = child.type.name;

              this.props.addInput(
                id,
                this.props.id,
                error,
                name,
                value,
                checked,
                isFocused,
                isValid,
                inputType,
                child.props,
              );

              if (inputType === 'Button') {
                this.props.addButton(id, this.props.id, disabled);
              }

              return null;
            });
          }

          return null;
        });
      });
  }

  componentWillUpdate(nextProps) {
    if (nextProps.input !== this.props.input && this.props.input.length > 0) {
      nextProps.form.forEach((item) => {
        const inputsAreValid = nextProps.input.every((i) => {
          if (item.id === i.formId && i.inputType !== 'Button') {
            return i.isValid;
          }

          return true;
        });
        const button = this.props.button.filter((i) => item.id === i.formId);

        if (button[0] !== undefined) {
          this.props.changeButtonValidation(button[0].id, !inputsAreValid);
          this.props.changeFormValidation(item.id, inputsAreValid);
        }
      });
    }
  }

  componentWillUnmount() {
    this.props.resetForms();
    this.props.resetInputs();
    this.props.resetButtons();
  }

  render() {
    if (this.props.form.length !== undefined) {
      return (
        <form
          id={this.props.id}

          className={this.props.className}
        >
          {this.props.form.map((item) => {
            if (item.id === this.props.id) {
              return item.children.map((child, idx) => {
                if (this.props.input[idx] !== undefined) {
                  const formId = this.props.id;
                  const id = child.props.id !== '' ? child.props.id : `form-${this.props.id}-child-${idx}`;
                  return createInput(child.type.name, id, formId, child.props);
                }

                return null;
              });
            }

            return null;
          })
          }
        </form>
      );
    }

    return null;
  }
}

Form.defaultProps = {
  addButton: () => { },
  addInput: () => { },
  button: [],
  changeButtonValidation: () => { },
  changeFormValidation: () => { },
  children: [],
  className: '',
  form: [],
  id: '',
  input: [],
  resetButtons: () => { },
  resetForms: () => { },
  resetInputs: () => { },
  setFormConfiguration: () => { },
};

Form.propTypes = {
  addButton: PropTypes.func.isRequired,
  addInput: PropTypes.func.isRequired,
  button: PropTypes.any.isRequired, // eslint-disable-line
  changeButtonValidation: PropTypes.func.isRequired,
  changeFormValidation: PropTypes.func.isRequired,
  children: PropTypes.any.isRequired, // eslint-disable-line
  className: PropTypes.string,
  form: PropTypes.any.isRequired, // eslint-disable-line
  id: PropTypes.string.isRequired,
  input: PropTypes.any.isRequired, // eslint-disable-line
  resetButtons: PropTypes.func.isRequired,
  resetForms: PropTypes.func.isRequired,
  resetInputs: PropTypes.func.isRequired,
  setFormConfiguration: PropTypes.func.isRequired,
};

const matchDispatchToProps = (dispatch) =>
  (bindActionCreators({
    addButton,
    addInput,
    changeButtonValidation,
    changeFormValidation,
    resetButtons,
    resetForms,
    resetInputs,
    setFormConfiguration,
  }, dispatch));

const mapStateToProps = (state) => ({
  button: state.reduxValidButton,
  form: state.reduxValidForm,
  input: state.reduxValidInput,
});

export default connect(mapStateToProps, matchDispatchToProps)(Form);
