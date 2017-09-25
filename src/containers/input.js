import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import {
  changeButtonValidation,
} from '../actions/button';

import {
  addInput,
  changeInputError,
  changeInputFocus,
  changeInputValidation,
  changeInputValue,
  changeInputChecked,
} from '../actions/input';

import {
  changeFormValidation,
} from '../actions/form';

import StyledError from '../components/form-inputs/styledError';
import StyledInput from '../components/form-inputs/styledInput';
import StyledTextarea from '../components/form-inputs/styledTextarea';

import componentWarningMessage from '../helpers/componentWarningMessage';
import validateComponent from '../helpers/validateComponent';


export class Input extends React.Component {
  handleOnChange(event) {
    const id = this.props.id;
    let isValid = false;

    if (event.target.type === 'checkbox' ||
      event.target.type === 'radio') {
      isValid = validateComponent(this.props, event.target.checked);
      this.props.changeInputChecked(id, event.target.checked);
      this.props.changeInputError(id, componentWarningMessage(this.props, event.target.checked));
    } else {
      isValid = validateComponent(this.props, event.target.value);
      this.props.changeInputValue(id, event.target.value);
      this.props.changeInputError(id, componentWarningMessage(this.props, event.target.value));
    }

    new Promise((resolve) => {
      resolve(this.props.changeInputValidation(id, isValid));
    })
      .then(() => {
        const inputsAreValid = this.props.input.every((item) => {
          if (item.inputType === 'Radio' && item.name === this.props.name && item.id !== this.props.id) {
            isValid = validateComponent(item, false);
            this.props.changeInputChecked(item.id, false);
            this.props.changeInputError(item.id, componentWarningMessage(item, false));
          }

          if (this.props['data-form-id'] === item.formId && item.inputType !== 'Button') {
            return item.isValid;
          }

          return true;
        });
        const form = this.props.form.filter((i) => i.id === this.props['data-form-id']);
        this.props.changeFormValidation(form[0].id, inputsAreValid);
      })
      .then(() => {
        const button = this.props.button.filter((i) => i.formId === this.props['data-form-id']);
        const form = this.props.form.filter((i) => i.id === this.props['data-form-id']);
        this.props.changeButtonValidation(button[0].id, !form[0].isValid);
      });
  }

  handleOnFocus() {
    const id = this.props.id;

    new Promise((resolve) => {
      resolve(this.props.input.filter((i) => i.id === id));
    })
      .then((item) => {
        let isValid = false;

        if (item[0].type === 'checkbox' ||
          item[0].type === 'radio') {
          isValid = validateComponent(this.props, item[0].checked);
          this.props.changeInputError(id, componentWarningMessage(this.props, item[0].checked));
        } else {
          isValid = validateComponent(this.props, item[0].value);
          this.props.changeInputError(id, componentWarningMessage(this.props, item[0].value));
        }

        this.props.changeInputValidation(id, isValid);
        this.props.changeInputFocus(id, true);
      });
  }

  handleOnBlur() {
    const id = this.props.id;

    new Promise((resolve) => {
      resolve(this.props.input.filter((i) => i.id === id));
    })
      .then((item) => {
        let isValid = false;

        if (item[0].type === 'checkbox' ||
          item[0].type === 'radio') {
          isValid = validateComponent(this.props, item[0].checked);
          this.props.changeInputError(id, componentWarningMessage(this.props, item[0].checked));
        } else {
          isValid = validateComponent(this.props, item[0].value);
          this.props.changeInputError(id, componentWarningMessage(this.props, item[0].value));
        }

        this.props.changeInputValidation(id, isValid);
        this.props.changeInputFocus(id, false);
      });
  }

