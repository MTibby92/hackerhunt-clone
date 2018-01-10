import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Link,
} from "react-router-dom";
import Topic from "./Topic";

const TopicList = () => {
    const topics = [
        {
            href: "/topic/development/trending",
            name: "Development",
            rule: "-247px 0px",
            subTopics: [
                {
                    href: "/topic/devops/trending",
                    name: "Devops",
                    rule: "-445px 0px",
                    parent: "/topic/development/trending",
                },
                {
                    href: "/topic/database/trending",
                    name: "Databases",
                    rule: "-231px 0px",
                    parent: "/topic/development/trending",
                },
                {
                    href: "/topic/api/trending",
                    name: "Apis",
                    rule: "-198px 0px",
                    parent: "/topic/development/trending",
                },
                {
                    href: "/topic/library/trending",
                    name: "Libraries",
                    rule: "-66px 0px",
                    parent: "/topic/development/trending",
                },
            ],
        },
        {
            href: "/topic/system/trending",
            name: "System",
            rule: "-577px 0px",
            subTopics: [
                {
                    href: "/topic/security/trending",
                    name: "Security",
                    rule: "-544px 0px",
                    parent: "/topic/system/trending",
                },
                {
                    href: "/topic/cloud/trending",
                    name: "Cloud",
                    rule: "-412px 0px",
                    parent: "/topic/system/trending",
                },
                {
                    href: "/topic/apple/trending",
                    name: "Apple",
                    rule: "-33px 0px",
                    parent: "/topic/system/trending",
                },
            ],
        },
        {
            href: "/topic/tools/trending",
            name: "Tools",
            rule: "-594px 0px",
            subTopics: [
                {
                    href: "/topic/productivity/trending",
                    name: "Productivity",
                    rule: "-528px 0px",
                    parent: "/topic/tools/trending",
                },
            ],
        },
        {
            href: "/topic/data-science/trending",
            name: "Data science",
            rule: "-429px 0px",
            subTopics: [],
        },
        {
            href: "/topic/blockchain/trending",
            name: "Blockchain",
            rule: "-379px 0px",
            subTopics: [],
        },
        {
            href: "/topic/mobile/trending",
            name: "Mobile",
            rule: "-478px 0px",
            subTopics: [],
        },
        {
            href: "/topic/list/trending",
            name: "Awesome lists",
            rule: "-462px 0px",
            subTopics: [],
        },
        {
            href: "/topic/social/trending",
            name: "Social",
            rule: "-363px 0px",
            subTopics: [],
        },
        {
            href: "/topic/visual/trending",
            name: "Visual",
            rule: "0px 0px",
            subTopics: [],
        },
        {
            href: "/topic/open-source/trending",
            name: "Open source",
            rule: "-165px 0px",
            subTopics: [
                {
                    href: "/topic/c/trending",
                    name: "C",
                    rule: "-82px 0px",
                    parent: "/topic/open-source/trending",
                },
                {
                    href: "/topic/javascript/trending",
                    name: "Javascript",
                    rule: "-148px 0px",
                    parent: "/topic/open-source/trending",
                },
                {
                    href: "/topic/go/trending",
                    name: "Go",
                    rule: "-99px 0px",
                    parent: "/topic/open-source/trending",
                },
                {
                    href: "/topic/ruby/trending",
                    name: "Ruby",
                    rule: "-132px 0px",
                    parent: "/topic/open-source/trending",
                },
                {
                    href: "/topic/python/trending",
                    name: "Python",
                    rule: "-115px 0px",
                    parent: "/topic/open-source/trending",
                },
            ],
        },
        {
            href: "/topics",
            name: "All topics",
            rule: "-313px 0px",
            subTopics: [],
        },
    ];
    return (
        <aside id="topicsContainer">
            <h3>Topics</h3>
            <ul id="topicsList">
                {topics.map( ( topic, i ) => (
                    <Topic
                        key={ i }
                        to={ topic.href }
                        label={ topic.name }
                        rule={ topic.rule }
                        subs= { topic.subTopics }
                    /> ) )
                }
            </ul>
        </aside>
    );
};

export default TopicList;
