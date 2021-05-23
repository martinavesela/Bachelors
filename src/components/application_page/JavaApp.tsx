import React, {useEffect, useImperativeHandle, useRef, useState} from "react";
import CodeMirror from "@uiw/react-codemirror";
import "codemirror/keymap/sublime";
import "codemirror/theme/darcula.css";
import 'codemirror/addon/display/autorefresh';
import 'codemirror/addon/comment/comment';
import 'codemirror/addon/edit/matchbrackets';
import {Button} from "react-bootstrap";
import {useSelector} from "react-redux";
import {State} from "../../store";
import {PythonAppHandle} from "./PythonApp";

const ResizableBox = require("react-resizable").ResizableBox;

interface Props {
  lesson: { [x: string]: string }
  pythonAppRef: React.RefObject<PythonAppHandle>
  displayJavaOut: string
  reloadSaves: () => void
  comment: string
}

export interface JavaAppHandle {
  javaIn: () => string
  javaTest: () => string
  javaOut: () => string
}

const _JavaApp: React.ForwardRefRenderFunction<JavaAppHandle, Props> = (
  {
    lesson,
    pythonAppRef,
    displayJavaOut,
    reloadSaves,
    comment
  }: Props, ref) => {
  const user = useSelector<State, number>(state => state.userId)
  const [isRunningJava, setRunningJava] = useState(false);
  const [isTestingJava, setTestingJava] = useState(false);
  const [lessonId, setLessonId] = useState("");
  let javaIn = useRef<CodeMirror>(null);
  let javaTest = useRef<CodeMirror>(null);
  let javaOut = useRef<CodeMirror>(null);
  useImperativeHandle(ref, () => ({
    javaIn: () => {
      return javaIn.current?.editor.getValue();
    },
    javaTest: () => {
      return javaTest.current?.editor.getValue();
    },
    javaOut: () => {
      return javaOut.current?.editor.getValue();
    }
  }));
  useEffect(() => {
    if (lessonId !== lesson["lesson_id"]) {
      javaOut.current?.editor?.setValue("")
    }
    setLessonId(lesson["lesson_id"])
  }, [lessonId, lesson])
  const runJava = () => {
    setRunningJava(true)
    window.fetch("/compile/", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        whichRun: "runJava",
        userId: user,
        lessonId: lessonId,
        comment: comment,
        pythonIn: pythonAppRef.current?.pythonIn(),
        pythonTest: pythonAppRef.current?.pythonTest(),
        pythonOut: pythonAppRef.current?.pythonOut(),
        javaIn: javaIn.current?.editor.getValue(),
        javaTest: javaTest.current?.editor.getValue(),
        javaOut: javaOut.current?.editor.getValue()
      })
    }).then(a => {
      return a.text()
    }).then(text => {
      javaOut.current?.editor.setValue(text)
      setRunningJava(false)
      reloadSaves()
    })
  };
  const testJava = () => {
    setTestingJava(true)
    window.fetch("/compile/", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        whichRun: "testJava",
        userId: user,
        lessonId: lessonId,
        comment: comment,
        pythonIn: pythonAppRef.current?.pythonIn(),
        pythonTest: pythonAppRef.current?.pythonTest(),
        pythonOut: pythonAppRef.current?.pythonOut(),
        javaIn: javaIn.current?.editor.getValue(),
        javaTest: javaTest.current?.editor.getValue(),
        javaOut: javaOut.current?.editor.getValue()
      })
    }).then(a => {
      return a.text()
    }).then(text => {
      javaOut.current?.editor.setValue(text)
      setTestingJava(false)
      reloadSaves()
    })
  };
  return (
    <>
      <div className="buttons">
        <h6>Java:</h6>
        <Button className="button button-green" size="sm" disabled={isRunningJava || isTestingJava}
                onClick={runJava}>
          {isRunningJava ? "Running..." : "Run"}
        </Button>
        <Button className="button button-green" size="sm" disabled={isRunningJava || isTestingJava}
                onClick={testJava}>
          {isTestingJava ? "Testing..." : "Test"}
        </Button>
        {/*<Button className="button button-orange" size="sm" disabled={isRunningJava} onClick={runJava}>*/}
        {/*    {isRunningJava ? "Terminating..." : "Stop"}*/}
        {/*</Button>*/}
      </div>
      <ResizableBox className="custom-box box" width={"100%"} height={200}
                    handle={<span className="custom-handle custom-handle-se"/>}
                    minConstraints={["100%", 20]} maxConstraints={["100%", 5000]}>
        <p className="header-language">Java Program</p>
        <CodeMirror
          ref={javaIn}
          value={lesson["j_in"]}
          options={{
            theme: "darcula",
            keyMap: "sublime",
            mode: "java",
            readOnly: lesson["j_in_lock"]
          }}
        />
      </ResizableBox>
      <ResizableBox className="custom-box box" width={"100%"} height={200}
                    handle={<span className="custom-handle custom-handle-se"/>}
                    minConstraints={["100%", 20]} maxConstraints={["100%", 5000]}>
        <p className="header-language">Java Tests</p>
        <CodeMirror
          ref={javaTest}
          value={lesson["j_test"]}
          options={{
            theme: "darcula",
            keyMap: "sublime",
            mode: "java",
            readOnly: lesson["j_test_lock"]
          }}
        />
      </ResizableBox>
      <ResizableBox className="custom-box box" width={"100%"} height={200}
                    handle={<span className="custom-handle custom-handle-se"/>}
                    minConstraints={["100%", 20]} maxConstraints={["100%", 5000]}>
        <p className="header-language">Java Output</p>
        <CodeMirror
          ref={javaOut}
          value={displayJavaOut}
          options={{
            theme: "darcula",
            keyMap: "sublime",
            mode: "java",
            readOnly: "true",
          }}
        />
      </ResizableBox>
    </>
  )
}

export const JavaApp = React.forwardRef(_JavaApp);