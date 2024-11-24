// 图片轮播
var slideIndex = 0; // 索引通常从0开始，这样更容易处理数组
showSlides(slideIndex); // 初始显示第一张图片
function plusSlides(n) {
    slideIndex = (slideIndex + n) % document.getElementsByClassName("carousel-item").length; // 确保索引在有效范围内
    showSlides(slideIndex); // 然后显示对应的图片
}
function showSlides(n) {
    var slides = document.getElementsByClassName("carousel-item");
    // 先移除所有图片的 active 类
    for (var i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active');
    }
    // 为当前索引对应的图片添加 active 类
    slides[n].classList.add('active');
}
// 自动切换图片，每5秒切换一次
setInterval(() => {
    plusSlides(1); // 递增索引并显示对应的图片
}, 5000);

document.getElementById('loadMore').addEventListener('click', function() {
    // 假设您有一个可以获取新闻数据的API端点
    var apiUrl = 'https://example.com/api/news';

    fetch(apiUrl)
        .then(response => response.json()) // 解析响应为JSON
        .then(data => {
            var newsList = document.getElementById('newsList');
            data.forEach(newsItem => { // 假设返回的数据是一个新闻对象的数组
                var listItem = document.createElement('li');
                listItem.textContent = `${newsItem.title} - ${newsItem.description}`;
                newsList.appendChild(listItem);
            });
        })
        .catch(error => console.error('Error:', error)); // 捕获并处理任何错误
});

// 对于表单提交处理，您可能需要为特定的表单添加监听器
// 并阻止默认的表单提交行为，然后发送AJAX请求
// 例如：
document.querySelector('#jobsForm').addEventListener('submit', function(event) {
    event.preventDefault(); // 阻止默认的表单提交行为

    // 在这里发送AJAX请求到服务器处理表单数据
    // ...

    // 假设我们只是想在控制台打印一条消息表示表单已提交
    console.log('表单已提交！');
});
