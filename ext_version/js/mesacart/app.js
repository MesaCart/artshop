var cart = null;
var baseURL = 'http://www.mesacart.com';

Ext.application({
    name: 'MC',
	appFolder: 'app',	
    autoCreateViewport: true,
	controllers: [
		'Monolith'
	],
	//models: [],
	//stores: [],
    launch: function() {
		console.log('mesacart');
		
        // This is fired as soon as the page is ready
    }
});