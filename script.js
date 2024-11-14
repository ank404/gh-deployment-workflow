// script.js

document.addEventListener("DOMContentLoaded", () => {
    const steps = document.querySelectorAll(".step");

    steps.forEach(step => {
        step.addEventListener("mouseover", () => {
            step.style.backgroundColor = "#e6f7ff";
        });

        step.addEventListener("mouseout", () => {
            step.style.backgroundColor = "#f1f9ff";
        });
    });
});
