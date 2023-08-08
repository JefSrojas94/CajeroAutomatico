const cuentas = [
  { nombre: "Mali", saldo: 200, clave:123456},
  { nombre:"Gera", saldo: 290, clave:123456},
  { nombre: "Maui", saldo: 67, clave:123456}
];
console.log(cuentas)
const username = document.getElementById('username');
const password = document.getElementById('password');
const section = document.getElementById('info-cuenta')

function login(){
    if (username.value == cuentas[0].nombre && password.value == cuentas[0].clave ) {
            

    }else if (username.value == cuentas[1].nombre && password.value == cuentas[1].clave ) {
        

    }else if (username.value == cuentas[2].nombre && password.value == cuentas[2].clave ) {
        
        
    }else{
        alert("algo mal")
    }
    
}; 
