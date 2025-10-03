function calcular(){
    let num1 = prompt("Ingresa el primer número");
    let num2 = prompt("Ingresa el segundo número");
    let num3 = prompt("Ingresa el tercer número");
    num1 = Number(num1);
    num2 = Number(num2);
    num3 = Number(num3);
let suma = (num1+num2+num3);
let prom = (suma/3)
if(prom>=6){
    alert("Haz aprobado con: " +prom);
}else{
    alert("Haz desaprobado con:" +prom);
}
}