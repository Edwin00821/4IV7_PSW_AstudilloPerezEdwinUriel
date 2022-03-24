// problema 1

function problema1(){
    //obtener el input y detectar el espacio
    
    var p1_input = document.querySelector('#p1-input').value;
    var p1_palabras = p1_input.split(' ');

    //invertimos la cadena de palabras

    p1_palabras.reverse();

    //imprimimos las palabras
    document.querySelector('#p1-output').textContent = p1_palabras.join(" ");

    //Podria hacer lo que usted hizo para no permitir que ingrese caracteres especiales pero me dio flojera :)
    //Vendria siendo algo parecido a lo que hicimos para validar el formulario y aqui pero no le veo mucho caso para este problema
    //Ya que solo ocupo invertir las palabras si tuviera que hacer algo mas con los datos que recibo lo tendria que hacer
}

// problema 2

function problema2(){
    //Definimos las varribles de los vectores
    
    var p2_x1 = parseFloat(document.querySelector('#p2-x1').value);
    var p2_y1 = parseFloat(document.querySelector('#p2-y1').value);

    var p2_x2 = parseFloat(document.querySelector('#p2-x2').value);
    var p2_y2 = parseFloat(document.querySelector('#p2-y2').value);
    
    var p2_x3 = parseFloat(document.querySelector('#p2-x3').value);
    var p2_y3 = parseFloat(document.querySelector('#p2-y3').value);
    
    var p2_x4 = parseFloat(document.querySelector('#p2-x4').value);
    var p2_y4 = parseFloat(document.querySelector('#p2-y4').value);
    
    var p2_x5 = parseFloat(document.querySelector('#p2-x5').value);
    var p2_y5 = parseFloat(document.querySelector('#p2-y5').value);

    //Multiplicamos los vectores
    
    var vector = [" Escalar 1: " + p2_x1*p2_y1, " Escalar 2: " + p2_x2*p2_y2, " Escalar 3: " + p2_x3*p2_y3, " Escalar 4: " + p2_x4*p2_y4, " Escalar 5: " + p2_x5*p2_y5,];
    
    //Obtenemos el resultado de sumar los vectores
    var resV = (p2_x1*p2_y1) + (p2_x2*p2_y2) + (p2_x3*p2_y3) + (p2_x4*p2_y4) + (p2_x5*p2_y5);

    //Llamamos a la funcion permute
    //var vectorP = permute(vector);
    var resultado = '';

    //Aqui intente hacer un ciclo para que por cada 5 elementos de mi array diera un salto de linea
    //Pero no funciono y no se por que, ya me desespere y todavia me falta el primer problema :(
/*
    for(x=0; x<vectorP.length; x+=5){
        var v1 = vectorP[x];
        var v2 = vectorP[x+1];
        var v3 = vectorP[x+1];
        var v4 = vectorP[x+1];
        var v5 = vectorP[x+1];

        var fila = v1 + ' ' + v2 + '' + v3 + '' + v4 + '' + v5 + '\n';
        resultado += fila;
    }
*/
    document.querySelector('#p2-output').textContent = "Resultado final: " + resV + '\n' + permute(vector);
     
}

//La verdad copie este codigo de internet, entiendo mas o menos que hace pero supongo que hay mas formas
// de hacerlo, habia otro codigo que utilizaba la funcion map pero no lo pude adaptar para hacer lo 
// que necesitaba hacer porque no entendi lo que queria hacer

var permArr = []; 
var usedChars = [];

function permute(input) {
    
    var i; 
    var ch;

    for (i = 0; i < input.length; i++) { 
        ch = input.splice(i, 1)[0]; 
        usedChars.push(ch); 
        if (input.length == 0) { 
            permArr.push('\n' + usedChars.slice()); 
        } 
        permute(input);     
        input.splice(i, 0, ch); 
        usedChars.pop(); 
    } 
    return permArr 
}; 

/*
const permutations = arr => {
    if (arr.length <= 2) {
        return arr.length === 2 ? [arr, [arr[1], arr[0]]] : arr;
    }
 
    return arr.reduce((acc, el, i) =>
        acc.concat(
            permutations([...arr.slice(0, i), ...arr.slice(i + 1)]).map(val => [el, ...val])
        ),
        []
    );
};
*/
// problema 3

function problema3(){
    //definir un alfabeto

    var alfabeto = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 
                    'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    //obtener el input y dectetar la coma

    var p3_input = document.querySelector('#p3-input').value;

    var p3_palabras = p3_input.split(',');

    //eliminar el espacio que hay  entre cada palabra

    p3_palabras = p3_palabras.map(function (palabra){
        return palabra.replace(/\s/g, '').toUpperCase();
    });

    //calcular los caracteres unicos de cada palabra

    var p3_res = '';

    //iterar en cada palabra

    p3_palabras.forEach(function (palabra, i){
        //separar las palabras en un array para leer cada letra

        var letras_unicas = [];
        var palabra_array = palabra.split('');
        //iterar en el alfabeto
        alfabeto.forEach(function (letra, j){
            //iterar por palabra
            palabra_array.forEach(function (letra_palabra, k){
                //comprobar que la letra esta dentro del alfabet
                if(letra_palabra == letra){
                    //si la letra no la hemos contado la agregamos a un array
                    //para contar las letra unicas
                    if(letras_unicas.indexOf(letra) < 0){
                        letras_unicas.push(letra);
                    }
                }
            });

        });
        p3_res += 'Palabra: ' + palabra + ' = ' + letras_unicas.length + '\n';  
    });

    document.querySelector('#p3-output').textContent = p3_res;

}