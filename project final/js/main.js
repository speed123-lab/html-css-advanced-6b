const toggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (toggle && navLinks) {
    toggle.addEventListener("click", () => {
        const open = toggle.getAttribute("aria-expanded") === "true";
        toggle.setAttribute("aria-expanded", String(!open));
        navLinks.classList.toggle("open", !open);
    });
}

const revealItems = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });
    revealItems.forEach((item) => observer.observe(item));
} else {
    revealItems.forEach((item) => item.classList.add("visible"));
}

const modelSelect = document.querySelector("#modelSelect");
if (modelSelect) {
    const model = new URLSearchParams(window.location.search).get("model");
    if (model) {
        const match = [...modelSelect.options].find((option) =>
            option.value.toLowerCase() === model.toLowerCase()
        );
        if (match) modelSelect.value = match.value;
    }
}

const orderForm = document.querySelector("#orderForm");
if (orderForm) {
    orderForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const message = document.querySelector("#message");
        message.textContent = "Thank you. Our specialist team will contact you shortly.";
        message.classList.add("success");
        orderForm.reset();
    });
}
