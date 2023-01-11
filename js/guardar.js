var idJugador = "";

function generarId(){
    const caracteres ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var id = "";
    let existe = true;

    const longitud = caracteres.length;

    while(existe) {
        for(let i = 0; i < 20; i++){
            id += caracteres.charAt(Math.floor(Math.random() * longitud));
        }
        existe = false;
        db.collection('users').get().then((querySnapshot => {
            querySnapshot.forEach((doc) => {
                
                if(doc.id == id){
                    existe = true;
                }
            });
        }));    
    }
    idJugador = id;
    return id;
}

function guardarUsuario(nombre){
    db.collection('users').doc(generarId()).set({
        name: nombre,
        score: "0"
    })
    .then(() => {
        console.log("Usuario Guardado correctamente!");
    })
    .catch((error) => {
        console.error("Error al guardar usuario...", error);
    });
}

function actualizarScore(idjug, pts){
    var usersRef = db.collection("users").doc(idjug);

    return usersRef.update({
        score: `${pts}`
    })
    .then(function(){
        console.log("Puntos actualizados");
    })
    .catch(function(error){
        console.error("Error actualizando puntuacion", error);
    });
}