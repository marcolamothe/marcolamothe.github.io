

// This script file contains the instructions for the major interactive parts of my website.
// Major interactive parts: Drag and drop (1), Location information (2), Input analysis (3), ending with spam (4).
// *The numbers on the line before are used to quickly see which chunk of code the lines are associated with.



// (2) Borrowing your Google Maps API key to use Google's (reverse) geocoding
var geocodeAPIKey = "AIzaSyAdowACHRvSfVV60ck8AJwkFg_i7_Vx_0c";

// (2) getting JSON data about the user's location.
var geocodeURL = "https://maps.googleapis.com/maps/api/geocode/json";

// (2) getting the city of the user and use it later.
  var city;

// (4) setting up the variable that will contain all the links that may interest the user.
  var linksArrayEnd = new Array();
// (4) setting a variable that will help creating a name to the last page popups.
// (4) the number will start at 0 and go up everytime a popup is created
// (4) so every popup has its own number and can be considered as a new window.
  var numberEndPage = 0;



$(document).ready(function () {
//do this when the page is ready


//(2) When the button #buttonAfterDestDrag will be clicked, it will activate a function to get the location of the user.
  $("#aResultDivEntry").click(locationSection);


// (3) When #aTxtEntry gets clicked, it will show an answer to the text that has just been written.
  $('#aTxtEntry').on('click',showAnswerToText); 


//(4) When the button #buttonAfterDestDrag will be clicked, it will activate a function that will spam the user with multple links at once, + links repetitively until the website is closed.
  $("#buttonAfterDestDrag").click(destroyingTheUser);


// (1) the next lines about #you and #divDestinationX are there to set up the drag and drop action for the section #destinationDrag.
  $('#you').draggable({
    revert: 'invalid'
  });

  $('#divDestination1').droppable({
    drop: handleDrop1,
     accept: '#you'
  });
  $('#divDestination2').droppable({
    drop: handleDrop2,
     accept: '#you'
  });
  $('#divDestination3').droppable({
    drop: handleDrop3,
     accept: '#you'
  });
  $('#divDestination4').droppable({
    drop: handleDrop4,
     accept: '#you'
  });




//(1) This function removes the first part of the section to show the second part, which is a text related to the answer the person chose, which is a Vacation to the beach.
function handleDrop1(event,ui) {
//(1) first we remove the first part
  ui.draggable.remove();
  $(".divDestination").css({
    display: "none"
  });
  $("#zoneCharacter").css({
    display: "none"
  });
//(1) then we show the second part
  $("#sectionEnd").css('display', 'inline-block');
//(1) and we put a text that is related to the choice the person made
  $("#pConclusion").html('A vacation on a beach, great choice! Thank you for freely giving me some of your personal preferences. Go check the page I opened for you!');
//(1) finally, we open a window of a booking website which coincide with the preference of the person.
  window.open("http://www.signaturevacations.com/all-inclusive-beach-vacations.asp", "PopUp1", "width = 400, height = 400, top=250, left = 250", "_blank");
  //(4) adding the website to the pool in the array for the end.
  linksArrayEnd.push("http://www.signaturevacations.com/all-inclusive-beach-vacations.asp");
}

//(1) This function removes the first part of the section to show the second part, which is a text related to the answer the person chose, which is a Culinary trip.
function handleDrop2(event,ui) {
//(1) first we remove the first part
  ui.draggable.remove();
  $(".divDestination").css({
    display: "none"
  });
  $("#zoneCharacter").css({
    display: "none"
  });
//(1) then we show the second part
  $("#sectionEnd").css('display', 'inline-block');
//and we put a text that is related to the choice the person made
  $("#pConclusion").html('A culinary trip eh? Yummy! Thank you for freely giving me some of your personal preferences. Go check the page I opened for you!');
//(1) finally, we open a window of a booking website which coincide with the preference of the person.
  window.open("https://www.lonelyplanet.com/thailand", "PopUp2", "width = 400, height = 400, top=250, right = 250", "_blank");
//(4) adding the website to the pool in the array for the end.
  linksArrayEnd.push("https://www.lonelyplanet.com/thailand");
}
//This function removes the first part of the section to show the second part, which is a text related to the answer the person chose, which is a an European tour.
function handleDrop3(event,ui) {
//(1) first we remove the first part
  ui.draggable.remove();
  $(".divDestination").css({
    display: "none"
  });
  $("#zoneCharacter").css({
    display: "none"
  });
//(1) then we show the second part
  $("#sectionEnd").css('display', 'inline-block');
//(1) and we put a text that is related to the choice the person made
  $("#pConclusion").html('Europe will always be full of surprises and rich in history! Thank you for freely giving me some of your personal preferences. Go check the page I opened for you!');
//(1) finally, we open a window of a booking website which coincide with the preference of the person.
  window.open("http://www.statravel.com/europe-tours.htm", "PopUp3", "width = 400, height = 400, bottom=250, left = 250", "_blank");
//(4) adding the website to the pool in the array for the end.
  linksArrayEnd.push("http://www.statravel.com/europe-tours.htm");
}
//(1) This function removes the first part of the section to show the second part, which is a text related to the answer the person chose, which is a Boat cruise.
function handleDrop4(event,ui) {
//(1) first we remove the first part
  ui.draggable.remove();
  $(".divDestination").css({
    display: "none"
  });
  $("#zoneCharacter").css({
    display: "none"
  });
//(1) then we show the second part
  $("#sectionEnd").css('display', 'inline-block');
//(1) and we put a text that is related to the choice the person made
  $("#pConclusion").html('A big boat, blue water, and the sun. You do not need more than that! Thank you for freely giving me some of your personal preferences. Go check the page I opened for you!');
//(1) finally, we open a window of a booking website which coincide with the preference of the person.
  window.open("https://www.costcotravel.ca/Cruises", "PopUp4", "width = 400, height = 400, bottom=250, right = 250", "_blank");
  //(4) adding the website to the pool in the array for the end.
  linksArrayEnd.push("https://www.costcotravel.ca/Cruises");
}
});

