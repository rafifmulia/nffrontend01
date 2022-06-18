import styled from "styled-components";

const StyledAddMovieForm = styled.div`
/* Small Screen */
margin: 1rem;

section {
  display: flex;
  flex-direction: column;
  text-align: center;
}

img {
  max-width: 100%;
  height: auto;
  border-radius: 25px;
  margin-bottom: 1rem;
}

h4 {
  color: #4361ee;
  margin-bottom: 1.5rem;
  font-size: 2.44rem;
}

/* Medium Screen */
@media (min-width: 768px) {
  section {
    flex-direction: row;
    padding: 5rem;
  }
  .addMovie__left {
    padding: 1rem;
    flex-basis: 75%;
  }
  img {
    height: 90%;
  }
  .addMovie__right {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    flex-basis: 75%;
  }
}

/* Large Screen */
@media (min-width: 992px) {
}
`;

export default StyledAddMovieForm;