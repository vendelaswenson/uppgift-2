"use strict";

const checkInPass = document.querySelector(".check-in");
const fastTrack = document.querySelector(".fast-track");
const container = document.querySelector("#check-ins");
const removeFirstInLine = document.querySelector(".remove-first");
let myOrdered = document.querySelector(".ordered-list");
let listItems = "";
let showInput = false;

const bookings = [];

const addInput = (fastTrack) => {
  showInput = true;
  const nameInput = document.createElement("input");
  const addBtn = document.createElement("button");
  nameInput.type = "text";
  nameInput.placeholder = "Enter passengers name here";
  container.appendChild(nameInput);
  container.appendChild(addBtn);
  addBtn.innerHTML = "Add";

  addBtn.addEventListener("click", () => {
    alert(`${nameInput.value} is now checked in`);
    fastTrack
      ? bookings.unshift(nameInput.value)
      : bookings.push(nameInput.value);
    updateList();
    container.removeChild(nameInput);
    container.removeChild(addBtn);
    showInput = false;
  });
};

checkInPass.addEventListener("click", () => {
  if (!showInput) addInput();
});

fastTrack.addEventListener("click", () => {
  if (!showInput) addInput(fastTrack);
});

removeFirstInLine.addEventListener("click", () => {
  bookings.shift();
  updateList();

  if (bookings.length < 1)
    alert("There’s currently no people standing in line");
});

const updateList = () => {
  while (myOrdered.firstChild) {
    myOrdered.removeChild(myOrdered.firstChild);
  }
  bookings.forEach((i) => {
    const listItem = document.createElement("li");
    listItem.innerText = i;
    myOrdered.appendChild(listItem);
  });
};
