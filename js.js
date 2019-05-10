// let myIndex = 0;
// carousel();

// function carousel() {
//   let i;
//   let x = document.getElementsByClassName("slide");
//   for (i = 0; i < x.length; i++) {
//   	x[i].className = 'slide';
//     x[i].style.display = "none";  
//   }
//   myIndex++;
//   if (myIndex > x.length) {myIndex = 1}   
//   x[myIndex-1].className = 'slide  showing'; 
//   x[myIndex-1].style.display = "block";  
//   setTimeout(carousel, 3000); // Change image every 3 seconds
// }


/* Индекс слайда по умолчанию */
let slideIndex = 1;
showSlides(slideIndex);

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlide() {
    showSlides(slideIndex += 1);
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlide() {
    showSlides(slideIndex -= 1);  
}

/* Устанавливает текущий слайд */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/* Основная функция слайдера */
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("item");
    let dots = document.getElementsByClassName("slider-dots_item");
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}


// $(function() {
// var slide = $('.slide'),
// sldrContent = slide.html(),
// slideWidth = $('.sl_ctr').outerWidth(),
// slideCount = $('.slide img').length,
// prv_b = $('.prv_b'),
// nxt_b = $('.nxt_b'),
// sldrInterval = 3300,
// animateTime = 1000,
// course = 1,
// margin = - slideWidth;
// $('.slide img:last').clone().prependTo('.slide');$('.slide img').eq(1).clone().appendTo('.sldr');$('.sldr').css('margin-left',-slideWidth);function nxt_bSlide(){interval=window.setInterval(animate,sldrInterval)}function animate(){if(margin==-slideCount*slideWidth-slideWidth){sldr.css({'marginLeft':-slideWidth});margin=-slideWidth*2}else if(margin==0&&course==-1){sldr.css({'marginLeft':-slideWidth*slideCount});margin=-slideWidth*slideCount+slideWidth}else{margin=margin-slideWidth*(course)}sldr.animate({'marginLeft':margin},animateTime)}function sldrStop(){window.clearInterval(interval)}prv_b.click(function(){if(sldr.is(':animated')){return false}var course2=course;course=-1;animate();course=course2});nxt_b.click(function(){if(sldr.is(':animated')){return false}var course2=course;course=1;animate();course=course2});sldr.add(nxt_b).add(prv_b).hover(function(){sldrStop()},nxt_bSlide);nxt_bSlide()});

