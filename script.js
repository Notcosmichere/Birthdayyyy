const birthday = new Date("September 3, 2026 00:00:00").getTime();





// FLOATING HEART GENERATOR

setInterval(()=>{

    let heart=document.createElement("span");

    heart.innerHTML="❤️";

    heart.style.left=Math.random()*100+"%";

    heart.style.animationDuration=(Math.random()*5+5)+"s";


    document.getElementById("hearts").appendChild(heart);


    setTimeout(()=>{

        heart.remove();

    },8000);


},500);










// COUNTDOWN


let countdown=setInterval(()=>{


let now=new Date().getTime();

let distance=birthday-now;



let days=Math.floor(distance/(1000*60*60*24));

let hours=Math.floor(
(distance%(1000*60*60*24))/(1000*60*60)
);


let minutes=Math.floor(
(distance%(1000*60*60))/(1000*60)
);


let seconds=Math.floor(
(distance%(1000*60))/1000
);



document.getElementById("days").innerHTML=days;

document.getElementById("hours").innerHTML=hours;

document.getElementById("minutes").innerHTML=minutes;

document.getElementById("seconds").innerHTML=seconds;





if(distance<=0){


clearInterval(countdown);


document.getElementById("countdownPage")
.classList.add("hidden");



document.getElementById("birthdayPage")
.classList.remove("hidden");



document.getElementById("birthdayMusic").play();



}



},1000);











// START BACKGROUND MUSIC


window.onload=function(){


let song=document.getElementById("loveSong");


song.volume=0.4;


song.play().catch(()=>{

console.log("Music starts after interaction");

});


}











// OPEN LETTER


function openLetter(){


document.getElementById("birthdayPage")
.classList.add("hidden");



document.getElementById("letterPage")
.classList.remove("hidden");


}











// PHOTOS


function openPhotos(){


document.getElementById("letterPage")
.classList.add("hidden");



document.getElementById("photosPage")
.classList.remove("hidden");



}









// DATE PAGE


function openDatePage(){


document.getElementById("photosPage")
.classList.add("hidden");



document.getElementById("datePage")
.classList.remove("hidden");


}











// MAKE TICKET


function makeTicket(){


let date=document.getElementById("dateInput").value;



if(date==""){


alert("Pick a date first 😭❤️");

return;


}



document.getElementById("chosenDate").innerHTML=

"Meeting Date ❤️ : "+date;



document.getElementById("datePage")
.classList.add("hidden");



document.getElementById("ticketPage")
.classList.remove("hidden");



}











// VOICE PAGE


function voicePage(){


document.getElementById("datePage")
.classList.add("hidden");



document.getElementById("voicePage")
.classList.remove("hidden");



// STOP SONG2


let song=document.getElementById("loveSong");

song.pause();

song.currentTime=0;



}

function testAccess(){


let pass = prompt("Enter testing password ❤️");


if(pass === "Avanthika123"){


document.getElementById("countdownPage")
.classList.add("hidden");


document.getElementById("birthdayPage")
.classList.remove("hidden");



document.getElementById("birthdayMusic").play();



alert("Test mode activated ❤️");


}

else{


alert("Wrong password 😭");


}



}
