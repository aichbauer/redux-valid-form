/* eslint react/prop-types: 0 */

import React from 'react';

import Date from '../components/form-inputs/date';
import Datetime from '../components/form-inputs/datetime';
import Email from '../components/form-inputs/email';
import Number from '../components/form-inputs/number';
import Phonenumber from '../components/form-inputs/phonenumber';
import Text from '../components/form-inputs/text';
import Textarea from '../components/form-inputs/textarea';
import Time from '../components/form-inputs/time';
import Button from '../components/buttons/button';

const createInput = (inputType, key, formId, props) => {
  switch (inputType) {
    case 'Button':
      return (
        <Button
          type="button"

          key={key}
          data-form-id={formId}
          id={key}

          value={props.value}

          onClick={props.onClick}
        />
      );
    case 'Date':
      return (
        <Date
          type="date"
          key={key}
          data-form-id={formId}

          id={key}
          className={props.className}
          required={props.required}
          value={props.value}
          placeholder={props.placeholder}
        />
      );
    case 'Datetime':
      return (
        <Datetime
          type="datetime"
          key={key}
          data-form-id={formId}

          id={key}
          className={props.className}
          required={props.required}
          value={props.value}
          placeholder={props.placeholder}
        />
      );
    case 'Email':
      return (
        <Email
          type="email"
          key={key}
          data-form-id={formId}

          id={key}
          className={props.className}
          required={props.required}
          value={props.value}
          placeholder={props.placeholder}
        />
      );
    case 'Number':
      return (
        <Number
          type="number"
          key={key}
          data-form-id={formId}

          id={key}
          className={props.className}
          required={props.required}
          value={props.value}
          min={props.min}
          max={props.max}
          placeholder={props.placeholder}
        />
      );
    case 'Phonenumber':
      return (
        <Phonenumber
          type="phonenumber"
          key={key}
          data-form-id={formId}

          id={key}
          className={props.className}
          required={props.required}
          value={props.value}
          min={props.min}
          max={props.max}
          placeholder={props.placeholder}
        />
      );
    case 'Password':
      return (
        <Text
          type="password"
          key={key}
          data-form-id={formId}

          id={key}
          className={props.className}
          required={props.required}
          value={props.value}
          min={props.min}
          max={props.max}
          placeholder={props.placeholder}
        />
      );
    case 'Text':
      return (
        <Text
          type="text"
          key={key}
          data-form-id={formId}

          id={key}
          className={props.className}
          required={props.required}
          value={props.value}
          min={props.min}
          max={props.max}
          placeholder={props.placeholder}
        />
      );
    case 'Textarea':
      return (
        <Textarea
          type="textarea"
          key={key}
          data-form-id={formId}

          id={key}
          className={props.className}
          required={props.required}
          value={props.value}
          min={props.min}
          max={props.max}
          placeholder={props.placeholder}
        />
      );
    case 'Time':
      return (
        <Time
          type="time"
          key={key}
          data-form-id={formId}

          id={key}
          className={props.className}
          required={props.required}
          value={props.value}
          placeholder={props.placeholder}
        />
      );
    default:
      return null;
  }
};

export default createInput;
