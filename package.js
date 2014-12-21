Package.describe({
  name: 'anonyfox:chardet',
  summary: ' /* Fill me in! */ ',
  version: '1.0.0',
  git: ' /* Fill me in! */ '
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.2');
  api.addFiles('anonyfox:chardet.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('anonyfox:chardet');
  api.addFiles('anonyfox:chardet-tests.js');
});
