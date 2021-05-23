import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import {NavigationSK} from "./NavigationSK";

export const TimePlanPage: React.FC = () => {
  return (
    <>
      <NavigationSK/>
      <div className="container-parent">
        <Container className="container-fluid main-text pt-5 pb-5" fluid="lg">
          <h2 className="text-center text-white">Harmonogram práce</h2> <br/>
          <Row>
            <Col className="column-left">
              September 2020
            </Col>
            <Col className="column-right">
              Výber témy
            </Col>
          </Row>
          <Row>
            <Col className="column-left">
              Október 2020
            </Col>
            <Col className="column-right">
              Vytvorenie webovej stránky
            </Col>
          </Row>
          <Row>
            <Col className="column-left">
              November 2020
            </Col>
            <Col className="column-right">
              Zbieranie zdrojov
            </Col>
          </Row>
          <Row>
            <Col className="column-left">
              December 2020
            </Col>
            <Col className="column-right">
              Spojazdnenie všetkých potrebných technológií a vytvorenie jednoduchého prototypu
            </Col>
          </Row>
          <Row>
            <Col className="column-left">
              Január 2021
            </Col>
            <Col className="column-right">
              Napísanie východiskovej kapitoly práce a dokončenie prototypu
            </Col>
          </Row>
          <Row>
            <Col className="column-left">
              Marec 2021
            </Col>
            <Col className="column-right">
              Spojazdnenie serveru na testovanie
            </Col>
          </Row>
          <Row>
            <Col className="column-left">
              Máj 2021
            </Col>
            <Col className="column-right">
              Odovzdanie bakalárskej práce
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
};