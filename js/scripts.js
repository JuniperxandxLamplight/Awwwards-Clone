function randomNumber(){

  return num;
}

function createCard() {
  var num = Math.floor((Math.random() * 8) + 1);
  var html = '<div class="site-card">' +
    '<div class="site-image">' +
      '<img src="imgs/0' + num + '.png" alt="">' +
    '</div>' +
    '<div class="site-info">' +
      '<h3>BASIC MOVES.</h3>' +
      '<div class="creation-stats">' +
        '<p>From United States</p>' +
        '<p>February 13, 2019</p>' +
      '</div>' +
    '</div>' +
    '<div class="site-footer">' +
      '<div class="user-info">' +
        '<img src="imgs/user-image.jpeg" alt="user-image">' +
        '<p>BY <strong>BASIC</strong></p>' +
      '</div>' +
  '<div class="tags">' +
        '<div>HM</div>' +
        '<div>MW</div>' +
        '<div>DEV</div>' +
        '<div>SOTD</div>' +
      '</div>' +
    '</div>' +
  '</div>';
  return html;
}
$(function(){

  for(var i = 1; i < 12; i++) {
    $("main").append(createCard());
  }


});
