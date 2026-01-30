const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const letters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const fontSize = 16;
const columns = canvas.width / fontSize;
const drops = [];

for (let x = 0; x < columns; x++) {
    drops[x] = 1;
}

function draw() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.04)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#0f0';
    ctx.font = fontSize + 'px monospace';

    for (let i = 0; i < drops.length; i++) {
        const text = letters.charAt(Math.floor(Math.random() * letters.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}

setInterval(draw, 35);

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

const translations = {
    uz: {
        greeting: 'Salom, men Umurzoq Topqonbayev',
        intro: 'Men dasturchiman va innovatsion loyihalar yaratishni yaxshi ko\'raman.',
        aboutTitle: 'Men haqimda',
        aboutText: 'Men Umurzoq Topqonbayev, tajribali dasturchiman. Web va mobil ilovalar yaratishda ixtisoslashganman. Yangi texnologiyalarni o\'rganish va ularni amaliyotda qo\'llashni yaxshi ko\'raman. Email: umurzoquz08@gmail.com',
        aboutText2: 'Men 2020 yildan beri dasturlash bilan shug\'ullanaman. Bir nechta loyihalarda ishtirok etganman va jamoaviy ishda tajriba orttirdim. Maqsadim - innovatsion yechimlar yaratish va texnologiyani inson hayotini yaxshilash uchun ishlatish.',
        aboutText3: 'Ta\'lim: Informatika yo\'nalishida bakalavr darajasi. Doimiy ravishda o\'z bilimlarimni yangilab turaman, onlayn kurslar va seminarlarda qatnashaman.',
        skillsTitle: 'Mahoratlar',
        skillsText: 'Men quyidagi texnologiyalarda tajribaga egaman:',
        projectsTitle: 'Proyektlar',
        projectsText: 'Bu yerda mening ba\'zi loyihalarimni ko\'rishingiz mumkin.',
        contactTitle: 'Bog\'lanish',
        contactText: 'Men bilan bog\'lanish uchun quyidagi ma\'lumotlarni ishlatishingiz mumkin. Email: umurzoquz08@gmail.com',
        navHome: 'Bosh sahifa',
        navAbout: 'Men haqimda',
        navSkills: 'Mahoratlar',
        navProjects: 'Proyektlar',
        navContact: 'Bog\'lanish',
        project1Title: 'Portfolio Website',
        project1Desc: 'Shaxsiy portfolyo veb-sayti. HTML, CSS, JavaScript va animatsiyalar bilan yaratilgan.',
        project2Title: 'Task Manager App',
        project2Desc: 'Vazifalarni boshqarish uchun React ilovasi. Backend bilan API integratsiyasi.',
        project3Title: 'Weather App',
        project3Desc: 'Ob-havo ma\'lumotlarini ko\'rsatuvchi Python skripti. API dan ma\'lumot oladi.',
        skill1: 'Frontend: HTML, CSS, JavaScript, React, Vue.js',
        skill2: 'Backend: Python, Node.js, Express',
        skill3: 'Databases: MongoDB, MySQL, PostgreSQL',
        skill4: 'Tools: Git, Docker, VS Code',
        skill5: 'Other: API Development, Responsive Design, Version Control',
        nameLabel: 'Ismingiz:',
        emailLabel: 'Email:',
        messageLabel: 'Xabar:',
        submitBtn: 'Yuborish',
        ctaAbout: 'Men haqimda',
        ctaProjects: 'Proyektlar',
        ctaContact: 'Bog\'lanish'
    },
    en: {
        greeting: 'Hello, I am Umurzoq Topqonbayev',
        intro: 'I am a programmer and I love creating innovative projects.',
        aboutTitle: 'About Me',
        aboutText: 'I am Umurzoq Topqonbayev, an experienced programmer. I specialize in creating web and mobile applications. I love learning new technologies and applying them in practice. Email: umurzoquz08@gmail.com',
        aboutText2: 'I have been programming since 2020. I have participated in several projects and gained experience in teamwork. My goal is to create innovative solutions and use technology to improve people\'s lives.',
        aboutText3: 'Education: Bachelor\'s degree in Computer Science. I constantly update my knowledge by taking online courses and attending seminars.',
        skillsTitle: 'Skills',
        skillsText: 'I have experience in the following technologies:',
        projectsTitle: 'Projects',
        projectsText: 'Here you can see some of my projects.',
        contactTitle: 'Contact',
        contactText: 'You can use the following information to contact me. Email: umurzoquz08@gmail.com',
        navHome: 'Home',
        navAbout: 'About',
        navSkills: 'Skills',
        navProjects: 'Projects',
        navContact: 'Contact',
        project1Title: 'Portfolio Website',
        project1Desc: 'Personal portfolio website. Created with HTML, CSS, JavaScript and animations.',
        project2Title: 'Task Manager App',
        project2Desc: 'React application for task management. API integration with backend.',
        project3Title: 'Weather App',
        project3Desc: 'Python script that displays weather information. Gets data from API.',
        skill1: 'Frontend: HTML, CSS, JavaScript, React, Vue.js',
        skill2: 'Backend: Python, Node.js, Express',
        skill3: 'Databases: MongoDB, MySQL, PostgreSQL',
        skill4: 'Tools: Git, Docker, VS Code',
        skill5: 'Other: API Development, Responsive Design, Version Control',
        nameLabel: 'Your Name:',
        emailLabel: 'Email:',
        messageLabel: 'Message:',
        submitBtn: 'Send',
        ctaAbout: 'About Me',
        ctaProjects: 'Projects',
        ctaContact: 'Contact'
    },
    ru: {
        greeting: 'Привет, я Умурзок Топконбаев',
        intro: 'Я программист и люблю создавать инновационные проекты.',
        aboutTitle: 'Обо мне',
        aboutText: 'Я Умурзок Топконбаев, опытный программист. Специализируюсь на создании веб и мобильных приложений. Люблю изучать новые технологии и применять их на практике. Email: umurzoquz08@gmail.com',
        aboutText2: 'Я занимаюсь программированием с 2020 года. Участвовал в нескольких проектах и приобрел опыт командной работы. Моя цель - создавать инновационные решения и использовать технологии для улучшения жизни людей.',
        aboutText3: 'Образование: Бакалавр по информатике. Постоянно обновляю свои знания, проходя онлайн-курсы и посещая семинары.',
        skillsTitle: 'Навыки',
        skillsText: 'У меня есть опыт в следующих технологиях:',
        projectsTitle: 'Проекты',
        projectsText: 'Здесь вы можете увидеть некоторые из моих проектов.',
        contactTitle: 'Контакты',
        contactText: 'Вы можете использовать следующую информацию для связи со мной. Email: umurzoquz08@gmail.com',
        navHome: 'Главная',
        navAbout: 'Обо мне',
        navSkills: 'Навыки',
        navProjects: 'Проекты',
        navContact: 'Контакты',
        project1Title: 'Сайт портфолио',
        project1Desc: 'Личный сайт портфолио. Создан с HTML, CSS, JavaScript и анимациями.',
        project2Title: 'Приложение для управления задачами',
        project2Desc: 'Приложение React для управления задачами. Интеграция API с бэкендом.',
        project3Title: 'Приложение погоды',
        project3Desc: 'Скрипт Python, отображающий информацию о погоде. Получает данные из API.',
        skill1: 'Frontend: HTML, CSS, JavaScript, React, Vue.js',
        skill2: 'Backend: Python, Node.js, Express',
        skill3: 'Базы данных: MongoDB, MySQL, PostgreSQL',
        skill4: 'Инструменты: Git, Docker, VS Code',
        skill5: 'Другое: Разработка API, Адаптивный дизайн, Контроль версий',
        nameLabel: 'Ваше имя:',
        emailLabel: 'Email:',
        messageLabel: 'Сообщение:',
        submitBtn: 'Отправить',
        ctaAbout: 'Обо мне',
        ctaProjects: 'Проекты',
        ctaContact: 'Контакты'
    }
};

function changeLanguage(lang) {
    const greeting = document.getElementById('greeting');
    if (greeting) greeting.textContent = translations[lang].greeting;
    const intro = document.getElementById('intro');
    if (intro) intro.textContent = translations[lang].intro;
    const aboutTitle = document.getElementById('about-title');
    if (aboutTitle) aboutTitle.textContent = translations[lang].aboutTitle;
    const aboutText = document.getElementById('about-text');
    if (aboutText) aboutText.textContent = translations[lang].aboutText;
    const aboutText2 = document.getElementById('about-text2');
    if (aboutText2) aboutText2.textContent = translations[lang].aboutText2;
    const aboutText3 = document.getElementById('about-text3');
    if (aboutText3) aboutText3.textContent = translations[lang].aboutText3;
    const skillsTitle = document.getElementById('skills-title');
    if (skillsTitle) skillsTitle.textContent = translations[lang].skillsTitle;
    const skillsText = document.getElementById('skills-text');
    if (skillsText) skillsText.textContent = translations[lang].skillsText;
    const projectsTitle = document.getElementById('projects-title');
    if (projectsTitle) projectsTitle.textContent = translations[lang].projectsTitle;
    const projectsText = document.getElementById('projects-text');
    if (projectsText) projectsText.textContent = translations[lang].projectsText;
    const contactTitle = document.getElementById('contact-title');
    if (contactTitle) contactTitle.textContent = translations[lang].contactTitle;
    const contactText = document.getElementById('contact-text');
    if (contactText) contactText.textContent = translations[lang].contactText;
    const navHome = document.getElementById('nav-home');
    if (navHome) navHome.textContent = translations[lang].navHome;
    const navAbout = document.getElementById('nav-about');
    if (navAbout) navAbout.textContent = translations[lang].navAbout;
    const navSkills = document.getElementById('nav-skills');
    if (navSkills) navSkills.textContent = translations[lang].navSkills;
    const navProjects = document.getElementById('nav-projects');
    if (navProjects) navProjects.textContent = translations[lang].navProjects;
    const navContact = document.getElementById('nav-contact');
    if (navContact) navContact.textContent = translations[lang].navContact;
    const project1Title = document.getElementById('project1-title');
    if (project1Title) project1Title.textContent = translations[lang].project1Title;
    const project1Desc = document.getElementById('project1-desc');
    if (project1Desc) project1Desc.textContent = translations[lang].project1Desc;
    const project2Title = document.getElementById('project2-title');
    if (project2Title) project2Title.textContent = translations[lang].project2Title;
    const project2Desc = document.getElementById('project2-desc');
    if (project2Desc) project2Desc.textContent = translations[lang].project2Desc;
    const project3Title = document.getElementById('project3-title');
    if (project3Title) project3Title.textContent = translations[lang].project3Title;
    const project3Desc = document.getElementById('project3-desc');
    if (project3Desc) project3Desc.textContent = translations[lang].project3Desc;
    const skill1 = document.getElementById('skill1');
    if (skill1) skill1.innerHTML = '<strong>Frontend:</strong> ' + translations[lang].skill1.split(': ')[1];
    const skill2 = document.getElementById('skill2');
    if (skill2) skill2.innerHTML = '<strong>Backend:</strong> ' + translations[lang].skill2.split(': ')[1];
    const skill3 = document.getElementById('skill3');
    if (skill3) skill3.innerHTML = '<strong>Databases:</strong> ' + translations[lang].skill3.split(': ')[1];
    const skill4 = document.getElementById('skill4');
    if (skill4) skill4.innerHTML = '<strong>Tools:</strong> ' + translations[lang].skill4.split(': ')[1];
    const skill5 = document.getElementById('skill5');
    if (skill5) skill5.innerHTML = '<strong>Other:</strong> ' + translations[lang].skill5.split(': ')[1];
    const nameLabel = document.getElementById('name-label');
    if (nameLabel) nameLabel.textContent = translations[lang].nameLabel;
    const emailLabel = document.getElementById('email-label');
    if (emailLabel) emailLabel.textContent = translations[lang].emailLabel;
    const messageLabel = document.getElementById('message-label');
    if (messageLabel) messageLabel.textContent = translations[lang].messageLabel;
    const submitBtn = document.getElementById('submit-btn');
    if (submitBtn) submitBtn.textContent = translations[lang].submitBtn;
    const ctaAbout = document.getElementById('cta-about');
    if (ctaAbout) ctaAbout.textContent = translations[lang].ctaAbout;
    const ctaProjects = document.getElementById('cta-projects');
    if (ctaProjects) ctaProjects.textContent = translations[lang].ctaProjects;
    const ctaContact = document.getElementById('cta-contact');
    if (ctaContact) ctaContact.textContent = translations[lang].ctaContact;
}