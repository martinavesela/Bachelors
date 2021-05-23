import React, {useState} from "react";
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {NavigationEN} from "./NavigationEN";
import {useDispatch, useSelector} from "react-redux";
import {setUserId, setUserName, State} from "../store"

export const LoginPage: React.FC = () => {
  const dispatch = useDispatch()
  const name = useSelector<State, string>(state => state.userName)
  const setName = (name: string) => {
    dispatch(setUserName(name))
  }
  const [password, setPassword] = useState("")
  const user = useSelector<State, number>(state => state.userId)
  const setUser = (user: number) => {
    dispatch(setUserId(user))
  }
  const [message, setMessage] = useState("")
  const register = () => {
    if (name == "" || password == "") {
      setMessage("Please fill both username and password.")
    } else {
      window.fetch("/register/" + name + "/" + password, {
        method: "POST",
        headers: {"Content-Type": "text/plain"},
        body: ""
      }).then(a => {
        return a.text()
      }).then(a => {
        setMessage(a)
        if (!isNaN(parseInt(a))) {
          setUser(parseInt(a))
        }
      })
    }
  };
  const login = async () => {
    if (name == "" || password == "") {
      setMessage("Please fill both username and password.")
    } else {
      window.fetch("/login/" + name + "/" + password, {
        method: "POST",
      }).then(a => {
        return a.text()
      }).then(a => {
        setMessage(a)
        if (!isNaN(parseInt(a))) {
          setUser(parseInt(a))
        }
      })
    }
  };
  const logout = () => {
    setName("")
    setPassword("")
    setUser(0)
    setMessage("")
  };
  return (
    <>
      <NavigationEN/>
      <div className="container-parent">
        <Container className="container-fluid main-text pt-5 pb-5 column-thirds" fluid="lg">
          <Row>
            <Col>
              {message !== "" && message != user.toString() &&
              <h2>{message}</h2>
              }
              {user !== 0 ?
                <div>
                  <h2>You are logged in.</h2>
                  <Button className="button-blue center" type="submit" onClick={logout}>
                    Log out
                  </Button>
                </div>
                :
                <Form>
                  <Form.Group controlId="formNickname">
                    <Form.Label>Username</Form.Label>
                    <Form.Control onChange={(event => {
                      setName(event.target.value)
                    })} value={name} type="text" placeholder="Your username"/>
                  </Form.Group>
                  <Form.Group controlId="formPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onChange={(event => {
                      setPassword(event.target.value)
                    })} value={password} type="password" placeholder="Your password"/>
                  </Form.Group>
                  <Button className="button-blue mr-3" onClick={login}>
                    Log in
                  </Button>
                  <Button className="button-blue" onClick={register}>
                    Register
                  </Button>
                </Form>
              }
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}