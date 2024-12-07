let clickonBtn = document.getElementById("btns");
let signUpCard = document.getElementById("signUpCard");
let loginBtn = document.getElementById("loginBtn");
let loginCard = document.getElementById("loginCard");
let clickOnCloseBtnSign = document.getElementById("clickOnCloseBtnSign");
let clickOnCloseBtnLogin = document.getElementById("clickOnCloseBtnLogin");
let welcomeCardHeader = document.getElementById("welcomeCardHeader");
let welcomeCard = document.getElementById("welcomeCard");
let innerSignBtn = document.querySelector(".signBtn");
let innerLoginBtn = document.getElementById("innerLoginBtn");
let firstPage = document.getElementById("firstPage");
let signInput = document.getElementById("signInput");
let signUpForm = document.getElementById("signUpForm");
let loginForm = document.getElementById("loginForm");

clickonBtn.addEventListener("click", function () {
    signUpCard.style.display = "block";
});

loginBtn.addEventListener("click", function () {
    loginCard.style.display = "block";
});

clickOnCloseBtnSign.addEventListener("click", function () {
    if (signUpCard.style.display == "block") {
        signUpCard.style.display = "none"
    }
});

clickOnCloseBtnLogin.addEventListener("click", function () {
    if (loginCard.style.display == "block") {
        loginCard.style.display = "none"
    }
});

innerLoginBtn.addEventListener("click", function () {
    if(loginForm.checkValidity()){
        firstPage.style.display = "none";
    welcomeCardHeader.style.display = "block";
    welcomeCard.style.display = "block";
    loginCard.style.display = "none";
    }
});


signUpForm.addEventListener("submit" , function(event){
    event.preventDefault();
  
    if (signUpForm.checkValidity()){
        firstPage.style.display = "none";
        welcomeCardHeader.style.display = "block";
        welcomeCard.style.display = "block";
        signUpCard.style.display = "none";
    } else {
        console.log('Form is not valid');
    }
});

