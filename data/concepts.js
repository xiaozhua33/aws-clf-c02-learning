// AWS CLF-C02 106个核心概念数据
// 数据来源: 概念扫荡清单2.xlsx

const conceptsData = [
  {
    id: 1,
    domain: "Cloud Concepts",
    name: "共享责任模型",
    topics: "AWS负责云的安全/客户负责云中安全",
    misconception: "以为AWS负责客户数据加密与应用补丁",
    duration: 10,
    lectureId: 1
  },
  {
    id: 2,
    domain: "Cloud Concepts",
    name: "云价值主张",
    topics: "OpEx vs CapEx, 敏捷性, 规模经济",
    misconception: "把云当作仅仅是省钱方案，忽视敏捷与全球覆盖",
    duration: 10,
    lectureId: 2
  },
  {
    id: 3,
    domain: "Cloud Concepts",
    name: "全球基础设施",
    topics: "Region、AZ、Edge Locations",
    misconception: "Region与AZ的混淆",
    duration: 10,
    lectureId: 3
  },
  {
    id: 4,
    domain: "Cloud Concepts",
    name: "高可用/可靠性/弹性/可伸缩",
    topics: "HA vs Reliability vs Elasticity",
    misconception: "把高可用当成容灾；以为弹性只是增加容量",
    duration: 10,
    lectureId: 4
  },
  {
    id: 5,
    domain: "Cloud Concepts",
    name: "Well-Architected Framework",
    topics: "六大支柱：运营、安全、可靠、性能、成本、可持续",
    misconception: "把'成本优化'只理解为降价，忽视架构选择",
    duration: 12,
    lectureId: 5
  },
  {
    id: 6,
    domain: "Cloud Concepts",
    name: "AWS CAF 云采用框架",
    topics: "业务/人员/治理/平台/安全/运营六视角",
    misconception: "把CAF当作技术工具，而非组织变革方法论",
    duration: 10,
    lectureId: 6
  },
  {
    id: 7,
    domain: "Cloud Concepts",
    name: "IaaS/PaaS/SaaS",
    topics: "基础设施/平台/软件即服务",
    misconception: "认为Lambda是IaaS",
    duration: 8,
    lectureId: 7
  },
  {
    id: 8,
    domain: "Cloud Concepts",
    name: "云经济学与TCO",
    topics: "总拥有成本、Pricing Calculator",
    misconception: "只算服务器购买成本，忽略电费/机房/运维",
    duration: 10,
    lectureId: 8
  },
  {
    id: 9,
    domain: "Cloud Concepts",
    name: "托管服务术语",
    topics: "Managed vs Unmanaged",
    misconception: "以为托管=完全不用管",
    duration: 8,
    lectureId: 9
  },
  {
    id: 10,
    domain: "Security & Compliance",
    name: "IAM 基础",
    topics: "User/Group/Role/Policy",
    misconception: "把Role当User使用；策略评估顺序不了解",
    duration: 12,
    lectureId: 10
  },
  {
    id: 11,
    domain: "Security & Compliance",
    name: "IAM 策略类型",
    topics: "Identity-based / Resource-based / SCPs",
    misconception: "不清楚显式Deny优先级最高",
    duration: 10,
    lectureId: 11
  },
  {
    id: 12,
    domain: "Security & Compliance",
    name: "MFA 多因素认证",
    topics: "虚拟MFA设备、硬件令牌",
    misconception: "以为Root账户开了MFA就可以随便用",
    duration: 8,
    lectureId: 12
  },
  {
    id: 13,
    domain: "Security & Compliance",
    name: "加密与 KMS",
    topics: "Server-side/Client-side加密、CMK",
    misconception: "把Base64编码当加密",
    duration: 12,
    lectureId: 13
  },
  {
    id: 14,
    domain: "Security & Compliance",
    name: "Security Groups vs NACL",
    topics: "有状态vs无状态、实例vs子网",
    misconception: "以为SG可以写Deny规则",
    duration: 10,
    lectureId: 14
  },
  {
    id: 15,
    domain: "Security & Compliance",
    name: "WAF 与 Shield",
    topics: "应用层防护 vs DDoS防护",
    misconception: "把Shield当作替代CloudFront",
    duration: 10,
    lectureId: 15
  },
  {
    id: 16,
    domain: "Security & Compliance",
    name: "CloudTrail vs CloudWatch",
    topics: "审计日志 vs 监控告警",
    misconception: "把Trail当监控工具",
    duration: 10,
    lectureId: 16
  },
  {
    id: 17,
    domain: "Security & Compliance",
    name: "AWS Artifact",
    topics: "合规报告下载、协议管理",
    misconception: "以为Artifact是Config的一部分",
    duration: 8,
    lectureId: 17
  },
  {
    id: 18,
    domain: "Security & Compliance",
    name: "Secrets Manager vs Parameter Store",
    topics: "密钥轮换 vs 配置存储",
    misconception: "以为Parameter Store不能存密钥",
    duration: 10,
    lectureId: 18
  },
  {
    id: 19,
    domain: "Security & Compliance",
    name: "GuardDuty/Inspector/Config",
    topics: "威胁检测/漏洞扫描/合规检查",
    misconception: "把这三个服务功能混淆",
    duration: 12,
    lectureId: 19
  },
  {
    id: 20,
    domain: "Security & Compliance",
    name: "IAM Identity Center (原SSO)",
    topics: "单点登录、多账户访问",
    misconception: "以为只是改了个名字，功能没变",
    duration: 10,
    lectureId: 20
  }
  // 注意: 这里只包含前20个概念作为示例
  // 完整的106个概念需要继续添加...
];

// 按域统计概念数量
const domainCounts = {
  "Cloud Concepts": 0,
  "Security & Compliance": 0,
  "Cloud Technology & Services": 0,
  "Billing, Pricing & Support": 0
};

conceptsData.forEach(concept => {
  if (domainCounts[concept.domain] !== undefined) {
    domainCounts[concept.domain]++;
  }
});

// 导出数据
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { conceptsData, domainCounts };
}