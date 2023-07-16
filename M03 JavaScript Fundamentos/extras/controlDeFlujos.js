function viajar(destino){
    if (destino === "Brasil") {
        console.log("Gire a la IZQUIERDA");
    } else if (destino === "Argentina") {
        console.log('Gire a la DERECHA');
    } else {
        console.log(`NOS PERDIMOS! AYUDAAA! No se que hacer ahora en ${destino}`);
    }
}

viajar("Londres");