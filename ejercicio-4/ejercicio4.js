'use strict';

//Con parámetros, con retorno


function menuComidas(plato1, plato2) {
    let primerplato = plato1;
    let segundoplato = plato2;

    return {
        Opcion1: primerplato,
        Opcion2: segundoplato
    };
}

let platoSeleccionado = menuComidas("Seco de pollo", "Seco de res");

alert(`Plato seleccionado: ${platoSeleccionado.Opcion1}, Opción 2: ${platoSeleccionado.Opcion2}`);