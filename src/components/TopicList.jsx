import React from "react";
import Topic from "./Topic";
import icon from "../icons-001@2x.png";

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
                },
                {
                    href: "/topic/database/trending",
                    name: "Databases",
                    rule: "-231px 0px",
                },
                {
                    href: "/topic/api/trending",
                    name: "Apis",
                    rule: "-198px 0px",
                },
                {
                    href: "/topic/library/trending",
                    name: "Libraries",
                    rule: "-66px 0px",
                },
            ],
        },
        {
            href: "/",
            name: "System",
            rule: "-577px 0px",
        },
        {
            href: "/",
            name: "Tools",
            rule: "-594px 0px",
        },
        {
            href: "/",
            name: "Data science",
            rule: "-429px 0px",
        },
        {
            href: "/",
            name: "Blockchain",
            rule: "-379px 0px",
        },
        {
            href: "/",
            name: "Mobile",
            rule: "-478px 0px",
        },
        {
            href: "/",
            name: "Awesome lists",
            rule: "-462px 0px",
        },
        {
            href: "/",
            name: "Social",
            rule: "-363px 0px",
        },
        {
            href: "/",
            name: "Visual",
            rule: "0px 0px",
        },
        {
            href: "/",
            name: "Open source",
            rule: "-165px 0px",
        },
        {
            href: "/",
            name: "All topics",
            rule: "-313px 0px",
        },
    ];
    return (
        <aside id="topicsContainer">
            <h3>Topics</h3>
            <ul id="topicsList">
                {topics.map( ( topic, i ) =>
                    <Topic key={ i } href={ topic.href } name={ topic.name } rule={ topic.rule } /> )}
            </ul>
        </aside>
    );
}

export default TopicList;
