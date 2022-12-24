const form = document.getElementById("form");

const campos = document.querySelectorAll(".required");

const spans = document.querySelectorAll(".span-required");

const emailRejex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

form.addEventListener('submit', (event) => {
  event.preventDefault();
  nameValidate();
  lastNameValidate();
  emailValidate();
})

function validate(){
  nameValidate();
  lastNameValidate();
  emailValidate();
}

function nameValidate() {
  if (campos[0].value.length <= 3) {
    setError(0);
  } else {
    removeError(0);
  }
}

function lastNameValidate() {
  if (campos[1].value.length <= 3) {
    setError(1);
  } else {
    removeError(1);
  }
}

function emailValidate(){
  if (!emailRejex.test(campos[2].value)){
    setError(2);
  }else{
    removeError(2);
  }
}

function setError(index) {
  campos[index].style.border = '2px solid #e63636';
  spans[index].style.display = 'block';
}

function removeError(index) {
  campos[index].style.border = '';
  spans[index].style.display = 'none';
}