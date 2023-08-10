const cuentas = [
  { nombre: "Mali", saldo: 200, clave: 123456 },
  { nombre: "Gera", saldo: 290, clave: 123456 },
  { nombre: "Maui", saldo: 67, clave: 123456 },
];
console.log(cuentas);

const username = document.getElementById("username");
const password = document.getElementById("password");
const formlogin = document.getElementById("form-login");

const infocuenta = document.getElementById("pag-user");
const saldos = document.getElementById("saldocuenta");
const input = document.getElementById("movimientos-cuenta");
const botonDeposito = document.getElementById("btn-deposito");
const botonRetiro = document.getElementById("btn-retiro");





function login() {
  if (
    username.value == cuentas[0].nombre &&
    password.value == cuentas[0].clave
  ) {
    formlogin.classList.add("hide");
    infocuenta.classList.remove("hide");
    document.getElementById('tituloBienvenida').innerHTML = `Bienvenido ${username.value}`; 

    let saldoActual = document.createElement('label');
    saldoActual.className = "saldo";
    saldoActual.innerHTML = `Su saldo actual es ${cuentas[0].saldo}`;
    //BOTON DEPOSITO
    botonDeposito.addEventListener('click', function(e){
      console.log(e);
      //tomar cantidad a depositar
      const deposito = input.value;
      //convertir a numero
      const numDeposito = Number(deposito);
      
      //saber cuanto hay en su cuenta
      const saldoCuenta = cuentas[0].saldo;
      //sumarlo con el deposito
      const nuevoSaldo = numDeposito+saldoCuenta;
      //mostrar en el elemento
      //mostrar en el label el saldo de la cuenta
      cuentas[0].saldo = nuevoSaldo;
      saldoActual.innerText = `Su saldo actual es: ${cuentas[0].saldo}`;
    })

    //BOTON RETIRO
    botonRetiro.addEventListener('click', function(e){
      console.log(e);
      //tomar cantidad a retirar
      const retiro = input.value;
      //convertir a numero
      const numRetiro = Number(retiro);
      
      //saber cuanto hay en su cuenta
      const saldoCuenta = cuentas[0].saldo;
      //validar si el monto es menor que el saldo
      if (numRetiro < saldoCuenta) {
        //restarlo con el retiro
         const nuevoSaldo = saldoCuenta-numRetiro;
         cuentas[0].saldo = nuevoSaldo;
      }else alert("Monto a retirar mayor al saldo")
      
      //mostrar en el elemento
      //mostrar en el label el saldo de la cuenta
      saldoActual.innerText = `Su saldo actual es: ${cuentas[0].saldo}`;
    });


    saldos.appendChild(saldoActual);
  } else if (
    username.value == cuentas[1].nombre &&
    password.value == cuentas[1].clave
  ) {
    formlogin.classList.add("hide");
    infocuenta.classList.remove("hide");
    document.getElementById('tituloBienvenida').innerHTML = `Bienvenido ${username.value}`;

    let saldoActual = document.createElement('label');
    saldoActual.className = "saldo";
    saldoActual.innerHTML = `Su saldo actual es ${cuentas[1].saldo}`;

    botonDeposito.addEventListener('click', function(e){
      console.log(e);
      //tomar cantidad a depositar
      const deposito = input.value;
      //convertir a numero
      const numDeposito = Number(deposito);
      
      //saber cuanto hay en su cuenta
      const saldoCuenta = cuentas[1].saldo;
      //sumarlo con el deposito
      const nuevoSaldo = numDeposito+saldoCuenta;
      //mostrar en el elemento
      //mostrar en el label el saldo de la cuenta
      cuentas[1].saldo = nuevoSaldo;
      saldoActual.innerText = `Su saldo actual es: ${cuentas[1].saldo}`;
    });

    //BOTON RETIRO
    botonRetiro.addEventListener('click', function(e){
      console.log(e);
      //tomar cantidad a retirar
      const retiro = input.value;
      //convertir a numero
      const numRetiro = Number(retiro);
      
      //saber cuanto hay en su cuenta
      const saldoCuenta = cuentas[1].saldo;
      //validar si el monto es menor que el saldo
      if (numRetiro < saldoCuenta) {
        //restarlo con el retiro
         const nuevoSaldo = saldoCuenta-numRetiro;
         cuentas[1].saldo = nuevoSaldo;
      }else alert("Monto a retirar mayor al saldo")
      
      //mostrar en el elemento
      //mostrar en el label el saldo de la cuenta
      saldoActual.innerText = `Su saldo actual es: ${cuentas[1].saldo}`;
    });

    saldos.appendChild(saldoActual);
  } else if (
    username.value == cuentas[2].nombre &&
    password.value == cuentas[2].clave
  ) {
    formlogin.classList.add("hide");
    infocuenta.classList.remove("hide");
    document.getElementById('tituloBienvenida').innerHTML = `Bienvenido ${username.value}`;

    let saldoActual = document.createElement('label');
    saldoActual.className = "saldo";
    saldoActual.innerHTML = `Su saldo actual es ${cuentas[2].saldo}`;

    botonDeposito.addEventListener('click', function(e){
      console.log(e);
      //tomar cantidad a depositar
      const deposito = input.value;
      //convertir a numero
      const numDeposito = Number(deposito);
      
      //saber cuanto hay en su cuenta
      const saldoCuenta = cuentas[2].saldo;
      //sumarlo con el deposito
      const nuevoSaldo = numDeposito+saldoCuenta;
      //mostrar en el elemento
      //mostrar en el label el saldo de la cuenta
      cuentas[2].saldo = nuevoSaldo;
      saldoActual.innerText = `Su saldo actual es: ${cuentas[2].saldo}`;
    });

    //BOTON RETIRO
    botonRetiro.addEventListener('click', function(e){
      console.log(e);
      //tomar cantidad a retirar
      const retiro = input.value;
      //convertir a numero
      const numRetiro = Number(retiro);
      
      //saber cuanto hay en su cuenta
      const saldoCuenta = cuentas[2].saldo;
      //validar si el monto es menor que el saldo
      if (numRetiro < saldoCuenta) {
        //restarlo con el retiro
         const nuevoSaldo = saldoCuenta-numRetiro;
         cuentas[2].saldo = nuevoSaldo;
      }else alert("Monto a retirar mayor al saldo")
      
      //mostrar en el elemento
      //mostrar en el label el saldo de la cuenta
      saldoActual.innerText = `Su saldo actual es: ${cuentas[2].saldo}`;
    });

    saldos.appendChild(saldoActual);
  } else {
    alert("Usuario o contraseña incorrectos");
  }
}
