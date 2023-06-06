function ensureHTTPS() {
    if (location.protocol !== 'https:') {
      location.replace('https://' + location.hostname + location.pathname + location.search);
    }
  }
  
  window.onload = ensureHTTPS;
  