  render() {
    const input = this.props.input.filter((item) => item.id === this.props.id);
    if (input.length !== 0) {
      const value = input[0].value;
      const isValid = input[0].isValid;
      const isFocused = input[0].isFocused;
      const formId = input[0].formId;
      const error = input[0].error;

      if (this.props.type !== 'textarea') {
        return (
          <div style={{ dixplay: 'flex' }}>
            <StyledInput
              type={this.props.type}

              data-is-valid={isValid}
              data-warning-color={this.props['data-warning-color']}
              data-valid-color={this.props['data-valid-color']}
              data-is-focused={isFocused}
              data-form-id={formId}

              id={this.props.id}
              defaultChecked={this.props.checked}
              className={this.props.className}
              required={this.props.required}
              value={value}
              placeholder={this.props.placeholder}
              min={this.props.min}
              max={this.props.max}
              name={this.props.name}

              onChange={(event) => this.handleOnChange(event)}
              onFocus={() => this.handleOnFocus()}
              onBlur={() => this.handleOnBlur()}
            />
            <div>
              <StyledError
                data-is-valid={isValid}
                data-is-focused={isFocused}
                htmlFor={this.props.id}
              >
                {error}
              </StyledError>
            </div>
          </div>
        );
      }

      return (
        <div>
          <StyledTextarea
            type={this.props.type}

            data-is-valid={isValid}
            data-warning-color={this.props['data-warning-color']}
            data-valid-color={this.props['data-valid-color']}
            data-is-focused={isFocused}
            data-form-id={formId}

            id={this.props.id}
            className={this.props.className}
            required={this.props.required}
            value={value}
            placeholder={this.props.placeholder}
            min={this.props.min}
            max={this.props.max}
            name={this.props.name}

            onChange={(event) => this.handleOnChange(event)}
            onFocus={() => this.handleOnFocus()}
            onBlur={() => this.handleOnBlur()}
          />
          <div>
            <StyledError
              data-is-valid={isValid}
              data-is-focused={isFocused}
              htmlFor={this.props.id}
            >
              {error}
            </StyledError>
          </div>
        </div>
      );
    }
    return null;
  }
}

Input.defaultProps = {
  button: () => { },
  changeButtonValidation: () => { },
  changeFormValidation: () => { },
  changeInputError: () => { },
  changeInputFocus: () => { },
  changeInputValidation: () => { },
  changeInputValue: () => { },
  changeInputChecked: () => { },
  className: '',
  checked: false,
  type: 'text',
  form: [],
  id: '',
  input: [],
  'data-form-id': '',
  'data-valid-color': '#00796B',
  'data-warning-color': '#D50000',
  max: -1,
  min: -1,
  name: '',
  placeholder: '',
  required: false,
};

Input.propTypes = {
  button: PropTypes.any, // eslint-disable-line
  changeButtonValidation: PropTypes.func.isRequired,
  changeFormValidation: PropTypes.func.isRequired,
  changeInputError: PropTypes.func.isRequired,
  changeInputFocus: PropTypes.func.isRequired,
  changeInputValidation: PropTypes.func.isRequired,
  changeInputValue: PropTypes.func.isRequired,
  changeInputChecked: PropTypes.func.isRequired,
  className: PropTypes.string,
  'data-form-id': PropTypes.string.isRequired,
  'data-valid-color': PropTypes.string.isRequired,
  'data-warning-color': PropTypes.string.isRequired,
  form: PropTypes.any, // eslint-disable-line
  id: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  input: PropTypes.any.isRequired, // eslint-disable-line
  max: PropTypes.number,
  min: PropTypes.number,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  type: PropTypes.string,
};

const matchDispatchToProps = (dispatch) =>
  (bindActionCreators({
    addInput,
    changeButtonValidation,
    changeFormValidation,
    changeInputValue,
    changeInputFocus,
    changeInputValidation,
    changeInputChecked,
    changeInputError,
  }, dispatch));

const mapStateToProps = (state) => ({
  button: state.reduxValidButton,
  input: state.reduxValidInput,
  form: state.reduxValidForm,
});

export default connect(mapStateToProps, matchDispatchToProps)(Input);
