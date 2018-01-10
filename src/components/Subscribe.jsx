import React from "react";

const Subscribe = () => (
    <div id="subscribeContainer">
        <h1>Get high on categorized<br />Show HN submissions</h1>
        <p>We know the struggle. A lot of great stuff on Hacker News gets lost in the /shownew limbo.</p>
        <p>Get the weekly top Show HN picks in your inbox!</p>
        <form>
            <input type="email" placeholder="Your e-mail" value="" />
            <input type="submit" value="Subscribe" />
        </form>
        <p>Prouldly brought to you by <a href="/" style={ { color: "#f60" } }>Finch.io</a></p>
    </div>
);

export default Subscribe;
