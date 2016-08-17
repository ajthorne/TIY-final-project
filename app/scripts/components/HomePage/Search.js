import React from 'react';
import store from '../../store';
import {hashHistory} from 'react-router'
//shown consistently throughout app via Nav component

const Search = React.createClass({
  submitHandler: function (e) {
    e.preventDefault();
    let book = this.refs.book.value;
    console.log('Your search:', this.refs.book.value);
    hashHistory.push(`/books?book=${book}`);
  },
  render: function () {
    return (
      <form className="book-search" onSubmit={this.submitHandler}>
        <input type="text" placeholder="Search for a book" ref="book"/>
        <input type="submit" value="Search"/>
      </form>
    )
  }
});

export default Search;