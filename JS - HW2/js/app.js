// Task 1

// Display the current date
function todayDate(){
    var dateVar;
    // current date
    dateVar = new Date();
    // alert with todays date will appear with button is clicked
    alert(dateVar);
    // prints the date 
    document.getElementById("today").innerHTML = dateVar
    // console log date 
    console.log(dateVar);
    // convert dates to UTC
    alert(dateVar.toUTCString())
}
// Use the set date method to display the day of your birth
function birthDate(){
    const varDate = new Date();
    varDate.setFullYear(2000, 1, 8);
    // alert with birth date will appear with button is clicked
    alert(varDate);
    // prints the date 
    document.getElementById("birth").innerHTML = varDate;
    // console log date 
    console.log(varDate);
    // convert dates to UTC
    alert(varDate.toUTCString())
}

// Task 2

function bkgColour(){
    // create a prompt that asks for a colour considering casing
    var colour = prompt("Please give a colour to set the background: ").toLowerCase();

    // use the colour to set the background of the webpage i.e. target the body tag
    document.body.style.backgroundColor = colour;
}

// Task 3

// create a site with 3 images in clickable cards

// once clicked something happens i.e. images changes, information appear under the image

function imgChange(value){
    // change image on click
    document.getElementById("img").src = "https://images.unsplash.com/photo-1609675764298-dfa140691a62?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1094&q=80";
    
    // click image for text to appear
    const div = document.getElementById("div")
    var text = "";

    if (value == 1) text += "Blue and Red Painting";

    div.innerHTML = text;

    const div1 = document.getElementById("div1")
    var text = "";

    if (value == 2) text += "Pink and Grey Painting";

    div1.innerHTML = text;
}