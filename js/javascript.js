var jugador1, jugador2, palabra, letra;
var CONT_INTENTOS = 6;
var PTS_J1 = 0;
var PTS_J2 = 0;
let cadauxcorrecta;
var stringIncorrectas = '';

function EmpezarPartida(){
    /*var formInicial = document.getElementById("form-nombres");
    formInicial.style.display = "block";*/
    window.location.href = 'ahorcado.html';
}
function RellenarCadenaCorrecta(){
    for(var i = 0; i < palabra.length; i++){
        if(palabra[i] == letra[0]){
            cadauxcorrecta[i] = letra[0];
        }
    }
}
function RellenarCadenaIncorrecta(){
    var rellenado = false;
    for(var i = 0; i < palabra.length && !rellenado; i++){
        if(palabra[i] != letra[0]){
            stringIncorrectas += letra[0];
            rellenado = true;
        }
    }
}
function BuscarLetra(){
    var encontrada = false;

    if(palabra.includes(letra[0])){
        RellenarCadenaCorrecta();
        encontrada = true;
    }else{
        RellenarCadenaIncorrecta();
        encontrada = false;
    }
    return encontrada;
}

function SolucionCorrecta(){
    var iguales = true;

    if(palabra.length != cadauxcorrecta.length){
        iguales = false
    }else{
        for (let index = 0; index < palabra.length; index++) {
            if(palabra[index] != cadauxcorrecta[index]){
                iguales = false;
                break;
            }
        }
    }

    return iguales;
}

function ActualizarPuntuaciones(){
    document.getElementById("pts-j1").value = PTS_J1;
    document.getElementById("pts-j2").value = PTS_J2;
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
            cadauxcorrecta = new Array(palabra.length);
            cadauxcorrecta.fill('-');
        break;
        case 'form-letra-j2':
            letra = document.getElementById("letra-j2").value;
            var encontrada = BuscarLetra(); 
            if(encontrada){
                document.getElementById("letras-correctas").value = cadauxcorrecta.join(' ');
                    if(SolucionCorrecta()){
                        PTS_J2++;
                        ActualizarPuntuaciones();
                    }

            }else{
                CONT_INTENTOS--;
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
