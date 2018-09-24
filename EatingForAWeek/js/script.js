$(document).ready(function(){
    $('.divImg').click(startGame);
});

	//setup variables
	var seconds = 6;
	var dayOfTheWeek = 1;

	var clickFood1 = 0;
	var clickFood2 = 0;
	var clickFood3 = 0;
	var clickFood4 = 0;

	var overallFatness = 0;
	var fatGain = 0;

	var scale = 1;

	var randomSrc1;
	var randomSrc2;
	var randomSrc3;
	var randomSrc4;

	var randomOrder1;
	var randomOrder2;
	var randomOrder3;
	var randomOrder4;

	var tabNumbers = [1,2,3,4];




function startGame(){
$(".divImg").unbind("click");
$("#pExplications").html("Prepare your next meal. You have " + seconds + " seconds");
seconds--;
$("#h1Title").html("Prepare a meal for day 1");


	var timer = setInterval(function () {
	        $("#pExplications").html("Prepare your next meal. You have " + seconds + " seconds");
	        seconds--;

	        //si les secondes sont écoulées, faire les actions suivantes
	        if(seconds == -1){
	       		dayOfTheWeek++;

	       		//si aucune série de clic n'a été complété
	        	if(fatGain == 0){
	        		fatGain = 4;
	        		overallFatness+= 4;
	        	}


	        	//sinon, déterminer la nouvelle taille du body
	        	if(fatGain == 4){
	        		scale += 0.14;
	        	}
	        	else if(fatGain == 3){
	        		scale += 0.12;
	        	}
	        	else if(fatGain == 2){
	        		scale += 0.1;
	        	}
	        	else if(fatGain == 1){
	        		scale -= 0.1;
	        	}

	        	$("#imgBody").css({
	        			transform: "scaleX(" + scale + ")"
	        		})

	        $("#h1Title").html("Prepare a meal for day "+ dayOfTheWeek);


	       	//reset le compteur et les clics
			seconds = 6;
			clickFood1 = 0;
			clickFood2 = 0;
			clickFood3 = 0;
			clickFood4 = 0;
			fatGain = 0;

			$("#pClick1").html("Clicks: 0/1");
			$("#pClick2").html("Clicks: 0/10");
			$("#pClick3").html("Clicks: 0/20");
			$("#pClick4").html("Clicks: 0/30");

			randomSrc1 = Math.floor(Math.random() * 3) + 1;
			randomSrc2 = Math.floor(Math.random() * 3) + 1;
			randomSrc3 = Math.floor(Math.random() * 3) + 1;
			randomSrc4 = Math.floor(Math.random() * 3) + 1;

			$("#imgBadFood").attr("src","img/badFood" + randomSrc1 + ".svg");
			$("#imgOkFood").attr("src","img/okFood" + randomSrc2 + ".svg");
			$("#imgGoodFood").attr("src","img/goodFood" + randomSrc3 + ".svg");
			$("#imgGreatFood").attr("src","img/greatFood" + randomSrc4 + ".svg");


			//get random numbers to place randomly the 4 categories of food on the page
			randomOrder1 = tabNumbers[Math.floor(Math.random()*tabNumbers.length)];
			tabNumbers.splice( $.inArray(randomOrder1, tabNumbers), 1);

			randomOrder2 = tabNumbers[Math.floor(Math.random()*tabNumbers.length)];
			tabNumbers.splice( $.inArray(randomOrder2, tabNumbers), 1);

			randomOrder3 = tabNumbers[Math.floor(Math.random()*tabNumbers.length)];
			tabNumbers.splice( $.inArray(randomOrder3, tabNumbers), 1);

			randomOrder4 = tabNumbers[Math.floor(Math.random()*tabNumbers.length)];
			tabNumbers.splice( $.inArray(randomOrder4, tabNumbers), 1);


			//change the order of the food categories
			$("#food1").css("order", randomOrder1);
			$("#food2").css("order", randomOrder2);
			$("#food3").css("order", randomOrder3);
			$("#food4").css("order", randomOrder4);

			//reset the var tabNumbers with the 4 numbers for the next day
			tabNumbers = [1,2,3,4];


	        //si le jour 7 de la semaine est passé, faire ces actions.
	        	if(dayOfTheWeek > 7){

	        		//que le h1 change pour Your week is over
	        		$("#h1Title").html("The week is over.");

	        		//faire que le p en bas montre le changement de poids après les 7 jours.
	        		if(overallFatness > 7){
						$("#pExplications").html("You gained " + (overallFatness - 7) + " pounds. Try to eat healthier next week!");
	        		}
	        		if (overallFatness == 7){
	        			$("#pExplications").html("Your weight is the same as it was at the begining of the week.");
	        		}
	        		if (overallFatness < 7){
	        			$("#pExplications").html("You lost " + (overallFatness - 7) + " pounds. Good job!");
	        		}
	        		$("#divAllImg").hide();
	        		document.getElementById("h1Title").style.marginTop = "2%";
	        		//faire que la fonction timer arrête.
	        		clearInterval(timer);
	        		$("*").unbind("click");
	        	}



	        }
	    },1000);



	//lorsqu'un clic est effectué, ajouter 1 au pointage.
	if(this.id == "food1"){
		clickFood1++;
		$("#pClick1").html("Clicks: " + clickFood1 + "/1");
	}

	else if(this.id == "food2"){
		clickFood2++;
		$("#pClick2").html("Clicks: " + clickFood2 + "/10");
	}

	else if(this.id == "food3"){
		clickFood3++;
		$("#pClick3").html("Clicks: " + clickFood3 + "/20");
	}

	else if(this.id == "food4"){
		clickFood4++;
		$("#pClick4").html("Clicks: " + clickFood4 + "/30");
	}

	$('.divImg').click(addPoint);
}


function addPoint(){

	if(this.id == "food1"){
		clickFood1++;
		if (clickFood1 <= 1 && clickFood2 < 10 && clickFood3 < 20 && clickFood4 < 30){
			$("#pClick1").html("Clicks: " + clickFood1 + "/1");
			if(clickFood1 == 1){
				overallFatness+=4;
				fatGain = 4;
			}
		}
	}

	else if(this.id == "food2"){
		clickFood2++;
		if (clickFood1 < 1 && clickFood2 <= 10 && clickFood3 < 20 && clickFood4 < 30){
			$("#pClick2").html("Clicks: " + clickFood2 + "/10");
			if(clickFood2 == 10){
				overallFatness+=3;
				fatGain = 3;
			}
		}
	}

	else if(this.id == "food3"){
		clickFood3++;
		if (clickFood1 < 1 && clickFood2 < 10 && clickFood3 <= 20 && clickFood4 < 30){
			$("#pClick3").html("Clicks: " + clickFood3 + "/20");
			if(clickFood3 == 20){
				overallFatness+=2;
				fatGain = 2;
			}
		}
	}

	else if(this.id == "food4"){
		clickFood4++;
		if (clickFood1 < 1 && clickFood2 < 10 && clickFood3 < 20 && clickFood4 <= 30){
			$("#pClick4").html("Clicks: " + clickFood4 + "/30");
			if(clickFood4 == 30){
				overallFatness-=1;
				fatGain = 1;
			}
		}
	}

}

