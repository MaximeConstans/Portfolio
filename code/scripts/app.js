//Mouvement animation
const card = document.querySelector(".card");
const container = document.querySelector(".container");

//Animation des items
const title = document.querySelector('.title');
const logo_projet = document.querySelector('.logo-projet img');
const purchase = document.querySelector('.purchase button');
const description = document.querySelector('.info h3');
const descriptionh1 = document.querySelector('.info h4');

//Action de mouvement
container.addEventListener("mousemove", (e) => {
   let xAxis = (window.innerWidth - e.pageX) / 110;
   let yAxis = (window.innerHeight - e.pageY) / 110;
   card.style.transform =`rotateY(${xAxis-10}deg) rotateX(${yAxis+15}deg)`
});
//Animation In
container.addEventListener('mouseenter', (e) => {
   card.style.transition = "none";
   //Popout
   title.style.transform = "translateZ(50px)";
   logo_projet.style.transform = "translateZ(50px)";
   purchase.style.transform = "translateZ(50px)";
   description.style.transform = "translateZ(50px)";
   descriptionh1.style.transform = "translateZ(50px)";
})
//Animation Out
container.addEventListener('mouseleave', (e) => {
   card.style.transition = "all 0.5s ease";
   card.style.transform = `rotateY(0deg) rotateX(0deg)`;
   //Popback
   title.style.transform = "translateZ(0px)";
   logo_projet.style.transform = "translateZ(0px)";
   purchase.style.transform = "translateZ(0px)";
   description.style.transform = "translateZ(0px)";
   descriptionh1.style.transform = "translateZ(0px)";
});