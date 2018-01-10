import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Link,
} from "react-router-dom";
import SubTopic from "./SubTopic";

const Topic = props => (
    <div>
        <Link to={ props.to } >
            <span className="thumb" style={ { backgroundPosition: props.rule } } />
            <span className="topicName">{ props.label }</span>
        </Link>
        { props.subs ? props.subs.map( sub => (
            <Route
                exact
                path={ sub.parent } 
                render={ (props) => {
                    return (
                        <SubTopic 
                            { ...props }
                            to={ sub.href }
                            label={ sub.name }
                            rule={ sub.rule }
                        />)
                 } } 
            />
        ) ) : "" }
    </div>
);

export default Topic;
