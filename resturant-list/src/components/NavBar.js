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
    const toggle = () => setIsOpen(!isOpen);
    return(
        <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">Restaurant Passport</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
            <NavItem>
            <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Map
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Restaurants Near Me 
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </NavItem>
            <NavItem>
                <NavLink to='/Login'>Log In</NavLink>
            </NavItem>
            <NavItem>
                <NavLink to='/Signup'>
                  <button> Sign Up</button>
                </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
        </div>
    )
}