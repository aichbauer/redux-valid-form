# redux-valid-form

[![Build Status](https://travis-ci.org/aichbauer/redux-valid-form.svg?branch=master)](https://travis-ci.org/aichbauer/redux-valid-form)
[![Coverage Status](https://coveralls.io/repos/github/aichbauer/redux-valid-form/badge.svg?branch=master)](https://coveralls.io/github/aichbauer/redux-valid-form?branch=master)

> Declarative forms for your [React Redux](https://github.com/reactjs/react-redux) Applications with inbuilt validation

## Why?

Many packages for [react](https://github.com/facebook/react) that provides forms do not have inbuild validation.
Many packages that have inbuild validation are not declarative at all.
This package was created with the purpose to support both of those features.

## Installation

```sh
npm i -S redux-valid-form
```

or

```sh
yarn add redux-valid-form
```

## Usage

After installation you have to import and add `reduxValidButton`, `reduxValidForm`, `reduxValidInput` to your `combineReducers()` function and you are ready to go. Now you can import different components from `redux-valid-form` in your react application and you are ready to create some forms in very few lines that are `declarative` and `valid`. For all of these components you have different properties.

## Table of Contents

**Example:**

- [Simple Example](#simple-example)

**Reducers:**

- [Add reducers to combineReducers](#add-reducers-to-combinereducers)

**Components:**

- [Form](#form)
- [Button](#button)
- [Date](#date)
- [Datetime](#datetime)
- [Email](#email)
- [Number](#number)
- [Password](#password)
- [Phonenumber](#phonenumber)
- [Text](#text)
- [Textarea](#textarea)
- [Time](#time)

**Props:**

- [id](#id)
- [className](#className)
- [max](#max)
- [min](#min)
- [placeholder](#placeholder)
- [required](#required)
- [value](#value)
- [onClick](#onclick)

## Simple example

Simple clone this repository and `cd` into the examples folder and run `npm install` and `npm start` and you are ready to go. Visit http://localhost:3000.

Here we have an example of a Form with a Text, an Email and a Date inputs.

The form can only be submitted if it is valid.

For simplicity we just `console.log()` the output of the form.

You need to add 3 reducers to your store. Which means you have to import `reduxValidButton`, `reduxValidForm`, and `reduxValidInput` and add it to your `combineReducer` function.

In your reducers.js (or the file where you have combine your reducer):

```js
import {
  reduxValidButton,
  reduxValidForm,
  reduxValid,
} from 'redux-valid-form'

// add these 3 reducers to your combineReducers function
const allReducers = combineReducers({
  reduxValidButton,
  reduxValidForm,
  reduxValidInput,
});

export default allReducers;
```

Your form component:

```js
import {
  Button,
  Date,
  Email,
  Form,
  Text,
} from 'redux-valid-form';

const MyForm = () => (
  <Form id="my-form-id">
    <Email id="email" required="true" />
    <Date date="date" />
    <Text id="text" min={3} max={12} required="true" />
    <Submit
      value="Click Me!"
      onClick={(validFormInputValues) => console.log(validFormInputValues)}
    />
  <Form>
);

export default MyForm;
```

If you fill all the required fields correctly, than you are able to click the button otherwise it is disabled and shows you a warning message. If you click the button you will console log the valid inputs of the form.

The output could look somthing like that:

```json
{
  "email": "example@mail.com",
  "date": "",
  "text": "example text",
}
```

## Reducers

### Add reducers to combineReducers

As `redux-valid-form` uses redux, its reducers has to be added to the `combineReducers` function.

This is a simple example of how you app.js could look like.

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
  applyMiddleware,
  combineReducers,
  createStore,
} from 'redux';
import ReduxThunk from 'redux-thunk';
import {
  reduxValidButton,
  reduxValidForm,
  reduxValid,
} from 'redux-valid-form'

// add these 3 reducers to your combineReducers function
const allReducers = combineReducers({
  reduxValidButton,
  reduxValidForm,
  reduxValidInput,
});

// create the store with the reducers
const store = createStore(allReducers, applyMiddleware(ReduxThunk));

// add the store to you application
ReactDOM.render(
  <Provider store={store}>
    {/*
      *
      * add the components with
      * the awesome valid forms
      *
      */}
  </Provider>,
  document.getElementById('root'),
)

```

## Components

### Form

**Props:**

- [id](#id): string (required)
- [className](#className): string

The `Form` component is the parent component that holds all the other components.
This component is the only required component.

```js
import { Form } from 'redux-valid-form'

const MyForm = () => (
  <Form
    id="my-form-id"
    className="my-form-class"
  >
    {/* put here all your inputs and the submit button */}
  <Form>
);

export default MyForm;
```

### Date

**Props:**

- [id](#id): string
- [className](#className): string
- [placeholder](#placeholder): string
- [required](#required): string
- [value](#value): string

```js
import { Form, Date } from 'redux-valid-form'

const MyForm = () => (
  <Form
    id="my-form-id"
    className="my-form-class"
  >
    <Date
      id="my-date-input"
      classNmae="my-date-class"
      placeholder="my-date-placeholder"
      required="true"
      value="05/06/2017"
    />
  <Form>
);

export default MyForm;
```

### Datetime

**Props:**

- [id](#id): string
- [className](#className): string
- [placeholder](#placeholder): string
- [required](#required): string
- [value](#value): string

```js
import { Form, Datetime } from 'redux-valid-form'

const MyForm = () => (
  <Form
    id="my-form-id"
    className="my-form-class"
  >
    <Datetime
      id="my-datetime-input"
      classNmae="my-datetime-class"
      placeholder="my-datetime-placeholder"
      required="true"
      value="05/06/2017"
    />
  <Form>
);

export default MyForm;
```

### Email

**Props:**

- [id](#id): string
- [className](#className): string
- [placeholder](#placeholder): string
- [required](#required): string
- [value](#value): string

```js
import { Form, Email } from 'redux-valid-form'

const MyForm = () => (
  <Form
    id="my-form-id"
    className="my-form-class"
  >
    <Email
      id="my-email-input"
      classNmae="my-email-class"
      placeholder="my-email-placeholder"
      required="true"
      value="john@doe.com"
    />
  <Form>
);

export default MyForm;
```


### Number

**Props:**

- [id](#id): string
- [className](#className): string
- [placeholder](#placeholder): string
- [required](#required): string
- [value](#value): string

```js
import { Form, Number } from 'redux-valid-form'

const MyForm = () => (
  <Form
    id="my-form-id"
    className="my-form-class"
  >
    <Number
      id="my-number-input"
      classNmae="my-number-class"
      placeholder="my-number-placeholder"
      required="true"
      value=""
    />
  <Form>
);

export default MyForm;
```

### Password

**Props:**

- [id](#id): string
- [className](#className): string
- [max](#max): number
- [min](#min): number
- [placeholder](#placeholder): string
- [required](#required): string
- [value](#value): string

```js
import { Form, Password } from 'redux-valid-form'

const MyForm = () => (
  <Form
    id="my-form-id"
    className="my-form-class"
  >
    <Password
      id="my-password-input"
      classNmae="my-password-class"
      max={10}
      min={3}
      placeholder="my-password-placeholder"
      required="true"
      value="secret"
    />
  <Form>
);

export default MyForm;
```

### Text

**Props:**

- [id](#id): string
- [className](#className): string
- [max](#max)
- [min](#min)
- [placeholder](#placeholder): string
- [required](#required): string
- [value](#value): string

```js
import { Form, Text } from 'redux-valid-form'

const MyForm = () => (
  <Form
    id="my-form-id"
    className="my-form-class"
  >
    <Text
      id="my-text-input"
      classNmae="my-text-class"
      max={10}
      min={3}
      placeholder="my-text-placeholder"
      required="true"
      value="lorum ipsum"
    />
  <Form>
);

export default MyForm;
```

### Textarea

**Props:**

- [id](#id): string
- [className](#className): string
- [max](#max)
- [min](#min)
- [placeholder](#placeholder): string
- [required](#required): string
- [value](#value): string

```js
import { Form, Textarea } from 'redux-valid-form'

const MyForm = () => (
  <Form
    id="my-form-id"
    className="my-form-class"
  >
    <Textarea
      id="my-textarea-input"
      classNmae="my-textarea-class"
      max={10}
      min={3}
      placeholder="my-textarea-placeholder"
      required="true"
      value="lorum ipsum..."
    />
  <Form>
);

export default MyForm;
```

### Time

**Props:**

- [id](#id): string
- [className](#className): string
- [placeholder](#placeholder): string
- [required](#required): string
- [value](#value): string

```js
import { Form, Time } from 'redux-valid-form'

const MyForm = () => (
  <Form
    id="my-form-id"
    className="my-form-class"
  >
    <Text
      id="my-time-input"
      classNmae="my-time-class"
      placeholder="my-time-placeholder"
      required="true"
      value="12:12"
    />
  <Form>
);

export default MyForm;
```

### Button

**Props:**

- [id](#id): string
- [className](#className): string
- [value](#value): string
- [onCLick](#onClick): function

```js
import { Form, Button } from 'redux-valid-form'

const MyForm = () => (
  <Form
    id="my-form-id"
    className="my-form-class"
  >
    <Button
      id="my-button-id"
      className="my-button-class"
      value="Click Me!"

      onClick={(validFormValues) => {
        // do some stuff with your form input values
        // e.g. POST form input values to server
        // e.g change your applications state
      }}
    />
  <Form>
);

export default MyForm;
```

## Props

### id

> For all components

**Type:** `string`

**Default:**

- Form: `no default`
- Date: `form-${formId}-child-${indexOfFormChildren}`
- Datetime: `form-${formId}-child-${indexOfFormChildren}`
- Email: `form-${formId}-child-${indexOfFormChildren}`
- Phonenumber: `form-${formId}-child-${indexOfFormChildren}`
- Text: `form-${formId}-child-${indexOfFormChildren}`
- Textarea: `form-${formId}-child-${indexOfFormChildren}`
- Time: `form-${formId}-child-${indexOfFormChildren}`

**Required:** `true`

### className

> For all components

**Type:** `string`

**Default:** `no default`

**Required:** `false`

### max

> Only for `Text`, `Textarea`, and `Password` components

**Type:** `number`

**Default:** `no default`

**Required:** `false`

### min

> Only for `Text`, `Textarea`, and `Password` components

**Type:** `number`

**Default:** `no default`

**Required:** `false`

### placeholder

> Not for `Form`, and `Submit` components

**Type:** `string`

**Default:**

- Date: `MM/DD/YYYY`
- Datetime: `MM/DD/YYYY hh:ss:mm`
- Email: `John@Doe.com`
- Phonenumber: `+123456789`
- Text: `no default`
- Textarea: `no default`
- Time: `hh:mm`

**Required:** `false`

### required

> Not for `Form` components

**Type:** `string`

**Default:** `no default`

**Required:** `false`

### value

> Not for `Form` components

**Type:** `string`

**Default:** `no default`

**Required:** `false`

### onClick

> Only for `Submit` components

**Type:** `function`

**Default:** `no default`

**Required:** `true`

## LICENSE

MIT © Lukas Aichbauer
