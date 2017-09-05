import React from 'react';
import styled from 'styled-components';

import {
  Form,
  Button,
  Checkbox,
  Date,
  Datetime,
  Email,
  Number,
  Password,
  Phonenumber,
  Radio,
  Text,
  Textarea,
  Time,
} from '../../../../lib/index';

const Wrapper = styled.section`
  position: relative;
  width: 50%;
  left: 25%;
  font-family: sans-serif;
  text-align: center;
  border-radius: 1.5em;
  background: #FFF;
  border: 1px solid #AAA;
  margin: 2em;
`;

const Title = styled.h1`
  position: relative;
  color: #AAA;
`;

class Index extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      results: [],
    };
  }

  handleOnClick(results) {
    this.setState({
      results,
    });
  }

  render() {
    return (
      <div >
        <Wrapper>
          <Title>
            Redux Valid Form
          </Title>
          <Form id="1">
            <Checkbox id="checkbox" value="Vehicle" name="Vehicle" required="true" />
            <Radio id="radio-1" value="Car" name="vehicle" checked />
            <Radio id="radio-2" value="Bicycle" name="vehicle" />
            {/* <Date id="date" required="true" />
            <Datetime id="datetime" required="true" />
            <Email id="email" required="true" />
            <Number id="number" required="true" min={2} max={4} />
            <Password id="password" required="true" min={8} max={12} />
            <Phonenumber id="phonenumber" required="true" />
            <Text id="text" required="true" min={5} max={20} />
            <Textarea id="textarea" required="true" />
            <Time id="time" required="true" />*/}
            <Button value="Click me!" onClick={(results) => this.handleOnClick(results)} />
          </Form>
        </Wrapper>
        <Wrapper>
          {'results: {'}
          {Object.keys(this.state.results).map((keyName) => (
            <div key={`item-${keyName}`}>
              {`${keyName}: ${this.state.results[keyName]},`}
            </div>
          ))}
          {'}'}
        </Wrapper>
      </div>
    );
  }
}

export default Index;
