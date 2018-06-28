

//Pseudo coding

//game with 4 crystals and random result 
//every crystal needs to have a randson number 1-12
//a new random number should be generated with the crystals every win or loss 
//to each 4 crystals 
//when clicking any crystal  it should add with the previous numbers 
//until it hits the goal number or over it 
//If it isnt equal then start over, if it is then we increment a win counter

var random_result;
var lost = 0;
var win = 0;
var previous = 0;

var resetAndStartGame = function() {

    $(".crystals").empty(); //empty the crystals

    var images = ["https://www.rd.com/wp-content/uploads/2017/08/02_crystal_Reasons-Why-You-Should-Give-Crystals-a-Try_364248173_Abra-Cadabraaa-380x254.jpg",
                "https://www.rd.com/wp-content/uploads/2017/08/03_crystal_Reasons-Why-You-Should-Give-Crystals-a-Try_364248173_Abra-Cadabraaa-380x254.jpg",
                "https://www.rd.com/wp-content/uploads/2017/08/04_crystal_Reasons-Why-You-Should-Give-Crystals-a-Try_364248173_Abra-Cadabraaa-380x254.jpg",
                "https://www.rd.com/wp-content/uploads/2017/08/05_crystal_Reasons-Why-You-Should-Give-Crystals-a-Try_364248173_Abra-Cadabraaa-380x254.jpg"];

    random_result = Math.floor(Math.random() * 69 ) + 30; //generating random number
    

    $("#result").html("Random Result: " + random_result); //loop and creating random number with 4loop

    for (var i = 0; i < 4; i++){


    var random = Math.floor(Math.random() * 11) + 1; //random number for every crystal
        
    

        var crystal = $("<div>");
            crystal.attr({
                "class": "crystal",
                "data-random": random,


            });

            crystal.css({
                "background-image":"url('" + (images[i]) + "')",
                "background-size":"cover"

            })

            
        
        $(".crystals").append(crystal);
        
    }

    $("#previous").html("Total Score: " + previous); //shows teh current count
}

$("#previous").html(previous); //shows the current count

resetAndStartGame();

//event delegation?
$(document).on("click", ".crystal", function() {

    var number = parseInt($(this).attr("data-random"));

    previous += number;

    $("#previous").html("Total Score: " + previous);

    console.log(previous);

    if(previous > random_result){

        
        lost++;

        $("#lost").html("Losses: " + lost);

        previous = 0;

        $("#previous").html(previous);
        

        resetAndStartGame();
    }
    else if(previous === random_result){

        win++

        $("#win").html("Wins: " + win);
        
        previous = 0;

        resetAndStartGame();
    }
});



