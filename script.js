// ── Language Switching Logic ─────────────────────────────────
const translations = {
  en: {
    nav_home: "Home",
    nav_about: "About",
    nav_skills: "Skills",
    nav_projects: "Projects",
    nav_experience: "Experience",
    nav_contact: "Contact",
    hero_name: "Anes Matallah",
    hero_headline: "Computer Science Student",
    hero_sub_home: "Passionate Computer Science student exploring programming, problem-solving, automation, and data analysis.",
    hero_cta_home: "Initiate Contact",
    hero_bio_text: "A first-year Computer Science student enthusiastic about learning Python, building projects, and applying technology to solve real-world problems.",
    hero_location: "Ghardaia, Algeria",
    about_title: "About Me",
    about_text: "I am Anes Matallah, a first-year Computer Science student at University. I'm passionate about programming, problem-solving, and using technology to automate tasks and analyze data. My goal is to become a skilled developer by continuously learning new languages and frameworks, and building practical projects that make a difference.",
    skills_title: "Skills & Learning",
    skills_desc: "My current programming skills, tools I use, and technologies I'm actively learning as a Computer Science student.",
    skill_python: "Python",
    skill_category_prog: "Programming",
    skill_level_beg: "Beginner",
    skill_yr: "YR",
    skills_cloud_title: "Other Skills & Interests",
    skill_tag_vscode: "VS Code",
    skill_tag_analysis: "Data Analysis",
    skill_tag_automation: "Automation",
    skill_tag_problem: "Problem Solving",
    skill_tag_js: "JavaScript",
    skill_tag_n8n: "n8n",
    skill_numpy: "NumPy",
    skill_git: "Git",
    skill_html_css: "HTML & CSS",
    skill_category_tools: "Tools",
    skill_category_learning: "Currently Learning",
    projects_title: "My Projects",
    project_1_title: "Sports Data Analyzer",
    project_1_desc: "A Python script that reads sports statistics from CSV files, performs data analysis using NumPy to calculate averages, totals, and trends, and generates simple reports.",
    project_1_tech: "Technologies: Python, NumPy",
    project_2_title: "Simple Python Game",
    project_2_desc: "An interactive tic-tac-toe game built in Python, featuring a command-line interface, game logic, and basic AI opponent for single-player mode.",
    project_2_tech: "Technologies: Python",
    project_3_title: "Automation Workflow",
    project_3_desc: "A simple automation project using n8n to connect APIs, automate repetitive tasks like data syncing between services, and send notifications.",
    project_3_tech: "Technologies: n8n, APIs (soon)",
    project_link: "View on GitHub",
    experience_title: "My Journey",
    exp_1_years: "2026 — Present",
    exp_1_type: "Full-Time",
    exp_1_loc: "Laghouat, Algeria",
    exp_1_role: "Student",
    exp_1_company: "University",
    exp_1_desc: "Currently pursuing a Bachelor's degree in Computer Science, focusing on programming fundamentals, data structures, algorithms, and software development. Actively learning through coursework and building personal projects.",
    exp_2_years: "2024 — 2025",
    exp_2_type: "Preparatory Year",
    exp_2_loc: "Ghardaia, Algeria",
    exp_2_role: "Science Preparatory Student",
    exp_2_company: "Preparatory School",
    exp_2_desc: "Completed preparatory studies in mathematics and physics, building a strong foundation in analytical thinking and problem-solving skills that prepared me for Computer Science studies.",
    exp_3_years: "2020 — 2024",
    exp_3_type: "High School",
    exp_3_loc: "Ghardaia, Algeria",
    exp_3_role: "High School Student",
    exp_3_company: "Local High School",
    exp_3_desc: "Graduated with a focus on mathematics and science, developing an interest in technology and programming through self-study and basic coding projects.",
    break_text: "Learning & Building",
    cta_heading: "Let's Connect and Collaborate",
    cta_sub: "Open to learning opportunities, project collaborations, and discussions about technology and programming.",
    cta_btn: "Start a Conversation",
    github_heading: "Explore My Code",
    github_sub: "Check out my GitHub profile to see my coding projects, contributions, and learning journey in Computer Science.",
    github_btn: "Visit GitHub",
    footer_copy: "© 2026 Anes Matallah",
    hero_title: "Get In Touch",
    hero_sub: "I'm open to learning opportunities, project collaborations, internships, and discussions about technology and programming. Feel free to reach out!",
    contact_info_title: "Contact Info",
    contact_location: "Location",
    contact_location_val: "Ghardaia, Algeria",
    form_name: "Full Name *",
    form_name_ph: "Your name",
    form_email: "Email Address *",
    form_email_ph: "your@email.com",
    form_subject: "Subject *",
    form_subject_ph: "What's this about?",
    form_message: "Message *",
    form_message_ph: "Tell me about your project, opportunity, or just say hello...",
    form_submit: "Send Message",
    form_success: "تم إرسال الرسالة بنجاح! سأرد عليك قريباً."
  },
  ar: {
    nav_home: "الرئيسية",
    nav_about: "من أنا",
    nav_skills: "المهارات",
    nav_projects: "المشاريع",
    nav_experience: "الخبرة",
    nav_contact: "اتصل بي",
    hero_name: "أنس معطالله",
    hero_headline: "طالب علوم حاسوب",
    hero_sub_home: "طالب علوم حاسوب شغوف باستكشاف البرمجة، حل المشكلات، الأتمتة، وتحليل البيانات.",
    hero_cta_home: "بدء التواصل",
    hero_bio_text: "طالب في السنة الأولى علوم حاسوب متحمس لتعلم بايثون، بناء المشاريع، وتطبيق التكنولوجيا لحل مشكلات العالم الحقيقي.",
    hero_location: "غرداية، الجزائر",
    about_title: "من أنا",
    about_text: "أنا أنيس مطله، طالب سنة أولى علوم حاسوب بالجامعة. شغوف بالبرمجة، حل المشكلات، واستخدام التكنولوجيا لأتمتة المهام وتحليل البيانات. هدفي هو أن أصبح مطوراً ماهراً من خلال استمرار تعلم لغات وإطارات عمل جديدة، وبناء مشاريع عملية تحدث فرقاً.",
    skills_title: "المهارات & التعلم",
    skills_desc: "مهارات البرمجة الحالية لدي، والأدوات التي أستخدمها، والتقنيات التي أتعلمها بنشاط كطالب علوم حاسوب.",
    skill_python: "بايثون",
    skill_category_prog: "برمجة",
    skill_level_beg: "مبتدئ",
    skill_yr: "سنة",
    skills_cloud_title: "مهارات واهتمامات أخرى",
    skill_tag_vscode: "فيجوال ستوديو كود",
    skill_tag_analysis: "تحليل البيانات",
    skill_tag_automation: "الأتمتة",
    skill_tag_problem: "حل المشكلات",
    skill_tag_js: "جافا سكريبت",
    skill_tag_n8n: "ن8ن",
    skill_numpy: "نومباي (NumPy)",
    skill_git: "جيت (Git)",
    skill_html_css: "إتش تي إم إل و سي إس إس (HTML & CSS)",
    skill_category_tools: "أدوات",
    skill_category_learning: "أتعلمها حالياً",
    projects_title: "مشاريعي",
    project_1_title: "محلل البيانات الرياضية",
    project_1_desc: "سكربت بايثون يقوم بقراءة الإحصائيات الرياضية من ملفات CSV، ويجري تحليلاً للبيانات لحساب المتوسطات والاتجاهات، ويولد تقارير بسيطة.",
    project_1_tech: "التقنيات: بايثون، NumPy",
    project_2_title: "لعبة بايثون بسيطة",
    project_2_desc: "لعبة إكس-أو (Tic-Tac-Toe) تفاعلية مبنية بلغة بايثون، تتميز بواجهة سطر أوامر، منطق اللعبة، وخصم ذكاء اصطناعي بسيط لوضع اللاعب الفردي.",
    project_2_tech: "التقنيات: بايثون",
    project_3_title: "سير عمل الأتمتة",
    project_3_desc: "مشروع أتمتة بسيط باستخدام n8n لربط واجهات برمجة التطبيقات، وأتمتة المهام المتكررة مثل مزامنة البيانات بين الخدمات، وإرسال الإشعارات.",
    project_3_tech: "التقنيات: n8n، واجهات برمجة التطبيقات (قريباً)",
    project_link: "عرض على GitHub",
    experience_title: "رحلتي",
    exp_1_years: "2026 — الآن",
    exp_1_type: "دوام كامل",
    exp_1_loc: "الأغواط، الجزائر",
    exp_1_role: "طالب",
    exp_1_company: "الجامعة",
    exp_1_desc: "أتابع حالياً درجة البكالوريوس في علوم الحاسوب، مع التركيز على أساسيات البرمجة، هياكل البيانات، الخوارزميات، وتطوير البرمجيات. أتعلم بنشاط من خلال المواد الدراسية وبناء مشاريع شخصية.",
    exp_2_years: "2024 — 2025",
    exp_2_type: "سنة تحضيرية",
    exp_2_loc: "غرداية، الجزائر",
    exp_2_role: "طالب قسم تحضيري علوم",
    exp_2_company: "المدرسة التحضيرية",
    exp_2_desc: "أكملت الدراسات التحضيرية في الرياضيات والفيزياء، مما أدى إلى بناء أساس قوي في مهارات التفكير التحليلي وحل المشكلات التي أعدتني لدراسات علوم الحاسوب.",
    exp_3_years: "2020 — 2024",
    exp_3_type: "ثانوية",
    exp_3_loc: "غرداية، الجزائر",
    exp_3_role: "طالب ثانوي",
    exp_3_company: "ثانوية محلية",
    exp_3_desc: "تخرجت مع التركيز على الرياضيات والعلوم، وطورت اهتماماً بالتكنولوجيا والبرمجة من خلال الدراسة الذاتية ومشاريع البرمجة الأساسية.",
    break_text: "التعلم والبناء",
    cta_heading: "دعنا نتواصل ونتعاون",
    cta_sub: "متاح لفرص التعلم، التعاون في المشاريع، والمناقشات حول التكنولوجيا والبرمجة.",
    cta_btn: "ابدأ محادثة",
    github_heading: "استكشف الكود الخاص بي",
    github_sub: "تحقق من ملفي الشخصي على GitHub لرؤية مشاريعي، مساهماتي، ورحلتي التعليمية في علوم الحاسوب.",
    github_btn: "زيارة GitHub",
    footer_copy: "© 2026 أنيس مطله",
    hero_title: "تواصل معي",
    hero_sub: "أنا متاح لفرص التعلم، التعاون في المشاريع، التدريب الداخلي، والمناقشات حول التكنولوجيا والبرمجة. لا تتردد في التواصل!",
    contact_info_title: "معلومات الاتصال",
    contact_location: "الموقع",
    contact_location_val: "غرداية، الجزائر",
    form_name: "الاسم الكامل *",
    form_name_ph: "اسمك",
    form_email: "البريد الإلكتروني *",
    form_email_ph: "بريدك@الإلكتروني.com",
    form_subject: "الموضوع *",
    form_subject_ph: "عن ماذا يدور استفسارك؟",
    form_message: "الرسالة *",
    form_message_ph: "أخبرني عن مشروعك، فرصتك، أو فقط قل مرحباً...",
    form_submit: "إرسال الرسالة",
    form_success: "تم إرسال الرسالة بنجاح! سأرد عليك قريباً."
  }
};

