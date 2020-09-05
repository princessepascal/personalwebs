const myform = document.querySelector('#my-form');
const name = myForm['name'];
const number = myForm['number'];
const message = myform['message'];
const nameErrors = document.querySelector['#nameErrors'];
const messageErrors = document.querySelector['#messageErrors'];
const numberErrors = document.querySelector['#numberErrors'];

myForm.addEventListener('submit' , e =>{
e.preventDefault();
if( name.value === '')
{
    nameErrors.style.display= 'block';
    nameErrors.innerHTML= '<p> Enter a name</p>';
}

  }  )