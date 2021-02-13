//Mouvement animation
const card2 = document.querySelector(".card2");
const container2 = document.querySelector(".container2");

//Animation des items
const title2 = document.querySelector('.title2');
const logo_projet2 = document.querySelector('.logo-projet2 img');
const purchase2 = document.querySelector('.purchase2 button');
const description2 = document.querySelector('.info2 h3');
const descriptionh12 = document.querySelector('.info2 h4');

//Action de mouvement
container2.addEventListener("mousemove", (e) => {
   let xAxis = (window.innerWidth - e.pageX) / 110;
   let yAxis = (window.innerHeight - e.pageY) / 110;
   card2.style.transform =`rotateY(${xAxis-10}deg) rotateX(${yAxis+15}deg)`
});
//Animation In
container2.addEventListener('mouseenter', (e) => {
   card2.style.transition = "none";
   //Popout
   title2.style.transform = "translateZ(50px)";
   logo_projet2.style.transform = "translateZ(50px)";
   purchase2.style.transform = "translateZ(50px)";
   description2.style.transform = "translateZ(50px)";
   descriptionh12.style.transform = "translateZ(50px)";
})
//Animation Out
container2.addEventListener('mouseleave', (e) => {
   card2.style.transition = "all 0.5s ease";
   card2.style.transform = `rotateY(0deg) rotateX(0deg)`;
   //Popback
   title2.style.transform = "translateZ(0px)";
   logo_projet2.style.transform = "translateZ(0px)";
   purchase2.style.transform = "translateZ(0px)";
   description2.style.transform = "translateZ(0px)";
   descriptionh12.style.transform = "translateZ(0px)";
});