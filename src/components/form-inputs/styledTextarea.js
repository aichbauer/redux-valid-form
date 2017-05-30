import styled from 'styled-components';

const StyledTextarea = styled.textarea`
  fontFamily: sans-serif;
  fontSize: 15px;
  borderRadius: 3px;
  transition: all 0.3s ease-in-out;
  outline: none;
  padding: 7px 0px 7px 3px;
  margin: 7px 1px 7px 0px;
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

    return '';
  }};
  width: 95%;
`;

export default StyledTextarea;
