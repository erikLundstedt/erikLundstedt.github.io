

window.onscroll = function() {myFunction2()};

function myFunction2() {
	var navbar = document.getElementById("navbar");
	var sticky = navbar.offsetTop;
	var classes=navbar.classList;
	var x=210;//230
  if (window.pageYOffset >= 284) {//230/sticky
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
    if (x.className == "topnav") {
        x.className += " responsive";
				console.log(classes);
    } else {
        x.className = "topnav";
				console.log(classes);
    }
}
