// /*
// Hide header on scroll down & show on scroll up
// */

// const header = document.getElementById('header')
// let lastPos = document.documentElement.scrollTop

// window.addEventListener('scroll', () => {
//   const currPos = document.documentElement.scrollTop

//   if (currPos > lastPos) {
//     if (currPos > header.offsetHeight) {
//       header.classList.add('-translate-y-full')
//       header.classList.remove('shadow-md')
//     }
//   } else {
//     header.classList.remove('-translate-y-full')
//     header.classList.add('shadow-md')
//   }

//   lastPos = currPos
// }, false)

// var scrollpos = window.scrollY;
// var navcontent = document.getElementById("nav-content");

// document.addEventListener("scroll", function () {
//   /*Apply classes for slide in bar*/
//   scrollpos = window.scrollY;

//   if (scrollpos > 10) {
//     header.classList.add("bg-white");
//     header.classList.add("shadow");
//     navcontent.classList.remove("bg-gray-100");
//     navcontent.classList.add("bg-white");
//   } else {
//     header.classList.remove("bg-white");
//     header.classList.remove("shadow");
//     navcontent.classList.remove("bg-white");
//     navcontent.classList.add("bg-gray-100");
//   }
// });
