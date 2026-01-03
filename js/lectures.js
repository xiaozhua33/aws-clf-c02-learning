// AWS CLF-C02 学习系统 - 讲解页面脚本

// ============================================
// 1. 书签系统
// ============================================

function loadBookmarks() {
    const saved = localStorage.getItem('aws_clf_bookmarks');
    return saved ? JSON.parse(saved) : [];
}

function saveBookmarks(bookmarks) {
    localStorage.setItem('aws_clf_bookmarks', JSON.stringify(bookmarks));
}

function toggleBookmark(lectureId) {
    const bookmarks = loadBookmarks();
    const index = bookmarks.indexOf(lectureId);
    
    if (index > -1) {
        bookmarks.splice(index, 1);
    } else {
        bookmarks.push(lectureId);
    }
    
    saveBookmarks(bookmarks);
    renderLectures(); // 重新渲染以更新书签状态
}

// ============================================
// 2. 渲染讲解内容
// ============================================

function renderLectures(lectures = lecturesData) {
    const container = document.getElementById('lectures-container');
    if (!container || !lectures) return;
    
    const bookmarks = loadBookmarks();
    
    container.innerHTML = lectures.map(lecture => `
        <div class="lecture-item" id="lecture-${lecture.id}">
            <div class="lecture-item-header">
                <h2 class="lecture-item-title">第 ${lecture.id} 讲 | ${lecture.title}</h2>
                <button class="lecture-bookmark ${bookmarks.includes(lecture.id) ? 'bookmarked' : ''}"
                        onclick="toggleBookmark(${lecture.id})"
                        title="${bookmarks.includes(lecture.id) ? '取消收藏' : '收藏本讲'}">
                    ${bookmarks.includes(lecture.id) ? '🔖' : '🔖'}
                </button>
            </div>
            
            <div class="lecture-content">
                ${lecture.content}
            </div>
            
            <div class="lecture-meta">
                <div class="meta-item">
                    <div class="meta-label">💡 关键记忆点</div>
                    <div class="meta-content">${lecture.keyTakeaway || '无'}</div>
                </div>
                <div class="meta-item">
                    <div class="meta-label">❌ 常见误区</div>
                    <div class="meta-content">${lecture.misconception || '无'}</div>
                </div>
                <div class="meta-item">
                    <div class="meta-label">🎯 考点提示</div>
                    <div class="meta-content">${lecture.examTips || '无'}</div>
                </div>
            </div>
        </div>
    `).join('');
}

// ============================================
// 3. 搜索和筛选
// ============================================

function filterLectures() {
    if (typeof lecturesData === 'undefined') return;
    
    const searchInput = document.getElementById('lecture-search');
    const filter = document.getElementById('lecture-filter');
    
    if (!searchInput || !filter) return;
    
    const searchTerm = searchInput.value.toLowerCase();
    const selectedRange = filter.value;
    
    let filtered = lecturesData;
    
    // 按范围筛选
    if (selectedRange !== 'all') {
        const [start, end] = selectedRange.split('-').map(Number);
        filtered = filtered.filter(l => l.id >= start && l.id <= end);
    }
    
    // 按搜索词筛选
    if (searchTerm) {
        filtered = filtered.filter(l => 
            l.title.toLowerCase().includes(searchTerm) ||
            l.content.toLowerCase().includes(searchTerm) ||
            (l.keyTakeaway && l.keyTakeaway.toLowerCase().includes(searchTerm))
        );
    }
    
    renderLectures(filtered);
}

// ============================================
// 4. 快速跳转功能
// ============================================

function populateJumpSelect() {
    const jumpSelect = document.getElementById('jump-to-lecture');
    if (!jumpSelect || typeof lecturesData === 'undefined') return;
    
    jumpSelect.innerHTML = '<option value="">选择讲次...</option>' +
        lecturesData.map(lecture => 
            `<option value="${lecture.id}">第 ${lecture.id} 讲 - ${lecture.title}</option>`
        ).join('');
    
    jumpSelect.addEventListener('change', (e) => {
        if (e.target.value) {
            const lectureId = e.target.value;
            const element = document.getElementById(`lecture-${lectureId}`);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                // 重置选择
                setTimeout(() => { e.target.value = ''; }, 500);
            }
        }
    });
}

// ============================================
// 5. 导航按钮功能
// ============================================

function setupNavigation() {
    const prevBtn = document.getElementById('prev-lecture');
    const nextBtn = document.getElementById('next-lecture');
    const scrollTopBtn = document.getElementById('scroll-top');
    
    // 上一讲/下一讲功能需要知道当前讲次
    // 这里简化处理：滚动到可见的第一个讲次的上一个/下一个
    
    if (scrollTopBtn) {
        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
    
    // 当滚动超过300px时显示回到顶部按钮
    if (scrollTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                scrollTopBtn.style.display = 'flex';
            } else {
                scrollTopBtn.style.display = 'none';
            }
        });
        // 初始隐藏
        scrollTopBtn.style.display = 'none';
    }
}

// ============================================
// 6. 主题切换（复用首页代码）
// ============================================

const savedTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', savedTheme);

function updateThemeButton() {
    const themeBtn = document.getElementById('theme-toggle');
    if (themeBtn) {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        themeBtn.textContent = currentTheme === 'dark' ? '☀️' : '🌙';
    }
}

const themeToggle = document.getElementById('theme-toggle');
if (themeToggle) {
    updateThemeButton();
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeButton();
    });
}

// ============================================
// 7. 页面加载初始化
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // 检查数据是否加载
    if (typeof lecturesData === 'undefined') {
        console.error('讲解数据未加载');
        const container = document.getElementById('lectures-container');
        if (container) {
            container.innerHTML = `
                <div style="text-align: center; padding: 4rem;">
                    <h3 style="color: #FF9900;">⚠️ 讲解数据加载失败</h3>
                    <p>请确保 js/lectures-data.js 文件存在且格式正确</p>
                    <p style="margin-top: 1rem;">
                        <a href="index.html" style="color: #FF9900;">← 返回首页</a>
                    </p>
                </div>
            `;
        }
        return;
    }
    
    // 渲染讲解内容
    renderLectures();
    
    // 填充快速跳转下拉菜单
    populateJumpSelect();
    
    // 设置导航按钮
    setupNavigation();
    
    // 添加搜索和筛选事件监听
    const searchInput = document.getElementById('lecture-search');
    const filter = document.getElementById('lecture-filter');
    
    if (searchInput) {
        searchInput.addEventListener('input', filterLectures);
    }
    
    if (filter) {
        filter.addEventListener('change', filterLectures);
    }
    
    // 检查URL中的锚点（从概念清单页面跳转过来）
    if (window.location.hash) {
        setTimeout(() => {
            const targetId = window.location.hash.substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                // 高亮显示目标讲次
                targetElement.style.border = '2px solid #FF9900';
                setTimeout(() => {
                    targetElement.style.border = '';
                }, 2000);
            }
        }, 300);
    }
});

// 导出函数供全局使用
window.toggleBookmark = toggleBookmark;