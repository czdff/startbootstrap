window.onload = function() {
    /*document.body.onmouseover = document.body.onmouseout = handler;

    function handler(event) {

        if (event.type == 'mouseover') {
            event.target.style.background = 'pink'
        }
        if (event.type == 'mouseout') {
            event.target.style.background = '';
        }
    }*/

    tinymce.init(
        {
            selector: 'div.editable',
            mode: 'textarea',
            inline: true,
            plugins: [
                'advlist autolink lists link image charmap print preview anchor',
                'searchreplace visualblocks code fullscreen',
                'insertdatetime media table contextmenu paste'
            ],
            toolbar: 'insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image',
            setup: function (editor) {
                editor.on('change', function (e) {
                    var elem_id = $('.editable.mce-edit-focus').attr('id');
                    var data_content = $('#' + elem_id).html();
                    save_content(elem_id, data_content);
                });
            }
        });

    function save_content(id, data) {

        $('#' + id).animate({opacity: 0.25}, 500, function () {
        });

        $.post('/getData.php', 'func=save_element&data=' + data, function (datain) {
            $('#' + id).animate({opacity: 1}, 500, function () {
            });
        });
    }
}