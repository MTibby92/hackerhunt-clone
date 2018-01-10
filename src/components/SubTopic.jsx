import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Link,
} from "react-router-dom";

const SubTopic = props => (
    <Link to={ props.to } className="subTopicNav">
        <span className="thumb" style={ { backgroundPosition: props.rule } } />
        <span className="topicName">{ props.label }</span>
    </Link>
);

export default SubTopic;
