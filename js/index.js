// document.addEventListener("DOMContentLoaded", function () {
//     window.addEventListener("scroll", function () {
//         var windowBottom = window.scrollY + window.innerHeight;
//         var fadeElements = document.querySelectorAll(".fade-left, .fade-right");
//         var slideElements = document.querySelectorAll(".slide-left, .slide-right");

//         fadeElements.forEach(function (element) {
//             var objectBottom = element.offsetTop + element.offsetHeight;
//             if (objectBottom < windowBottom) {
//                 element.classList.add("show");
//             }
//         });

//         slideElements.forEach(function (element) {
//             var objectBottom = element.offsetTop + element.offsetHeight;
//             if (objectBottom < windowBottom) {
//                 element.classList.add("show");
//             }
//         });
//     });
// });
// document.addEventListener("DOMContentLoaded", function () {
//     var fadeTopElements = document.querySelectorAll(".fade-top");
//     var fadeBottomElements = document.querySelectorAll(".fade-bottom");
//     var slideTopElements = document.querySelectorAll(".slide-top");
//     var slideBottomElements = document.querySelectorAll(".slide-bottom");

//     function fadeInOnScroll() {
//         var windowBottom = window.scrollY + window.innerHeight;

//         fadeTopElements.forEach(function (element) {
//             var objectBottom = element.offsetTop + element.offsetHeight;
//             if (objectBottom < windowBottom) {
//                 element.classList.add("show");
//             }
//         });

//         fadeBottomElements.forEach(function (element) {
//             var objectBottom = element.offsetTop + element.offsetHeight;
//             if (objectBottom < windowBottom) {
//                 element.classList.add("show");
//             }
//         });
//     }

//     function slideInOnScroll() {
//         var windowBottom = window.scrollY + window.innerHeight;

//         slideTopElements.forEach(function (element) {
//             var objectBottom = element.offsetTop + element.offsetHeight;
//             if (objectBottom < windowBottom) {
//                 element.classList.add("show");
//             }
//         });

//         slideBottomElements.forEach(function (element) {
//             var objectBottom = element.offsetTop + element.offsetHeight;
//             if (objectBottom < windowBottom) {
//                 element.classList.add("show");
//             }
//         });
//     }

//     fadeInOnScroll();
//     slideInOnScroll();

//     window.addEventListener("scroll", function () {
//         fadeInOnScroll();
//         slideInOnScroll();
//     });

//     window.addEventListener("hashchange", function () {
//         fadeInOnScroll();
//         slideInOnScroll();
//     });
// });
