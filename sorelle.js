/* ============================================================
   SORELLE — Shared JavaScript
   i18n, navbar, language switcher, count-up, scroll progress
   ============================================================ */

'use strict';

/* ---- i18n Translations ---- */
const translations = {
  EN: {
    'nav.home':    'Home',
    'nav.about':   'About',
    'nav.products':'Products',
    'nav.contact': 'Contact',
    'nav.cta':     'Request a Sample',

    'hero.scroll': 'Scroll to explore',

    'brand.headline':    'Premium Aloe Vera Raw Materials for Global Wellness',
    'brand.subheadline': 'For Cosmetics · Nutraceuticals · Pharmaceuticals · and more',
    'brand.num1.label':  'Hectares Cultivated',
    'brand.num2.label':  'Countries Served',

    'about.teaser.heading': 'Who We Are',
    'about.teaser.text':    'Sorelle is a Brazilian company specialized in the production and distribution of Aloe Vera raw materials, selected for the superior quality of cultivation methods and the purity of the final product. From our 380-hectare plantation in Bahia to certified ingredients delivered worldwide.',
    'about.teaser.cta':     'Discover Our Story →',

    'video.title': 'See How We Work',

    'products.title':    'Our Products',
    'products.subtitle': 'From field to formulation — four core ingredients, endless applications.',
    'products.gel':        'Aloe Vera Gel',
    'products.gel.desc':   'Available in 1:1, 10:1 and 20:1 concentration ratios. Standard and preserved formulations.',
    'products.pulp':       'Aloe Vera Pulp',
    'products.pulp.desc':  'Fresh inner-leaf fillet in 1:1 raw form or 3×5mm cube. Ready for food and cosmetics.',
    'products.powder':     'Aloe Vera Powder',
    'products.powder.desc':'Freeze-dried powder with concentration ratios from 50:1 up to 1000:1. Customizable acemannan levels.',
    'products.extract':    'Aloe Vera Extract',
    'products.extract.desc':'Oil-based extract ideal for emulsions and cosmetic formulations.',

    'whyus.title':      'Why Choose Sorelle',
    'whyus.p1.title':   'Full Vertical Integration',
    'whyus.p1.text':    'From cultivation to supply — every step controlled. Consistency, traceability, zero additives.',
    'whyus.p2.title':   'Scientific Rigor',
    'whyus.p2.text':    'Joint R&D with Aracne Biotech (University of Salerno). Clinical trials and patent development underway.',
    'whyus.p3.title':   'Regulatory Readiness',
    'whyus.p3.text':    'COA, SDS, and product specs provided per EU and FDA guidelines. Complete export documentation available.',

    'numbers.ha.label':        'Cultivated Area',
    'numbers.countries.label': 'Countries Served',
    'numbers.delivery.label':  'On-Time Delivery',
    'numbers.growth.label':    'Quarterly Growth',

    'cert.title': 'Certifications & Quality Assurance',
    'cert.text':  'Quality testing conducted both in-house and by third-party laboratories. Lot-level traceability and comprehensive technical documentation provided.',

    'cta.headline': 'Ready to Elevate Your Formulation?',
    'cta.subtext':  'Request a free sample and our technical team will contact you within 24 hours.',
    'cta.button':   'Request a Sample',

    'footer.copyright': '© 2026 Sorelle. All rights reserved.',

    'sections.about':          'About Us',
    'sections.products':       'Products',
    'sections.whyus':          'Why Choose Us',
    'sections.numbers':        'Our Numbers',
    'sections.certifications': 'Certifications',
    'sections.contact':        'Contact',

    'loader.text': 'Loading',

    /* About page */
    'about.hero.title':   'About Us',
    'about.who.title':    'Who We Are',
    'about.who.text':     'Sorelle is a leading Brazilian company in the production and distribution of Aloe Vera raw materials, recognized for the superior quality and originality of its products. Our company stands out for the use of carefully selected cultivation methods, ensuring the utmost purity and effectiveness of our ingredients. Through a constant commitment to innovation and sustainability, we have established ourselves as a benchmark in the industry, offering products that meet the highest international standards. Sorelle is a trusted partner for companies operating in the cosmetics, food supplements, and pharmaceutical sectors. Our strength lies in a highly specialized team with years of experience and in-depth knowledge of Aloe Vera\'s characteristics and its market.',
    'about.chain.title':  'Our Value Chain',
    'about.infra.title':  'Our Infrastructure',
    'about.infra.pilar.title': 'Pilar, Bahia',
    'about.infra.pilar.text':  'Aloe vera cultivation and extraction. 380 hectares of certified plantation.',
    'about.infra.bom.title':   'Bom Retiro, Santa Catarina',
    'about.infra.bom.text':    'Processing and manufacturing facility.',
    'about.rnd.title':    'Scientific Research & Innovation',
    'about.rnd.text':     'Sorelle actively invests in R&D through collaboration with Aracne Biotech, a spin-off research institution of the University of Salerno in Italy. This strategic partnership allows us to translate the latest scientific discoveries into concrete innovation, developing advanced and potentially patentable raw materials.',
    'about.rnd.card1.title': 'Cell Vitality',
    'about.rnd.card1.text':  'Maintains liver cells healthier and more vital',
    'about.rnd.card2.title': 'Antioxidant Protection',
    'about.rnd.card2.text':  'Reduces damage caused by oxidative stress',
    'about.rnd.card3.title': 'Metabolic Support',
    'about.rnd.card3.text':  'Supports normal metabolic function',

    /* Products page */
    'products.hero.title':    'Our Product Portfolio',
    'products.hero.subtitle': 'From organic-certified to conventional aloe vera ingredients. Each product supplied with COA, batch-tested for purity and bioactivity.',
    'products.process.title': 'Our Production Process',
    'products.legend':        'AL = Food  ·  CO = Cosmetics  ·  ME = Medicines  ·  SU = Supplements',

    /* Contact page */
    'contact.hero.title':    'Get in Touch',
    'contact.hero.subtitle': 'Request a sample, ask about products, or discuss your formulation needs.',
    'contact.form.name':     'Name',
    'contact.form.company':  'Company',
    'contact.form.email':    'Email',
    'contact.form.country':  'Country',
    'contact.form.message':  'Message',
    'contact.form.sample':   "I'm interested in requesting a free sample",
    'contact.form.submit':   'Send Message',
  },

  IT: {
    'nav.home':    'Home',
    'nav.about':   'Chi Siamo',
    'nav.products':'Prodotti',
    'nav.contact': 'Contatti',
    'nav.cta':     'Richiedi un Campione',

    'hero.scroll': 'Scorri per esplorare',

    'brand.headline':    'Materie Prime Premium di Aloe Vera per il Wellness Globale',
    'brand.subheadline': 'Per Cosmetici · Nutraceutici · Farmaceutici · e oltre',
    'brand.num1.label':  'Ettari Coltivati',
    'brand.num2.label':  'Paesi Serviti',

    'about.teaser.heading': 'Chi Siamo',
    'about.teaser.text':    "Sorelle è un'azienda brasiliana specializzata nella produzione e distribuzione di materie prime di Aloe Vera, selezionate per la superiore qualità dei metodi di coltivazione e la purezza del prodotto finale. Dalla nostra piantagione di 380 ettari in Bahia agli ingredienti certificati consegnati in tutto il mondo.",
    'about.teaser.cta':     'Scopri la Nostra Storia →',

    'video.title': 'Come Lavoriamo',

    'products.title':    'I Nostri Prodotti',
    'products.subtitle': 'Dal campo alla formulazione — quattro ingredienti core, infinite applicazioni.',
    'products.gel':        'Gel di Aloe Vera',
    'products.gel.desc':   'Disponibile nei rapporti di concentrazione 1:1, 10:1 e 20:1. Formulazioni standard e preservate.',
    'products.pulp':       'Polpa di Aloe Vera',
    'products.pulp.desc':  'Filetto di foglia interna 1:1 in forma grezza o cubo 3×5mm. Pronto per uso alimentare e cosmetico.',
    'products.powder':     'Polvere di Aloe Vera',
    'products.powder.desc':'Polvere liofilizzata con rapporti di concentrazione da 50:1 a 1000:1. Livelli di acemannano personalizzabili.',
    'products.extract':    'Estratto di Aloe Vera',
    'products.extract.desc':'Estratto a base oleosa ideale per emulsioni e formulazioni cosmetiche.',

    'whyus.title':      'Perché Scegliere Sorelle',
    'whyus.p1.title':   'Integrazione Verticale Completa',
    'whyus.p1.text':    'Dalla coltivazione alla fornitura — ogni fase controllata. Consistenza, tracciabilità, zero additivi.',
    'whyus.p2.title':   'Rigore Scientifico',
    'whyus.p2.text':    "R&D congiunto con Aracne Biotech (Università di Salerno). Sperimentazioni cliniche e sviluppo di brevetti in corso.",
    'whyus.p3.title':   'Conformità Normativa',
    'whyus.p3.text':    'COA, SDS e specifiche di prodotto secondo le linee guida UE e FDA. Documentazione completa per l\'esportazione disponibile.',

    'numbers.ha.label':        'Area Coltivata',
    'numbers.countries.label': 'Paesi Serviti',
    'numbers.delivery.label':  'Consegne Puntuali',
    'numbers.growth.label':    'Crescita Trimestrale',

    'cert.title': 'Certificazioni e Controllo Qualità',
    'cert.text':  'Test di qualità condotti internamente e da laboratori di terze parti. Tracciabilità a livello di lotto e documentazione tecnica completa.',

    'cta.headline': 'Pronti a Migliorare la Vostra Formulazione?',
    'cta.subtext':  'Richiedete un campione gratuito e il nostro team tecnico vi contatterà entro 24 ore.',
    'cta.button':   'Richiedi un Campione',

    'footer.copyright': '© 2026 Sorelle. Tutti i diritti riservati.',

    'sections.about':          'Chi Siamo',
    'sections.products':       'Prodotti',
    'sections.whyus':          'Perché Noi',
    'sections.numbers':        'I Nostri Numeri',
    'sections.certifications': 'Certificazioni',
    'sections.contact':        'Contatti',

    'loader.text': 'Caricamento',

    'about.hero.title':   'Chi Siamo',
    'about.who.title':    'Chi Siamo',
    'about.who.text':     "Sorelle è un'azienda brasiliana leader nella produzione e distribuzione di materie prime di Aloe Vera, riconosciuta per la superiore qualità e l'originalità dei propri prodotti. La nostra azienda si distingue per l'utilizzo di metodi di coltivazione accuratamente selezionati, garantendo la massima purezza ed efficacia dei nostri ingredienti. Attraverso un costante impegno per l'innovazione e la sostenibilità, ci siamo affermati come punto di riferimento nel settore, offrendo prodotti che soddisfano i più elevati standard internazionali. Sorelle è un partner di fiducia per le aziende operanti nei settori della cosmetica, degli integratori alimentari e farmaceutico.",
    'about.chain.title':  'La Nostra Catena del Valore',
    'about.infra.title':  'La Nostra Infrastruttura',
    'about.infra.pilar.title': 'Pilar, Bahia',
    'about.infra.pilar.text':  'Coltivazione ed estrazione di aloe vera. 380 ettari di piantagione certificata.',
    'about.infra.bom.title':   'Bom Retiro, Santa Catarina',
    'about.infra.bom.text':    'Impianto di lavorazione e produzione.',
    'about.rnd.title':    'Ricerca Scientifica e Innovazione',
    'about.rnd.text':     "Sorelle investe attivamente in R&D attraverso la collaborazione con Aracne Biotech, istituto di ricerca spin-off dell'Università di Salerno. Questa partnership strategica ci permette di tradurre le ultime scoperte scientifiche in innovazione concreta, sviluppando materie prime avanzate e potenzialmente brevettabili.",
    'about.rnd.card1.title': 'Vitalità Cellulare',
    'about.rnd.card1.text':  'Mantiene le cellule epatiche più sane e vitali',
    'about.rnd.card2.title': 'Protezione Antiossidante',
    'about.rnd.card2.text':  'Riduce i danni causati dallo stress ossidativo',
    'about.rnd.card3.title': 'Supporto Metabolico',
    'about.rnd.card3.text':  'Supporta la normale funzione metabolica',

    'products.hero.title':    'Il Nostro Portfolio Prodotti',
    'products.hero.subtitle': 'Ingredienti di aloe vera certificati biologici e convenzionali. Ogni prodotto fornito con COA, testato per purezza e bioattività.',
    'products.process.title': 'Il Nostro Processo Produttivo',
    'products.legend':        'AL = Alimentare  ·  CO = Cosmetica  ·  ME = Medicinale  ·  SU = Integratori',

    'contact.hero.title':    'Contattaci',
    'contact.hero.subtitle': 'Richiedi un campione, informazioni sui prodotti o discuti le tue esigenze di formulazione.',
    'contact.form.name':     'Nome',
    'contact.form.company':  'Azienda',
    'contact.form.email':    'Email',
    'contact.form.country':  'Paese',
    'contact.form.message':  'Messaggio',
    'contact.form.sample':   'Sono interessato a richiedere un campione gratuito',
    'contact.form.submit':   'Invia Messaggio',
  },

  PT: {
    'nav.home':    'Início',
    'nav.about':   'Sobre Nós',
    'nav.products':'Produtos',
    'nav.contact': 'Contato',
    'nav.cta':     'Solicitar Amostra',

    'hero.scroll': 'Role para explorar',

    'brand.headline':    'Matérias-Primas Premium de Aloe Vera para o Bem-Estar Global',
    'brand.subheadline': 'Para Cosméticos · Nutracêuticos · Farmacêuticos · e mais',
    'brand.num1.label':  'Hectares Cultivados',
    'brand.num2.label':  'Países Atendidos',

    'about.teaser.heading': 'Quem Somos',
    'about.teaser.text':    'A Sorelle é uma empresa brasileira especializada na produção e distribuição de matérias-primas de Aloe Vera, selecionadas pela superior qualidade dos métodos de cultivo e pela pureza do produto final. Da nossa plantação de 380 hectares na Bahia aos ingredientes certificados entregues em todo o mundo.',
    'about.teaser.cta':     'Descubra Nossa História →',

    'video.title': 'Veja Como Trabalhamos',

    'products.title':    'Nossos Produtos',
    'products.subtitle': 'Do campo à formulação — quatro ingredientes essenciais, infinitas aplicações.',
    'products.gel':        'Gel de Aloe Vera',
    'products.gel.desc':   'Disponível nas concentrações 1:1, 10:1 e 20:1. Formulações padrão e conservadas.',
    'products.pulp':       'Polpa de Aloe Vera',
    'products.pulp.desc':  'Filé de folha interna 1:1 em forma bruta ou cubo 3×5mm. Pronto para uso alimentar e cosmético.',
    'products.powder':     'Pó de Aloe Vera',
    'products.powder.desc':'Pó liofilizado com concentrações de 50:1 a 1000:1. Níveis de acemanano personalizáveis.',
    'products.extract':    'Extrato de Aloe Vera',
    'products.extract.desc':'Extrato oleoso ideal para emulsões e formulações cosméticas.',

    'whyus.title':      'Por Que Escolher a Sorelle',
    'whyus.p1.title':   'Integração Vertical Completa',
    'whyus.p1.text':    'Do cultivo ao fornecimento — cada etapa controlada. Consistência, rastreabilidade, zero aditivos.',
    'whyus.p2.title':   'Rigor Científico',
    'whyus.p2.text':    'P&D conjunto com a Aracne Biotech (Universidade de Salerno). Ensaios clínicos e desenvolvimento de patentes em andamento.',
    'whyus.p3.title':   'Conformidade Regulatória',
    'whyus.p3.text':    'COA, SDS e especificações de produto conforme diretrizes da UE e FDA. Documentação completa de exportação disponível.',

    'numbers.ha.label':        'Área Cultivada',
    'numbers.countries.label': 'Países Atendidos',
    'numbers.delivery.label':  'Entregas no Prazo',
    'numbers.growth.label':    'Crescimento Trimestral',

    'cert.title': 'Certificações e Garantia de Qualidade',
    'cert.text':  'Testes de qualidade realizados internamente e por laboratórios terceirizados. Rastreabilidade por lote e documentação técnica completa.',

    'cta.headline': 'Pronto para Elevar Sua Formulação?',
    'cta.subtext':  'Solicite uma amostra gratuita e nossa equipe técnica entrará em contato em 24 horas.',
    'cta.button':   'Solicitar Amostra',

    'footer.copyright': '© 2026 Sorelle. Todos os direitos reservados.',

    'sections.about':          'Sobre Nós',
    'sections.products':       'Produtos',
    'sections.whyus':          'Por Que Nós',
    'sections.numbers':        'Nossos Números',
    'sections.certifications': 'Certificações',
    'sections.contact':        'Contato',

    'loader.text': 'Carregando',

    'about.hero.title':   'Sobre Nós',
    'about.who.title':    'Quem Somos',
    'about.who.text':     'A Sorelle é uma empresa brasileira líder na produção e distribuição de matérias-primas de Aloe Vera, reconhecida pela superior qualidade e originalidade de seus produtos. Nossa empresa se destaca pela utilização de métodos de cultivo cuidadosamente selecionados, garantindo a máxima pureza e eficácia de nossos ingredientes. Por meio de um compromisso constante com a inovação e a sustentabilidade, nos estabelecemos como referência no setor, oferecendo produtos que atendem aos mais altos padrões internacionais.',
    'about.chain.title':  'Nossa Cadeia de Valor',
    'about.infra.title':  'Nossa Infraestrutura',
    'about.infra.pilar.title': 'Pilar, Bahia',
    'about.infra.pilar.text':  'Cultivo e extração de aloe vera. 380 hectares de plantação certificada.',
    'about.infra.bom.title':   'Bom Retiro, Santa Catarina',
    'about.infra.bom.text':    'Instalação de processamento e fabricação.',
    'about.rnd.title':    'Pesquisa Científica e Inovação',
    'about.rnd.text':     'A Sorelle investe ativamente em P&D através da colaboração com a Aracne Biotech, instituição de pesquisa spin-off da Universidade de Salerno, na Itália. Esta parceria estratégica nos permite traduzir as últimas descobertas científicas em inovação concreta, desenvolvendo matérias-primas avançadas e potencialmente patenteáveis.',
    'about.rnd.card1.title': 'Vitalidade Celular',
    'about.rnd.card1.text':  'Mantém as células hepáticas mais saudáveis e vitais',
    'about.rnd.card2.title': 'Proteção Antioxidante',
    'about.rnd.card2.text':  'Reduz os danos causados pelo estresse oxidativo',
    'about.rnd.card3.title': 'Suporte Metabólico',
    'about.rnd.card3.text':  'Apoia a função metabólica normal',

    'products.hero.title':    'Nosso Portfólio de Produtos',
    'products.hero.subtitle': 'Ingredientes de aloe vera orgânicos certificados e convencionais. Cada produto fornecido com COA, testado em lote para pureza e bioatividade.',
    'products.process.title': 'Nosso Processo de Produção',
    'products.legend':        'AL = Alimentar  ·  CO = Cosmética  ·  ME = Medicinal  ·  SU = Suplementos',

    'contact.hero.title':    'Entre em Contato',
    'contact.hero.subtitle': 'Solicite uma amostra, tire dúvidas sobre produtos ou discuta suas necessidades de formulação.',
    'contact.form.name':     'Nome',
    'contact.form.company':  'Empresa',
    'contact.form.email':    'E-mail',
    'contact.form.country':  'País',
    'contact.form.message':  'Mensagem',
    'contact.form.sample':   'Tenho interesse em solicitar uma amostra gratuita',
    'contact.form.submit':   'Enviar Mensagem',
  }
};

