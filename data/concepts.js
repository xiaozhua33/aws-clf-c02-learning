// AWS CLF-C02 106个核心概念数据
// 数据来源: 概念扫荡清单2.xlsx

const conceptsData = [

  {
    id: 1,
    domain: "Cloud Concepts",
    name: "共享责任模型",
    topics: "AWS负责云的安全/客户负责云中安全",
    misconception: "以为AWS负责客户数据加密与应用补丁",
    oneLiner: "就像租房：房东修房子，你看管自己的东西",
    duration: 10,
    lectureId: 1
  },
  {
    id: 2,
    domain: "Cloud Concepts",
    name: "云价值主张",
    topics: "OpEx vs CapEx, 敏捷性, 规模经济",
    misconception: "把云当作仅仅是省钱方案，忽视敏捷与全球覆盖",
    oneLiner: "不用买服务器，按需付费，随用随开",
    duration: 10,
    lectureId: 2
  },
  {
    id: 3,
    domain: "Cloud Concepts",
    name: "全球基础设施",
    topics: "Region, AZ, Edge Locations",
    misconception: "混淆Region与AZ；认为服务默认跨AZ高可用",
    oneLiner: "Region是城市，AZ是数据中心，Edge靠近用户",
    duration: 10,
    lectureId: 3
  },
  {
    id: 4,
    domain: "Cloud Concepts",
    name: "高可用/可靠性/弹性/可伸缩",
    topics: "HA vs Reliability vs Elasticity",
    misconception: "把高可用当成容灾；伸缩与弹性概念混淆",
    oneLiner: "高可用=不容易坏，可靠性=坏了能恢复，弹性=能大能小",
    duration: 10,
    lectureId: 4
  },
  {
    id: 5,
    domain: "Cloud Concepts",
    name: "Well-Architected Framework",
    topics: "六大支柱：运营、安全、可靠、性能、成本、可持续",
    misconception: "把“成本优化”只理解为降价，忽视架构选择",
    oneLiner: "AWS给的最佳建云实践清单，涵盖6大方面",
    duration: 12,
    lectureId: 5
  },
  {
    id: 6,
    domain: "Cloud Concepts",
    name: "AWS CAF 云采用框架",
    topics: "组织/人员/治理/平台/安全/运营",
    misconception: "与Well-Architected作用混淆",
    oneLiner: "帮公司平稳迁云的指南，不只看技术更看人和流程",
    duration: 8,
    lectureId: 6
  },
  {
    id: 7,
    domain: "Cloud Concepts",
    name: "IaaS/PaaS/SaaS 基本模型",
    topics: "计算抽象层次与责任边界",
    misconception: "把RDS当PaaS/或将SaaS与无服务器混为一谈",
    oneLiner: "IaaS管系统，PaaS管代码，SaaS拿来即用",
    duration: 8,
    lectureId: 7
  },
  {
    id: 8,
    domain: "Cloud Concepts",
    name: "云经济学与TCO",
    topics: "成本结构、使用量计费、规模效应",
    misconception: "忽视数据传出费用导致低估成本",
    oneLiner: "算成本要算全：硬件+电费+运维，云按秒付费",
    duration: 10,
    lectureId: 8
  },
  {
    id: 9,
    domain: "Cloud Concepts",
    name: "共享服务术语",
    topics: "托管服务、无服务器、事件驱动",
    misconception: "把托管服务误解为“完全无需配置”",
    oneLiner: "托管=AWS帮你管系统，你只管业务",
    duration: 8,
    lectureId: 9
  },
  {
    id: 10,
    domain: "Security & Compliance",
    name: "IAM 基础",
    topics: "User/Group/Role/Policy",
    misconception: "把Role当User使用；策略评估顺序不了解",
    oneLiner: "AWS的门禁系统，决定谁能进、能做什么",
    duration: 12,
    lectureId: 10
  },
  {
    id: 11,
    domain: "Security & Compliance",
    name: "IAM 策略类型",
    topics: "身份策略、资源策略、SCP（Organizations）",
    misconception: "混淆SCP与IAM策略作用范围",
    oneLiner: "Identity管人，Resource管资源，SCP管边界",
    duration: 10,
    lectureId: 11
  },
  {
    id: 12,
    domain: "Security & Compliance",
    name: "多因素认证 MFA",
    topics: "账户/用户安全强化",
    misconception: "以为开启MFA即可替代最小权限原则",
    oneLiner: "密码+动态码，双重保险，像银行卡+手机验证",
    duration: 8,
    lectureId: 12
  },
  {
    id: 13,
    domain: "Security & Compliance",
    name: "加密与KMS",
    topics: "加密At-rest/In-transit，CMK/托管密钥",
    misconception: "认为KMS自动加密所有数据",
    oneLiner: "KMS是AWS保险箱，帮你管加密密钥",
    duration: 10,
    lectureId: 13
  },
  {
    id: 14,
    domain: "Security & Compliance",
    name: "网络安全",
    topics: "Security Groups(有状态) vs NACL(无状态)",
    misconception: "SG与NACL作用层级和规则类型混淆",
    oneLiner: "Security Groups是保镖，NACL是保安，防火墙防护",
    duration: 10,
    lectureId: 14
  },
  {
    id: 15,
    domain: "Security & Compliance",
    name: "WAF 与 Shield",
    topics: "应用层防护 vs DDoS 防护",
    misconception: "把WAF当DDoS防护或反之",
    oneLiner: "WAF防黑客攻击，Shield防DDoS流量攻击",
    duration: 8,
    lectureId: 15
  },
  {
    id: 16,
    domain: "Security & Compliance",
    name: "CloudTrail vs CloudWatch",
    topics: "审计日志 vs 监控/报警",
    misconception: "把CloudTrail当监控告警系统",
    oneLiner: "Trail录像谁干了什么，Watch报警异常了就响",
    duration: 8,
    lectureId: 16
  },
  {
    id: 17,
    domain: "Security & Compliance",
    name: "AWS Artifact/合规",
    topics: "合规报告存取与审计资料",
    misconception: "与Config/GuardDuty目的混淆",
    oneLiner: "AWS合规文件柜，下载认证报告和协议",
    duration: 8,
    lectureId: 17
  },
  {
    id: 18,
    domain: "Security & Compliance",
    name: "Secrets Manager vs Parameter Store",
    topics: "密钥管理 vs 配置参数",
    misconception: "二者的轮换/加密能力混淆",
    oneLiner: "Secrets管密码自动轮换，Parameter存配置也能存密码",
    duration: 8,
    lectureId: 18
  },
  {
    id: 19,
    domain: "Security & Compliance",
    name: "GuardDuty/Inspector/Config",
    topics: "威胁检测/漏洞扫描/配置合规",
    misconception: "三者用途混淆",
    oneLiner: "Guard抓威胁，Inspector查漏洞，Config查合规",
    duration: 10,
    lectureId: 19
  },
  {
    id: 20,
    domain: "Technology & Services",
    name: "EC2 基础",
    topics: "实例类型、AMI、EBS、密钥对",
    misconception: "把EBS与S3用法混淆",
    oneLiner: "云中的虚拟机，想开就开",
    duration: 10,
    lectureId: 20
  },
  {
    id: 21,
    domain: "Technology & Services",
    name: "Auto Scaling 与 ELB",
    topics: "伸缩策略；ALB/NLB/GLB",
    misconception: "把ALB与NLB目标场景混淆",
    oneLiner: "自动加减服务器，均衡分流量，忙了加闲了减",
    duration: 10,
    lectureId: 21
  },
  {
    id: 22,
    domain: "Technology & Services",
    name: "Lambda 无服务器",
    topics: "事件源、并发、冷启动",
    misconception: "把Lambda当成“永远更便宜”的计算",
    oneLiner: "不用管服务器，只写代码，按运行秒数付费",
    duration: 10,
    lectureId: 22
  },
  {
    id: 23,
    domain: "Technology & Services",
    name: "容器服务",
    topics: "ECS/EKS 与 Fargate",
    misconception: "把EKS当成“无服务器容器”",
    oneLiner: "Docker打包应用，ECS/EKS管理容器",
    duration: 10,
    lectureId: 23
  },
  {
    id: 24,
    domain: "Technology & Services",
    name: "S3 桶与访问控制",
    topics: "桶策略、ACL、公共访问阻止、版本控制",
    misconception: "桶策略与IAM策略边界混淆",
    oneLiner: "云硬盘，存文件图片视频，桶是容器",
    duration: 10,
    lectureId: 24
  },
  {
    id: 25,
    domain: "Technology & Services",
    name: "S3 存储类别",
    topics: "Standard/Intelligent‑Tiering/IA/Glacier",
    misconception: "误以为Glacier可毫秒检索",
    oneLiner: "常用Standard，少用IA，归档Glacier，越冷越便宜",
    duration: 10,
    lectureId: 25
  },
  {
    id: 26,
    domain: "Technology & Services",
    name: "EBS vs EFS vs S3",
    topics: "块/文件/对象存储对比",
    misconception: "把EFS当跨Region共享文件系统",
    oneLiner: "EBS是EC2专用硬盘，EFS共享网盘，S3对象存储",
    duration: 10,
    lectureId: 26
  },
  {
    id: 27,
    domain: "Technology & Services",
    name: "生命周期与跨区域复制",
    topics: "Lifecycle rules、CRR",
    misconception: "复制与备份概念混淆",
    oneLiner: "数据生命周期管理，旧数据自动归档，跨区域备份",
    duration: 8,
    lectureId: 27
  },
  {
    id: 28,
    domain: "Technology & Services",
    name: "RDS 与 Aurora",
    topics: "引擎选择、只读副本、备份",
    misconception: "把Aurora当成“就是RDS MySQL”",
    oneLiner: "RDS托管数据库，Aurora更快更便宜，自动备份高可用",
    duration: 10,
    lectureId: 28
  },
  {
    id: 29,
    domain: "Technology & Services",
    name: "DynamoDB 基础",
    topics: "分区键/排序键、吞吐模式、TTL",
    misconception: "把强一致/最终一致混淆",
    oneLiner: "NoSQL数据库，像超快的Excel，按需查询",
    duration: 10,
    lectureId: 29
  },
  {
    id: 30,
    domain: "Technology & Services",
    name: "ElastiCache",
    topics: "缓存类型、场景",
    misconception: "与数据库性能优化的界限混淆",
    oneLiner: "云中的Redis/Memcached，加速数据库访问",
    duration: 8,
    lectureId: 30
  },
  {
    id: 31,
    domain: "Technology & Services",
    name: "VPC 组件",
    topics: "子网、路由、IGW、NAT、ENI",
    misconception: "NAT与IGW用途混淆",
    oneLiner: "VPC私有网络，子网划分区域，路由表指路，网关连接外网",
    duration: 10,
    lectureId: 31
  },
  {
    id: 32,
    domain: "Technology & Services",
    name: "Route 53",
    topics: "记录类型、路由策略",
    misconception: "把加权/故障转移策略混淆",
    oneLiner: "AWS的DNS服务，域名解析和智能路由",
    duration: 8,
    lectureId: 32
  },
  {
    id: 33,
    domain: "Technology & Services",
    name: "CloudFront CDN",
    topics: "边缘分发、缓存策略",
    misconception: "与Route 53角色混淆",
    oneLiner: "全球CDN，内容缓存到离用户近的地方",
    duration: 8,
    lectureId: 33
  },
  {
    id: 34,
    domain: "Technology & Services",
    name: "SNS vs SQS",
    topics: "发布订阅 vs 队列解耦",
    misconception: "把SNS当可靠消费队列",
    oneLiner: "SNS群发通知，SQS缓冲任务队列",
    duration: 8,
    lectureId: 34
  },
  {
    id: 35,
    domain: "Technology & Services",
    name: "EventBridge",
    topics: "事件总线、规则、目标",
    misconception: "与CloudWatch Events历史概念混淆",
    oneLiner: "事件总线，连接不同应用和服务",
    duration: 8,
    lectureId: 35
  },
  {
    id: 36,
    domain: "Technology & Services",
    name: "Step Functions",
    topics: "状态机与编排",
    misconception: "与Lambda直连对比不清",
    oneLiner: "工作流编排，把多个服务串起来按流程执行",
    duration: 8,
    lectureId: 36
  },
  {
    id: 37,
    domain: "Technology & Services",
    name: "API Gateway",
    topics: "REST/WebSocket、授权",
    misconception: "与ALB路径路由的使用界线混淆",
    oneLiner: "API大门口，管理发布API接口",
    duration: 8,
    lectureId: 37
  },
  {
    id: 38,
    domain: "Technology & Services",
    name: "CloudFormation",
    topics: "IaC 模板、堆栈",
    misconception: "把CFN当跨云工具使用",
    oneLiner: "用模板代码定义和部署AWS资源",
    duration: 8,
    lectureId: 38
  },
  {
    id: 39,
    domain: "Technology & Services",
    name: "Elastic Beanstalk/Lightsail",
    topics: "简化部署/入门级云资源",
    misconception: "与ECS/EKS定位混淆",
    oneLiner: "Beanstalk简易部署，Lightsail快速建站",
    duration: 8,
    lectureId: 39
  },
  {
    id: 40,
    domain: "Technology & Services",
    name: "CloudWatch 监控",
    topics: "指标、日志、告警、事件",
    misconception: "与CloudTrail混淆",
    oneLiner: "监控告警服务，看系统健康状况",
    duration: 8,
    lectureId: 40
  },
  {
    id: 41,
    domain: "Technology & Services",
    name: "Cognito（可选）",
    topics: "身份联合、用户池",
    misconception: "与IAM作用范围混淆",
    oneLiner: "用户认证注册，像网站的登录系统",
    duration: 8,
    lectureId: 41
  },
  {
    id: 42,
    domain: "Billing/Pricing/Support",
    name: "定价模型总览",
    topics: "On‑Demand/RI/Savings Plans/Spot",
    misconception: "把Savings Plans与RI绑定方式混淆",
    oneLiner: "按需付费最贵，预留便宜，竞价最便宜",
    duration: 10,
    lectureId: 42
  },
  {
    id: 43,
    domain: "Billing/Pricing/Support",
    name: "RI 与 Savings Plans",
    topics: "承诺形式、灵活性、适用范围",
    misconception: "认为SP与RI完全等价",
    oneLiner: "长期租折扣，RI绑定实例，SP更灵活",
    duration: 10,
    lectureId: 43
  },
  {
    id: 44,
    domain: "Billing/Pricing/Support",
    name: "Spot 实例",
    topics: "中断特性、适用工作负载",
    misconception: "把Spot用于关键生产负载",
    oneLiner: "竞价实例捡便宜，但可能被AWS收回",
    duration: 8,
    lectureId: 44
  },
  {
    id: 45,
    domain: "Billing/Pricing/Support",
    name: "Cost Explorer 与 Budgets",
    topics: "历史成本分析、预算告警",
    misconception: "把Budgets当成本分析工具",
    oneLiner: "Cost Explorer看花哪了，Budgets超限告警",
    duration: 8,
    lectureId: 45
  },
  {
    id: 46,
    domain: "Billing/Pricing/Support",
    name: "支持计划层级",
    topics: "Basic/Developer/Business/Enterprise",
    misconception: "忽视TAM/响应SLA差异",
    oneLiner: "Basic免费，Developer收费，Business企业级",
    duration: 8,
    lectureId: 46
  },
  {
    id: 47,
    domain: "Billing/Pricing/Support",
    name: "Trusted Advisor",
    topics: "成本/性能/安全最佳实践检查",
    misconception: "把TA当实时监控",
    oneLiner: "云管家，检查配置给优化建议",
    duration: 8,
    lectureId: 47
  },
  {
    id: 48,
    domain: "Billing/Pricing/Support",
    name: "Organizations/合并计费",
    topics: "多账户管理、SCP、成本聚合",
    misconception: "把SCP当跨账户权限分配工具",
    oneLiner: "多账号统一管理，合并账单一起付",
    duration: 8,
    lectureId: 48
  },
  {
    id: 49,
    domain: "Billing/Pricing/Support",
    name: "Free Tier 与数据传输成本",
    topics: "免费使用范围、传出费用",
    misconception: "误以为内部/跨区传输总免费",
    oneLiner: "免费试用12个月，注意数据传出费",
    duration: 8,
    lectureId: 49
  },
  {
    id: 50,
    domain: "Analytics",
    name: "Amazon Athena",
    topics: "SQL 查询 S3，无服务器",
    misconception: "与 Redshift混淆：Athena查S3非数仓",
    oneLiner: "SQL查S3数据，不用建数据库",
    duration: 10,
    lectureId: 50
  },
  {
    id: 51,
    domain: "Analytics",
    name: "Amazon Kinesis",
    topics: "流数据采集与处理",
    misconception: "与 SQS/SNS不同：Kinesis做实时流",
    oneLiner: "实时数据流，像视频直播处理数据",
    duration: 10,
    lectureId: 51
  },
  {
    id: 52,
    domain: "Analytics",
    name: "Amazon Redshift",
    topics: "数据仓库，复杂分析",
    misconception: "与 RDS混淆：Redshift面向分析",
    oneLiner: "数据仓库，分析海量数据",
    duration: 10,
    lectureId: 52
  },
  {
    id: 53,
    domain: "Analytics",
    name: "Amazon EMR",
    topics: "Hadoop/Spark 大数据",
    misconception: "与 Glue分工不同：EMR跑计算",
    oneLiner: "AWS版Hadoop，大数据处理平台",
    duration: 8,
    lectureId: 53
  },
  {
    id: 54,
    domain: "Analytics",
    name: "AWS Glue",
    topics: "ETL 数据准备与编排",
    misconception: "与 Athena/Redshift职责边界混淆",
    oneLiner: "ETL工具，数据清洗转换",
    duration: 8,
    lectureId: 54
  },
  {
    id: 55,
    domain: "Analytics",
    name: "Amazon QuickSight",
    topics: "BI 可视化仪表盘",
    misconception: "与 CloudWatch图表用途不同",
    oneLiner: "数据可视化报表工具",
    duration: 8,
    lectureId: 55
  },
  {
    id: 56,
    domain: "Analytics",
    name: "Amazon OpenSearch Service",
    topics: "日志/全文搜索",
    misconception: "与 CloudWatch Logs职责不同",
    oneLiner: "搜索和分析服务，原Elasticsearch",
    duration: 8,
    lectureId: 56
  },
  {
    id: 57,
    domain: "Cloud Financial Management",
    name: "AWS Cost and Usage Reports (CUR)",
    topics: "最详细成本明细导出S3",
    misconception: "与 Cost Explorer不同：CUR是原始明细",
    oneLiner: "详细账单报告，分析每一分钱",
    duration: 8,
    lectureId: 57
  },
  {
    id: 58,
    domain: "Cloud Financial Management",
    name: "AWS Marketplace",
    topics: "第三方软件采购与部署目录",
    misconception: "误以为全部免费",
    oneLiner: "第三方软件市场，一键部署",
    duration: 8,
    lectureId: 58
  },
  {
    id: 59,
    domain: "Compute",
    name: "AWS Batch",
    topics: "托管批处理调度",
    misconception: "与 Lambda混淆：Batch面向大规模批任务",
    oneLiner: "批量处理任务，后台计算",
    duration: 8,
    lectureId: 59
  },
  {
    id: 60,
    domain: "Compute",
    name: "AWS Outposts",
    topics: "本地数据中心的AWS硬件",
    misconception: "与 Direct Connect混淆：Outposts是硬件，DirectConnect是专线",
    oneLiner: "本地AWS服务，把AWS建到你办公室",
    duration: 8,
    lectureId: 60
  },
  {
    id: 61,
    domain: "Containers",
    name: "Amazon ECR",
    topics: "容器镜像仓库",
    misconception: "与 S3/ECS混淆：ECR专用镜像仓库",
    oneLiner: "Docker镜像仓库",
    duration: 8,
    lectureId: 61
  },
  {
    id: 62,
    domain: "Database",
    name: "Amazon DocumentDB",
    topics: "兼容MongoDB的文档数据库",
    misconception: "与 DynamoDB混淆：DocumentDB是文档型",
    oneLiner: "AWS版MongoDB，文档数据库",
    duration: 8,
    lectureId: 62
  },
  {
    id: 63,
    domain: "Database",
    name: "Amazon Neptune",
    topics: "图数据库(关系图/推荐)",
    misconception: "与 RDS混淆：Neptune存图关系",
    oneLiner: "图数据库，处理复杂关系网络",
    duration: 8,
    lectureId: 63
  },
  {
    id: 64,
    domain: "Management & Governance",
    name: "AWS Compute Optimizer",
    topics: "ML推荐最佳实例/资源",
    misconception: "与 Trusted Advisor混淆：Optimizer专注计算优化",
    oneLiner: "AI优化建议，帮你省资源",
    duration: 8,
    lectureId: 64
  },
  {
    id: 65,
    domain: "Management & Governance",
    name: "AWS Control Tower",
    topics: "多账号着陆区与治理",
    misconception: "与 Organizations混淆：CT自动落地最佳实践",
    oneLiner: "自动搭建多账号环境",
    duration: 8,
    lectureId: 65
  },
  {
    id: 66,
    domain: "Management & Governance",
    name: "AWS Health Dashboard",
    topics: "AWS服务健康与事件",
    misconception: "与 CloudWatch混淆：Health是事件与状态",
    oneLiner: "服务健康状态看板",
    duration: 8,
    lectureId: 66
  },
  {
    id: 67,
    domain: "Management & Governance",
    name: "AWS License Manager",
    topics: "软件许可合规管理",
    misconception: "常与 Service Catalog用途混淆",
    oneLiner: "许可证管理，追踪软件授权",
    duration: 8,
    lectureId: 67
  },
  {
    id: 68,
    domain: "Management & Governance",
    name: "AWS Service Catalog",
    topics: "预批准服务目录自助",
    misconception: "与 Marketplace混淆：组织内部目录",
    oneLiner: "预定义服务模板，一键部署",
    duration: 8,
    lectureId: 68
  },
  {
    id: 69,
    domain: "Management & Governance",
    name: "Service Quotas",
    topics: "配额查询与提升请求",
    misconception: "忽视配额导致资源创建失败",
    oneLiner: "服务配额管理，申请提高限额",
    duration: 8,
    lectureId: 69
  },
  {
    id: 70,
    domain: "Management & Governance",
    name: "AWS Systems Manager",
    topics: "混合云运维(补丁/命令)",
    misconception: "与 Parameter Store/Secrets边界混淆",
    oneLiner: "运维工具箱，集中管理服务器",
    duration: 10,
    lectureId: 70
  },
  {
    id: 71,
    domain: "Migration & Transfer",
    name: "AWS Application Discovery Service (ADS)",
    topics: "本地资产发现与评估",
    misconception: "与 Migration Hub混淆：ADS做发现",
    oneLiner: "自动扫描机房，盘点要搬啥",
    duration: 8,
    lectureId: 71
  },
  {
    id: 72,
    domain: "Migration & Transfer",
    name: "AWS Application Migration Service (MGN)",
    topics: "Lift & Shift服务器迁移",
    misconception: "与 DMS混淆：MGN迁服务器，DMS迁数据库",
    oneLiner: "应用迁移服务，不停机搬家",
    duration: 8,
    lectureId: 72
  },
  {
    id: 73,
    domain: "Migration & Transfer",
    name: "AWS Database Migration Service (DMS)",
    topics: "数据库在线迁移",
    misconception: "误当停机迁移；实际最小停机",
    oneLiner: "数据库迁移，自动转换格式",
    duration: 8,
    lectureId: 73
  },
  {
    id: 74,
    domain: "Migration & Transfer",
    name: "Migration Evaluator",
    topics: "上云成本评估(TCO)",
    misconception: "与 Cost Explorer混淆：评估而非历史分析",
    oneLiner: "迁移评估工具，估算成本和工作量",
    duration: 8,
    lectureId: 74
  },
  {
    id: 75,
    domain: "Migration & Transfer",
    name: "AWS Migration Hub",
    topics: "迁移进度统一仪表盘",
    misconception: "与 Control Tower混淆：MH是迁移跟踪",
    oneLiner: "迁移指挥中心，追踪所有进度",
    duration: 8,
    lectureId: 75
  },
  {
    id: 76,
    domain: "Migration & Transfer",
    name: "AWS Schema Conversion Tool (SCT)",
    topics: "异构数据库架构转换",
    misconception: "与 DMS职责混淆：SCT转架构，DMS搬数据",
    oneLiner: "数据库转换工具，换数据库引擎",
    duration: 8,
    lectureId: 76
  },
  {
    id: 77,
    domain: "Migration & Transfer",
    name: "AWS Snow Family",
    topics: "物理设备搬迁(大规模数据)",
    misconception: "与 Storage Gateway混淆：Snow是离线物理",
    oneLiner: "运数据的物理设备，像硬盘快递",
    duration: 8,
    lectureId: 77
  },
  {
    id: 78,
    domain: "Networking & Content Delivery",
    name: "AWS Direct Connect",
    topics: "本地到AWS的专线连接",
    misconception: "与 VPN混淆：DX是物理专线",
    oneLiner: "专线直连AWS，快又稳",
    duration: 10,
    lectureId: 78
  },
  {
    id: 79,
    domain: "Networking & Content Delivery",
    name: "AWS Global Accelerator",
    topics: "通过AWS骨干网加速访问",
    misconception: "与 CloudFront混淆：GA非缓存，优化路由",
    oneLiner: "全球网络加速器",
    duration: 8,
    lectureId: 79
  },
  {
    id: 80,
    domain: "Networking & Content Delivery",
    name: "AWS PrivateLink",
    topics: "私有终端连接，避开公网",
    misconception: "与 VPC Peering/TGW混淆：PL是私有端点",
    oneLiner: "私网连接服务，不暴露到公网",
    duration: 8,
    lectureId: 80
  },
  {
    id: 81,
    domain: "Networking & Content Delivery",
    name: "AWS Transit Gateway",
    topics: "多VPC与本地网络的中心路由",
    misconception: "与 VPC Peering混淆：TGW是可扩展枢纽",
    oneLiner: "VPC大枢纽，连接多个VPC",
    duration: 10,
    lectureId: 81
  },
  {
    id: 82,
    domain: "Networking & Content Delivery",
    name: "AWS Site-to-Site VPN",
    topics: "站点到站点加密隧道",
    misconception: "与 Client VPN用途混淆",
    oneLiner: "Site-to-Site VPN，连接办公室和云",
    duration: 8,
    lectureId: 82
  },
  {
    id: 83,
    domain: "Networking & Content Delivery",
    name: "AWS Client VPN",
    topics: "终端用户VPN访问VPC",
    misconception: "与 Site-to-Site混淆：Client面向个人设备",
    oneLiner: "Client VPN，远程员工连云",
    duration: 8,
    lectureId: 83
  },
  {
    id: 84,
    domain: "Security & Compliance",
    name: "AWS IAM Identity Center (原SSO)",
    topics: "集中式单点登录与跨账号访问",
    misconception: "与 IAM角色混淆：Identity Center是SSO",
    oneLiner: "一个账号登录多个AWS，不用记多套密码",
    duration: 8,
    lectureId: 84
  },
  {
    id: 85,
    domain: "Security & Compliance",
    name: "Amazon Macie",
    topics: "S3敏感数据自动发现",
    misconception: "与 GuardDuty混淆：Macie做敏感数据发现",
    oneLiner: "数据安全AI分析，找敏感数据",
    duration: 8,
    lectureId: 85
  },
  {
    id: 86,
    domain: "Security & Compliance",
    name: "AWS CloudHSM",
    topics: "专用硬件安全模块",
    misconception: "与 KMS混淆：CloudHSM客户独占硬件",
    oneLiner: "硬件安全模块，最高级别加密",
    duration: 8,
    lectureId: 86
  },
  {
    id: 87,
    domain: "Security & Compliance",
    name: "AWS Security Hub",
    topics: "统一安全态势仪表盘",
    misconception: "与 Trusted Advisor混淆：Security Hub聚合安全警报",
    oneLiner: "安全中心，汇总所有安全告警",
    duration: 8,
    lectureId: 87
  },
  {
    id: 88,
    domain: "Security & Compliance",
    name: "AWS Audit Manager",
    topics: "持续审计与证据收集",
    misconception: "与 Artifact混淆：Audit收集证据，Artifact存放报告",
    oneLiner: "合规审计工具，自动检查",
    duration: 8,
    lectureId: 88
  },
  {
    id: 89,
    domain: "Storage",
    name: "AWS Backup",
    topics: "集中式备份策略管理",
    misconception: "与 Snapshots/手动备份混淆",
    oneLiner: "统一备份服务，保护所有资源",
    duration: 8,
    lectureId: 89
  },
  {
    id: 90,
    domain: "Storage",
    name: "Amazon FSx",
    topics: "Windows/Lustre专业文件系统",
    misconception: "与 EFS混淆：FSx面向特定协议与性能",
    oneLiner: "AWS的文件服务器，Windows/Lustre",
    duration: 8,
    lectureId: 90
  },
  {
    id: 91,
    domain: "Storage",
    name: "AWS Storage Gateway",
    topics: "本地与S3的混合存储桥梁",
    misconception: "与 Snow Family混淆：SG为在线桥接",
    oneLiner: "连本地和云存储的桥梁",
    duration: 8,
    lectureId: 91
  },
  {
    id: 92,
    domain: "Storage",
    name: "AWS Elastic Disaster Recovery (EDR)",
    topics: "持续复制与灾难恢复",
    misconception: "与 Backup混淆：EDR是快速恢复复制",
    oneLiner: "灾难恢复服务，快速容灾",
    duration: 8,
    lectureId: 92
  },
  {
    id: 93,
    domain: "Frontend Web & Mobile",
    name: "AWS Amplify",
    topics: "前端/移动全栈加速",
    misconception: "与 AppSync混淆：Amplify为工具集",
    oneLiner: "全栈开发平台，快速建应用",
    duration: 8,
    lectureId: 93
  },
  {
    id: 94,
    domain: "Frontend Web & Mobile",
    name: "AWS AppSync",
    topics: "GraphQL API 服务",
    misconception: "与 API Gateway混淆：AppSync面向GraphQL",
    oneLiner: "GraphQL API服务",
    duration: 8,
    lectureId: 94
  },
  {
    id: 95,
    domain: "End User Computing",
    name: "Amazon WorkSpaces",
    topics: "云桌面DaaS",
    misconception: "与 AppStream混淆：WorkSpaces整机桌面",
    oneLiner: "云桌面，远程办公",
    duration: 8,
    lectureId: 95
  },
  {
    id: 96,
    domain: "End User Computing",
    name: "Amazon AppStream 2.0",
    topics: "应用流式传输",
    misconception: "与 WorkSpaces混淆：AppStream仅应用",
    oneLiner: "云应用流式传输，浏览器运行应用",
    duration: 8,
    lectureId: 96
  },
  {
    id: 97,
    domain: "IoT",
    name: "AWS IoT Core",
    topics: "设备消息与规则处理",
    misconception: "与 EventBridge混淆：IoT面向设备连接",
    oneLiner: "IoT设备连接平台",
    duration: 8,
    lectureId: 97
  },
  {
    id: 98,
    domain: "Machine Learning",
    name: "Amazon SageMaker AI",
    topics: "ML构建/训练/部署平台",
    misconception: "与 Comprehend等托管AI混淆：SageMaker做全流程",
    oneLiner: "机器学习工具箱，从训练到部署",
    duration: 8,
    lectureId: 98
  },
  {
    id: 99,
    domain: "Machine Learning",
    name: "Amazon Lex",
    topics: "聊天机器人NLP",
    misconception: "与 Polly/Transcribe用途混淆",
    oneLiner: "聊天机器人，像Siri",
    duration: 8,
    lectureId: 99
  },
  {
    id: 100,
    domain: "Machine Learning",
    name: "Amazon Polly",
    topics: "文字转语音TTS",
    misconception: "与 Transcribe混淆：Polly输出语音",
    oneLiner: "文字转语音，把文章读出来",
    duration: 8,
    lectureId: 100
  },
  {
    id: 101,
    domain: "Machine Learning",
    name: "Amazon Transcribe",
    topics: "语音转文字STT",
    misconception: "与 Polly混淆：Transcribe输出文本",
    oneLiner: "语音转文字，录音变文本",
    duration: 8,
    lectureId: 101
  },
  {
    id: 102,
    domain: "Machine Learning",
    name: "Amazon Rekognition",
    topics: "图像/视频识别",
    misconception: "与 Textract混淆：Rekognition识图，Textract识文档结构",
    oneLiner: "AI图像识别，识别人脸物体",
    duration: 8,
    lectureId: 102
  },
  {
    id: 103,
    domain: "Machine Learning",
    name: "Amazon Kendra",
    topics: "企业智能搜索",
    misconception: "与 OpenSearch混淆：Kendra做语义搜索",
    oneLiner: "企业智能搜索，像公司内部Google",
    duration: 8,
    lectureId: 103
  },
  {
    id: 104,
    domain: "Machine Learning",
    name: "Amazon Q",
    topics: "生成式AI助手",
    misconception: "与 SageMaker混淆：Q为成品助手",
    oneLiner: "生成式AI助手，帮你写代码答问题",
    duration: 8,
    lectureId: 104
  },
  {
    id: 105,
    domain: "Machine Learning",
    name: "Amazon Textract",
    topics: "文档结构化提取",
    misconception: "与 Rekognition混淆：Textract提取文本/表格",
    oneLiner: "OCR识别，从图片提取文字",
    duration: 8,
    lectureId: 105
  },
  {
    id: 106,
    domain: "Machine Learning",
    name: "Amazon Translate",
    topics: "机器翻译",
    misconception: "与 Comprehend混淆：Translate翻译，Comprehend做文本理解",
    oneLiner: "实时翻译多国语言",
    duration: 8,
    lectureId: 106
  },
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
