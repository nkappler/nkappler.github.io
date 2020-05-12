// import * as React from "react";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { IContribution, IMethod, IParameter, IWebComponent } from "./types";

const emptyContribution: IContribution = {
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

interface UIState {
    view: "ui" | "raw";
    section: "main" | "webcomponents" | "properties" | "events" | "methods";
    contribution: IContribution;
}

type StateHandler = React.Dispatch<React.SetStateAction<Partial<UIState>>>;

const Container = (props: { contribution?: IContribution }) => {
    const initialState: UIState = {
        view: "ui",
        section: "main",
        contribution: props.contribution || emptyContribution
    };

    const stateValue = React.useState(initialState);
    const state = stateValue[0];
    const setState = (newState: Partial<UIState>) => {
        stateValue[1]({
            ...state,
            ...newState
        });
    };

    return (<div style={{ width: "100%", height: "100%", display: "flex", position: "absolute", flexDirection: "column" }} >
        <Header statehandler={setState} />
        {state.view === "ui" ?
            (<div style={{ width: "100%", flexGrow: 1, display: "flex", height: 0 }}>
                <Menu statehandler={setState} />
                {(() => {
                    switch (state.section) {
                        case "main":
                            return (<MainSettings contribution={state.contribution} />);
                        case "events":
                            return <EventSettings contribution={state.contribution} />;
                        case "properties":
                            return <PropertySettings contribution={state.contribution} />;
                        case "webcomponents":
                            return <WebComponentSettings contribution={state.contribution} />;
                        case "methods":
                            return <MethodSettings contribution={state.contribution} />;

                        default:
                            return <ScrollContainer />;
                            break;
                    }
                })()}
                <Info />
            </div>)
            :
            (<textarea style={{ flexGrow: 1, height: 0, overflowY: "scroll" }}>
                {JSON.stringify(state.contribution, null, 4)}
            </textarea>)}
        <div style={{ display: "flex", justifyContent: "flex-end", borderTop: "1px solid #999", padding: "5px" }}><button>Save</button></div>
    </div >);
};

const Header = (props: { statehandler: StateHandler }) =>
    (<div style={{ width: "100%", background: "#eeeeff" }}>
        <button onClick={() => props.statehandler({ view: "ui" })}>Form</button>
        <button onClick={() => props.statehandler({ view: "raw" })}>RAW</button>
    </div>);

class Menu extends React.Component<{ statehandler: StateHandler }, {}> {

    public render() {
        return (<div style={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
            width: "200px",
            background: "#f5f5ff"
        }}>
            <MenuButton onClick={() => this.props.statehandler({ section: "main" })}>Main Settings</MenuButton>
            <MenuButton onClick={() => this.props.statehandler({ section: "webcomponents" })}>Web Components</MenuButton>
            <MenuButton onClick={() => this.props.statehandler({ section: "properties" })}>Properties</MenuButton>
            <MenuButton onClick={() => this.props.statehandler({ section: "events" })}>Events</MenuButton>
            <MenuButton onClick={() => this.props.statehandler({ section: "methods" })}>Methods</MenuButton>
        </div>);
    }
}

const MenuButton = (props: any) =>
    (<button style={{ padding: 5, background: "#ddddee", border: "none", cursor: "pointer" }} onClick={props.onClick}>{...props.children}</button>);

const TextInput = (props: any) =>
    (<div style={{ display: "flex", margin: "2px 0" }}>
        <label style={{ flex: 1 }}>{props.label + ":"}</label>
        <input style={{ flex: 1 }} onChange={props.onChange} value={props.value} />
    </div>);

class Info extends React.Component<{}, {}> {
    public render() {
        return (<div style={{ width: 200, height: "100%", background: "#ffffee" }}><h1>Info</h1></div>);
    }
}

const MainSettings = (props: Pick<UIState, "contribution">) =>
    (<ScrollContainer>
        <h1>Main Settings</h1>
        <TextInput label="Name" value={props.contribution.name} />
        <TextInput label="Description" value={props.contribution.description} />
        <TextInput label="Icon" value={props.contribution.icon} />
        <TextInput label="ID" value={props.contribution.id} />
        <TextInput label="New Instance Prefix" value={props.contribution.newInstancePrefix} />
        <TextInput label="Eula" value={props.contribution.eula} />
        <TextInput label="Vendor" value={props.contribution.vendor} />
        <TextInput label="Version" value={props.contribution.version} />
        <TextInput label="License" value={props.contribution.license} />
    </ScrollContainer>);

