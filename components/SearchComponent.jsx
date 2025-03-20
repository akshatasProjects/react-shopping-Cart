import React from "react";

function SearchComponent({ search, SearchUserFunction }) {
  return (
    <header className='App-header'>
      <h1>Shopping Cart</h1>
      <div className='search-bar'>
        <input
          type='text'
          placeholder='Search for Products...'
          value={search}
          onChange={SearchUserFunction}
        />
      </div>
    </header>
  );
}

export default SearchComponent;
