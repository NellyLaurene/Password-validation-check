const inputPassword = document.querySelector(".input-password");
const eyeIcon = document.querySelector(".fa-eye");
const requirementsList = document.querySelectorAll(".list-requirements li");

const requirements = [
    { regex: /.{8,}/, index: 0}, //minimum of 8 charachters
    { regex: /[0-9]/, index: 1}, //at least one nbr
    { regex: /[a-z]/, index: 2}, // at least one lowercase letter
    { regex: /[^A-Za-z0-9]/, index: 3}, // at least one special character
    { regex: /[A-Z]/, index: 4}, // at least one uppercase letter
];

inputPassword.addEventListener("keyup", (e) => {
    requirements.forEach(items => {
        const isValid = items.regex.test(e.target.value);
        const requirementItems = requirementsList[items.index];

        if(isValid){
            requirementItems.firstElementChild.className = "fas fa-check";
            requirementItems.classList.add("valid");
        }
        else{
            requirementItems.firstElementChild.className = "fas fa-circle";
            requirementItems.classList.remove("valid");
        }
    })
});

eyeIcon.addEventListener("click", ()=> {
    inputPassword.type= inputPassword.type === "password" ? "text" : "password";
    eyeIcon.className= `fas fa-eye${inputPassword.type === "password"? "" : "-slash"}`;
});