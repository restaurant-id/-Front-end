import React,{useState} from 'react';
import { NavLink } from "react-router-dom";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    // NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isLogged, setIsLogged] = useState(true);

    const handleLogOut = () => {
      localStorage.removeItem("token");
      setIsLogged(false);
    }

    const toggle = () => setIsOpen(!isOpen);
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="https://hardcore-babbage-d18e7b.netlify.com">
            Restaurant Passport
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Map
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <NavLink to="/RestaurantList">Restaurants Near Me</NavLink>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Reset</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              {isLogged ? (
                <NavItem>
                  <NavLink exact to="/" onClick={handleLogOut}>
                    Log Out
                  </NavLink>
                </NavItem>
              ) : (
                <>
                  <NavItem>
                    <NavLink to="/Login">Log In</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink to="/Signup">
                      <button> Sign Up</button>
                    </NavLink>
                  </NavItem>
                </>
              )}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
}