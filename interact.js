document.addEventListener('DOMContentLoaded', function() {
    // 处理互动按钮
    document.querySelectorAll('.interactive-btn').forEach(button => {
        button.addEventListener('click', function() {
            if (this.id !== 'lang-switch') {
                // 移除所有按钮的 active 类并为当前按钮添加 active 类
                document.querySelectorAll('.interactive-btn').forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                
                // 显示对应部分
                showSection(this.getAttribute('data-section'));
            }
        });
    });

    // 默认显示首页内容
    showSection('home');
    document.querySelector('[data-section="home"]').classList.add('active');

    // 语言切换功能
    document.getElementById('lang-switch').addEventListener('click', function() {
        // 这里添加语言切换的逻辑
        console.log('Language switch clicked');
        // 例如：toggleLanguage();
    });
});

// 显示不同的内容部分
function showSection(section) {
    document.querySelectorAll('main > div, main > section').forEach(sec => {
        sec.style.display = sec.id === section ? 'block' : 'none';
    });
}

// 语言切换函数（需要实现）
function toggleLanguage() {
    // 在这里实现语言切换的逻辑
}