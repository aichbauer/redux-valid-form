import Form from './containers/form';
import Input from './containers/input';
import Submit from './containers/submit';

import Button from './components/buttons/button';

import Date from './components/form-inputs/date';
import Datetime from './components/form-inputs/datetime';
import Email from './components/form-inputs/email';
import Number from './components/form-inputs/number';
import Password from './components/form-inputs/password';
import Phonenumber from './components/form-inputs/phonenumber';
import Text from './components/form-inputs/text';
import Textarea from './components/form-inputs/textarea';
import Time from './components/form-inputs/time';

import reduxValidButton from './reducers/buttonReducer';
import reduxValidForm from './reducers/formReducer';
import reduxValidInput from './reducers/inputReducer';

export {
  Form,
  Input,
  Submit,

  Button,

  Date,
  Datetime,
  Email,
  Number,
  Password,
  Phonenumber,
  Text,
  Textarea,
  Time,

  reduxValidButton,
  reduxValidForm,
  reduxValidInput,
};
