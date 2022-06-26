import { useParams, useNavigate } from 'react-router-dom';
import { useAppSelector } from '../hooks/hooks';
import { IoArrowBack } from 'react-icons/io5';
import { Button } from '../components/Button';
import { Info } from '../components/Info';

export const Details = () => {

  const { name } = useParams();

  const navigate = useNavigate()
  const goBack = () => navigate(-1)

  const country = useAppSelector(state => state.countries.countries.find(country => country.alpha3Code === name))

  return (
    <div>
      <Button onClick={goBack}>
        <IoArrowBack /> Back
      </Button>
      <Info {...country} />
    </div>
  );
};
