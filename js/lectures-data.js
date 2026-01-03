// AWS CLF-C02 100讲完整数据
// 自动生成，请勿手动编辑

const lecturesData = [
  {
    id: 1,
    title: `共享责任模型 (Shared Responsibility Model)</div>`,
    content: `<h3>开始</h3>
      <p>我们先不看那些复杂的法律条款。</p>
      <p>关于安全，我们只解决一个问题：</p>

      <h3>出了事，到底赖谁？</h3>

      <div class="big-statement">
        你可以把使用 AWS 想象成<br />
        “租房子”。
      </div>

      <p>如果你在 AWS 上租了一台服务器，就像租了一间公寓。</p>

      <p><strong>AWS 是房东，你是租客。</strong></p>

      <p>如果这栋楼的：</p>
      <ul>
        <li>地基塌了</li>
        <li>墙壁裂了</li>
        <li>大门门禁坏了</li>
        <li>保安罢工了</li>
      </ul>
      <p class="highlight">这是 AWS 的责任（云本身的安全）。</p>
      <p>他们负责修楼、修电、修网络，保证没人能物理闯入机房。</p>

      <hr class="separator" />

      <p>但是，</p>
      <p>如果你：</p>
      <ul>
        <li>出门不锁门</li>
        <li>把备用钥匙贴在门上</li>
        <li>邀请小偷进屋喝茶</li>
      </ul>
      <p class="highlight">这是你的责任（云内部的安全）。</p>
      <p>AWS 给了你锁（加密工具、防火墙），但如果你不用，或者把钥匙（密码）到处乱扔，丢了东西是你自己的事。</p>

      <h3>常见的一个大误区</h3>
      <div class="misconception">
        <p>
          很多人以为：<br />
          <span class="dialogue">“我把数据放到 AWS 上，它就自动安全了。”</span>
        </p>
        <p><strong>错。</strong></p>
        <p>AWS 保证没人能把硬盘偷走，但如果你把数据库密码设成 <code>123456</code>，黑客照样能进来。</p>
      </div>

      <h3>📝 考试提示与常见误区</h3>
      <div style="background: #fffbf0; padding: 25px; border-radius: 10px; border: 2px solid #f0e68c; margin: 30px 0">
        <div style="margin-bottom: 20px">
          <p style="margin: 0; font-size: 18px"><strong>❌ 误区：</strong>客户数据加密和应用补丁是 AWS 的责任</p>
        </div>
        <div>
          <p style="margin: 0; font-size: 18px">
            <strong>🔑 联想关键词：</strong>AWS = 硬件/网络/设施 | 你 = 数据/应用/权限
          </p>
        </div>
        <div style="margin-top: 15px; padding: 15px; background: #fff; border-radius: 5px">
          <p style="margin: 0; font-size: 16px; color: #666">
            <strong>💡 考点提示：</strong
            >题目中出现"应用层安全"、"数据加密"、"操作系统补丁"，责任在<strong>客户</strong>；出现"物理安全"、"硬件维护"、"网络基础设施"，责任在<strong>AWS</strong>。
          </p>
        </div>
      </div>

      <div class="takeaway-box">
        <div class="takeaway-title">你现在要记住的只有一句话</div>
        <p class="takeaway-text">AWS 负责“房子的质量”，你负责“锁好自家的门”。</p>
      </div>
    </div>

    <hr class="separator" />

    <!-- 第2讲 -->
    <div class="lecture-container">
      <div class="lecture-title">`,
    keyTakeaway: ``,
    misconception: ``,
    examTips: `</strong
            >题目中出现"应用层安全"、"数据加密"、"操作系统补丁"，责任在<strong>客户</strong>；出现"物理安全"、"硬件维护"、"网络基础设施"，责任在<strong>AWS</strong>。
          </p>
        </div>
      </div>`
  },
  {
    id: 2,
    title: `云价值主张 (Cloud Value Proposition)</div>`,
    content: `<h3>为什么要上云？</h3>
      <p>如果你去面试，或者跟老板汇报，别只说“因为技术牛”。</p>
      <p>你要说得像个生意人。</p>

      <h3>第一个概念：OpEx vs CapEx</h3>
      <p>这俩词看着吓人，其实就是：</p>
      <p>
        <strong>CapEx（资本支出）= 买房。</strong><br />
        你要先攒一大笔钱，付首付，装修。不管你住不住，钱都花出去了。
      </p>
      <p>
        <strong>OpEx（运营支出）= 住酒店。</strong><br />
        不用首付。住一晚付一晚。不想住了随时走。
      </p>
      <p class="highlight">云，就是把“买服务器”变成了“交水电费”。</p>

      <h3>第二个概念：敏捷性</h3>
      <p>以前，你要做一个新项目：</p>
      <ul>
        <li>申请预算</li>
        <li>买服务器</li>
        <li>等发货</li>
        <li>上架安装</li>
      </ul>
      <p>三个月过去了，黄花菜都凉了。</p>
      <p>现在：</p>
      <p class="highlight">点击几下鼠标，几分钟，几千台服务器就有了。</p>
      <p>这不叫快，这叫<strong>敏捷</strong>。</p>

      <h3>常见误区</h3>
      <div class="misconception">
        <p>
          很多人觉得：<br />
          <span class="dialogue">“上云一定比自己买服务器省钱。”</span>
        </p>
        <p><strong>不一定。</strong></p>
        <p>如果你像住酒店一样常年包房（不优化、不关机），那可能比买房还贵。</p>
        <p>云的价值不在于绝对价格低，而在于<strong>“不浪费”</strong>和<strong>“跑得快”</strong>。</p>
      </div>

      <h3>📝 考试提示与常见误区</h3>
      <div style="background: #fffbf0; padding: 25px; border-radius: 10px; border: 2px solid #f0e68c; margin: 30px 0">
        <div style="margin-bottom: 20px">
          <p style="margin: 0; font-size: 18px">
            <strong>❌ 误区：</strong>把云只当作省钱方案，忽视敏捷性与全球覆盖能力
          </p>
        </div>
        <div>
          <p style="margin: 0; font-size: 18px">
            <strong>🔑 联想关键词：</strong>OpEx vs CapEx、弹性扩展、全球部署、按需付费、快速迭代
          </p>
        </div>
        <div style="margin-top: 15px; padding: 15px; background: #fff; border-radius: 5px">
          <p style="margin: 0; font-size: 16px; color: #666">
            <strong>💡 考点提示：</strong
            >题目问"云的优势"时，答案通常包含：<strong>敏捷性</strong>（快速部署）、<strong>规模经济</strong>（AWS
            采购量大成本低）、<strong>全球覆盖</strong>（分钟内部署全球）、<strong>停止猜测容量</strong>（按需伸缩）。不要只选"降低成本"。
          </p>
        </div>
      </div>

      <div class="takeaway-box">
        <div class="takeaway-title">你现在要记住的只有一句话</div>
        <p class="takeaway-text">云不是为了“省钱”，而是为了让你“随时想干就干，不想干就撤”。</p>
      </div>
    </div>

    <hr class="separator" />

    <!-- 第3讲 -->
    <div class="lecture-container">
      <div class="lecture-title">`,
    keyTakeaway: ``,
    misconception: ``,
    examTips: `</strong
            >题目问"云的优势"时，答案通常包含：<strong>敏捷性</strong>（快速部署）、<strong>规模经济</strong>（AWS
            采购量大成本低）、<strong>全球覆盖</strong>（分钟内部署全球）、<strong>停止猜测容量</strong>（按需伸缩）。不要只选"降低成本"。
          </p>
        </div>
      </div>`
  },
  {
    id: 3,
    title: `全球基础设施 (Global Infrastructure)</div>`,
    content: `<h3>AWS 到底在哪里？</h3>
      <p>打开地图，我们只需要搞懂三个圆圈。</p>

      <h3>1. Region（区域）</h3>
      <p>你可以把它想成<strong>“城市”</strong>。</p>
      <p>比如“弗吉尼亚北部”、“东京”、“北京”。</p>
      <p>这是你存放数据的物理大本营。</p>

      <h3>2. AZ（可用区）</h3>
      <p>它是 Region 里面的<strong>“独立小区”</strong>。</p>
      <p>在同一个城市（Region）里，AWS 会建好几个相隔几十公里的小区（AZ）。</p>
      <p><strong>为什么要隔开？</strong></p>
      <p>为了防止“一锅端”。</p>
      <p>如果东京发生停电，A 小区黑了，B 小区因为隔着河，用的电网不一样，所以还亮着。</p>

      <h3>3. Edge Location（边缘节点）</h3>
      <p>这就像你家楼下的<strong>“便利店”</strong>。</p>
      <p>它不是大仓库，存不了多少东西。</p>
      <p>但它离你最近。</p>
      <p>它是用来做 CDN 的，把最常用的图片、视频缓存到离用户最近的地方，让你打开网页飞快。</p>

      <h3>常见误区</h3>
      <div class="misconception">
        <p>最容易混淆的是 Region 和 AZ。</p>
        <p><strong>记住层级关系：</strong></p>
        <p>世界 > Region (城市) > AZ (小区) > Data Center (具体的楼)。</p>
        <p>你一般选不到具体的楼，你只能选到 AZ。</p>
      </div>

      <h3>📝 考试提示与常见误区</h3>
      <div style="background: #fffbf0; padding: 25px; border-radius: 10px; border: 2px solid #f0e68c; margin: 30px 0">
        <div style="margin-bottom: 20px">
          <p style="margin: 0; font-size: 18px">
            <strong>❌ 误区：</strong>混淆 Region 与 AZ；认为服务默认跨 AZ 高可用
          </p>
        </div>
        <div>
          <p style="margin: 0; font-size: 18px">
            <strong>🔑 联想关键词：</strong>Region = 地理位置 | AZ = 隔离故障域 | Edge = CDN 加速节点
          </p>
        </div>
        <div style="margin-top: 15px; padding: 15px; background: #fff; border-radius: 5px">
          <p style="margin: 0; font-size: 16px; color: #666">
            <strong>💡 考点提示：</strong>题目问"如何实现高可用"，答案通常是<strong>跨多个 AZ 部署</strong
            >。如果题目说"需要数据合规/低延迟"，答案是<strong>选择特定 Region</strong>。记住：<strong
              >数据不会自动跨 Region</strong
            >，需要你手动配置复制。
          </p>
        </div>
      </div>

      <div class="takeaway-box">
        <div class="takeaway-title">你现在要记住的只有一句话</div>
        <p class="takeaway-text">Region 是你的“主基地”，AZ 是防止基地停电的“备份区”，Edge 是送货上门的“便利店”。</p>
      </div>
    </div>

    <hr class="separator" />

    <!-- 第4讲 -->
    <div class="lecture-container">
      <div class="lecture-title">`,
    keyTakeaway: ``,
    misconception: ``,
    examTips: `</strong>题目问"如何实现高可用"，答案通常是<strong>跨多个 AZ 部署</strong
            >。如果题目说"需要数据合规/低延迟"，答案是<strong>选择特定 Region</strong>。记住：<strong
              >数据不会自动跨 Region</strong
            >，需要你手动配置复制。
          </p>
        </div>
      </div>`
  },
  {
    id: 4,
    title: `高可用/可靠性/弹性/可伸缩</div>`,
    content: `<h3>这四个词是不是看着就头晕？</h3>
      <p>别怕，我们用“开餐厅”来解释。</p>

      <h3>1. 可靠性 (Reliability)</h3>
      <p><strong>就是“不掉链子”。</strong></p>
      <p>你的厨师即使感冒了，也能做出好吃的菜；你的灶台不会突然爆炸。</p>
      <p>系统能从故障中恢复，这叫可靠。</p>

      <h3>2. 高可用性 (High Availability)</h3>
      <p><strong>就是“永远开门”。</strong></p>
      <p>即使主厨突然晕倒，副厨师长马上接手，顾客根本感觉不到停顿。</p>
      <p>怎么做到？<strong>冗余</strong>（多请几个厨师）。</p>

      <h3>3. 可伸缩性 (Scalability)</h3>
      <p><strong>就是“能大能小”。</strong></p>
      <p>如果你生意好了，你能马上把隔壁店面盘下来，把桌子从 10 张加到 100 张。</p>
      <p>这就是 Scale Up（把桌子换大）或 Scale Out（加更多桌子）。</p>

      <h3>4. 弹性 (Elasticity)</h3>
      <p><strong>这是云最厉害的地方。</strong></p>
      <p>它是“自动的可伸缩”。</p>
      <p>
        中午高峰期，餐厅自动变大，容纳 100 人；<br />
        下午没人了，餐厅自动缩小，变成 10 人座，省下的电费房租都归你。
      </p>
      <p class="highlight">传统机房做得到可伸缩（买新机器），但做不到弹性（退货很难）。</p>

      <h3>常见误区</h3>
      <div class="misconception">
        <p>很多人把“高可用”当成“容灾”。</p>
        <p><strong>高可用</strong>是：一个轮子爆了，备胎自动顶上，车还在跑。</p>
        <p><strong>容灾</strong>是：车掉悬崖摔烂了，你能在多久之内买辆新车重新上路。</p>
      </div>

      <h3>📝 考试提示与常见误区</h3>
      <div style="background: #fffbf0; padding: 25px; border-radius: 10px; border: 2px solid #f0e68c; margin: 30px 0">
        <div style="margin-bottom: 20px">
          <p style="margin: 0; font-size: 18px"><strong>❌ 误区：</strong>把高可用当成容灾；混淆伸缩与弹性概念</p>
        </div>
        <div>
          <p style="margin: 0; font-size: 18px">
            <strong>🔑 联想关键词：</strong>HA = 多副本 | 可靠性 = 恢复能力 | 弹性 = 自动伸缩 | 容灾 = 跨区域备份
          </p>
        </div>
        <div style="margin-top: 15px; padding: 15px; background: #fff; border-radius: 5px">
          <p style="margin: 0; font-size: 16px; color: #666">
            <strong>💡 考点提示：</strong>题目问"最小化停机时间"选<strong>高可用（跨 AZ）</strong
            >；问"应对突发流量"选<strong>弹性（Auto Scaling）</strong>；问"灾难恢复"选<strong>跨 Region 备份</strong
            >；问"系统能从故障恢复"选<strong>可靠性</strong>。
          </p>
        </div>
      </div>

      <div class="takeaway-box">
        <div class="takeaway-title">你现在要记住的只有一句话</div>
        <p class="takeaway-text">高可用是“一直不挂”，可伸缩是“能变大”，弹性是“用完自动变小来省钱”。</p>
      </div>
    </div>

    <hr class="separator" />

    <!-- 第5讲 -->
    <div class="lecture-container">
      <div class="lecture-title">`,
    keyTakeaway: ``,
    misconception: ``,
    examTips: `</strong>题目问"最小化停机时间"选<strong>高可用（跨 AZ）</strong
            >；问"应对突发流量"选<strong>弹性（Auto Scaling）</strong>；问"灾难恢复"选<strong>跨 Region 备份</strong
            >；问"系统能从故障恢复"选<strong>可靠性</strong>。
          </p>
        </div>
      </div>`
  },
  {
    id: 5,
    title: `Well-Architected Framework</div>`,
    content: `<h3>名字听着很高级</h3>
      <p>翻译过来就是：<strong>“架构师的六大内功心法”</strong>。</p>
      <p>你在 AWS 上搭系统，不能乱搭。</p>
      <p>AWS 给了你一张“体检表”，包含六个支柱：</p>

      <h3>这六根柱子在撑什么？</h3>
      <ul>
        <li><strong>卓越运营 (Operational Excellence)：</strong> 怎么让系统跑得顺？出了事怎么自动化处理？</li>
        <li><strong>安全性 (Security)：</strong> 怎么防黑客？怎么管权限？</li>
        <li><strong>可靠性 (Reliability)：</strong> 怎么保证不宕机？</li>
        <li><strong>性能效率 (Performance Efficiency)：</strong> 怎么让系统跑得快，不卡顿？</li>
        <li><strong>成本优化 (Cost Optimization)：</strong> 怎么少花冤枉钱？</li>
        <li><strong>可持续性 (Sustainability)：</strong> 怎么环保？（这是后来新加的）</li>
      </ul>

      <h3>为什么要有这个框架？</h3>
      <p>因为我们很容易偏科。</p>
      <p>有人为了省钱（成本），牺牲了性能。</p>
      <p>有人为了安全，搞得系统很难用（运营）。</p>
      <p>这个框架就是提醒你：<strong>要做权衡 (Trade-offs)。</strong></p>

      <h3>常见误区</h3>
      <div class="misconception">
        <p>
          提到“成本优化”，大家第一反应是：<br />
          <span class="dialogue">“是不是让我买最便宜的服务器？”</span>
        </p>
        <p><strong>错。</strong></p>
        <p>成本优化不是“抠门”，而是“把钱花在刀刃上”。</p>
        <p>有时候你多花钱买个高级服务，省下了雇三个运维人员的工资，这才是真正的成本优化。</p>
      </div>

      <h3>📝 考试提示与常见误区</h3>
      <div style="background: #fffbf0; padding: 25px; border-radius: 10px; border: 2px solid #f0e68c; margin: 30px 0">
        <div style="margin-bottom: 15px">
          <p style="margin: 5px 0; font-size: 17px"><strong>1. 运营卓越</strong></p>
          <p style="margin: 5px 0; font-size: 16px"><strong>❌ 误区：</strong>只看技术不看流程</p>
          <p style="margin: 5px 0; font-size: 16px"><strong>🔑 联想：</strong>自动化、可观测、IaC</p>
        </div>
        <div style="margin-bottom: 15px">
          <p style="margin: 5px 0; font-size: 17px"><strong>2. 安全性</strong></p>
          <p style="margin: 5px 0; font-size: 16px"><strong>❌ 误区：</strong>等同 WAF</p>
          <p style="margin: 5px 0; font-size: 16px"><strong>🔑 联想：</strong>最小权限、加密、集中身份</p>
        </div>
        <div style="margin-bottom: 15px">
          <p style="margin: 5px 0; font-size: 17px"><strong>3. 可靠性</strong></p>
          <p style="margin: 5px 0; font-size: 16px"><strong>❌ 误区：</strong>只有备份无演练</p>
          <p style="margin: 5px 0; font-size: 16px"><strong>🔑 联想：</strong>恢复、故障隔离、冗余</p>
        </div>
        <div style="margin-bottom: 15px">
          <p style="margin: 5px 0; font-size: 17px"><strong>4. 性能效率</strong></p>
          <p style="margin: 5px 0; font-size: 16px"><strong>❌ 误区：</strong>一味选最大规格</p>
          <p style="margin: 5px 0; font-size: 16px"><strong>🔑 联想：</strong>服务匹配、Serverless、专用库</p>
        </div>
        <div style="margin-bottom: 15px">
          <p style="margin: 5px 0; font-size: 17px"><strong>5. 成本优化</strong></p>
          <p style="margin: 5px 0; font-size: 16px"><strong>❌ 误区：</strong>只迷降价</p>
          <p style="margin: 5px 0; font-size: 16px"><strong>🔑 联想：</strong>标签、CE、预算、预留实例</p>
        </div>
        <div style="margin-bottom: 15px">
          <p style="margin: 5px 0; font-size: 17px"><strong>6. 可持续性</strong></p>
          <p style="margin: 5px 0; font-size: 16px"><strong>❌ 误区：</strong>性能冲突时忽略节能</p>
          <p style="margin: 5px 0; font-size: 16px"><strong>🔑 联想：</strong>利用率、碳足迹、高效资源</p>
        </div>
        <div style="margin-top: 15px; padding: 15px; background: #fff; border-radius: 5px">
          <p style="margin: 0; font-size: 16px; color: #666">
            <strong>💡 考点提示：</strong
            >题目出现"最佳实践六大支柱/治理工具"时，按上述支柱要点匹配。记住成本优化不只是降价，而是<strong>架构选择</strong>（如用
            Lambda 替代 EC2）。
          </p>
        </div>
      </div>

      <div class="takeaway-box">
        <div class="takeaway-title">你现在要记住的只有一句话</div>
        <p class="takeaway-text">这不是技术文档，这是 AWS 给你的一份“防坑检查清单”，盖房子前先对着看一遍。</p>
      </div>
    </div>
    <hr class="separator" />

    <!-- 第6讲 -->
    <div class="lecture-container">
      <div class="lecture-title">`,
    keyTakeaway: ``,
    misconception: ``,
    examTips: `</strong
            >题目出现"最佳实践六大支柱/治理工具"时，按上述支柱要点匹配。记住成本优化不只是降价，而是<strong>架构选择</strong>（如用
            Lambda 替代 EC2）。
          </p>
        </div>
      </div>`
  },
  {
    id: 6,
    title: `AWS CAF 云采用框架 (Cloud Adoption Framework)</div>`,
    content: `<h3>上云不是买电脑，是健身</h3>
      <p>很多公司以为上云就是“买点服务器”。</p>
      <p>结果技术是买来了，人不会用，流程跟不上。</p>
      <h3>CAF 就是你的“健身私教计划”</h3>
      <p>它告诉你，想从“传统胖子”变成“云端型男”，得从六个方面（视角）改变：</p>
      <ul>
        <li><strong>商业、人员、治理：</strong> 这是非技术视角（怎么管人、怎么算账）。</li>
        <li><strong>平台、安全、运营：</strong> 这是技术视角（怎么搭系统）。</li>
      </ul>
      <p>缺一个，都会练废。</p>
      <div class="misconception">
        <p><strong>❌ 误区：</strong>以为 CAF 是一个 AWS 工具或软件。</p>
        <p>CAF 是一套<strong>方法论</strong>和<strong>白皮书</strong>，不是控制台里的按钮。</p>
      </div>
      <h3>📝 考试提示与常见误区</h3>
      <div style="background: #fffbf0; padding: 25px; border-radius: 10px; border: 2px solid #f0e68c; margin: 30px 0">
        <div style="margin-bottom: 20px">
          <p style="margin: 0; font-size: 18px"><strong>❌ 误区：</strong>与 Well-Architected 混淆</p>
        </div>
        <div>
          <p style="margin: 0; font-size: 18px">
            <strong>🔑 联想关键词：</strong>组织变革 / 人员能力 / 业务目标 / 6个视角
          </p>
        </div>
        <div style="margin-top: 15px; padding: 15px; background: #fff; border-radius: 5px">
          <p style="margin: 0; font-size: 16px; color: #666">
            <strong>💡 考点提示：</strong>题目提到“组织转型”、“云采用策略”、“非技术人员的角色”，选
            <strong>CAF</strong>。题目提到“架构设计检查”、“技术最佳实践”，选 <strong>Well-Architected</strong>。
          </p>
        </div>
      </div>
      <div class="takeaway-box">
        <div class="takeaway-title">你现在要记住的只有一句话</div>
        <p class="takeaway-text">CAF 不是软件，是一套教公司“怎么适应云”的方法论。</p>
      </div>
    </div>
    <hr class="separator" />

    <!-- 第7讲 -->
    <div class="lecture-container">
      <div class="lecture-title">`,
    keyTakeaway: ``,
    misconception: ``,
    examTips: `</strong>题目提到“组织转型”、“云采用策略”、“非技术人员的角色”，选
            <strong>CAF</strong>。题目提到“架构设计检查”、“技术最佳实践”，选 <strong>Well-Architected</strong>。
          </p>
        </div>
      </div>
      <div class="takeaway-box">
        <div class="takeaway-title">你现在要记住的只有一句话</div>
        <p class="takeaway-text">CAF 不是软件，是一套教公司“怎么适应云”的方法论。</p>
      </div>
    </div>
    <hr class="separator" />`
  },
  {
    id: 7,
    title: `IaaS/PaaS/SaaS 基本模型</div>`,
    content: `<h3>披萨服务理论</h3>
      <p>这三个词是云的基础，用吃披萨来比喻最清楚：</p>
      <ul>
        <li>
          <strong>IaaS (基础设施即服务) = 买半成品披萨回家烤：</strong> 比如 EC2。AWS
          给面饼和炉子，你负责烤（装系统、管软件）。
        </li>
        <li>
          <strong>PaaS (平台即服务) = 点外卖：</strong> 比如
          RDS、Lambda。披萨已经烤好了，你只需要准备桌子吃就行（只管代码，不管系统）。
        </li>
        <li><strong>SaaS (软件即服务) = 去必胜客吃：</strong> 比如 Gmail、AWS Console。你什么都不用管，张嘴吃就行。</li>
      </ul>
      <div class="misconception">
        <p><strong>❌ 误区：</strong>Lambda 是 IaaS。</p>
        <p>Lambda 是典型的 PaaS（甚至叫 FaaS），你不需要管操作系统。</p>
      </div>
      <h3>📝 考试提示与常见误区</h3>
      <div style="background: #fffbf0; padding: 25px; border-radius: 10px; border: 2px solid #f0e68c; margin: 30px 0">
        <div style="margin-bottom: 20px">
          <p style="margin: 0; font-size: 18px">
            <strong>❌ 误区：</strong>把 RDS 当 PaaS/或将 SaaS 与无服务器混为一谈
          </p>
        </div>
        <div>
          <p style="margin: 0; font-size: 18px">
            <strong>🔑 联想关键词：</strong>IaaS = 基础设施/管理员/EC2 | PaaS = 开发者/Lambda/Elastic Beanstalk | SaaS =
            最终用户/Gmail
          </p>
        </div>
        <div style="margin-top: 15px; padding: 15px; background: #fff; border-radius: 5px">
          <p style="margin: 0; font-size: 16px; color: #666">
            <strong>💡 考点提示：</strong>题目问“需要最大控制权”，选
            <strong>IaaS</strong>。问“只关注代码，不关注服务器”，选 <strong>PaaS</strong>。
          </p>
        </div>
      </div>
      <div class="takeaway-box">
        <div class="takeaway-title">你现在要记住的只有一句话</div>
        <p class="takeaway-text">越往 SaaS 走，你做的事越少，AWS 做的事越多。</p>
      </div>
    </div>
    <hr class="separator" />

    <!-- 第8讲 -->
    <div class="lecture-container">
      <div class="lecture-title">`,
    keyTakeaway: ``,
    misconception: ``,
    examTips: `</strong>题目问“需要最大控制权”，选
            <strong>IaaS</strong>。问“只关注代码，不关注服务器”，选 <strong>PaaS</strong>。
          </p>
        </div>
      </div>
      <div class="takeaway-box">
        <div class="takeaway-title">你现在要记住的只有一句话</div>
        <p class="takeaway-text">越往 SaaS 走，你做的事越少，AWS 做的事越多。</p>
      </div>
    </div>
    <hr class="separator" />`
  },
  {
    id: 8,
    title: `云经济学与 TCO (Total Cost of Ownership)</div>`,
    content: `<h3>买车 vs 租车</h3>
      <p>TCO（总拥有成本）就是算一笔账：</p>
      <p>
        <strong>自己买服务器（传统）：</strong>
        就像买车。你要付全款，还要付保险、保养费、停车费、折旧费。就算车停着不开，也在亏钱。
      </p>
      <p>
        <strong>上云：</strong>
        就像打车。车费可能看起来比油费贵，但你不用付保险、保养、停车费。综合算下来（TCO），可能反而便宜。
      </p>
      <div class="misconception">
        <p><strong>❌ 误区：</strong>只比较“服务器硬件价格”和“云租赁价格”。</p>
        <p>必须把电费、机房租金、运维人员工资、空调费都算进去，这才是 TCO。</p>
      </div>
      <h3>📝 考试提示与常见误区</h3>
      <div style="background: #fffbf0; padding: 25px; border-radius: 10px; border: 2px solid #f0e68c; margin: 30px 0">
        <div style="margin-bottom: 20px">
          <p style="margin: 0; font-size: 18px"><strong>❌ 误区：</strong>忽视数据传出费用导致低估成本</p>
        </div>
        <div>
          <p style="margin: 0; font-size: 18px">
            <strong>🔑 联想关键词：</strong>隐性成本 / 运维开销 / 规模经济 / 弹性成本
          </p>
        </div>
        <div style="margin-top: 15px; padding: 15px; background: #fff; border-radius: 5px">
          <p style="margin: 0; font-size: 16px; color: #666">
            <strong>💡 考点提示：</strong>题目问“如何评估上云的成本效益”，选 <strong>AWS Pricing Calculator</strong> 或
            <strong>Migration Evaluator</strong> (用于TCO评估)。
          </p>
        </div>
      </div>
      <div class="takeaway-box">
        <div class="takeaway-title">你现在要记住的只有一句话</div>
        <p class="takeaway-text">算账不能只算“买菜钱”，还要算“做饭的时间”和“洗碗的水电”。</p>
      </div>
    </div>
    <hr class="separator" />

    <!-- 第9讲 -->
    <div class="lecture-container">
      <div class="lecture-title">`,
    keyTakeaway: ``,
    misconception: ``,
    examTips: `</strong>题目问“如何评估上云的成本效益”，选 <strong>AWS Pricing Calculator</strong> 或
            <strong>Migration Evaluator</strong> (用于TCO评估)。
          </p>
        </div>
      </div>
      <div class="takeaway-box">
        <div class="takeaway-title">你现在要记住的只有一句话</div>
        <p class="takeaway-text">算账不能只算“买菜钱”，还要算“做饭的时间”和“洗碗的水电”。</p>
      </div>
    </div>
    <hr class="separator" />`
  },
  {
    id: 9,
    title: `共享服务术语 (Managed Services)</div>`,
    content: `<h3>什么叫“托管” (Managed)？</h3>
      <p>想象你去酒店。</p>
      <ul>
        <li><strong>非托管 (Unmanaged)：</strong> 像住民宿。毛巾自己洗，垃圾自己倒。你自由，但你累。（例子：EC2）</li>
        <li><strong>托管 (Managed)：</strong> 像住五星级酒店。有人打扫卫生，有人换床单。你只管住。（例子：RDS）</li>
      </ul>
      <p>AWS 帮你干的杂活越多，就越“托管”。</p>
      <div class="misconception">
        <p><strong>❌ 误区：</strong>以为托管服务就是“完全不用管”。</p>
        <p>RDS 是托管的，但你还得自己建数据库账号，优化 SQL 语句。</p>
      </div>
      <h3>📝 考试提示与常见误区</h3>
      <div style="background: #fffbf0; padding: 25px; border-radius: 10px; border: 2px solid #f0e68c; margin: 30px 0">
        <div style="margin-bottom: 20px">
          <p style="margin: 0; font-size: 18px"><strong>❌ 误区：</strong>把托管服务误解为“完全无需配置”</p>
        </div>
        <div>
          <p style="margin: 0; font-size: 18px">
            <strong>🔑 联想关键词：</strong>减少运维负担 / 自动打补丁 / 自动备份 / 高可用
          </p>
        </div>
        <div style="margin-top: 15px; padding: 15px; background: #fff; border-radius: 5px">
          <p style="margin: 0; font-size: 16px; color: #666">
            <strong>💡 考点提示：</strong>题目问“为了减少管理开销”，优先选 <strong>Managed Services</strong> (如 RDS,
            Lambda, DynamoDB) 而不是 EC2。
          </p>
        </div>
      </div>
      <div class="takeaway-box">
        <div class="takeaway-title">你现在要记住的只有一句话</div>
        <p class="takeaway-text">托管就是“花钱买时间”，让 AWS 帮你干脏活累活。</p>
      </div>
    </div>
    <hr class="separator" />

    <!-- 第10讲 -->
    <div class="lecture-container">
      <div class="lecture-title">`,
    keyTakeaway: ``,
    misconception: ``,
    examTips: `</strong>题目问“为了减少管理开销”，优先选 <strong>Managed Services</strong> (如 RDS,
            Lambda, DynamoDB) 而不是 EC2。
          </p>
        </div>
      </div>
      <div class="takeaway-box">
        <div class="takeaway-title">你现在要记住的只有一句话</div>
        <p class="takeaway-text">托管就是“花钱买时间”，让 AWS 帮你干脏活累活。</p>
      </div>
    </div>
    <hr class="separator" />`
  },
  {
    id: 10,
    title: `IAM 基础 (Identity and Access Management)</div>`,
    content: `<h3>这是 AWS 的“保安室”</h3>
      <p>IAM 控制谁能进你的 AWS 账号，进来了能干什么。</p>
      <p>三个核心角色：</p>
      <ul>
        <li><strong>User (用户)：</strong> 具体的“人”。比如张三、李四。每人一个账号密码。</li>
        <li>
          <strong>Group (组)：</strong> “部门”。比如“开发组”、“财务组”。把张三扔进开发组，他就自动拥有开发组的权限。
        </li>
        <li>
          <strong>Role (角色)：</strong> 这是一个“帽子”或“工牌”。谁戴上这个帽子，谁就有对应的权力。它不属于某个人，EC2
          可以戴，Lambda 可以戴，甚至外部人员也可以临时戴一下。
        </li>
      </ul>
      <div class="misconception">
        <p><strong>❌ 误区：</strong>把 Role 当 User 用。</p>
        <p>Role 是<strong>临时</strong>的，没有密码，只有临时密钥。User 是<strong>长期</strong>的，有密码或密钥。</p>
      </div>
      <h3>📝 考试提示与常见误区</h3>
      <div style="background: #fffbf0; padding: 25px; border-radius: 10px; border: 2px solid #f0e68c; margin: 30px 0">
        <div style="margin-bottom: 20px">
          <p style="margin: 0; font-size: 18px"><strong>❌ 误区：</strong>IAM 是收费的 / 它是地区性的</p>
          <p>IAM 是<strong>全球性</strong>服务（Global），而且<strong>完全免费</strong>。</p>
        </div>
        <div>
          <p style="margin: 0; font-size: 18px">
            <strong>🔑 联想关键词：</strong>全球服务 / 免费 / 最小权限原则 / 身份管理
          </p>
        </div>
        <div style="margin-top: 15px; padding: 15px; background: #fff; border-radius: 5px">
          <p style="margin: 0; font-size: 16px; color: #666">
            <strong>💡 考点提示：</strong>题目问“EC2 需要访问 S3，最安全的做法”，选
            <strong>给 EC2 绑定一个 IAM Role</strong>。绝对不要把 Access Key 写在代码里！
          </p>
        </div>
      </div>
      <div class="takeaway-box">
        <div class="takeaway-title">你现在要记住的只有一句话</div>
        <p class="takeaway-text">能用“帽子” (Role) 解决的问题，绝对不要发“钥匙” (User Key)。</p>
      </div>
    </div>
    <hr class="separator" />

    <!-- 第11讲 -->
    <div class="lecture-container">
      <div class="lecture-title">`,
    keyTakeaway: ``,
    misconception: ``,
    examTips: `</strong>题目问“EC2 需要访问 S3，最安全的做法”，选
            <strong>给 EC2 绑定一个 IAM Role</strong>。绝对不要把 Access Key 写在代码里！
          </p>
        </div>
      </div>
      <div class="takeaway-box">
        <div class="takeaway-title">你现在要记住的只有一句话</div>
        <p class="takeaway-text">能用“帽子” (Role) 解决的问题，绝对不要发“钥匙” (User Key)。</p>
      </div>
    </div>
    <hr class="separator" />`
  },
  {
    id: 11,
    title: `IAM 策略类型 (Policies)</div>`,
    content: `<h3>保安手里的“准入规则书”</h3>
      <p>IAM Policy 就是一张 JSON 格式的纸，上面写着：</p>
      <p>“允许 (Allow) 张三 (Principal) 对 S3 桶 (Resource) 做 读取 (Action) 操作。”</p>
      <p>如果你没给这张纸，AWS 默认是<strong>拒绝 (Deny)</strong> 一切的。</p>
      <div class="misconception">
        <p><strong>❌ 误区：</strong>以为不写 Deny 就是 Allow。</p>
        <p>错！AWS 默认是隐式拒绝。必须显式 Allow 才能通过。</p>
      </div>
      <h3>📝 考试提示与常见误区</h3>
      <div style="background: #fffbf0; padding: 25px; border-radius: 10px; border: 2px solid #f0e68c; margin: 30px 0">
        <div style="margin-bottom: 20px">
          <p style="margin: 0; font-size: 18px"><strong>❌ 误区：</strong>策略评估顺序不了解</p>
          <p>
            顺序：<strong>显式 Deny > 显式 Allow > 默认 Deny</strong>。只要有一条 Deny，哪怕有 100 条 Allow 也没用。
          </p>
        </div>
        <div>
          <p style="margin: 0; font-size: 18px">
            <strong>🔑 联想关键词：</strong>JSON / Effect(Allow/Deny) / Action / Resource
          </p>
        </div>
        <div style="margin-top: 15px; padding: 15px; background: #fff; border-radius: 5px">
          <p style="margin: 0; font-size: 16px; color: #666">
            <strong>💡 考点提示：</strong>题目问“如何跨账号授权”，答案通常涉及
            <strong>Resource-based Policy</strong> (如 S3 Bucket Policy)。
          </p>
        </div>
      </div>
      <div class="takeaway-box">
        <div class="takeaway-title">你现在要记住的只有一句话</div>
        <p class="takeaway-text">AWS 是“默认全关”，你想开什么门，必须亲笔写条子。</p>
      </div>
    </div>
    <hr class="separator" />

    <!-- 第12讲 -->
    <div class="lecture-container">
      <div class="lecture-title">`,
    keyTakeaway: ``,
    misconception: ``,
    examTips: `</strong>题目问“如何跨账号授权”，答案通常涉及
            <strong>Resource-based Policy</strong> (如 S3 Bucket Policy)。
          </p>
        </div>
      </div>
      <div class="takeaway-box">
        <div class="takeaway-title">你现在要记住的只有一句话</div>
        <p class="takeaway-text">AWS 是“默认全关”，你想开什么门，必须亲笔写条子。</p>
      </div>
    </div>
    <hr class="separator" />`
  },
  {
    id: 12,
    title: `多因素认证 MFA (Multi-Factor Authentication)</div>`,
    content: `<h3>两把钥匙才安全</h3>
      <p>只有密码（你知道的东西）是不够的。</p>
      <p>MFA 就是加一把锁：手机验证码（你拥有的东西）。</p>
      <p>就像去银行取大额现金，光有密码不行，还得有 U 盾。</p>
      <div class="misconception">
        <p><strong>❌ 误区：</strong>觉得开了 MFA 就不用管权限最小化了。</p>
      </div>
      <h3>📝 考试提示与常见误区</h3>
      <div style="background: #fffbf0; padding: 25px; border-radius: 10px; border: 2px solid #f0e68c; margin: 30px 0">
        <div style="margin-bottom: 20px">
          <p style="margin: 0; font-size: 18px"><strong>❌ 误区：</strong>以为 MFA 必须买硬件设备</p>
          <p>可以用手机 App (Virtual MFA) 免费实现，比如 Google Authenticator。</p>
        </div>
        <div>
          <p style="margin: 0; font-size: 18px"><strong>🔑 联想关键词：</strong>Root 账户 / 额外保护 / 密码+设备</p>
        </div>
        <div style="margin-top: 15px; padding: 15px; background: #fff; border-radius: 5px">
          <p style="margin: 0; font-size: 16px; color: #666">
            <strong>💡 考点提示：</strong>题目出现“Root 账户安全”或“最高安全级别登录”，答案必选
            <strong>Enable MFA</strong>。
          </p>
        </div>
      </div>
      <div class="takeaway-box">
        <div class="takeaway-title">你现在要记住的只有一句话</div>
        <p class="takeaway-text">Root 账户不开 MFA，就像裸奔。</p>
      </div>
    </div>
    <hr class="separator" />

    <!-- 第13讲 -->
    <div class="lecture-container">
      <div class="lecture-title">`,
    keyTakeaway: ``,
    misconception: ``,
    examTips: `</strong>题目出现“Root 账户安全”或“最高安全级别登录”，答案必选
            <strong>Enable MFA</strong>。
          </p>
        </div>
      </div>
      <div class="takeaway-box">
        <div class="takeaway-title">你现在要记住的只有一句话</div>
        <p class="takeaway-text">Root 账户不开 MFA，就像裸奔。</p>
      </div>
    </div>
    <hr class="separator" />`
  },
  {
    id: 13,
    title: `加密与 KMS (Key Management Service)</div>`,
    content: `<h3>谁拿着钥匙？</h3>
      <p>数据加密就像把东西锁进保险箱。</p>
      <p><strong>KMS</strong> 就是那个帮你保管钥匙、借出钥匙的“钥匙管理员”。</p>
      <p>AWS 的很多服务（EBS, S3, RDS）都可以一键开启加密，背后都是 KMS 在干活。</p>
      <div class="misconception">
        <p><strong>❌ 误区：</strong>以为 KMS 能看到你的数据。</p>
        <p>KMS 只管钥匙，不管数据。它解密出数据密钥，数据密钥再解密数据。</p>
      </div>
      <h3>📝 考试提示与常见误区</h3>
      <div style="background: #fffbf0; padding: 25px; border-radius: 10px; border: 2px solid #f0e68c; margin: 30px 0">
        <div style="margin-bottom: 20px">
          <p style="margin: 0; font-size: 18px"><strong>❌ 误区：</strong>加密 (Encryption) vs 编码 (Encoding)</p>
          <p>Base64 是编码，不是加密。KMS 做的是加密。</p>
        </div>
        <div>
          <p style="margin: 0; font-size: 18px">
            <strong>🔑 联想关键词：</strong>CMK (客户主密钥) / 静态加密 (At-rest) / 托管密钥
          </p>
        </div>
        <div style="margin-top: 15px; padding: 15px; background: #fff; border-radius: 5px">
          <p style="margin: 0; font-size: 16px; color: #666">
            <strong>💡 考点提示：</strong>题目问“如何确保硬盘数据不被直接读取”，选 <strong>EBS Encryption</strong> (使用
            KMS)。
          </p>
        </div>
      </div>
      <div class="takeaway-box">
        <div class="takeaway-title">你现在要记住的只有一句话</div>
        <p class="takeaway-text">KMS 是 AWS 的“配钥匙师傅”，它管钥匙，你管数据。</p>
      </div>
    </div>
    <hr class="separator" />

    <!-- 第14讲 -->
    <div class="lecture-container">
      <div class="lecture-title">`,
    keyTakeaway: ``,
    misconception: ``,
    examTips: `</strong>题目问“如何确保硬盘数据不被直接读取”，选 <strong>EBS Encryption</strong> (使用
            KMS)。
          </p>
        </div>
      </div>
      <div class="takeaway-box">
        <div class="takeaway-title">你现在要记住的只有一句话</div>
        <p class="takeaway-text">KMS 是 AWS 的“配钥匙师傅”，它管钥匙，你管数据。</p>
      </div>
    </div>
    <hr class="separator" />`
  },
  {
    id: 14,
    title: `网络安全 (Security Groups vs NACL)</div>`,
    content: `<h3>公寓保安 vs 小区大门门卫</h3>
      <p>这俩经常搞混，其实很简单：</p>
      <ul>
        <li>
          <strong>Security Group (安全组)：</strong>
          是<strong>“公寓门口的保安”</strong>（针对实例）。他很聪明（有状态）。你出去的时候他认识你，回来时就直接放行，不用再查证。
        </li>
        <li>
          <strong>NACL (网络访问控制列表)：</strong>
          是<strong>“小区最外面的检查站”</strong>（针对子网）。他很死板（无状态）。你出去查一次身份证，回来还得查一次，他记不住你是刚才出去的那个人。
        </li>
      </ul>
      <div class="misconception">
        <p><strong>❌ 误区：</strong>Security Group 可以拒绝某个 IP。</p>
        <p>SG 只能设置“允许”，不能设置“拒绝”（没有 Deny 规则）。想拒绝坏人 IP，得用 NACL。</p>
      </div>
      <h3>📝 考试提示与常见误区</h3>
      <div style="background: #fffbf0; padding: 25px; border-radius: 10px; border: 2px solid #f0e68c; margin: 30px 0">
        <div style="margin-bottom: 20px">
          <p style="margin: 0; font-size: 18px"><strong>❌ 误区：</strong>SG 与 NACL 作用层级和规则类型混淆</p>
        </div>
        <div>
          <p style="margin: 0; font-size: 18px">
            <strong>🔑 联想关键词：</strong>SG = 实例级/有状态/只有Allow | NACL = 子网级/无状态/有Allow和Deny
          </p>
        </div>
        <div style="margin-top: 15px; padding: 15px; background: #fff; border-radius: 5px">
          <p style="margin: 0; font-size: 16px; color: #666">
            <strong>💡 考点提示：</strong>题目问“如何屏蔽特定恶意 IP”，选 <strong>NACL</strong> (添加 Deny
            规则)。题目问“Web 服务器无法响应请求”，检查 NACL 的
            <strong>出站规则 (Outbound)</strong> 是否放行了临时端口。
          </p>
        </div>
      </div>
      <div class="takeaway-box">
        <div class="takeaway-title">你现在要记住的只有一句话</div>
        <p class="takeaway-text">SG 是智能保镖（记性好），NACL 是死板门卫（查两遍）。想要屏蔽坏人，找门卫（NACL）。</p>
      </div>
    </div>
    <hr class="separator" />

    <!-- 第15讲 -->
    <div class="lecture-container">
      <div class="lecture-title">`,
    keyTakeaway: ``,
    misconception: ``,
    examTips: `</strong>题目问“如何屏蔽特定恶意 IP”，选 <strong>NACL</strong> (添加 Deny
            规则)。题目问“Web 服务器无法响应请求”，检查 NACL 的
            <strong>出站规则 (Outbound)</strong> 是否放行了临时端口。
          </p>
        </div>
      </div>
      <div class="takeaway-box">
        <div class="takeaway-title">你现在要记住的只有一句话</div>
        <p class="takeaway-text">SG 是智能保镖（记性好），NACL 是死板门卫（查两遍）。想要屏蔽坏人，找门卫（NACL）。</p>
      </div>
    </div>
    <hr class="separator" />`
  },
  {
    id: 15,
    title: `WAF 与 Shield</div>`,
    content: `<h3>防小偷 vs 防暴徒</h3>
      <ul>
        <li>
          <strong>WAF (Web Application Firewall)：</strong> 是<strong>防小偷</strong>的。它检查每一个进来的包裹（HTTP
          请求），看里面有没有炸弹（SQL 注入、跨站脚本）。它懂应用层的语言。
        </li>
        <li>
          <strong>Shield：</strong> 是<strong>防暴徒</strong>（DDoS
          攻击）的。如果有几万个人同时堵在你门口不让你做生意，Shield 负责把他们推开。
        </li>
      </ul>
      <div class="misconception">
        <p><strong>❌ 误区：</strong>以为有了 WAF 就不怕 DDoS。</p>
        <p>WAF 处理不了大规模流量攻击，那是 Shield 的活。</p>
      </div>
      <h3>📝 考试提示与常见误区</h3>
      <div style="background: #fffbf0; padding: 25px; border-radius: 10px; border: 2px solid #f0e68c; margin: 30px 0">
        <div style="margin-bottom: 20px">
          <p style="margin: 0; font-size: 18px"><strong>❌ 误区：</strong>把 WAF 当 DDoS 防护或反之</p>
        </div>
        <div>
          <p style="margin: 0; font-size: 18px">
            <strong>🔑 联想关键词：</strong>WAF = SQL 注入/XSS/Layer 7 | Shield = DDoS/流量洪水
          </p>
        </div>
        <div style="margin-top: 15px; padding: 15px; background: #fff; border-radius: 5px">
          <p style="margin: 0; font-size: 16px; color: #666">
            <strong>💡 考点提示：</strong>Shield Standard 是<strong>免费</strong>默认开启的。Shield Advanced
            是付费的（提供更高保护和费用报销）。
          </p>
        </div>
      </div>
      <div class="takeaway-box">
        <div class="takeaway-title">你现在要记住的只有一句话</div>
        <p class="takeaway-text">WAF 防“坏请求”，Shield 防“多请求”。</p>
      </div>
    </div>
    <hr class="separator" />

    <!-- 第16讲 -->
    <div class="lecture-container">
      <div class="lecture-title">`,
    keyTakeaway: ``,
    misconception: ``,
    examTips: `</strong>Shield Standard 是<strong>免费</strong>默认开启的。Shield Advanced
            是付费的（提供更高保护和费用报销）。
          </p>
        </div>
      </div>
      <div class="takeaway-box">
        <div class="takeaway-title">你现在要记住的只有一句话</div>
        <p class="takeaway-text">WAF 防“坏请求”，Shield 防“多请求”。</p>
      </div>
    </div>
    <hr class="separator" />`
  },
  {
    id: 16,
    title: `CloudTrail vs CloudWatch</div>`,
    content: `<h3>监控录像 vs 仪表盘</h3>
      <ul>
        <li>
          <strong>CloudTrail (审计)：</strong> 是<strong>CCTV 录像</strong
          >。它记录“谁、在什么时候、干了什么”。比如“张三在 2:00 删除了一台服务器”。它是用来“秋后算账”的。
        </li>
        <li>
          <strong>CloudWatch (监控)：</strong> 是<strong>汽车仪表盘</strong>。它显示“CPU 占用率
          90%”、“内存快满了”。它是用来“看运行状态”的。
        </li>
      </ul>
      <div class="misconception">
        <p><strong>❌ 误区：</strong>想看 CPU 占用率去找 CloudTrail。</p>
        <p>CloudTrail 只记 API 调用（动作），不记性能指标。</p>
      </div>
      <h3>📝 考试提示与常见误区</h3>
      <div style="background: #fffbf0; padding: 25px; border-radius: 10px; border: 2px solid #f0e68c; margin: 30px 0">
        <div style="margin-bottom: 20px">
          <p style="margin: 0; font-size: 18px"><strong>❌ 误区：</strong>把 CloudTrail 当监控告警系统</p>
        </div>
        <div>
          <p style="margin: 0; font-size: 18px">
            <strong>🔑 联想关键词：</strong>Trail = 审计/历史/Who did what | Watch = 性能/日志/告警/Metrics
          </p>
        </div>
        <div style="margin-top: 15px; padding: 15px; background: #fff; border-radius: 5px">
          <p style="margin: 0; font-size: 16px; color: #666">
            <strong>💡 考点提示：</strong>题目问“审计合规”、“追踪用户行为”选
            <strong>CloudTrail</strong>。题目问“设置资源利用率报警”选 <strong>CloudWatch</strong>。
          </p>
        </div>
      </div>
      <div class="takeaway-box">
        <div class="takeaway-title">你现在要记住的只有一句话</div>
        <p class="takeaway-text">Trail 查“人”（谁干的），Watch 查“事”（系统累不累）。</p>
      </div>
    </div>
    <hr class="separator" />

    <!-- 第17讲 -->
    <div class="lecture-container">
      <div class="lecture-title">`,
    keyTakeaway: ``,
    misconception: ``,
    examTips: `</strong>题目问“审计合规”、“追踪用户行为”选
            <strong>CloudTrail</strong>。题目问“设置资源利用率报警”选 <strong>CloudWatch</strong>。
          </p>
        </div>
      </div>
      <div class="takeaway-box">
        <div class="takeaway-title">你现在要记住的只有一句话</div>
        <p class="takeaway-text">Trail 查“人”（谁干的），Watch 查“事”（系统累不累）。</p>
      </div>
    </div>
    <hr class="separator" />`
  },
  {
    id: 17,
    title: `AWS Artifact</div>`,
    content: `<h3>合规证书档案室</h3>
      <p>如果审计员来查你公司：“你们用的云安全吗？有 ISO 认证吗？”</p>
      <p>你不需要自己去检测 AWS 的机房。</p>
      <p>你直接去 <strong>AWS Artifact</strong> 下载一份 AWS 的合规报告（证书）甩给审计员看就行。</p>
      <div class="misconception">
        <p><strong>❌ 误区：</strong>把 Artifact 当成 Config 或 GuardDuty。</p>
        <p>Artifact 只是"下载报告"的地方，不做实时监控。</p>
      </div>
      <h3>📝 考试提示与常见误区</h3>
      <div style="background: #fffbf0; padding: 25px; border-radius: 10px; border: 2px solid #f0e68c; margin: 30px 0">
        <div style="margin-bottom: 20px">
          <p style="margin: 0; font-size: 18px"><strong>❌ 误区：</strong>与 Config/GuardDuty 目的混淆</p>
        </div>
        <div>
          <p style="margin: 0; font-size: 18px"><strong>🔑 联想关键词：</strong>合规报告、ISO/SOC/PCI、审计资料存取</p>
        </div>
        <div style="margin-top: 15px; padding: 15px; background: #fff; border-radius: 5px">
          <p style="margin: 0; font-size: 16px; color: #666">
            <strong>💡 考点提示：</strong>题目说"需要合规证书给审计"选 <strong>Artifact</strong>。
          </p>
        </div>
      </div>
      <div class="takeaway-box">
        <div class="takeaway-title">你现在要记住的只有一句话</div>
        <p class="takeaway-text">Artifact 是 AWS 的"荣誉证书柜"，专门给你下载合规报告。</p>
      </div>
    </div>
    <hr class="separator" />
  </body>
</html>`,
    keyTakeaway: ``,
    misconception: ``,
    examTips: `</strong>题目说"需要合规证书给审计"选 <strong>Artifact</strong>。
          </p>
        </div>
      </div>
      <div class="takeaway-box">
        <div class="takeaway-title">你现在要记住的只有一句话</div>
        <p class="takeaway-text">Artifact 是 AWS 的"荣誉证书柜"，专门给你下载合规报告。</p>
      </div>
    </div>
    <hr class="separator" />
  </body>
</html>`
  },
  {
    id: 18,
    title: `Secrets Manager vs Parameter Store</div>`,
    content: `<h3>把密码记在哪里？</h3>
      <p>你的代码里需要连数据库，账号密码放哪？写在代码里是大忌。</p>

      <h3>保险箱 vs 记事本</h3>
      <ul>
        <li>
          <strong>Parameter Store (SSM)：</strong>
          就像一个<strong>“加密记事本”</strong>。你可以把配置、密码存进去，免费又好用。
        </li>
        <li>
          <strong>Secrets Manager：</strong>
          是一个<strong>“自动旋转密码的智能保险箱”</strong>。它不仅存密码，还能每隔30天自动帮你把数据库密码改一遍，并告诉你的应用程序新密码。
        </li>
      </ul>

      <div class="misconception">
        <p><strong>❌ 误区：</strong>觉得存密码一定要用 Secrets Manager。</p>
        <p>如果不需要自动轮换（Rotation），Parameter Store（Secure String）更便宜。</p>
      </div>

      <h3>📝 考试提示与常见误区</h3>
      <div style="background: #fffbf0; padding: 25px; border-radius: 10px; border: 2px solid #f0e68c; margin: 30px 0">
        <div style="margin-bottom: 20px">
          <p style="margin: 0; font-size: 18px"><strong>❌ 误区：</strong>混淆两者的核心区别</p>
        </div>
        <div>
          <p style="margin: 0; font-size: 18px">
            <strong>🔑 联想关键词：</strong>Secrets Manager = 自动轮换 (Rotation) / 收费 | Parameter Store = 简单存储 /
            免费 / 层次结构
          </p>
        </div>
        <div style="margin-top: 15px; padding: 15px; background: #fff; border-radius: 5px">
          <p style="margin: 0; font-size: 16px; color: #666">
            <strong>💡 考点提示：</strong>题目看到“自动轮换数据库凭证”，必选
            <strong>Secrets Manager</strong>。题目看到“集中管理配置参数”，选 <strong>Parameter Store</strong>。
          </p>
        </div>
      </div>

      <div class="takeaway-box">
        <div class="takeaway-title">你现在要记住的只有一句话</div>
        <p class="takeaway-text">如果你懒得手动改密码，就花钱用 Secrets Manager。</p>
      </div>
    </div>
    <hr class="separator" />

    <!-- 第19讲 -->
    <div class="lecture-container">
      <div class="lecture-title">`,
    keyTakeaway: ``,
    misconception: ``,
    examTips: `</strong>题目看到“自动轮换数据库凭证”，必选
            <strong>Secrets Manager</strong>。题目看到“集中管理配置参数”，选 <strong>Parameter Store</strong>。
          </p>
        </div>
      </div>`
  },
  {
    id: 19,
    title: `GuardDuty / Inspector / Config</div>`,
    content: `<h3>安全三剑客，各管一摊</h3>
      <p>这三个服务名字听着都像“保安”，但分工完全不同。</p>

      <h3>比喻时刻</h3>
      <ul>
        <li>
          <strong>GuardDuty (智能监控)：</strong>
          像<strong>“大楼的摄像头+AI”</strong>。它看着有没有可疑的人（黑客）在撬门，或者你的服务器是不是在挖矿。它分析的是“行为”。
        </li>
        <li>
          <strong>Inspector (漏洞扫描)：</strong>
          像<strong>“定期上门的消防检查员”</strong>。它深入你的服务器内部，看有没有软件漏洞，有没有忘记打补丁。
        </li>
        <li>
          <strong>Config (配置审计)：</strong>
          像<strong>“监控录像回放”</strong>。它记录你每一次“装修”的历史。比如“上周五谁把防火墙关了？”
        </li>
      </ul>

      <div class="misconception">
        <p><strong>❌ 误区：</strong>以为 GuardDuty 能防病毒。</p>
        <p>GuardDuty 主要是发现“威胁行为”（比如异常流量），不负责杀毒。</p>
      </div>

      <h3>📝 考试提示与常见误区</h3>
      <div style="background: #fffbf0; padding: 25px; border-radius: 10px; border: 2px solid #f0e68c; margin: 30px 0">
        <div style="margin-bottom: 20px">
          <p style="margin: 0; font-size: 18px"><strong>❌ 误区：</strong>三者用途混淆</p>
        </div>
        <div>
          <p style="margin: 0; font-size: 18px">
            <strong>🔑 联想关键词：</strong>GuardDuty = 威胁检测/智能/挖矿 | Inspector = 漏洞/CVE/补丁 | Config =
            历史记录/合规性/时间轴
          </p>
        </div>
        <div style="margin-top: 15px; padding: 15px; background: #fff; border-radius: 5px">
          <p style="margin: 0; font-size: 16px; color: #666">
            <strong>💡 考点提示：</strong>问“检测 EC2 漏洞”选 <strong>Inspector</strong>。问“账号被入侵/挖矿”选
            <strong>GuardDuty</strong>。问“查看资源配置变更历史”选 <strong>Config</strong>。
          </p>
        </div>
      </div>

      <div class="takeaway-box">
        <div class="takeaway-title">你现在要记住的只有一句话</div>
        <p class="takeaway-text">GuardDuty 抓坏人，Inspector 找漏洞，Config 记流水账。</p>
      </div>
    </div>
    <hr class="separator" />

    <!-- 第20讲 -->
    <div class="lecture-container">
      <div class="lecture-title">`,
    keyTakeaway: ``,
    misconception: ``,
    examTips: `</strong>问“检测 EC2 漏洞”选 <strong>Inspector</strong>。问“账号被入侵/挖矿”选
            <strong>GuardDuty</strong>。问“查看资源配置变更历史”选 <strong>Config</strong>。
          </p>
        </div>
      </div>`
  },
  {
    id: 20,
    title: `IAM Identity Center (原 SSO)</div>`,
    content: `<h3>钥匙太多了怎么办？</h3>
      <p>如果你公司有 10 个 AWS 账号，你不想记住 10 套账号密码。</p>

      <h3>万能门禁卡</h3>
      <p><strong>IAM Identity Center</strong> 就是<strong>“一卡通”</strong>。</p>
      <p>你只需要登录一次（Single Sign-On），就能看到所有你有权限进去的 AWS 账号。点击就能直接跳进去，不用再输密码。</p>

      <div class="misconception">
        <p><strong>❌ 误区：</strong>和 IAM 混淆。</p>
        <p>IAM 是管“一个账号”里的权限，Identity Center 是管“跨多个账号”的人员登录。</p>
      </div>

      <h3>📝 考试提示与常见误区</h3>
      <div style="background: #fffbf0; padding: 25px; border-radius: 10px; border: 2px solid #f0e68c; margin: 30px 0">
        <div style="margin-bottom: 20px">
          <p style="margin: 0; font-size: 18px"><strong>❌ 误区：</strong>以为它只是改了个名</p>
        </div>
        <div>
          <p style="margin: 0; font-size: 18px">
            <strong>🔑 联想关键词：</strong>SSO / 集中式身份管理 / 多账号访问 / 连接 Active Directory
          </p>
        </div>
        <div style="margin-top: 15px; padding: 15px; background: #fff; border-radius: 5px">
          <p style="margin: 0; font-size: 16px; color: #666">
            <strong>💡 考点提示：</strong>题目出现“多账号集中登录”、“连接企业现有 AD”，选
            <strong>Identity Center</strong>。
          </p>
        </div>
      </div>

      <div class="takeaway-box">
        <div class="takeaway-title">你现在要记住的只有一句话</div>
        <p class="takeaway-text">它是 AWS 的“员工统一通行证”。</p>
      </div>
    </div>
    <hr class="separator" />

    <!-- 第21讲 -->
    <div class="lecture-container">
      <div class="lecture-title">`,
    keyTakeaway: ``,
    misconception: ``,
    examTips: `</strong>题目出现“多账号集中登录”、“连接企业现有 AD”，选
            <strong>Identity Center</strong>。
          </p>
        </div>
      </div>`
  },
  {
    id: 21,
    title: `Amazon Macie</div>`,
    content: `<h3>你的文件里有秘密吗？</h3>
      <p>S3 里存了几百万个文件，你确定没有员工手滑，把客户的身份证号、信用卡号存进去了吗？</p>

      <h3>敏感数据安检仪</h3>
      <p><strong>Macie</strong> 就像机场的<strong>“X 光安检机”</strong>。</p>
      <p>
        它利用机器学习，专门扫描 S3 桶，自动发现敏感数据（PII），告诉你：“嘿，这个文件里好像有 100
        个信用卡号，而且设成了公开访问！”
      </p>

      <h3>📝 考试提示与常见误区</h3>
      <div style="background: #fffbf0; padding: 25px; border-radius: 10px; border: 2px solid #f0e68c; margin: 30px 0">
        <div style="margin-bottom: 20px">
          <p style="margin: 0; font-size: 18px"><strong>❌ 误区：</strong>以为 Macie 能扫描数据库</p>
        </div>
        <div>
          <p style="margin: 0; font-size: 18px">
            <strong>🔑 联想关键词：</strong>PII（个人身份信息）/ S3 / 数据分类 / 机器学习
          </p>
        </div>
        <div style="margin-top: 15px; padding: 15px; background: #fff; border-radius: 5px">
          <p style="margin: 0; font-size: 16px; color: #666">
            <strong>💡 考点提示：</strong>题目只要出现“发现 S3 中的敏感数据/PII”，秒选 <strong>Macie</strong>。
          </p>
        </div>
      </div>

      <div class="takeaway-box">
        <div class="takeaway-title">你现在要记住的只有一句话</div>
        <p class="takeaway-text">Macie 是专门盯着 S3 找“身份证号”和“信用卡号”的。</p>
      </div>
    </div>
    <hr class="separator" />

    <!-- 第22讲 -->
    <div class="lecture-container">
      <div class="lecture-title">`,
    keyTakeaway: ``,
    misconception: ``,
    examTips: `</strong>题目只要出现“发现 S3 中的敏感数据/PII”，秒选 <strong>Macie</strong>。
          </p>
        </div>
      </div>`
  },
  {
    id: 22,
    title: `AWS CloudHSM</div>`,
    content: `<h3>专用硬件保险柜</h3>
      <p>KMS 是“共享保险库”，大家共用，AWS 帮你管。</p>
      <p>但有些行业（比如银行、政府）法律规定：<strong>“钥匙必须完全掌握在自己手里，AWS 的管理员也不能碰。”</strong></p>

      <h3>这就是 CloudHSM</h3>
      <p>AWS 给你一台<strong>物理的硬件加密机</strong>（Hardware Security Module）。</p>
      <p>这台机器是你独占的。钥匙你拿着，AWS 连看一眼的权限都没有。</p>

      <h3>📝 考试提示与常见误区</h3>
      <div style="background: #fffbf0; padding: 25px; border-radius: 10px; border: 2px solid #f0e68c; margin: 30px 0">
        <div style="margin-bottom: 20px">
          <p style="margin: 0; font-size: 18px"><strong>❌ 误区：</strong>普通加密需求也上 CloudHSM</p>
        </div>
        <div>
          <p style="margin: 0; font-size: 18px">
            <strong>🔑 联想关键词：</strong>FIPS 140-2 Level 3 / 单租户 / 客户完全控制 / 昂贵
          </p>
        </div>
        <div style="margin-top: 15px; padding: 15px; background: #fff; border-radius: 5px">
          <p style="margin: 0; font-size: 16px; color: #666">
            <strong>💡 考点提示：</strong>题目提到“FIPS 140-2 Level 3”或者“AWS 管理员不可访问密钥”，选
            <strong>CloudHSM</strong>。普通加密选 <strong>KMS</strong>。
          </p>
        </div>
      </div>

      <div class="takeaway-box">
        <div class="takeaway-title">你现在要记住的只有一句话</div>
        <p class="takeaway-text">这是给有“洁癖”的合规大户用的专用加密硬件。</p>
      </div>
    </div>
    <hr class="separator" />

    <!-- 第23讲 -->
    <div class="lecture-container">
      <div class="lecture-title">`,
    keyTakeaway: ``,
    misconception: ``,
    examTips: `</strong>题目提到“FIPS 140-2 Level 3”或者“AWS 管理员不可访问密钥”，选
            <strong>CloudHSM</strong>。普通加密选 <strong>KMS</strong>。
          </p>
        </div>
      </div>`
  },
  {
    id: 23,
    title: `AWS Security Hub</div>`,
    content: `<h3>报警太多看不过来？</h3>
      <p>GuardDuty 报警了，Inspector 报警了，Macie 也报警了。</p>
      <p>你要打开三个网页去看吗？</p>

      <h3>安全总控大屏</h3>
      <p><strong>Security Hub</strong> 就是一个<strong>“大仪表盘”</strong>。</p>
      <p>它把所有安全服务的警报收集到一起，统一展示，还能自动检查你是不是符合 CIS、PCI 等安全标准。</p>

      <h3>📝 考试提示与常见误区</h3>
      <div style="background: #fffbf0; padding: 25px; border-radius: 10px; border: 2px solid #f0e68c; margin: 30px 0">
        <div style="margin-bottom: 20px">
          <p style="margin: 0; font-size: 18px"><strong>❌ 误区：</strong>以为它能替代其他安全服务</p>
        </div>
        <div>
          <p style="margin: 0; font-size: 18px"><strong>🔑 联想关键词：</strong>聚合警报 / 统一视图 / 自动化合规检查</p>
        </div>
        <div style="margin-top: 15px; padding: 15px; background: #fff; border-radius: 5px">
          <p style="margin: 0; font-size: 16px; color: #666">
            <strong>💡 考点提示：</strong>题目问“如何统一查看所有安全警报”或“集中管理安全态势”，选
            <strong>Security Hub</strong>。
          </p>
        </div>
      </div>

      <div class="takeaway-box">
        <div class="takeaway-title">你现在要记住的只有一句话</div>
        <p class="takeaway-text">它是帮你整理所有报警信息的“安全新闻联播”。</p>
      </div>
    </div>
    <hr class="separator" />

    <!-- 第24讲 -->
    <div class="lecture-container">
      <div class="lecture-title">`,
    keyTakeaway: ``,
    misconception: ``,
    examTips: `</strong>题目问“如何统一查看所有安全警报”或“集中管理安全态势”，选
            <strong>Security Hub</strong>。
          </p>
        </div>
      </div>`
  },
  {
    id: 24,
    title: `AWS Audit Manager</div>`,
    content: `<h3>审计员要来了！</h3>
      <p>以前应对审计，你要疯狂截图、找日志、填表格，证明你合规。</p>

      <h3>自动化证据收集器</h3>
      <p><strong>Audit Manager</strong> 就像一个<strong>“贴身秘书”</strong>。</p>
      <p>它持续监控你的 AWS 账号，自动收集证据（截图、日志），自动生成审计报告。审计员来了，你直接把报告导给他。</p>

      <h3>📝 考试提示与常见误区</h3>
      <div style="background: #fffbf0; padding: 25px; border-radius: 10px; border: 2px solid #f0e68c; margin: 30px 0">
        <div style="margin-bottom: 20px">
          <p style="margin: 0; font-size: 18px"><strong>❌ 误区：</strong>和 Artifact 混淆</p>
        </div>
        <div>
          <p style="margin: 0; font-size: 18px"><strong>🔑 联想关键词：</strong>收集证据 / 持续审计 / 自动生成报告</p>
        </div>
        <div style="margin-top: 15px; padding: 15px; background: #fff; border-radius: 5px">
          <p style="margin: 0; font-size: 16px; color: #666">
            <strong>💡 考点提示：</strong><strong>Artifact</strong> 是下载 AWS 的证书；<strong>Audit Manager</strong>
            是生成你自己的证书证据。
          </p>
        </div>
      </div>

      <div class="takeaway-box">
        <div class="takeaway-title">你现在要记住的只有一句话</div>
        <p class="takeaway-text">它帮你自动干“收集证据”的苦力活。</p>
      </div>
    </div>
    <hr class="separator" />

    <!-- 第25讲 -->
    <div class="lecture-container">
      <div class="lecture-title">`,
    keyTakeaway: ``,
    misconception: ``,
    examTips: `</strong><strong>Artifact</strong> 是下载 AWS 的证书；<strong>Audit Manager</strong>
            是生成你自己的证书证据。
          </p>
        </div>
      </div>`
  },
  {
    id: 25,
    title: `EC2 基础 (Elastic Compute Cloud)</div>`,
    content: `<h3>最经典的云服务</h3>
      <p>EC2 就是<strong>“云上的虚拟电脑”</strong>。</p>
      <p>但在 AWS 考题里，你不能只把它当电脑看。你要懂它的“配件”：</p>
      <ul>
        <li>
          <strong>实例类型 (Instance Type)：</strong> 电脑的型号。比如
          t3.micro（小车）、m5.large（中巴）、c5.xlarge（跑车）。
        </li>
        <li><strong>AMI (镜像)：</strong> 电脑的系统盘备份。装系统的光盘。</li>
        <li><strong>User Data：</strong> 开机自动运行的脚本。就像告诉电脑：“你醒来第一件事，先把 web 服务器装好。”</li>
      </ul>

      <div class="misconception">
        <p><strong>❌ 误区：</strong>以为 EC2 关机就不收费。</p>
        <p>
          EC2 关机（Stop）了计算费不收了，但<strong>硬盘（EBS）费还得照付</strong>！除非你把硬盘也删了（Terminate）。
        </p>
      </div>

      <h3>📝 考试提示与常见误区</h3>
      <div style="background: #fffbf0; padding: 25px; border-radius: 10px; border: 2px solid #f0e68c; margin: 30px 0">
        <div style="margin-bottom: 20px">
          <p style="margin: 0; font-size: 18px"><strong>❌ 误区：</strong>把 Spot 实例用于关键数据库</p>
        </div>
        <div>
          <p style="margin: 0; font-size: 18px">
            <strong>🔑 联想关键词：</strong>AMI = 操作系统模板 | User Data = 引导脚本 | Metadata = 实例自身信息
          </p>
        </div>
        <div style="margin-top: 15px; padding: 15px; background: #fff; border-radius: 5px">
          <p style="margin: 0; font-size: 16px; color: #666">
            <strong>💡 考点提示：</strong>题目问“如何让 EC2 启动时自动安装软件”，选
            <strong>User Data</strong>。问“如何获取 EC2 自己的 IP 地址”，选 <strong>Instance Metadata</strong>。
          </p>
        </div>
      </div>

      <div class="takeaway-box">
        <div class="takeaway-title">你现在要记住的只有一句话</div>
        <p class="takeaway-text">EC2 是租来的计算能力，记得给它配好“灵魂”（AMI）和“初指令”（User Data）。</p>
      </div>
    </div>
    <hr class="separator" />

    <!-- 第26讲 -->
    <div class="lecture-container">
      <div class="lecture-title">`,
    keyTakeaway: ``,
    misconception: ``,
    examTips: `</strong>题目问“如何让 EC2 启动时自动安装软件”，选
            <strong>User Data</strong>。问“如何获取 EC2 自己的 IP 地址”，选 <strong>Instance Metadata</strong>。
          </p>
        </div>
      </div>`
  },
  {
    id: 26,
    title: `Auto Scaling 与 ELB</div>`,
    content: `<h3>餐厅迎宾员与人事经理</h3>
      <p>一个高可用的系统，离不开这俩搭档：</p>
      <ul>
        <li>
          <strong>ELB (负载均衡器)：</strong>
          像餐厅的<strong>“迎宾员”</strong>。客人来了，他负责指引：“这桌满了，去那桌。”他保证所有服务员（EC2）都有活干，不会有人忙死有人闲死。
        </li>
        <li>
          <strong>ASG (Auto Scaling Group)：</strong>
          像餐厅的<strong>“人事经理”</strong>。看到客人排队了，立马打电话叫兼职服务员来上班（加机器）；客人走了，就让兼职下班省钱（减机器）。
        </li>
      </ul>

      <div class="misconception">
        <p><strong>❌ 误区：</strong>ASG 只能根据 CPU 扩容。</p>
        <p>ASG 很灵活，可以根据 CPU、内存、甚至你自定义的指标（比如每秒订单数）来扩容。</p>
      </div>

      <h3>📝 考试提示与常见误区</h3>
      <div style="background: #fffbf0; padding: 25px; border-radius: 10px; border: 2px solid #f0e68c; margin: 30px 0">
        <div style="margin-bottom: 20px">
          <p style="margin: 0; font-size: 18px"><strong>❌ 误区：</strong>把 ALB (应用层) 与 NLB (网络层) 搞混</p>
        </div>
        <div>
          <p style="margin: 0; font-size: 18px">
            <strong>🔑 联想关键词：</strong>ALB = HTTP/HTTPS/路径路由 | NLB = TCP/UDP/高性能/静态IP | ASG =
            弹性伸缩/自愈
          </p>
        </div>
        <div style="margin-top: 15px; padding: 15px; background: #fff; border-radius: 5px">
          <p style="margin: 0; font-size: 16px; color: #666">
            <strong>💡 考点提示：</strong>题目问“每秒百万级请求”或“需要静态 IP”，选 <strong>NLB</strong>。问“根据 URL
            路由到不同服务（微服务）”，选 <strong>ALB</strong>。
          </p>
        </div>
      </div>

      <div class="takeaway-box">
        <div class="takeaway-title">你现在要记住的只有一句话</div>
        <p class="takeaway-text">ELB 分发流量，ASG 调整数量。它俩是“弹性”的最佳拍档。</p>
      </div>
    </div>
    <hr class="separator" />

    <!-- 第27讲 -->
    <div class="lecture-container">
      <div class="lecture-title">`,
    keyTakeaway: ``,
    misconception: ``,
    examTips: `</strong>题目问“每秒百万级请求”或“需要静态 IP”，选 <strong>NLB</strong>。问“根据 URL
            路由到不同服务（微服务）”，选 <strong>ALB</strong>。
          </p>
        </div>
      </div>`
  },
  {
    id: 27,
    title: `Lambda 无服务器 (Serverless)</div>`,
    content: `<h3>打车 vs 买车</h3>
      <p>EC2 像买车（或者租车），不管你开不开，车都在那，都要付钱。</p>
      <p><strong>Lambda</strong> 像<strong>“滴滴打车”</strong>。</p>
      <p>有代码要跑（要出门），车就来了。代码跑完（到了目的地），车就消失了。你只付路上的钱。</p>
      <p><strong>Serverless 不是没有服务器，而是你看不见服务器。</strong></p>

      <div class="misconception">
        <p><strong>❌ 误区：</strong>以为 Lambda 适合跑长时间的任务。</p>
        <p>Lambda 最长只能跑 <strong>15 分钟</strong>。超过这个时间，请出门左转找 AWS Batch 或 EC2。</p>
      </div>

      <h3>📝 考试提示与常见误区</h3>
      <div style="background: #fffbf0; padding: 25px; border-radius: 10px; border: 2px solid #f0e68c; margin: 30px 0">
        <div style="margin-bottom: 20px">
          <p style="margin: 0; font-size: 18px"><strong>❌ 误区：</strong>把 Lambda 当成“永远更便宜”的计算</p>
        </div>
        <div>
          <p style="margin: 0; font-size: 18px">
            <strong>🔑 联想关键词：</strong>15分钟限制 / 事件驱动 / 按运行时间收费 / 无状态
          </p>
        </div>
        <div style="margin-top: 15px; padding: 15px; background: #fff; border-radius: 5px">
          <p style="margin: 0; font-size: 16px; color: #666">
            <strong>💡 考点提示：</strong>题目问“短时间、事件触发、无需管理服务器”，选 <strong>Lambda</strong>。
          </p>
        </div>
      </div>

      <div class="takeaway-box">
        <div class="takeaway-title">你现在要记住的只有一句话</div>
        <p class="takeaway-text">Lambda 是“按次计费的代码运行器”，跑完即走，绝不逗留。</p>
      </div>
    </div>
    <hr class="separator" />

    <!-- 第28讲 -->
    <div class="lecture-container">
      <div class="lecture-title">`,
    keyTakeaway: ``,
    misconception: ``,
    examTips: `</strong>题目问“短时间、事件触发、无需管理服务器”，选 <strong>Lambda</strong>。
          </p>
        </div>
      </div>`
  },
  {
    id: 28,
    title: `容器服务 (ECS / EKS / Fargate)</div>`,
    content: `<h3>集装箱运输队</h3>
      <p>Docker 容器就像<strong>“集装箱”</strong>。里面装着你的应用，无论运到哪都能跑。</p>
      <p>在 AWS 上怎么管这些集装箱？</p>
      <ul>
        <li><strong>ECS：</strong> AWS 自家的调度员。简单，好用，和 AWS 结合紧密。</li>
        <li><strong>EKS：</strong> 开源的 Kubernetes 调度员。复杂，强大，大家都用这套标准。</li>
        <li>
          <strong>Fargate：</strong> <strong>“无服务器模式”</strong>。你告诉 AWS：“我有 10
          个集装箱，帮我运走。”你不需要管是用卡车运还是轮船运（不用管底层 EC2）。
        </li>
      </ul>

      <h3>📝 考试提示与常见误区</h3>
      <div style="background: #fffbf0; padding: 25px; border-radius: 10px; border: 2px solid #f0e68c; margin: 30px 0">
        <div style="margin-bottom: 20px">
          <p style="margin: 0; font-size: 18px"><strong>❌ 误区：</strong>Fargate 是一种容器编排工具</p>
        </div>
        <div>
          <p style="margin: 0; font-size: 18px">
            <strong>🔑 联想关键词：</strong>ECS = AWS 原生 | EKS = Kubernetes | Fargate = Serverless 运行模式
          </p>
        </div>
        <div style="margin-top: 15px; padding: 15px; background: #fff; border-radius: 5px">
          <p style="margin: 0; font-size: 16px; color: #666">
            <strong>💡 考点提示：</strong>题目问“最少管理开销运行容器”，选 <strong>Fargate</strong>。问“迁移现有的
            Kubernetes 集群”，选 <strong>EKS</strong>。
          </p>
        </div>
      </div>

      <div class="takeaway-box">
        <div class="takeaway-title">你现在要记住的只有一句话</div>
        <p class="takeaway-text">选 ECS/EKS 是选“谁来指挥”，选 Fargate 是选“要不要管底层机器”。</p>
      </div>
    </div>
    <hr class="separator" />

    <!-- 第29讲 -->
    <div class="lecture-container">
      <div class="lecture-title">`,
    keyTakeaway: ``,
    misconception: ``,
    examTips: `</strong>题目问“最少管理开销运行容器”，选 <strong>Fargate</strong>。问“迁移现有的
            Kubernetes 集群”，选 <strong>EKS</strong>。
          </p>
        </div>
      </div>`
  },
  {
    id: 29,
    title: `AWS Batch</div>`,
    content: `<h3>自助洗衣店</h3>
      <p>如果你有一万件衣服要洗（视频转码、基因测序）。</p>
      <p>你不需要自己去买一万台洗衣机。</p>
      <p>
        <strong>AWS Batch</strong>
        就是<strong>“智能洗衣店老板”</strong>。你把衣服扔给他，他会自动看哪台机器空着，自动排队，自动开机洗，洗完自动关机。你只要等结果。
      </p>

      <div class="misconception">
        <p><strong>❌ 误区：</strong>和 Lambda 混淆。</p>
        <p>Lambda 适合短、快。Batch 适合长、多、不着急。</p>
      </div>

      <h3>📝 考试提示与常见误区</h3>
      <div style="background: #fffbf0; padding: 25px; border-radius: 10px; border: 2px solid #f0e68c; margin: 30px 0">
        <div style="margin-bottom: 20px">
          <p style="margin: 0; font-size: 18px"><strong>❌ 误区：</strong>认为 Batch 是实时处理工具</p>
        </div>
        <div>
          <p style="margin: 0; font-size: 18px"><strong>🔑 联想关键词：</strong>批处理 / 调度 / Spot 实例 / 非实时</p>
        </div>
        <div style="margin-top: 15px; padding: 15px; background: #fff; border-radius: 5px">
          <p style="margin: 0; font-size: 16px; color: #666">
            <strong>💡 考点提示：</strong>题目出现“大规模批处理”、“不需要实时响应”，选
            <strong>Batch</strong>。它通常配合 Spot 实例使用以节省成本。
          </p>
        </div>
      </div>

      <div class="takeaway-box">
        <div class="takeaway-title">你现在要记住的只有一句话</div>
        <p class="takeaway-text">它是专门处理“排队干苦力活”的调度器。</p>
      </div>
    </div>
    <hr class="separator" />

    <!-- 第30讲 -->
    <div class="lecture-container">
      <div class="lecture-title">`,
    keyTakeaway: ``,
    misconception: ``,
    examTips: `</strong>题目出现“大规模批处理”、“不需要实时响应”，选
            <strong>Batch</strong>。它通常配合 Spot 实例使用以节省成本。
          </p>
        </div>
      </div>`
  },
  {
    id: 30,
    title: `AWS Outposts</div>`,
    content: `<h3>把云搬回家</h3>
      <p>有些公司因为法律原因，数据不能出公司大楼；或者要求延迟极低。</p>
      <p><strong>Outposts</strong> 就是 AWS 把<strong>“机柜”</strong>直接运到你的公司机房里。</p>
      <p>这虽然是放在你家的硬件，但它归 AWS 管，用起来和云上一模一样。就像 AWS 在你家租了个房间。</p>

      <h3>📝 考试提示与常见误区</h3>
      <div style="background: #fffbf0; padding: 25px; border-radius: 10px; border: 2px solid #f0e68c; margin: 30px 0">
        <div style="margin-bottom: 20px">
          <p style="margin: 0; font-size: 18px"><strong>❌ 误区：</strong>和 Direct Connect 混淆</p>
        </div>
        <div>
          <p style="margin: 0; font-size: 18px">
            <strong>🔑 联想关键词：</strong>混合云 / 本地机房 / AWS 硬件 / 低延迟
          </p>
        </div>
        <div style="margin-top: 15px; padding: 15px; background: #fff; border-radius: 5px">
          <p style="margin: 0; font-size: 16px; color: #666">
            <strong>💡 考点提示：</strong>题目问“需要使用 AWS API 但数据必须保留在本地机房”，选
            <strong>Outposts</strong>。
          </p>
        </div>
      </div>

      <div class="takeaway-box">
        <div class="takeaway-title">你现在要记住的只有一句话</div>
        <p class="takeaway-text">Outposts 是 AWS 的“驻外大使馆”，开在你家机房里。</p>
      </div>
    </div>
    <hr class="separator" />

    <!-- 第31讲 -->
    <div class="lecture-container">
      <div class="lecture-title">`,
    keyTakeaway: ``,
    misconception: ``,
    examTips: `</strong>题目问“需要使用 AWS API 但数据必须保留在本地机房”，选
            <strong>Outposts</strong>。
          </p>
        </div>
      </div>`
  },
  {
    id: 31,
    title: `S3 桶与访问控制 (Simple Storage Service)</div>`,
    content: `<h3>无限大的网盘</h3>
      <p>S3 就是<strong>“无限大的 Google Drive”</strong>。</p>
      <ul>
        <li><strong>Bucket (桶)：</strong> 顶级文件夹。名字必须<strong>全球唯一</strong>（像域名一样）。</li>
        <li><strong>Object (对象)：</strong> 文件。照片、视频、文档。</li>
      </ul>
      <p>它不是给操作系统装软件用的（那是 EBS），它是给互联网存文件用的。</p>

      <div class="misconception">
        <p><strong>❌ 误区：</strong>以为 S3 是全球服务，数据就自动全球分布。</p>
        <p>
          S3 是“全球命名空间”，但你创建桶时必须选一个<strong>Region</strong>。数据只会呆在那个 Region，除非你配置复制。
        </p>
      </div>

      <h3>📝 考试提示与常见误区</h3>
      <div style="background: #fffbf0; padding: 25px; border-radius: 10px; border: 2px solid #f0e68c; margin: 30px 0">
        <div style="margin-bottom: 20px">
          <p style="margin: 0; font-size: 18px"><strong>❌ 误区：</strong>混淆 S3 桶策略与 IAM 策略</p>
        </div>
        <div>
          <p style="margin: 0; font-size: 18px">
            <strong>🔑 联想关键词：</strong>对象存储 / 全球唯一名称 / 99.999999999% 耐久性 / Block Public Access
          </p>
        </div>
        <div style="margin-top: 15px; padding: 15px; background: #fff; border-radius: 5px">
          <p style="margin: 0; font-size: 16px; color: #666">
            <strong>💡 考点提示：</strong>题目问“跨账号访问 S3”，最常用的方法是配置 <strong>Bucket Policy</strong>。
          </p>
        </div>
      </div>

      <div class="takeaway-box">
        <div class="takeaway-title">你现在要记住的只有一句话</div>
        <p class="takeaway-text">S3 是存“对象”的（图片、文件），不是存“操作系统”的。</p>
      </div>
    </div>
    <hr class="separator" />

    <!-- 第32讲 -->
    <div class="lecture-container">
      <div class="lecture-title">`,
    keyTakeaway: ``,
    misconception: ``,
    examTips: `</strong>题目问“跨账号访问 S3”，最常用的方法是配置 <strong>Bucket Policy</strong>。
          </p>
        </div>
      </div>`
  },
  {
    id: 32,
    title: `S3 存储类别</div>`,
    content: `<h3>放在桌上，还是锁进仓库？</h3>
      <p>文件用的频率不同，存放的地方也应该不同：</p>
      <ul>
        <li><strong>Standard (标准)：</strong> <strong>“办公桌”</strong>。随时拿，最贵。</li>
        <li>
          <strong>Standard-IA (不常访问)：</strong>
          <strong>“档案柜”</strong>。偶尔拿一次，存着便宜，取出来要收一点手续费。
        </li>
        <li>
          <strong>Glacier (冰川)：</strong>
          <strong>“深山老林里的仓库”</strong>。极其便宜，但取出来要等几分钟甚至几小时（解冻）。
        </li>
        <li>
          <strong>Intelligent-Tiering (智能分层)：</strong>
          <strong>“智能秘书”</strong
          >。他观察你，你总不用的文件，他自动帮你扔进档案柜；你突然要用了，他自动帮你拿回办公桌。
        </li>
      </ul>

      <h3>📝 考试提示与常见误区</h3>
      <div style="background: #fffbf0; padding: 25px; border-radius: 10px; border: 2px solid #f0e68c; margin: 30px 0">
        <div style="margin-bottom: 20px">
          <p style="margin: 0; font-size: 18px"><strong>❌ 误区：</strong>误以为 Glacier 可毫秒检索</p>
        </div>
        <div>
          <p style="margin: 0; font-size: 18px">
            <strong>🔑 联想关键词：</strong>Glacier = 归档/便宜/慢 | Intelligent-Tiering = 未知访问模式/自动省钱
          </p>
        </div>
        <div style="margin-top: 15px; padding: 15px; background: #fff; border-radius: 5px">
          <p style="margin: 0; font-size: 16px; color: #666">
            <strong>💡 考点提示：</strong>题目问“访问模式不确定/未知”，选
            <strong>Intelligent-Tiering</strong>。题目问“合规要求保留数据10年/长期归档”，选 <strong>Glacier</strong>。
          </p>
        </div>
      </div>

      <div class="takeaway-box">
        <div class="takeaway-title">你现在要记住的只有一句话</div>
        <p class="takeaway-text">越不常用的数据，存得越深，价格越便宜，但取出来越麻烦。</p>
      </div>
    </div>
    <hr class="separator" />

    <!-- 第33讲 -->
    <div class="lecture-container">
      <div class="lecture-title">`,
    keyTakeaway: ``,
    misconception: ``,
    examTips: `</strong>题目问“访问模式不确定/未知”，选
            <strong>Intelligent-Tiering</strong>。题目问“合规要求保留数据10年/长期归档”，选 <strong>Glacier</strong>。
          </p>
        </div>
      </div>`
  },
  {
    id: 33,
    title: `EBS vs EFS vs S3</div>`,
    content: `<h3>硬盘 vs 共享盘 vs 网盘</h3>
      <p>这三个存东西的地方，千万别搞混：</p>
      <ul>
        <li>
          <strong>EBS (块存储)：</strong> 是 EC2
          的<strong>“C盘/硬盘”</strong>。通常只能插在一台电脑上。快，适合装系统、跑数据库。
        </li>
        <li>
          <strong>EFS (文件存储)：</strong> 是 Linux 的<strong>“网络共享盘 (NAS)”</strong>。可以同时插在几百台 EC2
          上。大家都能读写。
        </li>
        <li>
          <strong>S3 (对象存储)：</strong> 是<strong>“网页上传下载区”</strong>。通过 HTTP 访问，不是插在电脑上的。
        </li>
      </ul>

      <div class="misconception">
        <p><strong>❌ 误区：</strong>想在 EC2 之间共享文件，却用了 EBS。</p>
        <p>EBS 默认只能挂载给一台实例。想共享？请用 EFS 或 S3。</p>
      </div>

      <h3>📝 考试提示与常见误区</h3>
      <div style="background: #fffbf0; padding: 25px; border-radius: 10px; border: 2px solid #f0e68c; margin: 30px 0">
        <div style="margin-bottom: 20px">
          <p style="margin: 0; font-size: 18px">
            <strong>❌ 误区：</strong>把 EFS 当跨 Region 共享文件系统（EFS 是 Region 级别的）
          </p>
        </div>
        <div>
          <p style="margin: 0; font-size: 18px">
            <strong>🔑 联想关键词：</strong>EBS = 单机硬盘/块 | EFS = Linux共享/NFS | S3 = 对象/API访问
          </p>
        </div>
        <div style="margin-top: 15px; padding: 15px; background: #fff; border-radius: 5px">
          <p style="margin: 0; font-size: 16px; color: #666">
            <strong>💡 考点提示：</strong>题目问“Linux 实例间共享文件”，选
            <strong>EFS</strong>。题目问“高性能数据库磁盘”，选 <strong>EBS Provisioned IOPS</strong>。
          </p>
        </div>
      </div>

      <div class="takeaway-box">
        <div class="takeaway-title">你现在要记住的只有一句话</div>
        <p class="takeaway-text">EBS 是私家车（独享），EFS 是班车（共享），S3 是物流中心（存取货）。</p>
      </div>
    </div>
    <hr class="separator" />

    <!-- 第34讲 -->
    <div class="lecture-container">
      <div class="lecture-title">`,
    keyTakeaway: ``,
    misconception: ``,
    examTips: `</strong>题目问“Linux 实例间共享文件”，选
            <strong>EFS</strong>。题目问“高性能数据库磁盘”，选 <strong>EBS Provisioned IOPS</strong>。
          </p>
        </div>
      </div>`
  },
  {
    id: 34,
    title: `生命周期与跨区域复制 (Lifecycle & CRR)</div>`,
    content: `<h3>自动整理与异地备份</h3>
      <p>S3 有两个自动化神器：</p>
      <ul>
        <li>
          <strong>Lifecycle (生命周期规则)：</strong> <strong>“定期大扫除”</strong>。你可以设规则：“文件超过 30 天，移到
          IA 层；超过 1 年，移到 Glacier；超过 10 年，删除。”
        </li>
        <li>
          <strong>CRR (跨区域复制)：</strong> <strong>“异地分身”</strong>。你在北京上传一张图，AWS
          自动把它复制一份到东京。
        </li>
      </ul>

      <h3>📝 考试提示与常见误区</h3>
      <div style="background: #fffbf0; padding: 25px; border-radius: 10px; border: 2px solid #f0e68c; margin: 30px 0">
        <div style="margin-bottom: 20px">
          <p style="margin: 0; font-size: 18px"><strong>❌ 误区：</strong>以为删了源文件，复制的文件也会被删。</p>
          <p>默认情况下，删除操作不会被复制（为了防手滑），除非你特意开启。</p>
        </div>
        <div>
          <p style="margin: 0; font-size: 18px">
            <strong>🔑 联想关键词：</strong>Lifecycle = 自动降级/删除 | CRR = 灾备/低延迟访问
          </p>
        </div>
        <div style="margin-top: 15px; padding: 15px; background: #fff; border-radius: 5px">
          <p style="margin: 0; font-size: 16px; color: #666">
            <strong>💡 考点提示：</strong>题目问“灾难恢复（DR）要求数据跨 Region”，选
            <strong>CRR</strong>。题目问“自动节省存储成本”，选 <strong>Lifecycle Policy</strong>。
          </p>
        </div>
      </div>

      <div class="takeaway-box">
        <div class="takeaway-title">你现在要记住的只有一句话</div>
        <p class="takeaway-text">让 S3 自己管理文件的“生老病死”和“分身术”。</p>
      </div>
    </div>
    <hr class="separator" />

    <!-- 第35讲 -->
    <div class="lecture-container">
      <div class="lecture-title">`,
    keyTakeaway: ``,
    misconception: ``,
    examTips: `</strong>题目问“灾难恢复（DR）要求数据跨 Region”，选
            <strong>CRR</strong>。题目问“自动节省存储成本”，选 <strong>Lifecycle Policy</strong>。
          </p>
        </div>
      </div>`
  },
  {
    id: 35,
    title: `AWS Backup</div>`,
    content: `<h3>总管备份的大管家</h3>
      <p>以前，你要备份 EC2，得去 EC2 控制台；备份 RDS，得去 RDS 控制台。</p>
      <p><strong>AWS Backup</strong> 是一个<strong>“中央备份指挥部”</strong>。</p>
      <p>
        你在这里制定一个策略：“每天凌晨 2 点备份，保留 30 天”。然后把它应用到 EC2、RDS、EFS、DynamoDB 等所有服务上。
      </p>

      <h3>📝 考试提示与常见误区</h3>
      <div style="background: #fffbf0; padding: 25px; border-radius: 10px; border: 2px solid #f0e68c; margin: 30px 0">
        <div style="margin-bottom: 20px">
          <p style="margin: 0; font-size: 18px"><strong>❌ 误区：</strong>和 S3 生命周期混淆</p>
        </div>
        <div>
          <p style="margin: 0; font-size: 18px">
            <strong>🔑 联想关键词：</strong>集中管理 / 跨服务 / 合规性 / 备份计划
          </p>
        </div>
        <div style="margin-top: 15px; padding: 15px; background: #fff; border-radius: 5px">
          <p style="margin: 0; font-size: 16px; color: #666">
            <strong>💡 考点提示：</strong>题目问“集中管理和自动化跨服务的备份任务”，选 <strong>AWS Backup</strong>。
          </p>
        </div>
      </div>

      <div class="takeaway-box">
        <div class="takeaway-title">你现在要记住的只有一句话</div>
        <p class="takeaway-text">不要到处找备份按钮，来这里统一指挥。</p>
      </div>
    </div>
    <hr class="separator" />

    <!-- 第36讲 -->
    <div class="lecture-container">
      <div class="lecture-title">`,
    keyTakeaway: ``,
    misconception: ``,
    examTips: `</strong>题目问“集中管理和自动化跨服务的备份任务”，选 <strong>AWS Backup</strong>。
          </p>
        </div>
      </div>`
  },
  {
    id: 36,
    title: `Amazon FSx</div>`,
    content: `<h3>专业的高性能文件系统</h3>
      <p>EFS 很好，但它是 Linux 的。如果你用 Windows 呢？或者你需要极高的计算性能？</p>
      <ul>
        <li>
          <strong>FSx for Windows：</strong> 就是<strong>“云上的 Windows 文件服务器”</strong>。完全兼容 SMB 协议，支持
          Active Directory。
        </li>
        <li><strong>FSx for Lustre：</strong> <strong>“超级跑车”</strong>。专为高性能计算（HPC）设计，速度极快。</li>
      </ul>

      <h3>📝 考试提示与常见误区</h3>
      <div style="background: #fffbf0; padding: 25px; border-radius: 10px; border: 2px solid #f0e68c; margin: 30px 0">
        <div style="margin-bottom: 20px">
          <p style="margin: 0; font-size: 18px"><strong>❌ 误区：</strong>Windows 实例用 EFS</p>
          <p>EFS 不支持 Windows。Windows 共享必须用 FSx for Windows。</p>
        </div>
        <div>
          <p style="margin: 0; font-size: 18px">
            <strong>🔑 联想关键词：</strong>Windows = FSx for Windows | HPC/高性能 = FSx for Lustre
          </p>
        </div>
        <div style="margin-top: 15px; padding: 15px; background: #fff; border-radius: 5px">
          <p style="margin: 0; font-size: 16px; color: #666">
            <strong>💡 考点提示：</strong>题目看到“SMB 协议”、“Windows 文件共享”，选
            <strong>FSx for Windows</strong>。看到“高性能计算”、“并行文件系统”，选 <strong>FSx for Lustre</strong>。
          </p>
        </div>
      </div>

      <div class="takeaway-box">
        <div class="takeaway-title">你现在要记住的只有一句话</div>
        <p class="takeaway-text">Windows 共享和超级计算，就找 FSx。</p>
      </div>
    </div>
    <hr class="separator" />

    <!-- 第37讲 -->
    <div class="lecture-container">
      <div class="lecture-title">`,
    keyTakeaway: ``,
    misconception: ``,
    examTips: `</strong>题目看到“SMB 协议”、“Windows 文件共享”，选
            <strong>FSx for Windows</strong>。看到“高性能计算”、“并行文件系统”，选 <strong>FSx for Lustre</strong>。
          </p>
        </div>
      </div>`
  },
  {
    id: 37,
    title: `AWS Storage Gateway</div>`,
    content: `<h3>混合云的桥梁</h3>
      <p>公司本地机房的硬盘快满了，想用云存储，但又不想改现在的应用架构。</p>
      <p><strong>Storage Gateway</strong> 就像一个<strong>“翻译官+缓存盒”</strong>。</p>
      <p>你装在本地机房。你的应用以为还在往本地硬盘写数据，实际上 Storage Gateway 在后台悄悄把数据搬到了 AWS S3 上。</p>

      <h3>📝 考试提示与常见误区</h3>
      <div style="background: #fffbf0; padding: 25px; border-radius: 10px; border: 2px solid #f0e68c; margin: 30px 0">
        <div style="margin-bottom: 20px">
          <p style="margin: 0; font-size: 18px"><strong>❌ 误区：</strong>和 Snow Family 混淆</p>
          <p>Snow 是离线搬运（快递硬盘），Gateway 是在线连接（通过网络）。</p>
        </div>
        <div>
          <p style="margin: 0; font-size: 18px">
            <strong>🔑 联想关键词：</strong>混合云 / 本地缓存 / S3 接口 / 磁带库替代 (VTL)
          </p>
        </div>
        <div style="margin-top: 15px; padding: 15px; background: #fff; border-radius: 5px">
          <p style="margin: 0; font-size: 16px; color: #666">
            <strong>💡 考点提示：</strong>题目问“扩展本地存储到云端”或“保留低延迟访问热数据”，选
            <strong>Storage Gateway</strong>。
          </p>
        </div>
      </div>

      <div class="takeaway-box">
        <div class="takeaway-title">你现在要记住的只有一句话</div>
        <p class="takeaway-text">它假装是本地硬盘，其实背后连着无限大的 S3。</p>
      </div>
    </div>
    <hr class="separator" />

    <!-- 第38讲 -->
    <div class="lecture-container">
      <div class="lecture-title">`,
    keyTakeaway: ``,
    misconception: ``,
    examTips: `</strong>题目问“扩展本地存储到云端”或“保留低延迟访问热数据”，选
            <strong>Storage Gateway</strong>。
          </p>
        </div>
      </div>`
  },
  {
    id: 38,
    title: `AWS Elastic Disaster Recovery (DRS)</div>`,
    content: `<h3>云端克隆机</h3>
      <p>如果你的本地机房着火了，怎么办？</p>
      <p><strong>Elastic Disaster Recovery</strong> 会持续不断地把你本地服务器的数据复制到 AWS 上。</p>
      <p>
        平时，它只用很便宜的存储存数据。一旦灾难发生，你按一个按钮，它立马在 AWS 上启动服务器，接管业务。这叫<strong
          >Pilot Light（长明灯）</strong
        >策略。
      </p>

      <h3>📝 考试提示与常见误区</h3>
      <div style="background: #fffbf0; padding: 25px; border-radius: 10px; border: 2px solid #f0e68c; margin: 30px 0">
        <div style="margin-bottom: 20px">
          <p style="margin: 0; font-size: 18px"><strong>❌ 误区：</strong>和 Backup 混淆</p>
          <p>Backup 是定期备份，恢复慢。DRS 是持续复制，恢复快（RPO/RTO 很低）。</p>
        </div>
        <div>
          <p style="margin: 0; font-size: 18px">
            <strong>🔑 联想关键词：</strong>灾难恢复 / 持续复制 / 快速接管 / RPO 秒级
          </p>
        </div>
        <div style="margin-top: 15px; padding: 15px; background: #fff; border-radius: 5px">
          <p style="margin: 0; font-size: 16px; color: #666">
            <strong>💡 考点提示：</strong>题目问“低 RPO/RTO 的灾难恢复方案”，选
            <strong>Elastic Disaster Recovery</strong>。
          </p>
        </div>
      </div>

      <div class="takeaway-box">
        <div class="takeaway-title">你现在要记住的只有一句话</div>
        <p class="takeaway-text">它是你业务的“备胎”，平时收起，爆胎时瞬间充气使用。</p>
      </div>
    </div>
    <hr class="separator" />

    <!-- 第39讲 -->
    <div class="lecture-container">
      <div class="lecture-title">`,
    keyTakeaway: ``,
    misconception: ``,
    examTips: `</strong>题目问“低 RPO/RTO 的灾难恢复方案”，选
            <strong>Elastic Disaster Recovery</strong>。
          </p>
        </div>
      </div>`
  },
  {
    id: 39,
    title: `RDS 与 Aurora</div>`,
    content: `<h3>托管的数据库</h3>
      <p>自己装数据库太累？用 <strong>RDS</strong>。</p>
      <p>它支持 MySQL、PostgreSQL、Oracle 等。AWS 帮你打补丁、做备份。</p>

      <h3>云原生贵族 Aurora</h3>
      <p><strong>Aurora</strong> 是 AWS 自己改造的 MySQL/PostgreSQL。</p>
      <p>它把存储和计算分开了。<strong>一份数据，自动存 6 份，放在 3 个 AZ。</strong></p>
      <p>它比普通 RDS 更快、更耐用，当然也稍微贵一点。</p>

      <h3>📝 考试提示与常见误区</h3>
      <div style="background: #fffbf0; padding: 25px; border-radius: 10px; border: 2px solid #f0e68c; margin: 30px 0">
        <div style="margin-bottom: 20px">
          <p style="margin: 0; font-size: 18px"><strong>❌ 误区：</strong>认为 Aurora 是无服务器的</p>
          <p>Aurora 有 Serverless 模式，但默认是预置实例的。不要混淆。</p>
        </div>
        <div>
          <p style="margin: 0; font-size: 18px">
            <strong>🔑 联想关键词：</strong>RDS = 托管/传统引擎 | Aurora = 云原生/6副本/高性能/自动扩展存储
          </p>
        </div>
        <div style="margin-top: 15px; padding: 15px; background: #fff; border-radius: 5px">
          <p style="margin: 0; font-size: 16px; color: #666">
            <strong>💡 考点提示：</strong>题目问“高性能关系型数据库”、“自动扩展存储”、“高可用性”，首选
            <strong>Aurora</strong>。
          </p>
        </div>
      </div>

      <div class="takeaway-box">
        <div class="takeaway-title">你现在要记住的只有一句话</div>
        <p class="takeaway-text">RDS 是“租来的车”，Aurora 是 AWS 改装过的“超级赛车”。</p>
      </div>
    </div>
    <hr class="separator" />

    <!-- 第40讲 -->
    <div class="lecture-container">
      <div class="lecture-title">`,
    keyTakeaway: ``,
    misconception: ``,
    examTips: `</strong>题目问“高性能关系型数据库”、“自动扩展存储”、“高可用性”，首选
            <strong>Aurora</strong>。
          </p>
        </div>
      </div>`
  },
  {
    id: 40,
    title: `DynamoDB 基础</div>`,
    content: `<h3>无限扩展的键值对</h3>
      <p>如果你要在这个双十一做秒杀活动，传统数据库可能会崩。</p>
      <p><strong>DynamoDB</strong> 是<strong>“NoSQL 数据库”</strong>。</p>
      <p>
        它不像 Excel 那样有固定的列。它存的是 Key-Value。它的特点是：<strong>不管数据量多大，速度永远是毫秒级。</strong>
        它是 Serverless 的。
      </p>

      <h3>📝 考试提示与常见误区</h3>
      <div style="background: #fffbf0; padding: 25px; border-radius: 10px; border: 2px solid #f0e68c; margin: 30px 0">
        <div style="margin-bottom: 20px">
          <p style="margin: 0; font-size: 18px"><strong>❌ 误区：</strong>DynamoDB 支持复杂的 JOIN 查询</p>
          <p>NoSQL 不擅长复杂关联查询（JOIN）。那是 RDS 的强项。</p>
        </div>
        <div>
          <p style="margin: 0; font-size: 18px">
            <strong>🔑 联想关键词：</strong>NoSQL / 键值 / 毫秒延迟 / Serverless / 极高并发
          </p>
        </div>
        <div style="margin-top: 15px; padding: 15px; background: #fff; border-radius: 5px">
          <p style="margin: 0; font-size: 16px; color: #666">
            <strong>💡 考点提示：</strong>题目问“非结构化数据”、“几百万并发请求”、“毫秒级响应”，选
            <strong>DynamoDB</strong>。
          </p>
        </div>
      </div>

      <div class="takeaway-box">
        <div class="takeaway-title">你现在要记住的只有一句话</div>
        <p class="takeaway-text">它是为“超大规模、超快速度”而生的非关系型数据库。</p>
      </div>
    </div>
    <hr class="separator" />

    <!-- 第41讲 -->
    <div class="lecture-container">
      <div class="lecture-title">`,
    keyTakeaway: ``,
    misconception: ``,
    examTips: `</strong>题目问“非结构化数据”、“几百万并发请求”、“毫秒级响应”，选
            <strong>DynamoDB</strong>。
          </p>
        </div>
      </div>`
  },
  {
    id: 41,
    title: `ElastiCache</div>`,
    content: `<h3>数据库的“短期记忆”</h3>
      <p>数据库查得太慢怎么办？加缓存。</p>
      <p><strong>ElastiCache</strong> 就是托管的 <strong>Redis</strong> 或 <strong>Memcached</strong>。</p>
      <p>它把常用数据存在内存里（RAM），读取速度是微秒级。它挡在数据库前面，替数据库分担压力。</p>

      <h3>📝 考试提示与常见误区</h3>
      <div style="background: #fffbf0; padding: 25px; border-radius: 10px; border: 2px solid #f0e68c; margin: 30px 0">
        <div style="margin-bottom: 20px">
          <p style="margin: 0; font-size: 18px"><strong></strong></p>
        </div>
      </div>
    </div>
  </body>
</html>`,
    keyTakeaway: ``,
    misconception: ``,
    examTips: ``
  },
  {
    id: 43,
    title: `Amazon Neptune</div>`,
    content: `<h3>朋友的朋友是谁？</h3>
      <p>关系型数据库（RDS）虽然叫“关系”型，但处理复杂关系（比如社交网络、推荐引擎）时并不擅长。</p>
      <p>如果你要查：“我关注的人里面，有哪些人同时也关注了马斯克？”</p>

      <h3>图数据库专家</h3>
      <p><strong>Neptune</strong> 就是专门画<strong>“关系图”</strong>的。</p>
      <p>它不存表格，存的是点（人）和边（关注关系）。查这种复杂关系，它比 SQL 快几千倍。</p>

      <h3>📝 考试提示与常见误区</h3>
      <div style="background: #fffbf0; padding: 25px; border-radius: 10px; border: 2px solid #f0e68c; margin: 30px 0">
        <div style="margin-bottom: 20px">
          <p style="margin: 0; font-size: 18px"><strong>❌ 误区：</strong>和 RDS 混淆</p>
          <p>RDS 存表格数据，Neptune 存图数据（Graph）。</p>
        </div>
        <div>
          <p style="margin: 0; font-size: 18px">
            <strong>🔑 联想关键词：</strong>图数据库 / 社交网络 / 推荐引擎 / 知识图谱
          </p>
        </div>
        <div style="margin-top: 15px; padding: 15px; background: #fff; border-radius: 5px">
          <p style="margin: 0; font-size: 16px; color: #666">
            <strong>💡 考点提示：</strong>题目只要出现“社交关系”、“推荐系统”、“欺诈检测网络”，首选
            <strong>Neptune</strong>。
          </p>
        </div>
      </div>

      <div class="takeaway-box">
        <div class="takeaway-title">你现在要记住的只有一句话</div>
        <p class="takeaway-text">它是专门用来理清“剪不断理还乱”的复杂关系的。</p>
      </div>
    </div>
    <hr class="separator" />

    <!-- 第44讲 -->
    <div class="lecture-container">
      <div class="lecture-title">`,
    keyTakeaway: ``,
    misconception: ``,
    examTips: `</strong>题目只要出现“社交关系”、“推荐系统”、“欺诈检测网络”，首选
            <strong>Neptune</strong>。
          </p>
        </div>
      </div>`
  },
  {
    id: 44,
    title: `VPC 组件 (Virtual Private Cloud)</div>`,
    content: `<h3>你的私家庄园</h3>
      <p>VPC 是你在云上的<strong>“私有领地”</strong>。怎么建这个庄园？</p>
      <ul>
        <li><strong>Subnet (子网)：</strong> 庄园里的房间。有的房间有窗户（公有子网），有的房间全封闭（私有子网）。</li>
        <li><strong>Internet Gateway (IGW)：</strong> 庄园的大门。有了它，才能连通互联网。</li>
        <li>
          <strong>NAT Gateway：</strong> 单向玻璃门。私有房间的人能看出去（下载更新），外面的人看不进来（防黑客）。
        </li>
        <li><strong>Security Group / NACL：</strong> 保安和门卫（之前讲过）。</li>
      </ul>

      <div class="misconception">
        <p><strong>❌ 误区：</strong>以为 NAT Gateway 是免费的。</p>
        <p>NAT Gateway 是按小时收费 + 流量费的，而且还不便宜。</p>
      </div>

      <h3>📝 考试提示与常见误区</h3>
      <div style="background: #fffbf0; padding: 25px; border-radius: 10px; border: 2px solid #f0e68c; margin: 30px 0">
        <div style="margin-bottom: 20px">
          <p style="margin: 0; font-size: 18px"><strong>❌ 误区：</strong>NAT Gateway 放在私有子网里</p>
          <p>错！NAT Gateway 必须放在<strong>公有子网</strong>里，才能把私有子网的流量送出去。</p>
        </div>
        <div>
          <p style="margin: 0; font-size: 18px">
            <strong>🔑 联想关键词：</strong>IGW = 公网大门 | NAT = 私网出海口 | VPC Peering = 邻居串门
          </p>
        </div>
        <div style="margin-top: 15px; padding: 15px; background: #fff; border-radius: 5px">
          <p style="margin: 0; font-size: 16px; color: #666">
            <strong>💡 考点提示：</strong>题目问“私有子网实例需要下载补丁”，选 <strong>NAT Gateway</strong>。问“两个 VPC
            互连”，选 <strong>VPC Peering</strong>。
          </p>
        </div>
      </div>

      <div class="takeaway-box">
        <div class="takeaway-title">你现在要记住的只有一句话</div>
        <p class="takeaway-text">没有 IGW 谁也出不去，没有 NAT 私网出不去。</p>
      </div>
    </div>
    <hr class="separator" />

    <!-- 第45讲 -->
    <div class="lecture-container">
      <div class="lecture-title">`,
    keyTakeaway: ``,
    misconception: ``,
    examTips: `</strong>题目问“私有子网实例需要下载补丁”，选 <strong>NAT Gateway</strong>。问“两个 VPC
            互连”，选 <strong>VPC Peering</strong>。
          </p>
        </div>
      </div>`
  },
  {
    id: 45,
    title: `Route 53</div>`,
    content: `<h3>互联网的电话本</h3>
      <p>电脑不认识 <code>www.baidu.com</code>，只认识 IP 地址。</p>
      <p><strong>Route 53</strong> 就是<strong>“DNS 解析服务”</strong>。</p>
      <p>
        它不仅能查电话（把域名变
        IP），还能根据你的位置，给你最近的号码（延迟路由）；或者看哪个电话打不通，自动给你换个号码（故障转移）。
      </p>

      <h3>📝 考试提示与常见误区</h3>
      <div style="background: #fffbf0; padding: 25px; border-radius: 10px; border: 2px solid #f0e68c; margin: 30px 0">
        <div style="margin-bottom: 20px">
          <p style="margin: 0; font-size: 18px"><strong>❌ 误区：</strong>把加权路由和延迟路由混淆</p>
          <p>加权是“按比例分配流量”（比如 A 20%，B 80%）。延迟是“谁快连谁”。</p>
        </div>
        <div>
          <p style="margin: 0; font-size: 18px"><strong>🔑 联想关键词：</strong>DNS / 53端口 / 路由策略 / 健康检查</p>
        </div>
        <div style="margin-top: 15px; padding: 15px; background: #fff; border-radius: 5px">
          <p style="margin: 0; font-size: 16px; color: #666">
            <strong>💡 考点提示：</strong>题目问“让用户访问最近的服务器”，选
            <strong>Latency Routing</strong>。问“主站挂了自动切备站”，选 <strong>Failover Routing</strong>。
          </p>
        </div>
      </div>

      <div class="takeaway-box">
        <div class="takeaway-title">你现在要记住的只有一句话</div>
        <p class="takeaway-text">它不只是查号台，它还是个智能的“交通指挥官”。</p>
      </div>
    </div>
    <hr class="separator" />

    <!-- 第46讲 -->
    <div class="lecture-container">
      <div class="lecture-title">`,
    keyTakeaway: ``,
    misconception: ``,
    examTips: `</strong>题目问“让用户访问最近的服务器”，选
            <strong>Latency Routing</strong>。问“主站挂了自动切备站”，选 <strong>Failover Routing</strong>。
          </p>
        </div>
      </div>`
  },
  {
    id: 46,
    title: `CloudFront CDN</div>`,
    content: `<h3>遍布全球的快递站</h3>
      <p>如果你的服务器在纽约，悉尼的用户访问就很慢。</p>
      <p>
        <strong>CloudFront</strong> 就是把你的文件（图片、视频）提前送到悉尼的<strong>“便利店”（Edge Location）</strong
        >。
      </p>
      <p>用户直接去楼下便利店拿货，不用跨洋去纽约取。这就是<strong>内容分发网络 (CDN)</strong>。</p>

      <div class="misconception">
        <p><strong>❌ 误区：</strong>以为 CloudFront 只能加速静态文件。</p>
        <p>它也能加速动态内容（通过优化路由），还能防 DDoS 攻击。</p>
      </div>

      <h3>📝 考试提示与常见误区</h3>
      <div style="background: #fffbf0; padding: 25px; border-radius: 10px; border: 2px solid #f0e68c; margin: 30px 0">
        <div style="margin-bottom: 20px">
          <p style="margin: 0; font-size: 18px"><strong>❌ 误区：</strong>和 Global Accelerator 混淆</p>
        </div>
        <div>
          <p style="margin: 0; font-size: 18px">
            <strong>🔑 联想关键词：</strong>缓存 / 边缘位置 / S3 Origin / 低延迟 / HTTPS
          </p>
        </div>
        <div style="margin-top: 15px; padding: 15px; background: #fff; border-radius: 5px">
          <p style="margin: 0; font-size: 16px; color: #666">
            <strong>💡 考点提示：</strong>题目问“加速全球用户访问静态内容（视频/图片）”，选
            <strong>CloudFront</strong>。问“阻止特定国家访问”，选 <strong>Geo Restriction</strong>。
          </p>
        </div>
      </div>

      <div class="takeaway-box">
        <div class="takeaway-title">你现在要记住的只有一句话</div>
        <p class="takeaway-text">把数据推到离用户最近的地方，让访问飞起来。</p>
      </div>
    </div>
    <hr class="separator" />

    <!-- 第47讲 -->
    <div class="lecture-container">
      <div class="lecture-title">`,
    keyTakeaway: ``,
    misconception: ``,
    examTips: `</strong>题目问“加速全球用户访问静态内容（视频/图片）”，选
            <strong>CloudFront</strong>。问“阻止特定国家访问”，选 <strong>Geo Restriction</strong>。
          </p>
        </div>
      </div>`
  },
  {
    id: 47,
    title: `AWS Direct Connect (DX)</div>`,
    content: `<h3>不仅要快，还要稳</h3>
      <p>VPN 是走公网的，像普通公路，可能堵车，也不够安全。</p>
      <p><strong>Direct Connect</strong> 就是拉一根<strong>“物理专线”</strong>。</p>
      <p>从你公司机房，直接挖一条光缆连到 AWS。独享带宽，速度稳定，绝对私密。</p>

      <h3>📝 考试提示与常见误区</h3>
      <div style="background: #fffbf0; padding: 25px; border-radius: 10px; border: 2px solid #f0e68c; margin: 30px 0">
        <div style="margin-bottom: 20px">
          <p style="margin: 0; font-size: 18px"><strong>❌ 误区：</strong>DX 部署很快</p>
          <p>拉专线需要物理施工，通常需要几周甚至几个月。着急用？先开 VPN 顶着。</p>
        </div>
        <div>
          <p style="margin: 0; font-size: 18px">
            <strong>🔑 联想关键词：</strong>物理专线 / 专用网络 / 稳定带宽 / 混合云
          </p>
        </div>
        <div style="margin-top: 15px; padding: 15px; background: #fff; border-radius: 5px">
          <p style="margin: 0; font-size: 16px; color: #666">
            <strong>💡 考点提示：</strong>题目问“高带宽、低延迟、稳定的混合云连接”，选
            <strong>Direct Connect</strong>。问“作为 DX 的备份”，选 <strong>Site-to-Site VPN</strong>。
          </p>
        </div>
      </div>

      <div class="takeaway-box">
        <div class="takeaway-title">你现在要记住的只有一句话</div>
        <p class="takeaway-text">VPN 是走马路，DX 是修地铁。</p>
      </div>
    </div>
    <hr class="separator" />

    <!-- 第48讲 -->
    <div class="lecture-container">
      <div class="lecture-title">`,
    keyTakeaway: ``,
    misconception: ``,
    examTips: `</strong>题目问“高带宽、低延迟、稳定的混合云连接”，选
            <strong>Direct Connect</strong>。问“作为 DX 的备份”，选 <strong>Site-to-Site VPN</strong>。
          </p>
        </div>
      </div>`
  },
  {
    id: 48,
    title: `AWS Global Accelerator</div>`,
    content: `<h3>走VIP通道</h3>
      <p>普通互联网访问，像走普通公路，红绿灯多（路由跳数多），容易绕路。</p>
      <p><strong>Global Accelerator</strong> 是让你走 <strong>AWS 的内部高速公路</strong>。</p>
      <p>用户一进互联网，就立刻进入最近的 AWS 边缘节点，然后全程走 AWS 的内部骨干网直达你的服务器。不绕公网。</p>

      <h3>📝 考试提示与常见误区</h3>
      <div style="background: #fffbf0; padding: 25px; border-radius: 10px; border: 2px solid #f0e68c; margin: 30px 0">
        <div style="margin-bottom: 20px">
          <p style="margin: 0; font-size: 18px"><strong>❌ 误区：</strong>和 CloudFront 混淆</p>
          <p>
            CloudFront 是为了<strong>缓存内容</strong>（主要静态）。Global Accelerator
            是为了<strong>优化网络路径</strong>（主要动态，非HTTP协议如TCP/UDP）。
          </p>
        </div>
        <div>
          <p style="margin: 0; font-size: 18px">
            <strong>🔑 联想关键词：</strong>静态IP / 性能优化 / 非HTTP协议 / 骨干网
          </p>
        </div>
        <div style="margin-top: 15px; padding: 15px; background: #fff; border-radius: 5px">
          <p style="margin: 0; font-size: 16px; color: #666">
            <strong>💡 考点提示：</strong>题目问“需要固定静态 IP 访问全球应用”或“加速非 HTTP 流量（如游戏 UDP）”，选
            <strong>Global Accelerator</strong>。
          </p>
        </div>
      </div>

      <div class="takeaway-box">
        <div class="takeaway-title">你现在要记住的只有一句话</div>
        <p class="takeaway-text">它是带静态 IP 的“网络加速器”，让你避开公网的拥堵。</p>
      </div>
    </div>
    <hr class="separator" />

    <!-- 第49讲 -->
    <div class="lecture-container">
      <div class="lecture-title">`,
    keyTakeaway: ``,
    misconception: ``,
    examTips: `</strong>题目问“需要固定静态 IP 访问全球应用”或“加速非 HTTP 流量（如游戏 UDP）”，选
            <strong>Global Accelerator</strong>。
          </p>
        </div>
      </div>`
  },
  {
    id: 49,
    title: `AWS PrivateLink (Interface Endpoint)</div>`,
    content: `<h3>走后门，别上街</h3>
      <p>你的服务器想访问 AWS 的服务（比如 SQS），默认要走公网绕一圈。</p>
      <p><strong>PrivateLink</strong> 就像在你的 VPC 里开了个<strong>“暗门”</strong>。</p>
      <p>通过这个暗门（Endpoint），你的流量直接通过私有网络到达 AWS 服务，完全不暴露在公网，甚至不需要 IGW。</p>

      <h3>📝 考试提示与常见误区</h3>
      <div style="background: #fffbf0; padding: 25px; border-radius: 10px; border: 2px solid #f0e68c; margin: 30px 0">
        <div style="margin-bottom: 20px">
          <p style="margin: 0; font-size: 18px"><strong>❌ 误区：</strong>和 VPC Peering 混淆</p>
          <p>Peering 是打通两个 VPC 的所有网络。PrivateLink 是只暴露某一个具体的服务。</p>
        </div>
        <div>
          <p style="margin: 0; font-size: 18px">
            <strong>🔑 联想关键词：</strong>私有访问 / 不走公网 / 安全 / Interface Endpoint
          </p>
        </div>
        <div style="margin-top: 15px; padding: 15px; background: #fff; border-radius: 5px">
          <p style="margin: 0; font-size: 16px; color: #666">
            <strong>💡 考点提示：</strong>题目问“在没有 IGW 的情况下安全访问 AWS 服务”或“SaaS 应用程序私有连接”，选
            <strong>PrivateLink / VPC Endpoint</strong>。
          </p>
        </div>
      </div>

      <div class="takeaway-box">
        <div class="takeaway-title">你现在要记住的只有一句话</div>
        <p class="takeaway-text">为了安全，能走内网绝对不走公网。</p>
      </div>
    </div>
    <hr class="separator" />

    <!-- 第50讲 -->
    <div class="lecture-container">
      <div class="lecture-title">`,
    keyTakeaway: ``,
    misconception: ``,
    examTips: `</strong>题目问“在没有 IGW 的情况下安全访问 AWS 服务”或“SaaS 应用程序私有连接”，选
            <strong>PrivateLink / VPC Endpoint</strong>。
          </p>
        </div>
      </div>`
  },
  {
    id: 50,
    title: `AWS Transit Gateway</div>`,
    content: `<h3>网络枢纽站</h3>
      <p>如果你有 100 个 VPC，要把它们两两互连（Peering），你需要连几千根线，乱成一团麻。</p>
      <p><strong>Transit Gateway</strong> 就是一个<strong>“中央路由器”</strong>。</p>
      <p>所有 VPC 都连到它上面，本地机房也连到它上面。它像一个星形枢纽，自动帮你转发流量，清清爽爽。</p>

      <h3>📝 考试提示与常见误区</h3>
      <div style="background: #fffbf0; padding: 25px; border-radius: 10px; border: 2px solid #f0e68c; margin: 30px 0">
        <div style="margin-bottom: 20px">
          <p style="margin: 0; font-size: 18px"><strong>❌ 误区：</strong>认为 Peering 也可以做传递路由</p>
          <p>
            VPC Peering <strong>不支持传递路由</strong>（A连B，B连C，A不能通C）。要实现传递，必须用 Transit Gateway。
          </p>
        </div>
        <div>
          <p style="margin: 0; font-size: 18px">
            <strong>🔑 联想关键词：</strong>中心辐射型（Hub-and-Spoke）/ 传递路由 / 简化管理 / 规模化
          </p>
        </div>
        <div style="margin-top: 15px; padding: 15px; background: #fff; border-radius: 5px">
          <p style="margin: 0; font-size: 16px; color: #666">
            <strong>💡 考点提示：</strong>题目出现“连接几十上百个 VPC”、“简化网络拓扑”、“传递性连接”，必选
            <strong>Transit Gateway</strong>。
          </p>
        </div>
      </div>

      <div class="takeaway-box">
        <div class="takeaway-title">你现在要记住的只有一句话</div>
        <p class="takeaway-text">VPC 少用 Peering，VPC 多用 Transit Gateway。</p>
      </div>
    </div>
    <hr class="separator" />

    <!-- 第51讲 -->
    <div class="lecture-container">
      <div class="lecture-title">`,
    keyTakeaway: ``,
    misconception: ``,
    examTips: `</strong>题目出现“连接几十上百个 VPC”、“简化网络拓扑”、“传递性连接”，必选
            <strong>Transit Gateway</strong>。
          </p>
        </div>
      </div>`
  },
  {
    id: 51,
    title: `AWS Site-to-Site VPN</div>`,
    content: `<h3>加密隧道</h3>
      <p>这是最传统的<strong>“连公司网络”</strong>的方式。</p>
      <p>在你的本地机房和 AWS VPC 之间，通过公网建立一条加密隧道（IPsec）。</p>
      <p>它便宜、部署快，但受限于公网质量，速度不如 DX 稳定。</p>

      <h3>📝 考试提示与常见误区</h3>
      <div style="background: #fffbf0; padding: 25px; border-radius: 10px; border: 2px solid #f0e68c; margin: 30px 0">
        <div style="margin-bottom: 20px">
          <p style="margin: 0; font-size: 18px"><strong>❌ 误区：</strong>VPN 可以完全替代 Direct Connect</p>
          <p>对于对延迟敏感或数据量巨大的业务，VPN 替代不了 DX。</p>
        </div>
        <div>
          <p style="margin: 0; font-size: 18px"><strong>🔑 联想关键词：</strong>IPsec / 快速部署 / 备份 DX / 加密</p>
        </div>
        <div style="margin-top: 15px; padding: 15px; background: #fff; border-radius: 5px">
          <p style="margin: 0; font-size: 16px; color: #666">
            <strong>💡 考点提示：</strong>题目问“快速建立混合云连接”或“作为 Direct Connect 的备用链路”，选
            <strong>Site-to-Site VPN</strong>。
          </p>
        </div>
      </div>

      <div class="takeaway-box">
        <div class="takeaway-title">你现在要记住的只有一句话</div>
        <p class="takeaway-text">它是 DX 的平替版，也是 DX 的最佳备胎。</p>
      </div>
    </div>
    <hr class="separator" />

    <!-- 第52讲 -->
    <div class="lecture-container">
      <div class="lecture-title">`,
    keyTakeaway: ``,
    misconception: ``,
    examTips: `</strong>题目问“快速建立混合云连接”或“作为 Direct Connect 的备用链路”，选
            <strong>Site-to-Site VPN</strong>。
          </p>
        </div>
      </div>`
  },
  {
    id: 52,
    title: `AWS Client VPN</div>`,
    content: `<h3>远程办公神器</h3>
      <p>Site-to-Site VPN 是连接两个“地点”（公司大楼和 AWS）。</p>
      <p><strong>Client VPN</strong> 是连接<strong>“个人电脑”</strong>和 AWS。</p>
      <p>你的员工在星巴克，想连公司的内网服务器？装个 VPN 客户端，连上 Client VPN，就像坐在办公室里一样。</p>

      <h3>📝 考试提示与常见误区</h3>
      <div style="background: #fffbf0; padding: 25px; border-radius: 10px; border: 2px solid #f0e68c; margin: 30px 0">
        <div style="margin-bottom: 20px">
          <p style="margin: 0; font-size: 18px"><strong>❌ 误区：</strong>和 Site-to-Site 混淆</p>
        </div>
        <div>
          <p style="margin: 0; font-size: 18px">
            <strong>🔑 联想关键词：</strong>OpenVPN / 移动办公 / 终端用户 / 个人设备
          </p>
        </div>
        <div style="margin-top: 15px; padding: 15px; background: #fff; border-radius: 5px">
          <p style="margin: 0; font-size: 16px; color: #666">
            <strong>💡 考点提示：</strong>题目问“员工远程访问 VPC 资源”，选 <strong>Client VPN</strong>。
          </p>
        </div>
      </div>

      <div class="takeaway-box">
        <div class="takeaway-title">你现在要记住的只有一句话</div>
        <p class="takeaway-text">Site-to-Site 连楼，Client VPN 连人。</p>
      </div>
    </div>
    <hr class="separator" />

    <!-- 第53讲 -->
    <div class="lecture-container">
      <div class="lecture-title">`,
    keyTakeaway: ``,
    misconception: ``,
    examTips: `</strong>题目问“员工远程访问 VPC 资源”，选 <strong>Client VPN</strong>。
          </p>
        </div>
      </div>`
  },
  {
    id: 53,
    title: `SNS vs SQS</div>`,
    content: `<h3>大喇叭 vs 待办清单</h3>
      <p>这俩都是用来解耦的，但方式不同：</p>
      <ul>
        <li>
          <strong>SNS (Simple Notification Service)：</strong>
          <strong>“大喇叭” (Pub/Sub)</strong
          >。发布者喊一声“订单来了！”，所有订阅者（发邮件的、发短信的、Lambda）同时听到，同时开始干活。推（Push）模式。
        </li>
        <li>
          <strong>SQS (Simple Queue Service)：</strong>
          <strong>“待办事项清单” (Queue)</strong
          >。订单来了先记在小本子上。工人有空了，自己过来拿一个去处理。处理完划掉。拉（Pull）模式。
        </li>
      </ul>

      <h3>📝 考试提示与常见误区</h3>
      <div style="background: #fffbf0; padding: 25px; border-radius: 10px; border: 2px solid #f0e68c; margin: 30px 0">
        <div style="margin-bottom: 20px">
          <p style="margin: 0; font-size: 18px"><strong>❌ 误区：</strong>SQS 也能一对多广播</p>
          <p>SQS 是点对点的。一条消息通常只能被一个消费者处理。要广播？前面加个 SNS。</p>
        </div>
        <div>
          <p style="margin: 0; font-size: 18px">
            <strong>🔑 联想关键词：</strong>SNS = 广播/推送/一对多 | SQS = 队列/解耦/缓冲/拉取
          </p>
        </div>
        <div style="margin-top: 15px; padding: 15px; background: #fff; border-radius: 5px">
          <p style="margin: 0; font-size: 16px; color: #666">
            <strong>💡 考点提示：</strong>题目问“发送通知给用户（邮件/短信）”，选
            <strong>SNS</strong>。问“防止下游系统被流量压垮（削峰填谷）”或“解耦生产者消费者”，选 <strong>SQS</strong>。
          </p>
        </div>
      </div>

      <div class="takeaway-box">
        <div class="takeaway-title">你现在要记住的只有一句话</div>
        <p class="takeaway-text">SNS 是喊大家一起干，SQS 是把活攒着慢慢干。</p>
      </div>
    </div>
    <hr class="separator" />

    <!-- 第54讲 -->
    <div class="lecture-container">
      <div class="lecture-title">`,
    keyTakeaway: ``,
    misconception: ``,
    examTips: `</strong>题目问“发送通知给用户（邮件/短信）”，选
            <strong>SNS</strong>。问“防止下游系统被流量压垮（削峰填谷）”或“解耦生产者消费者”，选 <strong>SQS</strong>。
          </p>
        </div>
      </div>`
  },
  {
    id: 54,
    title: `Amazon EventBridge</div>`,
    content: `<h3>系统总线</h3>
      <p>它是 CloudWatch Events 的升级版，也是一种“大喇叭”。</p>
      <p>但它更高级。它不仅能听 AWS 内部的消息（如“EC2 关机了”），还能听第三方软件的消息（如“Zendesk 有新工单了”）。</p>
      <p>它就像公司的<strong>“中央神经系统”</strong>，把各种杂乱的信号统一路由到该去的地方。</p>

      <h3>📝 考试提示与常见误区</h3>
      <div style="background: #fffbf0; padding: 25px; border-radius: 10px; border: 2px solid #f0e68c; margin: 30px 0">
        <div style="margin-bottom: 20px">
          <p style="margin: 0; font-size: 18px"><strong>❌ 误区：</strong>和 SNS 混淆</p>
          <p>SNS 侧重“发通知”。EventBridge 侧重“事件路由”和“第三方集成”。</p>
        </div>
        <div>
          <p style="margin: 0; font-size: 18px">
            <strong>🔑 联想关键词：</strong>事件总线 / SaaS集成 / 规则引擎 / 替代 CloudWatch Events
          </p>
        </div>
        <div style="margin-top: 15px; padding: 15px; background: #fff; border-radius: 5px">
          <p style="margin: 0; font-size: 16px; color: #666">
            <strong>💡 考点提示：</strong>题目问“构建事件驱动架构”或“响应第三方 SaaS 应用的事件”，选
            <strong>EventBridge</strong>。
          </p>
        </div>
      </div>

      <div class="takeaway-box">
        <div class="takeaway-title">你现在要记住的只有一句话</div>
        <p class="takeaway-text">它是连接所有服务（包括外部 SaaS）的万能胶水。</p>
      </div>
    </div>
    <hr class="separator" />

    <!-- 第55讲 -->
    <div class="lecture-container">
      <div class="lecture-title">`,
    keyTakeaway: ``,
    misconception: ``,
    examTips: `</strong>题目问“构建事件驱动架构”或“响应第三方 SaaS 应用的事件”，选
            <strong>EventBridge</strong>。
          </p>
        </div>
      </div>`
  },
  {
    id: 55,
    title: `AWS Step Functions</div>`,
    content: `<h3>工作流导演</h3>
      <p>Lambda 很强，但如果有 10 个 Lambda 要按顺序跑，还要处理“如果第 3 个失败了怎么办”？</p>
      <p>靠 Lambda 自己互相调用会乱套。</p>
      <p><strong>Step Functions</strong> 就是<strong>“剧本导演”</strong>。</p>
      <p>
        你画一张流程图（状态机）：先做A，如果成功做B，如果失败做C。Step Functions
        负责看着大家按剧本演，状态可视，不会乱。
      </p>

      <h3>📝 考试提示与常见误区</h3>
      <div style="background: #fffbf0; padding: 25px; border-radius: 10px; border: 2px solid #f0e68c; margin: 30px 0">
        <div style="margin-bottom: 20px">
          <p style="margin: 0; font-size: 18px"><strong>❌ 误区：</strong>用 Lambda 编排流程</p>
          <p>不要在 Lambda 里写复杂的“等待”或“重试”逻辑。编排工作交给 Step Functions。</p>
        </div>
        <div>
          <p style="margin: 0; font-size: 18px">
            <strong>🔑 联想关键词：</strong>工作流 / 状态机 / 可视化 / 编排 / 错误处理
          </p>
        </div>
        <div style="margin-top: 15px; padding: 15px; background: #fff; border-radius: 5px">
          <p style="margin: 0; font-size: 16px; color: #666">
            <strong>💡 考点提示：</strong>题目问“协调多个 Lambda 函数”或“可视化复杂的业务流程”，选
            <strong>Step Functions</strong>。
          </p>
        </div>
      </div>

      <div class="takeaway-box">
        <div class="takeaway-title">你现在要记住的只有一句话</div>
        <p class="takeaway-text">它是把零散代码串成复杂业务逻辑的“指挥棒”。</p>
      </div>
    </div>
    <hr class="separator" />

    <!-- 第56讲 -->
    <div class="lecture-container">
      <div class="lecture-title">`,
    keyTakeaway: ``,
    misconception: ``,
    examTips: `</strong>题目问“协调多个 Lambda 函数”或“可视化复杂的业务流程”，选
            <strong>Step Functions</strong>。
          </p>
        </div>
      </div>`
  },
  {
    id: 56,
    title: `Amazon API Gateway</div>`,
    content: `<h3>数字大门的前台</h3>
      <p>你的后端服务（EC2、Lambda）藏在深处，不能直接暴露给全世界。</p>
      <p><strong>API Gateway</strong> 就是公司的<strong>“前台接待”</strong>。</p>
      <p>
        外部请求先找它。它负责：验明正身份（认证）、限流（防刷）、转换数据格式，然后再把请求传给后端。它让后端只需专注干活，不用管这些杂事。
      </p>

      <h3>📝 考试提示与常见误区</h3>
      <div style="background: #fffbf0; padding: 25px; border-radius: 10px; border: 2px solid #f0e68c; margin: 30px 0">
        <div style="margin-bottom: 20px">
          <p style="margin: 0; font-size: 18px"><strong>❌ 误区：</strong>和 ALB 混淆</p>
          <p>ALB 是分发流量的。API Gateway 是管理 API 的（认证、计费、版本控制）。</p>
        </div>
        <div>
          <p style="margin: 0; font-size: 18px">
            <strong>🔑 联想关键词：</strong>REST/WebSocket / 限流(Throttling) / API 密钥 / Serverless 前端
          </p>
        </div>
        <div style="margin-top: 15px; padding: 15px; background: #fff; border-radius: 5px">
          <p style="margin: 0; font-size: 16px; color: #666">
            <strong>💡 考点提示：</strong>题目问“暴露 Lambda 给外部访问”、“限制 API 调用速率”、“WebSocket 支持”，选
            <strong>API Gateway</strong>。
          </p>
        </div>
      </div>

      <div class="takeaway-box">
        <div class="takeaway-title">你现在要记住的只有一句话</div>
        <p class="takeaway-text">它是后端服务的“看门人”和“翻译官”。</p>
      </div>
    </div>
    <hr class="separator" />

    <!-- 第57讲 -->
    <div class="lecture-container">
      <div class="lecture-title">`,
    keyTakeaway: ``,
    misconception: ``,
    examTips: `</strong>题目问“暴露 Lambda 给外部访问”、“限制 API 调用速率”、“WebSocket 支持”，选
            <strong>API Gateway</strong>。
          </p>
        </div>
      </div>`
  },
  {
    id: 57,
    title: `AWS CloudFormation</div>`,
    content: `<h3>基础设施即代码 (IaC)</h3>
      <p>不要手动点鼠标去创建服务器！手动容易错，还难复制。</p>
      <p><strong>CloudFormation</strong> 是<strong>“建筑图纸”</strong>。</p>
      <p>
        你写一个 YAML 或 JSON 文件，描述“我要一个 VPC，两台 EC2，一个 S3”。然后把文件给
        AWS，它就自动按图施工，把这一套环境搭出来。想再搭一套？再跑一次文件就行。
      </p>

      <h3>📝 考试提示与常见误区</h3>
      <div style="background: #fffbf0; padding: 25px; border-radius: 10px; border: 2px solid #f0e68c; margin: 30px 0">
        <div style="margin-bottom: 20px">
          <p style="margin: 0; font-size: 18px"><strong>❌ 误区：</strong>CloudFormation 只能用于 AWS</p>
          <p>虽然主要是 AWS，但现在也可以扩展管理部分第三方资源。但它是 AWS 原生的 IaC 工具。</p>
        </div>
        <div>
          <p style="margin: 0; font-size: 18px">
            <strong>🔑 联想关键词：</strong>模板(Template) / 堆栈(Stack) / 漂移检测(Drift Detection) / 自动化部署
          </p>
        </div>
        <div style="margin-top: 15px; padding: 15px; background: #fff; border-radius: 5px">
          <p style="margin: 0; font-size: 16px; color: #666">
            <strong>💡 考点提示：</strong>题目问“基础设施即代码”、“自动化重复部署资源”，选
            <strong>CloudFormation</strong>。
          </p>
        </div>
      </div>

      <div class="takeaway-box">
        <div class="takeaway-title">你现在要记住的只有一句话</div>
        <p class="takeaway-text">别手工盖房子，用图纸（代码）让机器自动打印房子。</p>
      </div>
    </div>
    <hr class="separator" />

    <!-- 第58讲 -->
    <div class="lecture-container">
      <div class="lecture-title">`,
    keyTakeaway: ``,
    misconception: ``,
    examTips: `</strong>题目问“基础设施即代码”、“自动化重复部署资源”，选
            <strong>CloudFormation</strong>。
          </p>
        </div>
      </div>`
  },
  {
    id: 58,
    title: `Elastic Beanstalk / Lightsail</div>`,
    content: `<h3>开发者保姆与新手套餐</h3>
      <ul>
        <li>
          <strong>Elastic Beanstalk：</strong>
          <strong>“开发者保姆”</strong>。你只管上传代码（Java、Python等）。Beanstalk 自动帮你搞定底层的
          EC2、ELB、ASG。你依然拥有对底层的控制权，但默认不用管。
        </li>
        <li>
          <strong>Amazon Lightsail：</strong> <strong>“新手套餐”</strong>。就像传统的 VPS。每月 5
          刀，包服务器、硬盘、流量。界面极其简单，适合个人建站。
        </li>
      </ul>

      <h3>📝 考试提示与常见误区</h3>
      <div style="background: #fffbf0; padding: 25px; border-radius: 10px; border: 2px solid #f0e68c; margin: 30px 0">
        <div style="margin-bottom: 20px">
          <p style="margin: 0; font-size: 18px"><strong>❌ 误区：</strong>Elastic Beanstalk 是 Serverless</p>
          <p>不是。它背后还是 EC2，只是 AWS 帮你配置了。它是 PaaS。</p>
        </div>
        <div>
          <p style="margin: 0; font-size: 18px">
            <strong>🔑 联想关键词：</strong>Beanstalk = 快速部署代码/PaaS/自动配置基础设施 | Lightsail =
            简易/固定价格/VPS
          </p>
        </div>
        <div style="margin-top: 15px; padding: 15px; background: #fff; border-radius: 5px">
          <p style="margin: 0; font-size: 16px; color: #666">
            <strong>💡 考点提示：</strong>题目问“开发者想快速部署代码但不关心基础设施”，选
            <strong>Elastic Beanstalk</strong>。问“简单便宜的个人博客/小型应用”，选 <strong>Lightsail</strong>。
          </p>
        </div>
      </div>

      <div class="takeaway-box">
        <div class="takeaway-title">你现在要记住的只有一句话</div>
        <p class="takeaway-text">Beanstalk 是帮你省心的管家，Lightsail 是租好的精装小公寓。</p>
      </div>
    </div>
    <hr class="separator" />

    <!-- 第59讲 -->
    <div class="lecture-container">
      <div class="lecture-title">`,
    keyTakeaway: ``,
    misconception: ``,
    examTips: `</strong>题目问“开发者想快速部署代码但不关心基础设施”，选
            <strong>Elastic Beanstalk</strong>。问“简单便宜的个人博客/小型应用”，选 <strong>Lightsail</strong>。
          </p>
        </div>
      </div>`
  },
  {
    id: 59,
    title: `CloudWatch 监控（深度版）</div>`,
    content: `<h3>系统的体检中心</h3>
      <p>CloudWatch 不止是看 CPU。它有三个核心功能：</p>
      <ul>
        <li><strong>Metrics (指标)：</strong> 体检数据。CPU 80%，磁盘读写 500 次。</li>
        <li><strong>Logs (日志)：</strong> 病历记录。应用程序打印出来的 Log 文件。</li>
        <li>
          <strong>Alarms (告警)：</strong> 报警器。如果 CPU > 90% 持续 5 分钟，就发短信给你，或者触发 Auto Scaling。
        </li>
      </ul>

      <h3>📝 考试提示与常见误区</h3>
      <div style="background: #fffbf0; padding: 25px; border-radius: 10px; border: 2px solid #f0e68c; margin: 30px 0">
        <div style="margin-bottom: 20px">
          <p style="margin: 0; font-size: 18px"><strong>❌ 误区：</strong>CloudWatch 默认监控内存使用率</p>
          <p>
            <strong>大坑！</strong> EC2 默认不把内存数据发给 CloudWatch（因为那是操作系统内部的事）。你想看内存？得装
            CloudWatch Agent。
          </p>
        </div>
        <div>
          <p style="margin: 0; font-size: 18px">
            <strong>🔑 联想关键词：</strong>指标 / 日志 / 告警 / Agent (内存/磁盘空间)
          </p>
        </div>
        <div style="margin-top: 15px; padding: 15px; background: #fff; border-radius: 5px">
          <p style="margin: 0; font-size: 16px; color: #666">
            <strong>💡 考点提示：</strong>题目问“基于内存使用率触发扩容”，必选 <strong>安装 CloudWatch Agent</strong>。
          </p>
        </div>
      </div>

      <div class="takeaway-box">
        <div class="takeaway-title">你现在要记住的只有一句话</div>
        <p class="takeaway-text">它是 AWS 的“眼睛和耳朵”，有问题它是第一个知道的。</p>
      </div>
    </div>
    <hr class="separator" />

    <!-- 第60讲 -->
    <div class="lecture-container">
      <div class="lecture-title">`,
    keyTakeaway: ``,
    misconception: ``,
    examTips: `</strong>题目问“基于内存使用率触发扩容”，必选 <strong>安装 CloudWatch Agent</strong>。
          </p>
        </div>
      </div>`
  },
  {
    id: 60,
    title: `AWS Compute Optimizer</div>`,
    content: `<h3>AI 选型顾问</h3>
      <p>你买了 100 台 m5.xlarge 的机器，真的合适吗？是不是 m5.large 就够了？或者用 t3 更好？</p>
      <p><strong>Compute Optimizer</strong> 利用机器学习分析你的历史使用数据。</p>
      <p>它会告诉你：“嘿，这台机器 CPU 长期只有 5%，建议你换成小一点的，能省 50% 的钱。”</p>

      <h3>📝 考试提示与常见误区</h3>
      <div style="background: #fffbf0; padding: 25px; border-radius: 10px; border: 2px solid #f0e68c; margin: 30px 0">
        <div style="margin-bottom: 20px">
          <p style="margin: 0; font-size: 18px"><strong>❌ 误区：</strong>和 Cost Explorer 混淆</p>
          <p>
            Cost Explorer 主要看钱（账单）。Compute Optimizer
            主要看资源利用率，给你推荐具体的<strong>实例类型</strong>。
          </p>
        </div>
        <div>
          <p style="margin: 0; font-size: 18px">
            <strong>🔑 联想关键词：</strong>机器学习 / 推荐实例类型 / 降本增效 / 调整规格(Right-sizing)
          </p>
        </div>
        <div style="margin-top: 15px; padding: 15px; background: #fff; border-radius: 5px">
          <p style="margin: 0; font-size: 16px; color: #666">
            <strong>💡 考点提示：</strong>题目问“利用机器学习推荐最佳 EC2 实例类型以降低成本”，选
            <strong>Compute Optimizer</strong>。
          </p>
        </div>
      </div>

      <div class="takeaway-box">
        <div class="takeaway-title">你现在要记住的只有一句话</div>
        <p class="takeaway-text">它是帮你省钱的“良心顾问”，不让你花冤枉钱买大机器。</p>
      </div>
    </div>
    <hr class="separator" />

    <!-- 第61讲 -->
    <div class="lecture-container">
      <div class="lecture-title">`,
    keyTakeaway: ``,
    misconception: ``,
    examTips: `</strong>题目问“利用机器学习推荐最佳 EC2 实例类型以降低成本”，选
            <strong>Compute Optimizer</strong>。
          </p>
        </div>
      </div>`
  },
  {
    id: 61,
    title: `AWS Control Tower</div>`,
    content: `<h3>多账号的自动治理</h3>
      <p>大公司有几百个 AWS 账号，怎么管？每个都手动配置安全规则？</p>
      <p><strong>Control Tower</strong> 是一个<strong>“治理工厂”</strong>。</p>
      <p>
        它基于 AWS Organizations，自动帮你建立一个符合最佳实践的“着陆区”（Landing
        Zone）。每开一个新账号，它自动把安全规则（Guardrails）套上去。
      </p>

      <h3>📝 考试提示与常见误区</h3>
      <div style="background: #fffbf0; padding: 25px; border-radius: 10px; border: 2px solid #f0e68c; margin: 30px 0">
        <div style="margin-bottom: 20px">
          <p style="margin: 0; font-size: 18px"><strong>❌ 误区：</strong>和 Organizations 混淆</p>
          <p>
            Control Tower 是建立在 Organizations <strong>之上</strong>的高级服务。它更自动化，包含了一套预设的最佳实践。
          </p>
        </div>
        <div>
          <p style="margin: 0; font-size: 18px">
            <strong>🔑 联想关键词：</strong>Landing Zone / 护栏(Guardrails) / 多账号治理 / 最佳实践
          </p>
        </div>
        <div style="margin-top: 15px; padding: 15px; background: #fff; border-radius: 5px">
          <p style="margin: 0; font-size: 16px; color: #666">
            <strong>💡 考点提示：</strong>题目问“自动化建立安全合规的多账号环境”或“Landing Zone”，选
            <strong>Control Tower</strong>。
          </p>
        </div>
      </div>

      <div class="takeaway-box">
        <div class="takeaway-title">你现在要记住的只有一句话</div>
        <p class="takeaway-text">它是“开箱即用”的企业级多账号管理套件。</p>
      </div>
    </div>
    <hr class="separator" />

    <!-- 第62讲 -->
    <div class="lecture-container">
      <div class="lecture-title">`,
    keyTakeaway: ``,
    misconception: ``,
    examTips: `</strong>题目问“自动化建立安全合规的多账号环境”或“Landing Zone”，选
            <strong>Control Tower</strong>。
          </p>
        </div>
      </div>`
  },
  {
    id: 62,
    title: `AWS Health Dashboard</div>`,
    content: `<h3>系统公告栏</h3>
      <p>你的 EC2 连不上了，到底是你的问题，还是 AWS 整个区域挂了？</p>
      <p>去 <strong>Health Dashboard</strong> 看看。</p>
      <ul>
        <li><strong>Service Health Dashboard：</strong> 公共的。看 AWS 全球服务是不是绿的（正常）。</li>
        <li>
          <strong>Personal Health Dashboard：</strong> 私人的。专门告诉你：“你这台具体的 EC2
          所在的物理机要维修了，请注意。”
        </li>
      </ul>

      <h3>📝 考试提示与常见误区</h3>
      <div style="background: #fffbf0; padding: 25px; border-radius: 10px; border: 2px solid #f0e68c; margin: 30px 0">
        <div style="margin-bottom: 20px">
          <p style="margin: 0; font-size: 18px"><strong>❌ 误区：</strong>以为它只显示 AWS 大规模故障</p>
          <p>Personal 版会显示影响你具体资源的细微事件。</p>
        </div>
        <div>
          <p style="margin: 0; font-size: 18px"><strong>🔑 联想关键词：</strong>服务状态 / 维护通知 / 故障排查</p>
        </div>
        <div style="margin-top: 15px; padding: 15px; background: #fff; border-radius: 5px">
          <p style="margin: 0; font-size: 16px; color: #666">
            <strong>💡 考点提示：</strong>题目问“收到硬件维护通知”或“检查 AWS 服务是否中断”，选
            <strong>Personal Health Dashboard</strong>。
          </p>
        </div>
      </div>

      <div class="takeaway-box">
        <div class="takeaway-title">你现在要记住的只有一句话</div>
        <p class="takeaway-text">有问题先看它，区分是“你的锅”还是“AWS 的锅”。</p>
      </div>
    </div>
    <hr class="separator" />

    <!-- 第63讲 -->
    <div class="lecture-container">
      <div class="lecture-title">`,
    keyTakeaway: ``,
    misconception: ``,
    examTips: `</strong>题目问“收到硬件维护通知”或“检查 AWS 服务是否中断”，选
            <strong>Personal Health Dashboard</strong>。
          </p>
        </div>
      </div>`
  },
  {
    id: 63,
    title: `AWS License Manager</div>`,
    content: `<h3>软件授权管家</h3>
      <p>你在云上用 Oracle、Windows Server，这些软件是要买 License（许可证）的。</p>
      <p>如果你不小心开多了机器，超过了购买的许可数量，可能会面临巨额罚款。</p>
      <p>
        <strong>License Manager</strong> 帮你盯着。你可以设置规则：“只允许开 10 台
        Windows”。一旦超过，它会报警或者直接阻止你创建实例。
      </p>

      <h3>📝 考试提示与常见误区</h3>
      <div style="background: #fffbf0; padding: 25px; border-radius: 10px; border: 2px solid #f0e68c; margin: 30px 0">
        <div style="margin-bottom: 20px">
          <p style="margin: 0; font-size: 18px"><strong>❌ 误区：</strong>和 Service Catalog 混淆</p>
        </div>
        <div>
          <p style="margin: 0; font-size: 18px">
            <strong>🔑 联想关键词：</strong>BYOL (Bring Your Own License) / 软件合规 / 限制 vCPU 数量
          </p>
        </div>
        <div style="margin-top: 15px; padding: 15px; background: #fff; border-radius: 5px">
          <p style="margin: 0; font-size: 16px; color: #666">
            <strong>💡 考点提示：</strong>题目问“管理本地迁移上来的软件许可证”或“防止违反软件授权协议”，选
            <strong>License Manager</strong>。
          </p>
        </div>
      </div>

      <div class="takeaway-box">
        <div class="takeaway-title">你现在要记住的只有一句话</div>
        <p class="takeaway-text">它帮你省下可能因为违规而被罚的巨款。</p>
      </div>
    </div>
    <hr class="separator" />

    <!-- 第64讲 -->
    <div class="lecture-container">
      <div class="lecture-title">`,
    keyTakeaway: ``,
    misconception: ``,
    examTips: `</strong>题目问“管理本地迁移上来的软件许可证”或“防止违反软件授权协议”，选
            <strong>License Manager</strong>。
          </p>
        </div>
      </div>`
  },
  {
    id: 64,
    title: `AWS Service Catalog</div>`,
    content: `<h3>公司内部的软件商店</h3>
      <p>你不想让员工随便创建 EC2（怕他们选最贵的，或者没配安全组）。</p>
      <p>你用 CloudFormation 写好一个“标准套餐”（t3.micro + 预设安全组），放进 <strong>Service Catalog</strong>。</p>
      <p>员工就像逛淘宝一样，只能在这个目录里点“购买”（启动）。这样既给了他们自助服务的自由，又保证了合规。</p>

      <h3>📝 考试提示与常见误区</h3>
      <div style="background: #fffbf0; padding: 25px; border-radius: 10px; border: 2px solid #f0e68c; margin: 30px 0">
        <div style="margin-bottom: 20px">
          <p style="margin: 0; font-size: 18px"><strong>❌ 误区：</strong>和 Marketplace 混淆</p>
          <p>
            Marketplace 是买<strong>第三方</strong>软件的。Service Catalog 是管理<strong>公司内部</strong>标准产品的。
          </p>
        </div>
        <div>
          <p style="margin: 0; font-size: 18px">
            <strong>🔑 联想关键词：</strong>自助服务 / 预批准的产品 / 治理 / 投资组合(Portfolio)
          </p>
        </div>
        <div style="margin-top: 15px; padding: 15px; background: #fff; border-radius: 5px">
          <p style="margin: 0; font-size: 16px; color: #666">
            <strong>💡 考点提示：</strong>题目问“允许员工自助部署符合公司标准的服务”，选
            <strong>Service Catalog</strong>。
          </p>
        </div>
      </div>

      <div class="takeaway-box">
        <div class="takeaway-title">你现在要记住的只有一句话</div>
        <p class="takeaway-text">这是 IT 部门给员工开的“合规小卖部”。</p>
      </div>
    </div>
    <hr class="separator" />

    <!-- 第65讲 -->
    <div class="lecture-container">
      <div class="lecture-title">`,
    keyTakeaway: ``,
    misconception: ``,
    examTips: `</strong>题目问“允许员工自助部署符合公司标准的服务”，选
            <strong>Service Catalog</strong>。
          </p>
        </div>
      </div>`
  },
  {
    id: 65,
    title: `Service Quotas</div>`,
    content: `<h3>配额查询器</h3>
      <p>AWS 为了防止你误操作（或没钱付账），对每个账号都有<strong>“软限制”</strong>。</p>
      <p>比如：默认一个 Region 只能开 5 个 VPC。</p>
      <p>
        如果你想开第 6 个，会报错。这时候你去 <strong>Service Quotas</strong>，点一下“申请提额”，AWS 客服批准了就行。
      </p>

      <h3>📝 考试提示与常见误区</h3>
      <div style="background: #fffbf0; padding: 25px; border-radius: 10px; border: 2px solid #f0e68c; margin: 30px 0">
        <div style="margin-bottom: 20px">
          <p style="margin: 0; font-size: 18px"><strong>❌ 误区：</strong>所有限制都能提升</p>
          <p>有些是硬限制（Hard Limit），提不了。</p>
        </div>
        <div>
          <p style="margin: 0; font-size: 18px"><strong>🔑 联想关键词：</strong>限制(Limits) / 提额请求 / 默认配额</p>
        </div>
        <div style="margin-top: 15px; padding: 15px; background: #fff; border-radius: 5px">
          <p style="margin: 0; font-size: 16px; color: #666">
            <strong>💡 考点提示：</strong>题目说“启动实例失败，提示达到限制”，解决办法是去
            <strong>Service Quotas</strong> 申请提额。
          </p>
        </div>
      </div>

      <div class="takeaway-box">
        <div class="takeaway-title">你现在要记住的只有一句话</div>
        <p class="takeaway-text">想做大生意（大规模部署），得先来这里申请“信用额度”。</p>
      </div>
    </div>
    <hr class="separator" />

    <!-- 第66讲 -->
    <div class="lecture-container">
      <div class="lecture-title">`,
    keyTakeaway: ``,
    misconception: ``,
    examTips: `</strong>题目说“启动实例失败，提示达到限制”，解决办法是去
            <strong>Service Quotas</strong> 申请提额。
          </p>
        </div>
      </div>`
  },
  {
    id: 66,
    title: `AWS Systems Manager (SSM)</div>`,
    content: `<h3>万能运维瑞士军刀</h3>
      <p>如果你有 1000 台服务器，想给它们都打个补丁，或者运行一条命令。</p>
      <p>你不会一台台 SSH 登录进去吧？</p>
      <p><strong>Systems Manager</strong> 让你在控制台点几下，就能批量管理所有服务器（包括云上的和本地的）。</p>
      <p>它的 <strong>Session Manager</strong> 甚至能让你无需 SSH 密钥就能安全登录实例。</p>

      <h3>📝 考试提示与常见误区</h3>
      <div style="background: #fffbf0; padding: 25px; border-radius: 10px; border: 2px solid #f0e68c; margin: 30px 0">
        <div style="margin-bottom: 20px">
          <p style="margin: 0; font-size: 18px"><strong>❌ 误区：</strong>SSM 只能管 EC2</p>
          <p>装了 Agent，它也能管本地机房的服务器（混合云）。</p>
        </div>
        <div>
          <p style="margin: 0; font-size: 18px">
            <strong>🔑 联想关键词：</strong>Patch Manager (打补丁) / Session Manager (免密登录) / Run Command (批量命令)
            / Parameter Store
          </p>
        </div>
        <div style="margin-top: 15px; padding: 15px; background: #fff; border-radius: 5px">
          <p style="margin: 0; font-size: 16px; color: #666">
            <strong>💡 考点提示：</strong>题目问“安全登录 EC2 且不开启 22 端口”，选
            <strong>Session Manager</strong>。问“批量打补丁”，选 <strong>Patch Manager</strong>。
          </p>
        </div>
      </div>

      <div class="takeaway-box">
        <div class="takeaway-title">你现在要记住的只有一句话</div>
        <p class="takeaway-text">运维的神器，告别 SSH 密钥，告别手工重复劳动。</p>
      </div>
    </div>
    <hr class="separator" />

    <!-- 第67讲 -->
    <div class="lecture-container">
      <div class="lecture-title">`,
    keyTakeaway: ``,
    misconception: ``,
    examTips: `</strong>题目问“安全登录 EC2 且不开启 22 端口”，选
            <strong>Session Manager</strong>。问“批量打补丁”，选 <strong>Patch Manager</strong>。
          </p>
        </div>
      </div>`
  },
  {
    id: 67,
    title: `Amazon Cognito</div>`,
    content: `<h3>App 的用户中心</h3>
      <p>你做了一个手机 App，需要用户注册、登录。你不想自己写一套“用户数据库+密码加密+找回密码+手机验证码”的系统。</p>
      <p><strong>Cognito</strong> 就是现成的<strong>“用户管理后台”</strong>。</p>
      <ul>
        <li><strong>User Pool：</strong> 存账号密码的。支持注册、登录、MFA。</li>
        <li><strong>Identity Pool：</strong> 换取权限的。登录成功后，换一个 IAM 角色，让用户能直接上传文件到 S3。</li>
      </ul>

      <h3>📝 考试提示与常见误区</h3>
      <div style="background: #fffbf0; padding: 25px; border-radius: 10px; border: 2px solid #f0e68c; margin: 30px 0">
        <div style="margin-bottom: 20px">
          <p style="margin: 0; font-size: 18px"><strong>❌ 误区：</strong>Identity Pool 和 User Pool 混淆</p>
        </div>
        <div>
          <p style="margin: 0; font-size: 18px">
            <strong>🔑 联想关键词：</strong>Web/移动端身份认证 / 社交登录(Google/Facebook) / User Pool(认证) / Identity
            Pool(授权)
          </p>
        </div>
        <div style="margin-top: 15px; padding: 15px; background: #fff; border-radius: 5px">
          <p style="margin: 0; font-size: 16px; color: #666">
            <strong>💡 考点提示：</strong>题目问“为移动 App 提供注册登录功能”，选 <strong>User Pool</strong>。问“让 App
            用户临时访问 AWS 资源（如 S3）”，选 <strong>Identity Pool</strong>。
          </p>
        </div>
      </div>

      <div class="takeaway-box">
        <div class="takeaway-title">你现在要记住的只有一句话</div>
        <p class="takeaway-text">别自己造“登录注册”的轮子，用 Cognito 直接套用。</p>
      </div>
    </div>
  </body>
</html>`,
    keyTakeaway: ``,
    misconception: ``,
    examTips: `</strong>题目问“为移动 App 提供注册登录功能”，选 <strong>User Pool</strong>。问“让 App
            用户临时访问 AWS 资源（如 S3）”，选 <strong>Identity Pool</strong>。
          </p>
        </div>
      </div>`
  },
  {
    id: 68,
    title: `定价模型总览</div>`,
    content: `<h3>买东西的四种方式</h3>
      <p>EC2 是 AWS 账单的大头。怎么买最划算？就像买车票：</p>
      <ul>
        <li><strong>On-Demand (按需)：</strong> <strong>“随时买票”</strong>。最贵，但最灵活。随用随开，随停随走。</li>
        <li>
          <strong>Reserved Instances (RI)：</strong> <strong>“买年票”</strong>。承诺用 1 年或 3 年。打折很多（最高
          75%）。
        </li>
        <li>
          <strong>Savings Plans：</strong> <strong>“储值卡”</strong>。承诺每小时消费 10 块钱，不管是买 EC2 还是
          Lambda。比 RI 更灵活。
        </li>
        <li>
          <strong>Spot Instances：</strong> <strong>“捡漏票”</strong>。AWS 有空闲资源时便宜卖（最高 90%
          折扣）。但可能会随时被收回。
        </li>
      </ul>

      <div class="misconception">
        <p><strong>❌ 误区：</strong>Spot 实例很稳定</p>
        <p>Spot 随时可能被中断（只给你 2 分钟通知）。千万别跑关键业务（比如数据库）。</p>
      </div>

      <h3>📝 考试提示与常见误区</h3>
      <div style="background: #fffbf0; padding: 25px; border-radius: 10px; border: 2px solid #f0e68c; margin: 30px 0">
        <div style="margin-bottom: 20px">
          <p style="margin: 0; font-size: 18px"><strong>❌ 误区：</strong>把 Savings Plans 和 RI 绑定方式混淆</p>
        </div>
        <div>
          <p style="margin: 0; font-size: 18px">
            <strong>🔑 联想关键词：</strong>On-Demand(短期/测试) | RI(长期/稳态/特定规格) | Savings
            Plans(长期/灵活/承诺金额) | Spot(捡漏/容错)
          </p>
        </div>
        <div style="margin-top: 15px; padding: 15px; background: #fff; border-radius: 5px">
          <p style="margin: 0; font-size: 16px; color: #666">
            <strong>💡 考点提示：</strong>题目问“不可中断的短期工作负载”，选
            <strong>On-Demand</strong>。问“长时间运行的稳态数据库”，选
            <strong>RI</strong>。问“大规模无状态计算且想最省钱”，选 <strong>Spot</strong>。
          </p>
        </div>
      </div>

      <div class="takeaway-box">
        <div class="takeaway-title">你现在要记住的只有一句话</div>
        <p class="takeaway-text">长期用买年票（RI/SP），短期用买散票（On-Demand），捡漏用 Spot。</p>
      </div>
    </div>
    <hr class="separator" />

    <!-- 第69讲 -->
    <div class="lecture-container">
      <div class="lecture-title">`,
    keyTakeaway: ``,
    misconception: ``,
    examTips: `</strong>题目问“不可中断的短期工作负载”，选
            <strong>On-Demand</strong>。问“长时间运行的稳态数据库”，选
            <strong>RI</strong>。问“大规模无状态计算且想最省钱”，选 <strong>Spot</strong>。
          </p>
        </div>
      </div>`
  },
  {
    id: 69,
    title: `RI 与 Savings Plans</div>`,
    content: `<h3>年票升级版</h3>
      <p>
        <strong>Reserved Instances (RI)</strong> 是老式的年票。你需要指定：“我要买
        m5.large，在东京区域，Linux系统”。如果你后来想换成 c5.large，或者换到悉尼，就很麻烦。
      </p>
      <p>
        <strong>Savings Plans</strong> 是新式的储值卡。你只承诺：“我每小时花 10 美元”。至于你是跑 m5 还是
        c5，跑在东京还是悉尼，甚至是跑 Lambda，都无所谓。只要花够钱，就打折。
      </p>

      <h3>📝 考试提示与常见误区</h3>
      <div style="background: #fffbf0; padding: 25px; border-radius: 10px; border: 2px solid #f0e68c; margin: 30px 0">
        <div style="margin-bottom: 20px">
          <p style="margin: 0; font-size: 18px"><strong>❌ 误区：</strong>认为 Savings Plans 和 RI 完全等价</p>
          <p>Savings Plans（Compute SP）提供了极大的灵活性（跨家族、跨区域、Fargate/Lambda），是 AWS 推荐的首选。</p>
        </div>
        <div>
          <p style="margin: 0; font-size: 18px">
            <strong>🔑 联想关键词：</strong>承诺消费额(Commitment) / 灵活性 / Compute Savings Plans
          </p>
        </div>
        <div style="margin-top: 15px; padding: 15px; background: #fff; border-radius: 5px">
          <p style="margin: 0; font-size: 16px; color: #666">
            <strong>💡 考点提示：</strong>题目问“最灵活的长期折扣”选 <strong>Savings Plans</strong>。
          </p>
        </div>
      </div>

      <div class="takeaway-box">
        <div class="takeaway-title">你现在要记住的只有一句话</div>
        <p class="takeaway-text">除非必须用 RI（如 RDS RI），否则闭眼选 Savings Plans。</p>
      </div>
    </div>
    <hr class="separator" />

    <!-- 第70讲 -->
    <div class="lecture-container">
      <div class="lecture-title">`,
    keyTakeaway: ``,
    misconception: ``,
    examTips: `</strong>题目问“最灵活的长期折扣”选 <strong>Savings Plans</strong>。
          </p>
        </div>
      </div>`
  },
  {
    id: 70,
    title: `Spot 实例</div>`,
    content: `<h3>云上的跳楼大甩卖</h3>
      <p>AWS 的机房里总有一些机器没人用。空着也是空着，AWS 就以 1 折的价格甩卖，这就是 <strong>Spot</strong>。</p>
      <p><strong>代价是：</strong> 如果有全价客户来了，AWS 会把你踢走（Terminated），只提前 2 分钟通知你。</p>
      <p>所以它适合跑：批处理、大数据计算、CI/CD 测试。反正挂了重跑就行。</p>

      <h3>📝 考试提示与常见误区</h3>
      <div style="background: #fffbf0; padding: 25px; border-radius: 10px; border: 2px solid #f0e68c; margin: 30px 0">
        <div style="margin-bottom: 20px">
          <p style="margin: 0; font-size: 18px"><strong>❌ 误区：</strong>Spot 可以用于数据库</p>
          <p>绝对不行！数据库突然关机数据就丢了（或损坏）。</p>
        </div>
        <div>
          <p style="margin: 0; font-size: 18px">
            <strong>🔑 联想关键词：</strong>90%折扣 / 中断 / 容错 / 无状态应用 / Spot Fleet
          </p>
        </div>
        <div style="margin-top: 15px; padding: 15px; background: #fff; border-radius: 5px">
          <p style="margin: 0; font-size: 16px; color: #666">
            <strong>💡 考点提示：</strong>题目问“最低成本运行可中断的批处理任务”，选 <strong>Spot Instances</strong>。
          </p>
        </div>
      </div>

      <div class="takeaway-box">
        <div class="takeaway-title">你现在要记住的只有一句话</div>
        <p class="takeaway-text">只要你的应用不怕死（无状态），用 Spot 能省大钱。</p>
      </div>
    </div>
    <hr class="separator" />

    <!-- 第71讲 -->
    <div class="lecture-container">
      <div class="lecture-title">`,
    keyTakeaway: ``,
    misconception: ``,
    examTips: `</strong>题目问“最低成本运行可中断的批处理任务”，选 <strong>Spot Instances</strong>。
          </p>
        </div>
      </div>`
  },
  {
    id: 71,
    title: `Cost Explorer 与 Budgets</div>`,
    content: `<h3>账本与警报器</h3>
      <ul>
        <li>
          <strong>Cost Explorer：</strong>
          <strong>“查账本”</strong>。看过去几个月钱花哪了？预测下个月要花多少？画出漂亮的柱状图。它是用来“分析”的。
        </li>
        <li>
          <strong>AWS Budgets：</strong> <strong>“报警器”</strong>。设置一个红线：“如果本月花费超过 1000
          刀，发邮件骂我”。它是用来“告警”的。
        </li>
      </ul>

      <h3>📝 考试提示与常见误区</h3>
      <div style="background: #fffbf0; padding: 25px; border-radius: 10px; border: 2px solid #f0e68c; margin: 30px 0">
        <div style="margin-bottom: 20px">
          <p style="margin: 0; font-size: 18px"><strong>❌ 误区：</strong>把 Budgets 当成本分析工具</p>
        </div>
        <div>
          <p style="margin: 0; font-size: 18px">
            <strong>🔑 联想关键词：</strong>Explorer=历史/趋势/可视化 | Budgets=阈值/告警/预测超支
          </p>
        </div>
        <div style="margin-top: 15px; padding: 15px; background: #fff; border-radius: 5px">
          <p style="margin: 0; font-size: 16px; color: #666">
            <strong>💡 考点提示：</strong>题目问“分析上个月为什么超支”，选
            <strong>Cost Explorer</strong>。问“防止下个月超支”，选 <strong>AWS Budgets</strong>。
          </p>
        </div>
      </div>

      <div class="takeaway-box">
        <div class="takeaway-title">你现在要记住的只有一句话</div>
        <p class="takeaway-text">Cost Explorer 让你死个明白，Budgets 让你别死得太惨。</p>
      </div>
    </div>
    <hr class="separator" />

    <!-- 第72讲 -->
    <div class="lecture-container">
      <div class="lecture-title">`,
    keyTakeaway: ``,
    misconception: ``,
    examTips: `</strong>题目问“分析上个月为什么超支”，选
            <strong>Cost Explorer</strong>。问“防止下个月超支”，选 <strong>AWS Budgets</strong>。
          </p>
        </div>
      </div>`
  },
  {
    id: 72,
    title: `支持计划层级 (Support Plans)</div>`,
    content: `<h3>VIP等级制度</h3>
      <p>出了问题找客服，AWS 是分等级的：</p>
      <ul>
        <li><strong>Basic (免费)：</strong> 只能看文档，没法找人（除了账单问题）。</li>
        <li><strong>Developer (开发者)：</strong> 能发邮件问技术问题，回复慢（工作时间）。</li>
        <li><strong>Business (商业)：</strong> 能打电话（7x24小时），回复快（<1小时）。大部分公司选这个。</li>
        <li><strong>Enterprise (企业)：</strong> 有专门的管家（TAM - 技术客户经理），15分钟内响应。只有大金主才用。</li>
      </ul>

      <h3>📝 考试提示与常见误区</h3>
      <div style="background: #fffbf0; padding: 25px; border-radius: 10px; border: 2px solid #f0e68c; margin: 30px 0">
        <div style="margin-bottom: 20px">
          <p style="margin: 0; font-size: 18px"><strong>❌ 误区：</strong>忽视 TAM 的专属作用</p>
          <p>TAM (Technical Account Manager) 是 Enterprise 计划独有的。</p>
        </div>
        <div>
          <p style="margin: 0; font-size: 18px">
            <strong>🔑 联想关键词：</strong>Basic=无技术支持 | Dev=邮件 | Biz=24x7电话 | Enterprise=TAM/15分钟响应
          </p>
        </div>
        <div style="margin-top: 15px; padding: 15px; background: #fff; border-radius: 5px">
          <p style="margin: 0; font-size: 16px; color: #666">
            <strong>💡 考点提示：</strong>题目问“关键业务系统停机需要 15 分钟响应”或“需要专门的技术指导(TAM)”，必选
            <strong>Enterprise</strong>。
          </p>
        </div>
      </div>

      <div class="takeaway-box">
        <div class="takeaway-title">你现在要记住的只有一句话</div>
        <p class="takeaway-text">想有人接电话，至少买 Business。</p>
      </div>
    </div>
    <hr class="separator" />

    <!-- 第73讲 -->
    <div class="lecture-container">
      <div class="lecture-title">`,
    keyTakeaway: ``,
    misconception: ``,
    examTips: `</strong>题目问“关键业务系统停机需要 15 分钟响应”或“需要专门的技术指导(TAM)”，必选
            <strong>Enterprise</strong>。
          </p>
        </div>
      </div>`
  },
  {
    id: 73,
    title: `Trusted Advisor</div>`,
    content: `<h3>云端老中医</h3>
      <p>AWS 雇了一个老专家，自动帮你给账号“把脉”。它检查 5 个方面：</p>
      <ul>
        <li><strong>成本：</strong> 比如“你有台 EC2 空转一个月了，关了吧”。</li>
        <li><strong>性能：</strong> “这台机器负载太高，建议升级”。</li>
        <li><strong>安全：</strong> “你 Root 账号没开 MFA，很危险”。</li>
        <li><strong>容错：</strong> “你只在一个 AZ 部署了，断电就完了”。</li>
        <li><strong>配额：</strong> “你的 VPC 数量快到上限了”。</li>
      </ul>

      <h3>📝 考试提示与常见误区</h3>
      <div style="background: #fffbf0; padding: 25px; border-radius: 10px; border: 2px solid #f0e68c; margin: 30px 0">
        <div style="margin-bottom: 20px">
          <p style="margin: 0; font-size: 18px"><strong>❌ 误区：</strong>把 TA 当实时监控</p>
          <p>它不是监控仪表盘（那是 CloudWatch），它是一份<strong>“体检报告”</strong>和建议书。</p>
        </div>
        <div>
          <p style="margin: 0; font-size: 18px">
            <strong>🔑 联想关键词：</strong>最佳实践 / 5大支柱检查 / 节省成本建议
          </p>
        </div>
        <div style="margin-top: 15px; padding: 15px; background: #fff; border-radius: 5px">
          <p style="margin: 0; font-size: 16px; color: #666">
            <strong>💡 考点提示：</strong>题目问“如何检查账号是否遵循最佳实践”或“寻找闲置资源以降低成本”，选
            <strong>Trusted Advisor</strong>。
          </p>
        </div>
      </div>

      <div class="takeaway-box">
        <div class="takeaway-title">你现在要记住的只有一句话</div>
        <p class="takeaway-text">没事去听听这位老中医的建议，既能省钱又能保命。</p>
      </div>
    </div>
    <hr class="separator" />

    <!-- 第74讲 -->
    <div class="lecture-container">
      <div class="lecture-title">`,
    keyTakeaway: ``,
    misconception: ``,
    examTips: `</strong>题目问“如何检查账号是否遵循最佳实践”或“寻找闲置资源以降低成本”，选
            <strong>Trusted Advisor</strong>。
          </p>
        </div>
      </div>`
  },
  {
    id: 74,
    title: `Organizations / 合并计费</div>`,
    content: `<h3>集团总账</h3>
      <p>如果你有 10 个 AWS 账号（开发号、测试号、生产号...），每个月收 10 张账单，财务会疯掉。</p>
      <p><strong>Organizations</strong> 把所有账号绑在一起，形成一个“组织”。</p>
      <p><strong>Consolidated Billing (合并计费)：</strong></p>
      <ul>
        <li><strong>一张账单：</strong> 主账号统一付钱。</li>
        <li>
          <strong>量大优惠：</strong> 所有子账号的用量加在一起算。比如 S3 存储越存越便宜，合并后更容易达到降价阶梯。
        </li>
      </ul>

      <h3>📝 考试提示与常见误区</h3>
      <div style="background: #fffbf0; padding: 25px; border-radius: 10px; border: 2px solid #f0e68c; margin: 30px 0">
        <div style="margin-bottom: 20px">
          <p style="margin: 0; font-size: 18px"><strong>❌ 误区：</strong>把 SCP 当跨账户权限分配工具</p>
          <p>
            SCP (Service Control Policy)
            是用来<strong>画红线</strong>的（比如“禁止任何账号在非东京区域开机器”），它不能授予权限，只能限制权限。
          </p>
        </div>
        <div>
          <p style="margin: 0; font-size: 18px">
            <strong>🔑 联想关键词：</strong>多账号管理 / 统一账单 / 批量折扣 / SCP
          </p>
        </div>
        <div style="margin-top: 15px; padding: 15px; background: #fff; border-radius: 5px">
          <p style="margin: 0; font-size: 16px; color: #666">
            <strong>💡 考点提示：</strong>题目问“简化多账号账单管理”或“共享折扣权益”，选
            <strong>Consolidated Billing</strong>。
          </p>
        </div>
      </div>

      <div class="takeaway-box">
        <div class="takeaway-title">你现在要记住的只有一句话</div>
        <p class="takeaway-text">一家人就要整整齐齐，一起付钱还能打折。</p>
      </div>
    </div>
    <hr class="separator" />

    <!-- 第75讲 -->
    <div class="lecture-container">
      <div class="lecture-title">`,
    keyTakeaway: ``,
    misconception: ``,
    examTips: `</strong>题目问“简化多账号账单管理”或“共享折扣权益”，选
            <strong>Consolidated Billing</strong>。
          </p>
        </div>
      </div>`
  },
  {
    id: 75,
    title: `Free Tier 与数据传输成本</div>`,
    content: `<h3>免费的午餐与过路费</h3>
      <p>
        <strong>Free Tier (免费套餐)：</strong> AWS 用来钓鱼的饵。有些是“永久免费”（如 Lambda 每月前 100
        万次），有些是“首年免费”（如 t2.micro 每月 750 小时）。
      </p>
      <p><strong>Data Transfer (过路费)：</strong> 这是最大的坑。</p>
      <ul>
        <li><strong>传入 (Inbound)：</strong> 免费。AWS 欢迎你把数据传上来。</li>
        <li><strong>传出 (Outbound)：</strong> 收费！你要把数据下载走，或者传给互联网用户，都要留下买路财。</li>
      </ul>

      <h3>📝 考试提示与常见误区</h3>
      <div style="background: #fffbf0; padding: 25px; border-radius: 10px; border: 2px solid #f0e68c; margin: 30px 0">
        <div style="margin-bottom: 20px">
          <p style="margin: 0; font-size: 18px"><strong>❌ 误区：</strong>误以为内部/跨区传输总免费</p>
          <p>跨 Region 传输是要收费的。跨 AZ 传输也是要收费的。只有同 AZ 内私有 IP 传输才免费。</p>
        </div>
        <div>
          <p style="margin: 0; font-size: 18px">
            <strong>🔑 联想关键词：</strong>12个月免费 / 永久免费 / Inbound Free / Outbound Cost
          </p>
        </div>
      </div>

      <div class="takeaway-box">
        <div class="takeaway-title">你现在要记住的只有一句话</div>
        <p class="takeaway-text">进来容易出去难，设计架构时一定要盯着“流量费”。</p>
      </div>
    </div>
    <hr class="separator" />

    <!-- 第76讲 -->
    <div class="lecture-container">
      <div class="lecture-title">`,
    keyTakeaway: ``,
    misconception: ``,
    examTips: ``
  },
  {
    id: 76,
    title: `Cost and Usage Reports (CUR)</div>`,
    content: `<h3>原始账单明细</h3>
      <p>Cost Explorer 是给你画图看的。</p>
      <p><strong>CUR</strong> 是给你<strong>“最原始的 Excel 表”</strong>（CSV格式）。</p>
      <p>
        每一行记录了你每一个资源、每一小时的详细花费。它是 AWS 能提供的最详细的成本数据。你可以把它导入到 Athena 或
        Redshift 里自己做深度分析。
      </p>

      <h3>📝 考试提示与常见误区</h3>
      <div style="background: #fffbf0; padding: 25px; border-radius: 10px; border: 2px solid #f0e68c; margin: 30px 0">
        <div style="margin-bottom: 20px">
          <p style="margin: 0; font-size: 18px"><strong>❌ 误区：</strong>和 Cost Explorer 混淆</p>
          <p>CE 是可视化工具。CUR 是<strong>数据源</strong>。</p>
        </div>
        <div>
          <p style="margin: 0; font-size: 18px">
            <strong>🔑 联想关键词：</strong>最详细 / 导出到 S3 / 自定义分析 / 颗粒度
          </p>
        </div>
        <div style="margin-top: 15px; padding: 15px; background: #fff; border-radius: 5px">
          <p style="margin: 0; font-size: 16px; color: #666">
            <strong>💡 考点提示：</strong>题目问“需要最精细的成本数据进行自定义分析”，选 <strong>CUR</strong>。
          </p>
        </div>
      </div>

      <div class="takeaway-box">
        <div class="takeaway-title">你现在要记住的只有一句话</div>
        <p class="takeaway-text">它是给会计师查账用的“原始流水单”。</p>
      </div>
    </div>
    <hr class="separator" />

    <!-- 第77讲 -->
    <div class="lecture-container">
      <div class="lecture-title">`,
    keyTakeaway: ``,
    misconception: ``,
    examTips: `</strong>题目问“需要最精细的成本数据进行自定义分析”，选 <strong>CUR</strong>。
          </p>
        </div>
      </div>`
  },
  {
    id: 77,
    title: `AWS Marketplace</div>`,
    content: `<h3>软件淘宝</h3>
      <p>你想用 WordPress、Palo Alto 防火墙、Splunk？</p>
      <p>
        不用自己去官网下载安装包。去 <strong>AWS Marketplace</strong>，点一下“购买”，AWS
        就自动帮你启动一台装好这个软件的 EC2。
      </p>
      <p>软件费会直接合并在你的 AWS 账单里，不用单独付钱给软件商。</p>

      <h3>📝 考试提示与常见误区</h3>
      <div style="background: #fffbf0; padding: 25px; border-radius: 10px; border: 2px solid #f0e68c; margin: 30px 0">
        <div style="margin-bottom: 20px">
          <p style="margin: 0; font-size: 18px"><strong>❌ 误区：</strong>误以为全部免费</p>
          <p>有些是免费开源的（只收 EC2 钱），有些是收费的商业软件（EC2 钱 + 软件许可费）。</p>
        </div>
        <div>
          <p style="margin: 0; font-size: 18px">
            <strong>🔑 联想关键词：</strong>第三方软件 / 镜像(AMI) / 简化采购 / 合并账单
          </p>
        </div>
        <div style="margin-top: 15px; padding: 15px; background: #fff; border-radius: 5px">
          <p style="margin: 0; font-size: 16px; color: #666">
            <strong>💡 考点提示：</strong>题目问“快速部署第三方安全设备/操作系统/应用”，选
            <strong>Marketplace</strong>。
          </p>
        </div>
      </div>

      <div class="takeaway-box">
        <div class="takeaway-title">你现在要记住的只有一句话</div>
        <p class="takeaway-text">买软件像买淘宝一样简单。</p>
      </div>
    </div>
    <hr class="separator" />

    <!-- 第78讲 -->
    <div class="lecture-container">
      <div class="lecture-title">`,
    keyTakeaway: ``,
    misconception: ``,
    examTips: `</strong>题目问“快速部署第三方安全设备/操作系统/应用”，选
            <strong>Marketplace</strong>。
          </p>
        </div>
      </div>`
  },
  {
    id: 78,
    title: `Amazon Athena</div>`,
    content: `<h3>S3 里的查询器</h3>
      <p>你的数据（CSV, JSON, Log）都扔在 S3 桶里，像一堆乱糟糟的文件。</p>
      <p>如果你想查：“上个月有多少错误日志？” 难道要把文件下载下来一个打开看吗？</p>
      <p>不用。用 <strong>Athena</strong>，你直接写 SQL 语句，它就能直接去 S3 里把结果查出来。不需要建数据库！</p>

      <h3>📝 考试提示与常见误区</h3>
      <div style="background: #fffbf0; padding: 25px; border-radius: 10px; border: 2px solid #f0e68c; margin: 30px 0">
        <div style="margin-bottom: 20px">
          <p style="margin: 0; font-size: 18px"><strong>❌ 误区：</strong>和 Redshift 混淆</p>
          <p>Redshift 是重型数仓，需要加载数据。Athena 是 Serverless 的，<strong>直接查 S3</strong>，即查即用。</p>
        </div>
        <div>
          <p style="margin: 0; font-size: 18px">
            <strong>🔑 联想关键词：</strong>Serverless / SQL查询S3 / 临时分析 / 配合Glue
          </p>
        </div>
        <div style="margin-top: 15px; padding: 15px; background: #fff; border-radius: 5px">
          <p style="margin: 0; font-size: 16px; color: #666">
            <strong>💡 考点提示：</strong>题目问“对 S3 数据进行临时 SQL 查询，无需管理服务器”，必选
            <strong>Athena</strong>。
          </p>
        </div>
      </div>

      <div class="takeaway-box">
        <div class="takeaway-title">你现在要记住的只有一句话</div>
        <p class="takeaway-text">不用数据库，直接用 SQL 查文件。</p>
      </div>
    </div>
    <hr class="separator" />

    <!-- 第79讲 -->
    <div class="lecture-container">
      <div class="lecture-title">`,
    keyTakeaway: ``,
    misconception: ``,
    examTips: `</strong>题目问“对 S3 数据进行临时 SQL 查询，无需管理服务器”，必选
            <strong>Athena</strong>。
          </p>
        </div>
      </div>`
  },
  {
    id: 79,
    title: `Amazon Kinesis</div>`,
    content: `<h3>实时数据水管</h3>
      <p>大数据就像发洪水，每秒钟有几万条点击流、日志涌进来。</p>
      <p>
        <strong>Kinesis</strong>
        就是专门修来<strong>“接洪水”</strong>的大管道。它能实时接收、缓冲、处理这些流数据（Streaming
        Data），然后灌入数据湖。
      </p>

      <h3>📝 考试提示与常见误区</h3>
      <div style="background: #fffbf0; padding: 25px; border-radius: 10px; border: 2px solid #f0e68c; margin: 30px 0">
        <div style="margin-bottom: 20px">
          <p style="margin: 0; font-size: 18px"><strong>❌ 误区：</strong>和 SQS 混淆</p>
          <p>SQS 是处理“消息”（Job）。Kinesis 是处理“流”（Stream）。Kinesis 支持实时分析、重播，SQS 不支持。</p>
        </div>
        <div>
          <p style="margin: 0; font-size: 18px">
            <strong>🔑 联想关键词：</strong>实时数据 / 流处理 / Kinesis Data Firehose (存S3) / Kinesis Data Streams
          </p>
        </div>
        <div style="margin-top: 15px; padding: 15px; background: #fff; border-radius: 5px">
          <p style="margin: 0; font-size: 16px; color: #666">
            <strong>💡 考点提示：</strong>题目问“采集实时点击流/IoT数据”、“将流数据加载到 S3/Redshift”，选
            <strong>Kinesis</strong>。
          </p>
        </div>
      </div>

      <div class="takeaway-box">
        <div class="takeaway-title">你现在要记住的只有一句话</div>
        <p class="takeaway-text">它是大数据的“实时传送带”。</p>
      </div>
    </div>
    <hr class="separator" />

    <!-- 第80讲 -->
    <div class="lecture-container">
      <div class="lecture-title">`,
    keyTakeaway: ``,
    misconception: ``,
    examTips: `</strong>题目问“采集实时点击流/IoT数据”、“将流数据加载到 S3/Redshift”，选
            <strong>Kinesis</strong>。
          </p>
        </div>
      </div>`
  },
  {
    id: 80,
    title: `Amazon Redshift</div>`,
    content: `<h3>大数据的仓库</h3>
      <p>RDS 适合存“现在的订单”。</p>
      <p><strong>Redshift</strong> 是<strong>“数据仓库”</strong>，适合存“过去10年的所有订单”。</p>
      <p>它是为了分析而生的（OLAP）。你想跑一个“分析过去5年全区销售趋势”的复杂报表？RDS 会卡死，Redshift 秒出结果。</p>

      <h3>📝 考试提示与常见误区</h3>
      <div style="background: #fffbf0; padding: 25px; border-radius: 10px; border: 2px solid #f0e68c; margin: 30px 0">
        <div style="margin-bottom: 20px">
          <p style="margin: 0; font-size: 18px"><strong>❌ 误区：</strong>和 RDS 混淆</p>
          <p>RDS 是 OLTP（事务处理，快进快出）。Redshift 是 OLAP（分析处理，吞吐量大）。</p>
        </div>
        <div>
          <p style="margin: 0; font-size: 18px">
            <strong>🔑 联想关键词：</strong>数据仓库 / 列式存储 / 商业智能(BI) / 复杂聚合查询
          </p>
        </div>
        <div style="margin-top: 15px; padding: 15px; background: #fff; border-radius: 5px">
          <p style="margin: 0; font-size: 16px; color: #666">
            <strong>💡 考点提示：</strong>题目问“构建数据仓库”、“运行复杂的分析报表”，选 <strong>Redshift</strong>。
          </p>
        </div>
      </div>

      <div class="takeaway-box">
        <div class="takeaway-title">你现在要记住的只有一句话</div>
        <p class="takeaway-text">RDS 是记账的，Redshift 是查账分析的。</p>
      </div>
    </div>
    <hr class="separator" />

    <!-- 第81讲 -->
    <div class="lecture-container">
      <div class="lecture-title">`,
    keyTakeaway: ``,
    misconception: ``,
    examTips: `</strong>题目问“构建数据仓库”、“运行复杂的分析报表”，选 <strong>Redshift</strong>。
          </p>
        </div>
      </div>`
  },
  {
    id: 81,
    title: `Amazon EMR</div>`,
    content: `<h3>托管的 Hadoop 集群</h3>
      <p>你想跑 Spark、Hadoop、Hive 这些大数据处理框架？</p>
      <p>
        自己搭集群太痛苦了。用 <strong>EMR (Elastic MapReduce)</strong>，AWS
        帮你一键拉起几百台机器的集群，跑完任务自动销毁。
      </p>
      <p>它是处理海量数据（PB级）的重型武器。</p>

      <h3>📝 考试提示与常见误区</h3>
      <div style="background: #fffbf0; padding: 25px; border-radius: 10px; border: 2px solid #f0e68c; margin: 30px 0">
        <div style="margin-bottom: 20px">
          <p style="margin: 0; font-size: 18px"><strong>❌ 误区：</strong>和 Glue 混淆</p>
          <p>Glue 是 Serverless 的 ETL 工具（轻量、简单）。EMR 是完整的 Hadoop 生态集群（重型、可控性强）。</p>
        </div>
        <div>
          <p style="margin: 0; font-size: 18px"><strong>🔑 联想关键词：</strong>Hadoop / Spark / 大数据处理 / 集群</p>
        </div>
        <div style="margin-top: 15px; padding: 15px; background: #fff; border-radius: 5px">
          <p style="margin: 0; font-size: 16px; color: #666">
            <strong>💡 考点提示：</strong>题目出现“Hadoop/Spark”、“大规模数据处理作业”，选 <strong>EMR</strong>。
          </p>
        </div>
      </div>

      <div class="takeaway-box">
        <div class="takeaway-title">你现在要记住的只有一句话</div>
        <p class="takeaway-text">就是 AWS 上的云端 Hadoop。</p>
      </div>
    </div>
    <hr class="separator" />

    <!-- 第82讲 -->
    <div class="lecture-container">
      <div class="lecture-title">`,
    keyTakeaway: ``,
    misconception: ``,
    examTips: `</strong>题目出现“Hadoop/Spark”、“大规模数据处理作业”，选 <strong>EMR</strong>。
          </p>
        </div>
      </div>`
  },
  {
    id: 82,
    title: `AWS Glue</div>`,
    content: `<h3>数据胶水</h3>
      <p>你有两个系统：一个是 S3 里的 CSV 文件，一个是 Redshift 数据库。</p>
      <p>你想把 CSV 整理格式后填进 Redshift。这就是 ETL（抽取、转换、加载）。</p>
      <p>
        <strong>Glue</strong> 是一个
        <strong>Serverless 的 ETL 工具</strong
        >。它能自动扫描你的数据，识别格式（Schema），然后帮你转换数据。它像胶水一样把不同数据源粘在一起。
      </p>

      <h3>📝 考试提示与常见误区</h3>
      <div style="background: #fffbf0; padding: 25px; border-radius: 10px; border: 2px solid #f0e68c; margin: 30px 0">
        <div style="margin-bottom: 20px">
          <p style="margin: 0; font-size: 18px"><strong>❌ 误区：</strong>和 Athena 混淆</p>
          <p>Athena 是<strong>查</strong>数据的。Glue 是<strong>准备</strong>数据的（整理、清洗）。</p>
        </div>
        <div>
          <p style="margin: 0; font-size: 18px">
            <strong>🔑 联想关键词：</strong>ETL / 数据目录(Data Catalog) / Serverless / 数据准备
          </p>
        </div>
        <div style="margin-top: 15px; padding: 15px; background: #fff; border-radius: 5px">
          <p style="margin: 0; font-size: 16px; color: #666">
            <strong>💡 考点提示：</strong>题目问“Serverless ETL”、“自动发现数据架构(Schema)”，选 <strong>Glue</strong>。
          </p>
        </div>
      </div>

      <div class="takeaway-box">
        <div class="takeaway-title">你现在要记住的只有一句话</div>
        <p class="takeaway-text">它是数据搬运工和整理工。</p>
      </div>
    </div>
    <hr class="separator" />

    <!-- 第83讲 -->
    <div class="lecture-container">
      <div class="lecture-title">`,
    keyTakeaway: ``,
    misconception: ``,
    examTips: `</strong>题目问“Serverless ETL”、“自动发现数据架构(Schema)”，选 <strong>Glue</strong>。
          </p>
        </div>
      </div>`
  },
  {
    id: 83,
    title: `Amazon QuickSight</div>`,
    content: `<h3>老板的仪表盘</h3>
      <p>数据都在 Redshift 或 Athena 里了。</p>
      <p>老板不想看 SQL 代码，他想看<strong>漂亮的图表</strong>（BI）。</p>
      <p>
        <strong>QuickSight</strong> 就是 AWS 的 PowerBI/Tableau。它能把数据变成可视化的仪表盘，让老板一眼看懂业务趋势。
      </p>

      <h3>📝 考试提示与常见误区</h3>
      <div style="background: #fffbf0; padding: 25px; border-radius: 10px; border: 2px solid #f0e68c; margin: 30px 0">
        <div style="margin-bottom: 20px">
          <p style="margin: 0; font-size: 18px"><strong>❌ 误区：</strong>和 CloudWatch Dashboard 混淆</p>
          <p>
            CloudWatch 画的是<strong>IT运维图</strong>（CPU/内存）。QuickSight
            画的是<strong>商业业务图</strong>（销售额/用户数）。
          </p>
        </div>
        <div>
          <p style="margin: 0; font-size: 18px"><strong>🔑 联想关键词：</strong>BI / 可视化 / 仪表盘 / 机器学习洞察</p>
        </div>
      </div>

      <div class="takeaway-box">
        <div class="takeaway-title">你现在要记住的只有一句话</div>
        <p class="takeaway-text">做 PPT 报表的神器。</p>
      </div>
    </div>
    <hr class="separator" />

    <!-- 第84讲 -->
    <div class="lecture-container">
      <div class="lecture-title">`,
    keyTakeaway: ``,
    misconception: ``,
    examTips: ``
  },
  {
    id: 84,
    title: `Amazon OpenSearch Service</div>`,
    content: `<h3>超级搜索引擎</h3>
      <p>它的前身是 Elasticsearch。</p>
      <p>你想在你的 App 里做一个“搜索框”？或者你想在一个巨大的日志堆里搜一个关键词？</p>
      <p>
        <strong>OpenSearch</strong> 就是干这个的。它能对海量文本进行<strong>全文检索</strong>。日志分析也经常用它（ELK
        Stack）。
      </p>

      <h3>📝 考试提示与常见误区</h3>
      <div style="background: #fffbf0; padding: 25px; border-radius: 10px; border: 2px solid #f0e68c; margin: 30px 0">
        <div style="margin-bottom: 20px">
          <p style="margin: 0; font-size: 18px"><strong>❌ 误区：</strong>和 CloudWatch Logs 混淆</p>
          <p>CloudWatch Logs 存日志。OpenSearch <strong>搜和分析</strong>日志。</p>
        </div>
        <div>
          <p style="margin: 0; font-size: 18px"><strong>🔑 联想关键词：</strong>搜索 / 日志分析 / 全文检索 / Kibana</p>
        </div>
        <div style="margin-top: 15px; padding: 15px; background: #fff; border-radius: 5px">
          <p style="margin: 0; font-size: 16px; color: #666">
            <strong>💡 考点提示：</strong>题目问“为应用添加搜索功能”或“分析应用程序日志”，选
            <strong>OpenSearch</strong>。
          </p>
        </div>
      </div>

      <div class="takeaway-box">
        <div class="takeaway-title">你现在要记住的只有一句话</div>
        <p class="takeaway-text">它就是 AWS 里的“百度/谷歌”引擎。</p>
      </div>
    </div>
    <hr class="separator" />

    <!-- 第85讲 -->
    <div class="lecture-container">
      <div class="lecture-title">`,
    keyTakeaway: ``,
    misconception: ``,
    examTips: `</strong>题目问“为应用添加搜索功能”或“分析应用程序日志”，选
            <strong>OpenSearch</strong>。
          </p>
        </div>
      </div>`
  },
  {
    id: 85,
    title: `Application Discovery Service (ADS)</div>`,
    content: `<h3>资产普查员</h3>
      <p>你要把公司数据中心搬到云上。但你可能连自己机房里到底有多少台服务器、它们之间怎么连的都搞不清。</p>
      <p>
        <strong>ADS</strong> 帮你做普查。装个 Agent，它自动扫描你的服务器，画出依赖关系图：“服务器 A 连着数据库 B”。
      </p>
      <p>这是迁移的第一步：知己。</p>

      <h3>📝 考试提示与常见误区</h3>
      <div style="background: #fffbf0; padding: 25px; border-radius: 10px; border: 2px solid #f0e68c; margin: 30px 0">
        <div style="margin-bottom: 20px">
          <p style="margin: 0; font-size: 18px"><strong>❌ 误区：</strong>ADS 能帮你迁移</p>
          <p>它只负责<strong>发现</strong>（收集信息），不负责<strong>搬运</strong>。</p>
        </div>
        <div>
          <p style="margin: 0; font-size: 18px">
            <strong>🔑 联想关键词：</strong>发现资产 / 依赖映射 / 迁移规划 / 收集数据
          </p>
        </div>
      </div>

      <div class="takeaway-box">
        <div class="takeaway-title">你现在要记住的只有一句话</div>
        <p class="takeaway-text">搬家前先清点家当。</p>
      </div>
    </div>
    <hr class="separator" />

    <!-- 第86讲 -->
    <div class="lecture-container">
      <div class="lecture-title">`,
    keyTakeaway: ``,
    misconception: ``,
    examTips: ``
  },
  {
    id: 86,
    title: `Application Migration Service (MGN)</div>`,
    content: `<h3>服务器搬家公司</h3>
      <p>你要把本地的虚拟机或物理机，原封不动地搬到 AWS 上变身成 EC2。</p>
      <p><strong>MGN</strong> 是 AWS 推荐的主要迁移工具（Rehost/Lift-and-Shift）。</p>
      <p>它在后台持续复制你的硬盘数据，几乎不影响你现在的业务。等复制完了，切断旧的，启动新的，迁移完成。</p>

      <h3>📝 考试提示与常见误区</h3>
      <div style="background: #fffbf0; padding: 25px; border-radius: 10px; border: 2px solid #f0e68c; margin: 30px 0">
        <div style="margin-bottom: 20px">
          <p style="margin: 0; font-size: 18px"><strong>❌ 误区：</strong>和 DMS 混淆</p>
          <p>MGN 搬的是<strong>整台服务器</strong>（操作系统+应用+数据）。DMS 只搬<strong>数据库</strong>。</p>
        </div>
        <div>
          <p style="margin: 0; font-size: 18px">
            <strong>🔑 联想关键词：</strong>Lift-and-Shift / 服务器迁移 / 块级复制 / 最小停机
          </p>
        </div>
        <div style="margin-top: 15px; padding: 15px; background: #fff; border-radius: 5px">
          <p style="margin: 0; font-size: 16px; color: #666">
            <strong>💡 考点提示：</strong>题目问“将本地服务器直接迁移到 AWS EC2”，首选 <strong>MGN</strong>。
          </p>
        </div>
      </div>

      <div class="takeaway-box">
        <div class="takeaway-title">你现在要记住的只有一句话</div>
        <p class="takeaway-text">它是整机克隆，连操作系统一起搬。</p>
      </div>
    </div>
    <hr class="separator" />

    <!-- 第87讲 -->
    <div class="lecture-container">
      <div class="lecture-title">`,
    keyTakeaway: ``,
    misconception: ``,
    examTips: `</strong>题目问“将本地服务器直接迁移到 AWS EC2”，首选 <strong>MGN</strong>。
          </p>
        </div>
      </div>`
  },
  {
    id: 87,
    title: `Database Migration Service (DMS)</div>`,
    content: `<h3>数据库搬家公司</h3>
      <p>你想把本地的 Oracle 搬到 AWS 的 RDS MySQL？或者从本地 MySQL 搬到 Aurora？</p>
      <p><strong>DMS</strong> 专门干这个。</p>
      <p>
        最厉害的是：它能<strong>在线迁移</strong>。它先把历史数据搬过去，然后持续同步新增数据。等你准备好了，切换只要几秒钟，业务几乎不断。
      </p>

      <h3>📝 考试提示与常见误区</h3>
      <div style="background: #fffbf0; padding: 25px; border-radius: 10px; border: 2px solid #f0e68c; margin: 30px 0">
        <div style="margin-bottom: 20px">
          <p style="margin: 0; font-size: 18px"><strong>❌ 误区：</strong>DMS 只能同构迁移</p>
          <p>它可以异构迁移（比如 Oracle 到 MySQL），但需要配合 SCT（下一讲）使用。</p>
        </div>
        <div>
          <p style="margin: 0; font-size: 18px">
            <strong>🔑 联想关键词：</strong>数据库迁移 / 在线复制 / 最小停机时间 / 同构或异构
          </p>
        </div>
        <div style="margin-top: 15px; padding: 15px; background: #fff; border-radius: 5px">
          <p style="margin: 0; font-size: 16px; color: #666">
            <strong>💡 考点提示：</strong>题目问“数据库迁移且不能长时间停机”，必选 <strong>DMS</strong>。
          </p>
        </div>
      </div>

      <div class="takeaway-box">
        <div class="takeaway-title">你现在要记住的只有一句话</div>
        <p class="takeaway-text">一边搬一边开门营业，数据库迁移神器。</p>
      </div>
    </div>
    <hr class="separator" />

    <!-- 第88讲 -->
    <div class="lecture-container">
      <div class="lecture-title">`,
    keyTakeaway: ``,
    misconception: ``,
    examTips: `</strong>题目问“数据库迁移且不能长时间停机”，必选 <strong>DMS</strong>。
          </p>
        </div>
      </div>`
  },
  {
    id: 88,
    title: `Migration Evaluator</div>`,
    content: `<h3>搬家预算师</h3>
      <p>老板问：“上云到底能不能省钱？省多少？”</p>
      <p>你用 <strong>Migration Evaluator</strong> (原名 TSO Logic)。</p>
      <p>
        它评估你现在的花费，算出上云后的花费，然后生成一份漂亮的商业报告（Business Case），告诉你：“上云吧，预计能省
        30%。”
      </p>

      <h3>📝 考试提示与常见误区</h3>
      <div style="background: #fffbf0; padding: 25px; border-radius: 10px; border: 2px solid #f0e68c; margin: 30px 0">
        <div style="margin-bottom: 20px">
          <p style="margin: 0; font-size: 18px"><strong>❌ 误区：</strong>和 Cost Explorer 混淆</p>
          <p>CE 是算<strong>云上</strong>已经花掉的钱。Evaluator 是在<strong>上云前</strong>做预测评估的。</p>
        </div>
        <div>
          <p style="margin: 0; font-size: 18px">
            <strong>🔑 联想关键词：</strong>TCO评估 / 商业论证(Business Case) / 迁移前成本预测
          </p>
        </div>
      </div>

      <div class="takeaway-box">
        <div class="takeaway-title">你现在要记住的只有一句话</div>
        <p class="takeaway-text">它是用来忽悠（说服）老板批准上云预算的。</p>
      </div>
    </div>
    <hr class="separator" />

    <!-- 第89讲 -->
    <div class="lecture-container">
      <div class="lecture-title">`,
    keyTakeaway: ``,
    misconception: ``,
    examTips: ``
  },
  {
    id: 89,
    title: `Migration Hub</div>`,
    content: `<h3>搬家总指挥部</h3>
      <p>如果你同时用 ADS 发现资产，用 MGN 搬服务器，用 DMS 搬数据库。</p>
      <p>你需要一个地方统一看进度。</p>
      <p><strong>Migration Hub</strong> 就是这个仪表盘。它不干活，它汇总所有迁移工具的状态，让你一目了然。</p>

      <h3>📝 考试提示与常见误区</h3>
      <div style="background: #fffbf0; padding: 25px; border-radius: 10px; border: 2px solid #f0e68c; margin: 30px 0">
        <div style="margin-bottom: 20px">
          <p style="margin: 0; font-size: 18px"><strong>❌ 误区：</strong>和 Control Tower 混淆</p>
        </div>
        <div>
          <p style="margin: 0; font-size: 18px"><strong>🔑 联想关键词：</strong>迁移进度追踪 / 集中仪表盘 / 整合工具</p>
        </div>
      </div>

      <div class="takeaway-box">
        <div class="takeaway-title">你现在要记住的只有一句话</div>
        <p class="takeaway-text">它是迁移项目的进度大屏。</p>
      </div>
    </div>
    <hr class="separator" />

    <!-- 第90讲 -->
    <div class="lecture-container">
      <div class="lecture-title">`,
    keyTakeaway: ``,
    misconception: ``,
    examTips: ``
  },
  {
    id: 90,
    title: `Schema Conversion Tool (SCT)</div>`,
    content: `<h3>数据库翻译官</h3>
      <p>
        如果你要从 Oracle（商业数据库）迁移到 Aurora（开源兼容），最大的问题是：Oracle 的存储过程和 SQL 写法跟 Aurora
        不一样。
      </p>
      <p>
        <strong>SCT</strong> 帮你自动翻译。它扫描你的 Oracle 结构，自动转换成 Aurora
        的结构。转不了的，它会标红告诉你“这块得人工改”。
      </p>

      <h3>📝 考试提示与常见误区</h3>
      <div style="background: #fffbf0; padding: 25px; border-radius: 10px; border: 2px solid #f0e68c; margin: 30px 0">
        <div style="margin-bottom: 20px">
          <p style="margin: 0; font-size: 18px"><strong>❌ 误区：</strong>和 DMS 职责混淆</p>
          <p>SCT 负责转<strong>结构</strong>（Schema/代码）。DMS 负责搬<strong>数据</strong>。先用 SCT，再用 DMS。</p>
        </div>
        <div>
          <p style="margin: 0; font-size: 18px"><strong>🔑 联想关键词：</strong>异构迁移 / 架构转换 / Oracle转Aurora</p>
        </div>
        <div style="margin-top: 15px; padding: 15px; background: #fff; border-radius: 5px">
          <p style="margin: 0; font-size: 16px; color: #666">
            <strong>💡 考点提示：</strong>题目问“异构数据库迁移（如 Oracle 到 PostgreSQL）”，步骤是：1.
            <strong>SCT</strong> 转换架构；2. <strong>DMS</strong> 迁移数据。
          </p>
        </div>
      </div>

      <div class="takeaway-box">
        <div class="takeaway-title">你现在要记住的只有一句话</div>
        <p class="takeaway-text">它是帮你把“外语书”（Oracle）翻译成“母语书”（Aurora）的工具。</p>
      </div>
    </div>
    <hr class="separator" />

    <!-- 第91讲 -->
    <div class="lecture-container">
      <div class="lecture-title">`,
    keyTakeaway: ``,
    misconception: ``,
    examTips: `</strong>题目问“异构数据库迁移（如 Oracle 到 PostgreSQL）”，步骤是：1.
            <strong>SCT</strong> 转换架构；2. <strong>DMS</strong> 迁移数据。
          </p>
        </div>
      </div>`
  },
  {
    id: 91,
    title: `Snow Family</div>`,
    content: `<h3>数据搬运卡车</h3>
      <p>如果你有 1PB 的数据要上传到 AWS。</p>
      <p>用 1Gbps 的宽带传，要传 100 多天。太慢了！</p>
      <p>
        AWS 寄给你一个大铁箱子（Snowball）甚至开来一辆卡车（Snowmobile）。你把数据拷进去，寄回给
        AWS，他们帮你插到机房里拷出来。
      </p>
      <p><strong>不要低估了一辆装满硬盘的卡车的带宽。</strong></p>

      <h3>📝 考试提示与常见误区</h3>
      <div style="background: #fffbf0; padding: 25px; border-radius: 10px; border: 2px solid #f0e68c; margin: 30px 0">
        <div style="margin-bottom: 20px">
          <p style="margin: 0; font-size: 18px"><strong>❌ 误区：</strong>和 Storage Gateway 混淆</p>
          <p>Snow 是<strong>离线</strong>搬运（一次性）。Storage Gateway 是<strong>在线</strong>桥接（持续）。</p>
        </div>
        <div>
          <p style="margin: 0; font-size: 18px">
            <strong>🔑 联想关键词：</strong>物理传输 / 离线 / 海量数据 / 边缘计算
          </p>
        </div>
        <div style="margin-top: 15px; padding: 15px; background: #fff; border-radius: 5px">
          <p style="margin: 0; font-size: 16px; color: #666">
            <strong>💡 考点提示：</strong>题目问“网络带宽有限，需要迁移 PB 级数据”，必选
            <strong>Snowball / Snow Family</strong>。
          </p>
        </div>
      </div>

      <div class="takeaway-box">
        <div class="takeaway-title">你现在要记住的只有一句话</div>
        <p class="takeaway-text">网速太慢就别硬传，直接寄硬盘。</p>
      </div>
    </div>
    <hr class="separator" />

    <!-- 第92讲 -->
    <div class="lecture-container">
      <div class="lecture-title">`,
    keyTakeaway: ``,
    misconception: ``,
    examTips: `</strong>题目问“网络带宽有限，需要迁移 PB 级数据”，必选
            <strong>Snowball / Snow Family</strong>。
          </p>
        </div>
      </div>`
  },
  {
    id: 92,
    title: `Amazon SageMaker AI</div>`,
    content: `<h3>AI 开发流水线</h3>
      <p>搞机器学习很麻烦：准备数据、写算法、租显卡训练、部署模型。</p>
      <p><strong>SageMaker</strong> 把这一条龙全包了。</p>
      <p>
        它是一个<strong>全托管平台</strong>。让数据科学家像在工厂流水线上一样，快速生产 AI
        模型。你不用管底层的服务器，只管算法。
      </p>

      <h3>📝 考试提示与常见误区</h3>
      <div style="background: #fffbf0; padding: 25px; border-radius: 10px; border: 2px solid #f0e68c; margin: 30px 0">
        <div style="margin-bottom: 20px">
          <p style="margin: 0; font-size: 18px"><strong>❌ 误区：</strong>和具体的 AI 服务（如 Rekognition）混淆</p>
          <p>SageMaker 是让你<strong>自己造</strong>模型的。Rekognition 是 AWS <strong>造好</strong>给你直接用的。</p>
        </div>
        <div>
          <p style="margin: 0; font-size: 18px">
            <strong>🔑 联想关键词：</strong>构建/训练/部署 / Jupyter Notebook / 全托管 ML
          </p>
        </div>
        <div style="margin-top: 15px; padding: 15px; background: #fff; border-radius: 5px">
          <p style="margin: 0; font-size: 16px; color: #666">
            <strong>💡 考点提示：</strong>题目问“自定义机器学习模型开发”，选 <strong>SageMaker</strong>。
          </p>
        </div>
      </div>

      <div class="takeaway-box">
        <div class="takeaway-title">你现在要记住的只有一句话</div>
        <p class="takeaway-text">它是 AI 工程师的集成开发环境（IDE）。</p>
      </div>
    </div>
    <hr class="separator" />

    <!-- 第93讲 -->
    <div class="lecture-container">
      <div class="lecture-title">`,
    keyTakeaway: ``,
    misconception: ``,
    examTips: `</strong>题目问“自定义机器学习模型开发”，选 <strong>SageMaker</strong>。
          </p>
        </div>
      </div>`
  },
  {
    id: 93,
    title: `Amazon Lex</div>`,
    content: `<h3>聊天机器人内核</h3>
      <p>你知道 Alexa（智能音箱）吗？Lex 就是 Alexa 的大脑。</p>
      <p>它能听懂人话（自然语言理解）。</p>
      <p>你想做一个能语音对话的客服机器人？用 <strong>Lex</strong>。它负责听懂“我要订票”，然后把意图传给你的代码。</p>

      <h3>📝 考试提示与常见误区</h3>
      <div style="background: #fffbf0; padding: 25px; border-radius: 10px; border: 2px solid #f0e68c; margin: 30px 0">
        <div style="margin-bottom: 20px">
          <p style="margin: 0; font-size: 18px"><strong>❌ 误区：</strong>Lex 只能做语音</p>
          <p>它也能处理文本聊天（Chatbot）。</p>
        </div>
        <div>
          <p style="margin: 0; font-size: 18px">
            <strong>🔑 联想关键词：</strong>聊天机器人(Chatbot) / Alexa内核 / 对话交互 / ASR/NLU
          </p>
        </div>
        <div style="margin-top: 15px; padding: 15px; background: #fff; border-radius: 5px">
          <p style="margin: 0; font-size: 16px; color: #666">
            <strong>💡 考点提示：</strong>题目问“构建客服聊天机器人”，选 <strong>Lex</strong>。
          </p>
        </div>
      </div>

      <div class="takeaway-box">
        <div class="takeaway-title">你现在要记住的只有一句话</div>
        <p class="takeaway-text">Lex 就是 Chatbot。</p>
      </div>
    </div>
    <hr class="separator" />

    <!-- 第94讲 -->
    <div class="lecture-container">
      <div class="lecture-title">`,
    keyTakeaway: ``,
    misconception: ``,
    examTips: `</strong>题目问“构建客服聊天机器人”，选 <strong>Lex</strong>。
          </p>
        </div>
      </div>`
  },
  {
    id: 94,
    title: `Amazon Polly</div>`,
    content: `<h3>文字转语音 (TTS)</h3>
      <p>你写一段文字，<strong>Polly</strong> 把它读出来。</p>
      <p>它不是那种生硬的机器音，它能模仿人声，甚至能像真人一样有呼吸和停顿。</p>

      <h3>📝 考试提示与常见误区</h3>
      <div style="background: #fffbf0; padding: 25px; border-radius: 10px; border: 2px solid #f0e68c; margin: 30px 0">
        <div style="margin-bottom: 20px">
          <p style="margin: 0; font-size: 18px"><strong>❌ 误区：</strong>和 Transcribe 混淆</p>
          <p>Polly：文本 -> 声音（嘴巴）。Transcribe：声音 -> 文本（耳朵）。</p>
        </div>
        <div>
          <p style="margin: 0; font-size: 18px">
            <strong>🔑 联想关键词：</strong>TTS (Text-to-Speech) / 朗读 / 语音合成
          </p>
        </div>
      </div>

      <div class="takeaway-box">
        <div class="takeaway-title">你现在要记住的只有一句话</div>
        <p class="takeaway-text">Polly 是一只学舌的鹦鹉。</p>
      </div>
    </div>
    <hr class="separator" />

    <!-- 第95讲 -->
    <div class="lecture-container">
      <div class="lecture-title">`,
    keyTakeaway: ``,
    misconception: ``,
    examTips: ``
  },
  {
    id: 95,
    title: `Amazon Transcribe</div>`,
    content: `<h3>语音转文字 (STT)</h3>
      <p>你丢给它一个录音文件，<strong>Transcribe</strong> 给你吐出一篇文字稿。</p>
      <p>就像会议记录员。它不仅能听写，还能区分“这是张三说的，那是李四说的”。</p>

      <h3>📝 考试提示与常见误区</h3>
      <div style="background: #fffbf0; padding: 25px; border-radius: 10px; border: 2px solid #f0e68c; margin: 30px 0">
        <div style="margin-bottom: 20px">
          <p style="margin: 0; font-size: 18px"><strong>❌ 误区：</strong>和 Translate 混淆</p>
          <p>Transcribe 是转录（听写）。Translate 是翻译（英译中）。</p>
        </div>
        <div>
          <p style="margin: 0; font-size: 18px">
            <strong>🔑 联想关键词：</strong>STT (Speech-to-Text) / 字幕生成 / 会议记录
          </p>
        </div>
        <div style="margin-top: 15px; padding: 15px; background: #fff; border-radius: 5px">
          <p style="margin: 0; font-size: 16px; color: #666">
            <strong>💡 考点提示：</strong>题目问“为视频生成字幕”或“将客服录音转为文本”，选 <strong>Transcribe</strong>。
          </p>
        </div>
      </div>

      <div class="takeaway-box">
        <div class="takeaway-title">你现在要记住的只有一句话</div>
        <p class="takeaway-text">它是自动听写机。</p>
      </div>
    </div>
    <hr class="separator" />

    <!-- 第96讲 -->
    <div class="lecture-container">
      <div class="lecture-title">`,
    keyTakeaway: ``,
    misconception: ``,
    examTips: `</strong>题目问“为视频生成字幕”或“将客服录音转为文本”，选 <strong>Transcribe</strong>。
          </p>
        </div>
      </div>`
  },
  {
    id: 96,
    title: `Amazon Rekognition</div>`,
    content: `<h3>AI 视觉识别</h3>
      <p>给它一张照片或一段视频，它能告诉你：</p>
      <p>“这是一个男人，戴着眼镜，心情看起来很开心，背景是一辆车。”</p>
      <p>它还能做人脸比对、识别不健康内容。</p>

      <h3>📝 考试提示与常见误区</h3>
      <div style="background: #fffbf0; padding: 25px; border-radius: 10px; border: 2px solid #f0e68c; margin: 30px 0">
        <div style="margin-bottom: 20px">
          <p style="margin: 0; font-size: 18px"><strong>❌ 误区：</strong>和 Textract 混淆</p>
          <p>Rekognition 识别<strong>物体/人脸</strong>。Textract 识别图片里的<strong>文字</strong>（OCR）。</p>
        </div>
        <div>
          <p style="margin: 0; font-size: 18px">
            <strong>🔑 联想关键词：</strong>图像视频分析 / 人脸识别 / 物体检测 / 内容审核
          </p>
        </div>
        <div style="margin-top: 15px; padding: 15px; background: #fff; border-radius: 5px">
          <p style="margin: 0; font-size: 16px; color: #666">
            <strong>💡 考点提示：</strong>题目问“检测图像中的不当内容”或“实现人脸签到”，选
            <strong>Rekognition</strong>。
          </p>
        </div>
      </div>

      <div class="takeaway-box">
        <div class="takeaway-title">你现在要记住的只有一句话</div>
        <p class="takeaway-text">AWS 的眼睛，看懂图片里的东西。</p>
      </div>
    </div>
    <hr class="separator" />

    <!-- 第97讲 -->
    <div class="lecture-container">
      <div class="lecture-title">`,
    keyTakeaway: ``,
    misconception: ``,
    examTips: `</strong>题目问“检测图像中的不当内容”或“实现人脸签到”，选
            <strong>Rekognition</strong>。
          </p>
        </div>
      </div>`
  },
  {
    id: 97,
    title: `Amazon Kendra</div>`,
    content: `<h3>企业智能搜索</h3>
      <p>公司里有成千上万的文档（PDF、Word、Wiki），员工想搜个东西很难。</p>
      <p><strong>Kendra</strong> 是利用机器学习的<strong>“企业级搜索引擎”</strong>。</p>
      <p>
        它不是简单的关键词匹配，它懂自然语言。你可以问：“公司出差报销额度是多少？”，它能直接从某个 PDF 的第 5
        页里找到答案给你。
      </p>

      <h3>📝 考试提示与常见误区</h3>
      <div style="background: #fffbf0; padding: 25px; border-radius: 10px; border: 2px solid #f0e68c; margin: 30px 0">
        <div style="margin-bottom: 20px">
          <p style="margin: 0; font-size: 18px"><strong>❌ 误区：</strong>和 OpenSearch 混淆</p>
          <p>
            OpenSearch 是底层引擎，需要你开发。Kendra 是<strong>开箱即用</strong>的智能搜索产品，专门针对文档搜索优化。
          </p>
        </div>
        <div>
          <p style="margin: 0; font-size: 18px"><strong>🔑 联想关键词：</strong>文档搜索 / 自然语言查询 / 企业搜索</p>
        </div>
      </div>

      <div class="takeaway-box">
        <div class="takeaway-title">你现在要记住的只有一句话</div>
        <p class="takeaway-text">它是能读懂文档并回答问题的智能搜索。</p>
      </div>
    </div>
    <hr class="separator" />

    <!-- 第98讲 -->
    <div class="lecture-container">
      <div class="lecture-title">`,
    keyTakeaway: ``,
    misconception: ``,
    examTips: ``
  },
  {
    id: 98,
    title: `Amazon Q</div>`,
    content: `<h3>生成式 AI 助手</h3>
      <p>你可以把它想成 <strong>AWS 版的 ChatGPT</strong>，但是它是专门为工作场景设计的。</p>
      <p>
        你可以问它：“怎么优化我的 EC2 成本？”或者“帮我写一段连接 S3 的 Python
        代码”。它不仅能聊天，还能根据你的公司数据回答问题。
      </p>

      <h3>📝 考试提示与常见误区</h3>
      <div style="background: #fffbf0; padding: 25px; border-radius: 10px; border: 2px solid #f0e68c; margin: 30px 0">
        <div style="margin-bottom: 20px">
          <p style="margin: 0; font-size: 18px"><strong>❌ 误区：</strong>和 Kendra 混淆</p>
          <p>Kendra 是<strong>搜</strong>文档。Q 是<strong>生成</strong>答案和代码（生成式 AI）。</p>
        </div>
        <div></div>
      </div>
    </div>
  </body>
</html>`,
    keyTakeaway: ``,
    misconception: ``,
    examTips: ``
  },
];

// 导出数据
if (typeof module !== 'undefined' && module.exports) {
  module.exports = lecturesData;
}
