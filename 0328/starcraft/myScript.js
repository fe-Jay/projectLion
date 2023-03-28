'use strict';


let hp = 3;
// #drone을 클릭하면 #spit이 left +220좌표로 움직이며 fadeIn.
$('#drone').click(function() {
  $('#spit').fadeIn();
  $('#spit').animate({
    left: '+=220'
  })

  // hp 숫자를 1개 감소시키고 fadeOut.
  $('#spit').fadeOut(function() {
    hp = hp - 1;
    $('#hp').text('HP : ' + hp);
    // hp가 0이 되면 #bunker fadeout
    if (hp == 0) {
      $('#bunker').fadeOut();
    }
  });
  // #spit 원 위치로 되돌리기.
  $('#spit').css({ left: '20px' })

});
