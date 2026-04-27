'use strict';

const CORRECT_PASSWORD = "hd6*Kqr/n";

const screen = document.getElementById("password-screen");
const input = document.getElementById("pw-input");
const btn = document.getElementById("pw-btn");
const error = document.getElementById("pw-error");

if (sessionStorage.getItem("auth") === "ok") {
    screen.style.display = "none";
}

btn.addEventListener("click", function () {
    if (input.value === CORRECT_PASSWORD) {
        sessionStorage.setItem("auth", "ok");
        screen.style.display = "none";
    } else {
        error.textContent = "パスワードが違います";
        input.value = "";
    }
});

input.addEventListener("keydown", function (e) {
    if (e.key === "Enter") btn.click();
});