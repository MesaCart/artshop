Ext.define('MC.view.AdminLogin',{
	extend:'Ext.Panel',
	alias:'widget.AdminLogin',
	layout:'form',
	cls:'AdminLoginCls',
	bodyPadding: 5,
	defaultType: 'textfield',
	items:[
		{fieldLabel:'Admin Password',
			name:'password'
		},
		{xtype:'button',
			text: 'Go to Admin Portal',
			itemId:'loginBtn'
		}
	]
});