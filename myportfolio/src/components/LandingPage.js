import React, { Component} from "react";
import {Cell, Grid} from "react-mdl";


class LandingPage extends Component{
  render() {
    return (
    <div style ={{width:"100%", margin: "auto"}}>
      <Grid className="landing-grid">
        <Cell col={12}>
        <img
            className="bitmoji"
             src="https://sdk.bitmoji.com/render/panel/6ce76d26-9c7a-4fd2-8675-f5d4225363d6-3d139a7d-1957-466d-91a8-73b8eca8218b-v1.png?transparent=1&palette=1" alt="spencerBitmoji"
            />
        </Cell>

      </Grid>
    </div>
    )}
}

export default LandingPage;