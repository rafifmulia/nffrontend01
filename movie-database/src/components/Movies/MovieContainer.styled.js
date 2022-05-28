import styled from "styled-components";

const StyledMovieContainer = styled.div`
/* Small Screen */
display: flex;
flex-direction: column;

/* Medium Screen */
@media (min-width: 768px) {
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

/* Large Screen */
@media (min-width: 992px) {
}
`;

export default StyledMovieContainer;