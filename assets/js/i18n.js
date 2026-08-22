/**
 * DetecTI Security - Sistema de Internacionalização (i18n)
 * Suporte nativo para PT-BR (default) e EN com persistência em localStorage
 */

const translations = {
    'pt': {
        // Nav
        'nav.home': 'Início',
        'nav.ecosystem': 'Ecossistema',
        'nav.docs': 'Documentação',
        'nav.docs.desc': 'Engine EASM & Threat Intel',
        'nav.about': 'Sobre',
        'nav.research': 'Pesquisas',
        'nav.blog': 'Blog',
        'nav.connect': 'Conectar',
        'nav.repo': 'Repositório',
        'nav.back_to_blog': 'Voltar para o blog',

        // Hero
        'hero.badge': '<i class="fa-solid fa-shield-halved"></i> Hub de Segurança Ofensiva & Análise de Riscos Cibernéticos',
        'hero.title': 'Segurança Ofensiva & Análise de Riscos',
        'hero.desc': 'Usamos a perspectiva e a engenharia do adversário para ajudar organizações e profissionais a mapear, expor e neutralizar vetores de ataque antes de sua exploração.',
        'hero.btn_ecosystem': 'Conheça Nossas Soluções',
        'hero.btn_research': 'Explorar Projetos',
        'hero.stat1_value': 'EASM',
        'hero.stat1_label': 'Superfície de Ataque',
        'hero.stat2_value': 'R.A.D.A.R',
        'hero.stat2_label': 'Gestão de Riscos',
        'hero.stat3_value': 'CLI',
        'hero.stat3_label': 'Cyber Lead Intelligence',
        'hero.feature1': 'Mapeamento contínuo e exposição de vetores externos',
        'hero.feature2': 'Engenharia de detecção com ferramentas proprietárias e open source',
        'hero.feature3': 'Triagem e gestão de riscos cibernéticos orientada ao negócio',
        'hero.feature4': 'Pesquisa aplicada com mentalidade Red Team / Adversary Emulation',

        // Ecosystem
        'eco.tag': 'PROPRIEDADE INTELECTUAL & ENGENHARIA',
        'eco.title': 'O Ecossistema <span>DetecTI</span>',
        'eco.desc': 'Pilares proprietários construídos para conectar a visão ofensiva à resiliência defensiva e automação em escala.',
        'eco.radar_label': 'Metodologia & Governança',
        'eco.radar_title': 'Método R.A.D.A.R',
        'eco.radar_desc': 'Framework proprietário orientado à sobrevivência dos negócios. Conecta a mentalidade do Red Team com o ciclo contínuo de Mapeamento, Avaliação de Riscos, Engenharia de Detecção e Resposta Prática.',
        'eco.tag_redteam': 'Red Team',
        'eco.tag_risk': 'Risk Assessment',
        'eco.tag_easm': 'EASM',
        'eco.tag_attack_defense': 'Ataque & Defesa',
        'eco.radar_btn': 'Saiba mais sobre o R.A.D.A.R',
        'eco.cli_label': 'Engine de Execução & Automação',
        'eco.cli_title': 'DetecTI-CLI',
        'eco.cli_desc': 'Ferramenta em linha de comando desenvolvida para automação de reconhecimento (Recon), análise contínua de superfície de ataque externa e inteligência de ameaças em pipelines operacionais.',
        'eco.cli_btn_docs': 'Documentação',
        'eco.cli_btn_gh': 'GitHub',

        // About
        'about.tag': 'MANIFESTO & CAPABILIDADES',
        'about.title': 'Sobre a <span>DetecTI Security</span>',
        'about.quote': '"Na DetecTI Security, aplicamos a perspectiva do adversário para fortalecer a resiliência cibernética dos negócios. Desenvolvedores do método R.A.D.A.R e do ecossistema DetecTI-CLI, entregamos automação de reconhecimento, análise contínua de superfície de ataque e engenharia de detecção. Nossa missão é simplificar a triagem de riscos complexos e municiar times de segurança com dados acionáveis, ferramentas open source e pesquisa de impacto."',
        'about.p1_title': 'Pesquisa & Desenvolvimento (P&D)',
        'about.p1_desc': 'Criação de ferramentas de automação, pipelines ofensivos e estudos avançados em vetores de ataque modernos.',
        'about.p2_title': 'Estudo de Ameaças (CTI)',
        'about.p2_desc': 'Inteligência de ameaças cibernéticas com foco em táticas adversárias, emulação de cenários reais e telemetria.',
        'about.p3_title': 'Gestão de Riscos Cibernéticos',
        'about.p3_desc': 'Traduzindo falhas e vulnerabilidades técnicas em impacto estratégico de negócio e priorização inteligente.',

        // Research
        'research.tag': 'LABORATÓRIO & PUBLICAÇÕES',
        'research.title': 'Pesquisas Recentes & <span>Engenharia</span>',
        'research.desc': 'Artigos técnicos, whitepapers e investigações práticas sobre segurança ofensiva e superfície de ataque.',
        'research.card1_cat': 'OSINT/Recon',
        'research.card1_title': 'Print NÃO é prova: Aplicação do OSINT em Investigações Forenses sem Comprometer a Validade Jurídica',
        'research.card1_desc': 'Você já parou para pensar em quanta informação sobre pessoas, empresas e infraestruturas está flutuando livremente pela internet neste exato momento?',
        'research.card2_cat': 'Red Team',
        'research.card2_title': 'Além do Exploit: O Mindset Ofensivo Aplicado à Sobrevivência do Negócio',
        'research.card2_desc': 'No ecossistema de segurança da informação, ainda existe uma visão romantizada (e ultrapassada) de que o trabalho de um Red Team se resume a encontrar vulnerabilidades complexas e obter acesso de administrador.',
        'research.card3_cat': 'Vulnerabilidade',
        'research.card3_title': 'CVE-2020-29134 — Directory Traversal na Plataforma TOTVS Fluig',
        'research.card3_desc': 'Durante uma análise de segurança da plataforma TOTVS Fluig, foi identificada uma vulnerabilidade de Directory Traversal.',
        'research.read_link': 'Ler publicação <i class="fa-solid fa-arrow-right"></i>',
        'research.view_all': 'Acessar Todas as Pesquisas no Blog',

        // Contact
        'contact.tag': 'CONECTIVIDADE & ECOSSISTEMA',
        'contact.title': 'Onde Nos <span>Encontrar</span>',
        'contact.desc': 'Acompanhe nossas pesquisas, ferramentas open-source e atualizações do ecossistema nas nossas comunidades.',

        // Footer
        'footer.cta_title': 'Detecte Fraquezas e <span>Proteja o que importa!</span>',
        'footer.cta_desc': 'Segurança ofensiva, engenharia de detecção e análise contínua de superfície de ataque.',
        'footer.about': 'Hub técnico de Pesquisa de Superfície de Ataque, Segurança Ofensiva e Análise de Riscos Cibernéticos.',
        'footer.eco_title': 'Ecossistema',
        'footer.inst_title': 'Institucional & Legal',
        'footer.about_link': 'Sobre a DetecTI',
        'footer.privacy': 'Política de Privacidade',
        'footer.terms': 'Termos de Uso',
        'footer.opensource': 'Projetos Open Source',
        'footer.copyright': '© 2026 DetecTI Security. Todos os direitos reservados. Hub Técnico de Segurança Ofensiva & Análise de Riscos Cibernéticos.',

        // Blog
        'blog.subtitle': 'BLOG & LABORATÓRIO',
        'blog.title_prefix': 'Artigos e',
        'blog.title_highlight': 'Insights',
        'blog.desc': 'Análises profundas, engenharia de detecção e reflexões sobre segurança ofensiva.',
        'blog.search_placeholder': 'Buscar por título, tag ou conteúdo...',
        'blog.tags_label': '<i class="fa-solid fa-tags"></i> Tags:',
        'blog.all_tags': 'Todos',
        'blog.loading': 'Carregando artigos...',
        'blog.read_time': '5 min de leitura',
        'blog.back': 'Voltar para o blog'
    },
    'en': {
        // Nav
        'nav.home': 'Home',
        'nav.ecosystem': 'Ecosystem',
        'nav.docs': 'Documentation',
        'nav.docs.desc': 'EASM & Threat Intel Engine',
        'nav.about': 'About',
        'nav.research': 'Research',
        'nav.blog': 'Blog',
        'nav.connect': 'Connect',
        'nav.repo': 'Repository',
        'nav.back_to_blog': 'Back to Blog',

        // Hero
        'hero.badge': '<i class="fa-solid fa-shield-halved"></i> Offensive Security & Cyber Risk Analysis Hub',
        'hero.title': 'Offensive Security & Risk Analysis',
        'hero.desc': 'We leverage the adversary perspective and engineering to help organizations and professionals map, expose, and neutralize attack vectors before exploitation.',
        'hero.btn_ecosystem': 'Explore Our Solutions',
        'hero.btn_research': 'Explore Projects',
        'hero.stat1_value': 'EASM',
        'hero.stat1_label': 'Attack Surface',
        'hero.stat2_value': 'R.A.D.A.R',
        'hero.stat2_label': 'Risk Management',
        'hero.stat3_value': 'CLI',
        'hero.stat3_label': 'Cyber Lead Intelligence',
        'hero.feature1': 'Continuous external vector mapping and exposure profiling',
        'hero.feature2': 'Detection engineering with proprietary and open source tooling',
        'hero.feature3': 'Business-oriented cyber risk triage and management',
        'hero.feature4': 'Applied research driven by a Red Team / Adversary Emulation mindset',

        // Ecosystem
        'eco.tag': 'INTELLECTUAL PROPERTY & ENGINEERING',
        'eco.title': 'The DetecTI <span>Ecosystem</span>',
        'eco.desc': 'Proprietary pillars built to bridge offensive visibility with defensive resilience and automation at scale.',
        'eco.radar_label': 'Methodology & Governance',
        'eco.radar_title': 'R.A.D.A.R Framework',
        'eco.radar_desc': 'Proprietary framework focused on business survivability. Connects Red Team mindset with continuous Attack Surface Mapping, Risk Assessment, Detection Engineering, and Practical Response.',
        'eco.tag_redteam': 'Red Team',
        'eco.tag_risk': 'Risk Assessment',
        'eco.tag_easm': 'EASM',
        'eco.tag_attack_defense': 'Attack & Defense',
        'eco.radar_btn': 'Learn more about R.A.D.A.R',
        'eco.cli_label': 'Execution & Automation Engine',
        'eco.cli_title': 'DetecTI-CLI',
        'eco.cli_desc': 'Command-line engine developed for reconnaissance automation (Recon), continuous external attack surface management (EASM), and threat intelligence in operational pipelines.',
        'eco.cli_btn_docs': 'Documentation',
        'eco.cli_btn_gh': 'GitHub',

        // About
        'about.tag': 'MANIFESTO & CAPABILITIES',
        'about.title': 'About <span>DetecTI Security</span>',
        'about.quote': '"At DetecTI Security, we apply the adversary\'s perspective to strengthen enterprise cyber resilience. Creators of the R.A.D.A.R framework and the DetecTI-CLI ecosystem, we deliver reconnaissance automation, continuous attack surface management, and detection engineering. Our mission is to simplify complex risk triage and empower security teams with actionable telemetry, open source tooling, and high-impact research."',
        'about.p1_title': 'Research & Development (R&D)',
        'about.p1_desc': 'Creation of automation tooling, offensive pipelines, and advanced research into modern attack vectors.',
        'about.p2_title': 'Cyber Threat Intelligence (CTI)',
        'about.p2_desc': 'Cyber threat intelligence focusing on adversary tradecraft, real-world emulation, and telemetry.',
        'about.p3_title': 'Cyber Risk Management',
        'about.p3_desc': 'Translating technical flaws and vulnerabilities into strategic business impact and intelligent prioritization.',

        // Research
        'research.tag': 'LABORATORY & PUBLICATIONS',
        'research.title': 'Recent Research & <span>Engineering</span>',
        'research.desc': 'Technical write-ups, whitepapers, and practical investigations into offensive security and attack surface telemetry.',
        'research.card1_cat': 'OSINT/Recon',
        'research.card1_title': 'Screenshots are NOT Evidence: Applying OSINT in Forensic Investigations with Legal Integrity',
        'research.card1_desc': 'Have you ever considered how much information about people, companies, and infrastructure is floating freely across the internet right now?',
        'research.card2_cat': 'Red Team',
        'research.card2_title': 'Beyond the Exploit: Applying an Offensive Mindset to Business Survivability',
        'research.card2_desc': 'In the information security ecosystem, there remains an outdated view that Red Teaming is merely about exploiting complex vulnerabilities to gain admin access.',
        'research.card3_cat': 'Vulnerability',
        'research.card3_title': 'CVE-2020-29134 — Directory Traversal on the TOTVS Fluig Platform',
        'research.card3_desc': 'During a security assessment of the TOTVS Fluig platform, a high-severity Directory Traversal vulnerability was discovered and reported.',
        'research.read_link': 'Read publication <i class="fa-solid fa-arrow-right"></i>',
        'research.view_all': 'Access All Research on the Blog',

        // Contact
        'contact.tag': 'CONNECTIVITY & COMMUNITY',
        'contact.title': 'Where to <span>Find Us</span>',
        'contact.desc': 'Follow our research, open-source projects, and technical updates across our official communities.',

        // Footer
        'footer.cta_title': 'Detect Flaws and <span>Protect What Matters!</span>',
        'footer.cta_desc': 'Offensive security, detection engineering, and continuous attack surface analysis.',
        'footer.about': 'Technical Research Hub for Attack Surface Management, Offensive Security and Cyber Risk Analysis.',
        'footer.eco_title': 'Ecosystem',
        'footer.inst_title': 'Institutional & Legal',
        'footer.about_link': 'About DetecTI',
        'footer.privacy': 'Privacy Policy',
        'footer.terms': 'Terms of Use',
        'footer.opensource': 'Open Source Projects',
        'footer.copyright': '© 2026 DetecTI Security. All rights reserved. Technical Hub for Offensive Security & Cyber Risk Analysis.',

        // Blog
        'blog.subtitle': 'BLOG & LABORATORY',
        'blog.title_prefix': 'Articles &',
        'blog.title_highlight': 'Insights',
        'blog.desc': 'In-depth security analysis, detection engineering, and offensive research.',
        'blog.search_placeholder': 'Search by title, tag or content...',
        'blog.tags_label': '<i class="fa-solid fa-tags"></i> Tags:',
        'blog.all_tags': 'All',
        'blog.loading': 'Loading articles...',
        'blog.read_time': '5 min read',
        'blog.back': 'Back to blog'
    }
};

/**
 * Idioma atual (default: pt)
 */
function getCurrentLang() {
    return localStorage.getItem('detecti_lang') || 'pt';
}

/**
 * Aplica o idioma em toda a página procurando atributos data-i18n e data-i18n-placeholder
 */
function setLanguage(lang) {
    if (!translations[lang]) lang = 'pt';
    localStorage.setItem('detecti_lang', lang);
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';

    // Atualiza elementos de texto
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key] !== undefined) {
            el.innerHTML = translations[lang][key];
        }
    });

    // Atualiza placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[lang] && translations[lang][key] !== undefined) {
            el.setAttribute('placeholder', translations[lang][key]);
        }
    });

    // Atualiza botões seletores de idioma na interface
    document.querySelectorAll('.lang-current-label').forEach(label => {
        label.textContent = lang.toUpperCase();
    });
}

/**
 * Alterna entre PT e EN
 */
function toggleLanguage() {
    const current = getCurrentLang();
    const next = current === 'pt' ? 'en' : 'pt';
    setLanguage(next);
}

// Executar imediatamente se o DOM já estiver pronto, ou escutar DOMContentLoaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        setLanguage(getCurrentLang());
    });
} else {
    setLanguage(getCurrentLang());
}
