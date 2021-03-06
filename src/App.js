import React from 'react'

import {BrowserRouter as Router , Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Greetings from './components/Greetings'
function App(){


return (
  <>
    <Router>
      <Switch>
        <Route exact path="/" component={ Home }/>  
        <Route exact path="/about"  component={ About } /> 
        <Route exact path="/greetings/:var1" component={ Greetings }/>
      </Switch>
    </Router>
  </>

)



}
export default App;
// eslint-disable-next-line