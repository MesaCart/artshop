Ext.define('MC.view.SideBar', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.SideBar',
	cls:'SideBarCls',
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
		},
                {        html:'<iframe src="//www.facebook.com/plugins/likebox.php?href=http%3A%2F%\
2Fwww.facebook.com%2Fmesacart&amp;width=200&amp;height=590&amp;show_faces=true&amp;colorscheme=ligh\
t&amp;stream=true&amp;border_color&amp;header=true" scrolling="no" frameborder="0" style="border:no\
ne; overflow:hidden; width:200px; height:590px;" allowTransparency="true"></iframe>'}
	]
	//...attempts to load the widget after the rest of the sidebar has loaded. I belive this is what was explained in the email Alex.	
    //... more configuration ...
});