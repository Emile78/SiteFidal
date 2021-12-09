
const button = document.getElementById("button_menu")

button.addEventListener('click', event => {
    let menu = document.getElementById("menu");
    //vider le menu
    

    let link_home = document.createElement("a");
    link_home.setAttribute("href", "home.html");
    //console.log(link_home);
    link_home.innerHTML="page home";
    button.innerHTML = "";
    menu.appendChild(link_home);
    menu.removeChild(button);
});