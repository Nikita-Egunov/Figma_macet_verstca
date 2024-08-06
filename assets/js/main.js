document.addEventListener('DOMContentLoaded', function() {
    var mainButtons = document.querySelectorAll('.mainButton');

    mainButtons.forEach(function(mainButton) {
        mainButton.addEventListener('click', function() {
            var subButtons = mainButton.nextElementSibling;
            if (subButtons.classList.contains('hidden')) {
                subButtons.classList.remove('hidden');
            } else {
                subButtons.classList.add('hidden');
            }
        });
    });
});

var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });



    var swiper = new Swiper(".tariff1__Swiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        },
    });

    var swiper = new Swiper(".tariff2__Swiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            },
        });