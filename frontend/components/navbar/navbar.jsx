import React from 'react';

import UserNavbar from './user_navbar';
import MainNavbar from './main_navbar';

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.wrapperRef = React.createRef();
    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
  }

  setWrapperRef(node) {
    this.wrapperRef = node;
  }
  
  // Hide open dropdowns when clicked elsewhere on the page
  handleOutsideClick(e) {
    console.log('firing beeotch');
    if (this.props.isOpen &&
        this.wrapperRef && !this.wrapperRef.current.contains(e.target)) {
      // Tell the parent navbar that none of the items are open
      this.props.navbarDropdownClose();
    }
  };

  componentDidMount() {
    this.props.navbarCloseAll();
    // Start listener for clicks outside of any open dropdowns
    document.addEventListener('mousedown', this.handleOutsideClick);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleOutsideClick);
  }

  render() {
    const { loggedIn } = this.props;
    const navClass = loggedIn ? 'navbar-user' : 'navbar-main';
    return (
      <div ref={this.wrapperRef}>
        <div className="navbar-container">
          <nav role='navigation' className={navClass}>
            {loggedIn
             ? <UserNavbar {...this.props} />
             : <MainNavbar {...this.props} />}
          </nav>
        </div>
      </div>
    );
  }
};
