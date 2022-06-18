import styled from "styled-components";

const StyledNavbar = styled.div`
  /* Small Screen */
  background-color: #4361ee;
  padding: 1rem;
  color: #fff;

  nav {
    display: flex;
    flex-direction: column;
  }

  nav > div > div {
    font-size: 24px;
    position: absolute;
    margin-top: 0.5rem;
    margin-left: 0.25rem;
  }

  h1 {
    font-size: 2.4rem;
    text-align: center;
  }

  ul {
    display: none;
    flex-direction: column;
    list-style: none;
  }

  li {
    margin-bottom: 1rem;
  }

  /* Medium Screen */
  @media (min-width: 768px) {
    nav {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }

    nav > div > div {
      display: none;
    }

    h1 {
      margin-bottom: 0;
    }

    ul {
      display: flex;
      flex-direction: row;
    }

    li {
      margin: 0 1rem;
    }
  }

  /* Large Screen */
  @media (min-width: 992px) {
    /* 
    * Nothing TODO HERE.
    * We haven't styling Navbar.
    */

    ul {
      display: flex;
    }
  }
`;

export default StyledNavbar;