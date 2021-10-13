'use strict';

const checkInPass = document.querySelector('.check-in');
const fastTrack = document.querySelector('.fast-track');
const container = document.querySelector('#check-ins');
const removeFirstInLine = document.querySelector('.remove-first');
let myOrdered = document.querySelector('.ordered-list');
let listItems = '';
let showInput = false;

const SAS = {
  airline: 'SAS',
  iataCode: 'SK',
  bookings: [],
};

const addInput = fastTrack => {
  showInput = true;
  const nameInput = document.createElement('input');
  const addBtn = document.createElement('button');
  nameInput.type = 'text';
  nameInput.placeholder = 'Enter passengers name here';
  container.appendChild(nameInput);

  container.appendChild(addBtn);
  addBtn.innerHTML = 'Add';
  addBtn.addEventListener('click', () => {
    alert(
      `${nameInput.value} is now checked in on ${SAS.airline} flight ${SAS.iataCode}`
    );
    fastTrack
      ? SAS.bookings.unshift(nameInput.value)
      : SAS.bookings.push(nameInput.value);
    updateList();
    container.removeChild(nameInput);
    container.removeChild(addBtn);
    showInput = false;
  });
};

checkInPass.addEventListener('click', () => {
  /*   const nameInput = document.createElement('input');
  nameInput.type = 'text';
  nameInput.placeholder = 'Enter passengers name here';
  container.appendChild(nameInput);

  const addBtn = document.createElement('button');
  container.appendChild(addBtn);
  addBtn.innerHTML = 'Add';

  addBtn.addEventListener('click', () => {
    alert(
      `${nameInput.value} is now checked in on ${SAS.airline} flight ${SAS.iataCode}`
    ); */

  /*  SAS.bookings.push(addInput()); */
  if (!showInput) addInput();

  /*   listItems = document.createElement('li');
    listItems.innerText = nameInput.value */
  /*  myOrdered.appendChild(listItems); */
  /* container.removeChild(nameInput);
  container.removeChild(addBtn); */
});

fastTrack.addEventListener('click', () => {
  if (!showInput) addInput(fastTrack);
  /*   const nameInput = document.createElement('input');
  nameInput.type = 'text';
  nameInput.placeholder = 'Enter passengers name here';

  console.log(container.contains(nameInput));

  !container.contains(nameInput) && container.appendChild(nameInput);

  const addBtn = document.createElement('button');
  container.appendChild(addBtn);
  addBtn.innerHTML = 'Add';

  addBtn.addEventListener('click', () => {
    alert(
      `${nameInput.value} is now checked in on ${SAS.airline} flight ${SAS.iataCode}`
    );

   myOrdered.innerHTML = ''; 

    SAS.bookings.unshift(nameInput.value);
    updateList();
    
    listItems = document.createElement('li');
    myOrdered.appendChild(listItems);
 
    container.removeChild(nameInput);
    container.removeChild(addBtn);
  }); */
});

removeFirstInLine.addEventListener('click', () => {
  SAS.bookings.shift();
  updateList();

  if (SAS.bookings.length < 1)
    alert('There’s currently no people standing in line');
});

const updateList = () => {
  while (myOrdered.firstChild) {
    myOrdered.removeChild(myOrdered.firstChild);
  }
  SAS.bookings.forEach(i => {
    const listItem = document.createElement('li');
    listItem.innerText = i;
    myOrdered.appendChild(listItem);
  });
};
