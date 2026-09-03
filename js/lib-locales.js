/**
 * Multi-Language Library SEO & Content Dictionary
 * Single source of truth for Edge SSR (_worker.js) and client reactivity (js/prompt.js).
 */

export const SUPPORTED_LANGS = ['en', 'es', 'tr', 'fr', 'de', 'it', 'pt'];
export const VALID_LIBS = [
  'dev', 'writing', 'marketing', 'job', 'startup',
  'data', 'design', 'student', 'productivity', 'legal', 'sales'
];

export const LIB_LOCALES = {
  dev: {
    en: {
      name: 'Dev & Coding',
      title: 'Best AI Prompts for Developers — Prompt Router',
      desc: 'Curated AI prompts for developers. Debugging, code review, refactoring, testing, architecture, and DevOps. Send to ChatGPT, Claude, Gemini, DeepSeek, and more in one click.',
      tagline: 'Best AI Prompts for Developers',
      sub: 'Curated prompts for debugging, code review, refactoring, testing, and architecture.<br>Click any prompt below to load it into the router.'
    },
    es: {
      name: 'Desarrollo y Código',
      title: 'Los Mejores Prompts de IA para Desarrolladores — Prompt Router',
      desc: 'Prompts de IA seleccionados para programadores: depuración, revisión de código, refactorización, pruebas y arquitectura. Envíalos a ChatGPT, Claude, Gemini y más en un clic.',
      tagline: 'Mejores Prompts de IA para Desarrolladores',
      sub: 'Prompts seleccionados para depuración, revisión de código, refactorización y arquitectura.<br>Haz clic en cualquier prompt para cargarlo en el router.'
    },
    tr: {
      name: 'Yazılım ve Kodlama',
      title: 'Yazılımcılar için En İyi Yapay Zeka Promptları — Prompt Router',
      desc: 'Geliştiriciler için özenle seçilmiş yapay zeka promptları. Hata ayıklama, kod inceleme, refaktör, test ve sistem mimarisi. Tek tıkla ChatGPT, Claude, Gemini ve DeepSeek\'e gönderin.',
      tagline: 'Yazılımcılar için En İyi Yapay Zeka Promptları',
      sub: 'Hata ayıklama, kod inceleme, refaktör, test ve sistem mimarisi için seçilmiş promptlar.<br>Aşağıdaki herhangi bir prompta tıklayarak router\'a yükleyin.'
    },
    fr: {
      name: 'Dév & Programmation',
      title: 'Meilleurs Prompts IA pour Développeurs — Prompt Router',
      desc: 'Prompts IA pour développeurs : débogage, revue de code, refactorisation, tests et architecture. Envoyez vers ChatGPT, Claude, Gemini et DeepSeek en un clic.',
      tagline: 'Meilleurs Prompts IA pour Développeurs',
      sub: 'Prompts sélectionnés pour le débogage, la revue de code, les tests et l\'architecture.<br>Cliquez sur un prompt pour le charger dans le routeur.'
    },
    de: {
      name: 'Entwicklung & Code',
      title: 'Beste KI-Prompts für Entwickler — Prompt Router',
      desc: 'Kuratierte KI-Prompts für Entwickler: Debugging, Code-Reviews, Refactoring, Testing und Architektur. Mit einem Klick an ChatGPT, Claude, Gemini und DeepSeek senden.',
      tagline: 'Beste KI-Prompts für Entwickler',
      sub: 'Kuratierte Prompts für Debugging, Code-Reviews, Refactoring und Architektur.<br>Klicke auf einen Prompt, um ihn in den Router zu laden.'
    },
    it: {
      name: 'Sviluppo & Codice',
      title: 'Migliori Prompt AI per Sviluppatori — Prompt Router',
      desc: 'Prompt AI selezionati per sviluppatori: debugging, code review, refactoring, test e architettura software. Invia a ChatGPT, Claude, Gemini con un solo clic.',
      tagline: 'Migliori Prompt AI per Sviluppatori',
      sub: 'Prompt selezionati per debugging, revisione codice, refactoring e architettura.<br>Fai clic su un prompt per caricarlo nel router.'
    },
    pt: {
      name: 'Desenvolvimento e Código',
      title: 'Melhores Prompts de IA para Desenvolvedores — Prompt Router',
      desc: 'Prompts de IA selecionados para desenvolvedores: depuração, revisão de código, refatoração, testes e arquitetura. Envie para ChatGPT, Claude, Gemini e DeepSeek em um clique.',
      tagline: 'Melhores Prompts de IA para Desenvolvedores',
      sub: 'Prompts selecionados para depuração, revisão de código, refatoração e arquitetura.<br>Clique em qualquer prompt para carregá-lo no router.'
    }
  },
  writing: {
    en: {
      name: 'Writing & Content',
      title: 'Best AI Prompts for Writing & Content — Prompt Router',
      desc: 'Curated AI prompts for writers. Drafting, rewriting, tone adjustment, storytelling, and editing. Send to ChatGPT, Claude, Gemini, and more in one click.',
      tagline: 'Best AI Prompts for Writing & Content',
      sub: 'Curated prompts for drafting, rewriting, tone adjustment, storytelling, and editing.<br>Click any prompt below to load it into the router.'
    },
    es: {
      name: 'Redacción y Contenido',
      title: 'Los Mejores Prompts de IA para Redacción y Escritura — Prompt Router',
      desc: 'Prompts de IA para redactores: borradores, reescritura, ajuste de tono, storytelling y corrección. Envíalos a ChatGPT, Claude, Gemini en un clic.',
      tagline: 'Mejores Prompts de IA para Redacción y Contenido',
      sub: 'Prompts para redacción, reescritura, tono y corrección de estilo.<br>Haz clic en cualquier prompt para cargarlo en el router.'
    },
    tr: {
      name: 'Yazarlık ve İçerik',
      title: 'Yazarlık ve İçerik Üretimi için En İyi Yapay Zeka Promptları — Prompt Router',
      desc: 'Yazarlar ve içerik üreticileri için seçilmiş promptlar. Taslak oluşturma, metin geliştirme, ton ayarlama ve hikaye anlatımı. Tek tıkla tüm yapay zekalara gönderin.',
      tagline: 'Yazarlık ve İçerik için En İyi Yapay Zeka Promptları',
      sub: 'Taslak çıkarma, metin geliştirme, ton ayarlama ve düzenleme için promptlar.<br>Aşağıdaki herhangi bir prompta tıklayarak router\'a yükleyin.'
    },
    fr: {
      name: 'Rédaction & Contenu',
      title: 'Meilleurs Prompts IA pour la Rédaction et le Contenu — Prompt Router',
      desc: 'Prompts IA pour rédacteurs : brouillons, réécriture, ajustement de ton, storytelling et correction. Comparez sur ChatGPT, Claude, Gemini en un clic.',
      tagline: 'Meilleurs Prompts IA pour la Rédaction',
      sub: 'Prompts pour la rédaction, la réécriture, le ton et le storytelling.<br>Cliquez sur un prompt pour le charger dans le routeur.'
    },
    de: {
      name: 'Schreiben & Content',
      title: 'Beste KI-Prompts für Texter und Content-Erstellung — Prompt Router',
      desc: 'Kuratierte Prompts für Texter: Entwürfe, Umschreiben, Tonalität, Storytelling und Lektorat. Mit einem Klick an ChatGPT, Claude, Gemini senden.',
      tagline: 'Beste KI-Prompts für Schreiben & Content',
      sub: 'Kuratierte Prompts für Entwürfe, Umschreiben, Tonalität und Storytelling.<br>Klicke auf einen Prompt, um ihn in den Router zu laden.'
    },
    it: {
      name: 'Scrittura & Contenuti',
      title: 'Migliori Prompt AI per la Scrittura e Content — Prompt Router',
      desc: 'Prompt AI per scrittori e copywriter: bozze, riscrittura, tono di voce, storytelling ed editing. Invia a ChatGPT, Claude, Gemini con un clic.',
      tagline: 'Migliori Prompt AI per Scrittura e Contenuti',
      sub: 'Prompt selezionati per stesura testi, riscrittura, tono ed editing.<br>Fai clic su un prompt per caricarlo nel router.'
    },
    pt: {
      name: 'Escrita e Conteúdo',
      title: 'Melhores Prompts de IA para Redação e Escrita — Prompt Router',
      desc: 'Prompts de IA para escritores e redatores: rascunhos, reescrita, ajuste de tom e contação de histórias. Envie para ChatGPT, Claude, Gemini em um clique.',
      tagline: 'Melhores Prompts de IA para Escrita e Conteúdo',
      sub: 'Prompts selecionados para rascunhos, reescrita, ajuste de tom e revisão.<br>Clique em qualquer prompt para carregá-lo no router.'
    }
  },
  marketing: {
    en: {
      name: 'Marketing & Growth',
      title: 'Best AI Prompts for Marketing & Growth — Prompt Router',
      desc: 'Curated AI prompts for marketers: SEO, ad copy, email campaigns, social media, and funnel strategy. Send to ChatGPT, Claude, Gemini in one click.',
      tagline: 'Best AI Prompts for Marketing & Growth',
      sub: 'Curated prompts for SEO, copywriting, email campaigns, social media, and ad strategy.<br>Click any prompt below to load it into the router.'
    },
    es: {
      name: 'Marketing y Crecimiento',
      title: 'Los Mejores Prompts de IA para Marketing y Crecimiento — Prompt Router',
      desc: 'Prompts de IA para especialistas en marketing: SEO, textos publicitarios, campañas de email y redes sociales. Envíalos a ChatGPT, Claude, Gemini en un clic.',
      tagline: 'Mejores Prompts de IA para Marketing',
      sub: 'Prompts seleccionados para SEO, copy publicitario, email y redes sociales.<br>Haz clic en cualquier prompt para cargarlo en el router.'
    },
    tr: {
      name: 'Pazarlama ve Büyüme',
      title: 'Pazarlama ve Büyüme için En İyi Yapay Zeka Promptları — Prompt Router',
      desc: 'Pazarlamacılar için yapay zeka promptları: SEO, reklam metni, e-posta kampanyaları ve sosyal medya stratejisi. Tek tıkla ChatGPT, Claude, Gemini\'ye gönderin.',
      tagline: 'Pazarlama ve Büyüme için En İyi Yapay Zeka Promptları',
      sub: 'SEO, reklam metinleri, e-posta kampanyaları ve sosyal medya için seçilmiş promptlar.<br>Aşağıdaki herhangi bir prompta tıklayarak router\'a yükleyin.'
    },
    fr: {
      name: 'Marketing & Croissance',
      title: 'Meilleurs Prompts IA pour le Marketing & Growth — Prompt Router',
      desc: 'Prompts IA pour le marketing : SEO, copywriting publicitaire, newsletters, réseaux sociaux et conversion.',
      tagline: 'Meilleurs Prompts IA pour le Marketing',
      sub: 'Prompts pour le SEO, le copywriting, les newsletters et la publicité.<br>Cliquez sur un prompt pour le charger dans le routeur.'
    },
    de: {
      name: 'Marketing & Growth',
      title: 'Beste KI-Prompts für Marketing und Growth — Prompt Router',
      desc: 'Kuratierte Prompts für Marketing: SEO, Werbetexte, E-Mail-Kampagnen und Social-Media-Strategien.',
      tagline: 'Beste KI-Prompts für Marketing & Growth',
      sub: 'Prompts für SEO, Werbetexte, E-Mail-Marketing und Social Media.<br>Klicke auf einen Prompt, um ihn in den Router zu laden.'
    },
    it: {
      name: 'Marketing & Crescita',
      title: 'Migliori Prompt AI per Marketing & Growth — Prompt Router',
      desc: 'Prompt AI per marketer: SEO, annunci pubblicitari, email marketing e strategie di social media.',
      tagline: 'Migliori Prompt AI per Marketing & Crescita',
      sub: 'Prompt per SEO, copywriting pubblicitario, email e social media.<br>Fai clic su un prompt per caricarlo nel router.'
    },
    pt: {
      name: 'Marketing e Crescimento',
      title: 'Melhores Prompts de IA para Marketing e Growth — Prompt Router',
      desc: 'Prompts de IA para marketing: SEO, anúncios, campanhas de e-mail e estratégias para mídias sociais.',
      tagline: 'Melhores Prompts de IA para Marketing',
      sub: 'Prompts para SEO, redação de anúncios, e-mails e redes sociais.<br>Clique em qualquer prompt para carregá-lo no router.'
    }
  },
  job: {
    en: {
      name: 'Job Search & Careers',
      title: 'Best AI Prompts for Job Search & Interviews — Prompt Router',
      desc: 'Curated AI prompts for job seekers: resume optimization, cover letters, mock interviews, and salary negotiation. Send to ChatGPT, Claude, Gemini in one click.',
      tagline: 'Best AI Prompts for Job Search & Careers',
      sub: 'Curated prompts for resume optimization, cover letters, mock interviews, and salary negotiation.<br>Click any prompt below to load it into the router.'
    },
    es: {
      name: 'Búsqueda de Empleo',
      title: 'Los Mejores Prompts de IA para Búsqueda de Empleo y CV — Prompt Router',
      desc: 'Prompts de IA para buscar trabajo: optimización de currículum, cartas de presentación y entrevistas.',
      tagline: 'Mejores Prompts de IA para Búsqueda de Empleo',
      sub: 'Prompts para optimizar currículum, cartas de presentación y entrevistas.<br>Haz clic en cualquier prompt para cargarlo en el router.'
    },
    tr: {
      name: 'İş Arama ve Kariyer',
      title: 'İş Arama, CV ve Mülakatlar için En İyi Yapay Zeka Promptları — Prompt Router',
      desc: 'İş arayanlar için seçilmiş promptlar: CV hazırlama, ön yazı, mülakat simülasyonu ve maaş pazarlığı.',
      tagline: 'İş Arama ve Kariyer için En İyi Yapay Zeka Promptları',
      sub: 'CV iyileştirme, ön yazı, mülakat hazırlığı ve maaş pazarlığı için seçilmiş promptlar.<br>Aşağıdaki herhangi bir prompta tıklayarak router\'a yükleyin.'
    },
    fr: {
      name: 'Recherche d\'Emploi',
      title: 'Meilleurs Prompts IA pour la Recherche d\'Emploi & CV — Prompt Router',
      desc: 'Prompts IA pour trouver un emploi : optimisation de CV, lettres de motivation et simulations d\'entretiens.',
      tagline: 'Meilleurs Prompts IA pour l\'Emploi',
      sub: 'Prompts pour l\'optimisation de CV, lettres de motivation et entretiens.<br>Cliquez sur un prompt pour le charger dans le routeur.'
    },
    de: {
      name: 'Jobsuche & Karriere',
      title: 'Beste KI-Prompts für Jobsuche & Vorstellungsgespräche — Prompt Router',
      desc: 'Kuratierte Prompts für Bewerber: Lebenslauf-Optimierung, Anschreiben und Interview-Vorbereitung.',
      tagline: 'Beste KI-Prompts für Jobsuche & Karriere',
      sub: 'Prompts für Lebenslauf-Optimierung, Anschreiben und Vorstellungsgespräche.<br>Klicke auf einen Prompt, um ihn in den Router zu laden.'
    },
    it: {
      name: 'Lavoro & Carriera',
      title: 'Migliori Prompt AI per la Ricerca di Lavoro e CV — Prompt Router',
      desc: 'Prompt AI per cercare lavoro: ottimizzazione curriculum, lettere di presentazione e colloqui.',
      tagline: 'Migliori Prompt AI per Lavoro e Carriera',
      sub: 'Prompt per curriculum, lettere motivazionali e preparazione ai colloqui.<br>Fai clic su un prompt per caricarlo nel router.'
    },
    pt: {
      name: 'Busca de Emprego',
      title: 'Melhores Prompts de IA para Busca de Emprego e Currículo — Prompt Router',
      desc: 'Prompts de IA para buscar emprego: otimização de currículo, cartas de apresentação e entrevistas.',
      tagline: 'Melhores Prompts de IA para Carreira',
      sub: 'Prompts para otimização de currículo, cartas de apresentação e entrevistas.<br>Clique em qualquer prompt para carregá-lo no router.'
    }
  },
  startup: {
    en: {
      name: 'Startup & Founders',
      title: 'Best AI Prompts for Startups & Founders — Prompt Router',
      desc: 'Curated AI prompts for founders: pitch decks, competitive analysis, business model validation, and GTM strategy. Send to ChatGPT, Claude, Gemini in one click.',
      tagline: 'Best AI Prompts for Startups & Founders',
      sub: 'Curated prompts for pitch decks, competitive analysis, business model validation, and GTM strategy.<br>Click any prompt below to load it into the router.'
    },
    es: {
      name: 'Startups y Fundadores',
      title: 'Los Mejores Prompts de IA para Startups y Emprendedores — Prompt Router',
      desc: 'Prompts de IA para fundadores: pitch decks, análisis de competencia, modelos de negocio y estrategia.',
      tagline: 'Mejores Prompts de IA para Startups',
      sub: 'Prompts para pitch decks, análisis de competencia y validación de negocio.<br>Haz clic en cualquier prompt para cargarlo en el router.'
    },
    tr: {
      name: 'Girişim ve Kurucular',
      title: 'Girişimciler ve Kurucular için En İyi Yapay Zeka Promptları — Prompt Router',
      desc: 'Girişimciler için yapay zeka promptları: Yatırımcı sunumu (pitch deck), rakip analizi, iş modeli doğrulama ve pazara giriş stratejisi.',
      tagline: 'Girişimciler için En İyi Yapay Zeka Promptları',
      sub: 'Pitch deck hazırlığı, rakip analizi, iş modeli doğrulama ve büyüme stratejisi için seçilmiş promptlar.<br>Aşağıdaki herhangi bir prompta tıklayarak router\'a yükleyin.'
    },
    fr: {
      name: 'Startups & Fondateurs',
      title: 'Meilleurs Prompts IA pour Startups & Fondateurs — Prompt Router',
      desc: 'Prompts IA pour entrepreneurs : pitch decks, analyse concurrentielle, modèles économiques et stratégie GTM.',
      tagline: 'Meilleurs Prompts IA pour Startups',
      sub: 'Prompts pour pitch decks, analyse concurrentielle et stratégie d\'entreprise.<br>Cliquez sur un prompt pour le charger dans le routeur.'
    },
    de: {
      name: 'Startups & Gründer',
      title: 'Beste KI-Prompts für Startups und Gründer — Prompt Router',
      desc: 'Kuratierte Prompts für Gründer: Pitch Decks, Wettbewerbsanalyse, Geschäftsmodellvalidierung und GTM-Strategie.',
      tagline: 'Beste KI-Prompts für Startups & Gründer',
      sub: 'Prompts für Pitch Decks, Wettbewerbsanalyse und Geschäftsmodelle.<br>Klicke auf einen Prompt, um ihn in den Router zu laden.'
    },
    it: {
      name: 'Startup & Founder',
      title: 'Migliori Prompt AI per Startup e Imprenditori — Prompt Router',
      desc: 'Prompt AI per fondatori: pitch deck, analisi dei competitor, validazione del modello di business e strategia.',
      tagline: 'Migliori Prompt AI per Startup e Founder',
      sub: 'Prompt per pitch deck, analisi concorrenza e modelli di business.<br>Fai clic su un prompt per caricarlo nel router.'
    },
    pt: {
      name: 'Startups e Fundadores',
      title: 'Melhores Prompts de IA para Startups e Empreendedores — Prompt Router',
      desc: 'Prompts de IA para fundadores: pitch decks, análise competitiva, validação de modelos de negócio e GTM.',
      tagline: 'Melhores Prompts de IA para Startups',
      sub: 'Prompts para pitch decks, análise competitiva e modelos de negócio.<br>Clique em qualquer prompt para carregá-lo no router.'
    }
  },
  data: {
    en: {
      name: 'Data Analysis',
      title: 'Best AI Prompts for Data Analysis & Science — Prompt Router',
      desc: 'Curated AI prompts for data analysts: SQL queries, Pandas analysis, data visualization, and statistical modeling.',
      tagline: 'Best AI Prompts for Data Analysis & Science',
      sub: 'Curated prompts for SQL queries, Pandas analysis, data visualization, and statistical modeling.<br>Click any prompt below to load it into the router.'
    },
    es: {
      name: 'Análisis de Datos',
      title: 'Los Mejores Prompts de IA para Análisis de Datos — Prompt Router',
      desc: 'Prompts de IA para analistas de datos: consultas SQL, análisis con Pandas, visualización y estadística.',
      tagline: 'Mejores Prompts de IA para Análisis de Datos',
      sub: 'Prompts para consultas SQL, análisis con Pandas y visualización.<br>Haz clic en cualquier prompt para cargarlo en el router.'
    },
    tr: {
      name: 'Veri Analizi',
      title: 'Veri Analizi ve Veri Bilimi için En İyi Yapay Zeka Promptları — Prompt Router',
      desc: 'Veri analistleri için seçilmiş promptlar: Karmaşık SQL sorguları, Python Pandas analizi, veri görselleştirme ve istatistiksel modelleme.',
      tagline: 'Veri Analizi ve Bilimi için En İyi Yapay Zeka Promptları',
      sub: 'SQL sorguları, Pandas analizi, veri görselleştirme ve istatistik için seçilmiş promptlar.<br>Aşağıdaki herhangi bir prompta tıklayarak router\'a yükleyin.'
    },
    fr: {
      name: 'Analyse de Données',
      title: 'Meilleurs Prompts IA pour l\'Analyse de Données — Prompt Router',
      desc: 'Prompts IA pour l\'analyse de données : requêtes SQL, Pandas, visualisations et modèles statistiques.',
      tagline: 'Meilleurs Prompts IA pour les Données',
      sub: 'Prompts pour SQL, analyse Pandas et visualisation de données.<br>Cliquez sur un prompt pour le charger dans le routeur.'
    },
    de: {
      name: 'Datenanalyse',
      title: 'Beste KI-Prompts für Datenanalyse & Data Science — Prompt Router',
      desc: 'Kuratierte Prompts für Datenanalysten: SQL-Abfragen, Pandas-Analysen, Datenvisualisierung und Statistik.',
      tagline: 'Beste KI-Prompts für Datenanalyse',
      sub: 'Prompts für SQL-Abfragen, Pandas-Analysen und Datenvisualisierung.<br>Klicke auf einen Prompt, um ihn in den Router zu laden.'
    },
    it: {
      name: 'Analisi Dati',
      title: 'Migliori Prompt AI per Analisi Dati e Scienza — Prompt Router',
      desc: 'Prompt AI per analisti di dati: query SQL, script Pandas, visualizzazione dati e modelli statistici.',
      tagline: 'Migliori Prompt AI per Analisi Dati',
      sub: 'Prompt per query SQL, analisi dati e visualizzazioni grafiche.<br>Fai clic su un prompt per caricarlo nel router.'
    },
    pt: {
      name: 'Análise de Dados',
      title: 'Melhores Prompts de IA para Análise de Dados — Prompt Router',
      desc: 'Prompts de IA para analistas de dados: consultas SQL, análises em Pandas, visualizações e estatística.',
      tagline: 'Melhores Prompts de IA para Análise de Dados',
      sub: 'Prompts para consultas SQL, análises em Pandas e gráficos.<br>Clique em qualquer prompt para carregá-lo no router.'
    }
  },
  design: {
    en: {
      name: 'Design & UX',
      title: 'Best AI Prompts for Designers & UX — Prompt Router',
      desc: 'Curated AI prompts for UX/UI designers: user research, personas, interface critiques, accessibility, and design systems.',
      tagline: 'Best AI Prompts for Designers & UX',
      sub: 'Curated prompts for UX research, user personas, UI critiques, accessibility, and design systems.<br>Click any prompt below to load it into the router.'
    },
    es: {
      name: 'Diseño y UX',
      title: 'Los Mejores Prompts de IA para Diseñadores y UX — Prompt Router',
      desc: 'Prompts de IA para diseñadores UX/UI: investigación de usuarios, personas, críticas de diseño y accesibilidad.',
      tagline: 'Mejores Prompts de IA para Diseño y UX',
      sub: 'Prompts para investigación UX, personas de usuario y sistemas de diseño.<br>Haz clic en cualquier prompt para cargarlo en el router.'
    },
    tr: {
      name: 'Tasarım ve UX',
      title: 'Tasarımcılar ve UX için En İyi Yapay Zeka Promptları — Prompt Router',
      desc: 'UX/UI tasarımcıları için seçilmiş promptlar: Kullanıcı araştırması, kullanıcı personaları, arayüz eleştirisi ve erişilebilirlik.',
      tagline: 'Tasarımcılar ve UX için En İyi Yapay Zeka Promptları',
      sub: 'UX araştırması, kullanıcı personaları, arayüz incelemesi ve erişilebilirlik için promptlar.<br>Aşağıdaki herhangi bir prompta tıklayarak router\'a yükleyin.'
    },
    fr: {
      name: 'Design & UX',
      title: 'Meilleurs Prompts IA pour Designers & UX — Prompt Router',
      desc: 'Prompts IA pour designers UX/UI : recherche utilisateur, personas, critiques d\'interface et accessibilité.',
      tagline: 'Meilleurs Prompts IA pour le Design & UX',
      sub: 'Prompts pour la recherche UX, les personas et les systèmes de design.<br>Cliquez sur un prompt pour le charger dans le routeur.'
    },
    de: {
      name: 'Design & UX',
      title: 'Beste KI-Prompts für Designer und UX — Prompt Router',
      desc: 'Kuratierte Prompts für UX/UI-Designer: Nutzerforschung, Personas, Design-Kritiken und Barrierefreiheit.',
      tagline: 'Beste KI-Prompts für Designer & UX',
      sub: 'Prompts für UX-Research, User Personas und Design-Systeme.<br>Klicke auf einen Prompt, um ihn in den Router zu laden.'
    },
    it: {
      name: 'Design & UX',
      title: 'Migliori Prompt AI per Designer e UX — Prompt Router',
      desc: 'Prompt AI per designer UX/UI: ricerca utenti, personas, critiche di interfaccia e accessibilità.',
      tagline: 'Migliori Prompt AI per Design e UX',
      sub: 'Prompt per ricerca UX, personas e design system.<br>Fai clic su un prompt per caricarlo nel router.'
    },
    pt: {
      name: 'Design e UX',
      title: 'Melhores Prompts de IA para Designers e UX — Prompt Router',
      desc: 'Prompts de IA para designers UX/UI: pesquisa com usuários, personas, críticas de interface e acessibilidade.',
      tagline: 'Melhores Prompts de IA para Design e UX',
      sub: 'Prompts para pesquisa UX, personas e sistemas de design.<br>Clique em qualquer prompt para carregá-lo no router.'
    }
  },
  student: {
    en: {
      name: 'Student & Study',
      title: 'Best AI Prompts for Students & Studying — Prompt Router',
      desc: 'Curated AI prompts for students: active recall, exam prep, complex explanations, study schedules, and research synthesis.',
      tagline: 'Best AI Prompts for Students & Study',
      sub: 'Curated prompts for active recall, exam prep, complex explanations, and research synthesis.<br>Click any prompt below to load it into the router.'
    },
    es: {
      name: 'Estudiantes y Estudio',
      title: 'Los Mejores Prompts de IA para Estudiantes — Prompt Router',
      desc: 'Prompts de IA para estudiantes: técnicas de estudio, preparación de exámenes, explicaciones y resúmenes.',
      tagline: 'Mejores Prompts de IA para Estudiantes',
      sub: 'Prompts para repaso activo, preparación de exámenes y explicaciones claras.<br>Haz clic en cualquier prompt para cargarlo en el router.'
    },
    tr: {
      name: 'Öğrenci ve Ders',
      title: 'Öğrenciler ve Ders Çalışma için En İyi Yapay Zeka Promptları — Prompt Router',
      desc: 'Öğrenciler için seçilmiş promptlar: Aktif hatırlama (active recall), sınav hazırlığı, karmaşık konuları basitleştirme ve ders programları.',
      tagline: 'Öğrenciler ve Çalışma için En İyi Yapay Zeka Promptları',
      sub: 'Sınav hazırlığı, karmaşık kavramları açıklama ve özet çıkarma için seçilmiş promptlar.<br>Aşağıdaki herhangi bir prompta tıklayarak router\'a yükleyin.'
    },
    fr: {
      name: 'Étudiants & Études',
      title: 'Meilleurs Prompts IA pour les Étudiants — Prompt Router',
      desc: 'Prompts IA pour étudiants : révision active, préparation aux examens, explications simples et plannings.',
      tagline: 'Meilleurs Prompts IA pour les Étudiants',
      sub: 'Prompts pour la révision active, les examens et la synthèse de cours.<br>Cliquez sur un prompt pour le charger dans le routeur.'
    },
    de: {
      name: 'Studenten & Lernen',
      title: 'Beste KI-Prompts für Studenten und Lernen — Prompt Router',
      desc: 'Kuratierte Prompts für Studenten: Active Recall, Prüfungsvorbereitung, einfache Erklärungen und Lernpläne.',
      tagline: 'Beste KI-Prompts für Studenten & Lernen',
      sub: 'Prompts für Prüfungsvorbereitung, komplexe Erklärungen und Lernpläne.<br>Klicke auf einen Prompt, um ihn in den Router zu laden.'
    },
    it: {
      name: 'Studenti & Studio',
      title: 'Migliori Prompt AI per Studenti e Studio — Prompt Router',
      desc: 'Prompt AI per studenti: ripasso attivo, preparazione esami, spiegazioni semplificate e schemi di studio.',
      tagline: 'Migliori Prompt AI per Studenti e Studio',
      sub: 'Prompt per preparazione esami, spiegazioni semplici e sintesi.<br>Fai clic su un prompt per caricarlo nel router.'
    },
    pt: {
      name: 'Estudantes e Estudos',
      title: 'Melhores Prompts de IA para Estudantes — Prompt Router',
      desc: 'Prompts de IA para estudantes: repetição espaçada, preparação para exames, explicações e resumos.',
      tagline: 'Melhores Prompts de IA para Estudantes',
      sub: 'Prompts para preparação de exames, resumos e explicações passo a passo.<br>Clique em qualquer prompt para carregá-lo no router.'
    }
  },
  productivity: {
    en: {
      name: 'Productivity',
      title: 'Best AI Prompts for Personal Productivity — Prompt Router',
      desc: 'Curated AI prompts for productivity: time blocking, daily prioritization, meeting summaries, and decision-making.',
      tagline: 'Best AI Prompts for Personal Productivity',
      sub: 'Curated prompts for time blocking, daily prioritization, meeting summaries, and decision-making.<br>Click any prompt below to load it into the router.'
    },
    es: {
      name: 'Productividad',
      title: 'Los Mejores Prompts de IA para Productividad Personal — Prompt Router',
      desc: 'Prompts de IA para productividad: bloqueo de tiempo, priorización diaria, resúmenes de reuniones y foco.',
      tagline: 'Mejores Prompts de IA para Productividad',
      sub: 'Prompts para gestión del tiempo, priorización y toma de decisiones.<br>Haz clic en cualquier prompt para cargarlo en el router.'
    },
    tr: {
      name: 'Verimlilik',
      title: 'Kişisel Verimlilik ve Zaman Yönetimi için En İyi Yapay Zeka Promptları — Prompt Router',
      desc: 'Verimlilik için seçilmiş promptlar: Zaman bloklama, günlük önceliklendirme, toplantı özetleri ve karar alma matrisleri.',
      tagline: 'Kişisel Verimlilik için En İyi Yapay Zeka Promptları',
      sub: 'Zaman bloklama, günlük öncelikler, toplantı özetleri ve karar verme için seçilmiş promptlar.<br>Aşağıdaki herhangi bir prompta tıklayarak router\'a yükleyin.'
    },
    fr: {
      name: 'Productivité',
      title: 'Meilleurs Prompts IA pour la Productivité Personnelle — Prompt Router',
      desc: 'Prompts IA pour la productivité : gestion du temps, priorisation quotidienne, synthèses de réunions et organisation.',
      tagline: 'Meilleurs Prompts IA pour la Productivité',
      sub: 'Prompts pour la gestion du temps, les réunions et la prise de décision.<br>Cliquez sur un prompt pour le charger dans le routeur.'
    },
    de: {
      name: 'Produktivität',
      title: 'Beste KI-Prompts für persönliche Produktivität — Prompt Router',
      desc: 'Kuratierte Prompts für Produktivität: Zeitmanagement, Tagesplanung, Meeting-Zusammenfassungen und Entscheidungsfindung.',
      tagline: 'Beste KI-Prompts für Produktivität',
      sub: 'Prompts für Zeitmanagement, Priorisierung und Meeting-Notizen.<br>Klicke auf einen Prompt, um ihn in den Router zu laden.'
    },
    it: {
      name: 'Produttività',
      title: 'Migliori Prompt AI per la Produttività Personale — Prompt Router',
      desc: 'Prompt AI per la produttività: gestione del tempo, priorità giornaliere, verbali di riunione e organizzazione.',
      tagline: 'Migliori Prompt AI per la Produttività',
      sub: 'Prompt per time-blocking, priorità quotidiane e sintesi riunioni.<br>Fai clic su un prompt per caricarlo nel router.'
    },
    pt: {
      name: 'Produtividade',
      title: 'Melhores Prompts de IA para Produtividade Pessoal — Prompt Router',
      desc: 'Prompts de IA para produtividade: blocos de tempo, priorização diária, resumos de reuniões e foco.',
      tagline: 'Melhores Prompts de IA para Produtividade',
      sub: 'Prompts para gestão de tempo, priorização diária e tomadas de decisão.<br>Clique em qualquer prompt para carregá-lo no router.'
    }
  },
  legal: {
    en: {
      name: 'Legal & Contracts',
      title: 'Best AI Prompts for Legal & Contracts — Prompt Router',
      desc: 'Curated AI prompts for legal tasks: contract summaries, clause simplification, NDAs, and compliance guidelines.',
      tagline: 'Best AI Prompts for Legal & Contracts',
      sub: 'Curated prompts for contract summaries, clause simplification, NDAs, and compliance guidelines.<br>Click any prompt below to load it into the router.'
    },
    es: {
      name: 'Legal y Contratos',
      title: 'Los Mejores Prompts de IA para Asuntos Legales y Contratos — Prompt Router',
      desc: 'Prompts de IA para el ámbito legal: análisis de contratos, simplificación de cláusulas, NDAs y cumplimiento.',
      tagline: 'Mejores Prompts de IA para Temas Legales',
      sub: 'Prompts para análisis de contratos, simplificación de cláusulas y NDAs.<br>Haz clic en cualquier prompt para cargarlo en el router.'
    },
    tr: {
      name: 'Hukuk ve Sözleşmeler',
      title: 'Hukuk ve Sözleşmeler için En İyi Yapay Zeka Promptları — Prompt Router',
      desc: 'Hukuki belgeler ve sözleşmeler için seçilmiş promptlar: Sözleşme analizi ve özeti, karmaşık maddeleri sadeleştirme, NDA ve mevzuat uyumu.',
      tagline: 'Hukuk ve Sözleşmeler için En İyi Yapay Zeka Promptları',
      sub: 'Sözleşme özeti, madde sadeleştirme, gizlilik anlaşmaları (NDA) ve mevzuat uyumu için seçilmiş promptlar.<br>Aşağıdaki herhangi bir prompta tıklayarak router\'a yükleyin.'
    },
    fr: {
      name: 'Juridique & Contrats',
      title: 'Meilleurs Prompts IA pour le Juridique et les Contrats — Prompt Router',
      desc: 'Prompts IA pour le domaine juridique : analyse de contrats, simplification de clauses, accords de confidentialité et conformité.',
      tagline: 'Meilleurs Prompts IA pour le Juridique',
      sub: 'Prompts pour l\'analyse de contrats, clauses juridiques et accords NDA.<br>Cliquez sur un prompt pour le charger dans le routeur.'
    },
    de: {
      name: 'Recht & Verträge',
      title: 'Beste KI-Prompts für Recht und Verträge — Prompt Router',
      desc: 'Kuratierte Prompts für rechtliche Aufgaben: Vertragsanalysen, Klausel-Vereinfachung, Geheimhaltungsverträge (NDA) und Compliance.',
      tagline: 'Beste KI-Prompts für Recht & Verträge',
      sub: 'Prompts für Vertragszusammenfassungen, Klauseln und NDAs.<br>Klicke auf einen Prompt, um ihn in den Router zu laden.'
    },
    it: {
      name: 'Legale & Contratti',
      title: 'Migliori Prompt AI per Ambito Legale e Contratti — Prompt Router',
      desc: 'Prompt AI per il settore legale: sintesi di contratti, semplificazione clausole, accordi di riservatezza (NDA) e compliance.',
      tagline: 'Migliori Prompt AI per Contratti e Legale',
      sub: 'Prompt per analisi contratti, clausole legali e conformità.<br>Fai clic su un prompt per caricarlo nel router.'
    },
    pt: {
      name: 'Jurídico e Contratos',
      title: 'Melhores Prompts de IA para Jurídico e Contratos — Prompt Router',
      desc: 'Prompts de IA para tarefas jurídicas: resumos de contratos, simplificação de cláusulas, NDAs e conformidade legal.',
      tagline: 'Melhores Prompts de IA para Contratos',
      sub: 'Prompts para análise contratual, cláusulas e termos de confidencialidade.<br>Clique em qualquer prompt para carregá-lo no router.'
    }
  },
  sales: {
    en: {
      name: 'Sales & Deals',
      title: 'Best AI Prompts for Sales & Deals — Prompt Router',
      desc: 'Curated AI prompts for sales teams: cold outreach, objection handling, discovery calls, and proposal drafting.',
      tagline: 'Best AI Prompts for Sales & Deals',
      sub: 'Curated prompts for cold outreach, objection handling, discovery calls, and proposal drafting.<br>Click any prompt below to load it into the router.'
    },
    es: {
      name: 'Ventas y Negocios',
      title: 'Los Mejores Prompts de IA para Ventas y Negociación — Prompt Router',
      desc: 'Prompts de IA para equipos de ventas: prospección en frío, manejo de objeciones y propuestas comerciales.',
      tagline: 'Mejores Prompts de IA para Ventas',
      sub: 'Prompts para prospección, manejo de objeciones y propuestas comerciales.<br>Haz clic en cualquier prompt para cargarlo en el router.'
    },
    tr: {
      name: 'Satış ve Anlaşmalar',
      title: 'Satış ve Müşteri İletişimi için En İyi Yapay Zeka Promptları — Prompt Router',
      desc: 'Satış profesyonelleri için seçilmiş promptlar: Soğuk e-posta (cold outreach), itiraz karşılama, keşif aramaları ve teklif hazırlama.',
      tagline: 'Satış ve Müşteri İlişkileri için En İyi Yapay Zeka Promptları',
      sub: 'Soğuk e-posta, itiraz karşılama, keşif görüşmeleri ve satış teklifleri için seçilmiş promptlar.<br>Aşağıdaki herhangi bir prompta tıklayarak router\'a yükleyin.'
    },
    fr: {
      name: 'Vente & Négociation',
      title: 'Meilleurs Prompts IA pour la Vente et les Négociations — Prompt Router',
      desc: 'Prompts IA pour les commerciaux : prospection à froid, traitement des objections et propositions commerciales.',
      tagline: 'Meilleurs Prompts IA pour la Vente',
      sub: 'Prompts pour la prospection, le traitement des objections et les offres commerciales.<br>Cliquez sur un prompt pour le charger dans le routeur.'
    },
    de: {
      name: 'Vertrieb & Sales',
      title: 'Beste KI-Prompts für Vertrieb und Kundengewinnung — Prompt Router',
      desc: 'Kuratierte Prompts für Vertriebsteams: Kaltakquise, Einwandbehandlung, Erstgespräche und Angebotserstellung.',
      tagline: 'Beste KI-Prompts für Vertrieb & Sales',
      sub: 'Prompts für Kaltakquise, Einwandbehandlung und Angebotserstellung.<br>Klicke auf einen Prompt, um ihn in den Router zu laden.'
    },
    it: {
      name: 'Vendite & Trattative',
      title: 'Migliori Prompt AI per Vendite e Trattative Commerciali — Prompt Router',
      desc: 'Prompt AI per team di vendita: prospezione a freddo, gestione delle obiezioni e stesura di proposte commerciali.',
      tagline: 'Migliori Prompt AI per le Vendite',
      sub: 'Prompt per prospezione commerciale, gestione obiezioni e proposte d\'acquisto.<br>Fai clic su un prompt per caricarlo nel router.'
    },
    pt: {
      name: 'Vendas e Negociações',
      title: 'Melhores Prompts de IA para Vendas e Negociação — Prompt Router',
      desc: 'Prompts de IA para times de vendas: prospecção fria, quebra de objeções e elaboração de propostas comerciais.',
      tagline: 'Melhores Prompts de IA para Vendas',
      sub: 'Prompts para prospecção fria, contorno de objeções e propostas comerciais.<br>Clique em qualquer prompt para carregá-lo no router.'
    }
  }
};
