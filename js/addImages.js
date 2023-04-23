/*добавление*/
$('#form').submit(function (event) {
    event.preventDefault();
    var progressBar = $('#progressbar');
    var formData = new FormData();
    $.each($("#js-file")[0].files,function(key, input){
        formData.append('file[]', input);
    });
    formData.append('nameDist', $('#nameDist').val());
    $.ajax({
        type: $(this).attr('method'),
        url: $(this).attr('action'),
        data: formData,
        dataType: 'json',
        contentType: false,
        cache: false,
        processData: false,
        xhr: function(){
            var xhr = $.ajaxSettings.xhr();
            xhr.upload.addEventListener('progress', function(evt){
                if(evt.lengthComputable) {
                    var percentComplete = Math.ceil(evt.loaded / evt.total * 100);
                    progressBar.val(percentComplete).text('Загружено ' + percentComplete + '%');
                }
            }, false);
            return xhr;
        },
        success: function (data) {
            console.log(JSON.stringify(data));
            var arr = data;
            $.each(arr, function (index) {
                console.log(data[index]);
            });
            getReview();
            this.form.reset();
        }
    });
});