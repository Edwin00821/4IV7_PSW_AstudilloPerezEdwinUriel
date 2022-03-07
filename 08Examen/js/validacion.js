//Creamos nuestra variable constante de los datos de nuestro formulario

const tablaDatos = document.getElementById("ingresarDatos");

//Creamos un escucha que cuando el usuario envie sus datos cancele el efecto de recargar la pagina

tablaDatos.addEventListener("submit", function(event){
    event.preventDefault();

    let datos = new FormData(tablaDatos);

    var marca = datos.get("marca");
    var precio = parseFloat(datos.get("precio"));
    var cuotaInicial = precio / parseFloat(datos.get("cuotaInicial"));
    var periodo = parseInt(datos.get("periodo"));
    var interes = precio * 0.0394;  
    var precioFinal = precio * Math.pow((1 + 0.0394), periodo);
    var cuota = precioFinal/periodo;
    
    var checkOK = "QWERTYUIOPASDFGHJKLÑZXCVBNM"
    + "qwertyuiopasdfghjklñzxcvbnm";

    var checkStr = marca;

    var todoesvalido = true;

    for(var i = 0; i < checkStr.length; i++){
        var ch = checkStr.charAt(i);
        for(var j = 0; j < checkOK.length; j++){
            if(ch == checkOK.charAt(j)){
                break;
            }
        }
        if(j == checkOK.length){
            todoesvalido = false;
            break;
        }
    }

    if(!todoesvalido){
        alert("Escriba caracteres validos");
        ingresarDatos.marca.focus();
        return false;
    }

    if(marca == ""){
        alert("Escriba almenos un caracter");
        ingresarDatos.marca.focus();
        return false
    }

    if(cuotaInicial < 10){
        alert("Debe ingresar al menos el 10%");
        ingresarDatos.cuotaInicial.focus();
        return false
    }

    var checkOK = "1234567890";

    var checkStr = precio;

    var todoesvalido = true;

    for(var i = 0; i < checkStr.length; i++){
        var ch = checkStr.charAt(i);
        for(var j = 0; j < checkOK.length; j++){
            if(ch == checkOK.charAt(j)){
                break;
            }
        }
        if(j == checkOK.length){
            todoesvalido = false;
            break;
        }
    }

    if(!todoesvalido){
        alert("Escriba unicamente numeros");
        ingresarDatos.precio.focus();
        return false;
    }

    if(datos.get("precio") == ""){
        alert("Escriba almenos un numero");
        ingresarDatos.precio.focus();
        return false
    }

    var checkStr = cuotaInicial;

    var todoesvalido = true;

    for(var i = 0; i < checkStr.length; i++){
        var ch = checkStr.charAt(i);
        for(var j = 0; j < checkOK.length; j++){
            if(ch == checkOK.charAt(j)){
                break;
            }
        }
        if(j == checkOK.length){
            todoesvalido = false;
            break;
        }
    }

    if(!todoesvalido){
        alert("Escriba unicamente numeros");
        ingresarDatos.cuotaInicial.focus();
        return false;
    }

    if(datos.get("cuotaInicial") == ""){
        alert("Escriba almenos un numero");
        ingresarDatos.precio.focus();
        return false
    }

    if(todoesvalido){

        let referenciaTabla = document.getElementById("TablaDatos")
        let referenciaFila = referenciaTabla.insertRow(-1);
        
        precio = precio.toFixed(2);
        interes = interes.toFixed(2);
        cuotaInicial = cuotaInicial.toFixed(2);
        cuota = cuota.toFixed(2);
        precioFinal = precioFinal.toFixed(2);

        let referenciaColumna = referenciaFila.insertCell(0);
        referenciaColumna.textContent = marca;

        referenciaColumna = referenciaFila.insertCell(1);
        referenciaColumna.textContent = "$ " + precio.toLocaleString("en-US");

        referenciaColumna = referenciaFila.insertCell(2);
        referenciaColumna.textContent = "$ " + cuotaInicial.toLocaleString("en-US");

        referenciaColumna = referenciaFila.insertCell(3);
        referenciaColumna.textContent = periodo + " meses";

        referenciaColumna = referenciaFila.insertCell(4);
        referenciaColumna.textContent = "$ " + interes.toLocaleString("en-US");

        referenciaColumna = referenciaFila.insertCell(5);
        referenciaColumna.textContent = "$ " + cuota.toLocaleString("en-US");

        referenciaColumna = referenciaFila.insertCell(6);
        referenciaColumna.textContent = "$ " + precioFinal.toLocaleString("en-US");
    }

})
