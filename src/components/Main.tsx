import styled from 'styled-components';
import { Container } from './Container';

const Wrapper = styled.main`
  padding: 2rem 0 4rem 0;

  @media (min-width: 767px) {
    padding: 4rem 0;
  }
`;

type MainType = {
  children: JSX.Element
}

export const Main: React.FC<MainType> = ({ children }) => {
  return (
    <Wrapper>
      <Container>{children}</Container>
    </Wrapper>
  );
};
