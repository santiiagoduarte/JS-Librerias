class Tarjeta {
    constructor(id, marcaDeTarjeta, interes) {
        this.id = id;
        this.marcaDeTarjeta = marcaDeTarjeta;
        this.interes = interes;
    }
}

let tarjetas = [];
let tarjetaVisa = new Tarjeta(1, "Visa", 1.34);
let tarjetaMaster = new Tarjeta(2, "Master", 1.45);
let tarjetaAmex = new Tarjeta(3, "AmericanExpress", 2.45);

tarjetas.push(tarjetaVisa);
tarjetas.push(tarjetaMaster);
tarjetas.push(tarjetaAmex);

let continuar = false;

function generarOptionsForTarjeta() {
    tarjetas.forEach(tarjeta => {
        let tarjetaSelect = document.getElementById("tarjeta"); 
        let optionTarjetas = `<option value=${tarjeta.id}>${tarjeta.marcaDeTarjeta}</option>`
        tarjetaSelect.innerHTML += optionTarjetas;
    });
}

function calculoInteres(monto, cantidadCuotas, interes) {
    let resultado = monto / cantidadCuotas * interes;
    return resultado;
}

generarOptionsForTarjeta();

// let form = document.getElementById("form");
// form.addEventListener("submit", (e) => {
//     e.preventDefault();
//     const montoIngresado = document.getElementById("monto").value;
//     const cuotasIngresadas = document.getElementById("cuotas").value;
//     const tarjetaIngresada = document.getElementById("tarjeta").value;
//     let tarjetaSeleccionada = tarjetas.find(tarjeta => tarjeta.id == tarjetaIngresada);
//     let resultado = montoIngresado / cuotasIngresadas * tarjetaSeleccionada.interes;
//     alert(resultado);
// });

let outputClick = document.getElementById("button");
    outputClick.onclick = output;
    function output(){
        const montoIngresado = document.getElementById("monto").value;
        const cuotasIngresadas = document.getElementById("cuotas").value;
        const tarjetaIngresada = document.getElementById("tarjeta").value;
        let tarjetaSeleccionada = tarjetas.find(tarjeta => tarjeta.id == tarjetaIngresada);
        let resultado = montoIngresado / cuotasIngresadas * tarjetaSeleccionada.interes;
        alert(resultado);
    Swal.fire({
         title: 'El valor de la cuota mensual es: ',
         text: resultado,
         confirmButtonText: 'OK'
       })
    }