import React from "react";
import {Accordion, Card, Col, Container, Image, Row} from "react-bootstrap";
import react from "../../assets/react.png";
import reactBootstrap from "../../assets/react-bootstrap.png";
import typeScript from "../../assets/type-script.png";
import python from "../../assets/python.png";
import codeMirror from "../../assets/code-mirror.png";
import docker from "../../assets/docker.png";

export const UsedTechnologies: React.FC = () => {
  return (
    <>
      <Accordion defaultActiveKey="0">
        <Accordion.Toggle as={Card.Header} eventKey="0" className="accordion-toggle">
          <h2>Využité technológie</h2>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0" className="accordion-collapse">
          <div className="container-parent">
            <Container className="container-fluid pb-5">
              <Row>
                <Col>
                  <div className="window text-off-white">
                    <h3>Frontend:</h3> <br/>
                    <Container className="ml-1">
                      <Row>
                        <Col md>
                          <h4 className="text-white"><a id="link-white-to-blue" href="https://reactjs.org">React</a>
                          </h4>
                          <Image src={react} rounded fluid={true}/> <br/>
                          JavaScript knižnica pre stavbu používateľských rozhraní
                        </Col>
                        <Col md>
                          <h4 className="text-white"><a id="link-white-to-blue"
                                                        href="https://react-bootstrap.github.io">React Bootstrap</a>
                          </h4>
                          <Image src={reactBootstrap} rounded fluid={true}/> <br/>
                          Najpopulárnejší frontend framework prerobený pre React
                        </Col>
                      </Row>
                      <br/>
                      <Row>
                        <Col md>
                          <h4 className="text-white"><a id="link-white-to-blue"
                                                        href="https://www.typescriptlang.org">TypeScript</a></h4>
                          <Image src={typeScript} rounded fluid={true}/> <br/>
                          Nadstavba JavaScriptu, čo pridáva typy
                        </Col>
                        <Col md>
                          <h4 className="text-white"><a id="link-white-to-blue"
                                                        href="https://codemirror.net">CodeMirror</a></h4>
                          <Image src={codeMirror} rounded fluid={true}/> <br/>
                          Versatilný textový editor implementovaný v JavaScripte špecializovaný na editovanie kódu
                        </Col>
                      </Row>
                    </Container>
                  </div>
                  <div className="window text-off-white">
                    <h3>Backend:</h3> <br/>
                    <Container className="ml-1">
                      <Row>
                        <Col md>
                          <h4 className="text-white"><a id="link-white-to-blue"
                                                        href="https://www.python.org">Python</a>
                          </h4>
                          <Image src={python} rounded fluid={true}/> <br/>
                          Interpretovaný programovací jazyk
                        </Col>
                        <Col md>
                          <h4 className="text-white"><a id="link-white-to-blue"
                                                        href="https://www.docker.com">Docker</a>
                          </h4>
                          <Image src={docker} rounded fluid={true}/> <br/>
                          Sada platforiem ako servis, všetky kontajnery zbiehajú na jednom kernely takže používajú
                          menej
                          zdrojov než virtuálne mašiny
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