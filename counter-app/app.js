const icon = document.querySelector('.icon');

// reset game

const resetBtn = document.querySelector('.reset-btn')
const counters = document.querySelectorAll('.counter')

const inputs = document.querySelectorAll('input').values();
const inputArray = [...inputs];

resetBtn.addEventListener('click', e => {
  confirm('are you sure?')
  counters.forEach(counter => {
    location.reload();
    counter.innerText = 0;
    examArray = [0];
    mwArray = [0];
  });
  inputArray.forEach(input => {
    input.value = '';
  });
})

// create array of player boxes

const playerBoxes = document.querySelectorAll('.player-box');

const playerBoxArray = Array.from(playerBoxes);

// get form for event listener

const playerForm = document.querySelector('.player-form');

// function add input values to player element

playerForm.addEventListener('submit', function(e) {
  e.preventDefault();
  playerBoxArray[0].childNodes[1].innerText = inputArray[0].value;
  playerBoxArray[1].childNodes[1].innerText = inputArray[1].value;
  playerBoxArray[2].childNodes[1].innerText = inputArray[2].value;
  playerBoxArray[3].childNodes[1].innerText = inputArray[3].value;
  playerBoxArray[4].childNodes[1].innerText = inputArray[4].value;
  playerBoxArray[5].childNodes[1].innerText = inputArray[5].value;

  inputArray.forEach(input => {
    input.value = '';
  });

  const rowTwo = document.querySelector('.row-two');
  rowTwo.style.opacity = '0';
  playerBoxArray.forEach(box => {
    box.style.marginBottom = '2rem';
  });
});

// create arrays and listeners for each mw button

const mwBtnA = document.querySelector('#mw-btn-a');
const mwBtnB = document.querySelector('#mw-btn-b');
const mwBtnC = document.querySelector('#mw-btn-c');
const mwBtnD = document.querySelector('#mw-btn-d');
const mwBtnE = document.querySelector('#mw-btn-e');
const mwBtnF = document.querySelector('#mw-btn-f');


let mwRoomA = [];
let mwNumA = mwRoomA.length;

let mwRoomB = [];
let mwNumB = mwRoomB.length;

let mwRoomC = [];
let mwNumC = mwRoomC.length;

let mwRoomD = [];
let mwNumD = mwRoomD.length;

let mwRoomE = [];
let mwNumE = mwRoomE.length;

let mwRoomF = [];
let mwNumF = mwRoomF.length;

const mwCountA = document.querySelector('.mw-count-a');
const mwCountB = document.querySelector('.mw-count-b');
const mwCountC = document.querySelector('.mw-count-c');
const mwCountD = document.querySelector('.mw-count-d');
const mwCountE = document.querySelector('.mw-count-e');
const mwCountF = document.querySelector('.mw-count-f');


function uniFunc(rooms, num, countElem) {
  const current = prompt('Which room?');
  if (current !== '') {
    rooms.push(current);
    countElem.innerText = rooms.length;
    mwNum = rooms.length;
  } else {
    return
  }
}

mwBtnA.addEventListener('click', function(e) {
  uniFunc(mwRoomA, mwNumA, mwCountA);
});

mwBtnB.addEventListener('click', function(e) {
  uniFunc(mwRoomB, mwNumB, mwCountB);
});

mwBtnC.addEventListener('click', function(e) {
  uniFunc(mwRoomC, mwNumC, mwCountC);
});

mwBtnD.addEventListener('click', function(e) {
  uniFunc(mwRoomD, mwNumD, mwCountD);
});

mwBtnE.addEventListener('click', function(e) {
  uniFunc(mwRoomE, mwNumE, mwCountE);
});

mwBtnF.addEventListener('click', function(e) {
  uniFunc(mwRoomF, mwNumF, mwCountF);
});


// create arrays and listeners for exam button

const examBtnA = document.querySelector('#exam-btn-a');
const examBtnB = document.querySelector('#exam-btn-b');
const examBtnC = document.querySelector('#exam-btn-c');
const examBtnD = document.querySelector('#exam-btn-d');
const examBtnE = document.querySelector('#exam-btn-e');
const examBtnF = document.querySelector('#exam-btn-f');

let examRoomA = [];
let examNumA = examRoomA.length;

let examRoomB = [];
let examNumB = examRoomB.length;

let examRoomC = [];
let examNumC = examRoomC.length;

let examRoomD = [];
let examNumD = examRoomD.length;

let examRoomE = [];
let examNumE = examRoomE.length;

let examRoomF = [];
let examNumF = examRoomF.length;

const examCountA = document.querySelector('.exam-count-a');
const examCountB = document.querySelector('.exam-count-b');
const examCountC = document.querySelector('.exam-count-c');
const examCountD = document.querySelector('.exam-count-d');
const examCountE = document.querySelector('.exam-count-e');
const examCountF = document.querySelector('.exam-count-f');

examBtnA.addEventListener('click', function(e) {
  uniFunc(examRoomA, examNumA, examCountA);
});

examBtnB.addEventListener('click', function(e) {
  uniFunc(examRoomB, examNumB, examCountB);
});

examBtnC.addEventListener('click', function(e) {
  uniFunc(examRoomC, examNumC, examCountC);
});

examBtnD.addEventListener('click', function(e) {
  uniFunc(examRoomD, examNumD, examCountD);
});

examBtnE.addEventListener('click', function(e) {
  uniFunc(examRoomE, examNumE, examCountE);
});

examBtnF.addEventListener('click', function(e) {
  uniFunc(examRoomF, examNumF, examCountF);
});
