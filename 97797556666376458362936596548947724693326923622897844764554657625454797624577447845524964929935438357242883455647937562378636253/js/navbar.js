

window.onscroll = function() {myFunction2()};

function myFunction2() {
	var navbar = document.getElementById("navbar");
	var sticky = navbar.offsetTop;
	var classes = navbar.classList;
	var x=210;//230
	if (window.pageYOffset >= 284) {//230/sticky284
		navbar.classList.add("sticky")
		console.log(window.pageYOffset+". . . ."+sticky);
	} else if (window.pageYOffset <= 284){//230/sticky
		navbar.classList.remove("sticky");
		console.log(window.pageYOffset+". . . ."+sticky);
	}
}
/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */

function myFunction() {
	var x = document.getElementById("navbar");
	var classes=x.classList;
	console.log("........."+x.className);
	if (x.classList === "topnav active")
	{
		x.classList.remove("active")
		console.log("inactive");
	}
	else if (x.classlist==="topnav sticky active")
	{
		x.classList.remove("active")
		console.log("inactive");
	}
	else
	{
		x.classList.add("active")
		console.log("active");
	}
}




var state=false
function stylechange()
{
	var x = document.getElementById("style");
	if (state===true) {
		x.className=("spacer loggocol")
		state=false
	} else if(state===false){
		x.className=("spacer white")
		state=true
	}
	//	x.classList.exsists()
}
