import React, { useState } from 'react';
import SearchList from './SearchList';
import Scrol from './Scrol';

function Search({ details }) {
  const [searchField, setSearchField] = useState("");
  const filteredPersons = details.filter(
    person => {
      return (
        person
        .name
        .toLowerCase()
        .includes(searchField.toLowerCase()) ||
        person
        .email
        .toLowerCase()
        .includes(searchField.toLowerCase())
      );
    }
  );

  const handleChange = e => {
    setSearchField(e.target.value);
  };

  function searchList() {
    return (
      <Scrol>
        <SearchList filteredPersons={filteredPersons} />
      </Scrol>
    );
  }

  return (
    <section className="garamond">
      <div className="navy georgia ma0 grow">
        <h1 className="f2">Search your Mobile Phone</h1>
      </div>
      <div className="pa2">
        <input 
          className="pa3 bb br3 grow b--none bg-lightest-blue ma3"
          type = "search" 
          placeholder = "Search People" 
          onChange = {handleChange}
        />
      </div>
      {searchList}
    </section>
  );
}

export default Search;