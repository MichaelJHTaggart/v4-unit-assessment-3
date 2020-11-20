import React, { Component } from 'react';
import Header from './Components/Header';
import BookList from './Components/BookList';
import Shelf from './Components/Shelf';
import books from './data.js';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {}
  }

  render() {
    return (
      <div className="App" >
        <Header />
        <div className="body">
          <BookList books={books} />
          <Shelf />
        </div>
      </div>
    );
  }
}
export default App