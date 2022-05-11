// script login

document.querySelector('#button-log-ingresar').addEventListener('click', validar);

var credenciales = document.querySelector('.credenciales_error');


function validar() {
    var usuario = document.getElementById('usuario').value;
    let password = document.getElementById('password').value;
    
    console.log(password);
    if (usuario == "Admin" && password == "Kuepa2022") {
        window.location = "dashboard.html";
    }
    else {
        alert('error')
    }
}

document.querySelector("#button-guardar").addEventListener('click'.guardar);

function guardar() {
    window.alert = "dashboard.html";
}

