import inputIs from 'input-is';

const validateComponent = (props, value) => {
  if (props.type === 'checkbox' || props.type === 'radio') {
    console.log(props.value);
    return (
      (props.required === 'true' ? value : true)
    );
  } else if (props.type === 'date') {
    if (props.required === 'true') {
      return (
        (props.required === 'true' ? inputIs.filled(value) : true) &&
        (inputIs.date(value))
      );
    }

    return (value === '' ? true : inputIs.date(value));
  } else if (props.type === 'datetime') {
    if (props.required === 'true') {
      return (
        (props.required === 'true' ? inputIs.filled(value) : true) &&
        (inputIs.datetime(value))
      );
    }

    return (value === '' ? true : inputIs.datetime(value));
  } else if (props.type === 'email') {
    if (props.required === 'true') {
      return (
        (props.required === 'true' ? inputIs.filled(value) : true) &&
        (inputIs.email(value))
      );
    }

    return (value === '' ? true : inputIs.email(value));
  } else if (props.type === 'number') {
    if (props.required === 'true') {
      return (
        (props.max !== -1 ? inputIs.max(value, props.max) : true) &&
        (props.min !== -1 ? inputIs.min(value, props.min) : true) &&
        (props.required === 'true' ? inputIs.filled(value) : true) &&
        (inputIs.number(value))
      );
    }

    return (
      (props.max !== -1 ? inputIs.max(value, props.max) : true) &&
      (props.min !== -1 ? inputIs.min(value, props.min) : true) &&
      (props.required === 'true' ? inputIs.filled(value) : true) &&
      (value === '' ? true : inputIs.number(value))
    );
  } else if (props.type === 'phonenumber') {
    if (props.required === 'true') {
      return (
        (props.max !== -1 ? inputIs.max(value, props.max) : true) &&
        (props.min !== -1 ? inputIs.min(value, props.min) : true) &&
        (props.required === 'true' ? inputIs.filled(value) : true) &&
        (inputIs.phonenumber(value))
      );
    }

    return (value === '' ? true : inputIs.phonenumber(value));
  } else if (props.type === 'text' || props.type === 'textarea' || props.type === 'password') {
    return (
      (props.max !== -1 ? inputIs.max(value, props.max) : true) &&
      (props.min !== -1 ? inputIs.min(value, props.min) : true) &&
      (props.required === 'true' ? inputIs.filled(value) : true)
    );
  } else if (props.type === 'time') {
    if (props.required === 'true') {
      return (
        (props.required === 'true' ? inputIs.filled(value) : true) &&
        (inputIs.time(value))
      );
    }

    return (value === '' ? true : inputIs.time(value));
  }

  return false;
};

export default validateComponent;
