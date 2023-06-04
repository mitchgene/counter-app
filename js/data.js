// workflow table

function work(mwMinutes, mwTotal, mwTherapistHour, therapists, shiftHours) {

  //get minutes per mw
  //get potential mw per hour per therapists
  //get number of therapists
  //get number of hours in shift

  let showPercentage = .9;

  this.mwMinutes = mwMinutes * showPercentage;
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
  this.overflow = (this.mwTotalMinutes - this.mwPotentialMinutes)

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
  mwOver: document.querySelector('#mwo'),

  // overall therapy row

  allMW: document.querySelector('#tm'),
  potentialNumMw: document.querySelector('#pm'),
  overflowMw: document.querySelector('#om'),

  // individual row

  totalMwEach: document.querySelector('#tme'),
  potentialMwEach: document.querySelector('#pme'),
  overMwEach: document.querySelector('#omwe')
}

form.form.addEventListener('submit', (e) => {
  e.preventDefault();

  table.table.classList.remove('hidden');

  let wl = new work(form.minutesPerMw.value, form.totalMw.value, form.mwPerHour.value, form.numOfTherapists.value, form.hoursInShift.value)

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
    table.mwOver.innerText = `${ Math.ceil( wl.overflow ) } minutes`;
    table.mwOver.classList.remove('hidden');
  }, 325)

  setTimeout(() => {
    table.allMW.innerText = `${ Math.floor( wl.mwTotal ) } mw`;
    table.allMW.classList.remove('hidden');
  }, 200)

  setTimeout(() => {
    table.potentialNumMw.innerText = `${ Math.floor( wl.mwPotentialMinutes / wl.mwMinutes ) } mw`;
    table.potentialNumMw.classList.remove('hidden');
  }, 250)

  setTimeout(() => {
    table.overflowMw.innerText = `${ Math.floor( (wl.mwTotal - ( wl.mwPotentialMinutes / wl.mwMinutes ))   ).toFixed() } mw`;
    table.overflowMw.classList.remove('hidden');
  }, 325)

  setTimeout(() => {
    table.totalMwEach.innerText = `${ Math.floor( wl.mwTotal / wl.therapists ) } mw`;
    table.totalMwEach.classList.remove('hidden');
  }, 200)

  setTimeout(() => {
    table.potentialMwEach.innerText = `${ (Math.floor( wl.mwPotentialMinutes / wl.mwMinutes) / wl.therapists).toFixed()  } mw`;
    table.potentialMwEach.classList.remove('hidden');
  }, 250)

  setTimeout(() => {
    table.overMwEach.innerText = `${ Math.ceil( (wl.mwTotal - ( wl.mwPotentialMinutes / wl.mwMinutes )) / wl.therapists ).toFixed()  } mw`;
    table.overMwEach.classList.remove('hidden');
  }, 325)
})

form.clear.addEventListener('click', (e) => {

  e.preventDefault();

  Object.values(form).forEach(input => {
    input.value = '';
  })
})

// observer to draw chart with player values

const observer = new MutationObserver(() => {

  // push player values to each option correctly

  playerArray.forEach((player, index) => {

    // add listener to chart links -> update chart options accordingly

    // if checkbox is checked -> do a another thing

    data_a.datasets.forEach((dataset, dataIndex) => {

      if (index === dataIndex) {

        dataset.name = player.name;
        dataset.values = player.data.mw;

      }
    })

  });

  chart.draw();

  if (cheat.totalMw) {
    pieChart.draw();
  }
  // pieChart2.draw();
});

let options = {
  attributes: true,
  childList: true,
  characterData: true
};

observer.observe(book.pages[3], options);

// data visualization

function swapChartData(chart, data) {
  chart.update(data)
}

// pie chart

const pie_a = {
  labels: ['completed', 'remaining'],
  datasets: [{
    name: '',
    type: "line",
    values: [11, 54]
  }]
}

const pieChart = new frappe.Chart("#pieChartA", { // or a DOM element,
  // new Chart() in case of ES6 module with above usage
  title: "completed mw",
  data: pie_a,
  type: 'donut', // or 'bar', 'line', 'scatter', 'pie', 'percentage'
  height: 430,
  colors: ['#70c1b3', '#247BA0', '#FFE066', '#F25F5C', '#783f8e', '#2FE6DE'],
  animate: 1
})



// main chart

const data_a = {
  labels: [8, '', 9, '', 10, '', 11, '', 12, '', 1, '', 2, '', 3, '', 4, '', 5, '', 6, '', 7],
  datasets: [{
      name: '',
      type: "",
      values: []
    },
    {
      name: '',
      type: "",
      values: []
    },
    {
      name: '',
      type: "",
      values: []
    },
    {
      name: '',
      type: "",
      values: []
    },
    {
      name: '',
      type: "",
      values: []
    },
    {
      name: '',
      type: "",
      values: []
    }
  ],
  yMarkers: [{
    label: "",
    value: 20,
    options: {
      labelPos: 'left'
    }
  }],
  yRegions: [{
    label: "",
    start: null,
    end: null,
    options: {
      labelPos: 'right'
    }
  }]
}

