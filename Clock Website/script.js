const hour = document.getElementById("hours");
const minute = document.getElementById("minutes");
const second = document.getElementById("seconds");
function updateClock() {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = document.getElementById("ampm");
    if (h > 12) {
        h = h - 12;
        ampm.innerHTML = "PM";
    } else {
        ampm.innerHTML = "AM";
    }
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
    hour.innerHTML = h;
    minute.innerHTML = m;
    second.innerHTML = s;
    setTimeout(() => {
        updateClock();
    }, 1000);
}
updateClock();





// let timeDiv = document.getElementById('time');
// let dayDiv = document.getElementById('day');
// let dateDiv = document.getElementById('date');

// let dayArray = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];
// let monthArray = ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];

// setInterval(function clockFunc() {
//     let newDate = new Date();
//     let year = newDate.getFullYear();
//     let month = newDate.getMonth();
//     let date = newDate.getDate();
//     let day = newDate.getDay();
//     let hours = newDate.getHours();
//     let minutes = newDate.getMinutes();
//     let seconds = newDate.getSeconds();


//     timeDiv.innerHTML = `${hours} : ${minutes} : ${seconds}`;
//     dayDiv.innerHTML = `${dayArray[day]}`;
//     dateDiv.innerHTML = `${date} ${monthArray[month]} ${year}`;

// }, 1000)