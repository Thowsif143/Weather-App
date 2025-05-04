const temperatureFiled = document.querySelector('.temp');
const locationFiled = document.querySelector('.time_location p');
const dateFiled = document.querySelector('.time_location span');
const conditionFiled = document.querySelector('.condition p');
const iconField = document.querySelector('.weather-icon');
const searchFiled = document.querySelector('.search_area');
const form = document.querySelector('form');

form.addEventListener('submit', searchForLocation);

let place = 'Nellore';

const fetchResult = async () => {
    let url = `http://api.weatherapi.com/v1/current.json?key=16fd8c771ddc48c8bda114420250305&q=${place}&aqi=no`;

    const res = await fetch(url);
    const data = await res.json();

    console.log(data);

    let locationName = data.location.name;
    let time = data.location.localtime;
    let temp = data.current.temp_c;
    let condition = data.current.condition.text;
    let icon = data.current.condition.icon;

    updateDetails(temp, locationName, time, condition, icon);
};

function updateDetails(temp, locationName, time, condition, icon) {
    let splitDate = time.split(' ')[0];
    let splittime = time.split(' ')[1];

    let currDate = getDateName(new Date(splitDate).getDay());

    temperatureFiled.innerText = temp;
    locationFiled.innerText = locationName;
    dateFiled.innerText = `${splitDate} ${currDate} ${splittime}`;
    conditionFiled.innerText = condition;
    iconField.src = "https:" + icon;
}

function searchForLocation(e) {
    e.preventDefault();
    place = searchFiled.value.trim();
    if (place) {
        fetchResult(place);
    }
}

fetchResult(place);

function getDateName(number) {
    switch (number) {
        case 0:
            return 'Sunday';
        case 1:
            return 'Monday';
        case 2:
            return 'Tuesday';
        case 3:
            return 'Wednesday';
        case 4:
            return 'Thursday';
        case 5:
            return 'Friday';
        case 6:
            return 'Saturday';
        default:
            return '';
    }
}
