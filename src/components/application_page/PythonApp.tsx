import React, {useEffect, useImperativeHandle, useRef, useState} from "react";
import CodeMirror from "@uiw/react-codemirror";
import "codemirror/keymap/sublime";
import "codemirror/theme/darcula.css";
import "codemirror/addon/display/autorefresh";
import "codemirror/addon/comment/comment";
import "codemirror/addon/edit/matchbrackets";
import {Button} from "react-bootstrap";
import {useSelector} from "react-redux";
import {State} from "../../store";
import {JavaAppHandle} from "./JavaApp";

const ResizableBox = require("react-resizable").ResizableBox;

interface Props {
  lesson: { [x: string]: string }
  javaAppRef: React.RefObject<JavaAppHandle>
  displayPythonOut: string
  reloadSaves: () => void
  comment: string
}

export interface PythonAppHandle {
  pythonIn: () => string
  pythonTest: () => string
  pythonOut: () => string
}

const _PythonApp: React.ForwardRefRenderFunction<PythonAppHandle, Props> = (
  {
    lesson,
    javaAppRef,
    displayPythonOut,
    reloadSaves,
    comment
  }: Props, ref) => {
  const user = useSelector<State, number>(state => state.userId)
  const [isRunningPython, setRunningPython] = useState(false);
  const [isTestingPython, setTestingPython] = useState(false);
  const [lessonId, setLessonId] = useState("");
  let pythonIn = useRef<CodeMirror>(null);
  let pythonTest = useRef<CodeMirror>(null);
  let pythonOut = useRef<CodeMirror>(null);
  useImperativeHandle(ref, () => ({
    pythonIn: () => {
      return pythonIn.current?.editor.getValue();
    },
    pythonTest: () => {
      return pythonTest.current?.editor.getValue();
    },
    pythonOut: () => {
      return pythonOut.current?.editor.getValue();
    }
  }));
  useEffect(() => {
    if (lessonId !== lesson["lesson_id"]) {
      pythonOut.current?.editor?.setValue("")
    }
    setLessonId(lesson["lesson_id"])
  }, [lessonId, lesson])
  const runPython = () => {
    setRunningPython(true)
    window.fetch("/compile/", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        whichRun: "runPython",
        userId: user,
        lessonId: lessonId,
        comment: comment,
        pythonIn: pythonIn.current?.editor.getValue(),
        pythonTest: pythonTest.current?.editor.getValue(),
        pythonOut: pythonOut.current?.editor.getValue(),
        javaIn: javaAppRef.current?.javaIn(),
        javaTest: javaAppRef.current?.javaTest(),
        javaOut: javaAppRef.current?.javaOut()
      })
    }).then(a => {
      return a.text()
    }).then(text => {
      pythonOut.current?.editor.setValue(text)
      setRunningPython(false)
      reloadSaves()
    })
  };
  const testPython = () => {
    setTestingPython(true)
    window.fetch("/compile/", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        whichRun: "testPython",
        userId: user,
        lessonId: lessonId,
        comment: comment,
        pythonIn: pythonIn.current?.editor.getValue(),
        pythonTest: pythonTest.current?.editor.getValue(),
        pythonOut: pythonOut.current?.editor.getValue(),
        javaIn: javaAppRef.current?.javaIn(),
        javaTest: javaAppRef.current?.javaTest(),
        javaOut: javaAppRef.current?.javaOut()
      })
    }).then(a => {
      return a.text()
    }).then(text => {
      pythonOut.current?.editor.setValue(text)
      setTestingPython(false)
      reloadSaves()
    })
  };
  return (
    <>
      <div className="buttons">
        <h6>Python:</h6>
        <Button className="button button-green" size="sm" disabled={isRunningPython || isTestingPython}
                onClick={runPython}>
          {isRunningPython ? "Running..." : "Run"}
        </Button>
        <Button className="button button-green" size="sm" disabled={isRunningPython || isTestingPython}
                onClick={testPython}>
          {isTestingPython ? "Testing..." : "Test"}
        </Button>
        {/*<Button className="button button-orange" size="sm" disabled={isRunningPython} onClick={runPython}>*/}
        {/*    {isRunningPython ? "Terminating..." : "Stop"}*/}
        {/*</Button>*/}
      </div>
      <ResizableBox className="custom-box box" width={"100%"} height={200}
                    handle={<span className="custom-handle custom-handle-se"/>}
                    minConstraints={["100%", 20]} maxConstraints={["100%", 5000]}>
        <p className="header-language">Python Program</p>
        <CodeMirror
          ref={pythonIn}
          value={lesson["p_in"]}
          options={{
            theme: "darcula",
            keyMap: "sublime",
            mode: "python",
            readOnly: lesson["p_in_lock"]
          }}
        />
      </ResizableBox>
      <ResizableBox className="custom-box box" width={"100%"} height={200}
                    handle={<span className="custom-handle custom-handle-se"/>}
                    minConstraints={["100%", 20]} maxConstraints={["100%", 5000]}>
        <p className="header-language">Python Tests</p>
        <CodeMirror
          ref={pythonTest}
          value={lesson["p_test"]}
          options={{
            theme: "darcula",
            keyMap: "sublime",
            mode: "python",
            readOnly: lesson["p_test_lock"]
          }}
        />
      </ResizableBox>
      <ResizableBox className="custom-box box" width={"100%"} height={200}
                    handle={<span className="custom-handle custom-handle-se"/>}
                    minConstraints={["100%", 20]} maxConstraints={["100%", 5000]}>
        <p className="header-language">Python Output</p>
        <CodeMirror
          ref={pythonOut}
          value={displayPythonOut}
          options={{
            theme: "darcula",
            keyMap: "sublime",
            mode: "python",
            readOnly: "true",
          }}
        />

      </ResizableBox>
    </>
  )
}

export const PythonApp = React.forwardRef(_PythonApp);