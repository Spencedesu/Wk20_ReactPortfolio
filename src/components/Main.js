import React from "react";
import LandingPage from "./LandingPage";
import About from "./About";
import { Switch, Route} from "react-router-dom"
import Projects from "./Projects";
import Contact from "./Contact"
import Resume from "./Resume"

const Main = () => (
  <Switch>
    <Route exact path ="/" component={LandingPage} />
    <Route path = "/about" component = {About}/>
    <Route path = "/projects" component={Projects}/>
    <Route path = "/contact" component={Contact}/>
    <Route path = "/resume" component={Resume}/>
  </Switch>
)

export default Main;