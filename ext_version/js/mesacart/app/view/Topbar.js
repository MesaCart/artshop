Ext.define('MC.view.TopBar', {
    extend: 'Ext.toolbar.Toolbar',
    alias: 'widget.TopBar',
	cls:'TopBarCls',
    layout:{
		type:'column',
		//maybe table with 2 columns
		columns: 2
	},
	items:[
		/*
		{xtype:'homebtn',
			flex:3
		},
		*/
		//{xtype:'buttonBar'}
		
	]
    
});