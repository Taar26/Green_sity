function Ohran0( ) { location.href = 'index5.html' };
function Ohran1( ) { location.href = 'index2.html' };
function Ohran2( ) { location.href = 'index3.html' };
function Ohran3( ) { location.href = 'index4.html' };
function Ohran4( ) { location.href = 'index6.php' };
function Ohran5( ) { location.href = 'index11.php' };
function Ohran6( ) { location.href = 'index8.html' };
function Ohran7( ) { location.href = 'index13.html' };
function Ohran8( ) { location.href = 'index8.html' };
function Ohran9( ) { location.href = 'index14.html' };
function Ohran10( ) { location.href = 'index11.html' };
function Ohran11( ) { location.href = 'index12.html' };
function Ohran12( ) { location.href = 'index11.html' };
function Ohran13( ) { location.href = 'login.php' };


function clean_input(){
    document.getElementById("name_input").value = "";
}
function clean_input2(){
    document.getElementById("name_input2").value = "";
}
function clean_input3(){
    document.getElementById("name_input3").value= "";
}

function clean_input2_2(){
    document.getElementById("name_input2_2").value = "";
    document.getElementById("name_input2_2").type = "password";
}



$(document).ready(function() {
    $("body").css("display", "none");

    $("body").fadeIn(2000);

	$("a").click(function(event){
		event.preventDefault();
		linkLocation = this.href;
		$("body").fadeOut(1000, redirectPage);
	});

	function redirectPage() {
		window.location = linkLocation;
	}
});
