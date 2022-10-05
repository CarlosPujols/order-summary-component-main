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
    weeklyButton.style.opacity = "100%";
    console.log('Page load defaults to weekly values');
    fetch('data.json')
    .then(function(Response){
        return Response.json()
    })
    .then(function(data){
        const Info = data;
        function singleHourCheck(i){
            var timeText ='hrs';
            if(i == 1){
                timeText='hr';
            }
            return timeText;
        }

        currentWork.innerHTML = Info[0].timeframes.weekly.current + singleHourCheck(Info[0].timeframes.weekly.current);
        currentPlay.innerHTML = Info[1].timeframes.weekly.current + singleHourCheck(Info[1].timeframes.weekly.current);
        currentStudy.innerHTML = Info[2].timeframes.weekly.current + singleHourCheck(Info[2].timeframes.weekly.current);
        currentExercise.innerHTML = Info[3].timeframes.weekly.current + singleHourCheck(Info[3].timeframes.weekly.current);
        currentSocial.innerHTML = Info[4].timeframes.weekly.current + singleHourCheck(Info[4].timeframes.weekly.current);
        currentSelfCare.innerHTML = Info[5].timeframes.weekly.current + singleHourCheck(Info[5].timeframes.weekly.current);
	    previousWork.innerHTML = 'Last Week - '+Info[0].timeframes.weekly.previous + singleHourCheck(Info[0].timeframes.weekly.previous);
        previousPlay.innerHTML = 'Last Week - '+Info[1].timeframes.weekly.previous + singleHourCheck(Info[1].timeframes.weekly.previous);
        previousStudy.innerHTML = 'Last Week - '+Info[2].timeframes.weekly.previous + singleHourCheck(Info[2].timeframes.weekly.previous);
        previousExercise.innerHTML = 'Last Week - '+Info[3].timeframes.weekly.previous + singleHourCheck(Info[3].timeframes.weekly.previous);
        previousSocial.innerHTML = 'Last Week - '+Info[4].timeframes.weekly.previous + singleHourCheck(Info[4].timeframes.weekly.previous);
        previousSelfCare.innerHTML = 'Last Week - '+Info[5].timeframes.weekly.previous + singleHourCheck(Info[5].timeframes.weekly.previous);
    })

}



dailyButton.addEventListener('click', loadDailyInfo);



function loadDailyInfo(){
    dailyButton.style.color = "white";
    dailyButton.style.opacity = "100%";
    weeklyButton.style.opacity = "50%";
    console.log('Clicked Daily Button');

    fetch('data.json')
    .then(function(Response){
        return Response.json()
    })
    .then(function(data){
        const Info = data;
        function singleHourCheck(i){
            var timeText ='hrs';
            if(i == 1){
                timeText='hr';
            }
            return timeText;
        }

        currentWork.innerHTML = Info[0].timeframes.daily.current + singleHourCheck(Info[0].timeframes.daily.current);
        currentPlay.innerHTML = Info[1].timeframes.daily.current + singleHourCheck(Info[1].timeframes.daily.current);
        currentStudy.innerHTML = Info[2].timeframes.daily.current + singleHourCheck(Info[2].timeframes.daily.current);
        currentExercise.innerHTML = Info[3].timeframes.daily.current + singleHourCheck(Info[3].timeframes.daily.current);
        currentSocial.innerHTML = Info[4].timeframes.daily.current + singleHourCheck(Info[4].timeframes.daily.current);
        currentSelfCare.innerHTML = Info[5].timeframes.daily.current + singleHourCheck(Info[5].timeframes.daily.current);
	    previousWork.innerHTML = 'Last Day - '+Info[0].timeframes.daily.previous + singleHourCheck(Info[0].timeframes.daily.previous);
        previousPlay.innerHTML = 'Last Day - '+Info[1].timeframes.daily.previous + singleHourCheck(Info[1].timeframes.daily.previous);
        previousStudy.innerHTML = 'Last Day - '+Info[2].timeframes.daily.previous + singleHourCheck(Info[2].timeframes.daily.previous);
        previousExercise.innerHTML = 'Last Day - '+Info[3].timeframes.daily.previous + singleHourCheck(Info[3].timeframes.daily.previous);
        previousSocial.innerHTML = 'Last Day - '+Info[4].timeframes.daily.previous + singleHourCheck(Info[4].timeframes.daily.previous);
        previousSelfCare.innerHTML = 'Last Day - '+Info[5].timeframes.daily.previous + singleHourCheck(Info[5].timeframes.daily.previous);
    })
}


weeklyButton.addEventListener('click', loadWeeklyInfo);

