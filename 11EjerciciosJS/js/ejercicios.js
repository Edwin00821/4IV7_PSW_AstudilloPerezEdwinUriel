/*  
vamos a realizar una funcion que se encargue de validar la entrada
de numeros por medio de una expresion regular
*/ 

function validarnum(e){
    var teclado = (document.all)? e.keyCode : e.which;
    if(teclado == 8) return true;
    var patron = /[0-9\d .]/;
    var codigo = String.fromCharCode(teclado);
    return patron.test(codigo);
}

function p1(){
    //Intente hacer que no me aceptara valores nulos pero ya me duele la cabeza y no me sale :(
    if(document.querySelector("#p1-input-1") == ""){
        alert("Escriba al menos un numero");
        document.querySelector("#p1-input-1").focus();
    }
    else if(document.querySelector("#p1-input-2") == ""){
        alert("Escriba al menos un numero");
        document.querySelector("#p1-input-2").focus();
    }
    else{
        //Obtenemos los datos del problema 1

        var capital = parseFloat(document.querySelector("#p1-input-1").value);
        var meses = parseInt(document.querySelector("#p1-input-2").value);

        //Calculamos caunto dinero ganara
        var p1_total = ((capital*0.02) * meses) + capital;

        //Escribimos el resultado
        document.querySelector("#p1-output").textContent= "$ " + p1_total;
    }
}

const meses = document.querySelector("#p1-input-2");
const salida = document.querySelector("#p1-output-2");
salida.textContent = meses.value;

meses.addEventListener('input', ()=> {
    salida.textContent = meses.value + " meses"
})

function borrarp1(){
    //Borramos los datos del problema 1
    document.querySelector("#p1-input-1").value="";
    document.getElementById("p1-input-2").value="";
    document.querySelector('#p1-output').textContent="Esperando datos...";
}

function p2(){
    //Obtenemos los datos del problema 2
    var sueldoB = parseFloat(document.querySelector("#p2-input-1").value);
    var venta1 = parseFloat(document.querySelector("#p2-input-2").value);
    var venta2 = parseFloat(document.querySelector("#p2-input-3").value);
    var venta3 = parseFloat(document.querySelector("#p2-input-4").value);

    //Calculamos la comision por las ventas y lo sumamos para obtener el total
    var comision = (venta1 + venta2 + venta3)*.10
    var p2_total = sueldoB + comision

    //Escribimos el resultado 
    document.querySelector("#p2-output").textContent= "Comision: $ " + comision 
                            + "\nTotal: $ " + p2_total;
}

function borrarp2(){
    //Borramos o reiniciamos los valores del problema 2
    document.getElementById("p2-input-1").value="";
    document.getElementById("p2-input-2").value="";
    document.getElementById("p2-input-3").value="";
    document.getElementById("p2-input-4").value="";
    document.querySelector('#p2-output').textContent="Esperando datos...";
}

function p3(){
    //Obtenemos los datos del problema 3
    var compra = parseFloat(document.querySelector("#p3-input-1").value);

    //Calculamos el descuento
    var p3_total = compra*0.85;

    //Escribimos el resultado
    document.querySelector("#p3-output").textContent= "$ " + p3_total;
}

function borrarp3(){
    //Borramos los datos del problema 3
    document.getElementById("p3-input-1").value="";
    document.getElementById("p3-input-2").value="";
    document.querySelector('#p3-output').textContent="Esperando datos...";
}

function p4(){
    //Obtenemos los datos del problema 4
    var promedio = parseInt(document.querySelector("#p4-input-1").value);
    var examenF = parseInt(document.querySelector("#p4-input-2").value);
    var trabajoF = parseInt(document.querySelector("#p4-input-3").value);

    //Calculamos su calificacion final
    var p4_total = ((promedio*55)/100) + ((examenF*30)/100) + ((trabajoF*15)/100);

    //Escribimos el resultado
    document.querySelector("#p4-output").textContent= "Calificacion final: " + p4_total;
}

