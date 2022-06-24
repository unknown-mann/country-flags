import styled from 'styled-components';
import { IoSearch } from 'react-icons/io5';
import { useEffect } from 'react';
import { changeSearch } from '../pages/HomePage/filter/filterSlice';
import { useDebounce } from '../App/utils/useDebounce';
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

export const Search = ({ searchQuery, setSearchQuery, params }) => {

  const dispatch = useAppDispatch()

  const setSearch = useDebounce(() => {
    dispatch(changeSearch(searchQuery))
  }, 500)

  useEffect(() => {
    setSearch()
    if (searchQuery) {
      params.current.search = searchQuery
    } else {
      delete params.current.search
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, searchQuery])

  return (
    <InputContainer>
      <IoSearch />
      <Input onChange={(e) => setSearchQuery(e.target.value)} value={searchQuery} />
    </InputContainer>
  );
};
