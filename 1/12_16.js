// <⚠️ DONT DELETE THIS ⚠️>
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

const title = document.querySelector("h2");

const superEventHandler = {
  handlersTitleMouseEnter: function () {
    title.innerText = "The mouse is here!";
    title.style.color = colors[0];
  },
  handlersTitleMouseLeave: function () {
    title.innerText = "The mouse is gone!";
    title.style.color = colors[1];
  },
  handlersWindowResize: function () {
    title.innerText = "You just resize!";
    title.style.color = colors[2];
  },
  handlersWindowContextmenu: function () {
    title.innerText = "That was a right click!";
    title.style.color = colors[3];
  }
};

title.addEventListener("mouseenter", superEventHandler.handlersTitleMouseEnter);
title.addEventListener("mouseleave", superEventHandler.handlersTitleMouseLeave);
window.addEventListener("resize", superEventHandler.handlersWindowResize);
window.addEventListener(
  "contextmenu",
  superEventHandler.handlersWindowContextmenu
);
