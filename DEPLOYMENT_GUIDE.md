# 🚀 GitHub Pages 部署指南

## 📦 项目文件清单

部署前请确保你有以下所有文件：

```
aws-clf-c02-learning/
├── index.html                      # 主页
├── lectures.html                   # 讲解页（已更新为完整版）
├── resources.html                  # 资源页
├── exam-prep.html                  # 冲刺页
├── README.md                       # 项目文档
├── DATA_COMPLETION_GUIDE.md        # 数据补充指南
├── PROJECT_SUMMARY.md              # 项目总结
├── DEPLOYMENT_GUIDE.md             # 部署指南（本文件）
├── css/
│   └── style.css                  # 样式文件
├── js/
│   ├── main.js                    # 主页脚本
│   ├── lectures.js                # 讲解页脚本（已删除，不需要了）
│   └── lectures-data.js           # 完整97讲数据（224KB）
└── data/
    └── concepts.js                # 概念数据（需补充完整）
```

---

## 🎯 方法1: 使用 GitHub 网页界面上传（推荐新手）

### 步骤详解

1. **创建新仓库**
   - 访问：https://github.com/new
   - Repository name: `aws-clf-c02-learning`
   - Public（必须公开）
   - 点击 "Create repository"

2. **上传文件**
   - 在新仓库页面，点击 "uploading an existing file"
   - 或者点击 "Add file" → "Upload files"
   - 把所有文件拖拽到上传区域
   - **重要**：确保保持文件夹结构（css/, js/, data/）
   - 填写 Commit message: "Initial commit - AWS CLF-C02 学习系统"
   - 点击 "Commit changes"

3. **启用 GitHub Pages**
   - 在仓库页面，点击 "Settings"（⚙️ 设置）
   - 左侧菜单找到 "Pages"
   - Source 选择: "Deploy from a branch"
   - Branch 选择: "main"，文件夹选择 "/ (root)"
   - 点击 "Save"

4. **等待部署完成**
   - 大约1-2分钟后刷新页面
   - 会看到绿色提示框显示网站地址
   - 你的网站地址将是：
     ```
     https://xiaozhua33.github.io/aws-clf-c02-learning/
     ```

---

## 🎯 方法2: 使用 Git 命令行（推荐有经验者）

### 前提条件
- 已安装 Git
- 已配置 GitHub 账户

### 命令步骤

```bash
# 1. 进入项目文件夹
cd /path/to/your/aws-clf-c02-learning

# 2. 初始化 Git 仓库
git init

# 3. 添加所有文件
git add .

# 4. 提交
git commit -m "Initial commit - AWS CLF-C02 学习系统"

# 5. 连接远程仓库（替换为你的仓库地址）
git remote add origin https://github.com/xiaozhua33/aws-clf-c02-learning.git

# 6. 推送到 GitHub
git branch -M main
git push -u origin main
```

### 启用 GitHub Pages
- 在仓库页面 → Settings → Pages
- Source: Deploy from a branch
- Branch: main, / (root)
- Save

---

## 🎯 方法3: 使用 GitHub Desktop（最简单的图形界面）

1. **下载 GitHub Desktop**
   - https://desktop.github.com/

2. **创建仓库**
   - File → New Repository
   - Name: `aws-clf-c02-learning`
   - Local Path: 选择你的项目文件夹的父文件夹
   - Create Repository

3. **发布到 GitHub**
   - 点击 "Publish repository"
   - 取消勾选 "Keep this code private"（必须公开）
   - Publish

4. **启用 GitHub Pages**
   - 在 GitHub 网站上找到你的仓库
   - Settings → Pages → 配置并保存

---

## ✅ 部署成功后

### 访问地址
```
https://xiaozhua33.github.io/aws-clf-c02-learning/
```

### 测试清单
- [ ] 主页（概念清单）正常显示
- [ ] 讲解页显示97讲卡片
- [ ] 资源页链接正常
- [ ] 考前冲刺页内容完整
- [ ] 主题切换功能正常
- [ ] 搜索功能正常
- [ ] 点击讲解卡片能打开弹窗
- [ ] 移动端显示正常

---

## 🔧 常见问题

### Q1: 页面显示404
**原因**：GitHub Pages 需要几分钟部署时间  
**解决**：等待3-5分钟后刷新

### Q2: CSS/JS 文件加载失败
**原因**：文件夹结构不对  
**解决**：确保 css/, js/, data/ 文件夹在根目录

### Q3: 讲解数据不显示
**原因**：lectures-data.js 没有上传成功  
**解决**：检查文件大小是否为 224KB，重新上传

### Q4: 想更新网站内容
**方法1**：在 GitHub 网站上直接编辑文件  
**方法2**：本地修改后重新上传  
**方法3**：使用 Git 命令 push

---

## 📱 分享给别人

部署成功后，直接把网址发给别人即可：

```
https://xiaozhua33.github.io/aws-clf-c02-learning/
```

**特点：**
- ✅ 完全免费
- ✅ 访问速度快
- ✅ 支持 HTTPS
- ✅ 无需服务器
- ✅ 可以随时更新

---

## 🎨 自定义域名（可选）

如果你有自己的域名，可以：

1. 在仓库根目录创建 `CNAME` 文件
2. 内容写入你的域名：`example.com`
3. 在域名 DNS 设置中添加 CNAME 记录指向：
   ```
   xiaozhua33.github.io
   ```

---

## 📊 使用统计（可选）

想看多少人访问？可以添加：

### Google Analytics
在每个 HTML 文件的 `</head>` 前添加：
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### 或使用 Cloudflare Analytics
- 更简单
- 无需修改代码
- 在 Cloudflare Pages 部署即可

---

## 🆘 需要帮助？

如果遇到问题：
1. 检查 GitHub 仓库的 Actions 标签页（查看部署日志）
2. 确认 Settings → Pages 显示绿色的成功信息
3. 在浏览器控制台检查错误信息（F12）

---

## 🎉 部署成功后的下一步

1. **分享给朋友**：发送网址
2. **在简历上添加**：展示你的项目
3. **继续完善**：添加更多功能
4. **获取反馈**：邀请人试用并改进

---

*祝部署顺利！🚀*

如有问题随时在 GitHub Issues 中提问。