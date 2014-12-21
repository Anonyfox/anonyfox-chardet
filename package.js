Package.describe({
  name: 'anonyfox:chardet',
  summary: 'Wrapper for https://github.com/runk/node-chardet',
  author: 'Maximilian Stroh',
  version: '0.0.3',
  git: 'https://github.com/Anonyfox/anonyfox-chardet.git'
});

Npm.depends({chardet: '0.0.8'})

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles('chardet.js','server');
  api.export('chardet','server');
});