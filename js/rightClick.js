var $id_last = 0;
var $id = 0;
var X;
var Y;

var currentObject;

$(document).mousemove(function(e){
        X = e.pageX; // положения по оси X
        Y = e.pageY; // положения по оси Y
    });

$('body').on('contextmenu', '.item', function (event) {
    event.preventDefault();

    currentObject = this;

    if(this.id != $id_last)
        clear();

    if($("#window").is(":hidden")){
        $('#window').css({
            top: Y,
            left: X
        });
        $("#window").show("slow");
        $(this).toggleClass('windowOpen');
    }
    else{
        $("#window").hide("fast");
        $(this).removeClass('windowOpen');
    }

    $id = this.id;
    $id_last = $id;
});

$(document).mouseup(function (e){
    var div = $('#window');
    if (!div.is(e.target) && div.has(e.target).length === 0) {
        div.hide();
        clear();
    }
});