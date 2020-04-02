let mobileMenu = document.querySelector('.mobile_menu'),
    lines = document.querySelectorAll('.lines'),
    mobileUl = document.querySelector('.main_menu');
console.log(mobileUl);

mobileMenu.addEventListener('click', function() {
    mobileUl.classList.toggle('active');
    lines.forEach(item => {
            item.classList.toggle('line_active');
            // mobileMenu.classList.toggle('mobile_menu_active');
    });
});
lines.forEach(item => {
    item.addEventListener('click', () => {
        lines.classList.toggle('line_active');
        // mobileMenu.classList.toggle('mobile_menu_active');
    })
})

$(document).ready(function(){
    $('.slider_wrapper').slick({
        dots: false,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="../logo/arrow_left.png"/></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../logo/arrow_right.png"/></button>',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    dots: true,
                    arrows: false
                }
            }
        ]
    });
  });
      