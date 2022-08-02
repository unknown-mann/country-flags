import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { IoMoon, IoMoonOutline } from 'react-icons/io5';
import { Container } from './Container';

const HeaderEl = styled.header`
  box-shadow: var(--shadow);
  background-color: var(--colors-ui-base);
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
`;

const Title = styled(Link).attrs({
  to: '/',
})`
  color: var(--colors-text);
  font-size: var(--fs-md);
  text-decoration: none;
  font-weight: var(--fw-bold);
  @media (min-width: 1024px) {
    font-size: var(--fs-lr);
  }
`;

const ModeSwitcher = styled.div`
  color: var(--colors-text);
  font-size: var(--fs-sm);
  cursor: pointer;
  font-weight: var(--fw-normal);
  text-transform: capitalize;
`;

export const Header: React.FC = React.memo(() => {
  const [mode, setMode] = useState('light');

  const toggleMode = () => setMode(mode === 'light' ? 'dark' : 'light');

  useEffect(() => {
    document.body.setAttribute('data-theme', mode);
  }, [mode]);

  return (
    <HeaderEl>
      <Container>
        <Wrapper>
          <Title>Where is the world?</Title>
          <ModeSwitcher onClick={toggleMode}>
            <div style={{ display: 'inline-block', position: 'relative', top: '5px' }}>
              {mode === 'light' ? (
                <IoMoonOutline size="20px" />
              ) : (
                <IoMoon size="20px" />
              )}
            </div>
            <span style={{ marginLeft: '0.75rem' }}>{mode} Mode</span>
          </ModeSwitcher>
        </Wrapper>
      </Container>
    </HeaderEl>
  );
});
