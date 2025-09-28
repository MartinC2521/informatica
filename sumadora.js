function sumarNumeros(){
    let num1= prompt("Ingrese el primer número");
    let num2= prompt("Ingrese el segundo número");
    num1= Number(num1);
    num2= Number(num2);
    if(!isNaN(num1)&&!isNaN(num2)){
        let suma= num1+ num2;
        alert("Resultado: " + suma);
    }else{
        alert("Ingrese solo números");
    }
}