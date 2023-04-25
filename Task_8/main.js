
// data-bs-theme="dark"

const Theme = {

    changeTheme() {
        const darkMode = document.querySelector("html");
        const currentTheme = darkMode.getAttribute("data-bs-theme");
        if (currentTheme !== "dark") {
            darkMode.setAttribute("data-bs-theme", "dark");
        } else {
            darkMode.setAttribute("data-bs-theme", "");
        }
    }
}

const buttonTheme = document.getElementById("flexSwitchCheckDefault");
buttonTheme.addEventListener("click", Theme.changeTheme);
