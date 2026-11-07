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

