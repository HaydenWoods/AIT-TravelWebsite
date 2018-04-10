//Checking loading times
var start = new Date();
$(window).on("load", function() {
	var scene, parallaxInstance;

	//Checking loading times
	var loadEnd = new Date();
	console.log("Load time: "+(loadEnd.getTime() - start.getTime()).toString());
	console.log("Fake load of: "+(loadEnd.getTime() - start.getTime() < 600 ? 600 : 0).toString());

	//Loading screen
	setTimeout(function() {
		scene = document.getElementById('parallax');
		parallaxInstance = new Parallax(scene);
		$("#loading-container").fadeOut(300);
	}, loadEnd.getTime() - start.getTime() < 600 ? 600 : 0);	

	//Burger menu
    var button = $("#burger-button");
    var menu = $("#burger-menu"); 
    var burgerWidth = menu.css("width");
    var out = true;

    menu.css("right", "-" + String(burgerWidth));


	button.click(function() {
        button.toggleClass("burgerChange");
        menu.stop(true, false).animate(out ? {"right": "0"} : {"right": "-" + String(burgerWidth)}, 300);
        out = !out;
	});

	//Scroll to position
	$(document).on('click', 'a[href^="#"]', function (event) {
	    event.preventDefault();

	    $('html, body').stop(true,false).animate({
	        scrollTop: $($.attr(this, 'href')).offset().top
	    }, 500);
	});
});