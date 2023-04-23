$('#delete').click(function (event) {
    $.ajax({
        type: 'POST',
        url: window.location.origin + '/scripts/delete.php',
        data: JSON.stringify({'id':$id}),
        dataType: 'json',
        contentType: false,
        cache: false,
        processData: false,
        success: function (data) {
            $("#"+$id).remove();
            $("#window").hide("fast");
        }
    });
});