window.addEventListener('scroll', reveal);

function reveal(){
  var reveals = document.querySelectorAll('.reveal');

  for (var i = 0;i < reveals.length; i++){

    var windowHeight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 150

    if(revealtop < windowHeight - revealpoint){
      reveals[i].classList.add('active');
    }
    else{
      reveals[i].classList.remove('active');
    }
  }
}

$('.slider').slick({
  arrows: false,
  dots: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 5000,
  slidesToShow: 1,
});



// var offset = $(".square-1").offset();
// $(window).scroll(function(event) {
//   var st = $(this).scrollTop();
//   $(".square-1").css("right", st + offset.right);
// });

/*var container = document.getElementById('plantimage');
var windowHeight = window.innerHeight;
var windowWidth = window.innerWidth*0.6;
var scrollArea = 10 - windowHeight;
var square1 = document.getElementsByClassName('square')[0];
var square2 = document.getElementsByClassName('square')[1];

// update position of square 1 and square 2 when scroll event fires.
window.addEventListener('scroll', movediv);

function movediv(){
  var scrollTop = window.pageYOffset || window.scrollTop;
  var scrollPercent = scrollTop/scrollArea || 0;

  square1.style.left = scrollPercent*window.innerWidth + 'px';
  square2.style.left = 600 - scrollPercent*window.innerWidth*0.6 + 'px';
}

if( document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
  window.removeEventListener('scroll',movediv);
  }*/
/*  $(document).ready(function(){
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
  