Ext.application({
    name: 'MC',
	appFolder: 'app',	
    autoCreateViewport: true,
	controllers: [
		'Monolith'
	],
	models: ['Customer', 'Product', 'NewsItem'],
	stores: ['Customers', 'Paintings', 'Frames', 'AllProducts', 'News', 'Cart'],
    launch: function() {
		console.log('mesacart');
		
        // This is fired as soon as the page is ready
    }
});

var baseUrl = 'http://www.mesacart.com';
