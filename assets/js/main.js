/* =========================================================
   SEPHIROTHOS
   Main JavaScript
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".nav-menu");

    /*
     * Mobile navigation
     */

    if (menuToggle && navMenu) {

        menuToggle.addEventListener("click", () => {

            const isOpen = navMenu.classList.toggle("is-open");

            menuToggle.setAttribute(
                "aria-expanded",
                String(isOpen)
            );

            menuToggle.setAttribute(
                "aria-label",
                isOpen ? "Close navigation" : "Open navigation"
            );
        });


        /*
         * Close the mobile menu when a link is selected.
         */

        navMenu.querySelectorAll("a").forEach((link) => {

            link.addEventListener("click", () => {

                navMenu.classList.remove("is-open");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

                menuToggle.setAttribute(
                    "aria-label",
                    "Open navigation"
                );
            });

        });

    }


    /*
     * Give external links a little protection.
     */

    document.querySelectorAll('a[href^="http"]').forEach((link) => {

        if (!link.href.startsWith(window.location.origin)) {
            link.setAttribute("target", "_blank");
            link.setAttribute("rel", "noopener noreferrer");
        }

    });


    /*
     * Tiny "back to top" behavior for the logo.
     */

    document.querySelectorAll('a[href="#top"]').forEach((link) => {

        link.addEventListener("click", (event) => {

            event.preventDefault();

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

    });

});
