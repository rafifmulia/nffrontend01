import StyledContainer from './Container.styled';

function Container(props) {
  return (
    <StyledContainer>
      {props.children}
    </StyledContainer>
  )
}

export default Container;