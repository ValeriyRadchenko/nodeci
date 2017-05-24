import * as React from 'react';
import {
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem
} from 'react-bootstrap';
import { connect } from 'react-redux';

interface MyProps {
  user: {
    name: string
  }
}
interface MyState {}


class MainNavbar extends React.Component<MyProps, MyState> {
  render() {
    const { user } = this.props;

    return (
      <Navbar inverse className="main-navbar">
        <Navbar.Header>
          <Navbar.Brand>
            NodeCI
          </Navbar.Brand>

          <Navbar.Toggle/>
        </Navbar.Header>

        <Navbar.Collapse>
          <Nav pullRight>
            {user && <p>{user.name}</p>}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}


export default connect(
  ({
    user: { meta }
  }) => ({
    user: meta
  })
)(MainNavbar);
