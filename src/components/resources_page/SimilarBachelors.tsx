import React from "react";
import {Accordion, Card, Col, Container, Image, Row} from "react-bootstrap";
import mGal from "../../assets/bachelors-matus-gal.jpg";
import tSav from "../../assets/bachelors-tamara-savkova.jpg";
import tBoc from "../../assets/bachelors-tomas-bocinec.jpg";

export const SimilarBachelors: React.FC = () => {
  return (
    <>
      <Accordion defaultActiveKey="0">
        <Accordion.Toggle as={Card.Header} eventKey="0" className="accordion-toggle">
          <h2>Podobné bakalárske práce</h2>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0" className="accordion-collapse">
          <div className="container-parent">
            <Container className="container-fluid pb-5">
              <Row>
                <Col>
                  <div className="window text-off-white">
                    <h4 className="text-white">Matúš Gál: Web teaching tool for agile
                      learning new features
                      in C++11, C++14 and
                      C++17</h4>
                    <br/>
                    <Container className="ml-1">
                      <Row>
                        <Col md="auto">
                          Rok: 2020 <br/>
                          Školiaci: Ing. František Gyárfáš, PhD. <br/>
                          Stránka práce: <a id="link-blue-to-white"
                                            href="http://www.st.fmph.uniba.sk/~gal39/bachelors_thesis/">link</a>
                        </Col>
                        <Col>
                          <Image src={mGal} rounded fluid={true}/>
                        </Col>
                      </Row>
                    </Container>
                    <br/>
                    <p>
                      Aplikácia pre výučbu nových vlastností jazyka C za pomoci metód
                      agilného vývoja
                      softvéru ako testmi riadené programovanie a refaktorizácia.
                      Prostredie ponúka
                      nástroje na vytváranie a správu interaktívnych kurzov a cvičení,
                      ktoré sa dajú
                      riešiť použitím vstavaného vývojového prostredia.
                    </p>
                  </div>
                  <div className="window text-off-white">
                    <h4 className="text-white">Tamara Savkova: Web Teaching Tool for
                      Learning Agile
                      Programming</h4>
                    <br/>
                    <Container className="ml-1">
                      <Row>
                        <Col md="auto">
                          Rok: 2019 <br/>
                          Školiaci: Ing. František Gyárfáš, PhD. <br/>
                        </Col>
                        <Col>
                          <Image src={tSav} rounded fluid={true}/>
                        </Col>
                      </Row>
                    </Container>
                    <br/>
                    <p>
                      Aplikácia pre výučbu vybraných agilných metód programovania.
                      Poskytuje používateľovi
                      možnosť vytvárania a riešenia praktických úloh pre testmi
                      riadené programovanie,
                      refaktorizáciu a prácu so zdedeným kódom.
                    </p>
                  </div>
                  <div className="window text-off-white">
                    <h4 className="text-white">Tomáš Bočinec: Webová výuka programovania
                      pomocou metodológie
                      TDD</h4>
                    <br/>
                    <Container className="ml-1">
                      <Row>
                        <Col md="auto">
                          Rok: 2018 <br/>
                          Školiaci: Ing. František Gyárfáš, PhD. <br/>
                          Stránka práce: <a id="link-blue-to-white"
                                            href="http://www.bc.bocinec.com">link</a>
                        </Col>
                        <Col>
                          <Image src={tBoc} rounded fluid={true}/>
                        </Col>
                      </Row>
                    </Container>
                    <br/>
                    <p>
                      Aplikácia pre výučbu programovania v rôznych programovacích
                      jazykoch formou testmi
                      riadeného programovania. Aplikácia umožní vytvárať úlohy, ktoré
                      budú študenti riešiť
                      vo webovom prehliadači pomocou cyklu: nesplnený test, program,
                      refaktorizácia.
                      Študenti budú postupne pridávať v cykle jednotkové testy a
                      programový kód, pokiaľ
                      nenaprogramujú celé zadanie. Aplikácia bude vedieť spracovať
                      programy vo viacerých
                      programovacích jazykoch. Bude obsahovať webové vývojové
                      prostredie pre písanie
                      programového kódu vo vybranom jazyku a na serveri zbiehanie a
                      hodnotenie odovzdaných
                      riešení. Bude obsahovať nástroje na administráciu študentov.
                    </p>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </Accordion.Collapse>
      </Accordion>
    </>
  )
}