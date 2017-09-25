import React from 'react';
import PropTypes from 'prop-types';

import Input from '../../containers/input';

const Checkbox = (props) => (
  <div style={{ display: 'flex' }}>
    <Input
      type={props.type}

      data-form-id={props['data-form-id']}

      className={props.className}
      id={props.id}
      required={props.required}
      value={props.value}
      name={props.name}
      checked={props.checked}
    />
    <label style={{ margin: '12px' }} htmlFor={props['data-form-id']}>{props.value}</label>
  </div>
);

Checkbox.defaultProps = {
  className: '',
  'data-form-id': '',
  id: '',
  name: '',
  required: false,
  type: 'checkbox',
  value: '',
  checked: false,
};

Checkbox.propTypes = {
  className: PropTypes.string,
  'data-form-id': PropTypes.string.isRequired,
  id: PropTypes.string,
  name: PropTypes.string,
  required: PropTypes.bool,
  type: PropTypes.string,
  value: PropTypes.string,
  checked: PropTypes.bool,
};

export default Checkbox;
