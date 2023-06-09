import styled from 'styled-components';

const Wrapper = styled.section`
  .form-container {
    /* margin: 1rem auto 2rem; */
  }

  border-radius: var(--borderRadius);
  width: 100%;
  background: var(--white);
  padding: 1rem 2rem;
  box-shadow: var(--shadow-2);

  h3 {
    margin-top: 0;
  }

  .form {
    border-radius: 0;
    box-shadow: none;
    padding: 0;
    max-width: 100%;
    width: 100%;
  }

  .form h3 {
    margin: 0 auto;
    display: grid;
    place-items: center;
  }

  .form-row {
    margin-bottom: 0;
  }

  .form-center {
    grid-template-columns: 1fr;
    display: grid;
    row-gap: 0.5rem;
  }

  .form-center button {
    align-self: end;
    height: 35px;
    margin-top: 1rem;
  }

  .submit {
    margin-top: 1rem;
  }

  .btn-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 1rem;
    align-self: flex-end;
    margin-top: 0.5rem;
    button {
      height: 35px;
    }
  }

  .clear-btn {
    background: var(--grey-500);
  }

  .clear-btn:hover {
    background: var(--black);
  }

  @media (min-width: 992px) {
    .form-center {
      align-items: center;
      column-gap: 1rem;
    }
    .btn-container {
      margin-top: 1rem;
    }
  }

  @media (min-width: 1120px) {
    .form-center button {
      margin-top: 0;
    }
  }
`;

export default Wrapper;
