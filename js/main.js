(function () {
    const toggle = document.querySelector(".nav-toggle");
    const links = document.querySelector(".nav-links");

    if (!toggle || !links) return;

    toggle.addEventListener("click", function () {
        const isOpen = links.classList.toggle("open");
        toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    links.addEventListener("click", function (e) {
        if (e.target.tagName === "A") {
            links.classList.remove("open");
            toggle.setAttribute("aria-expanded", "false");
        }
    });
})();
