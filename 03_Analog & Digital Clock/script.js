
const hr = document.getElementById('hour');
const min = document.getElementById('min');
const sec = document.getElementById('sec');

function displayTime() {
    let time = new Date();
    let hh = time.getHours();
    let mm = time.getMinutes();
    let ss = time.getSeconds();
   
    let hRotation = 30 * hh + mm / 2;
    let mRotation = 6 * mm;
    let sRotation = 6 * ss;

    hr.style.transform = `rotate(${hRotation}deg)`;
    min.style.transform = `rotate(${mRotation}deg)`;
    sec.style.transform = `rotate(${sRotation}deg)`;
}

function showTime() {

	let time = new Date();
	let hour = time.getHours();
	let min = time.getMinutes();
	let sec = time.getSeconds();
	am_pm = "  AM";

	if (hour >= 12) {
		if (hour > 12) hour -= 12;
		am_pm = "  PM";
	} else if (hour == 0) {
		hr = 12;
		am_pm = "  AM";
	}

	hour = hour < 10 ? "0" + hour : hour;
	min = min < 10 ? "0" + min : min;
	sec = sec < 10 ? "0" + sec : sec;

	let currentTime = hour + ":" + min + ":" + sec + am_pm;
	document.getElementById("clock").innerHTML = currentTime;
}

displayTime();
showTime();

setInterval(displayTime, 1000);
setInterval(showTime, 1000);

//5hr-kitty 3.5hr-spidey with responsive 8.5 total
