"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
// import * as React from "react";
var React = require("react");
var ReactDOM = require("react-dom");
var emptyContribution = {
    "id": "com.sap.sample.coloredbox",
    "version": "1.0.0",
    "name": "Colored Box",
    "description": "A colored box",
    "newInstancePrefix": "ColoredBox",
    "icon": "https://github.wdf.sap.corp/pages/d023588/orca_customWidget_samples/coloredbox/icon.png",
    "vendor": "SAP",
    "eula": "",
    "license": "",
    "webcomponents": [
        {
            "kind": "main",
            "tag": "com-sap-sample-coloredbox",
            "url": "https://github.wdf.sap.corp/pages/d023588/orca_customWidget_samples/coloredbox/coloredbox.js",
            "integrity": "sha256-a5CRD2vEK7INwc2pF5TujtelYJ0yzvoRokxDijYg34A=",
            "ignoreIntegrity": true
        },
        {
            "kind": "styling",
            "tag": "com-sap-sample-coloredbox-sps",
            "url": "https://github.wdf.sap.corp/pages/d023588/orca_customWidget_samples/coloredbox/coloredbox_sps.js",
            "integrity": "sha256-5qfHAvm1tjmCCUYGtPypV9p98BZaQYz+M1OnowG9Be0=",
            "ignoreIntegrity": true
        }
    ],
    "properties": {
        "color": {
            "type": "string",
            "description": "Background color",
            "default": "red"
        },
        "width": {
            "type": "integer",
            "default": 100
        },
        "height": {
            "type": "integer",
            "default": 100
        }
    },
    "methods": {
        "setColor": {
            "description": "Sets the background color.",
            "parameters": [
                {
                    "name": "newColor",
                    "type": "string",
                    "description": "The new background color"
                }
            ],
            "body": "this.color = newColor;"
        },
        "getColor": {
            "returnType": "string",
            "description": "Returns the background color.",
            "parameters": [],
            "body": "return this.color;"
        }
    },
    "events": {
        "onClick": {
            "description": "Called when the user clicks the Colored Box."
        }
    }
};
var Container = function (props) {
    var initialState = {
        view: "ui",
        section: "main",
        contribution: props.contribution || emptyContribution
    };
    var stateValue = React.useState(initialState);
    var state = stateValue[0];
    var setState = function (newState) {
        stateValue[1](__assign(__assign({}, state), newState));
    };
    return (React.createElement("div", { style: { width: "100%", height: "100%", display: "flex", position: "absolute", flexDirection: "column" } },
        React.createElement(Header, { statehandler: setState }),
        state.view === "ui" ?
            (React.createElement("div", { style: { width: "100%", flexGrow: 1, display: "flex", height: 0 } },
                React.createElement(Menu, { statehandler: setState }),
                (function () {
                    switch (state.section) {
                        case "main":
                            return (React.createElement(MainSettings, { contribution: state.contribution }));
                        case "events":
                            return React.createElement(EventSettings, { contribution: state.contribution });
                        case "properties":
                            return React.createElement(PropertySettings, { contribution: state.contribution });
                        case "webcomponents":
                            return React.createElement(WebComponentSettings, { contribution: state.contribution });
                        case "methods":
                            return React.createElement(MethodSettings, { contribution: state.contribution });
                        default:
                            return React.createElement(ScrollContainer, null);
                            break;
                    }
                })(),
                React.createElement(Info, null)))
            :
                (React.createElement("textarea", { style: { flexGrow: 1, height: 0, overflowY: "scroll" } }, JSON.stringify(state.contribution, null, 4))),
        React.createElement("div", { style: { display: "flex", justifyContent: "flex-end", borderTop: "1px solid #999", padding: "5px" } },
            React.createElement("button", null, "Save"))));
};
var Header = function (props) {
    return (React.createElement("div", { style: { width: "100%", background: "#eeeeff" } },
        React.createElement("button", { onClick: function () { return props.statehandler({ view: "ui" }); } }, "Form"),
        React.createElement("button", { onClick: function () { return props.statehandler({ view: "raw" }); } }, "RAW")));
};
var Menu = /** @class */ (function (_super) {
    __extends(Menu, _super);
    function Menu() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Menu.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { style: {
                display: "flex",
                flexDirection: "column",
                height: "100%",
                width: "200px",
                background: "#f5f5ff"
            } },
            React.createElement(MenuButton, { onClick: function () { return _this.props.statehandler({ section: "main" }); } }, "Main Settings"),
            React.createElement(MenuButton, { onClick: function () { return _this.props.statehandler({ section: "webcomponents" }); } }, "Web Components"),
            React.createElement(MenuButton, { onClick: function () { return _this.props.statehandler({ section: "properties" }); } }, "Properties"),
            React.createElement(MenuButton, { onClick: function () { return _this.props.statehandler({ section: "events" }); } }, "Events"),
            React.createElement(MenuButton, { onClick: function () { return _this.props.statehandler({ section: "methods" }); } }, "Methods")));
    };
    return Menu;
}(React.Component));
var MenuButton = function (props) {
    return (React.createElement("button", { style: { padding: 5, background: "#ddddee", border: "none", cursor: "pointer" }, onClick: props.onClick }, props.children));
};
var TextInput = function (props) {
    return (React.createElement("div", { style: { display: "flex", margin: "2px 0" } },
        React.createElement("label", { style: { flex: 1 } }, props.label + ":"),
        React.createElement("input", { style: { flex: 1 }, onChange: props.onChange, value: props.value })));
};
var Info = /** @class */ (function (_super) {
    __extends(Info, _super);
    function Info() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Info.prototype.render = function () {
        return (React.createElement("div", { style: { width: 200, height: "100%", background: "#ffffee" } },
            React.createElement("h1", null, "Info")));
    };
    return Info;
}(React.Component));
var MainSettings = function (props) {
    return (React.createElement(ScrollContainer, null,
        React.createElement("h1", null, "Main Settings"),
        React.createElement(TextInput, { label: "Name", value: props.contribution.name }),
        React.createElement(TextInput, { label: "Description", value: props.contribution.description }),
        React.createElement(TextInput, { label: "Icon", value: props.contribution.icon }),
        React.createElement(TextInput, { label: "ID", value: props.contribution.id }),
        React.createElement(TextInput, { label: "New Instance Prefix", value: props.contribution.newInstancePrefix }),
        React.createElement(TextInput, { label: "Eula", value: props.contribution.eula }),
        React.createElement(TextInput, { label: "Vendor", value: props.contribution.vendor }),
        React.createElement(TextInput, { label: "Version", value: props.contribution.version }),
        React.createElement(TextInput, { label: "License", value: props.contribution.license })));
};
var WebComponentItem = function (props) {
    return (React.createElement("div", { style: { display: "flex", flexDirection: "column", marginBottom: 30 } },
        React.createElement("span", null, "Kind:"),
        React.createElement(KindSelector, { value: props.webcomponent.kind }),
        React.createElement(TextInput, { label: "Tag", value: props.webcomponent.tag }),
        React.createElement(TextInput, { label: "URL", value: props.webcomponent.url }),
        React.createElement(TextInput, { label: "Integrity Hash", value: props.webcomponent.integrity }),
        React.createElement(TextInput, { label: "Disable Integrity Check", value: props.webcomponent.ignoreIntegrity }),
        React.createElement(TextInput, { label: "Type", value: props.webcomponent.type })));
};
var WebComponentSettings = function (props) {
    return (React.createElement(ScrollContainer, null,
        React.createElement("h1", null, "Web Components"),
        props.contribution.webcomponents.map(function (wc) { return React.createElement(WebComponentItem, { webcomponent: wc }); }),
        React.createElement("button", null, "Add Webcomponent")));
};
var ScrollContainer = function (props) {
    return (React.createElement("div", { style: { width: "100%", height: "100%", overflowY: "scroll", padding: 5, boxSizing: "border-box" } }, props.children));
};
var EventItem = function (props) {
    return (React.createElement("div", { style: { display: "flex" } },
        React.createElement("input", { style: { flex: 1 }, defaultValue: props.name }),
        React.createElement("input", { style: { flex: 2 }, defaultValue: props.description })));
};
var EventSettings = function (props) {
    var events = props.contribution.events;
    return (React.createElement(ScrollContainer, null,
        React.createElement("h1", null, "Events"),
        React.createElement("div", { style: { display: "flex", fontWeight: "bold" } },
            React.createElement("span", { style: { flex: 1 } }, "Name"),
            React.createElement("span", { style: { flex: 2 } }, "Description")),
        Object.keys(events).map(function (event) {
            return (React.createElement(EventItem, { name: event, description: events[event].description }));
        }),
        React.createElement("button", null, "Add Event")));
};
var TypeSelector = function () {
    return (React.createElement("select", null,
        React.createElement("option", null, "String"),
        React.createElement("option", null, "Number"),
        React.createElement("option", null, "Boolean"),
        React.createElement("option", null, "etc.")));
};
var KindSelector = function (props) {
    return (React.createElement("select", { value: props.value },
        React.createElement("option", null, "main"),
        React.createElement("option", null, "styling"),
        React.createElement("option", null, "builder")));
};
var PropertyItem = function (props) {
    return (React.createElement("div", { style: { display: "flex" } },
        React.createElement("input", { defaultValue: props.name }),
        React.createElement(TypeSelector, null),
        React.createElement("input", { type: "checkbox" })));
};
var PropertySettings = function (props) {
    var properties = props.contribution.properties;
    return (React.createElement(ScrollContainer, null,
        React.createElement("h1", null, "Properties"),
        React.createElement("div", { style: { display: "flex", fontWeight: "bold" } },
            React.createElement("span", null, "Name"),
            React.createElement("span", null, "Description"),
            React.createElement("span", null, "is Array")),
        Object.keys(properties).map(function (property) {
            return (React.createElement(PropertyItem, { name: property, type: properties[property].type }));
        }),
        React.createElement("button", null, "Add Property")));
};
var strinigfyParam = function (p) {
    return p.name + ": " + p.type + " " + (p.description ? ("/** " + p.description + " */") : "");
};
var MethodItem = function (props) {
    return (React.createElement("div", { style: { display: "flex", flexDirection: "column", width: "100%", marginBottom: 30 } },
        React.createElement("span", null, "/** " + props.method.description + " */"),
        React.createElement("span", null, "function " + props.name + "(" + props.method.parameters.map(function (p) { return strinigfyParam(p); }).join(", ") + ") {"),
        React.createElement("textarea", null, props.method.body),
        React.createElement("span", null, "}")));
};
var MethodSettings = function (props) {
    var methods = props.contribution.methods;
    return (React.createElement(ScrollContainer, null,
        React.createElement("h1", null, "Methods"),
        Object.keys(methods).map(function (m) { return React.createElement(MethodItem, { method: methods[m], name: m }); }),
        React.createElement("button", null, "Add Method")));
};
ReactDOM.render(React.createElement(Container, null), document.getElementById("root"));
//# sourceMappingURL=index.js.map