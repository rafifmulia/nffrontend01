import StyledAlert from "./Alert.styled";

function Alert(props) {
  const { children } = props;
  return (
    <>
      <StyledAlert>{children}</StyledAlert>
    </>
  )
}

export default Alert;