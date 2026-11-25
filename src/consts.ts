// 站点与简历内容集中在这里，改这个文件时页面会自动更新。

export const SITE_TITLE = '魏宁宁';
export const SITE_DESCRIPTION = '魏宁宁的个人网站：求职 Agent 开发工程师，记录 Agent / RAG / MCP 项目与工程实践。';

// 简历头部
export const AUTHOR = '魏宁宁';
export const JOB_TITLE = 'Agent 开发工程师';
export const INTRO =
	'独立开发过微型 Agent 运行时、个人知识库 RAG 服务与 MCP 工具链，熟悉 agent-loop、上下文工程、工具注册与多 Agent 协作；有嵌入式软件与上位机工具开发背景。';
export const LOCATION = '广东中山';
export const TARGET = '求职意向：广东深圳 · Agent 开发工程师';

// 联系方式：只公开适合放在网站上的邮箱和代码主页
export const SOCIAL_LINKS = [
	{ label: 'GitHub', href: 'https://github.com/wingdever' },
	{ label: 'Email', href: 'mailto:3615973773@qq.com' },
];

// 教育背景
export const EDUCATION = {
	school: '郑州大学',
	major: '电子信息工程 · 本科',
	period: '2019.09 — 2023.06',
	courses: '微机原理与数字接口、嵌入式系统原理与应用、电子设计自动化、计算机网络',
};

// 工作经历（两份简历共用）
export const EXPERIENCE = [
	{
		company: '上海真兰仪表科技股份有限公司',
		role: '嵌入式软件工程师',
		period: '2023.07 — 2024.01',
		points: [
			'在 STM32 与复旦微 MCU 上用 C 语言做模块化开发，负责智能燃气表嵌入式软件的实现与维护。',
			'设计并实现串口数据帧的组帧、解析与容错逻辑，完成 MCU 与 NB-IoT/4G 通信模组的数据交互，保障上报稳定。',
			'基于 RS485 实现 Modbus RTU 主站，完成仪表计量数据读取与控制命令下发。',
			'用任务调度、软件定时器与状态机组织复杂流程，积累将大目标拆解为可执行步骤的工程经验。',
			'自主开发 Python/JS 上位机工具辅助联调与问题定位，熟悉「工具—系统—人」的协作链路。',
		],
	},
];

// ========== Agent 开发简历 ==========

export const SKILLS = [
	{ title: 'Agent 工程', detail: '实现过 agent-loop（node-graph / linear）、上下文组装与压缩、工具注册表与执行器、session 持久化、skills / hooks / workflow / subagent 运行时。' },
	{ title: 'RAG 与 MCP', detail: '用 llamaIndex 搭建本地知识库，设计并暴露 MCP 2.3 stdio 工具；熟悉 Embedding 后端切换、混合检索与检索效果评估。' },
	{ title: '编程与脚本', detail: '熟练 Python、JavaScript / TypeScript、C，能用 Shell、Go、C++；注重模块化、状态管理与可观测性。' },
	{ title: '模型与 API', detail: '熟悉 Chat Completions / Responses / Embeddings API、Function Calling、Prompt / Context Engineering 与多模型供应商接入。' },
	{ title: '工程实践', detail: 'Linux / Shell、Git、SQLite、Electron、本地 Web 界面；配置与密钥分离，文档先行与可重建的派生数据设计。' },
];

export const PROJECTS = [
	{
		title: 'agent — 微型 AI Agent / Harness',
		href: 'https://github.com/wingdever/agent',
		period: '2026 · 个人项目',
		tech: 'JavaScript / Node.js / Electron',
		points: [
			'实现 core / transport / UI 三层解耦的 agent 运行时：会话与步骤循环、上下文组装与压缩、工具注册与执行、session 持久化。',
			'支持 node-graph（默认）与 linear 两种 agent-loop 引擎，提供 workflow 子 Agent、hooks、skills 注册与 domain events。',
			'插件化 tools 通过 registry.json 自描述，UI 经 HTTP / IPC 与 core 通信；模块以注册表在运行时装配，默认输出 span / 轨迹 / 成本 / 延迟信号。',
		],
	},
	{
		title: 'rag — 个人知识库 RAG 服务',
		href: 'https://github.com/wingdever/rag',
		period: '2026 · 个人项目',
		tech: 'Python / llamaIndex / MCP',
		points: [
			'把 2440 个纯文本文件构建为约 2881 个 chunk 的本地知识库，用 SimpleVectorStore 做持久化索引。',
			'通过 MCP 2.3 stdio 暴露 search_docs / ask_docs / reindex_docs / rag_stats 四个工具供 agent 调用。',
			'Embedding 支持远程 OpenAI 兼容服务、llama.cpp、Ollama、sentence-transformers 切换；密钥与配置分离，附 7 篇设计文档。',
		],
	},
	{
		title: 'docindex — 文档索引器',
		href: 'https://github.com/wingdever/docindex',
		period: '2026 · 个人项目',
		tech: 'Python / SQLite / MCP',
		points: [
			'对 Markdown 知识库做 front matter 与链接校验，找出孤儿文档与失效链接，统一元数据规范。',
			'提供 CLI、本地 Web 界面与 MCP 服务三种入口，支持全文检索、反链与按结构审查。',
			'文件是唯一真源，SQLite 派生缓存可随时重建；支持 --json 输出供程序调用。',
		],
	},
	{
		title: 'kb-tree — 离线知识树仓库',
		href: 'https://github.com/wingdever/kb-tree',
		period: '2026 · 个人项目',
		tech: 'Markdown / Agent Skills',
		points: [
			'设计树状知识组织规范：目录即节点、四字段 front matter、文档自足不互链。',
			'仓库内置可直接加载的 agent skills 工具目录，作为知识库与 agent 能力的载体。',
		],
	},
];

