//navbar toggle


document.getElementById("hamburger").onclick = function toggleMenu() {
    const navToggle = document.getElementsByClassName("toggle");
    for (let i = 0; i < navToggle.length; i++) {
      navToggle.item(i).classList.toggle("hidden");
    }
  };

  //flicktiy
var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  contain: true
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity( '.main-carousel', {
  // options
});


//js modal

const toggleModal = () => {
    document.querySelector('.modal')
      .classList.toggle('modal--hidden');
    document.querySelector('.overlay')
      .classList.toggle('overlay--hidden');
  }
  document.querySelector('#show-modal')
    .addEventListener('click', toggleModal);
  
  document.querySelector('.overlay')
    .addEventListener('click', toggleModal);
  
  document.querySelector('#learn-more-form')
    .addEventListener('submit', (e) => {
    e.preventDefault();
    toggleModal();
  });
  