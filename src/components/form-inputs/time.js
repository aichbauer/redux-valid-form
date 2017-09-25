import React from 'react';
import PropTypes from 'prop-types';

import Input from '../../containers/input';

const Time = (props) => (
  <Input
    type={props.type}

    data-form-id={props['data-form-id']}

    className={props.className}
    id={props.id}
    placeholder={props.placeholder}
    required={props.required}
    value={props.value}
  />
);

Time.defaultProps = {
  className: '',
  'data-form-id': '',
  id: '',
  placeholder: 'hh:mm',
  required: false,
  type: 'time',
  value: '',
};

Time.propTypes = {
  className: PropTypes.string,
  'data-form-id': PropTypes.string.isRequired,
  id: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  type: PropTypes.string,
  value: PropTypes.string,
};

export default Time;
