import React from 'react';
import { ChangeEvent, useEffect } from 'react';
import styled from 'styled-components';
import { IoSearch } from 'react-icons/io5';
import { changeSearch } from '../App/filter/filterSlice';
import { useDebounce } from '../utils/useDebounce';
import { useAppDispatch } from '../hooks/hooks';

const InputContainer = styled.label`
  background-color: var(--colors-ui-base);
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  border-radius: var(--radii);
  box-shadow: var(--shadow);
  width: 100%;
  margin-bottom: 1rem;

  @media (min-width: 767px) {
    margin-bottom: 0;
    width: 280px;
  }
`;

const Input = styled.input.attrs({
  type: 'search',
  placeholder: 'Search for a country...',
})`
  margin-left: 2rem;
  border: none;
  outline: none;
  color: var(--color-text);
  background-color: var(--colors-ui-base);
`;

type PropsType = {
  searchQuery: string,
  setSearchQuery: (arg: string) => void,
  params: any
}

export const Search: React.FC<PropsType> = React.memo(({ searchQuery, setSearchQuery, params }) => {

  const dispatch = useAppDispatch()

  const handleSearchQuery = (evt: ChangeEvent<HTMLInputElement>) => setSearchQuery(evt.target.value)

  const setSearch = useDebounce(() => {
    dispatch(changeSearch(searchQuery))
  }, 500)

  useEffect(() => {
    setSearch()
    if (searchQuery) {
      params.current.search = searchQuery
    } else {
      // @ts-ignore
      delete params.current.search
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, searchQuery])

  return (
    <InputContainer>
      <IoSearch />
      <Input onChange={handleSearchQuery} value={searchQuery} />
    </InputContainer>
  );
});
