let darkMode = localStorage.getItem('darkMode');

const darkModeToggle = document.querySelector('#dark-mode-toggle');

//check if dark mode is enabled.
//if it's enabled, turn it off.
//if it's disabled, turn it on.

const enableDarkMode = () => {
    //1. add the class darkMode to the body.
    document.body.classList.add("darkMode");
    
    //2. update darkMode in the LocalStorage.
    localStorage.setItem("darkMode", "enabled");
}

const disableDarkMode = () => {
    //1. add the class darkMode to the body.
    document.body.classList.remove("darkMode");
    
    //2. update darkMode in the LocalStorage.
    localStorage.setItem("darkMode", null);
}

darkModeToggle.addEventListener("click", () => {
    darkMode = localStorage.getItem("darkMode")

    if (darkMode !== "enabled"){
        enableDarkMode();
    } else{
        disableDarkMode();
    }
})