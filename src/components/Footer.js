import React from "react";
import twittericon from "../img/twitter.png"


export default function Footer() {
    return (
        <section className="footer--container">
            <img src={twittericon} />
            <a href="#">Visit me on twitter..</a>
        </section>
    )
}