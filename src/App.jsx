import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Route,
    Link
} from "react-router-dom";
import logo from "./logo.svg";
import Header from "./components/Header";
import TopicList from "./components/TopicList";
import Content from "./components/Content";
import Subscribe from "./components/Subscribe";
import "./App.css";

const App = () => (
    <Router>
        <div className="App">
            <Header />
            <TopicList />
            <Content />
            <Subscribe />
        </div>
    </Router>
);

export default App;
