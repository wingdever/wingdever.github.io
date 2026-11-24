// 站点与简历内容集中在这里，改这个文件时页面会自动更新。

export const SITE_TITLE = '魏宁宁';
export const SITE_DESCRIPTION = '魏宁宁的个人网站与博客：嵌入式软件工程师，记录项目、想法与技术笔记。';

// 简历头部
export const AUTHOR = '魏宁宁';
export const JOB_TITLE = '嵌入式软件工程师';
export const INTRO =
	'熟悉 STM32、复旦微 MCU 的 C 语言模块化开发，做过 NB-IoT/4G 串口数据交互、Modbus RTU 主站通信与整机功耗优化，也会用 Python/JS 开发上位机工具。';
export const LOCATION = '广东东莞';

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

// 专业技能
export const SKILLS = [
	{ title: '开发语言', detail: '精通 C（指针、内存管理、模块化/架构化编程）；熟练 Python、JavaScript；能用 Go、C++、Shell。' },
	{ title: 'MCU 平台', detail: 'STM32、复旦微电子（fmsh）、51、树莓派、Pico；熟悉寄存器配置与外设驱动开发。' },
	{ title: '通信协议', detail: 'UART 与 NB-IoT/4G 模组交互、自定义帧协议设计与容错；Modbus RTU 主站、RS485、CRC 校验。' },
	{ title: '常用外设', detail: 'GPIO、LCD、KEY、RTC、I2C、SPI、PWM、ADC、DAC。' },
	{ title: '架构与调试', detail: '任务调度、软件定时器、状态机；低功耗设计；示波器、逻辑分析仪、J-Link。' },
	{ title: '工具与扩展', detail: 'Keil、VSCode、KiCad、Linux/Shell、openWRT；上位机工具开发（Python/JS）。' },
];

// 工作经历
export const EXPERIENCE = [
	{
		company: '上海真兰仪表科技股份有限公司',
		role: '嵌入式软件工程师',
		period: '2023.07 — 2024.01',
		points: [
			'基于 STM32 及复旦微 MCU，使用 C 语言模块化开发，参与智能燃气表嵌入式软件的实现与维护。',
			'负责 MCU 与 NB-IoT/4G 通信模组的串口数据交互，按公司数据段规范完成组帧、解析与容错处理，保障数据上报稳定可靠。',
			'负责控制器 Modbus RTU 主站通信，基于 RS485 完成仪表计量数据读取与控制命令下发。',
			'参与整机功耗优化与显示交互功能开发，优化显示刷新与背光控制策略，降低整机功耗。',
			'自行开发上位机调试工具，辅助测试与问题定位，提高开发与验证效率。',
		],
	},
];

// 项目经历
export const PROJECTS = [
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
			'负责 LCD 显示、按键、实时时钟等模块开发，完成菜单、网络请求与中断交互，显示内容与计量数据、抄表状态联动。',
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

// 自我评价
export const SELF_EVALUATION = [
	'学习能力和学习热情强，大学期间系统自学 Python、Java、C/C++、KiCad、51 单片机等技术，持续跟进嵌入式 Linux、openWRT 等方向。',
	'具备编程架构设计能力，偏爱整洁的代码与良好的代码美学，注重代码可维护性。',
	'有良好的项目文档习惯，善于沉淀与总结经验。',
	'实践和动手能力强，能独立完成从硬件到软件的完整开发与调试。',
];
