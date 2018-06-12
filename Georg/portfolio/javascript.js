//$() === document.querySelectors()
$(document).ready(function() {
  const content = $('template')[0].innerHTML;
  $('#modalCalc')[0].innerHTML = content;
  $('#modalTicTacToe')[0].innerHTML = content;

  $('#portfolio .row .col a').click(function () {
    let dataTarget = $(this).attr('data-target');
    console.log(dataTarget);

    let modal = $('.modal .fade');
    modal.attr('id', dataTarget);
    console.log(modal);


  });
});
