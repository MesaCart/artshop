Ext.define('MC.view.AdminLogin',{
	extend:'Ext.Panel',
	alias:'widget.AdminLogin',
	layout:'form',
	bodyPadding: 5,
	defaultType: 'textfield',
	items:[
		{fieldLabel:'Admin Password (pass1234)',
			name:'password'
		},
		{xtype:'button',
			text: 'Go to Admin Portal',
			itemId:'loginBtn'
		}
	]
});