function showQRCode(type) {
    // 假设有一个函数可以获取二维码的URL，这里只是模拟
    function getQRCodeURL(type) {
        // 这里应该是一个异步请求到后端API获取二维码URL的逻辑
        // 这里只是简单返回一个模拟的URL
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (type === 'qq') {
                    resolve('https://example.com/qq-qrcode.png');
                } else if (type === 'wechat') {
                    resolve('https://example.com/wechat-qrcode.png');
                } else if (type === 'scan') {
                    resolve('https://example.com/scan-qrcode.png');
                } else {
                    reject('Invalid type');
                }
            }, 1000); // 模拟异步请求延迟
        });
    }

    // 显示二维码的逻辑
    getQRCodeURL(type)
        .then(url => {
            // 更新二维码图片的src属性并显示容器
            document.getElementById('qrcode-img').src = url;
            document.getElementById('qrcode-container').style.display = 'block';
        })
        .catch(error => {
            console.error('Error fetching QR code:', error);
        });
}