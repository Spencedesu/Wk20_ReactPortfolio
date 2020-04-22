import React, { Component} from "react";
import { Tabs, Tab, Grid, Cell, Card, CardTitle, Button, CardMenu, IconButton, CardText, CardActions} from "react-mdl";
import FoodApp from "../images/PortlandCuisine.jpeg"


class Projects extends Component{
  constructor(props) {
    super(props);
    this.state = { activeTab: 0};
  }

  toggleCategories() {
  if(this.state.activeTab === 0) {
    return (
      <div className="projects-grid">

      <Card shadow={5} style={{minWidth: "450", margin: "auto"}}>
        <CardTitle style={{color: "white", height: "176px", background:
        'url(https://www.rd.com/wp-content/uploads/2019/12/book-e1576790089347.jpg) center / cover'}}>Google Books Search App</CardTitle>
      <CardText>
        An App for searching the google books api, displays the results, and allows the user to save results to a reading list.
      </CardText>
      <CardActions border>
        <Button href="https://github.com/Spencedesu/Google_Book_SearchHW21"colored target="_blank">Github</Button>
        <Button href="https://github.com/Spencedesu/Google_Book_SearchHW21"colored target="_blank">Deployed App</Button>
      </CardActions>
      <CardMenu style={{color: "#fff"}}>
        <IconButton name="share"/>
      </CardMenu>
      </Card>

      <Card shadow={5} style={{minWidth: "450", margin: "auto"}}>
        <CardTitle style={{color: "white", height: "176px", background:
        'url(https://assets.entrepreneur.com/content/3x2/2000/20160915213625-GettyImages-506827008.jpeg) center / cover'}}>Service Staff Strike Back (Project 3)</CardTitle>
      <CardText>
        Forum application, to allow service-industry folks, to share stories, 
      </CardText>
      <CardActions border>
        <Button href="https://https://github.com/Spencedesu/ServiceStaffStrikeBack.com/"colored target="_blank">Github</Button>
        <Button href="https://still-cove-82320.herokuapp.com/"colored target="_blank">Deployed App</Button>
      </CardActions>
      <CardMenu style={{color: "#fff"}}>
        <IconButton name="share"/>
      </CardMenu>
      </Card>

      <Card shadow={5} style={{minWidth: "450", margin: "auto"}}>
      <CardTitle style={{color: "white", height: "176px", background:
      'url(https://www.pageuppeople.com/wp-content/uploads/2019/01/Top-60-Employee-Engagement-image43-1024x510.png) center / cover'}}>Employee Directory</CardTitle>
    <CardText>
      Using a list of employees, narrow list by sorting by name.
    </CardText>
    <CardActions border>
      <Button href="https://github.com/Spencedesu/HW19_EmployeeDirectory"colored target="_blank">Github</Button>
      <Button href ="https://whispering-shelf-80391.herokuapp.com/"colored target="_blank">Deployed App</Button>
    </CardActions>
    <CardMenu style={{color: "#fff"}}>
      <IconButton name="share"/>
    </CardMenu>
    </Card>

  </div>
    )
  } else if(this.state.activeTab ===1) {
    return(
      <div className="projects-grid">

      <Card shadow={5} style={{minWidth: "450", margin: "auto"}}>
        <CardTitle style={{color: "white", height: "176px", background:
        'url(https://upload.bitfeed.co/5daa9c4e4f784-cowboy-bebop-spike) center / cover'}}>Workout Tracker</CardTitle>
      <CardText>
        An app that takes in your reps, seats, duration, etc. of a workout - logs the results.
      </CardText>
      <CardActions border>
        <Button href="https://github.com/Spencedesu/workoutTracker"colored target="_blank">Github</Button>
        <Button href="https://dashboard.heroku.com/apps/workout-cuzzin" colored traget="_blank">Deployed App</Button>
      </CardActions>
      <CardMenu style={{color: "#fff"}}>
        <IconButton name="share"/>
      </CardMenu>
      </Card>

      <Card shadow={5} style={{minWidth: "450", margin: "auto"}}>
      <CardTitle style={{color: "white", height: "176px", background:
      'url(https://multiviewblogs.files.wordpress.com/2013/03/ricflair.jpg) center / cover'}}>Budget Tracker</CardTitle>
    <CardText>
      Dolla Dolla Bill ya'll
    </CardText>
    <CardActions border>
      <Button href="https://github.com/Spencedesu/Google_Book_SearchHW21"colored target="_blank">Github</Button>
      <Button colored>Deployed App</Button>
    </CardActions>
    <CardMenu style={{color: "#fff"}}>
      <IconButton name="share"/>
    </CardMenu>
    </Card>

    
  </div>
    )
  } else if(this.state.activeTab === 2) {
    return(
      <div className="projects-grid">

      <Card shadow={5} style={{minWidth: "450", margin: "auto"}}>
        <CardTitle style={{color: "white", height: "176px", background:
        'url(https://image.shutterstock.com/image-photo/collage-various-food-products-260nw-712964140.jpg) center / cover'}}>Portland Food App</CardTitle>
      <CardText>
        Search for local Portland spots to grab a bite.
      </CardText>
      <CardActions border>
        <Button href=""colored target="_blank">Github</Button>
        <Button href ="https://tcanbolat.github.io/Portland-Food-App/"colored>Deployed App</Button>
      </CardActions>
      <CardMenu style={{color: "#fff"}}>
        <IconButton name="share"/>
      </CardMenu>
      </Card>
  </div>
    )
  } else if (this.state.activeTab === 3){
    return(
      <Card shadow={10} style={{minWidth: "450", margin: "auto"}}>
        <CardText>
          Important! For the apps with a deployed version, click the "Open App" button in the top right of the new window!
        </CardText>
      </Card>
    )
  }
}
  render() {
    return (
    <div className="category-tabs">
      <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId})} ripple>
        <Tab>React</Tab>
        <Tab>MongoDB</Tab>
        <Tab>Javascript</Tab>
        <Tab>Important</Tab>
      </Tabs>

        <Grid >
          <Cell col={12}>
            <div className="content"> {this.toggleCategories()}</div>
          </Cell>
        </Grid>
      
    </div>
    )}
}

export default Projects;