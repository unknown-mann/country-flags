import { useParams, useNavigate } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';
import { Button } from '../components/Button';
import { Info } from '../components/Info';
import { useAppSelector } from '../hooks/hooks';

export const Details = () => {

  const { name } = useParams();

  const navigate = useNavigate()

  const country = useAppSelector(state => state.countries.countries.find(country => country.alpha3Code === name))

  return (
    <div>
      <Button onClick={() => navigate(-1)}>
        <IoArrowBack /> Back
      </Button>
      <Info {...country} />
    </div>
  );
};
