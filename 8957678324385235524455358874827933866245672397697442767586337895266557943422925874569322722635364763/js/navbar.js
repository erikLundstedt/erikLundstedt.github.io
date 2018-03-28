
window.onscroll = function() {myFunction2()};
var toggle=0;

function myFunction2() {
	var navbar = document.getElementById("navbar");
	var sticky = navbar.offsetTop;
	var classes=navbar.classList;
  if (window.pageYOffset >= 230) {//230/sticky
		navbar.classList.add("sticky")
		console.log(classes);
		console.log(window.pageYOffset+". . . ."+sticky);
  } else if (window.pageYOffset <= 230){//230/sticky
		navbar.classList.remove("sticky");
		console.log(classes);
		console.log(window.pageYOffset+". . . ."+sticky);
  }
}

/*
function functionName() {
	var navbar = document.getElementById("navbar");
	if (toggle==1) {
		navbar.classList.add("sticky")
		console.log(toggle);
		toggle=0;
	}
	 else if (toggle==0)
	{
		navbar.classList.remove("sticky");
		console.log(toggle);
		toggle=1;
	}
}


*/


/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
	var x = document.getElementById("navbar");
	if (x.className === "topnav") {
		x.className += " responsive";
	} else {
		x.className = "topnav";
	}
}
