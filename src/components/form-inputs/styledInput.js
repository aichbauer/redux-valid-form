import styled from 'styled-components';

const StyledInput = styled.input`
  fontFamily: sans-serif;
  fontSize: 15px;
  borderRadius: 3px;
  transition: all 0.3s ease-in-out;
  outline: none;
  padding: ${(props) => {
    if (props.type === 'checkbox' ||
      props.type === 'radio') {
      return '20px 20px 200px 0px';
    } else if (props.type !== 'date' &&
      props.type !== 'time') {
      return '7px 0px 7px 3px';
    }

    return '5px 8px 5px 3px';
  }}
  margin: ${(props) => {
    if (props.type === 'checkbox' ||
      props.type === 'radio') {
      return '15px';
    }

    return '7px 1px 7px 0px;';
  }}
  border: ${(props) => {
    if (props['data-is-valid'] && props['data-is-focused']) {
      return `1px solid ${props['data-valid-color']}`;
    } else if (!props['data-is-valid'] && props['data-is-focused']) {
      return `1px solid ${props['data-warning-color']}`;
    }

    return '1px solid #AAAAAA';
  }};
  boxShadow: ${(props) => {
    if (props['data-is-valid'] && props['data-is-focused']) {
      return `0 0 5px ${props['data-valid-color']}`;
    } else if (!props['data-is-valid'] && props['data-is-focused']) {
      return `0 0 5px ${props['data-warning-color']}`;
    }

    return 'none';
  }};
  width: ${(props) => {
    if (props.type === 'checkbox' ||
      props.type === 'radio') {
      return 'auto';
    }

    return '95%';
  }};
  float: ${(props) => {
    if (props.type === 'checkbox' ||
      props.type === 'radio') {
      return 'left';
    }

    return 'none';
  }};
`;

export default StyledInput;
