import { useEffect } from "react";

const useInitMenuHook = () => {
  useEffect(() => {
    const dropDownMenu = document.querySelectorAll(".has-dropdown");

    const addActive = (el) => {
      el.classList.add("is-active");
    };
    const removeActive = (el) => {
      el.classList.remove("is-active");
    };
    dropDownMenu.forEach((el) => {
      el.addEventListener("mouseover", addActive.bind(null, el));
      el.addEventListener("mouseout", removeActive.bind(null, el));
      el.addEventListener("click", removeActive.bind(null, el));
    });

    return () => {
      dropDownMenu.forEach((el) => {
        el.removeEventListener("mouseover", addActive.bind(null, el));
        el.removeEventListener("mouseout", removeActive.bind(null, el));
        el.removeEventListener("click", removeActive.bind(null, el));
      });
    };
  }, []);

  useEffect(() => {
    const mobileMenu = document.querySelector("#navbarBasicExample");
    const burgerButton = document.querySelector("#burger-button");

    const burgerButtonClick = () => {
      burgerButton.classList.toggle("is-active");
      mobileMenu.classList.toggle("is-active");
    };
    const mobileMenuClick = () => {
      mobileMenu.classList.remove("is-active");
      burgerButton.classList.remove("is-active");
    };

    burgerButton.addEventListener("click", burgerButtonClick);
    mobileMenu.addEventListener("click", mobileMenuClick);

    return () => {
      burgerButton.removeEventListener("click", burgerButtonClick);
      mobileMenu.removeEventListener("click", burgerButtonClick);
      mobileMenu.removeEventListener("click", mobileMenuClick);
    };
  }, []);
};

export default useInitMenuHook;
