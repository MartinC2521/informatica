function verificarEdad(){
let edad= prompt("Ingrese su edad");
edad= Number(edad);
if (edad< 18){
    alert("No podés seguir");
}else{
    alert("Podés seguir");
}
}