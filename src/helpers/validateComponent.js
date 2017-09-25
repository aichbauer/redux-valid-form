import inputIs from 'input-is';

const validateComponent = (props, value) => {
  if (props.type === 'checkbox' || props.type === 'radio') {
    return value;
  } else if (props.type === 'date') {
    return (
      (props.required ? inputIs.filled(value) : true) &&
      (value === '' ? true : inputIs.date(value))
    );
  } else if (props.type === 'datetime') {
    return (
      (props.required ? inputIs.filled(value) : true) &&
      (value === '' ? true : inputIs.datetime(value))
    );
  } else if (props.type === 'email') {
    return (
      (props.required ? inputIs.filled(value) : true) &&
      (value === '' ? true : inputIs.email(value))
    );
  } else if (props.type === 'number') {
    return (
      (props.max !== -1 ? inputIs.max(value, props.max) : true) &&
      (props.min !== -1 ? inputIs.min(value, props.min) : true) &&
      (props.required ? inputIs.filled(value) : true) &&
      (value === '' ? true : inputIs.number(value))
    );
  } else if (props.type === 'phonenumber') {
    return (
      (props.max !== -1 ? inputIs.max(value, props.max) : true) &&
      (props.min !== -1 ? inputIs.min(value, props.min) : true) &&
      (props.required ? inputIs.filled(value) : true) &&
      (value === '' ? true : inputIs.phonenumber(value))
    );
  } else if (props.type === 'text' || props.type === 'textarea' || props.type === 'password') {
    return (
      (props.max !== -1 ? inputIs.max(value, props.max) : true) &&
      (props.min !== -1 ? inputIs.min(value, props.min) : true) &&
      (props.required ? inputIs.filled(value) : true)
    );
  } else if (props.type === 'time') {
    return (
      (props.required ? inputIs.filled(value) : true) &&
      (value === '' ? true : inputIs.time(value))
    );
  }

  return false;
};

export default validateComponent;
