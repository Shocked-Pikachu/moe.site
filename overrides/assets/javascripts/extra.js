// 监听窗口大小变化
window.addEventListener('resize', function() {
    adjustImagePosition();
});

// 页面加载时也调整图片位置
window.addEventListener('load', function() {
    adjustImagePosition();
});

function adjustImagePosition() {
    const img = document.querySelector('.fullscreen-img');
    const screenWidth = window.innerWidth;

    if (screenWidth > 1400) {
        img.style.left = '0';
        img.style.right = '0';
    } else {
        const leftrightValue = (1400 - screenWidth) / 2;
        // 保持高度不变的操作
        img.style.left = -leftrightValue + "px";
        img.style.right = -leftrightValue + "px";
    }
}
