import { useParams, useNavigate } from 'react-router-dom';
import { useAppSelector } from '../hooks/hooks';
import { IoArrowBack } from 'react-icons/io5';
import { Button } from '../components/Button';
import styled from 'styled-components';

const Wrapper = styled.section`
  margin-top: 3rem;
  width: 100%;
  display: grid;
  grid-template-columns: 100%;
  gap: 2rem;
  
  @media (min-width: 1024px) {
    grid-template-columns: minmax(400px, 600px) 1fr;
  }
`;

const InfoImage = styled.img`
  display: block;
  width: 100%;
  max-height: 500px;
  height: 100%;
  object-fit: contain;
`;

const InfoTitle = styled.h1`
  margin: 0;
  margin-bottom: 15px;
  font-weight: var(--fw-normal);
`;

const ListGroup = styled.div`
  display: flex;
  flex-direction: column;

  gap: 2rem;

  @media (min-width: 767px) {
    flex-direction: row;
    gap: 4rem;
  }
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const ListItem = styled.li`
  line-height: 1.8;

  & > b {
    font-weight: var(--fw-bold);
  }
`;

const Meta = styled.div`
  margin-top: 3rem;
  display: flex;
  gap: 1.5rem;
  flex-direction: column;
  align-items: flex-start;

  & > b {
    font-weight: var(--fw-bold);
  }

  @media (min-width: 767px) {
    flex-direction: row;
    align-items: center;
  }
`;

const TagGroup = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

const Tag = styled.span`
  padding: 0 1rem;
  background-color: var(--colors-ui-base);
  box-shadow: var(--shadow);
  line-height: 1.5;
  cursor: pointer;
  border-radius: var(--radii)
`;

export const Details: React.FC = () => {

  const { name } = useParams();

  const navigate = useNavigate()
  const goBack = () => navigate(-1)

  const country = useAppSelector(state => state.countries.countries.find(country => country.alpha3Code === name))

  const borders = country?.borders

  return (
    <div>
      <Button onClick={goBack}>
        <IoArrowBack /> Back
      </Button>
      <Wrapper>
        <InfoImage src={country?.flag} alt={country?.name} />
        <div>
          <InfoTitle>{country?.name}</InfoTitle>
          <ListGroup>
            <List>
              <ListItem>
                <b>Native Name:</b> {country?.nativeName}
              </ListItem>
              <ListItem>
                <b>Population:</b> {country?.population.toLocaleString()}
              </ListItem>
              <ListItem>
                <b>Area:</b> {country?.area.toLocaleString()} km<sup>2</sup>
              </ListItem>
              <ListItem>
                <b>Region:</b> {country?.region}
              </ListItem>
              <ListItem>
                <b>Sub Region:</b> {country?.subregion}
              </ListItem>
              <ListItem>
                <b>Capital:</b> {country?.capital}
              </ListItem>
            </List>
            <List>
              <ListItem>
                <b>Top Level Domain: </b>
                {country?.topLevelDomain.map((d) => (
                  <span key={d}>{d} </span>
                ))}
              </ListItem>
              <ListItem>
                <b>Currency: </b>
                {country?.currencies.map((c) => (
                  <span key={c.code}>{c.name} {c.code} {c.symbol}</span>
                ))}
              </ListItem>
              <ListItem>
                <b>Languages: </b>
                {country?.languages.map((l) => (
                  <span key={l.name}>{l.name} </span>
                ))}
              </ListItem>
              <ListItem>
                <b>Independent: </b> {country?.independent ? 'Yes' : 'No'}
              </ListItem>
            </List>
          </ListGroup>
          <Meta>
            <b>Border Countries:</b>
            {!borders?.length ? (
              <span>Country has no land borders</span>
            ) : (
              <TagGroup>
                {borders.map((b) => (
                  <Tag key={b} onClick={() => navigate(`/country/${b}`)}>
                    {b}
                  </Tag>
                ))}
              </TagGroup>
            )}
          </Meta>
        </div>
      </Wrapper>
    </div>
  )
}
