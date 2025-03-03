function cambio(){
    document.getElementById("fondo").classList.add("rojo")
}

function textos(){
    document.getElementById("textouno").innerHTML="cambio"; 
    document.getElementById("textodos").innerHTML="cambiosky"; 
    document.getElementById("textotres").innerHTML="kcyo"; 
} 

function verificar(){
    const numero= document.getElementById("numero").value;
    if (numero>0){
        document.getElementById("resultado").innerHTML="es mayor";
    }
}

    var usuario={
        nombre:"Brayan Camilo Carreño Pinto",
        edad: 19,
        correo: "bccarrenop@gmail.com"
    }
    
function miobjeto(){
    document.getElementById("datos").innerHTML=`Nombre:${usuario.nombre} Edad: ${usuario.edad} y Correo:${usuario.correo}`
}

function lista (){
    var notas=["miguel", "daniel","Santiago","paula",usuario.nombre];
    for (var i=0; i<notas.length;i++){
        document.getElementById("la-lista").innerHTML+=`<li>${notas[i]}</li>`
    }
}