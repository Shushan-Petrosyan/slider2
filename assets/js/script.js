const toggleButton = document.getElementById('toggle-button');
const toggleIcon = document.getElementById('toggle-icon');
const toggleText = document.getElementById('toggle-text');
const hiddenImages = document.querySelectorAll('.hidden');

toggleButton.addEventListener('click', () => {
  hiddenImages.forEach(image => {
    image.classList.toggle('hidden');
  });

  const isHidden = Array.from(hiddenImages).some(image => image.classList.contains('hidden'));

  if (isHidden) {
    toggleText.textContent = 'Показать все';
    toggleIcon.classList.remove('rotated');
  } else {
    toggleText.textContent = 'Скрыть';
    toggleIcon.classList.add('rotated');
  }
});

const toggleButtonIpad = document.getElementById('toggle-button-ipad');
const toggleIconIpad = document.getElementById('toggle-icon-ipad');
const toggleTextIpad = document.getElementById('toggle-text-ipad');
const hiddenImagesIpad = document.querySelectorAll('.hidden-ipad');

toggleButtonIpad.addEventListener('click', () => {
  hiddenImagesIpad.forEach(image => {
    image.classList.toggle('hidden-ipad');
  });

  const isHiddenIpad = Array.from(hiddenImagesIpad).some(image => image.classList.contains('hidden-ipad'));

  if (isHiddenIpad) {
    toggleTextIpad.textContent = 'Показать все';
    toggleIconIpad.classList.remove('rotatedIpad');
  } else {
    toggleTextIpad.textContent = 'Скрыть';
    toggleIconIpad.classList.add('rotatedIpad');
  }
});

document.body.style.background = 
"linear-gradient(to bottom, white 50px, rgb(247, 247, 247) 50px)";

new Swiper('.image-slider', {

   pagination: {
    el: '.swiper-pagination',
    clickable: true,
  
   },
  
   autoHeight: true,
  // slidesPerView: 3,
 // breakpoints: {
   // 780: {
     //     slidesPerView: 3, 
          
     // },
    // 750: {
      //    slidesPerView: 2.5, 
     // },
     //500: {
       //   slidesPerView: 2, 
     // },
      //400: {
        //  slidesPerView: 1, 
    // },
  //},

  
});



//const swiper = new Swiper('.swiper', {
  // Optional parameters
 // loop: true,
 // slidesPerView: 1,
 // spaceBetween: 10,

  // Pagination
  //pagination: {
    //el: '.swiper-pagination',
   // clickable: true,
 // },
//});

//const swiper = new Swiper('.swiper', {
    // Optional parameters
  //  direction: 'horizontal',
    //loop: true,
  
    // If we need pagination
   // pagination: {
     // el: '.swiper-pagination',
    //},
  
    // Navigation arrows
   // navigation: {
     // nextEl: '.swiper-button-next',
      //prevEl: '.swiper-button-prev',
    //},
  
    // And if we need scrollbar
    //scrollbar: {
      //el: '.swiper-scrollbar',
    //},
  //});
  