function loadWeeklyInfo(){

    console.log('Clicked Weekly Button');
    weeklyButton.style.color = "white";
    dailyButton.style.opacity = "50%";
    weeklyButton.style.opacity = "100%";
    monthlyButton.style.opacity = "50%";

    fetch('data.json')
    .then(function(Response){
        return Response.json()
    })
    .then(function(data){
        const Info = data;
        function singleHourCheck(i){
            var timeText ='hrs';
            if(i == 1){
                timeText='hr';
            }
            return timeText;
        }

        currentWork.innerHTML = Info[0].timeframes.weekly.current + singleHourCheck(Info[0].timeframes.weekly.current);
        currentPlay.innerHTML = Info[1].timeframes.weekly.current + singleHourCheck(Info[1].timeframes.weekly.current);
        currentStudy.innerHTML = Info[2].timeframes.weekly.current + singleHourCheck(Info[2].timeframes.weekly.current);
        currentExercise.innerHTML = Info[3].timeframes.weekly.current + singleHourCheck(Info[3].timeframes.weekly.current);
        currentSocial.innerHTML = Info[4].timeframes.weekly.current + singleHourCheck(Info[4].timeframes.weekly.current);
        currentSelfCare.innerHTML = Info[5].timeframes.weekly.current + singleHourCheck(Info[5].timeframes.weekly.current);
	    previousWork.innerHTML = 'Last Week - '+Info[0].timeframes.weekly.previous + singleHourCheck(Info[0].timeframes.weekly.previous);
        previousPlay.innerHTML = 'Last Week - '+Info[1].timeframes.weekly.previous + singleHourCheck(Info[1].timeframes.weekly.previous);
        previousStudy.innerHTML = 'Last Week - '+Info[2].timeframes.weekly.previous + singleHourCheck(Info[2].timeframes.weekly.previous);
        previousExercise.innerHTML = 'Last Week - '+Info[3].timeframes.weekly.previous + singleHourCheck(Info[3].timeframes.weekly.previous);
        previousSocial.innerHTML = 'Last Week - '+Info[4].timeframes.weekly.previous + singleHourCheck(Info[4].timeframes.weekly.previous);
        previousSelfCare.innerHTML = 'Last Week - '+Info[5].timeframes.weekly.previous + singleHourCheck(Info[5].timeframes.weekly.previous);
    })
}


monthlyButton.addEventListener('click', loadMonthlyInfo);

function loadMonthlyInfo(){
    console.log('Monthly Daily Button');
    monthlyButton.style.color = "white";
    dailyButton.style.opacity = "50%";
    weeklyButton.style.opacity = "50%";
    monthlyButton.style.opacity = "100%";

    fetch('data.json')
    .then(function(Response){
        return Response.json()
    })
    .then(function(data){
        const Info = data;
        function singleHourCheck(i){
            var timeText ='hrs';
            if(i == 1){
                timeText='hr';
            }
            return timeText;
        }

        currentWork.innerHTML = Info[0].timeframes.monthly.current + singleHourCheck(Info[0].timeframes.monthly.current);
        currentPlay.innerHTML = Info[1].timeframes.monthly.current + singleHourCheck(Info[1].timeframes.monthly.current);
        currentStudy.innerHTML = Info[2].timeframes.monthly.current + singleHourCheck(Info[2].timeframes.monthly.current);
        currentExercise.innerHTML = Info[3].timeframes.monthly.current + singleHourCheck(Info[3].timeframes.monthly.current);
        currentSocial.innerHTML = Info[4].timeframes.monthly.current + singleHourCheck(Info[4].timeframes.monthly.current);
        currentSelfCare.innerHTML = Info[5].timeframes.monthly.current + singleHourCheck(Info[5].timeframes.monthly.current);
	    previousWork.innerHTML = 'Last Month - '+Info[0].timeframes.monthly.previous + singleHourCheck(Info[0].timeframes.monthly.previous);
        previousPlay.innerHTML = 'Last Month - '+Info[1].timeframes.monthly.previous + singleHourCheck(Info[1].timeframes.monthly.previous);
        previousStudy.innerHTML = 'Last Month - '+Info[2].timeframes.monthly.previous + singleHourCheck(Info[2].timeframes.monthly.previous);
        previousExercise.innerHTML = 'Last Month - '+Info[3].timeframes.monthly.previous + singleHourCheck(Info[3].timeframes.monthly.previous);
        previousSocial.innerHTML = 'Last Month - '+Info[4].timeframes.monthly.previous + singleHourCheck(Info[4].timeframes.monthly.previous);
        previousSelfCare.innerHTML = 'Last Month - '+Info[5].timeframes.monthly.previous + singleHourCheck(Info[5].timeframes.monthly.previous);
    })
}
