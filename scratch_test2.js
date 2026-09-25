const fetch = require('node-fetch');
fetch('https://helvid.com/v/EBOD-731-SUB/6y5hswts5m/playlist.m3u8', { headers: { 'Referer': 'https://upload18.com/' } })
  .then(res => console.log('Without params:', res.status))
  .catch(console.error);
