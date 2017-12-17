import React, { Component } from "react";
import logo from "./logo.svg";
import Header from "./components/Header";
import Topics from "./components/Topics";
import Content from "./components/Content";
import Subscribe from "./components/Subscribe";
import "./App.css";

const App = () => (
    <div className="App">
        <Header />
        <Topics />
        <Content />
        <Subscribe />
    </div>
);

export default App;
