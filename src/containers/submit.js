import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { changeButtonStyle } from '../actions/button';
import StyledButton from '../components/buttons/styledButton';

export class Submit extends React.Component {
  handleOnClick(event, onClick) {
    event.preventDefault();

    let form = {};

    this.props.input.map((item) => {
      if (item.isValid !== undefined &&
        item.formId === this.props['data-form-id'] &&
        item.inputType !== 'Button') {
        form = Object.assign({}, form, {
          [item.id]: item.value,
        });
      }

      return form;
    });

    return onClick(form);
  }

  render() {
    const button = this.props.button.filter((item) => item.id === this.props.id);
    let disabled = false;
    if (button[0] !== undefined) {
      disabled = button[0].disabled;
    }
    return (
      <div>
        <StyledButton
          type={this.props.type}

          data-form-id={this.props['data-form-id']}

          className={this.props.className}
          id={this.props.id}
          disabled={disabled}

          onClick={(event) => this.handleOnClick(event, this.props.onClick)}
        >
          {this.props.value}
        </StyledButton>
      </div>
    );
  }
}

Submit.defaultProps = {
  button: [],
  className: '',
  'data-form-id': '',
  form: [],
  id: '',
  input: [],
  onClick: () => { },
  type: 'submit',
  value: '',
};

Submit.propTypes = {
  button: PropTypes.any.isRequired, // eslint-disable-line
  className: PropTypes.string,
  'data-form-id': PropTypes.string.isRequired,
  form: PropTypes.any, // eslint-disable-line
  id: PropTypes.string,
  input: PropTypes.any.isRequired, // eslint-disable-line
  onClick: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
};

const matchDispatchToProps = (dispatch) =>
  (bindActionCreators({
    changeButtonStyle,
  }, dispatch));

const mapStateToProps = (state) => ({
  input: state.reduxValidInput,
  button: state.reduxValidButton,
  form: state.reduxValidForm,
});

export default connect(mapStateToProps, matchDispatchToProps)(Submit);
