$(document).ready(function() {
  $('.push').on('click', function(){
    $('.map-frame').fadeToggle();
  });



var tabs = document.querySelectorAll('.point-list .point-item a');
var contents = document.querySelectorAll('.content-item');

function changeTab(event) {
  event.preventDefault()
  for (var i=0; i<tabs.length; i++){
    tabs[i].parentNode.classList.remove('active-tab');
  }
  event.target.parentNode.classList.add('active-tab');
  for (var i=0; i<contents.length; i++) {
    contents[i].classList.remove('active');
  }
  var link = event.target.getAttribute('href');
  document.querySelector(link).classList.add('active');

}


for (var i=0; i<tabs.length; i++){
  tabs[i].addEventListener('click', changeTab);
}

});