import * as React from 'react';
import {
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem
} from 'react-bootstrap';
import { connect } from 'react-redux';
import {
  logout
} from '../actions/user';
import '../assets/styles/navbar.scss';

interface MyProps {
  user: {
    name: string
  };
  logout: any;
}
interface MyState {}


class MainNavbar extends React.Component<MyProps, MyState> {
  render() {
    const { user, logout } = this.props;

    return (
      <Navbar inverse className='main-navbar'>
        <Navbar.Header>
          <Navbar.Brand>
            NodeCI
          </Navbar.Brand>

          <Navbar.Toggle/>
        </Navbar.Header>

        <Navbar.Collapse>
          <Nav pullRight>
            {user && <p>{user.name}</p>}
            <NavItem onClick={logout}>Logout</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}


export default connect(
  ({
    user: { meta }
  }) => ({
    user: meta
  }),
  dispatch => ({
    logout: () => dispatch(logout())
  })
)(MainNavbar);
