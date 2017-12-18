import React from "react";

const Topic = ( props ) => {
    return (
        <li>
            <a href={ props.href }>
                <span className="thumb" style={ { backgroundPosition: props.rule } } />
                <span className="topicName">{ props.name }</span>
            </a>
        </li>
    );
};

export default Topic;
