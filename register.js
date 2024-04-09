// Selecting DOM elements
let x = document.getElementById("loginform");
let y = document.getElementById("register");
let z = document.getElementById("btn");

// Constant for submit button
const submit = document.getElementById("submit-btn");

// Function to switch to registration form
function register() {
    // Move login form to the left to hide it
    x.style.left = "-400px";
    // Move register form to the left to display it
    y.style.left = "-0.01rem";
    // Adjust button position
    z.style.left = "110px";
}

// Function to switch to login form
function login() {
    // Move login form to the original position
    x.style.left = "0px";
    // Move register form to the right to hide it
    y.style.left = "450px";
    // Adjust button position
    z.style.left = "0";
}


function saveData() {
    // Retrieve input values
    const new_username = document.getElementById('newusername').value.trim();
    const name = document.getElementById("fullname").value.trim();
    const email = document.getElementById("email").value.trim();
    const new_password = document.getElementById("newpassword").value;

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let register = document.getElementById("registersuccess");
    let form = document.getElementById("form");

    // Get existing user records from localStorage or initialize an empty array
    let user_records = JSON.parse(localStorage.getItem("users")) || [];

    // Check if any required field is empty
    if (name === "") {
        displayError("nameError", "Name is required");
    } else {
        clearError("nameError");
    }

    if (new_username === "") {
        displayError("usernameError", "Username is required");
    } else {
        clearError("usernameError");
    }

    if (email === "") {
        displayError("emailError", "Email is required");
    } else if (!emailRegex.test(email)) {
        displayError("emailError", "Invalid email format");
    } else {
        clearError("emailError");
    }

    if (new_password === "") {
        displayError("passwordError", "Password is required");
    } else {
        clearError("passwordError");
    }

    // If all required fields are filled
    if (name && new_username && email && new_password) {
        // Check for duplicate email
        if (user_records.some((v) => v.email === email)) {
            displayError("emailError", "Email already exists");
        } else {
            // Add new user data to the array
            user_records.push({
                "name": name,
                "username": new_username,
                "email": email,
                "password": new_password
            });
            // Update localStorage with the modified user records
            localStorage.setItem("users", JSON.stringify(user_records));
            register.classList.add("open-registerpopup");
            form.classList.add("form-hidden");
        }
    }
    // Redirect to login page after successful registration
    window.location.href = './register.html';
}


// Function to display error message
function displayError(id, message) {
    let error = document.getElementById(id);
    error.innerText = message;
    error.style.color = "red";
    error.style.fontSize = "10px";
}

// Function to clear error message
function clearError(id) {
    let error = document.getElementById(id);
    error.innerText = "";
}

let eye = document.getElementById("eyeicon");
let password = document.getElementById("newpassword");
eye.onclick = function(){
        if(password.type == "password"){
            password.type = "text";
            eye.src = "eye-open.png";
        }else {
            password.type = "password";
            eye.src = "eye-close.png";
        }
}



function checkLogin() {
    let email = document.getElementById("useremail").value.trim(); // Trim whitespace
    let password = document.getElementById("password").value;
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Check if email is empty or invalid
    if (email === "") {
        let error = document.getElementById("need_email");
        error.innerText = "Email is required!";
        return; // Exit function early
    } else if (!emailRegex.test(email)) {
        let error = document.getElementById("need_email");
        error.innerText = "Invalid email format!";
        return; // Exit function early
    } else {
        let error = document.getElementById("need_email");
        error.innerText = "";
    }

    // Check if password is empty
    if (password === "") {
        let error = document.getElementById("need_pwd");
        error.innerText = "Password is required!";
        return; // Exit function early
    } else {
        let error = document.getElementById("need_pwd");
        error.innerText = "";
    }

    let user_login = JSON.parse(localStorage.getItem("users")) || [];
    let isValidUser = user_login.some((v) => v.email === email && v.password === password);

    if  (email === 'admin@gmail.com' && password === 'admin1298') {
        // Redirect to admin page
        window.location.href = 'database.html';
    } else if (isValidUser) {
        // Redirect to index page
        window.location.href = 'index1.html';
        // Collect current session data if needed
        let current_user = user_login.find((v) => v.email === email && v.password === password);
        localStorage.setItem("name", current_user.name);
        localStorage.setItem("email", current_user.email);
    } else {
        // Show login fail message
        let loginfail = document.getElementById("loginfail");
        loginfail.classList.add("open-failpopup");
        // Hide the login form
        let form = document.getElementById("form");
        form.classList.add("form-hidden");
    }
}





























