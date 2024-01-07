import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import Icon from '../atoms/icon';
import Link from 'next/link';

const SearchContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: space-between;
  max-width: 230px;

  @media screen and (min-width: 1120px) {
    max-width: auto;
    gap: 1rem;
  }
`;

const IconButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  height: 53px;
  width: 53px;
  padding-bottom: 1rem;

  @media screen and (min-width: 1120px) {
    width: 2.5rem;
    height: 2.5rem;
  }
`;

const SearchInput = styled.input`
  &[type='search'] {
    color: var(--secondary-color);
    font-weight: var(--font-medium);
    font-family: var(--font-default);
    line-height: normal;
    font-size: var(--font-default-size);
    text-align: center;
    transition: all 300ms ease-in-out;
    border: none;
    cursor: pointer;
    background-color: transparent;
    padding-bottom: 1rem;
    text-align: left;
    width: 100%;
    max-width: 100%;
    box-sizing: border-box;
  }

  &[type='search']:hover {
    text-decoration: none;
    transition: all 300ms ease-in-out;
  }

  &[type='search']:focus,
  &[type='search']:active {
    outline-offset: 0;
    border-radius: 0;
    border-bottom: 1px solid #fff;
    text-decoration: none;
    outline: none;
  }

  @media (min-width: 1120px) {
    &[type='search'] {
      font-size: 1.25rem;
      text-align: left;
    }
  }
`;

const StyledIcon = styled(Icon)`
  @media screen and (min-width: 1120px) {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

const SearchBar = ({ setSearchResults }) => {
  const [doctorsData, setDoctorsData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data/doctors.json');
        const data = await response.json();
        setDoctorsData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    const results = doctorsData.doctors.filter(
      (doctor) =>
        doctor.doctor.toLowerCase().includes(searchTerm.toLowerCase()) ||
        doctor.actor.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setSearchResults(results);
  };

  return (
    <SearchContainer>
      <Link href="/searchResults">
        <IconButton type="button" onClick={handleSearch}>
          <StyledIcon name="search" width={53} height={53} />
        </IconButton>
      </Link>
      <SearchInput
        type="search"
        placeholder="Buscar"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </SearchContainer>
  );
};

export default SearchBar;
