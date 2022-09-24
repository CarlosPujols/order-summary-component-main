const monthlyButton = document.getElementById('monthly');
const weeklyButton = document.getElementById('weekly');
const dailyButton = document.getElementById('daily');

var currentWork = document.getElementById('current-work');
var previousWork = document.getElementById('previous-work');

var currentPlay = document.getElementById('current-play');
var previousPlay = document.getElementById('previous-play');

var currentStudy = document.getElementById('current-study');
var previousStudy = document.getElementById('previous-study');

var currentExercise = document.getElementById('current-exercise');
var previousExercise = document.getElementById('previous-exercise');

var currentSocial = document.getElementById('current-social');
var previousSocial = document.getElementById('previous-social');

var currentSelfCare = document.getElementById('current-selfcare');
var previousSelfCare = document.getElementById('previous-selfcare');

window.addEventListener('load', defaultActions);

function defaultActions(){

    weeklyButton.style.color = "white";
    weeklyButton.style.opacity = 100;
    console.log('Page load defaults to weekly values');

}



dailyButton.addEventListener('click', loadDailyInfo);

function loadDailyInfo(){
    console.log('Clicked Daily Button');
}


weeklyButton.addEventListener('click', loadWeeklyInfo);

function loadWeeklyInfo(){
    console.log('Clicked Weekly Button');
}


monthlyButton.addEventListener('click', loadMonthlyInfo);

function loadMonthlyInfo(){
    console.log('Clicked Daily Button');
}
