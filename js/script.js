document.querySelectorAll("body", "button").forEach(el => {
        el.classList.add("lightMode");
        el.classList.remove("darkMode");
    });

const testerButton = document.querySelector("#testerButton");

testerButton.addEventListener("click", function () {
    document.querySelectorAll("body", "button").forEach(el => {
        if (el.classList.contains("darkMode")) {
            el.classList.add("lightMode");
            el.classList.remove("darkMode");
        }
        else {
            el.classList.add("darkMode");
            el.classList.remove("lightMode");
        }
    });
});