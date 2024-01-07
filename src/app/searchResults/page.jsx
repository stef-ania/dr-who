'use client';

import React, { useState } from 'react';
import styled from 'styled-components';
import SearchBar from '../components/molecules/searchBar.jsx';
import Card from '../components/molecules/card.jsx';

const Main = styled.main`
  position: relative;
  width: 100vw;
  min-height: 100vh;
`;

const GroupCardsWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

const SearchResults = () => {
  const [searchResults, setSearchResults] = useState([]);

  return (
    <Main>
      <GroupCardsWrap>
        <SearchBar setSearchResults={setSearchResults} />
        <ul>
          {searchResults.map((result) => (
            <li key={result.id}>
              <Card
                imageSrc={result.image}
                doctor={result.doctor}
                actor={result.actor}
                screen_time={result.screen_time}
              />
            </li>
          ))}
        </ul>
      </GroupCardsWrap>
    </Main>
  );
};

export default SearchResults;
