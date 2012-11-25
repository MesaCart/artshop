Ext.define('MC.view.SideBar', {
    extend: 'Ext.container.Container',
    alias: 'widget.SideBar',
	items:[
		{ xtype: 'panel',
		bodyPadding: 5,
		html:'facebook'
		},
		{ xtype: 'panel',
		bodyPadding: 5,
		html:'twitter?'
		}
	
	]
    //... more configuration ...
});