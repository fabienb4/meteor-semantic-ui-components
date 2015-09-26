Package.describe({
  name: 'fabienb4:semantic-ui-components',
  version: '0.4.1',
  // Brief, one-line summary of the package.
  summary: 'Meteor template components to use with Semantic-UI.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/fabienb4/meteor-semantic-ui-components.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.1');

  api.use(['ecmascript', 'jquery', 'underscore', 'templating', 'less'], 'client');

  api.addFiles([
    'stylesheets/transitions.less',
    'stylesheets/progress.less',
    'stylesheets/search.less',
    'templates/connection-lost.html',
    'templates/loading.html',
    'templates/menu.html',
    'templates/progress-bar.html',
    'templates/search-input.html',
    'templates/select-dropdown.html',
    'templates/connection-lost.js',
    'templates/loading.js',
    'templates/menu.js',
    'templates/progress-bar.js',
    'templates/select-dropdown.js'
  ], 'client');
});
