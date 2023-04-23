var blah = document.body.querySelectorAll('.like_click');



for (var x = 0; x < blah.length; x++) {

    blah[x].addEventListener("click", function (event) {

        event.preventDefault();

    });

}



$('body').on('click', '.like_click', function (event) {

    event.preventDefault();

    $id = $(this).parent().parent().parent().attr('id')

    $.ajax({

        type: 'POST',

        url: window.location.origin + '/scripts/like.php',

        data: JSON.stringify({'id':$id}),

        dataType: 'json',

        contentType: false,

        cache: false,

        processData: false,

        success: function (data) {

            if(data.success == '1'){

                // $(event.currentTarget).attr("src", window.location.origin + "/ico/heart/enabled.gif");

                $(event.currentTarget).attr("src", window.location.origin + "/ico/heart/heart_enabled2.png");
                // $(event.currentTarget).css('width', '160px');

                $(event.currentTarget).css('width', '90%');

                // setTimeout(function (){

                //     $(event.currentTarget).attr("src", window.location.origin + "/ico/heart/heart_enabled.png");

                //     $(event.currentTarget).css('width', '90%');

                // }, 1000);

            }

            else{

                $(event.currentTarget).attr("src", window.location.origin + "/ico/heart/heart_disabled2.png");

                // $(event.currentTarget).css('width', '100%');

            }

        }

    });

});