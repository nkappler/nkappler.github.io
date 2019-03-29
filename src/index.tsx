import * as React from "react";
import * as ReactDOM from "react-dom";
import "./styles/index.less";

window.onload = function () {
    if (document.location.href.indexOf("?sent") > 0) {
        document.getElementById("sent").style.display = "block";
    }
};

ReactDOM.render(
    <div className="splitter">
        <div className="item">
            <h1>Hi there!</h1>
            <p>
                This website is still under construction.<br />
                However, there's already a bunch to discover =)<br />
                Until the rest of the website is finished, why don't you have a look at my <span onClick={() => (window as any).sidebar.open()} style={{
                    fontWeight: "bold",
                    cursor: "pointer"
                }}>Projects?</span>
            </p>
        </div>
        <div className="item">
            <h2>Contact me</h2>
            <form action="https://formspree.io/nikolaj-kappler@web.de" method="POST">
                <input type="text" name="name" placeholder="Your name" required />
                <input type="email" name="_replyto" placeholder="Your email" required />
                <textarea name="message" rows={7} placeholder="Your message" required></textarea>
                <input type="hidden" name="_subject" value="New message from website!" />
                <input type="hidden" name="_next" value="nkappler.github.io?sent" />
                <input type="text" name="_gotcha" style={{ display: "none" }} />
                <input type="submit" value="Send" />
            </form>
            <p id="sent" style={{ display: "none" }}>Thank you. Your message has been sent.</p>
        </div>
    </div>
    , document.getElementById("root"));
