import React from "react";
import { Nav, NavItem, NavLink } from 'reactstrap';

function Header() {
  return (
    <div>
      <Nav>
        <NavItem>
          <NavLink href="/about"
                className={
                  window.location.pathname === "/about"
                    ? "nav-link active"
                    : "nav-link"
                }
              >About</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/portfolio"
                className={
                  window.location.pathname === "/portfolio"
                    ? "nav-link active"
                    : "nav-link"
                }
              >Portfolio</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/contact"
                className={
                  window.location.pathname === "/contact"
                    ? "nav-link active"
                    : "nav-link"
                }
                >Contact</NavLink>
        </NavItem>
      </Nav>
      
    </div>
  );
};

export default Header;