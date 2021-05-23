import React from "react";
import {HashRouter as Router, Route, Switch} from "react-router-dom";
import {LandingPage} from "./components/LandingPage";
import {ResourcesPage} from "./components/resources_page/ResourcesPage";
import {ApplicationPage} from "./components/application_page/ApplicationPage";
import {TimePlanPage} from "./components/TimePlanPage";
import {DiaryPage} from "./components/DiaryPage";
import {LoginPage} from "./components/LoginPage";
import {Provider} from 'react-redux'
import {store} from './store'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Switch>
            <Route path="/app"><ApplicationPage/></Route>
            <Route path="/resources"><ResourcesPage/></Route>
            <Route path="/time"><TimePlanPage/></Route>
            <Route path="/diary"><DiaryPage/></Route>
            <Route path="/login"><LoginPage/></Route>
            <Route path="/"><LandingPage/></Route>
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
