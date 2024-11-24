// 图片轮播
var slideIndex = 0; // 索引通常从0开始，这样更容易处理数组
showSlides(slideIndex); // 初始显示第一张图片

function plusSlides(n) {
    slideIndex = (slideIndex + n) % document.getElementsByClassName("photo-item").length; // 确保索引在有效范围内
    showSlides(slideIndex); // 然后显示对应的图片
}

function showSlides(n) {
    var slides = document.getElementsByClassName("photo-item");
    // 先移除所有图片的 active 类
    for (var i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active');
    }
    // 为当前索引对应的图片添加 active 类
    slides[n].classList.add('active');
}

// 自动切换图片，每5秒切换一次
setInterval(function() {
    plusSlides(1); // 每5秒调用plusSlides函数，参数为1表示切换到下一张图片
}, 5000); // 5000毫秒等于5秒