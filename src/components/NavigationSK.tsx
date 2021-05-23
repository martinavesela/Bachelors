import React from "react";
import {Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";

export const NavigationSK: React.FC = () => {
  return (
    <Navbar className="nav" sticky="top">
      <div className="align-items-start">
        <Nav className="nav-item">
          <Link to="/" className="nav-row-1">Webová aplikácia pre výučbu programovacieho jazyka pomocou iného
            jazyka</Link>
        </Nav>
        <Nav className="nav-item">
          <Link to="/" className="nav-row-2">Úvod</Link>
          <Link to="/app" className="nav-row-2">Aplikácia</Link>
          <Link to="/resources" className="nav-row-2">Zdroje</Link>
          <Link to="/time" className="nav-row-2">Časový plán</Link>
          <Link to="/diary" className="nav-row-2">Denník</Link>
        </Nav>
      </div>
    </Navbar>
  )
}