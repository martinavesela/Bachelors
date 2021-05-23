import React from "react";
import {Button, ButtonGroup, Card, Col, Container, Row} from "react-bootstrap";
import {CardComponent, CardType} from "./CardComponent";
import {NavigationSK} from "./NavigationSK";
import runImg from "../assets/ran.jpg";
import testImg from "../assets/tested.jpg";

export const LandingPage: React.FC = () => {
  const contact = (): React.ReactElement => (
    <Card.Text>Martina Veselá <br/> email - <a id="link-white-to-blue"
                                               href="mailto:vesela50@uniba.sk">vesela50@uniba.sk</a></Card.Text>
  )
  return (
    <>
      <NavigationSK/>
      <div className="container-parent">
        <Container className="container-fluid pt-5 pb-5" fluid="lg">
          <Row>
            <Col md={4}>
              <CardComponent type={CardType.orange} title={"Bakalárska práca"}
                             text={<a id="link-white-to-blue" href="https://fmph.uniba.sk">Fakulta
                               matematiky,
                               fyziky
                               a informatiky</a>}/>
              <CardComponent header={"Študijný program:"} text={<a id="link-white-to-blue"
                                                                   href="https://fmph.uniba.sk/studium/programy/aplikovana-informatika/">Aplikovaná
                infromatika</a>}/>
              <CardComponent header={"Školiaci:"} text={<a id="link-white-to-blue"
                                                           href="https://dai.fmph.uniba.sk/w?title=Frantisek_Gyarfas/sk">Ing.
                František Gyárfáš, PhD.</a>}/>
              <CardComponent header={"Študent:"} text={contact()}/>
              <CardComponent header={"Jazyk:"}
                             text={"práce - slovenský\naplikácie - anglický"}/>
            </Col>
            <Col className="main-text">
              <h2>Anotácia</h2>
              Cieľom bakalárskej práce je navrhnúť a vytvoriť interaktívne webové prostredie
              pre výučbu programovania v programovacom jazyku (napr. Java)
              za pomoci znalostí iného programovacieho jazyka (napr. Python).
              Prostredie ponúkne študentovi riešenia úloh v jemu známom jazyku
              a vedie ho k preprogramovaniu týchto úloh do druhého jazyka.
              Úlohy budú definované formou testmi riadeného programovania (TDD).
              Aplikácia bude obsahovať editory kódu vo vybraných jazykoch
              a testovanie na serveri pomocou jednotkových testov.
              Systém bude realizovaný pomocou technológii/nástrojov:
              PHP alebo Python (framework), MySQL, HTML5, CSS, JavaScript (jQuery, Bootstrap),
              knižnice pre testovanie, virtuálny server
              <br/>
              <br/>
              <ButtonGroup>
                <Button className="button-blue"
                        href={"/~vesela50/BakalarskaPraca-MartinaVesela-VychodiskovaKapitola.pdf"}
                        target="_blank">
                  Východisková kapitola práce
                </Button>
                <Button className="button-blue"
                        href={"/~vesela50/zdrojovy-kod.zip"}
                        target="_blank">
                  Zdrojový kód
                </Button>
                <Button className="button-blue"
                        href={runImg}
                        target="_blank">
                  Ukážka zbiehania kódu
                </Button>
                <Button className="button-blue"
                        href={testImg}
                        target="_blank">
                  Ukážka testovania kódu
                </Button>
              </ButtonGroup>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}
