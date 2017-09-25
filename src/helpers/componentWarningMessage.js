import React from 'react';
import inputIs from 'input-is';
import warningMessage from 'warning-message';

const componentWarningMessage = (props, value) => {
  const message = [];

  if (props.required && !inputIs.filled(value)) {
    message.push(<div key={`${props.type}-${props.id}-warning-required`}>{`- ${warningMessage().requiredField()}`}</div>);
  }

  if (props.type === 'date') {
    if (!inputIs.date(value)) {
      message.push(<div key={`${props.type}-${props.id}-warning-phonenumber`}>{`- ${warningMessage().date()}`}</div>);
    }
  } else if (props.type === 'datetime') {
    if (!inputIs.datetime(value)) {
      message.push(<div key={`${props.type}-${props.id}-warning-datetime`}>{`- ${warningMessage().datetime()}`}</div>);
    }
  } else if (props.type === 'email') {
    if (!inputIs.email(value)) {
      message.push(<div key={`${props.type}-${props.id}-warning-email`}>{`- ${warningMessage().email()}`}</div>);
    }
  } else if (props.type === 'number') {
    if (!inputIs.max(value, props.max) && props.max !== -1) {
      message.push(<div key={`${props.type}-${props.id}-warning-max`}>{`- ${warningMessage().maxChar(props.max)}`}</div>);
    } else if (!inputIs.min(value, props.min) && props.min !== -1) {
      message.push(<div key={`${props.type}-${props.id}-warning-max`}>{`- ${warningMessage().minChar(props.min)}`}</div>);
    }
    if (!inputIs.number(value)) {
      message.push(<div key={`${props.type}-${props.id}-warning-number`}>{`- ${warningMessage().number()}`}</div>);
    }
  } else if (props.type === 'phonenumber') {
    if (!inputIs.phonenumber(value)) {
      message.push(<div key={`${props.type}-${props.id}-warning-phonenumber`}>{`- ${warningMessage().phonenumber()}`}</div>);
    }
  } else if (props.type === 'text' || props.type === 'textarea' || props.type === 'password') {
    if (!inputIs.max(value, props.max) && props.max !== -1) {
      message.push(<div key={`${props.type}-${props.id}-warning-max`}>{`- ${warningMessage().maxChar(props.max)}`}</div>);
    } else if (!inputIs.min(value, props.min) && props.min !== -1) {
      message.push(<div key={`${props.type}-${props.id}-warning-max`}>{`- ${warningMessage().minChar(props.min)}`}</div>);
    }
  } else if (props.type === 'time') {
    if (!inputIs.time(value)) {
      message.push(<div key={`${props.type}-${props.id}-warning-time`}>{`- ${warningMessage().time()}`}</div>);
    }
  }

  return message;
};

export default componentWarningMessage;
