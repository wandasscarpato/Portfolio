const iconoMenu = document.querySelector("#openClose"), menu= document.querySelector("#menu");
iconoMenu.addEventListener("click", (e)=>{
    menu.classList.toggle("active");
    document.body.classList.toggle("opacity")
})