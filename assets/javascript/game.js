
var yourScore = 0;
var wins = 0;
var losses = 0;
var randomFreq = (Math.floor(Math.random()*(120-19+1)+19));

$(document).ready(function() {
	
	$("#random-freq").html("<div class='text-danger'> click start to begin </div>");
	
	function begin() {
		randomFreq = (Math.floor(Math.random()*(120-19+1)+19));
		$("#random-freq").html("<div>" + randomFreq + " MHz </div>");
		$("#crystal-1").attr("value", (Math.floor(Math.random()*(12-1+1)+1)));
		$("#crystal-2").attr("value", (Math.floor(Math.random()*(12-1+1)+1)));
		$("#crystal-3").attr("value", (Math.floor(Math.random()*(12-1+1)+1)));
		$("#crystal-4").attr("value", (Math.floor(Math.random()*(12-1+1)+1)));
		yourScore = 0;
		wins = 0;
		losses = 0;
		$("#wins").html(wins);
		$("#losses").html(losses);

	}

	function nextRound() {
		randomFreq = (Math.floor(Math.random()*(120-19+1)+19));
		$("#random-freq").html("<div>" + randomFreq + " MHz </div>");
		$("#crystal-1").attr("value", (Math.floor(Math.random()*(12-1+1)+1)));
		$("#crystal-2").attr("value", (Math.floor(Math.random()*(12-1+1)+1)));
		$("#crystal-3").attr("value", (Math.floor(Math.random()*(12-1+1)+1)));
		$("#crystal-4").attr("value", (Math.floor(Math.random()*(12-1+1)+1)));
		}
	
	$("button#start").click(function() {
		begin();
	});

	$(".crystal").click(function() {
		var buttonVal = $(this).attr("value");
		$("#your-score").html("<div>" + $(this).attr("value") + " MHz</div>");
		yourScore = parseInt(yourScore) + parseInt(buttonVal);
		$("#your-score").html("<div>" + yourScore + " MHz </div>");
		if (yourScore === randomFreq) {
		  	$("#your-score").html(yourScore)
		  	alert("N A M A S T E");
		 	wins++;
		  	$("#wins").html(wins);
		  	yourScore = 0;
		  	nextRound();
		  	$("#your-score").html(yourScore)
		  }
		  else if (yourScore >= randomFreq) {
			$("#your-score").html(yourScore)
		  	alert("B A D  V I B E Z");
		  	losses++;
		  	$("#losses").html(losses);
		  	yourScore = 0;
		  	nextRound();
		  	$("#your-score").html(yourScore)
		 	}
	});
});
