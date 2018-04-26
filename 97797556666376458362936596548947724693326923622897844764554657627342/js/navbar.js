//document.getElementById("luxbar").style.padding="50px 0px";



//window.onscroll = function() {myFunction()};
window.onscroll = function() {fun2()};

function myFunction() {
	var navbar = document.getElementById("luxbar");
	var sticky = navbar.offsetTop;
	var classes = navbar.classList;
	var x=210;//230
	if (window.pageYOffset >= 284) {//230/sticky284
		navbar.classList.add("sticky")
		console.log(window.pageYOffset+". . . ."+sticky+" true");
	} else if (window.pageYOffset <= 284){//230/sticky
		navbar.classList.remove("sticky");
		console.log(window.pageYOffset+". . . ."+sticky+" false");
	}
}

function fun2()
{
	var topnav = document.getElementById("luxbar");
	var navbar = document.getElementsByClassName("luxbar-navigation");
	var sticky = topnav.offsetTop;
	var classes = navbar.classList;
	var x=290;//250
	if (window.pageYOffset<=0.999999999999999999) {
		topnav.style.margin="0px 0px 0px";
		//topnav.style.backgroundAttachment="fixed";
	} else {
		topnav.style.padding= x-window.pageYOffset-5+"px 0px 0px";
		//topnav.style.backgroundAttachment="scroll";
	}

	console.log(sticky+"...padding: "+topnav.style.padding+"...offset: "+window.pageYOffset);
}


function main()
{
	var topnav = document.getElementById("luxbar");
	var sticky = topnav.offsetTop;
	topnav.style.padding=window.pageYOffset+"252px 0px";
	console.log("123");
}
//main();
fun2();
/*
Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon
*/
/*
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
*/




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
