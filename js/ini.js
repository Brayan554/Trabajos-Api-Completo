const ini = document.getElementById('ini');
let lista = JSON.parse(localStorage.getItem('user'));

ini.addEventListener('click', () => {
  const email = document.getElementById('txtCorreo');
  const password = document.getElementById('txtContrasena');

  const txtCorreo = email.value;
  const txtContrasena = password.value;

  console.log(txtCorreo);
  console.log(txtContrasena);
  if (lista[0].usuario == txtCorreo && lista[0].password == txtContrasena) {
    location.href = 'home.html';
    txtCorreo = '';
    txtContrasena = '';
  } else {
    alert('verifique sus credenciales o cree una cuenta');
    return false;
  }
});
console.log(lista);
