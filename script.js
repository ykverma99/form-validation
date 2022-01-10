const form = document.getElementById('form');
const username = document.getElementById('input-name')
const email = document.getElementById('input-email')
const password = document.getElementById('input-password')
const password2 = document.getElementById('input-password-2')


// form validation

form.addEventListener('submit',e =>{
    e.preventDefault();
    
    ValidateForm();
})

// function for erorr

const setError = (element,message) =>{
    const inputControl = element.parentElement 
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('errorr')
    inputControl.classList.remove('sucess')
}

// function for sucess

const setSucess = element =>{
    const inputControl =element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.remove('errorr')
}


const invalidEmail = email =>{
    const re = /[A-Z a-z ._0-9]{3,}[@][A_z a-z]{3,5}[.][A-z a-z.]{2,6}/
    return re.test(String(email).toLowerCase());
}

const ValidateForm =  () => {
    const userNameValue = username.value.trim()
    const emailValue = email.value.trim()
    const passwordValue = password.value.trim()
    const password2Value = password2.value.trim()

    // check UserName

    if(userNameValue === ''){
        setError(username,'Enter valid username');
    }else{
        setSucess(username);
    }

    // check email

   if(!invalidEmail(emailValue)){
       setError(email, 'Please Enter valid email')
    }else if(emailValue === ''){
        setError(email, 'Please Enter an email')
    }else{
        setSucess(email)
    }

    // check password

    if(passwordValue === ''){
        setError(password, 'Enter password')
    }else if(passwordValue.length < 8){
        setError(password,'Atleast input 8 charcter')
    }else{
        setSucess(password)
    }

    // check password again

    if(password2Value === ''){
        setError(password2, 'Enter password')
    }else if(password2Value !== passwordValue){
        setError(password2, 'Please enter same password')
    }
    else if(password2Value === passwordValue){
        setSucess(password2)
    }
}