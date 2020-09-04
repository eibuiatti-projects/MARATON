/*
Bienvenido/a!!

Te proponemos 10 ejercicios de JS para resolver de forma individual. Si te trabas con alguno, podes continuar con otro de forma independiente. 
Si corresponde el ejercicio tiene un <div> asignado en el HTML para visualizar el resultado. Algunos te piden solo tocar JS otros, JS + HTML.

Exitos! Happy coding! - Guayerd
*/

/*
Ej - 1: Mostrar con alert el siguiente texto... "Bievenidas/os al Maratón Guayerd"
*/
//alert("Bievenidas/os al Maratón Guayerd");
/*
Ej - 2: Completar/arreglar el código para que la función focusHandler() se ejecute cuando el foco este puesto en el input.ej2-nombre. 
Y cuando el foco se pierda (evento blur), borrar el contenido del div.
*/
const ej2Nombre = document.querySelector("input.ej2-nombre");
const ej2Resultado = document.querySelector(".ej2-resultado"); //Se rompe lindo, no?
ej2Nombre.addEventListener("focus", focusHandler);
ej2Nombre.addEventListener("blur", blurHandler);

function focusHandler(e){
  ej2Resultado.innerText = "El input nombre tiene el foco";
}

function blurHandler(e){
  ej2Resultado.innerText = "";
}

/*
Ej - 3: Codear la función mostrarSaludo() para mostrar un saludo desde el div.ej3
*/

const ej3Div = document.querySelector(".ej3-resultado");

const txtSaludo = "Arranquemos la maratón de código Guayerd! Starting at..." + (new Date()).toLocaleString();
mostrarSaludo(txtSaludo, ej3Div);

function mostrarSaludo(txt,posicion){
  posicion.innerText = txt;
}


/*
Ej - 4: Cuando el usuario haga "click" sobre el botón button.ej4-enviar:
  a) Leer los campos ej4-email, ej4-mensaje
  b) Mostrar el valor de esos campos en div.ej4-resultado
  c) Limpiar los campos asignando "" a los mismos
*/
const btn4 = document.querySelector(".ej4-enviar");
btn4.addEventListener("click", btn4Handler)

function btn4Handler (e){
  let email4 = document.querySelector(".ej4-email");
  let mensaje4 = document.querySelector(".ej4-mensaje");
  let resultado4 = document.querySelector(".ej4-resultado");
  resultado4.innerText = `Email: ${email4.value}, Mensaje: ${mensaje4.value}`;
  email4.value = "";
  mensaje4.value = "";
}

/*
Ej - 5: Crear un div con 2 inputs y un boton "Sumar"
  a) Cuando se clickea en "sumar", sumar ambos valores de inputs y mostrar el resultado en el div.ej5-resultado
  b) Si alguno de los valores ingresados no es numérico (isNaN) informar en div.ej5-resultado "Ingreso erróneo"
*/
let resultado5 = document.querySelector(".ej5-resultado");
let newDiv = document.createElement("div");
let inputA = document.createElement("input");
let inputB = document.createElement("input");
let btnSumar = document.createElement("button");
btnSumar.innerText = "Sumar";

newDiv.appendChild(inputA);
newDiv.appendChild(inputB);
newDiv.appendChild(btnSumar);
resultado5.appendChild(newDiv);

btnSumar.addEventListener ("click", btnSumarHandler);

function btnSumarHandler(){
 
  numA = parseInt(inputA.value);
  numB = parseInt(inputB.value);
  if (isNaN(numA) || isNaN(numB) ){
    resultado5.innerText = "Ingreso erróneo";
  }else{
    let suma = numA + numB;
    resultado5.innerText = suma; 
  }
}

/*
Ej - 6: Completar los elementos <select> del div.ej6 con los arrays correspondientes. Recorrerlos y crear los <option> según corresponda
*/
const paises = ["Argentina","Bolivia","Brasil","Chile","Colombia","Ecuador","Paraguay","Perú","Uruguay","Venezuela"];
const diasSemana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

let fragment6 = new DocumentFragment();

let selPaises = document.querySelector(".ej6-paises");
let selDiasSemana = document.querySelector(".ej6-diasSemana");

paises.forEach(function(pais){
  let option = document.createElement("option");
  option.innerText = pais;
  fragment6.appendChild(option);
});
selPaises.appendChild(fragment6);

