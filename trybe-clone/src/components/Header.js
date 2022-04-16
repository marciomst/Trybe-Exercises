import React from 'react';

import TrybeLogo from '../img/logo.svg';
import ToggleButtonImage from '../img/list.svg';

class Header extends React.Component {
  render() {
    const { toogleSideBar } = this.props;
    return (
      <header className="Header">
        <div>
          <button
            className="toggle-button"
            type="button"
            onClick={ toogleSideBar }
          >
            <img src={ ToggleButtonImage } alt="Toggle sidebar button" />
          </button>
          <img src={ TrybeLogo } alt="Trybe Logo" />
          <h4>Curso</h4>
        </div>
      </header>
    );
  }
}

export default Header;
