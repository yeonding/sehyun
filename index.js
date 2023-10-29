document.addEventListener("DOMContentLoaded", function () {

    let slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    function showSlide(n) {
        slides[currentSlide].classList.remove('active');
        currentSlide = (n + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
    }

    function scrollHandler(e) {
        if (e.deltaY > 0) {
            showSlide(currentSlide + 1);
        } else {
            showSlide(currentSlide - 1);
        }
    }

    // 스크롤 이벤트 추가
    window.addEventListener('wheel', scrollHandler);

});