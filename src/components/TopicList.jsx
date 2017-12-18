import React from "react";
import Topic from "./Topic";
import icon from "../icons-001@2x.png";

const TopicList = () => (
    <aside id="topicsContainer">
        <h3>Topics</h3>
        <ul>
            <Topic href="/" name="Development" rule="-247px 0px" />
            <Topic href="/" name="System" rule="-577px 0px" />
            <Topic href="/" name="Tools" rule="-594px 0px" />
            <Topic href="/" name="Data science" rule="-429px 0px" />
            <Topic href="/" name="Blockchain" rule="-379px 0px" />
            <Topic href="/" name="Mobile" rule="-478px 0px" />
            <Topic href="/" name="Awesome lists" rule="-462px 0px" />
            <Topic href="/" name="Social" rule="-363px 0px" />
            <Topic href="/" name="Visual" rule="0px 0px" />
            <Topic href="/" name="Open source" rule="-165px 0px" />
            <Topic href="/" name="All topics" rule="-313px 0px" />
        </ul>
    </aside>
);

export default TopicList;
