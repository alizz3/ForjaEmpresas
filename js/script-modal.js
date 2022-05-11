
//script modal



const modal = document.querySelector('.modal');
const capa = document.querySelector('.capa');
const openModal = document.querySelector('.buscar_db');
const closeModal = document.querySelector('.close_db');

var cedula = document.querySelector('.cedula_modal');
var nombre = document.querySelector('.name_modal');
var dosis = document.querySelector('.dosis_modal');

var tabla = document.querySelector('.tabla');
var dosisUna = document.querySelector('.dosisUna');
var dosisDos = document.querySelector('.dosisDos');
var dosisTres = document.querySelector('.dosisTres');


var textButtonModal = document.querySelector('.button-dashuser1');


openModal.addEventListener('click', function (e) {
    var documento = document.getElementById('documento').value;
    //alert(documento)
    //console.log(documento)
    e.preventDefault();


    if (documento == 52368795 || documento == 1) {
        capa.style.opacity = "1";
        modal.classList.add('modal_Show')

        cedula.innerHTML = 'C.C ' + documento;
        nombre.innerHTML = 'Gilbert Stiven Perdomo Florez';
        dosis.innerHTML = 'El paciente cuenta únicamente con la primera dosis';
        textButtonModal.innerHTML = 'Agendar Vacuna';

        tabla.classList.add('table-show')
        tabla.classList.remove('table-hidde')

        dosisUna.style.display = 'init'
        dosisDos.style.display = 'none';
        dosisTres.style.display = 'none';

        console.log(cedula)
    }

    else if (documento == 1001235478 || documento == 2) {
        capa.style.opacity = "1";
        modal.classList.add('modal_Show')

        cedula.innerHTML = 'C.C ' + documento;
        nombre.innerHTML = 'Luna Sophie Espinosa Flórez';
        dosis.innerHTML = 'El paciente cuenta con la primera y segunda dosis';
        textButtonModal.innerHTML = 'Agendar Vacuna';

        tabla.classList.add('table-show')
        tabla.classList.remove('table-hidde')


        dosisDos.style.display = 'initial'
        dosisUna.style.display = 'none';
        dosisTres.style.display = 'none';

        console.log(cedula)
    }

    else if (documento == 25413574 || documento == 3) {
        capa.style.opacity = "1";
        modal.classList.add('modal_Show')

        cedula.innerHTML = 'C.C ' + documento;
        nombre.innerHTML = 'Angel Joel Rojas Flórez';
        dosis.innerHTML = 'El paciente cuenta con el esquema de vacunación completo';
        textButtonModal.style.display = 'none';

        tabla.classList.add('table-show')
        tabla.classList.remove('table-hidde')



        dosisTres.style.display = 'initial'
        dosisUna.style.display = 'none';
        dosisDos.style.display = 'none';

        console.log(cedula)
    }

    else {
        


        capa.style.opacity = "1";
        modal.classList.add('modal_Show')

        cedula.innerHTML = 'C.C ' + documento;
        nombre.innerHTML = 'Paciente no registrado';
        dosis.innerHTML = '¿Desea registrar paciente?';
        textButtonModal.innerHTML = 'si, ¡gracias!';
        textButtonModal.style.display = 'flex';


        tabla.classList.add('table-hidde')
        tabla.classList.remove('table-show')

        console.log(cedula)

        document.querySelector(".b-return-db").addEventListener('click'.guardar);

        function guardar () {
            window.alert = "index.html";
        }


    }
})

closeModal.addEventListener('click', function (e) {
    e.preventDefault();
    capa.style.opacity = "0";

    modal.classList.remove('modal_Show')
})