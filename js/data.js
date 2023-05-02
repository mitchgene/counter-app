// workflow table

function work(mwMinutes, mwTotal, mwTherapistHour, therapists, shiftHours) {

  //get minutes per mw
  //get potential mw per hour per therapists
  //get number of therapists
  //get number of hours in shift

  let showPercentage = .9;

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

// observer to draw chart with player values

const observer = new MutationObserver(() => {
  playerArray.forEach((player, index) => {
    data.datasets.forEach((dataset, dataIndex) => {
      if (index === dataIndex) {
        dataset.name = player.name;
        dataset.values = player.data.mw;
      }
    })
  });
  chart.draw();
  pieChart.draw();
  pieChart2.draw();
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

const mwPie = {
  labels: ['completed mw', 'remaining mw'],
  datasets: [{
    name: '',
    type: "line",
    values: [1, 5, 7, 8, 9, 11, 13, 14, 15, 17, 19, 20, 23]
  }],
  yMarkers: [{
    label: "Total MW",
    value: 20,
    options: {
      labelPos: 'left'
    }
  }],
  yRegions: [{
    label: "Region",
    start: 18,
    end: 24,
    options: {
      labelPos: 'right'
    }
  }]
}

const therapistPie = {
  labels: ['madison', 'alex', 'brianna', 'jj', 'josh', 'mitchell'],
  datasets: [{
    name: '',
    type: "line",
    values: [1, 5, 7, 8, 9, 11]
  }],
  yMarkers: [{
    label: "Total MW",
    value: 20,
    options: {
      labelPos: 'left'
    }
  }],
  yRegions: [{
    label: "Region",
    start: 18,
    end: 24,
    options: {
      labelPos: 'right'
    }
  }]
}

const pieOptions1 = {
  data: {
    labels: ['label1', 'label2'],
    datasets: [{
      name: 'someData',
      values: [0, 1]
    }]
  },
  type: 'donut',
  height: 530
}

const pieOptions2 = {
  data: {
    labels: ['label1', 'label2'],
    datasets: [{
      name: 'someData',
      values: [23, 56]
    }]
  },
  type: 'donut',
  height: 530
}

const pieChart = new frappe.Chart("#pieChartOne", { // or a DOM element,
  // new Chart() in case of ES6 module with above usage
  title: "completed mw per therapist",
  data: mwPie,
  type: 'pie', // or 'bar', 'line', 'scatter', 'pie', 'percentage'
  height: 530,
  colors: ['#70c1b3', '#247BA0', '#FFE066', '#F25F5C', '#783f8e', '#2FE6DE'],
  animate: 1
})

const pieChart2 = new frappe.Chart('#pieChartTwo', pieOptions1)




// line chart

const data = {
  labels: [8, '', 9, '', 10, '', 11, '', 12, '', 1, '', 2, '', 3, '', 4, '', 5, '', 6, '', 7],
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
    value: 20,
    options: {
      labelPos: 'left'
    }
  }],
  yRegions: [{
    label: "Region",
    start: 18,
    end: 24,
    options: {
      labelPos: 'right'
    }
  }]
}

// tuesday and thusday

const tuesData = {
  labels: [2, '', 3, '', 4, '', 5, '', 6, ''],
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
    value: 20,
    options: {
      labelPos: 'left'
    }
  }],
  yRegions: [{
    label: "Region",
    start: 18,
    end: 24,
    options: {
      labelPos: 'right'
    }
  }]
}

const chart = new frappe.Chart("#chart", { // or a DOM element,
  // new Chart() in case of ES6 module with above usage
  title: "completed mw per therapist",
  data: data,
  type: 'line', // or 'bar', 'line', 'scatter', 'pie', 'percentage'
  height: 660,
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


const cheat = {
  skull: document.querySelector('[name = "skull"]'),
  mouseIsDown: false,

  findWinner() {
    let longestPoints = 0;
    let winner = null;

    playerArray.forEach(player => {
      const playerPoints = player.mwRooms.length + player.examRooms.length;
      player.box.children[1].classList.remove('winning');
      if (playerPoints > longestPoints) {
        longestPoints = playerPoints;
        winner = player;
      }
    });
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
    chart.lineOptions.regionFill = 1
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
      // button.style.borderColor = retro[2];
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
            case 'shadow':
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
      }, 390);
    });
    this.skull.addEventListener('mouseup', () => {
      this.mouseIsDown = false;
    });
    if (this.totalMw) {

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
