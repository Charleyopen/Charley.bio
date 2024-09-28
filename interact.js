document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header h1');
    header.addEventListener('click', function() {
        alert('谢谢您访问我的网页！');
    });

    // 处理互动按钮
    const buttons = document.querySelectorAll('.interactive-btn');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // 移除所有按钮的 active 类
            buttons.forEach(btn => btn.classList.remove('active'));
            // 为当前点击的按钮添加 active 类
            this.classList.add('active');
            
            // 获取按钮对应的部分
            const section = this.getAttribute('data-section');
            showSection(section);
        });
    });

    // 默认显示首页内容
    showSection('home');
    document.querySelector('[data-section="home"]').classList.add('active');
});

// 这个函数用于显示不同的内容部分
function showSection(section) {
    // 隐藏所有内容部分
    document.querySelectorAll('main > div, main > section').forEach(sec => {
        sec.style.display = 'none';
    });
    
    // 显示选中的部分
    const selectedSection = document.getElementById(section);
    if (selectedSection) {
        selectedSection.style.display = 'block';
    } else {
        // 如果没有对应的部分，默认显示首页内容
        document.getElementById('home').style.display = 'block';
    }
}