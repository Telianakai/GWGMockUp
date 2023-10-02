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

// ________________Mobile Dropdown Menu_________________
// Get the mobile menu button and mobile navigation
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const mobileNav = document.getElementById("mobileNav");

// Variable to track whether the mobile navigation is open
let isMobileNavOpen = false;

// Function to toggle the mobile navigation menu
function toggleMobileNav() {
    if (isMobileNavOpen) {
        mobileNav.style.display = "none";
    } else {
        mobileNav.style.display = "block";
    }
    isMobileNavOpen = !isMobileNavOpen;
}

// Show mobile navigation on button click
mobileMenuBtn.addEventListener("click", toggleMobileNav);

// Keep mobile navigation open when the mouse is inside
mobileNav.addEventListener("mouseenter", () => {
    mobileNav.style.display = "block";
    isMobileNavOpen = true;
});

// Hide mobile navigation when the mouse leaves the menu
mobileNav.addEventListener("mouseleave", () => {
    mobileNav.style.display = "none";
    isMobileNavOpen = false;
});
