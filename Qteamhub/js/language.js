const translations = {
    en: {
        // 英文翻译
        'nav.home': 'Home',
        'nav.data': 'Data',
        'nav.methods': 'Methods',
        'nav.team': 'Team',
        // ... 其他翻译
    },
    zh: {
        // 中文翻译
        'nav.home': '首页',
        'nav.data': '数据',
        'nav.methods': '方法',
        'nav.team': '团队',
        // ... 其他翻译
    }
};

function changeLanguage(lang) {
    document.documentElement.lang = lang;
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    localStorage.setItem('preferred-language', lang);
}

// 初始化语言
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('preferred-language') || 'en';
    changeLanguage(savedLang);
    document.querySelector('#language-select').value = savedLang;
}); 