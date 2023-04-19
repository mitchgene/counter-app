// reset game

const resetBtn = document.querySelector('.reset-btn')
const counters = document.querySelectorAll('.counter')

resetBtn.addEventListener('click', e => {
  if (confirm('are you sure?')) {
    counters.forEach(counter => {
      location.reload();
      counter.innerText = 0;
      examArray = [0];
      mwArray = [0];
      localStorage.clear();
    });
    inputArray.forEach(input => {
      input.value = '';
    });
  } else {
    return;
  }
})

// toggle side bar menu

const menu = {
  body: document.querySelector('body'),
  menuBtn: document.querySelector('.menu-button'),
  nav: document.querySelector('.nav'),
  toggleListen() {
    this.menuBtn.addEventListener('click', (e) => {
      menu.body.classList.contains('nav-open') ?
        menu.body.classList.remove('nav-open') :
        menu.body.classList.add('nav-open');
    });
  },
  outsideClick() {
    window.addEventListener('click', (e) => {
      if (!this.nav.contains(e.target) && e.target !== this.menuBtn) {
        if (this.body.classList.contains('nav-open')) {
          this.body.classList.remove('nav-open');

        }
      }
    });
  }
}

menu.outsideClick();
menu.toggleListen();


// link and page logic for side menu nav


const book = {
  navLinks: document.querySelectorAll('.nav-link'),
  pages: document.querySelectorAll('.page'),
  //iterate through buttons
  //add click listener to each
  //iterate thru pages
  // check if box data matches button data
  //if so apply classes

  init() {
    this.navLinks.forEach((item) => {
      item.addEventListener('click', function(e) {
        menu.body.classList.remove('nav-open');
        book.navLinks.forEach(item => item.classList.remove('active'));
        e.target.classList.add('active');
        book.pages.forEach((page) => {
          if (page.id === item.attributes[1].value) {
            page.classList.remove('inactive');
            setTimeout(() => {
              page.classList.remove('invisible')
            }, 200)
          } else {
            page.classList.add('inactive', 'invisible');
          }
        })
      });
    })
  }
}

book.init();

function disable(element, bool = true) {
  bool === true ? element.setAttribute('disabled', true) : element.disabled = false;
}

// prevent button interaction before playe  r form submission

window.addEventListener('load', function(e) {

  setTimeout(() => {
    if (playerArray.every(player => player.name === '' || player.name === undefined)) {
      console.log('they are empty')
      playerArray.forEach(player => {
        player.isActive = false;
        mwBtns.forEach(btn => disable(btn, true));
        examBtns.forEach(btn => disable(btn, true));
      })
    } else {
      console.log('they are not all empty')
      playerArray.forEach(player => {
        player.isActive = true;
        playerArray.forEach(player => {
          mwBtns.forEach(btn => disable(btn, false));
          examBtns.forEach(btn => disable(btn, false));
        })
      })
    }
  }, );

});


// get form for event listener

const playerForm = document.querySelector('.player-form');

// create array of player pages

const playerBoxes = document.querySelectorAll('.player-box');

const playerBoxArray = [...playerBoxes];

// collect input values

const nameInputs = document.querySelectorAll('.player-input').values();

const inputArray = [...nameInputs];

// function add input values to player element

playerForm.addEventListener('submit', function(e) {
  e.preventDefault();

  if (inputArray.every((item) => item.value === "")) {
    console.log(this.item);
    // console.log('shitfucker');
    alert('Name fields required');
  } else {
    // console.log('godammit');

    playerBoxArray[0].childNodes[3].innerText = inputArray[0].value;
    playerBoxArray[1].childNodes[3].innerText = inputArray[1].value;
    playerBoxArray[2].childNodes[3].innerText = inputArray[2].value;
    playerBoxArray[3].childNodes[3].innerText = inputArray[3].value;
    playerBoxArray[4].childNodes[3].innerText = inputArray[4].value;
    playerBoxArray[5].childNodes[3].innerText = inputArray[5].value;

    mwBtns.forEach(btn => disable(btn, false));
    examBtns.forEach(btn => disable(btn, false));

    for (i = 0; i < inputArray.length; i++) {
      for (j = 0; j < playerArray.length; j++) {
        if (i === j) {
          playerArray[i].name = inputArray[j].value;
        }
      }
    }

    inputArray.forEach(input => {
      input.value = '';
    });

    const rowTwo = document.querySelector('.row-two');
    rowTwo.style.display = 'none';
    playerBoxArray.forEach(box => {
      box.style.marginBottom = '2rem';
    });
  }
});

// start timer on schedule

function dataInterval(time, func) {
  setInterval(() => {func()}, time)
}

function dataCollection() {
    playerArray.forEach(player => {
      player.data.mw.push(player.mwRooms.length);
      player.data.exams.push(player.examRooms.length);
    })
}

