// define object for localStorage

const storage = {
  storeData(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  },
  pullData(key) {
    const item = localStorage.getItem(key);
    try {
      return JSON.parse(item);
    } catch (error) {
      return item;
    }
  },
  checkData(key) {
    return localStorage.hasOwnProperty(key)
  },
  killData(key) {
    return localStorage.removeItem(key);
  },
  isEmpty() {
    const isEmpty = localStorage.length === 0 ? true : false;
    return isEmpty;
  }
}

let letters = ['a', 'b', 'c', 'd', 'e', 'f']

window.addEventListener('beforeunload', function(e) {

  if (playerArray && playerArray.every(player => {
      player.name === undefined;
    })) {
    return;
  } else {
    for (let i = 0; i < playerArray.length; i++) {
      for (let j = 0; j < letters.length; j++) {
        storage.storeData(`${letters[i]}-saved`, playerArray[i]);
      }
    }
  }
})

// pull from storage when page loads

window.addEventListener('load', () => {

  //prevent rowTwo display on

  if (localStorage.length === 0) {
    return
  } else {

    const rowTwo = document.querySelector('.row-two');

    rowTwo.classList.add('inactive');

    const loadedPlayers = Object.keys(localStorage);

    loadedPlayers.sort((a, b) => a[0].localeCompare(b[0]));

    let loadedArray = [];

    loadedPlayers.forEach(obj => {
      if (obj !== 'dark-mode') {
        loadedArray.push(storage.pullData(obj))
      }
    })

    for (let i = 0; i < playerArray.length; i++) {
      for (let j = 0; j < loadedArray.length; j++) {
        if (i === j) {
          restoreState(playerArray[i], loadedArray[j]);
        }
      }
    }
  }
})

function restoreState(player, loadedPlayer) {
  player.mwCounter.innerText = loadedPlayer.mwRooms.length;
  player.examCounter.innerText = loadedPlayer.examRooms.length;
  loadedPlayer.examRooms.forEach(room => {
    player.examRooms.push(room);
  });
  loadedPlayer.mwRooms.forEach(room => {
    player.mwRooms.push(room)
  });
  player.isActive = loadedPlayer.isActive;
  player.name = loadedPlayer.name;
  if (player.name !== undefined) {
    player.box.children[1].innerText = player.name
    player.data = loadedPlayer.data;
  }
}
