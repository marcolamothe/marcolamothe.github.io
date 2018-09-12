
$(document).ready(function () {
//do this when the page is ready

$("#aStartQ").click(transitionIntroToColors);


$(".divColors").click(transitionColorsDescription);

$("#aTxtEntry").click(transitionDescToResultDesc);

$("#aResultDivEntry").click(transitionResultDescLocation);

$("#aAfterLocation").click(transitionLocationDragDrop);

$("#buttonAfterDestDrag").click(transitionDragDropConclusion);


});


var timeTransition = 500;



function transitionIntroToColors() {

	//add the class disappear to the element to make it fade out of the page (with opacity going from 1 to 0)
    $("#divIntro").addClass("disappear");

    //set a timeout of the duration of var timeTransition that will change the display of the element to 'none' when the timer will be done (meaning the opacity of the element will be 0 and so it will be ready to be removed from the page)
    window.setTimeout( afterTimeTransition, timeTransition);

    //this is the function that will make the element change to display: none. Also, it will show the next element needed to be displayed.
    function afterTimeTransition(){
    //we add the class "noDisplay" that just make the display of the element to none.
      $("#divIntro").addClass("noDisplay");

      //then, we make the next element with a display: block to have it on the page.
      $("#wrapperColors").css("display", "block");
      //with the class appear, it will fade in with opacity changing from 0 to 1.
      $("#wrapperColors").addClass("appear");
   };


}


function transitionColorsDescription() {

	//add the class disappear to the element to make it fade out of the page (with opacity going from 1 to 0)
    $("#wrapperColors").addClass("disappear");

    //set a timeout of the duration of var timeTransition that will change the display of the element to 'none' when the timer will be done (meaning the opacity of the element will be 0 and so it will be ready to be removed from the page)
    window.setTimeout( afterTimeTransition, timeTransition);

    //this is the function that will make the element change to display: none. Also, it will show the next element needed to be displayed.
    function afterTimeTransition(){
    //we remove the class appear from the element.
      $("#wrapperColors").removeClass("appear");
    //we add the class "noDisplay" that just make the display of the element to none.
      $("#wrapperColors").addClass("noDisplay");
      //then, we make the next element with a display: block to have it on the page.
      $("#divTxtEntry").css("display", "block");
      //with the class appear, it will fade in with opacity changing from 0 to 1.
      $("#divTxtEntry").addClass("appear");
   };

}

function transitionDescToResultDesc() {
	//add the class disappear to the element to make it fade out of the page (with opacity going from 1 to 0)
    $("#divTxtEntry").addClass("disappear");

    //set a timeout of the duration of var timeTransition that will change the display of the element to 'none' when the timer will be done (meaning the opacity of the element will be 0 and so it will be ready to be removed from the page)
    window.setTimeout( afterTimeTransition, timeTransition);

    //this is the function that will make the element change to display: none. Also, it will show the next element needed to be displayed.
    function afterTimeTransition(){
    //we remove the class appear from the element.
      $("#divTxtEntry").removeClass("appear");
    //we add the class "noDisplay" that just make the display of the element to none.
      $("#divTxtEntry").addClass("noDisplay");
      //then, we make the next element with a display: block to have it on the page.
      $("#resultDivEntry").css("display", "block");
      //with the class appear, it will fade in with opacity changing from 0 to 1.
      $("#resultDivEntry").addClass("appear");
   };
}


function transitionResultDescLocation() {
	//add the class disappear to the element to make it fade out of the page (with opacity going from 1 to 0)
    $("#resultDivEntry").addClass("disappear");

    //set a timeout of the duration of var timeTransition that will change the display of the element to 'none' when the timer will be done (meaning the opacity of the element will be 0 and so it will be ready to be removed from the page)
    window.setTimeout( afterTimeTransition, timeTransition);

    //this is the function that will make the element change to display: none. Also, it will show the next element needed to be displayed.
    function afterTimeTransition(){
    //we remove the class appear from the element.
      $("#resultDivEntry").removeClass("appear");
    //we add the class "noDisplay" that just make the display of the element to none.
      $("#resultDivEntry").addClass("noDisplay");
      //then, we make the next element with a display: block to have it on the page.
      $("#locationSpa").css("display", "block");
      //with the class appear, it will fade in with opacity changing from 0 to 1.
      $("#locationSpa").addClass("appear");
   };
}



function transitionLocationDragDrop() {
	//add the class disappear to the element to make it fade out of the page (with opacity going from 1 to 0)
    $("#locationSpa").addClass("disappear");

    //set a timeout of the duration of var timeTransition that will change the display of the element to 'none' when the timer will be done (meaning the opacity of the element will be 0 and so it will be ready to be removed from the page)
    window.setTimeout( afterTimeTransition, timeTransition);

    //this is the function that will make the element change to display: none. Also, it will show the next element needed to be displayed.
    function afterTimeTransition(){
    //we remove the class appear from the element.
      $("#locationSpa").removeClass("appear");
    //we add the class "noDisplay" that just make the display of the element to none.
      $("#locationSpa").addClass("noDisplay");
      //then, we make the next element with a display: block to have it on the page.
      $("#destinationDrag").css("display", "block");
      //with the class appear, it will fade in with opacity changing from 0 to 1.
      $("#destinationDrag").addClass("appear");
   };
}


function transitionDragDropConclusion() {
	//add the class disappear to the element to make it fade out of the page (with opacity going from 1 to 0)
    $("#destinationDrag").addClass("disappear");

    //set a timeout of the duration of var timeTransition that will change the display of the element to 'none' when the timer will be done (meaning the opacity of the element will be 0 and so it will be ready to be removed from the page)
    window.setTimeout( afterTimeTransition, timeTransition);

    //this is the function that will make the element change to display: none. Also, it will show the next element needed to be displayed.
    function afterTimeTransition(){
    //we remove the class appear from the element.
      $("#destinationDrag").removeClass("appear");
    //we add the class "noDisplay" that just make the display of the element to none.
      $("#destinationDrag").addClass("noDisplay");
      //then, we make the next element with a display: block to have it on the page.
      $("#end").css("display", "block");
      //with the class appear, it will fade in with opacity changing from 0 to 1.
      $("#end").addClass("appear");
   };
}








