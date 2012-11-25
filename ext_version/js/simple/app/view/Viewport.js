Ext.define('MC.view.Viewport', {
    extend: 'Ext.container.Viewport',

    layout: 'fit',
    items: [
		{xtype:'userlist'}
		/*
		{xtype: 'panel',
			items:[
				{xtype:'topbar'}			
			]
		}
		 */
		  ]
});