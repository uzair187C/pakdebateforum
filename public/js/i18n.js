/**
* PAK DEBATE FORUM — Public Localization Module (I18N)
* English (en) ↔ Simplified Chinese (zh-CN)
* ────────────────────────────────────────────────────────────
* Single lightweight translation dictionary & engine for the public website.
*/

const I18N = {
  lang: 'en',

  en: {
    /* ── Nav & Header ───────────────────────── */
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.events': 'Events',
    'nav.academy': 'Academy',
    'nav.resources': 'Resources',
    'nav.contact': 'Contact',
    'nav.join': 'Join PDF',
    'nav.explore_programs': 'Explore Programs',
    'nav.search_title': 'Search site',
    'nav.toggle_menu': 'Toggle menu',
    'nav.close_menu': 'Close menu',

    /* ── Footer ─────────────────────────────── */
    'footer.tagline': 'Train your voice. Sharpen your mind. Compete with purpose.',
    'footer.explore': 'Explore',
    'footer.learn': 'Learn',
    'footer.connect': 'Connect',
    'footer.about': 'About PDF',
    'footer.events': 'Events',
    'footer.results': 'Results',
    'footer.academy': 'Academy',
    'footer.programs': 'Programs',
    'footer.coaches': 'Coaches',
    'footer.resources': 'Resources',
    'footer.contact': 'Contact Us',
    'footer.feedback': 'Feedback',
    'footer.register': 'Register',
    'footer.admin': 'Admin',
    'footer.copyright': 'Pak Debate Forum. All rights reserved.',

    /* ── Common UI / Buttons / Filters ─────── */
    'btn.learn_more': 'Learn More',
    'btn.explore_academy': 'Explore Academy',
    'btn.view_all_events': 'View All Events',
    'btn.view_programs': 'View All Programs',
    'btn.view_full_record': 'View Full Record →',
    'btn.apply_now': 'Apply Now',
    'btn.submit': 'Submit Application',
    'btn.send_message': 'Send Message',
    'btn.filter_all': 'All',
    'btn.filter_upcoming': 'Upcoming',
    'btn.filter_open': 'Open',
    'btn.filter_completed': 'Completed',
    'btn.filter_active': 'Active',
    'btn.filter_archived': 'Archived',
    'btn.search': 'Search',
    'btn.back_home': 'Return to Homepage',

    /* ── Badges & Status ────────────────────── */
    'status.upcoming': 'Upcoming',
    'status.open': 'Open Registration',
    'status.completed': 'Completed',
    'status.active': 'Active Cohort',
    'status.archived': 'Archived',
    'badge.scale': 'Verified Scale',
    'badge.pathway': '4 Learning Pathways',
    'badge.access': 'Equity & Access',
    'badge.record': 'Competitive Record',

    /* ── Homepage (index.html) ─────────────── */
    'home.hero_eyebrow': 'Pak Debate Forum',
    'home.hero_title_1': 'Compete.',
    'home.hero_title_2': 'Train.',
    'home.hero_title_3': 'Connect.',
    'home.hero_subtitle': 'An international debate organization and academy — founded in Pakistan, open to the world. We run tournaments, train speakers, develop adjudicators, and build access to the global debating circuit.',
    'home.stat_nations': 'Nations Represented',
    'home.stat_nations_sub': '2026 Pre-WSDC',
    'home.stat_teams': 'Teams Hosted',
    'home.stat_teams_sub': '2026 Pre-WSDC',
    'home.stat_waivers': 'Waivers & Grants',
    'home.stat_waivers_sub': 'Equity Disbursed',
    'home.quote_text': '“Debate is not an elite privilege. It is an intellectual right. Our mission is to ensure that talent, regardless of geography or financial means, has a seat at the world’s most competitive tables.”',
    'home.quote_author': 'Pak Debate Forum Directorate',
    'home.pathways_title': 'Four Pillars of Development',
    'home.pathways_subtitle': 'Structured pathways designed to take debaters, adjudicators, and institutions from foundational skills to world-stage competition.',
    'home.case_studies_title': 'Impact & Representation',
    'home.network_title': 'Institutional Network',
    'home.network_subtitle': 'Partnering with leading schools, universities, and debating circuits across Pakistan and internationally.',

    /* ── About Page (about.html) ───────────── */
    'about.hero_eyebrow': 'About Pak Debate Forum',
    'about.hero_title': 'Built for Access. Proven on the World Stage.',
    'about.hero_subtitle': 'Connecting debate communities through rigorous training, international competition, and transparent governance.',
    'about.mission_title': 'Our Institutional Mission',
    'about.access_title': 'Democratizing Debate Education',

    /* ── Academy Page (academy.html) ───────── */
    'academy.hero_eyebrow': 'PDF Academy',
    'academy.hero_title': 'Structured Debate & Leadership Training',
    'academy.hero_subtitle': 'From foundational public speaking to international competitive readiness — expert coaching for speakers of all levels.',
    'academy.pathway_title': '5-Stage Learning Trajectory',
    'academy.workshops_title': 'Institutional Workshops',

    /* ── Results Page (results.html) ───────── */
    'results.hero_eyebrow': 'Competitive Record',
    'results.hero_title': 'International Achievements & Representation',
    'results.hero_subtitle': 'Documented records of competitive success and equity representation across world championships.',

    /* ── Events Page (events.html) ─────────── */
    'events.hero_eyebrow': 'Events Ecosystem',
    'events.hero_title': 'Tournaments, Opens & Community Workshops',
    'events.hero_subtitle': 'Explore upcoming international opens, national championships, and debate training workshops.',

    /* ── Programs Page (programs.html) ─────── */
    'programs.hero_eyebrow': 'Programme Directory',
    'programs.hero_title': 'Academy Courses & Workshops',
    'programs.hero_subtitle': 'Structured debate, public speaking, and adjudication programs open to global participants.',

    /* ── Resources Page (resources.html) ───── */
    'resources.hero_eyebrow': 'Knowledge Library',
    'resources.hero_title': 'Motion Packs, Guides & Training Resources',
    'resources.hero_subtitle': 'Curated debate handbooks, adjudication frameworks, and motion databases.',

    /* ── Contact Page (contact.html) ───────── */
    'contact.hero_eyebrow': 'Get In Touch',
    'contact.hero_title': 'Connect With Pak Debate Forum',
    'contact.hero_subtitle': 'Have questions about programs, tournament partnerships, or institutional coaching? Reach out to our team.',
    'contact.name_label': 'Full Name',
    'contact.name_placeholder': 'Your full name',
    'contact.email_label': 'Email Address',
    'contact.email_placeholder': 'your.name@example.com',
    'contact.category_label': 'Inquiry Category',
    'contact.message_label': 'Your Message',
    'contact.message_placeholder': 'How can we help you?',

    /* ── Register Page (register.html) ─────── */
    'register.hero_eyebrow': 'Registration & Application',
    'register.hero_title': 'Join a PDF Program or Event',
    'register.hero_subtitle': 'Fill out the application below to secure your spot in our upcoming academy programs or competitive tournaments.',
    'register.phone_label': 'Phone Number',
    'register.phone_placeholder': '+92 300 0000000',
    'register.age_label': 'Age',
    'register.age_placeholder': 'Your age',
    'register.inst_label': 'Institution / School / University',
    'register.inst_placeholder': 'Name of your institution',
    'register.exp_label': 'Debate Experience Level',
    'register.exp_beginner': 'Beginner (0-1 years)',
    'register.exp_intermediate': 'Intermediate (1-3 years)',
    'register.exp_advanced': 'Advanced (3+ years)',
    'register.notes_label': 'Additional Notes / Equity Request',
    'register.notes_placeholder': 'Any specific requirements or comments...',

    /* ── Feedback Page (feedback.html) ─────── */
    'feedback.hero_eyebrow': 'Participant Feedback',
    'feedback.hero_title': 'Share Your Experience',
    'feedback.hero_subtitle': 'We value your input to continuously improve our tournaments, coaching, and resources.',

    /* ── Search Page (search.html) ─────────── */
    'search.hero_title': 'Search Pak Debate Forum',
    'search.input_placeholder': 'Search programs, events, resources...',
    'search.no_results': 'No matching results found.',
    'search.results_count': 'found',

    /* ── Misc & Toast ───────────────────────── */
    'toast.success_register': 'Registration submitted successfully!',
    'toast.success_feedback': 'Thank you for your feedback!',
    'toast.error_generic': 'An error occurred. Please try again.',
    'theme.toggle_light': 'Switch to Light Experience',
    'theme.toggle_dark': 'Switch to Dark Experience',
    'lang.toggle_en': 'English',
    'lang.toggle_zh': '中文'
  },

  zh: {
    /* ── Nav & Header ───────────────────────── */
    'nav.home': '首页',
    'nav.about': '关于我们',
    'nav.events': '赛事活动',
    'nav.academy': '辩论学院',
    'nav.resources': '学术资源',
    'nav.contact': '联系我们',
    'nav.join': '加入PDF',
    'nav.explore_programs': '探索课程',
    'nav.search_title': '搜索网站',
    'nav.toggle_menu': '切换菜单',
    'nav.close_menu': '关闭菜单',

    /* ── Footer ─────────────────────────────── */
    'footer.tagline': '锤炼声音。开阔思维。赋能表达。',
    'footer.explore': '探索',
    'footer.learn': '学习',
    'footer.connect': '连接',
    'footer.about': '关于PDF',
    'footer.events': '赛事',
    'footer.results': '学术战绩',
    'footer.academy': '学院',
    'footer.programs': '课程',
    'footer.coaches': '导师团队',
    'footer.resources': '资源库',
    'footer.contact': '联系我们',
    'footer.feedback': '意见反馈',
    'footer.register': '在线报名',
    'footer.admin': '管理后台',
    'footer.copyright': 'Pak Debate Forum 版权所有。',

    /* ── Common UI / Buttons / Filters ─────── */
    'btn.learn_more': '了解更多',
    'btn.explore_academy': '探索学院',
    'btn.view_all_events': '查看所有赛事',
    'btn.view_programs': '查看所有项目',
    'btn.view_full_record': '查看完整战绩 →',
    'btn.apply_now': '立即报名',
    'btn.submit': '提交申请',
    'btn.send_message': '发送留言',
    'btn.filter_all': '全部',
    'btn.filter_upcoming': '即将举办',
    'btn.filter_open': '开放报名',
    'btn.filter_completed': '已结束',
    'btn.filter_active': '进行中',
    'btn.filter_archived': '已归档',
    'btn.search': '搜索',
    'btn.back_home': '返回首页',

    /* ── Badges & Status ────────────────────── */
    'status.upcoming': '即将举办',
    'status.open': '开放报名',
    'status.completed': '已结束',
    'status.active': '开班中',
    'status.archived': '已归档',
    'badge.scale': '认证规模',
    'badge.pathway': '4大进阶体系',
    'badge.access': '公平与资助',
    'badge.record': '竞技战绩',

    /* ── Homepage (index.html) ─────────────── */
    'home.hero_eyebrow': '巴基斯坦辩论论坛',
    'home.hero_title_1': '竞技。',
    'home.hero_title_2': '训练。',
    'home.hero_title_3': '连接。',
    'home.hero_subtitle': '面向全球的国际辩论组织与学术学院 —— 始于巴基斯坦，拥抱世界。我们举办高规格学术赛事、培训辩手与裁判，并致力于消除经济壁垒，助力青年走向世界舞台。',
    'home.stat_nations': '参赛国家',
    'home.stat_nations_sub': '2026 Pre-WSDC',
    'home.stat_teams': '参赛队伍',
    'home.stat_teams_sub': '2026 Pre-WSDC',
    'home.stat_waivers': '助学与豁免金',
    'home.stat_waivers_sub': '累计资助金额',
    'home.quote_text': '“辩论绝非少数精英的特权，而是每个人思考与表达的权利。我们的使命是确保有志青年无论身在何处、背景如何，都能在世界最具竞争力的学术舞台上拥有发言权。”',
    'home.quote_author': 'Pak Debate Forum 理事会',
    'home.pathways_title': '四大发展支柱',
    'home.pathways_subtitle': '阶梯式培养体系，助力辩手、裁判与学术机构实现从基础表达至国际顶尖赛事的跨越。',
    'home.case_studies_title': '国际影响力与学术代表力',
    'home.network_title': '合作院校与机构网络',
    'home.network_subtitle': '携手巴基斯坦及国际顶尖中学、大学与辩论联盟共同推动辩论教育发展。',

    /* ── About Page (about.html) ───────────── */
    'about.hero_eyebrow': '关于 Pak Debate Forum',
    'about.hero_title': '立足包容教育。经受世界舞台检验。',
    'about.hero_subtitle': '通过严谨的培训、国际赛事与透明治理，连接全球辩论社群。',
    'about.mission_title': '我们的学术使命',
    'about.access_title': '推动辩论教育普及',

    /* ── Academy Page (academy.html) ───────── */
    'academy.hero_eyebrow': 'PDF 辩论学院',
    'academy.hero_title': '系统化辩论与领导力训练',
    'academy.hero_subtitle': '从基础演讲技能至国际竞技备战 —— 专家导师团队为各阶段学员提供专业指导。',
    'academy.pathway_title': '五阶段成长路径',
    'academy.workshops_title': '合作机构工作坊',

    /* ── Results Page (results.html) ───────── */
    'results.hero_eyebrow': '竞技战绩',
    'results.hero_title': '国际赛场荣誉与代表力',
    'results.hero_subtitle': '收录PDF在世界中学生辩论赛（WSDC）、牛津大学辩论赛等顶尖国际赛事中的学术成果。',

    /* ── Events Page (events.html) ─────────── */
    'events.hero_eyebrow': '赛事活动生态',
    'events.hero_title': '国际公开赛、全国锦标赛与社区工作坊',
    'events.hero_subtitle': '探索即将举办的国际辩论公开赛、全国冠军赛及专业培训活动。',

    /* ── Programs Page (programs.html) ─────── */
    'programs.hero_eyebrow': '项目与课程目录',
    'programs.hero_title': '学院辩论课程与工作坊',
    'programs.hero_subtitle': '面向全球学员开放的专业辩论、演讲与裁判培训课程。',

    /* ── Resources Page (resources.html) ───── */
    'resources.hero_eyebrow': '学术资源库',
    'resources.hero_title': '辩题集、指南与培训资料',
    'resources.hero_subtitle': '精选辩论手册、裁判规则框架与国际赛题数据库。',

    /* ── Contact Page (contact.html) ───────── */
    'contact.hero_eyebrow': '联系我们',
    'contact.hero_title': '与 Pak Debate Forum 取得联系',
    'contact.hero_subtitle': '无论关于课程咨询、赛事合作还是机构培训，欢迎随时与我们的团队沟通。',
    'contact.name_label': '姓名',
    'contact.name_placeholder': '您的姓名',
    'contact.email_label': '电子邮箱',
    'contact.email_placeholder': 'your.name@example.com',
    'contact.category_label': '咨询类别',
    'contact.message_label': '留言内容',
    'contact.message_placeholder': '请在此输入您的咨询内容...',

    /* ── Register Page (register.html) ─────── */
    'register.hero_eyebrow': '在线报名与申请',
    'register.hero_title': '报名参加 PDF 课程或赛事',
    'register.hero_subtitle': '请填写下方表格，锁定近期学院课程或辩论锦标赛的席位。',
    'register.phone_label': '联系电话',
    'register.phone_placeholder': '+92 300 0000000',
    'register.age_label': '年龄',
    'register.age_placeholder': '您的年龄',
    'register.inst_label': '就读学校 / 机构',
    'register.inst_placeholder': '请输入学校或机构名称',
    'register.exp_label': '辩论经验水平',
    'register.exp_beginner': '初学者（0-1年）',
    'register.exp_intermediate': '中级辩手（1-3年）',
    'register.exp_advanced': '资深辩手（3年以上）',
    'register.notes_label': '备注 / 助学金申请说明',
    'register.notes_placeholder': '如有特殊需求或说明请在此填写...',

    /* ── Feedback Page (feedback.html) ─────── */
    'feedback.hero_eyebrow': '学员与选手反馈',
    'feedback.hero_title': '分享您的参与体验',
    'feedback.hero_subtitle': '您的宝贵建议是我们持续提升赛事品质、教学与资源服务的重要动力。',

    /* ── Search Page (search.html) ─────────── */
    'search.hero_title': '搜索 Pak Debate Forum',
    'search.input_placeholder': '搜索课程、赛事、学术资源...',
    'search.no_results': '未找到相关结果。',
    'search.results_count': '条相关结果',

    /* ── Misc & Toast ───────────────────────── */
    'toast.success_register': '报名申请提交成功！',
    'toast.success_feedback': '感谢您的宝贵意见！',
    'toast.error_generic': '提交失败，请重试。',
    'theme.toggle_light': '切换至明亮体验 Mode',
    'theme.toggle_dark': '切换至暗黑体验 Mode',
    'lang.toggle_en': 'English',
    'lang.toggle_zh': '中文'
  },

  t(key) {
    const dict = this[this.lang] || this.en;
    return dict[key] || this.en[key] || key;
  },

  setLang(lang) {
    if (lang !== 'en' && lang !== 'zh') lang = 'en';
    this.lang = lang;
    localStorage.setItem('pdf_lang', lang);
    document.documentElement.setAttribute('lang', lang === 'zh' ? 'zh-CN' : 'en');
    this.translateDOM();
    if (window.renderNav) window.renderNav();
    if (window.renderDrawer) window.renderDrawer();
    if (window.renderFooter) window.renderFooter();
  },

  translateDOM() {
    /* Translate elements with data-i18n */
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (key) {
        el.textContent = this.t(key);
      }
    });

    /* Translate elements with data-i18n-placeholder */
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (key) {
        el.setAttribute('placeholder', this.t(key));
      }
    });

    /* Translate elements with data-i18n-aria */
    document.querySelectorAll('[data-i18n-aria]').forEach(el => {
      const key = el.getAttribute('data-i18n-aria');
      if (key) {
        el.setAttribute('aria-label', this.t(key));
      }
    });
  },

  init() {
    const saved = localStorage.getItem('pdf_lang') || 'en';
    this.lang = saved === 'zh' ? 'zh' : 'en';
    document.documentElement.setAttribute('lang', this.lang === 'zh' ? 'zh-CN' : 'en');
    this.translateDOM();
  }
};

window.I18N = I18N;
