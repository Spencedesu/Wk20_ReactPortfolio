import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content} from "react-mdl";
//import Main from "./components/Main";
import {Link} from "react-router-dom";
import Main from "./components/Main"

function App() {
  return (
    <div className="demo-big-content">
    <Layout>
        <Header title="Spencer Purcell" scroll>
            <Navigation>
                <Link to="/resume">Resume</Link>
                <Link to="/about">About</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer title="Spencer's Portfolio">
            <Navigation>
                <Link to="/">MainPage</Link>
                <Link to="/about">About</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>
  );
}

export default App;