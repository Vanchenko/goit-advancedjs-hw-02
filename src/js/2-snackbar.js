
const formEl = document.querySelector(".feedback-form");
const { email, message } = formEl.elements;
const storageName = 'feedback-form-state';

let formData = JSON.parse(localStorage.getItem(storageName)) || { email : "", message : "" };

email.value = formData.email;
message.value = formData.message;

formEl.addEventListener("input", checkInput);
formEl.addEventListener("submit", checkSubmit);

function checkInput() {
    formData = {email : email.value.trim(), message: message.value.trim()};
    localStorage.setItem(storName, JSON.stringify(formData));
}

function checkSubmit(event) {
    event.preventDefault();
        if ( formData.email === "" || formData.message === "" ) {
            return alert("Fill please all fields");
        }
        console.log(formData);
        localStorage.removeItem(storageName);
        event.currentTarget.reset();
        formData = {}
};
