const menuButton = document.getElementById("menuButton");
const mainMenu = document.getElementById("mainMenu");
const menuLinks = document.querySelectorAll(".main-menu a");
const currentYear = document.getElementById("currentYear");

if (currentYear) {
    currentYear.textContent = `© ${new Date().getFullYear()} GISTEC`;
}

if (menuButton && mainMenu) {
    menuButton.addEventListener("click", () => {
        const isOpen = mainMenu.classList.toggle("open");
        menuButton.setAttribute("aria-expanded", String(isOpen));
        menuButton.textContent = isOpen ? "Fechar" : "Menu";
        document.body.classList.toggle("menu-open", isOpen);
    });
}

menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
        mainMenu?.classList.remove("open");
        menuButton?.setAttribute("aria-expanded", "false");

        if (menuButton) {
            menuButton.textContent = "Menu";
        }

        document.body.classList.remove("menu-open");
    });
});

const sections = document.querySelectorAll("main section[id]");

const updateActiveLink = () => {
    let activeSection = "inicio";

    sections.forEach((section) => {
        const rect = section.getBoundingClientRect();

        if (rect.top <= 150 && rect.bottom >= 150) {
            activeSection = section.id;
        }
    });

    menuLinks.forEach((link) => {
        const target = link.getAttribute("href")?.replace("#", "");
        link.classList.toggle("active", target === activeSection);
    });
};

window.addEventListener("scroll", updateActiveLink, { passive: true });
window.addEventListener("load", updateActiveLink);
