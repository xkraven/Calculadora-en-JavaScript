function opciones(){
    var op = parseInt(document.getElementById("opcion").value);
    if(op == 1){
        let num1 = prompt("Ingrese el primer número:");
        let num2 = prompt("Ingrese el segundo número:");
        if(num1 > num2){
            alert(num1 + ' es mayor que ' + num2);
        }else if(num2 > num1){
            alert(num2 + ' es mayor que ' + num1);
        }else{
            alert('Los números son iguales');
        }
    }
    if(op == 2){
        let dato1 = prompt("Ingrese el primer número:");
        let num1 = parseInt(dato1);
        let dato2 = prompt("Ingrese el segundo número:");
        let num2 = parseInt(dato2);
        let suma = num1 + num2;
        alert('La suma de los numeros es: ' + suma);
    }
    if(op == 3){
        let dato1 = prompt("Ingrese el primer número:");
        let num1 = parseInt(dato1);
        let dato2 = prompt("Ingrese el segundo número:");
        let num2 = parseInt(dato2);
        let resta = num1 - num2;
        alert('La resta de los numeros es: ' + resta);
    }
    if(op == 4){
        let dato1 = prompt("Ingrese el primer número:");
        let num1 = parseInt(dato1);
        let dato2 = prompt("Ingrese el segundo número:");
        let num2 = parseInt(dato2);
        let multiplicacion = num1 * num2;
        alert('La multiplicación de los numeros es: ' + multiplicacion);
    }
    if(op == 5){
        let dato1 = prompt("Ingrese el primer número:");
        let num1 = parseInt(dato1);
        let dato2 = prompt("Ingrese el segundo número:");
        let num2 = parseInt(dato2);
        let division = num1 / num2;
        alert('La división de los numeros es: ' + division);
    }
    if(op == 6){
        let dato1 = prompt("Ingrese el primer número:");
        let num1 = parseInt(dato1);
        let dato2 = prompt("Ingrese el segundo número:");
        let num2 = parseInt(dato2);
        alert('Los numeros Ingresados son: ' + num1 + 'y' + num2);
    }
    if(op == 7){       
        alert('Gracias por participar!');
    }
    else if(op < 1 || op > 7){
        alert('Elección incorrecta. Adiós!');
    }
}


    
