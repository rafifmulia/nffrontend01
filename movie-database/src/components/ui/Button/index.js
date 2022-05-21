import styled, { css } from "styled-components";

const colors = {
  primary: '#4361ee',
  secondary: '#b5179e',
};

/**
 * styled['html_tag']
 * menangkap props => ${function (props){ ...code }};
 */
const Button = styled.button`
  padding: 0.8rem;
  border: none;
  border-radius: 10px;
  color: #fff;
  cursor: pointer;
  /* props variant without theme */
  /* background-color: ${({variant}) => colors[variant] || colors['primary'] }; */
  /* props variant with theme */
  background-color: ${({ theme, variant }) => theme.colors[variant] || theme.colors['primary']};
  /* props full */
  ${({ full }) => full && css`
    display: block;
    width: 100%;
  `}
  /* props size */
  ${({ size }) => {
    if (size === 'sm') {
      css`
        font-size: 0.8rem;
        padding: 0.2rem 0.5rem;
      `;
    } else if (size === 'lg') {
      css`
        font-size: 1.3rem;
        padding: 0.5rem 1rem;
      `;
    } else { // md
      css`
        font-size: 1rem;
        padding: 0.5rem 1rem;
      `;
    }
  }}
`;

export default Button;