/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
      <div className="demo-big-content">
          <Layout>
              <Header className="header-color" title="Tanner Nielsen" scroll>
                  <Navigation>
                      <a href="/">Home</a>
                      <a href="/projects">Projects</a>
                      <a href="/resume">Resume</a>
                      <a href="/bio-contact">Bio/Contact</a>
                  </Navigation>
              </Header>
              <Drawer title="Menu">
                  <Navigation>
                      <a href="/">Home</a>
                      <a href="/projects">Projects</a>
                      <a href="/resume">Resume</a>
                      <a href="/bio-contact">Bio/Contact</a>
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