const text = document.getElementById("txt");
const botao = document.getElementById("btn");

botao.addEventListener("click", darkMode);

function darkMode(){
    text.innerText = "Dark Mode ON";
    botao.innerText = "Light Mode";
}