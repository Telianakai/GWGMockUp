// ________________Nav Link Hover Glow_________________
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
    link.addEventListener("mouseenter", () => {
        link.classList.add("nav-link-glow"); 
    });

    link.addEventListener("mouseleave", () => {
        link.classList.remove("nav-link-glow"); 
    });
});

// ________________Main Button Hover Glow_________________
const mainButton = document.querySelectorAll("mainButton");

mainButton.forEach(link => {
    link.addEventListener("mouseenter", () => {
        link.classList.add("main-button-grow");
    });

    link.addEventListener("mouseleave", () => {
        link.classList.remove("main-button-grow");
    });
});