import styled, { css } from "styled-components";

const Input = styled.input`
  /* Small Screen */
  display: block;
  width: 100%;
  padding: 0.2rem;
  border-radius: 10px;
  border: ${({ theme }) => `1px solid ${theme.colors['primary']}`};

  input:focus {
    outline: 1px solid #4361EE;
  }

  ${(props) => {
    if (props.as === 'select') {
      css`
        background-color: #fff;
        select:focus {
          outline: 1px solid #4361EE;
        }
      `;
    }
  }}

  /* Medium Screen */
  @media (min-width: 768px) {
    width: 30vw;
  }
`;

export default Input;