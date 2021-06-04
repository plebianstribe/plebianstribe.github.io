function firstBtn(x){
	console.log("fired");
	$("#locDiv").show();
	switch(x){
		case 1:
		$("#ssTitle").html("Property Owner");
		console.log("HELLO WORKS")
			break;
		case 2:
		$("#ssTitle").html("Journalist");
		console.log("two")
			break;
		case 3:
		$("#ssTitle").html("Concerned Citizen");
			break;
		case 4:
		$("#ssTitle").html("Beachgoer");
			break;
		default:
			
	}
}
function back(){
	$("#secondScreen").hide();
	$("#firstScreen").show();
}

function locBtn(loca){
	var x = document.getElementById('locInput').value;
	document.getElementById('locOut').value=x;
	$("#ssST").html("Compared to 18 years ago, there is a: ")
	$("#firstTd").css("background-color", "#2DE1C2");
	$("#secondTd").css("background-color", "#85877C");
	$("#thirdTd").css("background-color", "#85877C");
	$("#changeTd").html('<img src="solomonIsland.png" alt="Girl in a jacket">')
	$("#firstScreen").hide();
	$("#secondScreen").show();
	

}
$(document).ready(function () {
	$("#firstTd").on('click', function (e) {
		console.log("first");
        $("#firstTd").css("background-color", "#2DE1C2");
		$("#secondTd").css("background-color", "#85877C");
		$("#thirdTd").css("background-color", "#85877C");
		$("#changeTd").html('<img src="solomonIsland.png" alt="Girl in a jacket">')
    });
	$("#secondTd").on('click', function (e) {
				console.log("sec");
        $("#firstTd").css("background-color", "#85877C");
		$("#secondTd").css("background-color", "#2DE1C2");
		$("#thirdTd").css("background-color", "#85877C");
		$("#changeTd").html('<img src="img2.png" style="display:block; margin:auto;" alt="Girl in a jacket"><label>Half-boiled human</label>')
    });
	$("#thirdTd").on('click', function (e) {
				console.log("thir");
        $("#firstTd").css("background-color", "#85877C");
		$("#secondTd").css("background-color", "#85877C");
		$("#thirdTd").css("background-color", "#2DE1C2");
		$("#changeTd").html("<video style='display:block; margin:auto;' loop width='250'><source src='img3.webm' type='video/webm'><source src='https://fca7603378a4e3ebeab2-4e03b1ac88f27f7b20b4cf232f717383.ssl.cf1.rackcdn.com/videos/COP_story/Flooding_square_opt.mp4' type='video/mp4'> Sorry, your browser doesn't support embedded videos.</video><label style='font-size:8px;'>Credits to WWF</label>")
    });
})