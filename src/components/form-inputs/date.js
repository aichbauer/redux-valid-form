import React from 'react';
import PropTypes from 'prop-types';

import Input from '../../containers/input';

const Date = (props) => (
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

Date.defaultProps = {
  className: '',
  'data-form-id': '',
  id: '',
  placeholder: 'MM/DD/YYYY',
  required: 'false',
  type: 'date',
  value: '',
};

Date.propTypes = {
  className: PropTypes.string,
  'data-form-id': PropTypes.string.isRequired,
  id: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
};

export default Date;
