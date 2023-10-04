//ATUALIZAR PÁGINA AO REDIMENCIONAR A JANELA
function resizing(){
  var timer;
  window.addEventListener('resize', function(){
    clearTimeout(timer);
    timer = setTimeout(function() {
      location.href = window.location.href;
    }, 1000);
  })
}
resizing();

//ANIMAÇÃO DE LOADING
function loading() 
{
  window.addEventListener("load", function()
  {
    this.setTimeout(function() {
      document.getElementById('load').style.display = "none";
      document.getElementById('ready').style.display = "block";
    });

    this.setTimeout(function() {
      document.getElementById('ready').style.transform = "scale(4, 4)";
      document.getElementById('ready').style.opacity = "0.3";
      document.getElementById('content').style.opacity = "1";
    }, 3000); 
  })
}
loading();

//VALIDAR FORMULÁRIO
function checkFirstname(firstname)
{
  if(firstname.value.match(/^[A-Z]{1}[a-z]{1,}$/) == null) 
  {
    return false;
  }
}

function checkLastname(lastname){
  if(lastname.value.match(/^[A-Z]{1}[a-z]{1,}$/) == null) 
  {
    return false;
  }
}

function checkEmail(email){
  if(email.value.match(/^([a-z0-9_-]{1,})+@+([a-z.]{1,})$/) == null)
  {
    return false;
  }
}

function checkPassword(password)
{
  if(password.value.match(/^[A-Za-z0-9]{1,}$/) == null)
  {
    return false;
  } 
}

function invalidField(el)
{
  el.style.border = "2px solid red";
}

function checkForm()
{
  var firstname = document.getElementById('firstname');
  var lastname = document.getElementById('lastname');
  var email = document.getElementById('email');
  var password = document.getElementById('password');

  if(checkFirstname(firstname) == false)
  {
    invalidField(firstname);
  }
  else if(checkLastname(lastname) == false)
  {
    invalidField(lastname);
  }
  else if(checkEmail(email) == false)
  {
    invalidField(email);
  }
  else if(checkPassword(password) == false)
  {
    invalidField(password);
  }
}