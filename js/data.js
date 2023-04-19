// define object for localStorage

// const storage = {
//   storeData(key, value) {
//     localStorage.setItem(key, JSON.stringify(value));
//   },
//   pullData(key) {
//   return JSON.parse(localStorage.getItem(key));
//   },
//   killData(key) {
//     return localStorage.removeItem(key);
//   }
// }


function work(mwMinutes, mwTotal, mwTherapistHour, therapists, shiftHours, showPercentage = 1) {

  //get minutes per mw
  //get potential mw per hour per therapists
  //get number of therapists
  //get number of hours in shift

  this.showPercentage = showPercentage * .01;
  this.mwMinutes = mwMinutes;
  this.mwTotal = mwTotal * showPercentage;
  this.mwTherapistHour = mwTherapistHour;
  this.therapists = therapists;
  this.shiftHours = shiftHours;


  //calc total minutes of mw
  //calc potential minutes of mw
  //calc mw per therapist
  //calc remaining mw minutes after shift

  this.mwTotalMinutes = mwMinutes * mwTotal;
  this.mwPotentialMinutes = (mwMinutes * mwTherapistHour) * (shiftHours * therapists);
  this.mwPerTherapist = mwTotal / therapists;
  this.overflow = (this.mwTotalMinutes - this.mwPotentialMinutes) / this.therapists;

}

const form = {
  form: document.querySelector('form'),
  minutesPerMw: document.querySelector('#minutes-per-mw'),
  totalMw: document.querySelector('#total-mw'),
  mwPerHour: document.querySelector('#mw-per-hour'),
  numOfTherapists: document.querySelector('#number-of-therapists'),
  hoursInShift: document.querySelector('#hours-in-shift'),
  noShow: document.querySelector('#no-show-percent'),
  clear: document.querySelector('#clear-btn')
}

const table = {
  table: document.querySelector('table'),
  total: document.querySelector('#th'),
  potential: document.querySelector('#ph'),
  mwPer: document.querySelector('#mwpt'),
  mwOver: document.querySelector('#mwo')
}

form.form.addEventListener('submit', (e) => {
  e.preventDefault();

  table.table.classList.remove('hidden');

  let wl = new work(form.minutesPerMw.value, form.totalMw.value, form.mwPerHour.value, form.numOfTherapists.value, form.hoursInShift.value, form.noShow.value)

  // overview of therapy hours

  setTimeout(() => {
    table.total.innerText = `${( wl.mwTotalMinutes / 60 ).toFixed(2)} hours`;
    table.total.classList.remove('hidden');
  }, 200)

  setTimeout(() => {
    table.potential.innerText = `${( wl.mwPotentialMinutes / 60 ).toFixed(2)} hours`;
    table.potential.classList.remove('hidden');
  }, 250)

  setTimeout(() => {
    table.mwOver.innerText = `${ Math.ceil(wl.overflow) } minutes`;
    table.mwOver.classList.remove('hidden');
  }, 325)

})

form.clear.addEventListener('click', (e) => {

  e.preventDefault();

  Object.values(form).forEach(input => {
    input.value = '';
  })
})

// observer to draw chart

const observer = new MutationObserver(() => {
  playerArray.forEach((player, index) => {
    data.datasets.forEach((set, dataIndex) => {
      if (index === dataIndex) {
        set.name = player.name;
        set.values = player.data.mw;
      }
    })
  });
  chart.draw()
});

let options = {
  attributes: true,
  childList: true,
  characterData: true
};

observer.observe(book.pages[3], options);

// data visualization

const data = {
  labels: ["8am", 8, "9am", '', "10am", '', "11am", '', '12pm', '', '1pm', '', "2pm", '', "3pm", '', "4pm", '', "5pm", '', "6pm", ''],
  datasets: [{
      name: '',
      type: "line",
      values: [1, 5, 7, 8, 9, 11, 13, 14, 15, 17, 19, 20, 23]
    },
    {
      name: '',
      type: "line",
      values: [2, 5, 8, 8, 10, 11, 14, 14, 14, 14, 14, 14, 14, 16, 19, 20, 21, 23, 24, 24, 25, 27]
    },
    {
      name: '',
      type: "line",
      values: [1, 1, 2, 4, 5, 7, 8, 10, 11, 11, 13, 16, 18]
    },
    {
      name: '',
      type: "line",
      values: [1, 4, 7, 9, 10, 10, 13, 14, 17, 20, 21, 22, 23]
    },
    {
      name: '',
      type: "line",
      values: [1, 12, 12, 13, 13, 13, 15, 16, 17, 19, 20, 22]
    },
    {
      name: '',
      type: "line",
      values: [2, 5, 6, 6, 6, 7, 8, 11, 14, 14, 14, 16, 19, 23]
    }
  ],
  yMarkers: [{
    label: "Total MW",
    value: 30,
    options: {
      labelPos: 'left'
    }
  }],
  // yRegions: [{ label: "Region", start: -10, end: 15,
  // 	options: { labelPos: 'right' }}]
}

const chart = new frappe.Chart("#chart", { // or a DOM element,
  // new Chart() in case of ES6 module with above usage
  title: "My Awesome Chart",
  data: data,
  type: 'line', // or 'bar', 'line', 'scatter', 'pie', 'percentage'
  height: 660,
  colors: ['#7cd6fd', '#743ee2', '#268', '#ea9dd0', '#ebedf0', '#c0ddf9', '#73b3f3', '#3886e1', '#17459e'],
  lineOptions: {},
})

const cheat = {
  skull: document.querySelector('[name = "skull"]'),
  fuckYou() {
    console.log('fuck you')
  },
  thankYou() {
    console.log('thank you');
  },
  refresh() {
    chart.draw();
  },
  getShade() {
    chart.lineOptions.regionFill = 1
  },
  totalMw() {
    this.totalMw = prompt('enter total projectd muscle works for today:')
  },
  listen() {
    this.skull.addEventListener('dblclick', () => {
      let code = prompt('');
      switch (code) {
        case 'fuck it':
          cheat.fuckYou()
          break;
        case 'thanks':
          cheat.thankYou()
          break;
        case 'update':
          cheat.refresh()
          break;
        case 'shadow':
          cheat.getShade()
          break;
        case 'total mw':
          cheat.totalMw();
          break;
        default:
      }
    })
  }
}

cheat.listen();
