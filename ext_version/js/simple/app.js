Ext.application({
    name: 'MC',

    // automatically create an instance of AM.view.Viewport
    autoCreateViewport: true,

    controllers: [
        'Users',
		'Toolbar'
    ]
});
