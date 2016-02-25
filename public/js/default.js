function dropdown() {
  var menu = document.getElementById('dropdown');
  menu.addEventListener('click', function() {
    var buttons = document.getElementById('dropdown-menu');
    buttons.style.display = 'block';
  }, false);
}

function hideContent(){
   var content = document.getElementById('dropdown-menu');    
   content.style.display = 'none';
}

hideContent()
dropdown()