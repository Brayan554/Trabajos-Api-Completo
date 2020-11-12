const form = document.getElementById('form');
const username = document.getElementById('username');
const correo = document.getElementById('usuario');
const password = document.getElementById('password');


let usu = [];

form.addEventListener('submit', function (event) {
  event.preventDefault();
  let users = Array({
    usuario: username.value,
    correo: correo.value,
    password: password.value,
  });

  if (localStorage.getItem('user') == null) {
    usu.push(users);
    localStorage.setItem('user', JSON.stringify(users));
    location.href = 'home.html';
  } else {
    usu = JSON.parse(localStorage.getItem('user'));
    exiteUser(users);
    if (!existe) {
      usu.push(users);
      localStorage.setItem('user', JSON.stringify(users));
      location.href = 'home.html';
    } else {
      console.log('el usuario ya existe ');
    }
  }
});

const exiteUser = (userIn) => {
  let usuarioGuardados = JSON.parse(localStorage.getItem('user'));
  existe = false;
  usu.forEach((usuarioGuardados) => {
    if (usuarioGuardados.usuario == userIn.usuario) existe = true;
  });
};

// let existe;

// form.addEventListener('submit', function (event) {
//   event.preventDefault();
//   let users = Array({
//     usuario: username.value,
//     correo: correo.value,
//     password: password.value,
//   });

//   localStorage.setItem('user', JSON.stringify(users));
//   location.href = 'home.html';
// });