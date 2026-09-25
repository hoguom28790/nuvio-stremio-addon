const fetch = require('node-fetch');
fetch('https://upload18.com/play/index/ebod-731-sub', { headers: { 'User-Agent': 'Mozilla/5.0' } })
  .then(res => res.text())
  .then(t => {
      const match = t.match(/"m3u8"\s*:\s*"([^"]+)"/);
      if(match) console.log(match[1]);
      else console.log('Not found');
  })
  .catch(console.error);
