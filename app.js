/**ingreso las variables que se ocuparan y les asignamos un valor */
let nom = "luis";
let apellido_paterno = "jomero"; 
let apellido_materno = "ñalasuelos";

/**La letra inicial 
 * charAt -->método devuelve el carácter en el índice especificado de una cadena.
 *  El índice del primer carácter es 0, el segundo carácter es 1, y así sucesivamente.
 * if--> en caso de que tengamos una letra ñ la va a remplazar por una x
 *  */
let letra_inicial = apellido_paterno.charAt(0);
if((letra_inicial=="ñ")|| (letra_inicial=="Ñ")){
     letra_inicial= letra_inicial.replace('ñ','x');
     //console.log(letra_inicial.replace('ñ','x'));
}//else{
    //console.log(letra_inicial);
//}
/** primera vocal interna del primer apellido, 
 * for-> contamos las letras dentro de el apellido paterno y usamos la primera que encuentra
 * la mandamos ala variable vocal_interna y finalizamos el ciclo con un bleak
 *  */
for (i = 0; i < apellido_paterno.length; i++)

{
    if ((apellido_paterno.charAt(i) == "a") || (apellido_paterno.charAt(i) == "A") || 

        (apellido_paterno.charAt(i) == "e") || (apellido_paterno.charAt(i) == "E") ||

        (apellido_paterno.charAt(i) == "i") || (apellido_paterno.charAt(i) == "I") ||

        (apellido_paterno.charAt(i) == "o") || (apellido_paterno.charAt(i) == "O") ||

        (apellido_paterno.charAt(i) == "u") || (apellido_paterno.charAt(i) == "U"))

       {
        var vocal_interna = apellido_paterno.charAt(i);
       // console.log(apellido_paterno.charAt(i));
        
        break;
      }
      

} 
/**la letra inicial del segundo apellido
 * charAt -->método devuelve el carácter en el índice especificado de una cadena.
 *  El índice del primer carácter es 0, el segundo carácter es 1, y así sucesivamente.
 * if--> en caso de que tengamos una letra ñ la va a remplazar por una x
 *  */
let letra_1_segundo_apellido = apellido_materno.charAt(0);
if((letra_1_segundo_apellido == "ñ")||(letra_1_segundo_apellido=="Ñ")){
     letra_1_segundo_apellido=letra_1_segundo_apellido.replace('ñ','x');
    //console.log(letra_1_segundo_apellido.replace('ñ','x'));

}//else{
   // console.log(letra_1_segundo_apellido);
//}

/**la primera letra del nombre.
 * charAt -->método devuelve el carácter en el índice especificado de una cadena.
 *  */
let letra_1_del_nombre = nom.charAt(0);
//console.log(letra_1_del_nombre);

/**creamos variables con su respectivo valor en fecha año y dia de nacimiento
 * 
 */

let fecha_nacimiento_dia = "19";
let fecha_nacimiento_mes = "1";
let fecha_nacimiento_año = "1997";
/**extraemos los 2 ultimos digitos del año de nacimiento
 * slice --> devuelve una copia de una parte del array dentro de un nuevo array 
 * empezando por inicio hasta fin (fin no incluido) */
var año=fecha_nacimiento_año.slice(-2);
/**console.log(año);**/


var primeras_letras=(letra_inicial+vocal_interna+letra_1_segundo_apellido+letra_1_del_nombre);
//console.log(primeras_letras);

/**
 *En caso del mes de nacimiento si es menor a 9 el mes agregamos un cero antes del numero
 si es mayor a 9 dejamos el numero tal y como esta al final concatenamos el año fecha y dia de nacimiento
 */

if(fecha_nacimiento_mes <= 9){
    /**RFC */
    console.log(primeras_letras+año+"0" + fecha_nacimiento_mes + fecha_nacimiento_dia)
}else{
    console.log(primeras_letras+año+fecha_nacimiento_mes+fecha_nacimiento_dia);
}


 


















