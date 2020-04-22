import React, { Component} from "react";
import { Grid, Cell} from "react-mdl";
import Educaton from "./Education";


class About extends Component{
  render() {
    return (
    <div>
      <Grid>
        <Cell col={4}>
          <div style={{textAlign: "center"}}>
            <img alt="profile" src={require("../images/Profile.jpeg")}
            style={{height: "300px"}}/>
          </div>
          <h2 style={{paddingTop: "2em"}}>Spencer Purcell</h2>
          <h2 style={{color: "grey", fontSize:"30px"}}>Full-stack Web Development</h2>
          <hr style={{borderTop: "3px solid #833fb2", width: "50%"}}/>
          <p> Hey everyone, my name is Spencer Purcell, and thanks for checking out my portfolio site.
             I am currently attending Univeristy of Oregon's Coding Bootcamp, where we have covered a full stack of Programming technologies.
             The more I learn, the more I realize how much there is to get better at, and learning to practice on my own has been one of my greatest struggles.
             Growing up in Portland, I stayed close to home for my college years where I attended PSU (2014-2018) and got my B.S. in Biology.
             Although I intended to enter the healthcare route, I have a serious appreciation (and new-found respect) for coding and Programming.
             </p>
             <hr style={{borderTop: "3px solid #833fb2", width: "50%"}}/>
             <p> 
              For fun, I like to socialize with my friends, and that's not limited to any event or setting. From online gaming, to playing basketball, to boating, 
            going to house shows, I really enjoy the company that I've been blessed with. Of course, in light of the current state of the country it makes
            socializing quite a bit more difficult, which just gives me more time to focus my craft!
              I appreciate you taking the time to visit and see a little more about me, and we'll get through this Covid situation,
              just gotta hang in there!
              </p>
        </Cell>
        <Cell className="about-page-right" col={8}>
          <h2> Education:</h2>
          <Educaton/>
          <img alt="coolboyz" src={require("../images/coolBoyz.jpg")}
        style={{height: "500px", textAlign: "center"}}/>
        </Cell>
      </Grid>
    </div>
    )}
}

export default About;