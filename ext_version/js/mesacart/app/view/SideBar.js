Ext.define('MC.view.SideBar', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.SideBar',
	layout:{
		type:'vbox',
		align:'center',
		pack:'center'

	},
	//...attempts to load the widget after the rest of the sidebar has loaded. I belive this is what was explained in the email Alex.	
	listeners: {
		afterrender: function(){
			var widget = Ext.create('Ext.panel.Panel',{
				items: [{
					bodyPadding: 5,
					height: 350,
					width: 250,
					html: '<div class="fb-like-box" data-href="http://www.facebook.com/mesacart" data-width="225" data-height="350" data-colorscheme="dark" data-show-faces="true" data-stream="true" data-header="true"></div>'
				}]
			});
			this.add(widget)
		},
	},	
    //... more configuration ...
});