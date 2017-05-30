import styled from 'styled-components';

const StyledButton = styled.button`
  fontFamily: sans-serif;
  fontSize: 15px;
  color: ${(props) => {
    if (props.disabled) {
      return 'rgba(34, 68, 51, 0.3)';
    }

    return 'rgba(34, 68, 51)';
  }};
  borderRadius: 3px;
  transition: all 0.3s ease-in-out;
  outline: none;
  padding: 7px 20px 7px 20px;
  margin: 7px 1px 7px 0px;
  border: 1px solid #DDDDDD;
  background: ${(props) => {
    if (props.disabled) {
      return 'rgba(221, 221, 221, 0.3)';
    }

    return 'rgba(221, 221, 221)';
  }};
  cursor: ${(props) => {
    if (props.disabled) {
      return 'not-allowed';
    }

    return 'pointer';
  }};
`;

export default StyledButton;
