// function to toggle mode

const modeDark = function(el, dark) {
  dark === true ?
    document.querySelectorAll(el).forEach(item => {
      item.classList.add('dark-mode');
    }) :
    document.querySelectorAll(el).forEach(item => {
      item.classList.remove('dark-mode');
    })
}

// define object for localStorage

// const storage = {
//   storeData(key, value) {
//     localStorage.setItem(key, JSON.stringify(value));
//   },
//   pullData(key) {
//     const item = localStorage.getItem(key);
//     try {
//       return JSON.parse(item);
//     } catch (error) {
//       return item;
//     }
//   },
//   checkData(key) {
//     return localStorage.hasOwnProperty(key)
//   },
//   killData(key) {
//     return localStorage.removeItem(key);
//   }
// }

const body = document.querySelector('body');
const icon = document.querySelector('.mode-icon');
const navLinks = [...document.querySelectorAll('.nav-link')];


if (document.querySelector('.mode-icon')) {

  icon.addEventListener('click', function(e) {

    if (storage.pullData('dark-mode')) {

      body.classList.remove('dark-mode');
      navLinks.forEach(link => link.classList.remove('dark'))
      storage.killData('dark-mode');

      modeDark('.exam-count', false)
      modeDark('.mw-count', false)

    } else {

      body.classList.add('dark-mode');
      navLinks.forEach(link => link.classList.add('dark'))
      storage.storeData('dark-mode', 'true');

      modeDark('.exam-count', true)
      modeDark('.mw-count', true)

    }
  });
}

window.addEventListener('DOMContentLoaded', () => {

  body.classList.remove('content-hidden');

  if (storage.pullData('dark-mode')) {

    body.classList.add('dark-mode');
    navLinks.forEach(link => link.classList.add('dark'))

    modeDark('.exam-count', true)
    modeDark('.mw-count', true)

  } else {

    body.classList.remove('dark-mode');

    modeDark('.exam-count', false)
    modeDark('.mw-count', false)

  }
})
