setInterval(showTime, 1000);

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



	let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
	let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

	let curWeekDay = days[time.getDay()];
	let curDay = time.getDate();
	let curMonth = months[time.getMonth()];
	let curYear = time.getFullYear();

	let d = curWeekDay + ", " + curDay + " " + curMonth + " " + curYear;

	document.getElementById("date").innerHTML = d;

}
showTime();

//Made By Mubtasim Ahmed in 8hours (4days) 
//status: finished
//responsive website: 3hr