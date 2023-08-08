var cuentas = [
  { nombre: "Mali", saldo: 200 },
  { nombre:"Gera", saldo: 290 },
  { nombre: "Maui", saldo: 67 }
];

const username = document.getElementById('username');
const password = document.getElementById('password');
const button = document.getElementById('button-login');

button.addEventListener('click', (e) =>{
    e.preventDefault()
    const data = {
        username: username.value,
        password: password.value
    }
   console.log(data);
})