

$(document).ready( function () {
    $('#tabela').DataTable();
} );

var table = new DataTable('#tabela', {
    language: {
        url: '//cdn.datatables.net/plug-ins/2.2.2/i18n/pt-BR.json',
    },
});