function borrarp4(){
    //Borramos los datos del problema 4
    document.getElementById("p4-input-1").value="";
    document.getElementById("p4-input-2").value="";
    document.querySelector('#p4-output').textContent="Esperando datos...";
}

function p5(){
    //Obtenemos los datos del problema 5
    var hombres = parseInt(document.querySelector("#p5-input-1").value);
    var mujeres = parseInt(document.querySelector("#p5-input-2").value);

    //Calculamos el total de alumnos
    var alumnos = mujeres + hombres;

    //Calculamos mediante una regla de 3 el procentaje de hombres y mujeres
    hombres = (hombres*100)/alumnos;
    mujeres = (mujeres*100)/alumnos;

    //Escribimos el resultado   
    document.querySelector("#p5-output").textContent= "Hombres: " + hombres + "%" +
                                                        "\nMujeres: " + mujeres + "%";
}

function borrarp5(){
    //Borramos los datos del problema 5
    document.getElementById("p5-input-1").value="";
    document.getElementById("p5-input-2").value="";
    document.querySelector('#p5-output').textContent="Esperando datos...";
}

function p6(){
    //Obtenemos los datos del problema 6
    var fecha = document.querySelector("#p6-input").value;
    
    //Llamamos a la funcion pata validar la fecha
    if(validarFormatoFecha(fecha)){
        //Si es la fecha es correcta llamamos a la funcion que verifica si existe esa fecha en especifico
        if(existeFecha(fecha)){
            //Creamos las variables de tipo Fecha/Date 
            var fechaA = new Date();

            //Invertimos la fecha para poder crear la variable
            var fechaN = new Date(fecha.split('/').reverse().join('/'));

            //Calculamos la edad
            var edad = fechaA.getFullYear() - fechaN.getFullYear();
            var mesesD = fechaA.getMonth() - fechaN.getMonth();

            //Si la diferencia de meses es menor a 0 para saber si estamos en algún mes anterior al pasado por parámetro al mismo tiempo verificamos
            //si el mes actual es el mismo que el que recibimos por parámetro mientras verificamos si el día que recibimos por parámetro es mayor que el día actual
            // En resumen nos sirve para saber si estamos antes de la fecha de su cumpleaños y si es correcto restamos un año
            if(mesesD < 0 || (mesesD === 0 && fechaA.getDate() < fechaN.getDate())){
                edad -= 1;
            }
            
            //Escribimos el resultado
            document.querySelector("#p6-output").textContent = "Tienes " + edad + " años";

        }else{
            //Si la fecha que introdujo no existe se lo indicamos y le señalamos en donde esta el error 
              alert("La fecha introducida no existe.");
              document.querySelector("#p6-input").focus();
        }
    }else{
            //Si el formato de la fecha que introdujo no es correcto se lo indicamos y le señalamos en donde esta el error 
            alert("El formato de la fecha es incorrecto.");
            document.querySelector("#p6-input").focus();
            
    }
}

function validarFormatoFecha(campo) {
    //Creamos la expresion regular dd/mm/aa
    var RegExPattern = /^\d{1,2}\/\d{1,2}\/\d{2,4}$/;

    //Si nuestra fecha corresponde a la expresion regular y al mismo tiempo no esta vacia entonces entra en el ciclo
    if ((campo.match(RegExPattern)) && (campo!='')) {
          return true;
    } else {
          return false;
    }
}

function existeFecha(fecha){
    //Obtenemos la fecha final y la separamos en un array
    var fechaF = fecha.split("/");
    
    //Le asignamos los valores de la fecha
    var dia = fechaF[0];
    var mes = fechaF[1];
    var año = fechaF[2];

    //Creamos una varaible de tipo fecha/Date
    var date = new Date(año,mes,'0');

    //Comprobamos si la fecha existe en el calendario, aqui se incluyen los años bisiestos
    if((dia-0)>(date.getDate()-0)){
          return false;
    }
    return true;
}

function borrarp6(){
    //Borramos los datos del problema 6
    document.querySelector("#p1-input-1").textContent="";
    document.querySelector("#p1-input-2").textContent="";
    document.querySelector('#p1-output').textContent="Esperando datos...";
}