export const SELF_EVALUATION = [
	'有独立开发 Agent 运行时、RAG 服务与 MCP 工具链的完整经验，熟悉从架构设计到落地的全过程。',
	'学习能力强，从嵌入式转向 AI 应用开发，持续跟进 Agent、RAG、AI Coding 等方向。',
	'偏爱整洁代码与良好的项目文档，善于沉淀可复用的设计与踩坑经验。',
	'动手能力强，能独立完成从开发到部署的全流程，重视可观测性与可维护性。',
];

// ========== 嵌入式软件工程师简历（独立页面） ==========

export const EMBEDDED_INTRO =
	'熟悉 STM32、复旦微 MCU 的 C 语言模块化开发，做过 NB-IoT/4G 串口数据交互、Modbus RTU 主站通信与整机功耗优化，也会用 Python/JS 开发上位机工具。';

export const EMBEDDED_SKILLS = [
	{ title: '开发语言', detail: '精通 C（指针、内存管理、模块化/架构化编程）；熟练 Python、JavaScript；能用 Go、C++、Shell。' },
	{ title: 'MCU 平台', detail: 'STM32、复旦微电子（fmsh）、51、树莓派、Pico；熟悉寄存器配置与外设驱动开发。' },
	{ title: '通信协议', detail: 'UART 与 NB-IoT/4G 模组交互、自定义帧协议设计与容错；Modbus RTU 主站、RS485、CRC 校验。' },
	{ title: '常用外设', detail: 'GPIO、LCD、KEY、RTC、I2C、SPI、PWM、ADC、DAC。' },
	{ title: '架构与调试', detail: '任务调度、软件定时器、状态机；低功耗设计；示波器、逻辑分析仪、J-Link。' },
	{ title: '工具与扩展', detail: 'Keil、VSCode、KiCad、Linux/Shell、openWRT；上位机工具开发（Python/JS）。' },
];

export const EMBEDDED_PROJECTS = [
	{
		title: '4G 物联网智能燃气表的测试与上位机开发',
		period: '2023.07 — 2023.10',
		points: [
			'使用 C、Python 开发智能燃气表的测试流程与配套上位机工具，实现数据采集、解析与结果自动判定。',
			'运用任务调度与软件定时器机制，保证测试逻辑可靠高效，提升回归测试效率。',
		],
	},
	{
		title: '华润控制器部分模块开发及上位机开发',
		period: '2023.10 — 2024.01',
		points: [
			'负责控制器作为 Modbus RTU 主站与仪表从机通信：基于 RS485 按协议手册完成组帧、解析与 CRC 校验，实现读取计量数据、下发控制开关命令。',
			'负责 LCD 显示、按键、实时时钟等模块，完成菜单、网络请求与中断交互，显示内容与计量数据、抄表状态联动。',
			'针对低功耗需求优化显示刷新策略与背光控制，配套开发上位机工具辅助联调与问题定位。',
		],
	},
	{
		title: '自助视力检测设备',
		period: '在校实践',
		points: [
			'通过红外遥控器与手机蓝牙控制屏幕响应，测试者自助完成视力检测，实现「红外/蓝牙 → 嵌入式 → 屏幕」多端交互控制。',
		],
	},
	{
		title: '其他实践',
		period: '个人项目',
		points: [
			'开发个人网站（Python）、自用 Android 应用（音乐播放器、浏览器等），参与路由器焊接装机，搭建阿里云 Minetest 游戏服务器。',
		],
	},
];

