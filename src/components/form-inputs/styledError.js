import styled from 'styled-components';

const StyledError = styled.label`
  display: ${(props) => {
    if (!props['data-is-valid'] && props['data-is-focused']) {
      return 'block';
    }

    return 'none';
  }};
  width: auto;
`;

export default StyledError;