/* ---- i18n Engine ---- */
let currentLang = localStorage.getItem('sorelle_lang') || 'EN';

function t(key) {
  const lang = translations[currentLang] || translations['EN'];
  return lang[key] || translations['EN'][key] || key;
}

function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = t(key);
    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
      el.placeholder = val;
    } else {
      el.innerHTML = val;
    }
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    el.placeholder = t(el.getAttribute('data-i18n-placeholder'));
  });
  // Update lang buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('lang-active', btn.dataset.lang === currentLang);
  });
  document.documentElement.setAttribute('lang', currentLang.toLowerCase());
}

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('sorelle_lang', lang);
  applyTranslations();
}

/* ---- Navbar Scroll-to-Pill ---- */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('nav-scrolled', window.scrollY > 80);
  }, { passive: true });
}

/* ---- Mobile Nav ---- */
function initMobileNav() {
  const hamburger = document.querySelector('.nav-hamburger');
  const drawer = document.querySelector('.nav-mobile-drawer');
  const closeBtn = document.querySelector('.nav-mobile-close');
  if (!hamburger || !drawer) return;
  hamburger.addEventListener('click', () => drawer.classList.add('open'));
  if (closeBtn) closeBtn.addEventListener('click', () => drawer.classList.remove('open'));
  // Close on link click
  drawer.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => drawer.classList.remove('open'));
  });
}

