import React, { Component} from "react";
import { Tabs, Tab, Grid, Cell, Card, CardTitle, Button, CardMenu, IconButton, CardText, CardActions} from "react-mdl";


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
        <Button colored>Deployed App</Button>
      </CardActions>
      <CardMenu style={{color: "#fff"}}>
        <IconButton name="share"/>
      </CardMenu>
      </Card>

      <Card shadow={5} style={{minWidth: "450", margin: "auto"}}>
      <CardTitle style={{color: "white", height: "176px", background:
      'url(https://www.rd.com/wp-content/uploads/2019/12/book-e1576790089347.jpg) center / cover'}}>Google Books Search App</CardTitle>
    <CardText>
      An App for searching the google books api, displays the results, and allows the user to save results to a reading list.
    </CardText>
    <CardActions border>
      <Button href="https://github.com/Spencedesu/Google_Book_SearchHW21"colored target="_blank">Github</Button>
      <Button colored>Deployed App</Button>
    </CardActions>
    <CardMenu style={{color: "#fff"}}>
      <IconButton name="share"/>
    </CardMenu>
    </Card>

    <Card shadow={5} style={{minWidth: "450", margin: "auto"}}>
    <CardTitle style={{color: "white", height: "176px", background:
    'url(https://www.rd.com/wp-content/uploads/2019/12/book-e1576790089347.jpg) center / cover'}}>Google Books Search App</CardTitle>
  <CardText>
    An App for searching the google books api, displays the results, and allows the user to save results to a reading list.
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
  } else if(this.state.activeTab ===1) {
    return(
      <div className="projects-grid">

      <Card shadow={5} style={{minWidth: "450", margin: "auto"}}>
        <CardTitle style={{color: "white", height: "176px", background:
        'url(https://upload.bitfeed.co/5daa9c4e4f784-cowboy-bebop-spike) center / cover'}}>Google Books Search App</CardTitle>
      <CardText>
        An App for searching the google books api, displays the results, and allows the user to save results to a reading list.
      </CardText>
      <CardActions border>
        <Button href="https://github.com/Spencedesu/Google_Book_SearchHW21"colored target="_blank">Github</Button>
        <Button colored>Deployed App</Button>
      </CardActions>
      <CardMenu style={{color: "#fff"}}>
        <IconButton name="share"/>
      </CardMenu>
      </Card>

      <Card shadow={5} style={{minWidth: "450", margin: "auto"}}>
      <CardTitle style={{color: "white", height: "176px", background:
      'url(https://www.rd.com/wp-content/uploads/2019/12/book-e1576790089347.jpg) center / cover'}}>Google Books Search App</CardTitle>
    <CardText>
      An App for searching the google books api, displays the results, and allows the user to save results to a reading list.
    </CardText>
    <CardActions border>
      <Button href="https://github.com/Spencedesu/Google_Book_SearchHW21"colored target="_blank">Github</Button>
      <Button colored>Deployed App</Button>
    </CardActions>
    <CardMenu style={{color: "#fff"}}>
      <IconButton name="share"/>
    </CardMenu>
    </Card>

    <Card shadow={5} style={{minWidth: "450", margin: "auto"}}>
    <CardTitle style={{color: "white", height: "176px", background:
    'url(https://www.rd.com/wp-content/uploads/2019/12/book-e1576790089347.jpg) center / cover'}}>Google Books Search App</CardTitle>
  <CardText>
    An App for searching the google books api, displays the results, and allows the user to save results to a reading list.
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
        'url(https://media3.s-nbcnews.com/j/newscms/2019_33/2203981/171026-better-coffee-boost-se-329p_67dfb6820f7d3898b5486975903c2e51.fit-760w.jpg) center / cover'}}>Google Books Search App</CardTitle>
      <CardText>
        An App for searching the google books api, displays the results, and allows the user to save results to a reading list.
      </CardText>
      <CardActions border>
        <Button href="https://github.com/Spencedesu/Google_Book_SearchHW21"colored target="_blank">Github</Button>
        <Button colored>Deployed App</Button>
      </CardActions>
      <CardMenu style={{color: "#fff"}}>
        <IconButton name="share"/>
      </CardMenu>
      </Card>

      <Card shadow={5} style={{minWidth: "450", margin: "auto"}}>
      <CardTitle style={{color: "white", height: "176px", background:
      'url(https://www.rd.com/wp-content/uploads/2019/12/book-e1576790089347.jpg) center / cover'}}>Google Books Search App</CardTitle>
    <CardText>
      An App for searching the google books api, displays the results, and allows the user to save results to a reading list.
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
  }
}
  render() {
    return (
    <div className="category-tabs">
      <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId})} ripple>
        <Tab>React</Tab>
        <Tab>MongoDB</Tab>
        <Tab>Javascript</Tab>
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