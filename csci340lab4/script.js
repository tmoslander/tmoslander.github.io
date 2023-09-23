$(document).ready(function() {
    $('#clicker1').click(function() {
        console.log("Cat button!");
        $.ajax({
            dataType: "json",
            url: "https://cataas.com/cat?json=true",
            success: function(results) {
                console.log(results);
                if (results["url"].endsWith(".mp4")) {
                    $('#cat').attr("src", "images/blank.png");
                } else {
                    $('#cat').attr("src", "https://cataas.com/" + results["url"]);
                }
            },
            error: function(xhr,status,error) {
                console.log(error);
            }
        })
    });
    $.ajax({
        dataType: "json",
        url: "https://api.pokemontcg.io/v2/cards",
        success: function(results) {
            console.log(results);
            cards = results;
            rand_num1 = Math.round(Math.random() * 250)
            $('#card').attr("src", results["data"][rand_num1]["images"]["large"]);
        },
        error: function(xhr,status,error) {
            console.log(error);
        }
    });
    $('#clicker2').click(function() {
        console.log("Card button!");
        rand_num2 = Math.round(Math.random() * 250)
        $('#card').attr("src", cards["data"][rand_num2]["images"]["large"]);
    });
});