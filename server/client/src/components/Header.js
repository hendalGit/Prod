import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case '':
        <ul className="right">
          <li>
            <a href="/auth/google">Loggin with Google</a>
          </li>
        </ul>;

      case false:
        <ul className="right">
          <li>
            <a href="/auth/google">Loggin with Google</a>
          </li>
        </ul>;
      default:
        <ul className="right">
          <li>
            <a href="/auth/google">Loggin with Google</a>
          </li>
        </ul>;
    }
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <a href="/" className="left brand-logo">
            Emaily
          </a>
          <ul className="right">{this.renderContent()}</ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
