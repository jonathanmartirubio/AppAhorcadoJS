window.addEventListener("load", mostrarUsuarios);

function mostrarUsuarios(){
    var usersRef = db.collection('users');

    var divPuntuacion = document.getElementById("panel-izquierdo");

    var tabla = document.createElement("table");
    divPuntuacion.append(tabla);
    var trCabecera = document.createElement("tr");
    tabla.append(trCabecera);
    var trBody = document.createElement("tr");
    tabla.append(trBody);
    var tdJugadores = document.createElement("td");
    tdJugadores.innerHTML = "Jugador";
    var tdPts = document.createElement("td");
    tdPts.innerHTML = "Pts";
    trCabecera.append(tdJugadores);
    trCabecera.append(tdPts);

    var tdUlLeft = document.createElement("td");
    trBody.append(tdUlLeft);
    var tdUlRight = document.createElement("td");
    trBody.append(tdUlRight);

    var ulleft = document.createElement("ul");
    var ulright = document.createElement("ul");
    ulright.className = "ul-right";
    ulleft.className = "ul-left";
    tdUlLeft.append(ulleft);
    tdUlRight.append(ulright);

    usersRef.orderBy("score", "desc").get().then((querySnapshot => {
        querySnapshot.forEach((doc) => {
            var lileft = document.createElement("li");
            ulleft.append(lileft);
            lileft.append(doc.data().name);
            var liright = document.createElement("li");
            ulright.append(liright);
            liright.append(doc.data().score);
        });
    }));
}
