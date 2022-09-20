var dailyButton = document.getElementById('daily-button');

dailyButton.addEventListener('click', loadDailyInfo());

function loadDailyInfo(){
    console.log('Clicked Daily Button');
}



var weeklyButton = document.getElementById('weekly-button');

weeklyButton.addEventListener('click', loadWeeklyInfo());

function loadWeeklyInfo(){
    console.log('Clicked Weekly Button');
}




var monthlyButton = document.getElementById('monthly-button');

monthlyButton.addEventListener('click', loadMonthlyInfo());

function loadMonthlyInfo(){
    console.log('Clicked Daily Button');
}