function dataRecord() {
  let currentDay = new Date();
  if (currentDay === 1 || currentDay === 3 || currentDay === 5) {
    currentDay.getHours() >= 8 && currentDay.getHours() < 19 ? dataInterval(dataCollection) : clearInterval(dataCollection)
  } else {
    currentDay.getHours() >=14 && currentDay.getHours() < 19 ? dataInterval(dataCollection) : clearInterval(dataCollection)
  }
}

// dataRecord();

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

// create a new Date object
const today = new Date();

// check if today is Monday, Wednesday, or Friday
const dayOfWeek = today.getDay();

if (dayOfWeek === 1 || dayOfWeek === 3 || dayOfWeek === 5) {
  // apply the "salmon" CSS class if it's Monday, Wednesday, or Friday
  mwCountArray.forEach(item => {
    item.classList.add("salmon");
  });
  examCountArray.forEach(item => {
    item.classList.add("salmon");
  });
} else {
  // apply the "cyan" CSS class if it's not Monday, Wednesday, or Friday
  mwCountArray.forEach(item => {
    item.classList.add("cyan");
  });
  examCountArray.forEach(item => {
    item.classList.add("cyan");
  });
}

// get array pages

const arrayBoxes = [
  document.querySelector('.array-box-A'),
  document.querySelector('.array-box-B'),
  document.querySelector('.array-box-C'),
  document.querySelector('.array-box-D'),
  document.querySelector('.array-box-E'),
  document.querySelector('.array-box-F'),
]

// Player Objects

const playerA = {
  box: playerBoxArray[0],
  mwRooms: mwRooms[0],
  examRooms: examRooms[0],
  mwCounter: mwCountArray[0],
  examCounter: examCountArray[0],
  mwBtn: mwBtns[0],
  examBtn: examBtns[0],
  arrayBox: arrayBoxes[0],
  isActive: false,
  data: {
    mw: [],
    exams: []
  }
}

const playerB = {
  box: playerBoxArray[1],
  mwRooms: mwRooms[1],
  examRooms: examRooms[1],
  mwCounter: mwCountArray[1],
  examCounter: examCountArray[1],
  mwBtn: mwBtns[1],
  examBtn: examBtns[1],
  arrayBox: arrayBoxes[1],
  isActive: false,
  data: {
    mw: [],
    exams: []
  }
}

const playerC = {
  box: playerBoxArray[2],
  mwRooms: mwRooms[2],
  examRooms: examRooms[2],
  mwCounter: mwCountArray[2],
  examCounter: examCountArray[2],
  mwBtn: mwBtns[2],
  examBtn: examBtns[2],
  arrayBox: arrayBoxes[2],
  isActive: false,
  data: {
    mw: [],
    exams: []
  }
}

const playerD = {
  box: playerBoxArray[3],
  mwRooms: mwRooms[3],
  examRooms: examRooms[3],
  mwCounter: mwCountArray[3],
  examCounter: examCountArray[3],
  mwBtn: mwBtns[3],
  examBtn: examBtns[3],
  arrayBox: arrayBoxes[3],
  isActive: false,
  data: {
    mw: [],
    exams: []
  }
}

const playerE = {
  box: playerBoxArray[4],
  mwRooms: mwRooms[4],
  examRooms: examRooms[4],
  mwCounter: mwCountArray[4],
  examCounter: examCountArray[4],
  mwBtn: mwBtns[4],
  examBtn: examBtns[4],
  arrayBox: arrayBoxes[4],
  isActive: false,
  data: {
    mw: [],
    exams: []
  }
}

const playerF = {
  box: playerBoxArray[5],
  mwRooms: mwRooms[5],
  examRooms: examRooms[5],
  mwCounter: mwCountArray[5],
  examCounter: examCountArray[5],
  mwBtn: mwBtns[5],
  examBtn: examBtns[5],
  arrayBox: arrayBoxes[5],
  isActive: false,
  data: {
    mw: [],
    exams: []
  }
}

const playerArray = [playerA, playerB, playerC, playerD, playerE, playerF];

function uniFunc(rooms, num, countElem) {
  const current = prompt('Which room?');
  if (current === null) {
    return;
  } else {
    if (current !== '') {
      rooms.push(current);
      countElem.innerText = rooms.length;
      num = rooms.length;
    } else {
      return
    }
  }
}

for (let i = 0; i < playerArray.length; i++) {
  playerArray[i].mwBtn.addEventListener('click', () => {
    uniFunc(playerArray[i].mwRooms, playerArray[i].num, playerArray[i].mwCounter)
  });
  playerArray[i].examBtn.addEventListener('click', () => {
    uniFunc(playerArray[i].examRooms, playerArray[i].num, playerArray[i].examCounter)
  })
}

// display room array on hidden div

