import React from 'react';

export function SearchInput(props) {
  function onInputHandler(event) {
    console.log(props)
    props.onSearchChange(event.target.value)
  }
  return (
    <div className="searchInput">

      <input className="searchInput_input" placeholder="Search video" onInput={onInputHandler}/>
    </div>
  )
}