// (2) Acquiring the position of the user. Calling the function called gotCoordinatesData to analyse the information and give a response to the user
function locationSection() {
        navigator.geolocation.getCurrentPosition(gotCoordinatesData,handleError);
    }


// (2) This function will analyse the information and give a response to the user
function gotCoordinatesData (data) {


  // (2) Put the user's coordinates in a string, separated by a comma
  var coords = data.coords.latitude + ',' + data.coords.longitude;

  // (2) The result type we want is a street address
  var resultType = 'street_address';

  // (2) Construct our querying URL out the base URL and then the extra
  // (2) parameters that make up our query, including the coordinates we're
  // (2) checking, the result type we want, and the API key we're using
  var url = geocodeURL + '?latlng=' + coords + '&result_type=' + resultType + '&key=' + geocodeAPIKey;

  // (2) Use getJSON to request geocoding data from Google
  $.getJSON(url, gotGeocodeData);
};

// (2) gotGeocodeData (data)
// (2) Called by getJSON when Google has responded with geocoding
// (2) data argument contains the geocoding data
function gotGeocodeData (data) {

  // (2) Pull out the user's formatted address (a string)
  var resultsArray = data.results[0].address_components;

 for(var i=0; i < resultsArray.length; i++){
  var types = resultsArray[i].types;
  if(types.indexOf("locality") != -1){
  //(2) get the city
    city = resultsArray[i].long_name;
  }
}
// (2) With the information gathered, it is now possible to use the city of the user and change the text of the #pWhereYouFrom.
 $("#pWhereYouFrom").text("Oh you're from " + city + "! Your life must be exhausted... Why don't you treat yourself a little and go to a nearby spa center? (look at your popup filter if the page is not opening)");
// (2) Opening a window of a Google search with "spa" + the city of the user... To awaken his consumer's spirit!
  window.open("https://www.google.ca/search?q=spa+" + city + "&oq=spa+" + city + "&aqs=chrome..69i57j0l5.1767j0j7&sourceid=chrome&ie=UTF-8",  "PopUp5", "width = 400, height = 400, top = 200, left = 350", "_blank");
  $("#aAfterLocation").css("display", "inline-block");
  //(4) adding the website to the pool in the array for the end.
  linksArrayEnd.push("https://www.google.ca/search?q=spa+" + city + "&oq=spa+" + city + "&aqs=chrome..69i57j0l5.1767j0j7&sourceid=chrome&ie=UTF-8");
}

// (2) handleError()
//
// (2) If there is an error, this code will display an error message by showing the #divError.
function handleError() {
  $('#divError').css({
    display:"inline"
  })
  $('#divWhereFrom').css({
    display:"none"
  })
}






// (3)
var txtResultChanged = false;

