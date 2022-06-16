$('.slider').slick({
    arrows: false,
    dots: true,
  });

  /*var pageHeight = window.innerHeight;
  var isAnimating = false;
  document.body.style.transform = 'translate3d(0px,0px,0px)';
  
  document.addEventListener('scroll', function(e){
    document.body.scrollTop = 0;
  });
  document.addEventListener('wheel', wheelListener);
  
  function wheelListener(e) {
    if(e.deltaY > 0) {
      scrollPage(-pageHeight);
    } else {
      scrollPage(+pageHeight);
    }
  }
  
  function scrollPage(scrollSize) {
    if(isAnimating){
      return;
    }
    isAnimating = true;
    var yPos = getNewYPos(scrollSize);
    document.body.style.transform = 'translate3d(0px,'+ yPos + ',0px)';
  }
  
  function getNewYPos(add){
    var oldYPos = document.body.style.transform.split(',')[1];
    oldYPos = parseInt(oldYPos.replace(/px/,''));
    var newYPos = oldYPos + add;
    if(newYPos > 0){
      isAnimating = false;
    }
    return Math.min(0, newYPos) + 'px';
  }
  
  
  document.body.addEventListener('transitionend', function(){
    setTimeout(function(){ isAnimating = false; }, 500);
    document.addEventListener('wheel', wheelListener);
  })*/
  
  // Define range of divs
var currentDiv = 1;
var minDiv;
var maxDiv;
var extraPixel = 0;

var divs = document.querySelectorAll('div[id^="e"]');
for (var i = 0; i < divs.length; i++) {
  var id = parseInt(divs[i].id.slice(1), 10);
  // Check min div
  if (!minDiv) minDiv = id;
  if (minDiv > id) minDiv = id;
  // Check max div
  if (!maxDiv) maxDiv = id;
  if (maxDiv < id) maxDiv = id;
}


// Cancel default scroll.
document.addEventListener('scoll', function(e) {
  e.preventDefault();
});

// Use wheel event to simulate scroll.
document.addEventListener('wheel', function(e) {
   e.preventDefault();

   // Current scroll.
  var currScroll = document.body.scrollTop;
  
  // Decide next element.
  if (e.wheelDelta < 0) { // scroll up
    currentDiv--;
    if (currentDiv < minDiv) currentDiv = minDiv;
  } else if (e.wheelDelta > 0) { // scroll down
    currentDiv++;
    if (currentDiv > maxDiv) currentDiv = maxDiv;
  }

  console.log(currentDiv);

  // Check if there's a next/previous div.
  var goToDiv = document.querySelector('#e' + currentDiv);
  if (goToDiv) {
    var newScroll = goToDiv.offsetTop;
  }
  
  document.body.scrollTop = newScroll;
});