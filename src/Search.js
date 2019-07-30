import React from 'react';
import './App.css';
import Videolist from './Videolist';
import {SearchInput} from "./SearchInput/SearchInput";


class Search extends React.Component {
  constructor(props) {
  super(props);

  this.state = {
    searchValue: ''
  }

  // if (searchValue == '') {
  //
  // } else {
  //   searchValue
  // }

  }

  updateSearchValue = searchValue => {
    this.setState({
      searchValue: searchValue
    })
  };

  render() {

    return <div>
      <SearchInput onSearchChange={this.updateSearchValue}/>

      <Videolist searchValue={this.state.searchValue}/>

    </div>
  }
}

export default Search;
