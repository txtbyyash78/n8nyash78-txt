"use strict";

const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".main-nav");

if (menuButton && navigation) {

    menuButton.addEventListener("click", () => {

        const isOpen =
            navigation.classList.toggle("is-open");

        menuButton.setAttribute(
            "aria-expanded",
            isOpen
        );

        menuButton.setAttribute(
            "aria-label",
            isOpen
                ? "Close navigation menu"
                : "Open navigation menu"
        );

    });


    // Close the mobile menu after selecting a link.
    navigation.querySelectorAll("a").forEach((link) => {

        link.addEventListener("click", () => {

            navigation.classList.remove("is-open");

            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );

            menuButton.setAttribute(
                "aria-label",
                "Open navigation menu"
            );

        });

    });

}