Ext.define('MC.view.SideBar', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.SideBar',
	layout:{
		type:'vbox',
		align:'center',
		pack:'center'
	},
	items:[
		{xtype:'button', text:'View/Edit Cart',
			handler: function(){
				var window = Ext.create('MC.view.CartWindow');
				window.show();
			}
		}
	]
	//...attempts to load the widget after the rest of the sidebar has loaded. I belive this is what was explained in the email Alex.	
    //... more configuration ...
});