import React from 'react';
import PropTypes from 'prop-types';

import Input from '../../containers/input';

const Checkbox = (props) => (
  <div>
    <Input
      type={props.type}
      style={{
        float: 'left',
        width: '48%',
      }}

      data-form-id={props['data-form-id']}

      className={props.className}
      id={props.id}
      required={props.required}
      value={props.value}
      name={props.name}
      checked={props.checked}
    />
    <label style={{ float: 'left', width: 'auto', textAlign: 'left', margin: '12px' }} htmlFor={props['data-form-id']}>{props.value}</label>
  </div>
);

Checkbox.defaultProps = {
  className: '',
  'data-form-id': '',
  id: '',
  name: '',
  required: 'false',
  type: 'checkbox',
  value: '',
  checked: false,
};

Checkbox.propTypes = {
  className: PropTypes.string,
  'data-form-id': PropTypes.string.isRequired,
  id: PropTypes.string,
  name: PropTypes.string,
  required: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  checked: PropTypes.bool,
};

export default Checkbox;