/* ---- Active Nav Link ---- */
function setActiveNavLink() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a[data-page]').forEach(a => {
    a.classList.toggle('active', a.dataset.page === path);
  });
}

/* ---- Scroll Progress Bar ---- */
function initScrollProgress() {
  const bar = document.getElementById('scrollProgress');
  if (!bar) return;
  window.addEventListener('scroll', () => {
    const pct = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
    bar.style.width = Math.min(pct, 100) + '%';
  }, { passive: true });
}

/* ---- Count-Up Animation ---- */
function easeOutExpo(t) {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

function countUp(el, target, suffix, duration) {
  duration = duration || 2200;
  const start = performance.now();
  const isDecimal = target % 1 !== 0;

  function update(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = easeOutExpo(progress);
    const current = eased * target;
    el.textContent = (isDecimal ? current.toFixed(1) : Math.floor(current)) + suffix;
    if (progress < 1) requestAnimationFrame(update);
    else el.textContent = target + suffix;
  }
  requestAnimationFrame(update);
}

function initCountUp() {
  const section = document.getElementById('statsSection');
  if (!section) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('[data-countup]').forEach((item, i) => {
          setTimeout(() => {
            const numEl = item.querySelector('.stat-number');
            if (!numEl || numEl.dataset.counted) return;
            numEl.dataset.counted = '1';
            const target = parseFloat(item.dataset.target);
            const suffix = item.dataset.suffix || '';
            countUp(numEl, target, suffix);
          }, i * 200);
        });
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });
  observer.observe(section);
}

/* ---- Fade-in on Scroll ---- */
function initFadeIn() {
  const els = document.querySelectorAll('.reveal');
  if (!els.length) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  els.forEach(el => observer.observe(el));
}

/* ---- Accordion (Products page) ---- */
function initAccordion() {
  document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
      const accordion = header.closest('.product-accordion');
      const isOpen = accordion.classList.contains('open');
      // Close all
      document.querySelectorAll('.product-accordion').forEach(a => a.classList.remove('open'));
      // Toggle clicked
      if (!isOpen) accordion.classList.add('open');
    });
  });
}

/* ---- Contact Form ---- */
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    const original = btn.textContent;
    btn.textContent = '✓ Sent!';
    btn.style.background = '#155028';
    setTimeout(() => {
      btn.textContent = original;
      btn.style.background = '';
      form.reset();
    }, 3000);
  });
}

/* ---- Init ---- */
document.addEventListener('DOMContentLoaded', () => {
  applyTranslations();
  initNavbar();
  initMobileNav();
  setActiveNavLink();
  initScrollProgress();
  initCountUp();
  initFadeIn();
  initAccordion();
  initContactForm();

  // Language buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
  });
});
