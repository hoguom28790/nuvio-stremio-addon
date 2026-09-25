const fetch = require('node-fetch');
fetch('https://javhdz.bz/phim/bi-mat-cua-bo-duong-va-co-con-gai-vu-to-kanna-sannoki-4036')
  .then(res => res.text())
  .then(html => {
      console.log(html.includes('.m3u8'));
  });
