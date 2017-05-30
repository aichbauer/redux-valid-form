import React from 'react';
import PropTypes from 'prop-types';

import Input from '../../containers/input';

const Datetime = (props) => (
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

Datetime.defaultProps = {
  className: '',
  'data-form-id': '',
  id: '',
  placeholder: 'MM/DD/YYYY hh:mm:ss',
  required: 'false',
  type: 'datetime',
  value: '',
};

Datetime.propTypes = {
  className: PropTypes.string,
  'data-form-id': PropTypes.string.isRequired,
  id: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
};

export default Datetime;
