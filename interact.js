document.addEventListener('DOMContentLoaded', function() {
    // 处理互动按钮
    document.querySelectorAll('.interactive-btn').forEach(button => {
        button.addEventListener('click', function() {
            // 移除所有按钮的 active 类并为当前按钮添加 active 类
            document.querySelectorAll('.interactive-btn').forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // 显示对应部分
            showSection(this.getAttribute('data-section'));
        });
    });

    // 默认显示首页内容
    showSection('home');
    document.querySelector('[data-section="home"]').classList.add('active');
});

// 显示不同的内容部分
function showSection(section) {
    document.querySelectorAll('main > div, main > section').forEach(sec => {
        sec.style.display = sec.id === section ? 'block' : 'none';
    });
}