mwCountA.addEventListener('click', function(e) {
  playerA.arrayBox.innerText = playerA.mwRooms;
  arrayBoxes[0].classList.contains('hidden') ? arrayBoxes[0].classList.remove('hidden') :
    arrayBoxes[0].classList.add('hidden');
});

mwCountA.addEventListener('mouseleave', function(e) {
  arrayBoxes[0].classList.add('hidden');
});

examCountA.addEventListener('click', function(e) {
  playerA.arrayBox.innerText = playerA.examRooms;
  arrayBoxes[0].classList.contains('hidden') ? arrayBoxes[0].classList.remove('hidden') :
    arrayBoxes[0].classList.add('hidden');
});

examCountA.addEventListener('mouseleave', function(e) {
  arrayBoxes[0].classList.add('hidden');
});

// player B

mwCountB.addEventListener('click', function(e) {
  playerB.arrayBox.innerText = playerB.mwRooms;
  arrayBoxes[1].classList.contains('hidden') ? arrayBoxes[1].classList.remove('hidden') :
    arrayBoxes[1].classList.add('hidden');
});

mwCountB.addEventListener('mouseleave', function(e) {
  arrayBoxes[1].classList.add('hidden');
});

examCountB.addEventListener('click', function(e) {
  playerB.arrayBox.innerText = playerB.examRooms;
  arrayBoxes[1].classList.contains('hidden') ? arrayBoxes[1].classList.remove('hidden') :
    arrayBoxes[1].classList.add('hidden');
});

examCountB.addEventListener('mouseleave', function(e) {
  arrayBoxes[1].classList.add('hidden');
});

// player C

mwCountC.addEventListener('click', function(e) {
  playerC.arrayBox.innerText = playerC.mwRooms;
  arrayBoxes[2].classList.contains('hidden') ? arrayBoxes[2].classList.remove('hidden') :
    arrayBoxes[2].classList.add('hidden');
});

mwCountC.addEventListener('mouseleave', function(e) {
  arrayBoxes[2].classList.add('hidden');
});

examCountC.addEventListener('click', function(e) {
  playerC.arrayBox.innerText = playerC.examRooms;
  arrayBoxes[2].classList.contains('hidden') ? arrayBoxes[2].classList.remove('hidden') :
    arrayBoxes[2].classList.add('hidden');
});

examCountC.addEventListener('mouseleave', function(e) {
  arrayBoxes[2].classList.add('hidden');
});

// player D

mwCountD.addEventListener('click', function(e) {
  playerD.arrayBox.innerText = playerD.mwRooms;
  arrayBoxes[3].classList.contains('hidden') ? arrayBoxes[3].classList.remove('hidden') :
    arrayBoxes[3].classList.add('hidden');
});

mwCountD.addEventListener('mouseleave', function(e) {
  arrayBoxes[3].classList.add('hidden');
});

examCountD.addEventListener('click', function(e) {
  playerD.arrayBox.innerText = playerD.examRooms;
  arrayBoxes[3].classList.contains('hidden') ? arrayBoxes[3].classList.remove('hidden') :
    arrayBoxes[3].classList.add('hidden');
});

examCountD.addEventListener('mouseleave', function(e) {
  arrayBoxes[3].classList.add('hidden');
});

// player E

mwCountE.addEventListener('click', function(e) {
  playerE.arrayBox.innerText = playerE.mwRooms;
  arrayBoxes[4].classList.contains('hidden') ? arrayBoxes[4].classList.remove('hidden') :
    arrayBoxes[4].classList.add('hidden');
});

mwCountE.addEventListener('mouseleave', function(e) {
  arrayBoxes[4].classList.add('hidden');
});

examCountE.addEventListener('click', function(e) {
  playerE.arrayBox.innerText = playerE.examRooms;
  arrayBoxes[4].classList.contains('hidden') ? arrayBoxes[4].classList.remove('hidden') :
    arrayBoxes[4].classList.add('hidden');
});

examCountE.addEventListener('mouseleave', function(e) {
  arrayBoxes[4].classList.add('hidden');
});

// player F

mwCountF.addEventListener('click', function(e) {
  playerF.arrayBox.innerText = playerF.mwRooms;
  arrayBoxes[5].classList.contains('hidden') ? arrayBoxes[5].classList.remove('hidden') :
    arrayBoxes[5].classList.add('hidden');
});

mwCountF.addEventListener('mouseleave', function(e) {
  arrayBoxes[5].classList.add('hidden');
});

examCountF.addEventListener('click', function(e) {
  playerF.arrayBox.innerText = playerF.examRooms;
  arrayBoxes[5].classList.contains('hidden') ? arrayBoxes[5].classList.remove('hidden') :
    arrayBoxes[5].classList.add('hidden');
});

examCountF.addEventListener('mouseleave', function(e) {
  arrayBoxes[5].classList.add('hidden');
});

const credits = {
  author: 'mitchell thompson',
  publishedOn: new Date(2021, 10, 14)
}
