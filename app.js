const icon = document.querySelector('.icon');

// reset game

const resetBtn = document.querySelector('.reset-btn')
const counters = document.querySelectorAll('.counter')

const inputs = document.querySelectorAll('input').values();
const inputArray = [...inputs];

resetBtn.addEventListener('click', e => {
  if (confirm('are you sure?')) {
    counters.forEach(counter => {
      location.reload();
      counter.innerText = 0;
      examArray = [0];
      mwArray = [0];
    });
    inputArray.forEach(input => {
      input.value = '';
    });
  } else {
    return;
  }
})

// create array of player boxes

const playerBoxes = document.querySelectorAll('.player-box');

const playerBoxArray = Array.from(playerBoxes);

// get form for event listener

const playerForm = document.querySelector('.player-form');

// function add input values to player element

playerForm.addEventListener('submit', function(e) {
  e.preventDefault();
  playerBoxArray[0].childNodes[3].innerText = inputArray[0].value;
  playerBoxArray[1].childNodes[3].innerText = inputArray[1].value;
  playerBoxArray[2].childNodes[3].innerText = inputArray[2].value;
  playerBoxArray[3].childNodes[3].innerText = inputArray[3].value;
  playerBoxArray[4].childNodes[3].innerText = inputArray[4].value;
  playerBoxArray[5].childNodes[3].innerText = inputArray[5].value;

  inputArray.forEach(input => {
    input.value = '';
  });

  const rowTwo = document.querySelector('.row-two');
  rowTwo.style.display = 'none';
  playerBoxArray.forEach(box => {
    box.style.marginBottom = '2rem';
  });
});

// create arrays and listeners for each mw button

const mwBtns = [
  document.querySelector('#mw-btn-a'),
  document.querySelector('#mw-btn-b'),
  document.querySelector('#mw-btn-c'),
  document.querySelector('#mw-btn-d'),
  document.querySelector('#mw-btn-e'),
  document.querySelector('#mw-btn-f'),
]

const [
  mwBtnA,
  mwBtnB,
  mwBtnC,
  mwBtnD,
  mwBtnE,
  mwBtnF,
] = mwBtns;


const mwRoomA = [];
const mwRoomB = [];
const mwRoomC = [];
const mwRoomD = [];
const mwRoomE = [];
const mwRoomF = [];

const mwRooms = [];
mwRooms.push(
  mwRoomA,
  mwRoomB,
  mwRoomC,
  mwRoomD,
  mwRoomE,
  mwRoomF,
)


let mwNumA = mwRoomA.length;
let mwNumB = mwRoomB.length;
let mwNumC = mwRoomC.length;
let mwNumD = mwRoomD.length;
let mwNumE = mwRoomE.length;
let mwNumF = mwRoomF.length;



const mwCountArray = [
  document.querySelector('.mw-count-a'),
  document.querySelector('.mw-count-b'),
  document.querySelector('.mw-count-c'),
  document.querySelector('.mw-count-d'),
  document.querySelector('.mw-count-e'),
  document.querySelector('.mw-count-f'),
];

const [
  mwCountA,
  mwCountB,
  mwCountC,
  mwCountD,
  mwCountE,
  mwCountF,
] = mwCountArray;



