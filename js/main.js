// AWS CLF-C02 学习系统 - 主交互脚本

// ============================================
// 1. 初始化和主题切换
// ============================================

// 检查本地存储的主题设置
const savedTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', savedTheme);

// 更新主题切换按钮的图标
function updateThemeButton() {
    const themeBtn = document.getElementById('theme-toggle');
    if (themeBtn) {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        themeBtn.textContent = currentTheme === 'dark' ? '☀️' : '🌙';
    }
}

// 主题切换功能
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
// 2. 进度追踪系统
// ============================================

// 从本地存储加载进度
function loadProgress() {
    const saved = localStorage.getItem('aws_clf_progress');
    return saved ? JSON.parse(saved) : {};
}

// 保存进度到本地存储
function saveProgress(progress) {
    localStorage.setItem('aws_clf_progress', JSON.stringify(progress));
    updateProgressDisplay();
}

// 更新进度显示
function updateProgressDisplay() {
    if (typeof conceptsData === 'undefined') return;
    
    const progress = loadProgress();
    const domains = {
        'Cloud Concepts': { completed: 0, total: 0 },
        'Security & Compliance': { completed: 0, total: 0 },
        'Cloud Technology & Services': { completed: 0, total: 0 },
        'Billing, Pricing & Support': { completed: 0, total: 0 }
    };
    
    // 统计每个域的进度
    conceptsData.forEach(concept => {
        if (domains[concept.domain]) {
            domains[concept.domain].total++;
            if (progress[concept.id]) {
                domains[concept.domain].completed++;
            }
        }
    });
    
    // 更新各域进度条
    Object.keys(domains).forEach(domainName => {
        const { completed, total } = domains[domainName];
        const percentage = total > 0 ? (completed / total * 100) : 0;
        
        // 更新进度条
        const domainKey = domainName.split(' ')[0].toLowerCase();
        const progressBar = document.getElementById(`${domainKey}-progress`);
        const completedSpan = document.getElementById(`${domainKey}-completed`);
        const totalSpan = document.getElementById(`${domainKey}-total`);
        
        if (progressBar) {
            progressBar.style.width = `${percentage}%`;
        }
        if (completedSpan) {
            completedSpan.textContent = completed;
        }
        if (totalSpan) {
            totalSpan.textContent = total;
        }
    });
    
    // 更新总体进度百分比
    const totalCompleted = Object.values(domains).reduce((sum, d) => sum + d.completed, 0);
    const totalConcepts = Object.values(domains).reduce((sum, d) => sum + d.total, 0);
    const totalPercentage = totalConcepts > 0 ? Math.round(totalCompleted / totalConcepts * 100) : 0;
    
    const progressPercent = document.getElementById('progress-percent');
    if (progressPercent) {
        progressPercent.textContent = `${totalPercentage}%`;
    }
}

// 重置进度
const resetBtn = document.getElementById('reset-progress');
if (resetBtn) {
    resetBtn.addEventListener('click', () => {
        if (confirm('确定要重置所有学习进度吗？此操作不可恢复。')) {
            localStorage.removeItem('aws_clf_progress');
            location.reload();
        }
    });
}

// ============================================
// 3. 概念卡片渲染
// ============================================

function renderConcepts(concepts = conceptsData) {
    const container = document.getElementById('concepts-container');
    if (!container) return;
    
    const progress = loadProgress();
    
    container.innerHTML = concepts.map(concept => `
        <div class="concept-card ${progress[concept.id] ? 'completed' : ''}" 
             data-domain="${concept.domain}" 
             data-id="${concept.id}">
            <div class="concept-header">
                <h3 class="concept-title">${concept.name}</h3>
                <input type="checkbox" 
                       class="concept-checkbox" 
                       data-id="${concept.id}"
                       ${progress[concept.id] ? 'checked' : ''}>
            </div>
            <span class="concept-domain">${concept.domain}</span>
            <p class="concept-topics">📌 ${concept.topics}</p>
            ${concept.misconception ? `<div class="concept-misconception">❌ 易混点: ${concept.misconception}</div>` : ''}
            <div class="concept-footer">
                <span class="concept-duration">⏱️ ${concept.duration} 分钟</span>
                ${concept.lectureId ? `<a href="lectures.html#lecture-${concept.lectureId}" class="view-lecture-btn">📖 详细讲解</a>` : ''}
            </div>
        </div>
    `).join('');
    
    // 添加复选框事件监听
    const checkboxes = container.querySelectorAll('.concept-checkbox');
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', (e) => {
            const conceptId = parseInt(e.target.dataset.id);
            const progress = loadProgress();
            
            if (e.target.checked) {
                progress[conceptId] = true;
            } else {
                delete progress[conceptId];
            }
            
            saveProgress(progress);
            
            // 更新卡片样式
            const card = e.target.closest('.concept-card');
            if (card) {
                card.classList.toggle('completed', e.target.checked);
            }
        });
    });
}

// ============================================
// 4. 搜索和筛选功能
// ============================================

function filterConcepts() {
    if (typeof conceptsData === 'undefined') return;
    
    const searchInput = document.getElementById('search-input');
    const domainFilter = document.getElementById('domain-filter');
    
    if (!searchInput || !domainFilter) return;
    
    const searchTerm = searchInput.value.toLowerCase();
    const selectedDomain = domainFilter.value;
    
    let filtered = conceptsData;
    
    // 按域筛选
    if (selectedDomain !== 'all') {
        filtered = filtered.filter(c => c.domain === selectedDomain);
    }
    
    // 按搜索词筛选
    if (searchTerm) {
        filtered = filtered.filter(c => 
            c.name.toLowerCase().includes(searchTerm) ||
            c.topics.toLowerCase().includes(searchTerm) ||
            (c.misconception && c.misconception.toLowerCase().includes(searchTerm))
        );
    }
    
    renderConcepts(filtered);
}

// 添加搜索和筛选事件监听
const searchInput = document.getElementById('search-input');
const domainFilter = document.getElementById('domain-filter');

if (searchInput) {
    searchInput.addEventListener('input', filterConcepts);
}

if (domainFilter) {
    domainFilter.addEventListener('change', filterConcepts);
}

// ============================================
// 5. 页面加载初始化
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // 渲染概念卡片
    if (typeof conceptsData !== 'undefined') {
        renderConcepts();
    }
    
    // 更新进度显示
    updateProgressDisplay();
    
    // 检查URL中的锚点（用于从其他页面跳转）
    if (window.location.hash) {
        const targetId = window.location.hash.substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            setTimeout(() => {
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 100);
        }
    }
});

// ============================================
// 6. 导出函数（供其他页面使用）
// ============================================

window.awsCLF = {
    loadProgress,
    saveProgress,
    updateProgressDisplay
};