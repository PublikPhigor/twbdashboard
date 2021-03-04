const loginForm = document.querySelector('.login-form');
const signupForm = document.querySelector('.signup-form');
const fpPage1 = document.querySelector('.fp-page');
const fpPage2 = document.querySelector('.fp-page-2');
const showLogin = document.querySelector('.showLogin');
const showSignup = document.querySelector('.showSignup');
const showFp = document.querySelector('.fp');
const showFp2 = document.querySelector('.fp2');

function hideItem (a,b,c) {
    a.classList.add('d-none');
    b.classList.add('d-none');
    c.classList.add('d-none');
}

showLogin.onclick = ()=>{
    loginForm.classList.remove('d-none');
    hideItem(signupForm, fpPage1, fpPage2);
};

showSignup.onclick = ()=>{
    signupForm.classList.remove('d-none');
    hideItem(loginForm, fpPage1, fpPage2);
};

showFp.onclick = ()=>{
    fpPage1.classList.remove('d-none');
    hideItem(loginForm, signupForm, fpPage2);
};

showFp2.onclick = ()=>{
    fpPage2.classList.remove('d-none');
    hideItem(loginForm, signupForm, fpPage1);
};