function uniFunc(rooms, num, countElem) {
  const current = prompt('Which room?');
  if (current === null) {
    return;
  } else {
    if (current !== '') {
      rooms.push(current);
      countElem.innerText = rooms.length;
      mwNum = rooms.length;
    } else {
      return
    }
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


const examBtns = [
  document.querySelector('#exam-btn-a'),
  document.querySelector('#exam-btn-b'),
  document.querySelector('#exam-btn-c'),
  document.querySelector('#exam-btn-d'),
  document.querySelector('#exam-btn-e'),
  document.querySelector('#exam-btn-f'),
]

const [
  examBtnA,
  examBtnB,
  examBtnC,
  examBtnD,
  examBtnE,
  examBtnF,
] = examBtns;

let examRoomA = [];
let examRoomB = [];
let examRoomC = [];
let examRoomD = [];
let examRoomE = [];
let examRoomF = [];

const examRooms = [];
examRooms.push(
  examRoomA,
  examRoomB,
  examRoomC,
  examRoomD,
  examRoomE,
  examRoomF,
)


let examNumA = examRoomA.length;
let examNumB = examRoomB.length;
let examNumC = examRoomC.length;
let examNumD = examRoomD.length;
let examNumE = examRoomE.length;
let examNumF = examRoomF.length;


const examCountArray = [
  document.querySelector('.exam-count-a'),
  document.querySelector('.exam-count-b'),
  document.querySelector('.exam-count-c'),
  document.querySelector('.exam-count-d'),
  document.querySelector('.exam-count-e'),
  document.querySelector('.exam-count-f')
]

const [
  examCountA,
  examCountB,
  examCountC,
  examCountD,
  examCountE,
  examCountF
] = examCountArray;

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

// get array boxes

const arrayBoxes = [
  document.querySelector('.array-box-A'),
  document.querySelector('.array-box-B'),
  document.querySelector('.array-box-C'),
  document.querySelector('.array-box-D'),
  document.querySelector('.array-box-E'),
  document.querySelector('.array-box-F'),
]

// Player A object

const playerA = {
  box: playerBoxArray[0],
  mwRooms: mwRooms[0],
  examRooms: examRooms[0],
  mwCounter: mwCountArray[0],
  examCounter: examCountArray[0],
  mwBtn: mwBtns[0],
  examBtn: examBtns[0],
  arrayBox: arrayBoxes[0]
}

// Player A object

const playerB = {
  box: playerBoxArray[1],
  mwRooms: mwRooms[1],
  examRooms: examRooms[1],
  mwCounter: mwCountArray[1],
  examCounter: examCountArray[1],
  mwBtn: mwBtns[1],
  examBtn: examBtns[1],
  arrayBox: arrayBoxes[1]
}

// Player A object

const playerC = {
  box: playerBoxArray[2],
  mwRooms: mwRooms[2],
  examRooms: examRooms[2],
  mwCounter: mwCountArray[2],
  examCounter: examCountArray[2],
  mwBtn: mwBtns[2],
  examBtn: examBtns[2],
  arrayBox: arrayBoxes[2]
}

// Player A object

const playerD = {
  box: playerBoxArray[3],
  mwRooms: mwRooms[3],
  examRooms: examRooms[3],
  mwCounter: mwCountArray[3],
  examCounter: examCountArray[3],
  mwBtn: mwBtns[3],
  examBtn: examBtns[3],
  arrayBox: arrayBoxes[3]
}

// Player A object

const playerE = {
  box: playerBoxArray[4],
  mwRooms: mwRooms[4],
  examRooms: examRooms[4],
  mwCounter: mwCountArray[4],
  examCounter: examCountArray[4],
  mwBtn: mwBtns[4],
  examBtn: examBtns[4],
  arrayBox: arrayBoxes[4]
}

// Player A object

const playerF = {
  box: playerBoxArray[5],
  mwRooms: mwRooms[5],
  examRooms: examRooms[5],
  mwCounter: mwCountArray[5],
  examCounter: examCountArray[5],
  mwBtn: mwBtns[5],
  examBtn: examBtns[5],
  arrayBox: arrayBoxes[5]
}

const playerArray = [playerA, playerB, playerC, playerD, playerE, playerF];

// display room array on hidden div

mwCountA.addEventListener('mouseenter', function(e) {
  playerA.arrayBox.innerText = playerA.mwRooms;
  setTimeout(() => {arrayBoxes[0].classList.remove('hidden');}, 800)
});

mwCountA.addEventListener('mouseleave', function(e) {
  arrayBoxes[0].classList.add('hidden');
});

examCountA.addEventListener('mouseenter', function(e) {
  playerA.arrayBox.innerText = playerA.examRooms;
  setTimeout(() => {arrayBoxes[0].classList.remove('hidden');}, 800)
});

examCountA.addEventListener('mouseleave', function(e) {
  arrayBoxes[0].classList.add('hidden');
});

// player B

mwCountB.addEventListener('mouseenter', function(e) {
  playerB.arrayBox.innerText = playerB.mwRooms;
  setTimeout(() => {arrayBoxes[1].classList.remove('hidden');}, 800)
});

mwCountB.addEventListener('mouseleave', function(e) {
  arrayBoxes[1].classList.add('hidden');
});

examCountB.addEventListener('mouseenter', function(e) {
  playerB.arrayBox.innerText = playerB.examRooms;
  setTimeout(() => {arrayBoxes[1].classList.remove('hidden');}, 800)
});

examCountB.addEventListener('mouseleave', function(e) {
  arrayBoxes[1].classList.add('hidden');
});

// player C

mwCountC.addEventListener('mouseenter', function(e) {
  playerC.arrayBox.innerText = playerC.mwRooms;
  setTimeout(() => {arrayBoxes[2].classList.remove('hidden');}, 800)
});

mwCountC.addEventListener('mouseleave', function(e) {
  arrayBoxes[2].classList.add('hidden');
});

examCountC.addEventListener('mouseenter', function(e) {
  playerC.arrayBox.innerText = playerC.examRooms;
  setTimeout(() => {arrayBoxes[2].classList.remove('hidden');}, 800)
});

examCountC.addEventListener('mouseleave', function(e) {
  arrayBoxes[2].classList.add('hidden');
});

// player D

mwCountD.addEventListener('mouseenter', function(e) {
  playerD.arrayBox.innerText = playerD.mwRooms;
  setTimeout(() => {arrayBoxes[3].classList.remove('hidden');}, 800)
});

mwCountD.addEventListener('mouseleave', function(e) {
  arrayBoxes[3].classList.add('hidden');
});

examCountD.addEventListener('mouseenter', function(e) {
  playerD.arrayBox.innerText = playerD.examRooms;
  setTimeout(() => {arrayBoxes[3].classList.remove('hidden');}, 800)
});

examCountD.addEventListener('mouseleave', function(e) {
  arrayBoxes[3].classList.add('hidden');
});

// player E

mwCountE.addEventListener('mouseenter', function(e) {
  playerE.arrayBox.innerText = playerE.mwRooms;
  setTimeout(() => {arrayBoxes[4].classList.remove('hidden');}, 800)
});

mwCountE.addEventListener('mouseleave', function(e) {
  arrayBoxes[4].classList.add('hidden');
});

examCountE.addEventListener('mouseenter', function(e) {
  playerE.arrayBox.innerText = playerE.examRooms;
  setTimeout(() => {arrayBoxes[4].classList.remove('hidden');}, 800)
});

examCountE.addEventListener('mouseleave', function(e) {
  arrayBoxes[4].classList.add('hidden');
});

// player F

mwCountF.addEventListener('mouseenter', function(e) {
  playerF.arrayBox.innerText = playerF.mwRooms;
  setTimeout(() => {arrayBoxes[5].classList.remove('hidden');}, 800)
});

mwCountF.addEventListener('mouseleave', function(e) {
  arrayBoxes[5].classList.add('hidden');
});

examCountF.addEventListener('mouseenter', function(e) {
  playerF.arrayBox.innerText = playerF.examRooms;
  setTimeout(() => {arrayBoxes[5].classList.remove('hidden');}, 800)
});

examCountF.addEventListener('mouseleave', function(e) {
  arrayBoxes[5].classList.add('hidden');
});
