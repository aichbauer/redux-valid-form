import React from 'react';
import PropTypes from 'prop-types';

import Input from '../../containers/input';

const Phonenumber = (props) => (
  <Input
    type={props.type}

    data-form-id={props['data-form-id']}

    className={props.className}
    id={props.id}
    max={props.max}
    min={props.min}
    placeholder={props.placeholder}
    required={props.required}
    value={props.value}
  />
);

Phonenumber.defaultProps = {
  className: '',
  'data-form-id': '',
  id: '',
  max: -1,
  min: -1,
  placeholder: '+1 23456789',
  required: false,
  type: 'phonenumber',
  value: '',
};

Phonenumber.propTypes = {
  className: PropTypes.string,
  'data-form-id': PropTypes.string.isRequired,
  id: PropTypes.string,
  max: PropTypes.number,
  min: PropTypes.number,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  type: PropTypes.string,
  value: PropTypes.string,
};

export default Phonenumber;
