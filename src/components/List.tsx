import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Card } from './Card';
import { CountriesType } from '../types/Types';

const Wrapper = styled.section`
  width: 100%;
  padding: 2rem 0;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 3rem;

  @media (min-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 2.5rem 0;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const List: React.FC<CountriesType> = ({ countries }) => {

  const navigate = useNavigate()

  if (!countries.length) {
    return (
      <h1>Country not found</h1>
    )
  }

  return (
    <Wrapper>
      {countries.map((c) => {
        const countryInfo = {
          img: c.flag,
          name: c.name,
          info: [
            {
              title: 'Population',
              description: c.population.toLocaleString(),
            },
            {
              title: 'Region',
              description: c.region,
            },
            {
              title: 'Capital',
              description: c.capital,
            },
          ],
        };

        return (
          <Card
            key={c.name}
            onClick={() => { navigate(`/country/${c.alpha3Code}`) }}
            {...countryInfo}
          />
        );
      })}
    </Wrapper>
  )
};
