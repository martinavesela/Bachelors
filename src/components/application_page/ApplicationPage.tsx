import React, {useEffect, useRef, useState} from "react";
import {Button, ButtonGroup, Col, Container, Dropdown, Form, Image, Row} from "react-bootstrap";
import {NavigationEN} from "../NavigationEN";
import {ApplicationLessons} from "./ApplicationLessons";
import tested from "../../assets/tested.jpg";
import {PythonApp, PythonAppHandle} from "./PythonApp";
import {JavaApp, JavaAppHandle} from "./JavaApp";
import {useSelector} from "react-redux";
import {State} from "../../store";

interface Save {
  saveId: number
  saveName: string
}

export const ApplicationPage: React.FC = () => {
  const userId = useSelector<State, number>(state => state.userId);
  const [lessonId, setLessonId] = useState(2);
  const [lesson, setLesson] = useState<{ [x: string]: string } | null>(null);
  const [allLessons, setAllLessons] = useState([]);
  const [saveId, setSaveId] = useState(0);
  const [allSaves, setAllSaves] = useState<Save[]>([]);
  const [comment, setComment] = useState("");
  const javaRef = useRef<JavaAppHandle>(null);
  const pythonRef = useRef<PythonAppHandle>(null);
  const [javaOut, setJavaOut] = useState("");
  const [pythonOut, setPythonOut] = useState("");

  const reloadSaves = () => {
    fetchAllSaves(userId, lessonId)
  }

  const fetchLesson = (_userId: number, _lessonId: number) => {
    const getPromiseLesson = async () => {
      const l = await window.fetch("/lesson/" + _lessonId, {
        method: "GET"
      }).then(response => response.json())
      setLesson(l)
      const getPromiseSave = async () => {
        const s = await window.fetch("/latest-save/" + _userId + "/" + _lessonId, {
          method: "GET"
        }).then(response => response.json())
        if (s != "0") {
          setComment("")
          setLesson(({...l, ...s}));
          setJavaOut(s["j_out"])
          setPythonOut(s["p_out"])
        }
      }
      const promiseSave = getPromiseSave()
      promiseSave.catch()
    };
    const promiseLesson = getPromiseLesson()
    promiseLesson.catch()
  };
  useEffect(() => {
      fetchLesson(userId, lessonId)
    }, [userId, lessonId]
  );

  const fetchAllLessons = () => {
    const getPromise = async () => {
      const ls = await window.fetch("/lessons/", {
        method: "GET"
      }).then(response => response.json())
      setAllLessons(ls)
    };
    const promise = getPromise()
    promise.catch()
  }
  useEffect(() => {
      fetchAllLessons()
    }, []
  );

  const fetchSave = (_saveId: number) => {
    const getPromise = async () => {
      const s = await window.fetch("/load-save/" + _saveId, {
        method: "GET"
      }).then(response => response.json())
      if (s != "0") {
        setComment("")
        setLesson(({...lesson, ...s}));
        setJavaOut(s["j_out"])
        setPythonOut(s["p_out"])
      }
    };
    const promise = getPromise()
    promise.catch()
  }
  useEffect(() => {
      fetchSave(saveId)
    }, [saveId]
  );

  const fetchAllSaves = (_userId: number, _lessonId: number) => {
    const getPromise = async () => {
      const saves = await window.fetch("/saves/" + _userId + "/" + _lessonId, {
        method: "GET"
      }).then(response => response.json())
      setAllSaves(saves.map((save: any[]) => ({
        saveId: save[0],
        saveName: save[1]
      })))
    };
    const promise = getPromise()
    promise.catch()
  }
  useEffect(() => {
      fetchAllSaves(userId, lessonId)
    }, [userId, lessonId]
  );


  const saveButton = () => {
    window.fetch("/compile/", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        whichRun: "runJava",
        userId: userId,
        lessonId: lessonId,
        comment: comment,
        pythonIn: pythonRef.current?.pythonIn(),
        pythonTest: pythonRef.current?.pythonTest(),
        pythonOut: pythonRef.current?.pythonOut(),
        javaIn: javaRef.current?.javaIn(),
        javaTest: javaRef.current?.javaTest(),
        javaOut: javaRef.current?.javaOut()
      })
    }).then(r => {
      return r.text()
    }).then(() => {
      reloadSaves()
    })
  }

  return (
    <>
      <NavigationEN/>
      <div className="container-parent height-100-percent">
        {!!lesson ?
          <Container className="container-fluid height-100-percent pt-3 pb-3" fluid>
            <Row className="height-100-percent">
              <Col className="height-100-percent" lg={4}>
                <div className="buttons-height buttons">
                  <Dropdown as={ButtonGroup}>
                    <Button className="button-blue" onClick={() => {
                      setLessonId(1)
                    }}>
                      Sandbox
                    </Button>
                    <Dropdown.Toggle className="button-blue">Lessons</Dropdown.Toggle>
                    <Dropdown.Menu className="button-dropdown">
                      {allLessons && allLessons.map((lesson: string, i: number) => (
                        <Dropdown.Item className="button-dropdown-item" eventKey={(i + 2).toString()}
                                       onClick={() => {
                                         setLessonId(i + 2)
                                       }}>
                          {lesson}
                        </Dropdown.Item>
                      ))}
                    </Dropdown.Menu>
                  </Dropdown>
                  {allSaves.length != 0 ?
                    <Dropdown className="ml-3">
                      <Dropdown.Toggle className="button-blue">Load</Dropdown.Toggle>
                      <Dropdown.Menu className="button-dropdown">
                        {allSaves && allSaves.map((i: Save) => (
                          <Dropdown.Item className="button-dropdown-item" eventKey={i.toString()}
                                         onClick={() => {
                                           setSaveId(i.saveId)
                                         }}>
                            {i.saveName}
                          </Dropdown.Item>
                        ))}
                      </Dropdown.Menu>
                    </Dropdown>
                    :
                    <Button className="ml-3 button-blue" disabled>Load</Button>
                  }
                  <Form className="ml-3 mt-3">
                    <Form.Group controlId="formComment">
                      <Form.Control
                        onChange={(event => {
                          setComment(event.target.value)
                        })}
                        value={comment}
                        placeholder="comment for save"
                        onKeyPress={(event: { key: string; }) => {
                          if (event.key === "Enter") {
                            saveButton();
                          }
                        }}
                      />
                    </Form.Group>
                  </Form>
                  <Button className=" ml-3 button-blue" onClick={() => {
                    saveButton()
                  }}>
                    Save
                  </Button>
                </div>
                <ApplicationLessons lesson={lesson}/>
              </Col>
              <Col className="height-100-percent" lg={4}>
                <PythonApp lesson={lesson} javaAppRef={javaRef} displayPythonOut={pythonOut} reloadSaves={reloadSaves}
                           comment={comment} ref={pythonRef}/>
              </Col>
              <Col className="height-100-percent" lg={4}>
                <JavaApp lesson={lesson} pythonAppRef={pythonRef} displayJavaOut={javaOut} reloadSaves={reloadSaves}
                         comment={comment} ref={javaRef}/>
              </Col>
            </Row>
          </Container>
          :
          <Container className="container-fluid main-text pt-5 pb-5" fluid="lg">
            <Row>
              <Col>
                <h2 className="text-center text-white">The server is currently not running</h2>
                <p className="text-center">The following image is a preview of the application.</p>
                <Image src={tested} rounded fluid={true}/>
              </Col>
            </Row>
          </Container>
        }
      </div>
    </>
  )
}