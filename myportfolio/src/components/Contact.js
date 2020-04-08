import React, { Component} from "react";
import {Grid, Cell, ListItem, List, ListItemContent } from "react-mdl";
import "../images/coolBoyz.jpg";



class Contact extends Component{
  render() {
    return(
    <div className="contact-body">
      <Grid className="contact-grid">
        <Cell col={6}>
          <h2>Spencer Purcell</h2>
          <img alt="emoji "src={require("../images/spencerBitmoji.png")}
          style={{height: "300px"}}/>
          <p style={{width: "75%", margin: "auto", paddingTop: "1em"}}>
            Here's my info, talk to you soon? Happy to answer any questions, that I know about.
          </p>
        </Cell>
        <Cell col={6}>
          <h2> Contact Me</h2>
          <hr />
          <div className="contact-list">
            <List>
              <ListItem>
                <ListItemContent style={{fontSize: "25px", fontFamily: "Oxygen"}}>
                  <i className="fa fa-phone-square" aria-hidden="true"/>
                  503-830-6307
                </ListItemContent>
              </ListItem>

              <ListItem>
                <ListItemContent style={{fontSize: "25px", fontFamily: "Oxygen"}}>
                  <i className="fa fa-envelope" aria-hidden="true"/>
                  spencerpurcell1@gmail.com
                </ListItemContent>
              </ListItem>

              <ListItem>
                <ListItemContent style={{fontSize: "25px", fontFamily: "Oxygen"}}>
                  <i className="fa fa-github-alt"/>
                  github/spencedesu
                </ListItemContent>
              </ListItem>
            </List>
          </div>
        </Cell>
      </Grid>
      </div>
    )}
}

export default Contact;