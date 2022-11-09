let pregunta = document.querySelector(".temas");
function mostrartema(){
    let temas=[];
    let cantidadTemas=3;
    for (let i = 0; i < cantidadTemas; i++) {
        temas[i]=Math.floor(Math.random()*44)+1;
    }
    pregunta=temas
    return pregunta;
}
document.getElementById('btn').onclick=function(){
    document.getElementById('preg').innerHTML= mostrartema();
}
