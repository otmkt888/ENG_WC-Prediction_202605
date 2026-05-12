/**
 * countdown.js — counts down to 2026-06-10 00:00:00 local time.
 * Updates both the hero section and the top sticky banner.
 */
(function () {
  const DEADLINE = new Date('2026-06-10T00:00:00').getTime();
  const pad = n => String(n).padStart(2, '0');

  function tick() {
    const diff = DEADLINE - Date.now();

    /* ── Expired state ────────────────────────────── */
    if (diff <= 0) {
      document.querySelectorAll('[data-countdown="timer"]').forEach(el => { el.style.display = 'none'; });
      document.querySelectorAll('[data-countdown="expired"]').forEach(el => { el.style.display = 'block'; });
      document.querySelectorAll('[data-days-remaining]').forEach(el => { el.textContent = '0'; });

      /* Replace top-banner countdown text */
      const banner = document.querySelector('.top-banner-countdown');
      if (banner) banner.textContent = '🚫 預測已截止';
      return;
    }

    const days    = Math.floor(diff / 86400000);
    const hours   = Math.floor((diff % 86400000) / 3600000);
    const minutes = Math.floor((diff % 3600000)  / 60000);
    const seconds = Math.floor((diff % 60000)    / 1000);

    /* ── Hero + final-CTA countdowns ─────────────── */
    document.querySelectorAll('[data-countdown="days"]')   .forEach(el => { el.textContent = pad(days); });
    document.querySelectorAll('[data-countdown="hours"]')  .forEach(el => { el.textContent = pad(hours); });
    document.querySelectorAll('[data-countdown="minutes"]').forEach(el => { el.textContent = pad(minutes); });
    document.querySelectorAll('[data-countdown="seconds"]').forEach(el => { el.textContent = pad(seconds); });

    /* ── "XX 天" in final CTA heading ─────────────── */
    document.querySelectorAll('[data-days-remaining]').forEach(el => { el.textContent = days; });
  }

  document.addEventListener('DOMContentLoaded', () => {
    tick();
    setInterval(tick, 1000);
  });
})();