const WebComponentItem = (props: { webcomponent: IWebComponent }) =>
    (<div style={{ display: "flex", flexDirection: "column", marginBottom: 30 }}>
        <span>Kind:</span><KindSelector value={props.webcomponent.kind} />
        <TextInput label="Tag" value={props.webcomponent.tag} />
        <TextInput label="URL" value={props.webcomponent.url} />
        <TextInput label="Integrity Hash" value={props.webcomponent.integrity} />
        <TextInput label="Disable Integrity Check" value={props.webcomponent.ignoreIntegrity} />
        <TextInput label="Type" value={props.webcomponent.type} />
    </div>);

const WebComponentSettings = (props: Pick<UIState, "contribution">) =>
    (<ScrollContainer>
        <h1>Web Components</h1>
        {props.contribution.webcomponents.map(wc => <WebComponentItem webcomponent={wc} />)}
        <button>Add Webcomponent</button>
    </ScrollContainer>);


const ScrollContainer = (props: any) =>
    (<div style={{ width: "100%", height: "100%", overflowY: "scroll", padding: 5, boxSizing: "border-box" }}>{...props.children}</div>);


const EventItem = (props: { name: string, description: string }) =>
    (<div style={{ display: "flex" }}>
        <input style={{ flex: 1 }} defaultValue={props.name} />
        <input style={{ flex: 2 }} defaultValue={props.description} />
    </div>);

const EventSettings = (props: Pick<UIState, "contribution">) => {
    const events = props.contribution.events;
    return (<ScrollContainer>
        <h1>Events</h1>
        <div style={{ display: "flex", fontWeight: "bold" }}>
            <span style={{ flex: 1 }}>Name</span>
            <span style={{ flex: 2 }}>Description</span>
        </div>
        {Object.keys(events).map(event =>
            (<EventItem name={event} description={events[event].description} />))}
        <button>Add Event</button>
    </ScrollContainer>);
};

const TypeSelector = () =>
    (<select>
        <option>String</option>
        <option>Number</option>
        <option>Boolean</option>
        <option>etc.</option>
    </select>);

const KindSelector = (props: any) =>
    (<select value={props.value}>
        <option>main</option>
        <option>styling</option>
        <option>builder</option>
    </select>);

const PropertyItem = (props: { name: string, type: string }) =>
    (<div style={{ display: "flex" }}>
        <input defaultValue={props.name} />
        <TypeSelector />
        <input type="checkbox" />
    </div>);

const PropertySettings = (props: Pick<UIState, "contribution">) => {
    const properties = props.contribution.properties;
    return (<ScrollContainer>
        <h1>Properties</h1>
        <div style={{ display: "flex", fontWeight: "bold" }}>
            <span>Name</span>
            <span>Description</span>
            <span>is Array</span>
        </div>
        {Object.keys(properties).map(property =>
            (<PropertyItem name={property} type={properties[property].type} />))}
        <button>Add Property</button>
    </ScrollContainer>);
};

const strinigfyParam = (p: IParameter) =>
    `${p.name}: ${p.type} ${p.description ? ("/** " + p.description + " */") : ""}`;

const MethodItem = (props: { method: IMethod, name: string }) =>
    (<div style={{ display: "flex", flexDirection: "column", width: "100%", marginBottom: 30 }}>
        <span>{"/** " + props.method.description + " */"}</span>
        <span>{`function ${props.name}(${
            props.method.parameters.map(p => strinigfyParam(p)).join(", ")
            }) {`}</span>
        <textarea>{props.method.body}</textarea>
        <span>{"}"}</span>
    </div>);

const MethodSettings = (props: Pick<UIState, "contribution">) => {
    const methods = props.contribution.methods;
    return (<ScrollContainer>
        <h1>Methods</h1>
        {Object.keys(methods).map(m => <MethodItem method={methods[m]} name={m} />)}
        <button>Add Method</button>
    </ScrollContainer>);
};

ReactDOM.render(<Container />, document.getElementById("root"));
