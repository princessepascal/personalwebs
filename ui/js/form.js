const myForm =document.querySelector('#my-form');
const name = myForm['name'];
const email = myForm['email'];
const password  = myForm['password'] ;
const number = myForm['number'] ;
const nameErrors = document.querySelector('#nameErrors');
const emailErrors = document.querySelector('#emailErrors');
const passwordErrors = document.querySelector('#passwordErrors');
const numberErrors = document.querySelector('#numberErrors');
myForm.addEventListener('submit' , e=> 
{ console.log (email.value)
    e.preventDefault();
    if(
        name.value === ''|| null
    )
{
    nameErrors.style.display= 'block';
    nameErrors.innerHTML='<p>Name is required<p/>';

}
if( password.value.length < 6 ||  password.value.length > 20  ){
    passwordErrors.style.display = 'block';
    passwordErrors.innerHTML='<p>Password must be longer than 6 characters and less tahn 20 <p/>';
}
if( password.value === 'password' ){
    passwordErrors.style.display = 'block';
    passwordErrors.innerHTML='<p>Password cannot be password</p>';
}
if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value) === false){
    emailErrors.style.display = 'block';
    emailErrors.innerHTML = '<p> Enter valid email </p>'
}

} )