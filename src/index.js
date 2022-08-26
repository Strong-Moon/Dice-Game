var random_Number_1 = Math.floor(Math.random() * 6) + 1; // Returns a random integer from 1 to 6
var random_Image_Path_1 = "/images/dice" + random_Number_1 + ".png"

var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src",random_Image_Path_1);
//document.querySelectorAll("img")[0].setAttribute("src",random_Image_Path_1);
// or you can use it like above
var random_Number_2 = Math.floor(Math.random() * 6) + 1; // Returns a random integer from 1 to 6
var random_Image_Path_2 = "/images/dice" + random_Number_2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src",random_Image_Path_2);


if(random_Number_1 > random_Number_2){
    document.querySelector("h1").innerHTML = "Player 1 Won!!!";
}
else if (random_Number_2 > random_Number_1) {
    document.querySelector("h1").innerHTML = "Player 2 Won!!!";
}
else {
    document.querySelector("h1").innerHTML = "Draw!";
  }
