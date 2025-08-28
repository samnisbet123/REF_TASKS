// // /** @format */

// // //TASK 1
// //return a single elements ID TASK 1
// var elemID = document.getElementById("btn");
// elemID.innerText = "LET'S GO!";

// // //TASK 2
// //return first element in list using queryselector
// let elemQuery = document.querySelector(".items a");
// elemQuery.innerHTML = "subscribe";

// // //TASK 3
// // return multiple elements by class name
// let elemClass = document.getElementsByClassName("items");
// for (let i = 0; i < elemClass.length; i++) {
//   elemClass[i].style.border = "1px solid grey";
// }

// // TASK 4
// // return a single element by TAG name
// let navLinks = document.getElementsByTagName("a");
// for (i = 0; i < navLinks.length; i++) {
//   navLinks[i].style.color = "#4b76a1";
// }
// // TASK 5
// let navLinksBg = document.querySelectorAll("li");
// for (i = 0; i < navLinksBg.length; i++) {
//   navLinksBg[i].style.backgroundColor = "#f3f3a6";
// }
// // TASK 6
// let navLinksUl = document.getElementsByTagName("a");
// for (i = 0; i < navLinksUl.length; i++) {
//   navLinksUl[i].style.cssText += "font-family: calibri;text-decoration:none;";
// }
// // STUDENTS ATTEMPT TO SOLVE FROM THIS POINT
// // TASK 7
// // add some margin to the links
// let navLinksAUl = document.querySelectorAll("a");
// for (i = 0; i < navLinksUl.length; i++) {
//   navLinksAUl[i].style.cssText += "margin: 5px; width: 1000px; text-align: center;";
// }

// // TASK 8
// // select the cuurent element
// let current = document.querySelector(".current");
// current.style.backgroundColor = "#ebdc0bff"; 

// // // TASK 9
// // // Select ALL input fields to make input text coloured
// let inputFeilds = document.querySelectorAll("input");
// for (i = 0; i < inputFeilds.length; i++) {
//   inputFeilds[i].style.color = "blue";
// }

// // // TASK 10
// // // email on subscribe
// let emailInput = document.getElementById("lblEmail");
// emailInput.style.color = "#d1e6eeff";

// // // padding on input and button

// let emailInputBox = document.querySelectorAll(".subbed");
// for (i = 0; i < emailInputBox.length; i++) {
//   emailInputBox[i].style.cssText += "padding:10px;border-radius: 5px;";
// }


// //TASK 11
// //change top section BG colour
// let topSection = document.getElementById("top-section");
// topSection.style.backgroundColor = "#e9f8ffff";

// //TASK 12
// //change the input padding od the usernaME & PASSWORD FIELDS
//  let userPassInput = document.getElementsByClassName("lbl");
//   for (i = 0; i < userPassInput.length; i++) {
//     userPassInput[i].style.cssText += "padding:10px;";
//   }

// //TASK 13
// // // Change padding on button
// let bntPadding = document.getElementById("btnSub");
// bntPadding.style.padding = "10px";

// //TASK 14
// //format the labels
// let labFormat = document.querySelectorAll(".lbl");
// for (i = 0; i < labFormat.length; i++) {
//   labFormat[i].style.cssText += "font-family: calibri; padding:5px;";
// }

// //TASK 15 - this is ther on click inline task


// // TASK 16
// // using addevent listener with function
// let btnClickSub = document.getElementById("btn");
// btnClickSub.addEventListener("click", function showAlert() {
//   alert("youve just subscribed");
// });


// // //TASK 17
// // // collect the username and password values and show alert on submit
// // let submitBtn = document.getElementById("btnSub");
// // let userNameInput = document.getElementById("userName");
// // let passInput = document.getElementById("pwd");
// // submitBtn.addEventListener("click", function(event) {
// //   event.preventDefault(); // Prevent form submission
// //   alert("username is " + userNameInput.value + " and password is " + passInput.value);
// // });

// // TASK 18
// // collect the  username and password values
// let submitBtn = document.getElementById("btnSub");
// let userNameInput = document.getElementById("userName");
// let passInput = document.getElementById("pwd");
// submitBtn.addEventListener("click", function(event) {
//   alert("username is " + userNameInput.value + " and password is " + passInput.value);
// });

// //TASK 19 - FAT ARROW function - see TASK 16
// let btnClick = document.getElementById("btn");
// btnClick.addEventListener("click", function showAlert() {
//   const showAlert = () => { alert("youve just subscribed"); }
//   showAlert();
// });

//TASK 20 -

// couldnt get this to work