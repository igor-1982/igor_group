(function () {
  var langMap = {
    en: 'zh',
    zh: 'en'
  };

  var langNames = {
    en: '🇨🇳 中文',
    zh: '🇬🇧 English'
  };

  var path = window.location.pathname;
  var parts = path.split('/');

  var currentLang = null;
  var langIdx = -1;
  for (var i = 0; i < parts.length; i++) {
    if (parts[i] === 'en' || parts[i] === 'zh') {
      currentLang = parts[i];
      langIdx = i;
      break;
    }
  }

  if (!currentLang) return;

  var targetLang = langMap[currentLang];
  parts[langIdx] = targetLang;
  var targetPath = parts.join('/');

  var btn = document.createElement('a');
  btn.href = targetPath;
  btn.textContent = langNames[currentLang];
  btn.style.cssText =
    'display:inline-block;padding:4px 12px;margin-left:8px;' +
    'border:1px solid #ccc;border-radius:4px;text-decoration:none;' +
    'font-size:13px;color:#333;background:#f5f5f5;' +
    'cursor:pointer;white-space:nowrap;';
  btn.onmouseover = function () {
    this.style.background = '#e8e8e8';
  };
  btn.onmouseout = function () {
    this.style.background = '#f5f5f5';
  };

  var observer = new MutationObserver(function () {
    var bar = document.querySelector('.left-buttons');
    if (bar) {
      observer.disconnect();
      bar.appendChild(btn);
    }
  });
  observer.observe(document.body, { childList: true, subtree: true });
})();
