const SUPPORTED = ['en', 'ua'];
const DEFAULT_LANG = 'en';
const STORAGE_KEY = 'daaart:lang';

function detectLang() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved && SUPPORTED.includes(saved)) return saved;
  const nav = (navigator.language || DEFAULT_LANG).slice(0, 2).toLowerCase();
  return nav === 'uk' || nav === 'ua' ? 'ua' : DEFAULT_LANG;
}

function getByPath(obj, path) {
  return path.split('.').reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : null), obj);
}

function applyTranslations(dict) {
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const value = getByPath(dict, el.dataset.i18n);
    if (typeof value === 'string') el.textContent = value;
  });

  document.querySelectorAll('[data-i18n-attr]').forEach((el) => {
    const [attr, key] = el.dataset.i18nAttr.split(':');
    const value = getByPath(dict, key);
    if (typeof value === 'string') el.setAttribute(attr, value);
  });
}

async function loadDict(lang) {
  const res = await fetch(`data/i18n/${lang}.json`);
  if (!res.ok) throw new Error(`Failed to load locale: ${lang}`);
  return res.json();
}

export async function setLang(lang) {
  if (!SUPPORTED.includes(lang)) return;
  const dict = await loadDict(lang);
  applyTranslations(dict);
  document.documentElement.setAttribute('lang', lang === 'ua' ? 'uk' : 'en');
  localStorage.setItem(STORAGE_KEY, lang);

  document.querySelectorAll('[data-lang-switch]').forEach((btn) => {
    btn.setAttribute('aria-pressed', String(btn.dataset.langSwitch === lang));
  });
}

export function initI18n() {
  const lang = detectLang();
  setLang(lang);

  document.querySelectorAll('[data-lang-switch]').forEach((btn) => {
    btn.addEventListener('click', () => setLang(btn.dataset.langSwitch));
  });
}
