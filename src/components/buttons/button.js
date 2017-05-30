import React from 'react';
import PropTypes from 'prop-types';

import Submit from '../../containers/submit';

const Button = (props) => (
  <Submit
    type={props.type}

    data-form-id={props['data-form-id']}

    className={props.className}
    id={props.id}
    value={props.value}

    onClick={props.onClick}
  />
);

Button.defaultProps = {
  className: '',
  'data-form-id': '',
  id: '',
  onClick: () => { },
  type: 'submit',
  value: '',
};

Button.propTypes = {
  className: PropTypes.string,
  'data-form-id': PropTypes.string.isRequired,
  id: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.string,
  value: PropTypes.string,
};


export default Button;
