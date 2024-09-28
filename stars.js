function createStars() {
    const starsContainer = document.getElementById('stars-container');
    const starCount = 110; // 增加星星数量

    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        
        // 随机大小，范围从 1px 到 3px
        const size = Math.random() * 2 + 1;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.animationDelay = `${Math.random() * 5}s`;
        
        // 添加不同的动画持续时间
        star.style.animationDuration = `${Math.random() * 4 + 2}s`;
        
        starsContainer.appendChild(star);
    }
}

document.addEventListener('DOMContentLoaded', createStars);