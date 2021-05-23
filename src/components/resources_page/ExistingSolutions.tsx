import React from "react";
import {Accordion, Card, Col, Container, Image, Row} from "react-bootstrap";
import codeAcademy from "../../assets/code-academy.jpg";
import codeWars from "../../assets/code-wars.jpg";

export const ExistingSolutions: React.FC = () => {
  return (
    <>
      <Accordion defaultActiveKey="0">
        <Accordion.Toggle as={Card.Header} eventKey="0" className="accordion-toggle">
          <h2>Existujúce riešenia</h2>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0" className="accordion-collapse">
          <div className="container-parent">
            <Container className="container-fluid pb-5">
              <Row>
                <Col>
                  <div className="window text-off-white">
                    <p>
                      Existuje veľa webových aplikácií na výučbu programovacieho jazyka.
                      Väčšina z nich požaduje registráciu, ale taktiež je väčšinou rýchla a
                      jednoduchá. Len základné kurzy zviknú byť zadarmo, zatiaľ čo
                      pokročilejšie sa platia mesačne. Najlachšie je nájsť výučbu pre web
                      development. Niektoré programovacie jazyky ponúkajú vlastné výučbové
                      webové prostredie, ako napríklad <a id="link-blue-to-white"
                                                          href="https://tour.golang.org/welcome/1">Go</a>.
                    </p>
                  </div>
                  <div className="window text-off-white">
                    <h4 className="text-white">Code Academy</h4>
                    <br/>
                    <Container className="ml-1">
                      <Row>
                        <Col md="auto">
                          • Potrebuje registráciu <br/>
                          • Niektoré lekcie sú zadarmo, iné platené <br/>
                          • Minimálna cena 14€ mesačne <br/>
                          • Vyučuje naraz len jeden jazyk <br/>
                          • HTML, CSS, Python, JavaScript, Java, <br/>
                          &nbsp; &nbsp; SQL, Shell, Ruby, C++, R, C#, PHP, <br/>
                          &nbsp; &nbsp; Go, Swift, Kotlin <br/>
                        </Col>
                        <Col>
                          <Image src={codeAcademy} rounded fluid={true}/>
                        </Col>
                      </Row>
                    </Container>
                  </div>
                  <div className="window text-off-white">
                    <h4 className="text-white">Code Wars</h4>
                    <br/>
                    <Container className="ml-1">
                      <Row>
                        <Col md="auto">
                          • Potrebuje registráciu <br/>
                          • Za minimálne 4€ mesačne sa dajú kúpiť výhody <br/>
                          • Možnosť pozrieť si riešenia druhých <br/>
                          • Vyučuje naraz len jeden jazyk <br/>
                          • Lekcie sa môžu robiť v rôznych jazykoch <br/>
                          • Clojure, CoffeeScript, C, Coq, C++, C#, Crystal, <br/>
                          &nbsp; &nbsp; Dart, Elixir, F#, Go, Groovy, Haskell, Java,
                          JavaScript, <br/>
                          &nbsp; &nbsp; Kotlin, Lean, Lua, NASM, PHP, Python, Racket,
                          Ruby, <br/>
                          &nbsp; &nbsp; Rust, Scala, Shell, SQL, Swift, TypeScript <br/>
                          • Viac jazykov v bete <br/>
                        </Col>
                        <Col>
                          <Image src={codeWars} rounded fluid={true}/>
                        </Col>
                      </Row>
                    </Container>
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