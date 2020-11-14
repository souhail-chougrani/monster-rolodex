import React from 'react'

function SearchInput({placeholder,onSearch,searchedValue}) {
    return (
        <div>
        <input
          type="search"
          placeholder={placeholder}
          onChange={onSearch}
          value={searchedValue}
        />
        </div>
    )
}

export default SearchInput
