function lockedInClicked() {
    console.log("We are SOOOO locked");
}
function lockedOutClicked() {
    console.log("We are SOOOO not locked");
}
function sleepingClicked() {
    console.log("We are def sleeping rn");
}
function eatingClicked() {
    console.log("We are noming AND choming");
}

const lockedInButton = document.querySelector("#locked_in");
const lockedOutButton = document.querySelector("#locked_out");
const sleepingButton = document.querySelector("#sleeping");
const eatingButton = document.querySelector("#eating");

lockedInButton.addEventListener("click", lockedInClicked);
lockedOutButton.addEventListener("click", lockedOutClicked);
sleepingButton.addEventListener("click", sleepingClicked);
eatingButton.addEventListener("click", eatingClicked);


// WebSocket support
var targetUrl = "ws://${location.host}/ws";
var websocket;
window.addEventListener("load", onLoad);

function onLoad() {
  initializeSocket();
}

function initializeSocket() {
  console.log("Opening WebSocket connection MicroPython Server...");
  websocket = new WebSocket(targetUrl);
  websocket.onopen = onOpen;
  websocket.onclose = onClose;
  websocket.onmessage = onMessage;
}
function onOpen(event) {
  console.log("Starting connection to WebSocket server..");
}
function onClose(event) {
  console.log("Closing connection to server..");
  setTimeout(initializeSocket, 2000);
}
function onMessage(event) {
  console.log("WebSocket message received:", event);
  updateValues(event.data);
  updateChart(event.data);
}

function sendMessage(message) {
  websocket.send(message);
}