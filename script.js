const cuentas = [
  { nombre: "Mali", saldo: 200, clave:123456},
  { nombre:"Gera", saldo: 290, clave:123456},
  { nombre: "Maui", saldo: 67, clave:123456}
];
console.log(cuentas)
const username = document.getElementById('username');
const password = document.getElementById('password');
const formlogin = document.getElementById('form-login');
const infocuenta = document.getElementById('pag-user');

function login(){
    if (username.value == cuentas[0].nombre && password.value == cuentas[0].clave ) {
        formlogin.classList.add("hide");
        infocuenta.classList.remove("hide");
        const titulo = document.createElement('h2');
        titulo.textContent = `Bienvenido ${username.value}`; 
        
        infocuenta.appendChild(titulo);


    }else if (username.value == cuentas[1].nombre && password.value == cuentas[1].clave ) {
        const titulo = document.createElement('h2');
        titulo.textContent = `Bienvenido ${username.value}`; 
        
        infocuenta.appendChild(titulo); 

    }else if (username.value == cuentas[2].nombre && password.value == cuentas[2].clave ) {
        const titulo = document.createElement('h2');
        titulo.textContent = `Bienvenido ${username.value}`; 
        
        infocuenta.appendChild(titulo);

    }else{
        alert("algo mal")
    }
    
}; 
