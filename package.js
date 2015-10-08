Package.describe({
  name:     'horka:swipebox',
  summary:  'Swipebox image viewer plugin for Meteor.',
  version:  '1.0.0',
  git:      'https://github.com/horka/horka-swipebox'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.export('Swipebox');
  api.addFiles([
  	'horka:swipebox.js',
  	'swipebox/css/swipebox.min.css',
  	'swipebox/js/jquery.swipebox.min.js',
  ], ['client']);
  if(api.addAssets) { //meteor 1.2
	  api.addAssets([
	    'swipebox/img/loader.gif',
	    'swipebox/img/icons.png',
	    'swipebox/img/icons.svg'
	  ], ['client']);
  } else {
	  api.addFiles([
	    'swipebox/img/loader.gif',
	    'swipebox/img/icons.png',
	    'swipebox/img/icons.svg'
	  ], ['client']);
  }
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('horka:swipebox');
  api.addFiles('horka:swipebox-tests.js');
});
