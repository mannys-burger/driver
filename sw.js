self.addEventListener('install', (e) => {
    console.log('[Service Worker] Installed');
});

self.addEventListener('fetch', (e) => {
    // كود بسيط لتخطي شروط التثبيت بدون ما يعلق الكود بتاعك
});