let currentLang = localStorage.getItem('preferred_lang') || 'en';

function updateLanguage(lang) {
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

  const currentLangDisplay = document.querySelectorAll('#current-lang');
  currentLangDisplay.forEach(el => el.textContent = lang.toUpperCase());

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (translations[lang][key]) {
      el.placeholder = translations[lang][key];
    }
  });

  localStorage.setItem('preferred_lang', lang);
}

const langToggles = document.querySelectorAll('#lang-toggle');
langToggles.forEach(toggle => {
  toggle.addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'ar' : 'en';
    updateLanguage(currentLang);
  });
});

// Initial language load
document.addEventListener('DOMContentLoaded', () => {
  updateLanguage(currentLang);
});

const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navLinks.classList.toggle('open');
  });
  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      hamburger.classList.remove('open');
      navLinks.classList.remove('open');
    });
  });
}
const parallaxBlocks = document.querySelectorAll('.parallax-block');
function updateParallax() {
  parallaxBlocks.forEach(block => {
    const img = block.querySelector('.parallax-img');
    if (!img) return;
    const speed = parseFloat(img.dataset.speed || '0.15');
    const rect = block.getBoundingClientRect();
    const vh = window.innerHeight;
    const progress = 1 - (rect.bottom / (vh + rect.height));
    const offset = progress * speed * 100;
    img.style.transform = `translateY(${offset}%)`;
  });
}

