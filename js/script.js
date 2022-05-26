
const menuBarra = document.getElementById("menuBarra");
const maiMenu = document.getElementById("maiMenu");

menuBarra.addEventListener("click",function(){
    if(maiMenu.classList.contains("menu-vertical-oculto")){
        maiMenu.classList.add("menu-vertical");
        maiMenu.classList.remove("menu-vertical-oculto");
    }
    else{
        maiMenu.classList.remove("menu-vertical");
        maiMenu.classList.add("menu-vertical-oculto");
   }
});