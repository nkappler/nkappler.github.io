import { SidebarElement } from 'sidebarjs';

const attachMenu = () => {
  if (document.readyState !== "complete") { return; }

  const container = document.createElement("div");
  container.setAttribute("sidebarjs", "");

  const styles = `[sidebarjs-backdrop],[sidebarjs]{height:100%;left:0;top:0;width:100%}.sidebarjs--left[sidebarjs],[sidebarjs].sidebarjs--left [sidebarjs-container]{-webkit-transform:translate(-100%);transform:translate(-100%)}.sidebarjs--right[sidebarjs],[sidebarjs].sidebarjs--right [sidebarjs-container]{-webkit-transform:translate(100%);transform:translate(100%)}[sidebarjs].sidebarjs--left [sidebarjs-container]{-webkit-box-shadow:2px 0 4px rgba(0,0,0,.2);box-shadow:2px 0 4px rgba(0,0,0,.2)}[sidebarjs].sidebarjs--right [sidebarjs-container]{-webkit-box-shadow:-2px 0 4px rgba(0,0,0,.2);box-shadow:-2px 0 4px rgba(0,0,0,.2);margin-left:auto}[sidebarjs-backdrop]{-webkit-transition:opacity .3s ease;background:#000;opacity:0;position:absolute;transition:opacity .3s ease;will-change:opacity}[sidebarjs-container]{-ms-flex-direction:column;-webkit-box-direction:normal;-webkit-box-orient:vertical;-webkit-transition:-webkit-transform .3s ease;background:#fff;display:-webkit-box;display:-ms-flexbox;display:flex;flex-direction:column;height:100%;max-width:300px;position:relative;transition:-webkit-transform .3s ease;transition:transform .3s ease;transition:transform .3s ease,-webkit-transform .3s ease;width:90%;will-change:transform;z-index:1}[sidebarjs]{-webkit-transition:-webkit-transform 0s ease .3s;position:fixed;transition:-webkit-transform 0s ease .3s;transition:transform 0s ease .3s;transition:transform 0s ease .3s,-webkit-transform 0s ease .3s;z-index:9999}[sidebarjs].sidebarjs--is-visible{-webkit-transition:-webkit-transform 0s ease 0s;transition:-webkit-transform 0s ease 0s;transition:transform 0s ease 0s;transition:transform 0s ease 0s,-webkit-transform 0s ease 0s}[sidebarjs].sidebarjs--is-moving,[sidebarjs].sidebarjs--is-visible,[sidebarjs].sidebarjs--is-visible [sidebarjs-container]{-webkit-transform:translate(0);transform:translate(0)}[sidebarjs].sidebarjs--is-moving,[sidebarjs].sidebarjs--is-moving [sidebarjs-backdrop],[sidebarjs].sidebarjs--is-moving [sidebarjs-container]{-webkit-transition:none;transition:none}[sidebarjs-content]{-webkit-transition:width .3s ease;min-height:100%;position:relative;transition:width .3s ease;width:100%}[sidebarjs-content].sidebarjs-content--left{margin-left:auto;margin-right:0}[sidebarjs-content].sidebarjs-content--right{margin-left:0;margin-right:auto}@media (min-width:1025px){[sidebarjs].sidebarjs--responsive{-webkit-transition:-webkit-transform 0s ease 0s;transition:-webkit-transform 0s ease 0s;transition:transform 0s ease 0s;transition:transform 0s ease 0s,-webkit-transform 0s ease 0s;width:300px}[sidebarjs].sidebarjs--responsive,[sidebarjs].sidebarjs--responsive [sidebarjs-container]{-webkit-transform:translate(0)!important;transform:translate(0)!important}[sidebarjs].sidebarjs--responsive.sidebarjs--left{left:0;right:auto}[sidebarjs].sidebarjs--responsive.sidebarjs--left [sidebarjs-container]{-webkit-box-shadow:1px 0 0 rgba(0,0,0,.1);box-shadow:1px 0 0 rgba(0,0,0,.1)}[sidebarjs].sidebarjs--responsive.sidebarjs--right{left:auto;right:0}[sidebarjs].sidebarjs--responsive.sidebarjs--right [sidebarjs-container]{-webkit-box-shadow:-1px 0 0 rgba(0,0,0,.1);box-shadow:-1px 0 0 rgba(0,0,0,.1)}[sidebarjs].sidebarjs--responsive [sidebarjs-container]{-webkit-box-shadow:none;box-shadow:none;max-width:none;width:100%}[sidebarjs-content]{width:-webkit-calc(100% - 300px);width:calc(100% - 300px)}[sidebarjs-content].sidebarjs-content--left.sidebarjs-content--right{margin:0 auto;width:-webkit-calc(100% - 600px);width:calc(100% - 600px)}}`;
  const style = document.createElement("style");
  style.innerText = styles;
  document.head.appendChild(style);

  const styles2 = `
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-overflow-scrolling: touch;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        -moz-tap-highlight-color: rgba(0, 0, 0, 0);
        tap-highlight-color: rgba(0, 0, 0, 0);
      }

      body {
        position: relative;
        min-height: 100vh;
        padding-top: 56px;
      }

      a {
        color: inherit;
        text-decoration: none;
      }

      [sidebarjs] p {
        font-size: 16px;
        text-align: left;
        font-family: Arial, sans-serif;
        color: rgba(0, 0, 0, .64);
      }

      [sidebarjs] .img {
        display: block;
        width: 32px;
        min-width: 32px;
        height: 32px;
        min-height: 32px;
        margin-right: 16px;
        opacity: .8;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
      }

      .img.img-ctxmenu {
        background-image: url('https://nkappler.de/ctxmenu/favicon_nc.png');
      }

      .img.home {
        background-image: url('https://nkappler.de/img/home.svg');
      }

      .img.slimemap {
        background-image: url('https://nkappler.de/slimemap/favicon.png');
      }

      .img.centipede {
        background-image: url('https://nkappler.de/Centipede/favicon.png');
      }

      .img.customWidgets {
        background-image: url('https://widgets.nkappler.de/docs/Widgets.png');
      }

      /* –––––––––––––––––––––––––––––––––––––––
                      Basic Demo
      –––––––––––––––––––––––––––––––––––––––– */
      navigation {
        display: -webkit-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -webkit-justify-content: space-between;
        -ms-flex-pack: justify;
        justify-content: space-between;
        position: relative;
        padding: 12px;
        height: 56px;
        background: #666;
        position: fixed;
        width: 100%;
        top: 0;
        z-index: 999;
      }

      .icon {
        position: relative;
        z-index: 1;
        width: 32px;
        height: 32px;
        border-radius: 50%;
        transition: background .1s;
      }

      .icon:active {
        background: rgba(255, 255, 255, .2);
      }

      .hamburger-icon:before {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        margin: auto;
        width: 70%;
        height: 2px;
        border-radius: 2px;
        background: #FFF;
        box-shadow: 0 -6px 0 #FFF, 0 6px 0 #FFF;
      }

      /* –––––––––––––––––––––––––––––––––––––––
                    Advanced Demo
      –––––––––––––––––––––––––––––––––––––––– */
      div[sidebarjs] > * {
        font: 300 16px/100% 'Arial', sans-serif;
      }

      [sidebarjs] h3 {
        display: -webkit-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -webkit-align-items: flex-end;
        -ms-flex-align: end;
        align-items: flex-end;
        min-height: 180px;
        padding: 16px;
        background: #666;
        color: #FFF;
        font-size: 40px;
      }

      [sidebarjs] nav {
        overflow-x: hidden;
        overflow-y: auto;
      }

      [sidebarjs] nav > div {
        display: -webkit-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        flex-direction: column;
        border-top: 1px solid rgba(0, 0, 0, .1);
      }

      [sidebarjs] nav > div:first-child {
        border-top: none;
      }

      [sidebarjs] nav a {
        display: -webkit-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -moz-align-items: center;
        -ms-align-items: center;
        -webkit-align-items: center;
        align-items: center;
        color: rgba(0, 0, 0, .64);
        padding: 16px;
        transition: background 0.3s ease;
      }

      [sidebarjs] nav a:active {
        color: inherit;
        background: rgba(0, 0, 0, .1);
      }
    `;
  const style2 = document.createElement("style");
  style2.innerText = styles2;
  document.head.appendChild(style2);

  const header = document.createElement("navigation");
  const toggle = document.createElement("div");
  toggle.setAttribute("sidebarjs-toggle", "");
  toggle.className = "icon hamburger-icon";
  header.appendChild(toggle);

  const menuheader = document.createElement("h3");
  menuheader.innerText = "Menu";
  const nav = document.createElement("nav");
  const home = document.createElement("a");
  home.innerHTML = '<div class="img home"></div>Home';
  home.href = "https://nkappler.de";
  // home.className = "img github";
  const ctxmenu = document.createElement("a");
  ctxmenu.innerHTML = '<div class="img img-ctxmenu"></div>ctxmenu.js - a context menu generator';
  ctxmenu.href = "https://nkappler.de/ctxmenu";
  // const slimemap = document.createElement("a");
  // slimemap.innerHTML = '<div class="img slimemap"></div>slimeMap - a Slime Chunk Finder for Minecraft';
  // slimemap.href = "https://nkappler.github.io/slimemap";
  const customWidgets = document.createElement("a");
  customWidgets.innerHTML = '<div class="img customWidgets"></div><p>Custom Widgets<br /><span style="font-size:12px">for SAP Analytics Cloud</span></p>';
  customWidgets.href = "https://widgets.nkappler.de";

  const centipede = document.createElement("a");
  centipede.innerHTML = '<div class="img centipede"></div>Centipede - an Arcade Game';
  centipede.href = "https://nkappler.github.io/Centipede";

  [home, ctxmenu, centipede, customWidgets].forEach(elem => nav.appendChild(elem));
  [menuheader, nav].forEach(elem => container.appendChild(elem));
  [header, container].forEach(elem => document.body.prepend(elem));

  (window as any).sidebar = new SidebarElement({});
};

document.readyState === "complete" ? attachMenu() : document.addEventListener("readystatechange", attachMenu);
