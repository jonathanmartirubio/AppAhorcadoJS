var jugador1, jugador2, palabra, letra;
var CONT_INTENTOS = 6;
//TODO: Buscar como crear un array con un numero de elementos fijo.
function EmpezarPartida(){
    /*var formInicial = document.getElementById("form-nombres");
    formInicial.style.display = "block";*/
    window.location.href = 'ahorcado.html';
}
function BuscarLetra(){
    var encontrada = true;

    for (var i = 0; i < palabra.length && encontrada == true; i++) {
        if(palabra[i] == letra[0]){
            cadauxcorrecta[i] = letra[0];
        }else{
            stringIncorrectas += letra[0] + ' ';
            CONT_INTENTOS--;
            encontrada = false;
        }
    }
    return encontrada;
}

function RecogerDatos(id){
   switch(id){
        case 'form-nombres':
            MostrarOcultarForms(id);
            var FormPalabraJ1 = document.getElementById("form-palabra-j1");
            FormPalabraJ1.style.display = "block";
            jugador1 = document.getElementById("jugador1").value;
            jugador2 = document.getElementById("jugador2").value;
        break;
        case 'form-palabra-j1':
            MostrarOcultarForms(id);
            var FormLetraJ2 = document.getElementById("form-letra-j2");
            FormLetraJ2.style.display = "block";
            palabra = document.getElementById("palabra-j1").value;
            cadaux = new Array(palabra.length);
            cadaux.fill('-');
        break;
        case 'form-letra-j2':
            letra = document.getElementById("letra-j2").value;
            var encontrada = BuscarLetra(); 
            if(encontrada){
                document.getElementById("letras-correctas").value = cadaux;
            }else{
                document.getElementById("letras-erroneas").value = stringIncorrectas;
                document.getElementById("cont-intentos").value = CONT_INTENTOS;
            }
        break;
    }
}

function MostrarOcultarForms(id){
        var divform = document.getElementById(id);
        if(divform.style.display == "block"){
            divform.style.display = "none";
        }else{
            divform.style.display = "block";
        }
}

function MostrarOcultarImgs(nimg)
{
    for(var i = 1; i <= 7; i++){
                var imagen = "imagen";

                var divimg = document.getElementById(imagen+i);

                if((imagen+i) == (imagen+nimg)){
                    divimg.style.display = "block";
                }else{
                    divimg.style.display = "none";
                }
            }
}


function MostrarImagen(nimg)
{
    switch(nimg){
        case 1:
            MostrarOcultarDivs(nimg);
            break;
        case 2:
            MostrarOcultarDivs(nimg);
            break;
        case 3:
            MostrarOcultarDivs(nimg);
            break;
        case 4:
            MostrarOcultarDivs(nimg);
            break;
        case 5:
            MostrarOcultarDivs(nimg);
            break;
        case 6:
            MostrarOcultarDivs(nimg);
            break;
        case 7:
            MostrarOcultarDivs(nimg);
            break;
    }
}