const reveals = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.08, rootMargin: '0px 0px -8% 0px' });

reveals.forEach(el => revealObserver.observe(el));

// ── Hero opacity on scroll ────────────────────────────────────
const heroGrid = document.getElementById('hero-grid');

function updateHeroFade() {
  if (!heroGrid) return;
  const scrolled = window.scrollY;
  const vh = window.innerHeight;
  // Only start fading after 40% of viewport scrolled, finish at 130% — much more gradual
  const fadeStart = vh * 0.8;
  const fadeEnd = vh * 1.8;
  const progress = Math.max(0, Math.min(1, (scrolled - fadeStart) / (fadeEnd - fadeStart)));
  const opacity = 1 - progress;
  const translateY = progress * 8; // subtle (was 20 — too aggressive)
  heroGrid.style.opacity = opacity;
  heroGrid.style.transform = `translateY(${translateY}%)`;
}

// ── Active nav link on scroll ─────────────────────────────────
function updateActiveNav() {
  const sections = ['home', 'about', 'skills', 'projects', 'experience'];
  const links = document.querySelectorAll('.nav-link');
  let current = '';

  sections.forEach(id => {
    const el = document.getElementById(id);
    if (el && window.scrollY >= el.offsetTop - 120) {
      current = id;
    }
  });

  links.forEach(link => {
    const href = link.getAttribute('href') || '';
    if (href.includes('#' + current) || (current === 'home' && href === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

// ── Scroll handler ─────────────────────────────────────────────
window.addEventListener('scroll', () => {
  updateParallax();
  updateHeroFade();
  updateActiveNav();
}, { passive: true });

// Initial call
updateParallax();
updateHeroFade();

const EMAILJS_SERVICE_ID = 'service_zlu75zd';   // e.g. 'service_abc123'
const EMAILJS_TEMPLATE_ID = 'template_ghwoxql';  // e.g. 'template_xyz789'
const EMAILJS_PUBLIC_KEY = '96lAnp4VSOuhtJ4FP';   // e.g. 'aBcDeFgHiJkLmNoP'

const contactForm = document.getElementById('contact-form');

if (contactForm) {
  const submitBtn = document.getElementById('submit-btn');
  const btnText = document.getElementById('btn-text');
  const btnIcon = document.getElementById('btn-icon');
  const successMsg = document.getElementById('form-success');

  // Load EmailJS SDK
  const ejsScript = document.createElement('script');
  ejsScript.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js';
  ejsScript.onload = () => emailjs.init(EMAILJS_PUBLIC_KEY);
  document.head.appendChild(ejsScript);

  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!contactForm.checkValidity()) {
      contactForm.reportValidity();
      return;
    }

    // Warn if not configured yet
    if (EMAILJS_PUBLIC_KEY === 'YOUR_PUBLIC_KEY') {
      alert('EmailJS not set up yet.\nOpen script.js and replace YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, and YOUR_PUBLIC_KEY.\nSee the setup instructions in the comments above.');
      return;
    }

    // Loading state
    submitBtn.disabled = true;
    btnText.textContent = currentLang === 'ar' ? 'يتم الإرسال...' : 'Sending...';
    btnIcon.className = 'fa-solid fa-spinner fa-spin';

    const templateParams = {
      from_name: document.getElementById('name').value.trim(),
      from_email: document.getElementById('email').value.trim(),
      subject: document.getElementById('subject').value.trim(),
      message: document.getElementById('message').value.trim(),
      reply_to: document.getElementById('email').value.trim(),
    };

    try {
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams);

      // Success state
      btnText.textContent = currentLang === 'ar' ? 'تم الإرسال!' : 'Message Sent!';
      btnIcon.className = 'fa-solid fa-circle-check';
      successMsg.classList.remove('hidden');
      contactForm.reset();

      setTimeout(() => {
        submitBtn.disabled = false;
        btnText.textContent = currentLang === 'ar' ? 'إرسال الرسالة' : 'Send Message';
        btnIcon.className = 'fa-solid fa-paper-plane';
        successMsg.classList.add('hidden');
      }, 6000);

    } catch (err) {
      console.error('EmailJS error:', err);
      btnText.textContent = currentLang === 'ar' ? 'فشل - حاول ثانية' : 'Failed — Try Again';
      btnIcon.className = 'fa-solid fa-triangle-exclamation';
      submitBtn.disabled = false;
      setTimeout(() => {
        btnText.textContent = currentLang === 'ar' ? 'إرسال الرسالة' : 'Send Message';
        btnIcon.className = 'fa-solid fa-paper-plane';
      }, 4000);
    }
  });
}
