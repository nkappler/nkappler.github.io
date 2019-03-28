import { SidebarElement } from 'sidebarjs';

const attachMenu = () => {
    if (document.readyState !== "complete") { return; }

    // document.createElement


    const container = document.createElement("div");
    container.setAttribute("sidebarjs", undefined);
    document.body.appendChild(container);

    // tslint:disable-next-line: no-unused-expression
    const sidebar = new SidebarElement();

    sidebar.open();
};

document.readyState === "complete" ? attachMenu() : document.addEventListener("readystatechange", attachMenu);




