import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Logo from './logo';
import Search from './search';

export default class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header>
        <div className="logo-container">
          <Link to="/">
            <Logo />
          </Link>
        </div>

        <Search />
      </header>
    );
  }
}
