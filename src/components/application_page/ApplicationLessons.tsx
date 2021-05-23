import React, {useEffect, useState} from "react";
import parse from "html-react-parser";
import {Accordion, Button, ButtonGroup, ButtonToolbar, Card, Image} from "react-bootstrap";
import pythonCheatSheet from "../../assets/python-cheat-sheet.jpg";
import javaCheatSheet from "../../assets/java-cheat-sheet.jpg";

const ResizableBox = require("react-resizable").ResizableBox;

const options = {
  replace: (domNode: { attribs: { class: string; }; }) => {
    if (domNode.attribs && domNode.attribs.class === "remove") {
      return <></>;
    }
  }
}

interface Props {
  lesson: { [x: string]: string }
}

export const ApplicationLessons: React.FC<Props> = ({lesson}: Props) => {
  const [content, setContent] = useState(0);

  function getWindowHeight() {
    const {innerHeight: height} = window;
    return height - 323;
  }

  useEffect(() => {
      setContent(0)
    }, [lesson]
  );

  return (

    <>
      <ResizableBox className="custom-box box" width={"100%"} height={getWindowHeight()}
                    handle={<span className="custom-handle custom-handle-se"/>}
                    minConstraints={["100%", 50]} maxConstraints={["100%", 5000]}>
        <ButtonToolbar className="rounded-top buttons-lesson">
          <Button className="mr-auto button-blue" onClick={() => {
            setContent(0)
          }}>Lesson</Button>
          <ButtonGroup>
            <Button className="button-disabled" disabled>Cheat Sheets:</Button>
            <Button className="button-blue" onClick={() => {
              setContent(1)
            }}>Python</Button>
            <Button className="button-blue" onClick={() => {
              setContent(2)
            }}>Java</Button>
          </ButtonGroup>
        </ButtonToolbar>
        <div className="column-app-first text-overflow">
          {content == 0 &&
          <>
              <h4 className="header-app">{lesson["name"]}</h4>
              <p>{parse(lesson["text"], options)}</p>
            {lesson["solution"] !== "" &&
            <Accordion key={lesson["lesson_id"]}>
                <Accordion.Toggle as={Card.Header} eventKey="0" className="accordion-toggle accordion-solution">
                    <h5>Solution</h5>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0" className="accordion-collapse p-2">
                    <p>{parse(lesson["solution"], options)}</p>
                </Accordion.Collapse>
            </Accordion>
            }
          </>
          }
          {content == 1 &&
          <Image src={pythonCheatSheet}/>
          }
          {content == 2 &&
          <Image src={javaCheatSheet}/>
          }
        </div>
      </ResizableBox>
    </>
  )
}