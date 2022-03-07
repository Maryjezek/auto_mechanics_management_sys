// function setFormMessage(formElement, type, message) {
//   const messageElement = formElement.querySelector(".form__message");

//   messageElement.textContent = message;
//   messageElement.classList.remove(
//     "form__message--success",
//     "form__message--error"
//   );
//   messageElement.classList.add(`form__message--${type}`);
// }

// function setInputError(inputElement, message) {
//   inputElement.classList.add("form__input--error");
//   inputElement.parentElement.querySelector(
//     ".form__input-error-message"
//   ).textContent = message;
// }

// function clearInputError(inputElement) {
//   inputElement.classList.remove("form__input--error");
//   inputElement.parentElement.querySelector(
//     ".form__input-error-message"
//   ).textContent = "";
// }

// document.addEventListener("DOMContentLoaded", () => {
//   const loginForm = document.querySelector("#login");
//   const createAccountForm = document.querySelector("#createAccount");

//   document
//     .querySelector("#linkCreateAccount")
//     .addEventListener("click", (e) => {
//       e.preventDefault();
//       loginForm.classList.add("form--hidden");
//       createAccountForm.classList.remove("form--hidden");
//     });

//   document.querySelector("#linkLogin").addEventListener("click", (e) => {
//     e.preventDefault();
//     loginForm.classList.remove("form--hidden");
//     createAccountForm.classList.add("form--hidden");
//   });

//   loginForm.addEventListener("submit", (e) => {
//     e.preventDefault();

//     // Perform your Fetch login

//     // async function loginFormHandler(event) {
//     //     event.preventDefault();

//     // const email = document.querySelector('#email-login').value.trim();
//     // const password = document.querySelector('#password-login').value.trim();

//     // if (email && password) {
//     //     const response = await fetch('/api/users/login', {
//     //         method: 'post',
//     //         body: JSON.stringify({
//     //             email,
//     //             password
//     //         }),
//     //         headers: { 'Content-Type': 'application/json' }
//     //     });

//     //     if (response.ok) {
//     //         document.location.replace('/home');
//     //     } else {
//     //         alert(response.statusText);
//     //     }
//     // }
//     // }
//     // finish fetch login

//     setFormMessage(loginForm, "error", "Invalid password/password combination");
//   });

//   document.querySelectorAll(".form__input").forEach((inputElement) => {
//     inputElement.addEventListener("blur", (e) => {
//       if (
//         e.target.id === "signupUsername" &&
//         e.target.value.length > 0 &&
//         e.target.value.length < 10
//       ) {
//         setInputError(
//           inputElement,
//           "Username must be at least 5 characters in length"
//         );
//       }
//     });

//     inputElement.addEventListener("input", (e) => {
//       clearInputError(inputElement);
//     });
//   });
//});


//MB added this to handle sign up functionality
const signupFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector("#username-signup");
  const email = document.querySelector("#email-signup");
  const password = document.querySelector("#password-signup");
  console.log("SIGNING UP")
  const response = await fetch("/api/users", {
    method: "POST",
    body: JSON.stringify({
      username: username.value,
      email: email.value,
      password: password.value,
    }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/home");
    console.log("ok")
  } else {
    console.log("Sign up failed");
  }
};

document.querySelector(".signup-form").addEventListener("submit", signupFormHandler);
