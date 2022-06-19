$('.slider').slick({
    slidesToshow: 4,
    arrows: false,
    dots: true,
  });

  $(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 20) {
          $(".navbar").css("display" , "flex");
        }

        else{
            $(".navbar").css("display" , "none");
        }
    })
  })

  var btn = document.getElementById('btnX');
btn.addEventListener("click", function(){
  document.getElementById('obox').classList.toggle("open-box");
});

function toggleCLass() {
   var myBoxClasses = document.getElementsByClassName('obox').classList;
   if (myBoxClasses.contains("box-scale")) {
       myBoxClasses.remove("box-scale");
   } else {
       myBoxClasses.add("box-scale");
   }
}

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
  