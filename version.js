(function(){
  var pill = document.getElementById('version-pill');
  if (!pill) return;

  var api  = 'https://api.github.com/repos/spec-driven-methodology/sdm/releases/latest';
  var key  = 'sdm-version-cache';

  var cached = localStorage.getItem(key);
  if (cached) {
    try {
      var d = JSON.parse(cached);
      if (d.tag) { pill.textContent = d.tag; pill.href = d.url; }
    } catch(e) {}
  }

  var req = new XMLHttpRequest();
  req.open('GET', api);
  req.setRequestHeader('Accept', 'application/vnd.github+json');
  req.onload = function() {
    if (req.status !== 200) return;
    try {
      var r = JSON.parse(req.responseText);
      pill.textContent = r.tag_name;
      pill.href = r.html_url;
      localStorage.setItem(key, JSON.stringify({tag: r.tag_name, url: r.html_url}));
    } catch(e) {}
  };
  req.send();
})();