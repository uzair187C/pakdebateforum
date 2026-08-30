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
    'home.stat_nations': 'Nations',
    'home.stat_nations_sub': '2026 Pre-WSDC',
    'home.stat_teams': 'Teams',
    'home.stat_teams_sub': '2026 Pre-WSDC',
    'home.stat_waivers': 'Fee Waivers',
    'home.stat_waivers_sub': 'Awarded at Pre-WSDC',
    'home.why_eyebrow': 'Why PDF Exists',
    'home.why_title': 'Making the International Circuit Accessible',
    'home.why_p1': 'Pak Debate Forum was founded to increase Pakistani representation at major international tournaments and make world-class debate training accessible regardless of geography or institutional backing.',
    'home.why_p2': 'We organise tournaments that attract delegations from across the globe, run structured training programmes, develop adjudicators to international standards, and fund access where financial barriers exist.',
    'home.quote_text_1': '"Debate is not about winning arguments. It is about sharpening minds, fostering truth, and giving voice to conviction."',
    'home.quote_author_1': 'Pak Debate Forum Founding Principle',
    'home.sofia_eyebrow': 'From Pakistan to the World',
    'home.sofia_title': 'WUDC Sofia — Scholarship Support',
    'home.sofia_p1': "PDF committed partial sponsorship of 20–40% of cost toward the LUMS team's trip to the World Universities Debating Championship in Sofia. Ahmad Bin Tahir and Daud Ali Kharal of LUMS received the scholarship.",
    'home.sofia_p2': 'PDF raised $1,200 through the Pak Debate Forum Open to support the journey — demonstrating what a community-driven organisation can achieve when access is the mission.',
    'home.results_btn': 'View All Results →',
    'home.sofia_stat_1_lbl': 'Raised through PDF Open',
    'home.sofia_stat_2_lbl': 'FLTRP Community Scholarship',
    'home.builds_eyebrow': 'What PDF Builds',
    'home.builds_title': 'Four Ways to Engage',
    'home.compete_title': 'Compete',
    'home.compete_desc': 'Tournaments across formats — BP, AP, World Schools — at national and international level.',
    'home.train_title': 'Train',
    'home.train_desc': 'Structured Academy programmes and community workshops from beginner to competitive level.',
    'home.learn_title': 'Learn',
    'home.learn_desc': 'Guides, motion packs, adjudication resources, and training materials — open to all.',
    'home.connect_title': 'Connect',
    'home.connect_desc': 'Institutional partnerships, international collaborations, and a growing community of debaters.',
    'home.acad_prev_eyebrow': 'PDF Academy',
    'home.acad_prev_title': 'Training That Builds Competitiveness',
    'home.acad_prev_sub': "From the September 2024 Academy cohort to 2026 Community Workshops at UoL, UCP, and CMH Lahore — PDF's training programmes develop speakers, debaters, and adjudicators at every level.",

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
    'results.wsdc_title': 'WSDC 2026 Nairobi — Judge Breaks',
    'results.wsdc_desc': 'PDF sent a subsidised judging contingent to the World Schools Debating Championship 2026 in Nairobi. Syed Hamza Javaid and Abdul Wassay broke as judges at the tournament.',
    'results.oxford_title': 'Oxford WSDC 2026 — Grand Final Judge',
    'results.oxford_desc': 'Jawad Ahmad judged the Open Grand Final at the Oxford World Schools Debating Championship 2026.',
    'results.prewsdc_title': 'Pakistan Pre-WSDC 2026',
    'results.prewsdc_desc': '37 nations, 60 teams, and 28 official National Debate Teams participated. PDF awarded $2,200 in fee waivers to support broader international access.',
    'results.sofia_desc': "PDF committed partial sponsorship of 20–40% of cost toward the LUMS team's trip to WUDC Sofia. PDF raised $1,200 through the Pak Debate Forum Open to support the journey. Ahmad Bin Tahir and Daud Ali Kharal of LUMS received the scholarship.",
    'results.nat_teams': 'National Teams',
    'results.nat_teams_sub': 'Official delegations',
    'results.ballots_title': 'Official Ballots & Result Sheets',
    'results.ballots_desc': 'Downloadable results, speaker scorecards, and team rankings for past tournaments.',
    'btn.browse_results': 'Browse Results Docs →',

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

    /* ── Coaches Page (coaches.html) ───────── */
    'coaches.hero_title': 'Meet the Coaches',
    'coaches.hero_subtitle': 'Our coaches bring national and international competitive experience. Every programme is designed and delivered by practitioners, not theorists.',
    'coaches.empty': 'No coaches listed yet.',
    'coaches.expertise': 'Expertise',

    /* ── Common CTAs & Dynamic Buttons ─────── */
    'events.cta_title': 'Want to Host an Event?',
    'events.cta_text': 'Partner with Pak Debate Forum for your next tournament, workshop, or training event.',
    'programs.cta_title': "Don't See What You Need?",
    'programs.cta_text': "Reach out and we'll help you find the right path.",
    'programs.empty': 'No programs found in this category.',
    'resources.empty': 'No resources found.',
    'results.empty': 'No results listed yet.',
    'about.team_eyebrow': 'Our Team',

    'btn.get_in_touch': 'Get in Touch',
    'btn.view_details': 'View Details →',
    'btn.register_now': 'Register Now',
    'btn.contact_us': 'Contact Us',
    'btn.apply_academy': 'Apply to the Academy',
    'btn.download_pdf': 'Download Resource',

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
    'home.why_eyebrow': 'PDF的创立初衷',
    'home.why_title': '打破文化与地域界限，走向国际赛场',
    'home.why_p1': 'Pak Debate Forum 旨在提升巴基斯坦及发展中国家青年在国际顶尖辩论赛事的代表力，让世界级学术培训跨越地理与背景壁垒。',
    'home.why_p2': '我们举办吸引全球选手的国际公开赛、开展阶梯式学术培训、培养国际标准裁判，并为有需要的优秀选手提供经济资助。',
    'home.quote_text_1': '“辩论并非关乎胜负辩驳，而是关乎淬炼思想、追寻真理与赋予信念以声音。”',
    'home.quote_author_1': 'Pak Debate Forum 创立基石原则',
    'home.sofia_eyebrow': '从巴基斯坦走向世界舞台',
    'home.sofia_title': '索非亚世界大学生辩论赛 (WUDC) 奖学金资助',
    'home.sofia_p1': 'PDF 资助了 LUMS 辩论队前往保加利亚索非亚参加世界大学生辩论锦标赛（WUDC）20-40% 的行程费用。LUMS 选手 Ahmad Bin Tahir 与 Daud Ali Kharal 荣获该项奖学金。',
    'home.sofia_p2': 'PDF 通过举办 Pak Debate Forum 公开赛筹集了 $1,200 美元资助此行 —— 展现了以公共包容为使命的学术社群所能达成的崇高目标。',
    'home.results_btn': '查看完整学术战绩 →',
    'home.sofia_stat_1_lbl': '通过 PDF 公开赛筹集资金',
    'home.sofia_stat_2_lbl': 'FLTRP 社区辩论奖学金',
    'home.builds_eyebrow': 'PDF 的四大核心板块',
    'home.builds_title': '参与与成长四大路径',
    'home.compete_title': '竞技赛场',
    'home.compete_desc': '涵盖英辩 (BP)、亚辩 (AP)、世界中学生辩论 (WSDC) 等国际主流赛制的全国与国际赛事。',
    'home.train_title': '学术训练',
    'home.train_desc': '涵盖初学者至高阶竞技选手的系统化辩论学院课程与社区工作坊。',
    'home.learn_title': '知识学习',
    'home.learn_desc': '向所有人开放的辩论指南、国际赛题集、裁判规则框架与学习资料库。',
    'home.connect_title': '社群连接',
    'home.connect_desc': '推动名校合作、国际交流及全球辩手学术社群的蓬勃发展。',
    'home.acad_prev_eyebrow': 'PDF 辩论学院',
    'home.acad_prev_title': '打造核心学术力的专业训练',
    'home.acad_prev_sub': '从 2024 年 9 月首期学院班至 2026 年在 UoL、UCP 和 CMH Lahore 举办的社区工作坊 —— PDF 的培训体系全面赋能演讲者、辩手与裁判。',

    /* ── About Page (about.html) ───────────── */
    'about.hero_eyebrow': '关于 Pak Debate Forum',
    'about.hero_title': '立足包容教育。经受世界舞台检验。',
    'about.hero_subtitle': '通过严谨的培训、国际赛事与透明治理，连接全球辩论社群。',
    'about.mission_title': '我们的学术使命',
    'about.access_title': '推动辩论教育普及',

    /* ── Coaches Page (coaches.html) ───────── */
    'coaches.hero_title': '认识导师团队',
    'coaches.hero_subtitle': '我们的导师具备深厚的国内与国际赛事竞技经验。每门课程均由实战辩手与裁判精心设计并亲授。',
    'coaches.empty': '暂无导师信息。',
    'coaches.expertise': '专业领域',

    /* ── Common CTAs & Dynamic Buttons ─────── */
    'events.cta_title': '想要举办或联合承办赛事？',
    'events.cta_text': '与 Pak Debate Forum 合作举办您的下一场锦标赛、工作坊或辩论培训。',
    'programs.cta_title': '未找到所需课程？',
    'programs.cta_text': '随时与我们联系，我们将为您推荐最适合的辩论学习路径。',
    'programs.empty': '该分类下暂无课程。',
    'resources.empty': '未找到学术资源。',
    'results.empty': '暂无赛场战绩记录。',
    'about.team_eyebrow': '核心团队',

    'btn.get_in_touch': '联系我们',
    'btn.view_details': '查看详情 →',
    'btn.register_now': '立即报名',
    'btn.contact_us': '联系我们',
    'btn.apply_academy': '申请加入学院',
    'btn.download_pdf': '下载学术资源',

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
    'results.wsdc_title': 'WSDC 2026 奈洛比 — 裁判晋级',
    'results.wsdc_desc': 'PDF 资助并派遣裁判团参加了 2026 年在奈洛比举行的世界中学生辩论锦标赛。Syed Hamza Javaid 与 Abdul Wassay 成功晋级淘汰赛裁判。',
    'results.oxford_title': '牛津 WSDC 2026 — 总决赛裁判',
    'results.oxford_desc': 'Jawad Ahmad 担任 2026 年牛津世界中学生辩论锦标赛公开组总决赛裁判。',
    'results.prewsdc_title': '2026 巴基斯坦 Pre-WSDC 锦标赛',
    'results.prewsdc_desc': '汇聚 37 个国家、60 支代表队及 28 支官方国家队。PDF 资助了 $2,200 美元报名费豁免，推动更广泛的国际交流。',
    'results.sofia_desc': 'PDF 资助 LUMS 辩论队前往保加利亚索非亚参加 WUDC 20-40% 行程费用，并通过 PDF 公开赛筹集 $1,200 美元。LUMS 选手 Ahmad Bin Tahir 与 Daud Ali Kharal 荣获资助。',
    'results.nat_teams': '官方国家队',
    'results.nat_teams_sub': '代表队阵容',
    'results.ballots_title': '官方裁判表与成绩单',
    'results.ballots_desc': '往届锦标赛的可下载赛果、辩手积分卡与队伍排名。',
    'btn.browse_results': '浏览赛果文件 →',

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
