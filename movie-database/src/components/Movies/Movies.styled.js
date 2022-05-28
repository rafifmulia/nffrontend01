import styled from "styled-components";

const StyledMovie = styled.div`
/* Small Screen */
margin: 1rem;

section {
  margin: 5rem 0;
  text-align: center;
}

h2 {
  margin-bottom: 1rem;
  font-size: 2.44rem;
  color: #4361ee;
}

/* Medium Screen */
@media (min-width: 768px) {
}

/* Large Screen */
@media (min-width: 992px) {
  max-width: 1200px;
  margin: 3rem auto;
}
`;

export default StyledMovie;