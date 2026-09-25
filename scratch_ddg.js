const fetch = require('node-fetch');
fetch('https://html.duckduckgo.com/html/?q=' + encodeURIComponent('ExoPlayer HLS image/png segments'))
.then(res => res.text())
.then(t => {
    const matches = t.match(/<a class="result__snippet[^>]*>([\s\S]*?)<\/a>/g);
    if(matches) console.log(matches.map(m => m.replace(/<[^>]+>/g, '').trim()).join('\n---\n'));
})
.catch(console.error);
