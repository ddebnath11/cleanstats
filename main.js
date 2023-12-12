// main.js

document.addEventListener('DOMContentLoaded', function () {
    // Home Page
    document.getElementById('home').addEventListener('click', function () {
      loadContent('home.html');
    });
  
    // About Page
    document.getElementById('about').addEventListener('click', function () {
      loadContent('about.html');
    });
  
    // Create Page
    document.getElementById('create').addEventListener('click', function () {
      loadContent('create.html');
    });
  
    // Line Page
    document.getElementById('line').addEventListener('click', function () {
      loadContent('line.html');
    });
  
    // Explore Page
    document.getElementById('explore').addEventListener('click', function () {
      loadContent('explore.html');
    });
  
    // Bar Page
    document.getElementById('bar').addEventListener('click', function () {
      loadContent('bar.html');
    });
  
    // Live Page
    document.getElementById('live').addEventListener('click', function () {
      loadContent('live.html');
    });
  
    // Pie Page
    document.getElementById('pie').addEventListener('click', function () {
      loadContent('pie.html');
    });
  });
  
  function loadContent(page) {
    fetch(`templates/${page}`)
      .then(response => response.text())
      .then(html => {
        document.getElementById('content').innerHTML = html;
      });
  }
  