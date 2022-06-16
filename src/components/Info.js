import React from "react";
import avatar from "../img/avatar.jpg"

export default function Info() {
    return (
        <section className="info--container">
            <img src={avatar} alt="avatar" className="info--avatar" />
            <div className="info--wrapper">
                <h1>Dusan Mitic</h1>
                <h3>Frontend wannabe</h3>
                <a href="#">dummy.wabsite</a>
            </div>
            <button>Email</button>
        </section>
    )
}