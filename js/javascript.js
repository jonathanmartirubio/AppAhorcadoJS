var jugador1, jugador2, palabra, letra;
var CONT_INTENTOS = 6;
var PTS_J1 = 0;
var PTS_J2 = 0;
var VICTORIA = 3;
var TURNO = 1;
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

function RepartirPuntos(){
    if(SolucionCorrecta()){
        if(TURNO % 2 != 0){
            PTS_J2++;
        }else{
            PTS_J1++;
        }
    }
    if(CONT_INTENTOS == 0){
        if(TURNO % 2 != 0){
            PTS_J1++;
        }else{
            PTS_J2++;
        }
    }
}
function RellenarCadenaIncorrecta(){
    var rellenado = false;
    for(var i = 0; i < palabra.length && !rellenado; i++){
        if(palabra[i] != letra[0]){
            stringIncorrectas += ' ' + letra[0];
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

function MostrarGanador(){
    if(PTS_J1 == VICTORIA){
        alert('victoria de jugador 1');
    }else{
        if(PTS_J2 == VICTORIA){
            alert('victoria de jugador 2');
        }
    }
}

function ResetearValores(){
    cadauxcorrecta = [];
    CONT_INTENTOS = 6;
    stringIncorrectas = '';
    document.getElementById("letras-erroneas").value = stringIncorrectas;
    document.getElementById("letras-correctas").value = cadauxcorrecta;
    document.getElementById("cont-intentos").value = CONT_INTENTOS;
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
            ActualizarPuntuaciones();
        break;
        case 'form-palabra-j1':
            MostrarOcultarForms(id);
            var FormLetraJ2 = document.getElementById("form-letra-j2");
            FormLetraJ2.style.display = "block";
            palabra = document.getElementById("palabra-j1").value;
            document.getElementById("cont-intentos").value = CONT_INTENTOS;
            cadauxcorrecta = new Array(palabra.length);
            cadauxcorrecta.fill('-');
        break;
        case 'form-letra-j2':
            letra = document.getElementById("letra-j2").value;
            var encontrada = BuscarLetra(); 
            if(encontrada){
                document.getElementById("letras-correctas").value = cadauxcorrecta.join(' ');
                    if(SolucionCorrecta()){
                        RepartirPuntos();
                        TURNO++;
                        ActualizarPuntuaciones();
                        alert('palabra correcta: punto para jugador 2');
                        ResetearValores();
                        MostrarOcultarForms(id);
                        var formPalabraJ2 = document.getElementById("form-palabra-j2");
                        formPalabraJ2.style.display = "block";
                        MostrarGanador();
                    }
            }else{
                CONT_INTENTOS--;
                if(CONT_INTENTOS == 0){
                    RepartirPuntos();
                    TURNO++;
                    ActualizarPuntuaciones();
                    alert('fin de los intentos: punto para jugador 1');
                    ResetearValores();
                    MostrarOcultarForms(id);
                    var formPalabraJ2 = document.getElementById("form-palabra-j2");
                    formPalabraJ2.style.display = "block";
                    MostrarGanador();
                }
                document.getElementById("letras-erroneas").value = stringIncorrectas;
                document.getElementById("cont-intentos").value = CONT_INTENTOS;
            }
        break;
        case 'form-palabra-j2':
            MostrarOcultarForms(id);
            var FormLetraJ1 = document.getElementById("form-letra-j1");
            FormLetraJ1.style.display = "block";
            palabra = document.getElementById("palabra-j2").value;
            document.getElementById("cont-intentos").value = CONT_INTENTOS;
            cadauxcorrecta = new Array(palabra.length);
            cadauxcorrecta.fill('-');
            break;
        case 'form-letra-j1':
            letra = document.getElementById("letra-j1").value;
            var encontrada = BuscarLetra(); 
            if(encontrada){
                document.getElementById("letras-correctas").value = cadauxcorrecta.join(' ');
                    if(SolucionCorrecta()){
                        RepartirPuntos();
                        TURNO++;
                        ActualizarPuntuaciones();
                        alert('palabra correcta: punto para jugador 1');
                        ResetearValores();
                        MostrarOcultarForms(id);
                        var formPalabraJ1 = document.getElementById("form-palabra-j1");
                        formPalabraJ1.style.display = "block";
                        MostrarGanador();
                    }
            }else{
                CONT_INTENTOS--;
                if(CONT_INTENTOS == 0){
                    RepartirPuntos();
                    TURNO++;
                    ActualizarPuntuaciones();
                    alert('fin de los intentos: punto para jugador 2');
                    ResetearValores();
                    MostrarOcultarForms(id);
                    var formPalabraJ1 = document.getElementById("form-palabra-j1");
                    formPalabraJ1.style.display = "block";
                    MostrarGanador();
                }
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
