Ext.define('MC.controller.Monolith', {
    extend: 'Ext.app.Controller',

	views: [
		'TopBar', 'SideBar', 'Main', 'AdminLogin', 'AdminMenu', 'CustomersView', 'FramesView', 'PaintingsView', 'PaintingsGrid',
			'FramesGrid'/*, 'GuestBook', 'Customers' */
	],
	
    init: function() {
		this.control({
			
			'[itemId=loginBtn]':{
				click: this.onLoginTry
			},
			'[xtype=CustomersView]':{
				render: this.loadCustomers
			},
			'[xtype=PaintingsView]':{
				render: this.loadPaintings
			}
				
			
		});
        console.log('Initialized Monolith controller! This happens before the Application launch function is called');
    },
	
	loadPaintings: function(controller, eOpts){
		var theStore = Ext.getStore('Paintings');
		theStore.load();
		console.log(theStore);
	},
	
	loadCustomers: function(controller, eOpts){
		console.log(this);
		var theStore = Ext.getStore('Customers');
		theStore.load();
		console.log(theStore);
	},
	
	onLoginTry: function(button, event){
		var pwdField = button.up('panel').down('field');
		var password = pwdField.rawValue;
		if(password == 'pass1234'){
			this.openPortal(button, event);
		}		
	},

	openPortal: function(button, event){
		var tabs = this.main = button.up('panel').up('panel').up('panel');
		tabs.child('#AdminPortal').tab.show();
		tabs.setActiveTab('AdminPortal');
		tabs.child('#AdminLogin').tab.hide();
	}
	
});