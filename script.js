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

    saldos.appendChild(saldoActual);
  } else if (
    username.value == cuentas[1].nombre &&
    password.value == cuentas[1].clave
  ) {
    formlogin.classList.add("hide");
    infocuenta.classList.remove("hide");
    document.getElementById('tituloBienvenida').innerHTML = `Bienvenido ${username.value}`;
  } else if (
    username.value == cuentas[2].nombre &&
    password.value == cuentas[2].clave
  ) {
    formlogin.classList.add("hide");
    infocuenta.classList.remove("hide");
    document.getElementById('tituloBienvenida').innerHTML = `Bienvenido ${username.value}`;
  } else {
    alert("Usuario o contraseña incorrectos");
  }
}
