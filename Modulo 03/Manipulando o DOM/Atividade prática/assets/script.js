const text  = document.getElementById("txt");
const botao = document.getElementById("btn");
const body  = document.getElementById("body");

botao.addEventListener("click", darkMode);

function darkMode(){
    if (text.textContent === "Light Mode ON") {
        // html
        text.innerText  = "Dark Mode ON";
        botao.innerText = "Light Mode";
        // CSS
        body.style.backgroundColor  = "black";
        text.style.color            = "white";
        botao.style.backgroundColor = "black";
        botao.style.color           = "white";
    } else {
        // html
        text.innerText  = "Light Mode ON";
        botao.innerText = "Dark Mode";
        // CSS
        body.style.backgroundColor  = "white";
        text.style.color            = "black";   
        botao.style.backgroundColor = "white";
        botao.style.color           = "black";     
    }    
}