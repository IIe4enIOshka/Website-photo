//Загрузка

$(document).ready(function () {

    get();

    function get() {

        $.ajax({

            url: window.location.origin + '/scripts/getDist.php',

            success: function (data) {

                var jsonData = JSON.parse(data);

                var i = 0;

                var string = '';


                for(var index = 0; index < jsonData.length; index++, i++)

                {

                    if(i == 9)

                        i = 0;

                    if(i == 0)

                        string += '<div class="row"><div class="col-sm-2"></div>';

                    string +=

                    '<div class="col-sm-1">'+

                    '<a href="' + window.location.origin + '/index.html?nameDist=' + jsonData[index].nameDist + '">'+

                    '<img src="' + window.location.origin + '/ico/folder.png" alt="">'+

                    '</a>'+

                    '<p>'+jsonData[index].nameDist+'</p>'+

                    '</div>';

                    if(index == jsonData.length - 1 || i == 8)

                        string += '</div>';  

                }

                $('.folder').append(string);

            }

        });

    }

});