const data_b = {
  labels: [8, '', 9, '', 10, '', 11, '', 12, '', 1, '', 2, '', 3, '', 4, '', 5, '', 6, '', 7],
  datasets: [{
      name: '',
      type: "",
      values: []
    },
    {
      name: '',
      type: "",
      values: []
    },
    {
      name: '',
      type: "",
      values: []
    },
    {
      name: '',
      type: "",
      values: []
    },
    {
      name: '',
      type: "",
      values: []
    },
    {
      name: '',
      type: "",
      values: []
    }
  ],
  yMarkers: [{
    label: "",
    value: 20,
    options: {
      labelPos: 'left'
    }
  }],
  yRegions: [{
    label: "",
    start: null,
    end: null,
    options: {
      labelPos: 'right'
    }
  }],
  title: "completed mw per therapist",
  type: 'bar', // or 'bar', 'line', 'scatter', 'pie', 'percentage'
  height: 560,
  colors: ['#7cd6fd', '#743ee2', '#268', '#ea9dd0', '#ebedf0', '#c0ddf9', '#73b3f3', '#3886e1', '#17459e'],
  lineOptions: {
    regionFill: 0,
    hideDots: 1,
    heatLine: 1
  },
  axisOptions: {
    xIsSeries: true // default: false
  },
  animate: 1,
}

// tuesday and thusday

const tuesData = {
  labels: [2, '', 3, '', 4, '', 5, '', 6, ''],
  datasets: [{
      name: '',
      type: "line",
      values: []
    },
    {
      name: '',
      type: "line",
      values: []
    },
    {
      name: '',
      type: "line",
      values: []
    },
    {
      name: '',
      type: "line",
      values: []
    },
    {
      name: '',
      type: "line",
      values: []
    },
    {
      name: '',
      type: "line",
      values: []
    }
  ],
  yMarkers: [{
    label: "",
    value: 20,
    options: {
      labelPos: 'left'
    }
  }],
  yRegions: [{
    label: "",
    start: null,
    end: null,
    options: {
      labelPos: 'right'
    }
  }]
}

const chart = new frappe.Chart("#chart", { // or a DOM element,
  // new Chart() in case of ES6 module with above usage
  title: "completed mw per therapist",
  data: data_b,
  type: 'line', // or 'bar', 'line', 'scatter', 'pie', 'percentage'
  height: 560,
  colors: ['#7cd6fd', '#743ee2', '#268', '#ea9dd0', '#ebedf0', '#c0ddf9', '#73b3f3', '#3886e1', '#17459e'],
  lineOptions: {
    regionFill: 0,
    hideDots: 1,
    heatLine: 1
  },
  axisOptions: {
    xIsSeries: true // default: false
  },
  animate: 1,
})

const dataOptions = {
  links: [...document.querySelectorAll('.chart-link')],
  slider: document.querySelector('.slider'),
  linkListen() {
    this.links.forEach(( link, index ) => {
      link.addEventListener('click', () => {
        if (this.slider.checked) {
          console.log('bar graph', index)
        } else {
          console.log('line chart', index)
        }
      })

    })
  },
  mw: [],
  exams: [],
  oa: []
}

dataOptions.linkListen();


const cheat = {
  skull: document.querySelector('[name = "skull"]'),
  mouseIsDown: false,

  findWinner() {
    let longestPoints = 0;
    let winner = null;

    playerArray.forEach(player => {
      if (player.box.children[1].classList.contains('winning')) {
        player.box.children[1].classList.remove('winning')
      } else {
        const playerPoints = player.mwRooms.length + player.examRooms.length;
        player.box.children[1].classList.remove('winning');
        if (playerPoints > longestPoints) {
          longestPoints = playerPoints;
          winner = player;
        }
      }
    });

    if ( winner === null ) {
      return;
    }
    winner.box.children[1].classList.add('winning')
  },
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
    chart.lineOptions.regionFill = 1;
    chart.draw();
  },
  totalMw() {
    this.totalMw = prompt('enter total projectd muscle works for today:')
  },
  retro() {
    let retro = [
      '#200d3a',
      '#fd0c9b',
      '#9684d4',
      '#e6a46c'
    ]
    body.style.background = retro[0];
    body.style.color = retro[1];
    mwBtns.forEach(button => {
      button.style.background = retro[2];
      button.style.borderColor = retro[2];
    });
    document.querySelector('[name="skull"]').style.color = retro[3]
  },
  listen() {
    this.skull.addEventListener('mousedown', () => {
      this.mouseIsDown = true;
      setTimeout(() => {
        if (cheat.mouseIsDown) {
          let code = prompt('');
          switch (code) {
            case 'champ':
              cheat.findWinner()
              break;
            case 'fuck it':
              cheat.fuckYou()
              break;
            case 'thanks':
              cheat.thankYou()
              break;
            case 'update':
              cheat.refresh()
              break;
            case 'shadows':
              cheat.getShade()
              break;
            case 'mw':
              cheat.totalMw();
              break;
            case 'retro':
              cheat.retro();
              break;
            default:
          }
        }
      }, 290);
    });
    this.skull.addEventListener('mouseup', () => {
      this.mouseIsDown = false;
    });
    if (this.totalMw) {
      // code for pie chart, regionFill on main chart
    }
  }
}

cheat.listen();



const time = {
  now() {
    return new Date();
  },
  log(it) {
    console.log(it);
  },
  seconds() {
    return this.now().getSeconds();
  },
  minutes() {
    return this.now().getMinutes();
  },
  hours() {
    return this.now().getHours();
  },
  testInterval(start, end) {
    setInterval(() => {
      if (time.seconds() >= start && time.seconds() < end) {
        time.now();
        dataCollection();
        console.log('yep shits still fuckin going damn slut')
      }
    }, 1200000);
  }
}