diasSemana.forEach(function(dia){
  let option = document.createElement("option");
  option.innerText = dia;
  fragment6.appendChild(option);
});
selDiasSemana.appendChild(fragment6);
/*
Ej - 7: Dado el siguiente array, mostrar en el div.ej7-resultado el valor del select cuando el usuario selecciona un valor
*/
const momento = ["Mañana","Tarde","Noche"];

let resultado7 = document.querySelector(".ej7-resultado");
let sel7 = document.querySelector(".momentos");

let fragment7 = new DocumentFragment();

momento.forEach(function(mom){
  let option = document.createElement("option");
  option.innerText = mom;
  fragment7.appendChild(option);
});
sel7.appendChild(fragment7);

sel7.addEventListener("change", sel7Handler);

function sel7Handler(e){
  resultado7.innerText = e.target.value;
}

/*
Ej - 8: Validar un ingreso de usuario al sistema utilizando localStorage. Mostrar en div.ej8-resultado "OK" o "Error".
  El form esta creado en el div.ej8
*/
localStorage.setItem("password","js2020");//Este es el password que deben comparar con el ingreso del usuario

let input8 = document.querySelector("#password");
let btn8 = document.querySelector(".ej8 button");
let resultado8 = document.querySelector(".ej8-resultado");

btn8.addEventListener("click", btn8Handler);

function btn8Handler(){
  if(localStorage.getItem("password")=== input8.value){
    resultado8.innerText = "OK";
  }else{
    resultado8.innerText = "ERROR";
  }
}

 
/*
Ej - 9: Mostrar en el div.ej9-resultado el listado de usuarios que se encuentra en el array utilizando la siguiente plantilla:

<div class="usuario-contenedor">
  <div class="fila1">
    <span class="title">Nombre:</span><span>valor</span>
    <span class="title">NroCliente:</span><span>valor</span>
  </div>
  <div class="fila2">
    <span class="title">DNI:</span><span>valor</span>
    <span class="title">Fecha Nacimiento:</span><span>valor</span>
  </div>
</div>

*/

const usuarios = [
  {
    nombre: "Juan Perez",
    nroCliente: 1001,
    dni: 88888888,
    fechaNacimiento: "10/10/1988"
  },
  {
    nombre: "Ana Martinez",
    nroCliente: 1010,
    dni: 88888886,
    fechaNacimiento: "10/10/1990"
  },
  {
    nombre: "Susana Gomez",
    nroCliente: 1021,
    dni: 88888889,
    fechaNacimiento: "10/10/1985"
  },
];

let resultado9 = document.querySelector(".ej9-resultado");
let datosDeUsuarios = "";
usuarios.forEach(function(usuario){
  datosDeUsuarios += 
    `<div class="usuario-contenedor">
    <div class="fila1">
      <span class="title">Nombre:</span><span>${usuario.nombre}</span>
      <span class="title">NroCliente:</span><span>${usuario.nroCliente}</span>
    </div>
    <div class="fila2">
      <span class="title">DNI:</span><span>${usuario.dni}</span>
      <span class="title">Fecha Nacimiento:</span><span>${usuario.fechaNacimiento}</span>
    </div>
  </div>`

});
resultado9.innerHTML = datosDeUsuarios;


/*
Ej - 10: Nuestro cliente es una empresa de marketing que busca generar una base de datos de contactos para poder vender productos. 
Debemos crear para ellos un formulario de carga con los siguientes datos:

  - Nombre
  - Email
  - Teléfono
  - Horario de contacto (Mañana/Tarde/Noche)
  - Producto (Crédito/Celular/Viajes/Seguros)
  - Botón "Guardar"
  - Botón "Finalizar"

  a) Crear el <form> dentro del elemento div.ej10-form
  b) Crear los elementos input, select, button que correspondan
  c) Cuando el usuario hace "click" en el botón, guardar los datos de contacto en un array
  d) Limpiar los elementos del form
  e) Cada vez que se guarden datos, guardarlos tambien en localStorage
  f) Cuando la página se vuelve a cargar, recuperar el array desde localStorage si es que existe.
  e) Cuando se hace click en "Finalizar", mostrar de forma clara el listado de contactos y sus datos dentro de div.ej10-resultado y limpiar el localStorage.

  Bonus!!
  1) Validar los datos según el tipo.
  2) Todos los datos son requeridos. Evitar cargar datos vacios.
  3) Evitar cargar datos si el email ya existe en el array de contactos.
  4) En todos los casos, informar de forma clara al usuario si hay problemas de validación de datos.
*/

