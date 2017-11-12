import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <nav>
        <div class="nav-wrapper">
          <a href="/" class="left brand-logo">
            Emaily
          </a>
          <ul class="right hide-on-med-and-down">
            <li>
              <a href="/auth/google">Loggin with Google</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
