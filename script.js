        const Form = document.getElementById("Form");
        const User = document.getElementById("User");
        const Email = document.getElementById("Email");
        const Password = document.getElementById("Password");
        const ConfirmPassword = document.getElementById("ConfirmPassword");

        const NameError = document.getElementById("NameError");
        const EmailError = document.getElementById("EmailError");
        const PasswordError = document.getElementById("PasswordError");
        const ConfirmPasswordError = document.getElementById("ConfirmPasswordError");
        const SubmitBtn = document.querySelector("button");
       

        // SubmitBtn.disabled = true;      

        

        User.addEventListener("input", () => {
            if (!User.value) {
                NameError.textContent = "Username is required!";
            } else if (User.value.length < 5) {
                NameError.textContent = `yourvalue ${User.value.length} is must be 5`;
            } else {
                NameError.textContent = "";
            }

        });


        Email.addEventListener("input", () => {
            if (!Email.value) {
                EmailError.textContent = "Email is required!";
            } else {
                EmailError.textContent = "";
            }
        });


        Password.addEventListener("input", () => {
            if (Password.value.length < 8) {
                PasswordError.textContent = "Min 8 characters!";
            } else {
                PasswordError.textContent = "";
            }
        });


        ConfirmPassword.addEventListener("input", () => {
            if (Password.value !== ConfirmPassword.value) {
                ConfirmPasswordError.textContent = "Passwords do not match!";
            } else {
                ConfirmPasswordError.textContent = "";
            }
        });


        Form.addEventListener("submit", (event) => {
            if (SubmitBtn.disabled) {
                event.preventDefault();
            }
        });