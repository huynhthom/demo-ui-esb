$(document).ready(function () {
    $('.js-example-basic-multiple').select2();
});

function checkDeleteService(obj) {
    $('#deleteService').modal('show');
}

function chellAllService(className) {
    let inputEl = document.getElementsByClassName(className)

    for (let i = 0; i < inputEl.length; i++) {
        inputEl[i].checked = true
    }
}