// (3) Showing a text message in response to the text written, and also opening some advertising pages depending on what's in the text.
function showAnswerToText() {
  // (3) Get the input text
  var inputText = $('#txtAreaEntry').val();
  // (3) Check if there's something there that is interesting. 
  //(3) If nothing is caught, it will display the default message I put in the html, saying the person is boring.
  //(3) There will also be pop ups opening depending on what the message written is about.

  //(3) building word banks on variables to verify in the next step if something interesting has been found.
  var money = /money|bitcoin|cash|rich|bill|capital|fund|pay|payment|paycheck|salary|wage|wealth|bank|bucks/i;
  var animals = /animal|dog|cat|bird|fish|goat|sheep|pig|chicken|chick|donkey|guinea|duck|buffalo|zebra|lion|tiger|lizard|gecko|goose|lama|owl|rabbit|koi|canary|mice|mouse|rat|fox|hedgehog|guppy|monkey/i;
  var food = /food|eat|taste|chocolate|cream|sugar|sweet|spicy|digest|cook|raw|hungry|hunger|famine|chew|swallow|boil|fry|roast|bake|oven|pot|kitchen|dish|bowl|sauce|fork|breakfast|lunch|meal|dinner|supper|bread|flour|meat|sausage|soup|vegetables|beans|potato|fruit|brunch|olive|oil|salt|honey|milk|cheese|butter|egg/i;
  var videoGames = /game|video|stream|controller|console|pc|computer|nintendo|nes|64|gamecube|wii|switch|esport|e-sport|e sport|playstation|play station|xbox|sega|atari|pong|donkeykong|mario|peach|yoshi|link|zelda|smash|fortnite|battle royale|war|call of duty/i;

//(3) looking if there is something interesting about money.
if(money.test(inputText)){
  //(3) if so, change the text of #pResultTxtEntry to fit the answer.
    $("#pResultTxtEntry").html('So, you are interested about money! That is very clever in our amazing capitalist society. You should check out cryptocurrencies, they are without a doubt the money of the future!');
    //(3)Now, we are changing the variable 'txtResultChanged' to true, so we know the text has been updates. For the next group of words, instead of replacing the text, we are going to add some.
    txtResultChanged = true;
    window.open("https://bitcoin.org/en",  "PopUp6", "width = 400, height = 400, top = 350, left = 350", "_blank");
    //(4) adding the website to the pool in the array for the end.
    linksArrayEnd.push("https://bitcoin.org/en");
}

//(3) looking if there is something interesting about animals.
if(animals.test(inputText)){
  //(3) if the if is true, we will look of the var txtResultChanged is true. if it is, it means there is already some good text in it, so we are going to add text after what is already there. 
  if(txtResultChanged === true){
      $("#pResultTxtEntry").after('<p>Also, you have something for our animal friends. Of course... how can you not love them?! Some of them can even be kept at home. You should look at whats available in your nearest petshop!</p>');
    window.open("https://www.google.ca/search?q=pet+shop+nearby&spell=1&sa=X&ved=0ahUKEwjh2aPdt7DaAhUumeAKHdNUALwQBQglKAA&biw=1244&bih=622",  "PopUp7", "width = 400, height = 400, top = 150, left = 1150", "_blank");
    //(4) adding the website to the pool in the array for the end.
    linksArrayEnd.push("https://www.google.ca/search?q=pet+shop+nearby&spell=1&sa=X&ved=0ahUKEwjh2aPdt7DaAhUumeAKHdNUALwQBQglKAA&biw=1244&bih=622");
    }
  //(3) if the variable is not true, it means there is no text yet in the #pResultTxtEntry, so we are going to replace it by our good answer (because we found a good match, meaning there is something interesting that we want to point out to the user).
    else{ 
      $("#pResultTxtEntry").html('Animals can be so adorable! some of them can even be kept at home. You should look at whats available in your nearest petshop!');
      txtResultChanged = true;
      window.open("https://www.google.ca/search?q=pet+shop+nearby&spell=1&sa=X&ved=0ahUKEwjh2aPdt7DaAhUumeAKHdNUALwQBQglKAA&biw=1244&bih=622",  "PopUp8", "width = 400, height = 400, top = 150, left = 1150", "_blank");
      //(4) adding the website to the pool in the array for the end.
      linksArrayEnd.push("https://www.google.ca/search?q=pet+shop+nearby&spell=1&sa=X&ved=0ahUKEwjh2aPdt7DaAhUumeAKHdNUALwQBQglKAA&biw=1244&bih=622");
    }
}

//(3) looking if there is something interesting about food. The code is well explained in the first examples above (the ones about money and animals)
if(food.test(inputText)){
  if(txtResultChanged === true){
      $("#pResultTxtEntry").after('<p>Food is also important for you. It is a honorable thing to be a (food) consumer in our present world. But nobody have time to cook, and it is understandable! Now take your car and go buy a juicy burger!</p>');
      window.open("https://www.ricardocuisine.com/en",  "PopUp9", "width = 400, height = 400, top = 100, left = 50", "_blank");
      //(4) adding the website to the pool in the array for the end.
      linksArrayEnd.push("https://www.ricardocuisine.com/en");
    }
    else{ 
      $("#pResultTxtEntry").html('Animals can be so adorable! some of them can even be kept at home. You should look at whats available in your nearest petshop!');
      txtResultChanged = true;
      window.open("https://www.ricardocuisine.com/en",  "PopUp10", "width = 400, height = 400, top = 100, left = 50", "_blank");
      //(4) adding the website to the pool in the array for the end.
      linksArrayEnd.push("https://www.ricardocuisine.com/en");
    }
}

//(3) looking if there is something interesting about video games. The code is well explained in the first examples above (the ones about money and animals)
if(videoGames.test(inputText)){
  if(txtResultChanged === true){
      $("#pResultTxtEntry").after('<p>And of course, you are a video games lover. Awesome! There are great steam sales at the moment, go check them out!</p>');
      window.open("http://store.steampowered.com/",  "PopUp11",  "width = 400, height = 400, top = 650, left = 850", "_blank");
      //(4) adding the website to the pool in the array for the end.
      linksArrayEnd.push("http://store.steampowered.com/");
    }
    else{ 
      $("#pResultTxtEntry").html('You are a video games lover. Awesome! There are great steam sales at the moment, go check them out!');
      txtResultChanged = true;
      window.open("http://store.steampowered.com/",  "PopUp12", "width = 400, height = 400, top = 650, left = 850", "_blank");
      //(4) adding the website to the pool in the array for the end.
      linksArrayEnd.push("http://store.steampowered.com/");
    }
}

  if(txtResultChanged === false){
    window.open("https://www.wikihow.com/Be-a-Less-Boring-Person",  "PopUp13", "width = 400, height = 400, top=300, left = 800", "_blank");
    //(4) adding the website to the pool in the array for the end.
    linksArrayEnd.push("https://www.wikihow.com/Be-a-Less-Boring-Person");
  }

}