//posicionamiento en el DOM
let div10 = document.querySelector(".ej10-form");
let resultado10 = document.querySelector(".ej10-resultado");

let formulario10 = document.createElement("form");

let nombre10 = document.createElement("input");
nombre10.placeholder = "Ingrese Nombre";
nombre10.type = "text";


let email10 = document.createElement("input");
email10.placeholder = "Ingrese Email";
email10.pattern = "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$";

let telefono10 = document.createElement("input");
telefono10.placeholder = "Ingrese Telefono";
telefono10.type = "number";

let horarioDeContacto = document.createElement("select");
let optionH1 = document.createElement("option");
let optionH2 = document.createElement("option");
let optionH3 = document.createElement("option");
optionH1.innerText = "Mañana";
optionH2.innerText = "Tarde";
optionH3.innerText = "Noche";

let producto = document.createElement("select");
let optionP1 = document.createElement("option");
let optionP2 = document.createElement("option");
let optionP3 = document.createElement("option");
let optionP4 = document.createElement("option");
optionP1.innerText = "Crédito";
optionP2.innerText = "Celular";
optionP3.innerText = "Viajes";
optionP4.innerText = "Seguros";

let btnGuardar10 = document.createElement("button");
btnGuardar10.innerText = "Guardar";
btnGuardar10.type = "submit";

let btnFinalizar10 = document.createElement("button");
btnFinalizar10.innerText = "Finalizar";

horarioDeContacto.appendChild(optionH1);
horarioDeContacto.appendChild(optionH2);
horarioDeContacto.appendChild(optionH3);

producto.appendChild(optionP1);
producto.appendChild(optionP2);
producto.appendChild(optionP3);
producto.appendChild(optionP4);

formulario10.appendChild(nombre10);
formulario10.appendChild(email10);
formulario10.appendChild(telefono10);
formulario10.appendChild(horarioDeContacto);
formulario10.appendChild(producto);
formulario10.appendChild(btnGuardar10);
formulario10.appendChild(btnFinalizar10);

div10.appendChild(formulario10);

//principal
let contactos=[];
if(localStorage.getItem("contactos")){
  contactos = JSON.parse(localStorage.getItem("contactos"));
}
  
//eventos
btnGuardar10.addEventListener("click", btnGuardarHandler);
btnFinalizar10.addEventListener("click", btnFinalizarHandler);
formulario10.addEventListener("submit",formulario10Submit);

//funciones
function btnGuardarHandler(){
  //event.preventDefault();
  let nuevoContacto = { Nombre:nombre10.value, Email: email10.value, Telefono: telefono10.value, Horario: horarioDeContacto.value, Producto: producto.value }
  let flag = false;
  contactos.forEach(function(contacto){
    if(contacto.Email===nuevoContacto.Email){
      flag = true;
    }
  });    
  if(!flag){
    contactos.push(nuevoContacto);
    localStorage.setItem("contactos", JSON.stringify(contactos))
    nombre10.value = "";
    email10.value = "";
    telefono10.value = "";  
  }    
}

function btnFinalizarHandler(){
  event.preventDefault();
  
  contactos.forEach(function(contacto,index){
    let ul = document.createElement("ul");
    ul.innerText = `Cliente: ${index+1}`;
    let liNombre = document.createElement("li")
    liNombre.innerText = `Nombre: ${contacto.Nombre}`;
    let liEmail = document.createElement("li")
    liEmail.innerText = `Email: ${contacto.Email}`; 
    let liTelefono = document.createElement("li")
    liTelefono.innerText = `Telefono: ${contacto.Telefono}`; 
    let liHorario = document.createElement("li")
    liHorario.innerText = `Horario de Contacto: ${contacto.Horario}`;
    let liProducto = document.createElement("li")
    liProducto.innerText = `Producto: ${contacto.Producto}`; 
    ul.appendChild(liNombre);
    ul.appendChild(liEmail);
    ul.appendChild(liTelefono);
    ul.appendChild(liHorario);
    ul.appendChild(liProducto);
    resultado10.appendChild(ul);
  });
  localStorage.removeItem("contactos");
}


function formulario10Submit(){
    event.preventDefault();
    console.log("SE está submiteando el formulario!!!!!");
    if(email10.pattern != "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"){
        email10.setCustomValidity("Pusiste mal la operacion.");
    }
}