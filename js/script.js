const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let data = {
    name,
    email,
  }
  let convertData = JSON.stringify(data);

  localStorage.setItem('lead', convertData)

  let content = document.getElementById('content')

  let carregando = `<p>SALVANDO...</p>`

  let pronto = `<p>INSCRITO</p><a href="">VER A LOJA</a>`

  content.innerHTML = carregando


  setTimeout(() => {
    content.innerHTML = pronto
  }, 1000)

})