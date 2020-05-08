"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ReactDOM = require("react-dom");
require("./styles/index.less");
window.onload = function () {
    if (document.location.href.indexOf("?sent") > 0) {
        document.getElementById("sent").style.display = "block";
    }
};
ReactDOM.render(React.createElement("div", { className: "splitter" },
    React.createElement("div", { className: "item" },
        React.createElement("h1", null, "Hi there!"),
        React.createElement("p", null,
            "This website is still under construction.",
            React.createElement("br", null),
            "However, there's already a bunch to discover =)",
            React.createElement("br", null),
            "Until the rest of the website is finished, why don't you have a look at my ",
            React.createElement("span", { onClick: function () { return window.sidebar.open(); }, style: {
                    fontWeight: "bold",
                    cursor: "pointer"
                } }, "Projects?"))),
    React.createElement("div", { className: "item" },
        React.createElement("h2", null, "Contact me"),
        React.createElement("form", { action: "https://formspree.io/nikolaj-kappler@web.de", method: "POST" },
            React.createElement("input", { type: "text", name: "name", placeholder: "Your name", required: true }),
            React.createElement("input", { type: "email", name: "_replyto", placeholder: "Your email", required: true }),
            React.createElement("textarea", { name: "message", rows: 7, placeholder: "Your message", required: true }),
            React.createElement("input", { type: "hidden", name: "_subject", value: "New message from website!" }),
            React.createElement("input", { type: "hidden", name: "_next", value: "nkappler.github.io?sent" }),
            React.createElement("input", { type: "text", name: "_gotcha", style: { display: "none" } }),
            React.createElement("input", { type: "submit", value: "Send" })),
        React.createElement("p", { id: "sent", style: { display: "none" } }, "Thank you. Your message has been sent."))), document.getElementById("root"));
//# sourceMappingURL=index.js.map