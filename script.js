const inputPassword = document.querySelector(".input-password");
const eyeIcon = document.querySelector(".fa-eye");

eyeIcon.addEventListener("click", ()=> {
    inputPassword.type= inputPassword.type === "password" ? "text" : "password";
    eyeIcon.className= `fas fa-eye${inputPassword.type === "password"? "" : "-slash"}`;
});