//(4) This is the bit of code that seals the deal. When the user arrives to the last page,
//(4) He will get spammed immediately by pages that he could have been interested to,
//(4) if he had been introduced to them in a more subtle way. My goal is not to sell stuff,
//(4) I rather want to make the user realize (if it is not already understood) that everything
//(4) done on a computer online can be used by the person/company that own the medium you use
//(4) to "have fun" to make money on your back, or even to gather information about yourself,
//(4) so they can create a profile and sell the informations about you to other companies/persons.

function destroyingTheUser() {
  //(4) It starts by making a loop that goes through every page kept in the array we made at the begining so we are assured that
  //(4) the user will at least see every page at the begining. The loop is going through every element of the array,
  //(4) which are website links that coincide with the user preferences that he got while navigating through the website.
for(var i=0; i < linksArrayEnd.length; i++){
//(4) here we are generating two random numbers that will be expressing an horizontal and vertical points within the page.
  var randomNumberXLoop = 1 + Math.floor(Math.random() * ($(window).width()));
  var randomNumberYLoop = 1 + Math.floor(Math.random() * ($(window).height()));
//(4) for each element in the array, a popup will appear with the link the element contains.
  window.open(linksArrayEnd[i], "finalPopUpLoop"+i, "width = 400, height = 400, top=" + randomNumberYLoop + ", left = " + randomNumberXLoop, "_blank");
}
//(4) Here we set a timeout of 8 seconds so the user has time to read what is on the last page.
//(4) and then spam her with pages of what could have interested her.
setTimeout( function(){ 
//(4) after the for loop is done, a popup will appear every 100ms (0.1s).
setInterval(function destroyingTheUser() {
  //(4) it start by getting a random number within the array length to be able to take one random link in that array.
  var randomNumberElement = Math.floor(Math.random() * linksArrayEnd.length);
//(4) again, we go get a random position for the window.
  var randomNumberX = 1 + Math.floor(Math.random() * ($(window).width()));
  var randomNumberY = 1 + Math.floor(Math.random() * ($(window).height()));
//(4) then, we create the popup, which will have the link of the element contained in the array that coincide with our random element generated.
//(4) it will be infinitely running until the user closes the page of this website.
  window.open(linksArrayEnd[randomNumberElement], "finalPopUp" + numberEndPage, "width = 400, height = 400, top=" + randomNumberY + ", left = " + randomNumberX , "_blank");
  numberEndPage++;
  },50)
  }  , 8000 );
}



