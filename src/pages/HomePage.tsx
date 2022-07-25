import React from 'react';
import { useEffect } from 'react';
import { List } from '../components/List';
import { Controls } from '../components/Controls';
import { fetchCountries } from '../App/countriesSlice';
import { useAppSelector, useAppDispatch } from '../hooks/hooks';
import { Spinner } from '../components/Spinner';
import { selectFilteredCountries } from '../App/filter/selectors';

export const HomePage: React.FC = () => {

  const { status, error } = useAppSelector(state => state.countries)
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
    content = <h1>Error: {error}</h1>
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
