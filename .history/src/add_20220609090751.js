// function to add two numbers
function add(a, b) {
  return a + b;
}   // end of add  

// function to create carousel
function createCarousel(id, images) {
  var carousel = document.getElementById(id);
  var ul = document.createElement('ul');
  var li = document.createElement('li');
  var img = document.createElement('img');
  var i = 0;
  for (i = 0; i < images.length; i++) {
    var li = document.createElement('li');
    var img = document.createElement('img');
    img.src = images[i];
    li.appendChild(img);
    ul.appendChild(li);
  }
  carousel.appendChild(ul);
  var left = document.createElement('div');
  left.className = 'left';
  left.innerHTML = '<';
  carousel.appendChild(left);
  var right = document.createElement('div');
  right.className = 'right';
  right.innerHTML = '>';
  carousel.appendChild(right);
  var index = 0;
  var interval = setInterval(function() {
    if (index == images.length) {
      index = 0;
    }
    var li = document.getElementsByTagName('li');
    for (i = 0; i < li.length; i++) {
      li[i].className = '';
    }
    li[index].className = 'active';
    index++;
  } , 2000);  }
