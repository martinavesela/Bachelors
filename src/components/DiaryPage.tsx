import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import {NavigationSK} from "./NavigationSK";

export const DiaryPage: React.FC = () => {
  return (
    <>
      <NavigationSK/>
      <div className="container-parent">
        <Container className="container-fluid main-text pt-5 pb-5" fluid="lg">
          <h2 className="text-center text-white">Denník</h2> <br/>
          <Row>
            <Col className="column-left">
              Týždeň 16.2. - 22.2.
            </Col>
            <Col className="column-right">
              • pridanie denníka na stránku <br/>
              • zmena poradia linkov v navigácii <br/>
              • písanie východiskovej kapitoly, hlavne existujúcich riešení
            </Col>
          </Row>
          <Row>
            <Col className="column-left">
              Týždeň 23.2. - 1.3.
            </Col>
            <Col className="column-right">
              • písanie východiskovej kapitoly, konkrétne potrebnej teórie a použitých technológií
            </Col>
          </Row>
          <Row>
            <Col className="column-left">
              Týždeň 2.3. - 8.3.
            </Col>
            <Col className="column-right">
              • písanie východiskovej kapitoly, hlavne použitých technológií <br/>
              • odovzdanie východiskovej kapitoly a zdrojového kódu <br/>
              • pridanie tlačítok na sťahovanie na hlavnú stránku <br/>
              • zisťovanie ako implementovať time-out a vypnutie testovania v aplikácii
            </Col>
          </Row>
          <Row>
            <Col className="column-left">
              Týždeň 9.3. - 15.3.
            </Col>
            <Col className="column-right">
              • prijatie hodnotenia za prvý semester <br/>
              • návrh databázy
            </Col>
          </Row>
          <Row>
            <Col className="column-left">
              Týždeň 16.3. - 22.3.
            </Col>
            <Col className="column-right">
              • naprogramovanie databázy <br/>
              • implementácia prepínania medzi úlohami
            </Col>
          </Row>
          <Row>
            <Col className="column-left">
              Týždeň 23.3. - 29.3.
            </Col>
            <Col className="column-right">
              • oprava názvu z "výuka" na "výučba" na stránke a aj v práci <br/>
              • začiatok imlementácie prihlasovania sa <br/>
              • navrhnutie prvej reálnej úlohy
            </Col>
          </Row>
          <Row>
            <Col className="column-left">
              Týždeň 30.3. - 5.4.
            </Col>
            <Col className="column-right">
              • vylepšenie prepínania medzi úlohami <br/>
              • oprava bugu v CodeMirror
            </Col>
          </Row>
          <Row>
            <Col className="column-left">
              Týždeň 6.4. - 12.4.
            </Col>
            <Col className="column-right">
              • navrhnutie druhej úlohy <br/>
              • pridanie riešení pre úlohy
            </Col>
          </Row>
          <Row>
            <Col className="column-left">
              Týždeň 13.4. - 19.4.
            </Col>
            <Col className="column-right">
              • písanie práce, konkrétne pridávanie do existujúcich kapitol a návrhu
            </Col>
          </Row>
          <Row>
            <Col className="column-left">
              Týždeň 20.4. - 26.4.
            </Col>
            <Col className="column-right">
              • návrh a zrealizovanie prvej veľkej úlohy - Tower of Hanoi validátor
            </Col>
          </Row>
          <Row>
            <Col className="column-left">
              Týždeň 27.4. - 3.5.
            </Col>
            <Col className="column-right">
              • zlepšovanie načítania uloženia rozpracovaných úloh
            </Col>
          </Row>
          <Row>
            <Col className="column-left">
              Týždeň 4.5. - 10.5.
            </Col>
            <Col className="column-right">
              • používateľské testovanie <br/>
              • pridanie používateľského testovania do textu bakalárskej práce
            </Col>
          </Row>
          <Row>
            <Col className="column-left">
              Týždeň 11.5. - 17.5.
            </Col>
            <Col className="column-right">
              • pridanie Save tlačítka <br/>
              • implementovanie time out pre Docker <br/>
              • implementovanie limitácie veľkosti súboru
            </Col>
          </Row>
          <Row>
            <Col className="column-left">
              Týždeň 18.5. - 24.5.
            </Col>
            <Col className="column-right">
              • dokončenie písania bakalárskej práce
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
};