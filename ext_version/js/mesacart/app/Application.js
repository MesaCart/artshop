//main application file
Ext.application({
	requires: ['Ext.container.Viewport'],
    name: 'mesacart',
	appFolder: 'app',	
    autoCreateViewport: true,
	models: [],
	stores: [],
    launch: function() {
	
		Ext.create('Ext.container.Viewport', {
            layout: 'fit',
            items: [
                {
                    xtype: 'panel',
                    title: 'testPanel',
                    html : '<h2>Testing</h2>'
                }
            ]
        });
        // This is fired as soon as the page is ready
    }
});