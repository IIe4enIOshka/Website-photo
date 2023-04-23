function getReview() {
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('nameDist');
    $.ajax({
        type: 'POST',
        url: window.location.origin + '/scripts/fetch_image.php',
        data: JSON.stringify({'nameDist':myParam}),
        // dataType: 'json',
        contentType: false,
        cache: false,
        processData: false, 
        success: function (data) {
            var jsonData = JSON.parse(data);
            for(var index = 0; index < jsonData.length; index++)
            {
                $('.NameDist').text(jsonData[index].nameDist);
                var $string;
                if(jsonData[index].checking == 0){
                    $string = '<div class="image"><img class="like_click" src="' + window.location.origin + '/ico/heart/heart_disabled2.png" alt=""></div>';
                }
                else{
                    $string = '<div class="image"><img class="like_click" src="' + window.location.origin + '/ico/heart/heart_enabled2.png" alt=""></div>';
                }
                var grid = document.querySelector('#grid');
                var item = $('<div id="' + jsonData[index].id + '" class="item"><a class="ssilka" href="' + jsonData[index].imagepath + jsonData[index].nameDist + '/' + jsonData[index].imagename +'">'+
                    '<img class="img" src="' + jsonData[index].imagepath + jsonData[index].nameDist + '/width300/' + jsonData[index].imagename +'"  alt="' + jsonData[index].imagename +'">'+
                    '</a><div class="row like"><div class="col-10">'+
                    '<p>' + jsonData[index].imagename + '</p></div><div class="col-2"'+
                    $string +
                    '</div>'+
                    '</div>');
                salvattore.appendElements(grid, item);
            }
            startGallery();
        }
    });
    // console.log("ready");
    // var blah = document.body.querySelectorAll('.ssilka');
    // for (var x = 0; x < blah.length; x++) {
    //     console.log(x);
    //     blah[x].addEventListener("click", function (event) {
    //         event.preventDefault();

    //     });
    // }
}