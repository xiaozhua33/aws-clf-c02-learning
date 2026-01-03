# ⚡ 快速部署指南（5分钟完成）

## 🎯 最简单的方法：网页上传

### 步骤1: 创建仓库（1分钟）
1. 访问：https://github.com/new
2. 填写：
   - Repository name: `aws-clf-c02-learning`
   - 选择 **Public** ✅
   - 点击 "Create repository"

### 步骤2: 准备文件（1分钟）
你需要准备这些文件：

**必需文件：**
```
✅ index.html              (主页)
✅ lectures.html           (97讲完整版)
✅ resources.html          (资源页)
✅ exam-prep.html          (冲刺页)
✅ README.md              (说明文档)
✅ css/style.css          (样式)
✅ js/lectures-data.js    (224KB 数据文件)
✅ js/main.js             (主页脚本)
✅ data/concepts.js       (概念数据)
```

**可选文件：**
```
- DATA_COMPLETION_GUIDE.md
- PROJECT_SUMMARY.md
- DEPLOYMENT_GUIDE.md
- QUICK_DEPLOY.md (本文件)
```

### 步骤3: 上传文件（2分钟）
1. 在新建的仓库页面，点击 **"uploading an existing file"**
2. 把所有文件拖拽到上传区
   - ⚠️ **重要**：一次性拖拽整个文件夹，保持目录结构
3. 填写提交信息：`Initial commit`
4. 点击 **"Commit changes"**

### 步骤4: 启用 GitHub Pages（1分钟）
1. 点击仓库的 **Settings** ⚙️
2. 左侧菜单找到 **Pages**
3. 设置：
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/ (root)`
4. 点击 **Save**
5. 等待 1-2 分钟

### 步骤5: 访问网站 ✅
```
https://xiaozhua33.github.io/aws-clf-c02-learning/
```

---

## 📋 部署检查清单

部署完成后，访问网站检查：

- [ ] 主页显示 106 个概念
- [ ] 点击"详细讲解"能看到 97 讲卡片
- [ ] 点击卡片能打开弹窗看完整内容
- [ ] 搜索功能正常
- [ ] 主题切换（深色/浅色）正常
- [ ] 在手机上打开也正常显示

---

## ❓ 常见问题

### 问题1: 上传后显示 404
**解决**：等待 3-5 分钟，GitHub Pages 需要部署时间

### 问题2: 样式乱了
**原因**：文件夹结构不对  
**解决**：确保 css/style.css 在 css 文件夹里，不是在根目录

### 问题3: 讲解内容不显示
**原因**：lectures-data.js 没上传成功  
**解决**：检查这个文件是否存在，大小应该是 224KB

### 问题4: 想修改内容
**方法**：
1. 在 GitHub 网站直接编辑文件
2. 或者本地修改后重新上传
3. 改完后等 1-2 分钟会自动重新部署

---

## 🔗 你的网站地址

```
https://xiaozhua33.github.io/aws-clf-c02-learning/
```

**分享这个地址给任何人，他们都可以访问！**

---

## 💡 小提示

1. **GitHub 限制**：
   - 每个仓库最大 1GB
   - 每月流量 100GB
   - 对于这个项目完全够用

2. **更新网站**：
   - 修改任何文件后，push 到 GitHub
   - 等 1-2 分钟自动重新部署

3. **关闭网站**：
   - Settings → Pages → Source 选择 "None"

---

## 🎉 部署成功！

现在你可以：
- ✅ 分享给朋友学习
- ✅ 在简历中展示
- ✅ 随时更新内容
- ✅ 完全免费使用

---

*花费时间：约 5 分钟*  
*花费金钱：$0*  
*访问速度：全球 CDN 加速*