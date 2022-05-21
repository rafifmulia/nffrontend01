import styled from "styled-components";

const Input = styled.input`
  display: block;
  width: 100%;
  padding: 0.2rem;
  border-radius: 10px;
  border: ${({ theme }) => `1px solid ${theme.colors['primary']}`};
`;

export default Input;