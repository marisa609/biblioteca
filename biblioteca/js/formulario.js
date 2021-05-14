//Captura de variables
const form = document.getElementById('form');
const nombre = document.getElementById('inputNombre');
const email = document.getElementById('inputEmail');
const asunto = document.getElementById('inputAsunto');

//Validamos cada campo conforme se está insertando
nombre.addEventListener('onkeydown', (e) => {
    e.preventDefault();
    validarNombre();
});


email.addEventListener('onkeydown', (e) => {
    e.preventDefault();
    validarEmail();
});

asunto.addEventListener('onkeydown', (e) => {
    e.preventDefault();
    validarAsunto();
});


//Creamos las funciones para validar los input conforme se están introduciento
//NOMBRE
function validarNombre() {
    const valorNombre = nombre.value.trim();
    var nombreString = '';
    var filtro = 'abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ';//Caracteres válidos
    //Recorremos el string para admitir solo los caracteres válidos
    for (var i=0; i<valorNombre.length; i++)
    if (filtro.indexOf(valorNombre.charAt(i)) != -1) 
        nombreString += valorNombre.charAt(i);
    
    //Comprobamos
    if(nombreString === ''){
        setErrorFor(nombre,'Introduzca un nombre válido.');
    } else {
        setSuccessFor(nombre);
    }
}


//EMAIL
function validarEmail() {
    const valorEmail = email.value.trim();
    var RegExPattern = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if((valorEmail.match(RegExPattern)) && (valorEmail!='')){
        setSuccessFor(email);
    } else {
        setErrorFor(email,'Introduzca un email válido.');
    }
}

//ASUNTO
function validarAsunto() {
    const valorAsunto = asunto.value.trim();
    var asuntoString = '';
    var filtro = 'abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ';//Caracteres válidos
    //Recorremos el string para admitir solo los caracteres válidos
    for (var i=0; i<valorAsunto.length; i++)
    if (filtro.indexOf(valorAsunto.charAt(i)) != -1) 
        asuntoString += valorAsunto.charAt(i);
    
    //Comprobamos
    if(asuntoString === ''){
        setErrorFor(asunto,'Introduzca un asunto válido.');
    } else {
        setSuccessFor(asunto);
    }
}


//Función para lanzar el error
function setErrorFor(input, mensaje){
    const formGroup = input.parentElement;
    const small = formGroup.querySelector('small');
    small.innerText = mensaje;
    formGroup.className = 'col-sm-10 error';
}

//Función que confirma que todo está correcto: pone en verde el input
function setSuccessFor(input){
    const formGroup = input.parentElement;
    formGroup.className = 'col-sm-10 success';
}

