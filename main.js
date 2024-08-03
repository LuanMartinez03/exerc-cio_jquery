$(document).ready(function () {

    $('#tarefaBnt').on('click', function () {
        var novaTarefa = $('#tareafaInput').val();

        if (novaTarefa.length > 0) addTarefa(novaTarefa)     
    })

    function addTarefa(text) {
        $('#tarefaLista').append('<li>' + text + '</li>');
    }

    $(document).on('click', 'li', function() {
        $(this).toggleClass('completed');
    });

})