/* eslint-disable no-undef */

import { password, credentials } from "./secureToken.js";

// const sendBtn = document.getElementById("send-btn");
const username = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const body = document.getElementById("body");
const submit = document.querySelector(".form-contact");

function submitForm() {
  submit.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("Clicked!");
    sendEmail();
    reset();
  });
}
submitForm();

function sendEmail() {
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: credentials,
    Password: password,
    To: credentials,
    From: email.value,
    Subject: subject.value,
    Body: body.value,
  }).then(() => alert("Message was sent successfully!"));
}

function reset() {
  username.value = "";
  email.value = "";
  phone.value = "";
  subject.value = "";
  body.value = "";
}
