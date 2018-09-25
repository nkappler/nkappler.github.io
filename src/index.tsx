import * as React from "react";
import * as ReactDOM from "react-dom";

window.onload = function () {
    if (document.location.href.indexOf("?sent") > 0) {
        document.getElementById("sent").style.display = "block";
    }
};

ReactDOM.render(
    <div className="splitter">
        <div className="item">
            <h1>Stay tuned!</h1>
            <img src="./dist/img/tired.png" />
            <p>This website will be ready soon...</p>
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
