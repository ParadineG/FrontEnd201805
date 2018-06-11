$(document).ready(function() {
  $('#portfolio .row .col a').click(function () {
    let dataTarget = $(this).attr('data-target');
    console.log(dataTarget);

    let modal = $('.modal .fade');
    modal.attr('id', dataTarget);
    console.log(modal.attr('id'));
  });
});
