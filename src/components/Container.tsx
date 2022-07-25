import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 4rem;
  @media (min-width: 767px) {
    padding: 0 4rem;
  }

  @media (min-width: 1024px) {
    padding: 0 2rem;
  }
`;
