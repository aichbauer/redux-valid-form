import styled from 'styled-components';

const StyledError = styled.label`
  display: ${(props) => {
    if (!props['data-is-valid'] && props['data-is-focused']) {
      return 'block';
    }

    return 'none';
  }};
  width: auto;
  float: ${(props) => {
    if (props.htmlFor === 'checkbox') {
      return 'right';
    }

    return 'none';
  }};
  margin: ${(props) => {
    if (props.htmlFor === 'checkbox') {
      return '12px';
    }

    return '0';
  }};
`;

export default StyledError;
