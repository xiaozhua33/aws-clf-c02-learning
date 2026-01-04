// AWS CLF-C02 快速扫盲页面 - 交互逻辑

// ============================================
// 1. 状态管理
// ============================================

let currentMode = 'all'; // 'all', 'unscanned', 'random'
let isRandomMode = false;
let randomOrder = [];

// 从本地存储加载扫盲进度
function loadScanProgress() {
    const saved = localStorage.getItem('aws_clf_quick_scan');
    return saved ? JSON.parse(saved) : {};
}

// 保存扫盲进度
function saveScanProgress(progress) {
    localStorage.setItem('aws_clf_quick_scan', JSON.stringify(progress));
    updateProgressDisplay();
    renderConcepts();
}

// 重置扫盲进度
function resetScanProgress() {
    if (confirm('确定要重置所有扫盲进度吗？此操作不可恢复。')) {
        localStorage.removeItem('aws_clf_quick_scan');
        location.reload();
    }
}

// ============================================
// 2. 进度显示
// ============================================

function updateProgressDisplay() {
    if (typeof conceptsData === 'undefined') return;

    const progress = loadScanProgress();
    const total = conceptsData.length;
    const scanned = Object.keys(progress).filter(id => progress[id]).length;
    const remaining = total - scanned;
    const percentage = total > 0 ? Math.round((scanned / total) * 100) : 0;

    // 更新进度条
    const progressFill = document.getElementById('progress-fill');
    if (progressFill) {
        progressFill.style.width = `${percentage}%`;
    }

    // 更新统计数据
    const scannedCount = document.getElementById('scanned-count');
    const totalCount = document.getElementById('total-count');
    const remainingCount = document.getElementById('remaining-count');
    const estimatedTime = document.getElementById('estimated-time');

    if (scannedCount) scannedCount.textContent = scanned;
    if (totalCount) totalCount.textContent = total;
    if (remainingCount) remainingCount.textContent = remaining;
    if (estimatedTime) estimatedTime.textContent = Math.ceil(remaining * 0.5); // 每个概念约30秒

    // 显示/隐藏完成消息
    const completionMessage = document.getElementById('completion-message');
    if (completionMessage) {
        completionMessage.style.display = remaining === 0 ? 'block' : 'none';
    }
}

// ============================================
// 3. 概念卡片渲染
// ============================================

function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

function renderConcepts() {
    const container = document.getElementById('concepts-container');
    if (!container || typeof conceptsData === 'undefined') return;

    const progress = loadScanProgress();

    // 根据当前模式筛选概念
    let concepts = [...conceptsData];

    if (currentMode === 'unscanned') {
        concepts = concepts.filter(c => !progress[c.id]);
    } else if (currentMode === 'random' && isRandomMode) {
        if (randomOrder.length === 0) {
            randomOrder = shuffleArray(conceptsData);
        }
        concepts = randomOrder;
    }

    // 如果没有概念显示，显示空状态
    if (concepts.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <h3>🎉 太棒了！</h3>
                <p>你已经扫盲完所有概念了！可以前往<a href="lectures.html" style="color: var(--aws-orange);">详细讲解</a>深入学习</p>
            </div>
        `;
        return;
    }

    // 渲染概念卡片
    container.innerHTML = concepts.map(concept => {
        const isScanned = progress[concept.id];

        return `
            <div class="concept-card-compact ${isScanned ? 'scanned' : ''}" data-id="${concept.id}">
                <div class="concept-name">${concept.name}</div>
                <div class="concept-oneliner">${concept.oneLiner || concept.topics}</div>
                <div class="concept-meta">
                    <span class="concept-domain">${getDomainEmoji(concept.domain)} ${concept.domain}</span>
                    <div class="concept-actions">
                        ${concept.lectureId ? `<a href="lectures.html#lecture-${concept.lectureId}" class="deep-dive-btn">📖 深入学习</a>` : ''}
                        <button class="scan-button ${isScanned ? 'scanned' : ''}"
                                onclick="toggleScanStatus(${concept.id})"
                                data-id="${concept.id}">
                            ${isScanned ? '✓ 已了解' : '已了解'}
                        </button>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

// 获取域的表情符号
function getDomainEmoji(domain) {
    const emojiMap = {
        'Cloud Concepts': '☁️',
        'Security & Compliance': '🔒',
        'Cloud Technology & Services': '⚙️',
        'Billing, Pricing & Support': '💰'
    };
    return emojiMap[domain] || '📌';
}

// 切换扫盲状态
function toggleScanStatus(conceptId) {
    const progress = loadScanProgress();

    if (progress[conceptId]) {
        delete progress[conceptId];
    } else {
        progress[conceptId] = true;
    }

    saveScanProgress(progress);

    // 更新按钮状态（不重新渲染整个列表）
    const button = document.querySelector(`.scan-button[data-id="${conceptId}"]`);
    const card = document.querySelector(`.concept-card-compact[data-id="${conceptId}"]`);

    if (button) {
        button.textContent = progress[conceptId] ? '✓ 已了解' : '已了解';
        button.classList.toggle('scanned', progress[conceptId]);
    }

    if (card) {
        card.classList.toggle('scanned', progress[conceptId]);
    }
}

// ============================================
// 4. 控制按钮事件
// ============================================

function setupControlButtons() {
    // 显示全部
    const showAllBtn = document.getElementById('show-all');
    if (showAllBtn) {
        showAllBtn.addEventListener('click', () => {
            currentMode = 'all';
            isRandomMode = false;
            renderConcepts();
        });
    }

    // 只看未扫盲
    const showUnscannedBtn = document.getElementById('show-unscanned');
    if (showUnscannedBtn) {
        showUnscannedBtn.addEventListener('click', () => {
            currentMode = 'unscanned';
            isRandomMode = false;
            renderConcepts();
        });
    }

    // 随机模式
    const randomModeBtn = document.getElementById('random-mode');
    if (randomModeBtn) {
        randomModeBtn.addEventListener('click', () => {
            isRandomMode = !isRandomMode;
            currentMode = 'random';

            if (isRandomMode) {
                randomOrder = shuffleArray(conceptsData);
                randomModeBtn.classList.add('random-mode');
                randomModeBtn.textContent = '🎲 随机模式中';
            } else {
                randomModeBtn.classList.remove('random-mode');
                randomModeBtn.textContent = '🎲 随机模式';
            }

            renderConcepts();
        });
    }

    // 重置进度
    const resetBtn = document.getElementById('reset-progress');
    if (resetBtn) {
        resetBtn.addEventListener('click', resetScanProgress);
    }
}

// ============================================
// 5. 页面初始化
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // 渲染概念卡片
    if (typeof conceptsData !== 'undefined') {
        renderConcepts();
    }

    // 更新进度显示
    updateProgressDisplay();

    // 设置控制按钮
    setupControlButtons();

    // 从URL参数获取模式
    const urlParams = new URLSearchParams(window.location.search);
    const mode = urlParams.get('mode');
    if (mode === 'random') {
        currentMode = 'random';
        isRandomMode = true;
        randomOrder = shuffleArray(conceptsData);
        renderConcepts();

        const randomModeBtn = document.getElementById('random-mode');
        if (randomModeBtn) {
            randomModeBtn.classList.add('random-mode');
            randomModeBtn.textContent = '🎲 随机模式中';
        }
    }
});

// ============================================
// 6. 导出函数
// ============================================

window.quickScan = {
    loadScanProgress,
    saveScanProgress,
    updateProgressDisplay
};
