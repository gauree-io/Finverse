
const emailinput = document.getElementById("useremail")

const emailError = document.getElementById("emailError")

emailinput.addEventListener("input", function() {
    if (emailinput.value.includes("@")) {
        emailError.textContent = ""
    } else {
        emailError.textContent = "Invalid email address."
    }
})

