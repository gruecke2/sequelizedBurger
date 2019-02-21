
$(function(){
    $(".devourBtn").on("click", function(event){
        var id = $(this).data("id");
        var devour = $(this).data("devoured");

        var devourState = {
            devoured: devour
        };

        //Ajax PUT request
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: devourState
        }).then(
            function(){
                console.log("burger devoured: ", devour);
                location.reload();
            }
        );

    });

    $(".create-form").on("submit", function(event){
        event.preventDefault();

        var newBurger = {
            burger_name: $("#bName").val().trim(),
            devoured: 0
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function(){
            console.log("added new burger");
            location.reload();
        });
    });

});