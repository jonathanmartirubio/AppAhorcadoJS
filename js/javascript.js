var jugador1, jugador2, palabra, letra;
var CONT_INTENTOS = 6;
var PTS_J1 = 0;
var PTS_J2 = 0;
var VICTORIA = 3;
var TURNO = 1;
let cadauxcorrecta;
var stringIncorrectas = '';
var numImg = 2;

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

function NombreJugadores(){
    jugador1 = document.getElementById("jugador1").value;
    jugador2 = document.getElementById("jugador2").value;
}

function ResolverTurno(id){
    if(SolucionCorrecta() || CONT_INTENTOS == 0){
        RepartirPuntos();
        TURNO++;
        ActualizarPuntuaciones();
        ResetearValores();
        MostrarOcultarForms(id);
        MostrarGanador();
        if(id == 'form-letra-j2'){
            MostrarOcultarForms('form-palabra-j2');
        }else{
            MostrarOcultarForms('form-palabra-j1');
        }

    }
}

function RecogerDatos(id){
   switch(id){
        case 'form-nombres':
            MostrarOcultarForms(id);
            MostrarOcultarForms('form-palabra-j1');
            NombreJugadores();
            ActualizarPuntuaciones();
        break;
        case 'form-palabra-j1':
            MostrarOcultarForms(id);
            MostrarOcultarForms('form-letra-j2');
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
                        ResolverTurno(id);
            }else{
                CONT_INTENTOS--;
                ResolverTurno(id);
                MostrarImagen(numImg);
                numImg++;
                document.getElementById("letras-erroneas").value = stringIncorrectas;
                document.getElementById("cont-intentos").value = CONT_INTENTOS;
            }
        break;
        case 'form-palabra-j2':
            MostrarOcultarForms(id);
            MostrarOcultarForms('form-letra-j1');
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
                ResolverTurno(id);
            }else{
                CONT_INTENTOS--;
                ResolverTurno(id);
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
            MostrarOcultarImgs(nimg);
            break;
        case 2:
            MostrarOcultarImgs(nimg);
            break;
        case 3:
            MostrarOcultarImgs(nimg);
            break;
        case 4:
            MostrarOcultarImgs(nimg);
            break;
        case 5:
            MostrarOcultarImgs(nimg);
            break;
        case 6:
            MostrarOcultarImgs(nimg);
            break;
        case 7:
            MostrarOcultarImgs(nimg);
            break;
    }
}