const birthday = new Date("September 3, 2026 00:00:00").getTime();


let songStarted = false;

let score = 0;

let questionNumber = 1;






// HEART BACKGROUND


setInterval(()=>{


let heart=document.createElement("span");


heart.innerHTML="❤️";


heart.style.left=Math.random()*100+"%";


heart.style.animationDuration=(Math.random()*5+5)+"s";



document.getElementById("hearts")
.appendChild(heart);



setTimeout(()=>{


heart.remove();


},8000);



},500);










// START SONG2


window.addEventListener("load",()=>{


let song=document.getElementById("loveSong");


song.volume=.4;


song.play()

.then(()=>{


songStarted=true;


})

.catch(()=>{


console.log("waiting for click");


});


});









// PHONE AUTOPLAY FIX


document.body.addEventListener("click",()=>{


if(!songStarted){


let song=document.getElementById("loveSong");


song.volume=.4;


song.play();


songStarted=true;


}


});











// COUNTDOWN


setInterval(()=>{


let now=new Date().getTime();


let distance=birthday-now;



let days=Math.floor(

distance/(1000*60*60*24)

);



let hours=Math.floor(

(distance%(1000*60*60*24))

/

(1000*60*60)

);



let minutes=Math.floor(

(distance%(1000*60*60))

/

(1000*60)

);



let seconds=Math.floor(

(distance%(1000*60))

/

1000

);



document.getElementById("days").innerHTML=days;


document.getElementById("hours").innerHTML=hours;


document.getElementById("minutes").innerHTML=minutes;


document.getElementById("seconds").innerHTML=seconds;



},1000);












// LETTER


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











// FAVORITE PHOTO


function showFavorite(){


document.getElementById("favoritePopup")
.style.display="flex";


}



function closeFavorite(){


document.getElementById("favoritePopup")
.style.display="none";


}












// GAME


function openGame(){


document.getElementById("photosPage")
.classList.add("hidden");



document.getElementById("gamePage")
.classList.remove("hidden");



score=0;


document.getElementById("scoreText")
.innerHTML=

"Hearts collected: 0/10";



spawnHeart();


}




function spawnHeart(){


if(score>=10){


document.getElementById("winBox")
.classList.remove("hidden");


return;


}



let heart=document.createElement("div");


heart.className="gameHeart";


heart.innerHTML="❤️";


heart.style.left=Math.random()*80+"%";


heart.style.top=Math.random()*80+"%";



heart.onclick=()=>{


score++;


document.getElementById("scoreText")
.innerHTML=

"Hearts collected: "

+score+

"/10";



heart.remove();


spawnHeart();



};




document.getElementById("gameArea")
.appendChild(heart);



}












// PRIZE TICKET


function claimPrize(){


document.getElementById("gamePage")
.classList.add("hidden");



document.getElementById("prizeTicketPage")
.classList.remove("hidden");



setTimeout(()=>{


document.getElementById("prizeTicketPage")
.classList.add("hidden");



document.getElementById("questionPage")
.classList.remove("hidden");



},4000);



}












// QUESTIONS


function nextQuestion(){


let answer=document.getElementById("answerBox");



if(answer.value.trim()===""){


alert("Answer first 😭❤️");


return;


}



if(questionNumber===1){


questionNumber=2;


document.getElementById("questionText")
.innerHTML=

"Will you marry me I know we can't now but can I preebook youuuhhh? 💍❤️";



answer.value="";


}


else{


document.getElementById("questionPage")
.innerHTML=


`

<div class="questionBox">

<h1>

I love you sooo muchhh ham ❤️😭

</h1>


<p>

Now go to datee pagee 💌

</p>


<button onclick="openDatePage()">

Go to date page ❤️

</button>


</div>

`;



}



}












// DATE PAGE


function openDatePage(){


document.getElementById("questionPage")
.classList.add("hidden");



document.getElementById("datePage")
.classList.remove("hidden");





// STOP SONG2


let song=document.getElementById("loveSong");


song.pause();


song.currentTime=0;






// START MUSIC1


let music=document.getElementById("birthdayMusic");


music.volume=.5;


music.play();



}












// DATE TICKET


function makeTicket(){


let date=document.getElementById("dateInput").value;



if(date===""){


alert("Pick a date 😭❤️");


return;


}



document.getElementById("chosenDate")
.innerHTML=

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





let song=document.getElementById("loveSong");


song.pause();





let music=document.getElementById("birthdayMusic");


music.pause();



}











// PASSWORD TEST


function testAccess(){


let pass=prompt("Enter testing password ❤️");



if(pass==="Avanthika123"){


document.getElementById("countdownPage")
.classList.add("hidden");



document.getElementById("birthdayPage")
.classList.remove("hidden");




// KEEP SONG2


let song=document.getElementById("loveSong");


song.volume=.4;


song.play();



alert("Test mode activated ❤️");


}

else{


alert("Wrong password 😭");


}


}
