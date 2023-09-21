$(document).ready(function() {
    $('clicker1').click(function() {
        $.ajax({
            dataType: "json",
            url: "https://cataas.com/cat?json=true",
            success: function(results) {
                console.log(results["url"]);
                if (results["url"].endsWith(".mp4")) {
                    $('#cat').attr("src", "images/blank.png");
                } else {
                    $('#cat').attr("src", results["url"]);
                }
            },
            error: function(xhr,status,error) {
                console.log(error);
            }
        })
    });
    $('clicker2').click(function() {

        $.ajax({
            dataType: "json",
            url: "https://api.pokemontcg.io/v2/cards",
            success: function(results) {
                console.log(results["url"]);
                if (results["url"].endsWith(".mp4")) {
                    $('#card').attr("src", "images/blank.png");
                } else {
                    $('#card').attr("src", results["url"]);
                }
            },
            error: function(xhr,status,error) {
                console.log(error);
            }
        })
    });
});