import { useEffect } from 'react';
import { List } from '../../components/List';
import { Controls } from '../../components/Controls';
import { fetchCountries } from './countriesSlice';
import { useAppSelector, useAppDispatch } from '../../hooks/hooks';
import { Spinner } from '../../components/Spinner';
import { selectFilteredCountries } from '../../App/selectors';

export const HomePage: React.FC = () => {

  const status = useAppSelector(state => state.countries.status)
  const error = useAppSelector(state => state.countries.error)
  const countries = useAppSelector(selectFilteredCountries)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchCountries())
    }
  }, [status, dispatch])

  let content

  if (status === 'loading') {
    content = <Spinner text="Loading..." />
  } else if (status === 'rejected') {
    content = <h1>{error}</h1>
  } else if (status === 'succeeded') {
    content =
      <List countries={countries} />
  }

  return (
    <>
      <Controls />
      {content}
    </>
  );
};
