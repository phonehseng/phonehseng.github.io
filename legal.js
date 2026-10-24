// Light/dark switch for the SMS, terms and privacy pages; remembers the same choice as the home page.
(function () {
  var button = document.getElementById('theme-toggle');
  function setTheme(theme) {
    if (theme !== 'dark' && theme !== 'light') return;
    document.documentElement.dataset.theme = theme;
    document.querySelector('meta[name="theme-color"]').content = theme === 'dark' ? '#0d100e' : '#f7f5ee';
    if (button) {
      button.setAttribute('aria-pressed', String(theme === 'light'));
      button.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
    }
  }
  try { setTheme(localStorage.getItem('phone-theme')); } catch (_) {}
  if (button) button.addEventListener('click', function () {
    var theme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    setTheme(theme);
    try { localStorage.setItem('phone-theme', theme); } catch (_) {}
  });
})();