export const EMBEDDED_EVALUATION = [
	'学习能力和学习热情强，大学期间系统自学 Python、Java、C/C++、KiCad、51 单片机等技术，持续跟进嵌入式 Linux、openWRT 等方向。',
	'具备编程架构设计能力，偏爱整洁的代码与良好的代码美学，注重代码可维护性。',
	'有良好的项目文档习惯，善于沉淀与总结经验。',
	'实践和动手能力强，能独立完成从硬件到软件的完整开发与调试。',
];

// ========== 全栈工程师简历 ==========

export const FULLSTACK_INTRO =
	'独立开发浏览器端游戏引擎与网页 SPA，熟悉 TypeScript/JavaScript、Node 工具链、数据建模与差分测试；有嵌入式软件与 AI 应用开发背景，能完成从前端界面到构建工具的全链路开发。';

export const FULLSTACK_SKILLS = [
	{ title: '前端', detail: 'TypeScript / JavaScript、浏览器 SPA、DOM / CSS、多场景 UI（地图、背包、HUD、战斗舞台）；Ruffle 承载 SWF 内容。' },
	{ title: 'Node 工具链', detail: 'Node.js 构建脚本、TS 内核转写为浏览器 JS、CLI 工具、差分对拍（oracle）与内核单测。' },
	{ title: '数据工程', detail: 'JSON 内容表设计、双真值树隔离、数据转写脚本与素材清单管理；生成物不入仓库。' },
	{ title: '工程实践', detail: '文档先行、手测验收、Git 版本控制、纯源码仓库口径；派生数据可随时重建。' },
	{ title: '编程语言', detail: '熟练 JavaScript / TypeScript、Python、C；能用 Shell、Go、C++。' },
];

export const FULLSTACK_PROJECTS = [
	{
		title: 'seer2 — 网页游戏引擎复刻',
		href: 'https://github.com/wingdever/seer2',
		period: '2026 · 个人项目',
		tech: 'TypeScript / JavaScript / Node.js / 浏览器',
		points: [
			'以「从文档与公开资料重新实现」的方法学，在浏览器中复刻经典网页游戏的玩法机制，目标是可游玩的 SPA。',
			'实现无头 TS 战斗内核，用 build-core.mjs 转写为浏览器加载的 JS；通过差分 oracle（tools/oracle-cs、difftest.mjs）与 node --test 保证行为一致。',
			'开发前端 SPA：地图、背包、HUD、战斗场景等多场景 UI，按阶段（U0–U5）逐区复刻并手测验收。',
			'设计两条语义不同、不得合并的数据真值树（官方 AS3 / 改服 JSON 与重启版 JSON），配套 build-unity-data.mjs 转写脚本。',
			'实现素材管线：Ruffle 浏览器内直渲 SWF、改服侧素材提取工具；仓库坚持纯源码口径，素材与内容表按卷分发。',
			'建立文档先行的协作规范：状态台账、线内入口文档、手测清单，以及 GPL-3.0 + NOTICE 版权边界声明。',
		],
	},
	{
		title: 'docindex — 文档索引器',
		href: 'https://github.com/wingdever/docindex',
		period: '2026 · 个人项目',
		tech: 'Python / SQLite / MCP',
		points: [
			'对 Markdown 知识库做 front matter 与链接校验，提供 CLI、本地 Web 界面与 MCP 服务，SQLite 派生缓存可随时重建。',
		],
	},
	{
		title: 'rag — 个人知识库 RAG 服务',
		href: 'https://github.com/wingdever/rag',
		period: '2026 · 个人项目',
		tech: 'Python / llamaIndex / MCP',
		points: [
			'把个人知识库做成 RAG 服务，经 MCP 暴露检索工具，Embedding 后端可切换。',
		],
	},
	{
		title: 'agent — 微型 AI Agent',
		href: 'https://github.com/wingdever/agent',
		period: '2026 · 个人项目',
		tech: 'JavaScript / Node.js / Electron',
		points: [
			'三层解耦的 Agent 运行时，含 agent-loop、工具注册、skills、workflow 与 HTTP/IPC 传输。',
		],
	},
	{
		title: '个人网站与自用工具',
		period: '个人项目',
		tech: 'Python / HTML / CSS / JavaScript',
		points: [
			'独立开发并运维个人网站（Python）、自用 Android 应用（音乐播放器、浏览器等），搭建 Minetest 游戏服务器。',
		],
	},
];

export const FULLSTACK_EVALUATION = [
	'具备从前端界面、数据层到构建工具的全链路开发能力，习惯用文档与验收清单管理复杂项目。',
	'擅长把大型目标拆成可独立推进的工作线，并用差分对拍与手测保证结果一致。',
	'学习能力强，从嵌入式到 AI 应用再到网页引擎，能快速进入新领域并产出可运行成果。',
	'重视版权边界与工程规范，坚持纯源码仓库与可重建的派生数据设计。',
];
