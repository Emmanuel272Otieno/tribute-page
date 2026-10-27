
// NELSON MANDELA TRIBUTE PAGE

// 1. Update the footer year automatically
const yearElement = document.getElementById("year");

yearElement.textContent = new Date().getFullYear();


// 2. Mobile navigation menu
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function () {
    const isOpen = navLinks.classList.toggle("open");

    menuToggle.textContent = isOpen ? "✕" : "☰";
    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation" : "Open navigation"
    );
});

// Close the mobile menu after selecting a link
navLinks.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("open");
        menuToggle.textContent = "☰";
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation");
    });
});


// 3. Light mode and dark mode
const themeToggle = document.getElementById("themeToggle");

function updateThemeButton() {
    const darkMode = document.body.classList.contains("dark-mode");

    themeToggle.textContent = darkMode ? "☀️" : "🌙";

    themeToggle.setAttribute(
        "aria-label",
        darkMode ? "Switch to light mode" : "Switch to dark mode"
    );
}

// Restore the saved theme when the page opens
if (localStorage.getItem("mandela-theme") === "dark") {
    document.body.classList.add("dark-mode");
}

updateThemeButton();

themeToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    const currentTheme = document.body.classList.contains("dark-mode")
        ? "dark"
        : "light";

    localStorage.setItem("mandela-theme", currentTheme);

    updateThemeButton();
});


// 4. Show or hide the inspiring message
const messageButton = document.getElementById("messageButton");
const inspiringMessage = document.getElementById("inspiringMessage");

messageButton.addEventListener("click", function () {
    const isHidden = inspiringMessage.hidden;

    inspiringMessage.hidden = !isHidden;

    messageButton.textContent = isHidden
        ? "Hide Message"
        : "Discover His Message ✨";
});


// 5. Back-to-top button
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", function () {
    if (window.scrollY > 400) {
        backToTop.classList.add("visible");
    } else {
        backToTop.classList.remove("visible");
    }
});

backToTop.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


// 6. Welcome message in the browser console
console.log("Welcome to the Nelson Mandela Tribute Page!");
