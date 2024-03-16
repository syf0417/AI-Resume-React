import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import AIAssistantSelect from './views/ai-assistant-select'
import AIAssistantAudio from './views/ai-assistant-audio'
import HomePageforInterview from './views/home-pagefor-interview'
import FInformationPage from './views/f-information-page'
import AIAssistantText from './views/ai-assistant-text'
import AIAssistantSelectAssistant from './views/ai-assistant-select-assistant'
import MultipleResumeThroughOneClick from './views/multiple-resume-through-one-click'
import SelectCommunicationMethod from './views/select-communication-method'
import AIAssistantVideo from './views/ai-assistant-video'
import FHomePage from './views/f-home-page'
import FResumePreview from './views/f-resume-preview'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route
          component={AIAssistantSelect}
          exact
          path="/ai-assistant-select"
        />
        <Route component={AIAssistantAudio} exact path="/ai-assistant-audio" />
        <Route
          component={HomePageforInterview}
          exact
          path="/home-pagefor-interview"
        />
        <Route component={FInformationPage} exact path="/f-information-page" />
        <Route component={AIAssistantText} exact path="/ai-assistant-text" />
        <Route
          component={AIAssistantSelectAssistant}
          exact
          path="/ai-assistant-select-assistant"
        />
        <Route
          component={MultipleResumeThroughOneClick}
          exact
          path="/multiple-resume-through-one-click"
        />
        <Route
          component={SelectCommunicationMethod}
          exact
          path="/select-communication-method"
        />
        <Route component={AIAssistantVideo} exact path="/ai-assistant-video" />
        <Route component={FHomePage} exact path="/" />
        <Route component={FResumePreview} exact path="/f-resume-preview" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
