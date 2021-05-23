import React from "react";
import {Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {State} from "../store";

export const NavigationEN: React.FC = () => {
  const user = useSelector<State, number>(state => state.userId)
  const name = useSelector<State, string>(state => state.userName)
  return (
    <Navbar className="nav" sticky="top">
      <div className="align-items-start">
        <Nav className="nav-item">
          <Link to="/" className="nav-row-1">Web application for learning a programming language using another
            programming language</Link>
        </Nav>
        <Nav className="nav-item">
          <Link to="/" className="nav-row-2">Home</Link>
          <Link to="/app" className="nav-row-2">App</Link>
          <Link to="/resources" className="nav-row-2">Resources</Link>
          <Link to="/time" className="nav-row-2">Time plan</Link>
          <Link to="/diary" className="nav-row-2">Diary</Link>
        </Nav>
      </div>
      <div className="align-items-end ml-auto mt-auto">
        <Nav className="nav-item">
          {name !== "" && user !== 0 ?
            <Link to="/login" className="nav-row-2">Logged in as {name}</Link>
            :
            <Link to="/login" className="nav-row-2">Login</Link>
          }
        </Nav>
      </div>
    </Navbar>
  );
}