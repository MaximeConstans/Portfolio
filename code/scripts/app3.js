//Mouvement animation
const card3 = document.querySelector(".card3");
const container3 = document.querySelector(".container3");

//Animation des items
const title3 = document.querySelector('.title3');
const logo_projet3 = document.querySelector('.logo-projet3 img');
const purchase3 = document.querySelector('.purchase3 button');
const description3 = document.querySelector('.info3 h3');
const descriptionh13 = document.querySelector('.info3 h4');

//Action de mouvement
container3.addEventListener("mousemove", (e) => {
   let xAxis = (window.innerWidth - e.pageX) / 110;
   let yAxis = (window.innerHeight - e.pageY) / 110;
   card3.style.transform =`rotateY(${xAxis-10}deg) rotateX(${yAxis+15}deg)`
});
//Animation In
container3.addEventListener('mouseenter', (e) => {
   card3.style.transition = "none";
   //Popout
   title3.style.transform = "translateZ(50px)";
   logo_projet3.style.transform = "translateZ(50px)";
   purchase3.style.transform = "translateZ(50px)";
   description3.style.transform = "translateZ(50px)";
   descriptionh13.style.transform = "translateZ(50px)";
})
//Animation Out
container3.addEventListener('mouseleave', (e) => {
   card3.style.transition = "all 0.5s ease";
   card3.style.transform = `rotateY(0deg) rotateX(0deg)`;
   //Popback
   title3.style.transform = "translateZ(0px)";
   logo_projet3.style.transform = "translateZ(0px)";
   purchase3.style.transform = "translateZ(0px)";
   description3.style.transform = "translateZ(0px)";
   descriptionh13.style.transform = "translateZ(0px)";
});