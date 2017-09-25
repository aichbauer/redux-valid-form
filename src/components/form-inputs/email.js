import React from 'react';
import PropTypes from 'prop-types';

import Input from '../../containers/input';

const Email = (props) => (
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

Email.defaultProps = {
  className: '',
  'data-form-id': '',
  id: '',
  placeholder: 'john@doe.com',
  required: false,
  type: 'email',
  value: '',
};

Email.propTypes = {
  className: PropTypes.string,
  'data-form-id': PropTypes.string.isRequired,
  id: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  type: PropTypes.string,
  value: PropTypes.string,
};

export default Email;
