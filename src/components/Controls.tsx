import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import { Search } from './Search';
import { CustomSelect } from './CustomSelect';
import { changeSort } from '../App/filter/filterSlice';
import { useAppDispatch } from '../hooks/hooks';


const options = [
  { value: 'Africa', label: 'Africa' },
  { value: 'Americas', label: 'America' },
  { value: 'Asia', label: 'Asia' },
  { value: 'Europe', label: 'Europe' },
  { value: 'Oceania', label: 'Oceania' },
];

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (min-width: 767px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Controls = React.memo(() => {

  const dispatch = useAppDispatch()

  const [searchParams, setSearchParams] = useSearchParams()
  const search = searchParams.get('search') || ''
  const region = searchParams.get('region') || ''

  const params = useRef({})

  const [regionQuery, setRegionQuery] = useState(region);
  const [searchQuery, setSearchQuery] = useState(search);

  useEffect(() => {
    // @ts-ignore
    const regionValue = regionQuery?.value || regionQuery;
    dispatch(changeSort(regionValue))
    if (regionValue) {
      // @ts-ignore
      params.current.region = regionValue
    } else {
      // @ts-ignore
      delete params.current.region
    }
  }, [dispatch, regionQuery])

  useEffect(() => {
    setSearchParams(params.current)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [regionQuery, searchQuery])

  return (
    <Wrapper>
      <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} params={params} />
      <CustomSelect
        options={options}
        placeholder={region || "Filter by Region"}
        isClearable
        isSearchable={false}
        value={regionQuery}
        // @ts-ignore
        onChange={setRegionQuery}
      />
    </Wrapper>
  );
});
