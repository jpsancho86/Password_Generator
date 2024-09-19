let cantidad= document.getElementById('cantidad');
let boton= document.getElementById('generar');
let contrasena= document.getElementById('contrasena');
let validacion=document.getElementById('validacion');

const caracteres= 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*'

function generar(){

    let numero= parseInt(cantidad.value);
    let password="";
    if(numero<8){
        alert("La cantidad de caracteres tiene que ser mayor a 8");
        cantidad.value="";
    }
    else{
        for(let i=0; i<numero; i++){
            let ramdon= caracteres[Math.floor( Math.random()*caracteres.length)];
            password+=ramdon;
        }
        contrasena.value=password;
    }
}

function limpiar(){
    contrasena.value="";
    cantidad.value="";
}

function validar(){
    
    var mayusculas="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numeros= "0123456789";
    if(contrasena.hasAttributes(mayusculas) && contrasena.hasAttributes(numeros) ){
        validacion.value=("La contraseña es fuerte");
    }
    else{
        validacion.ariaValueNow=("La contraseña es debil");
    }
}






