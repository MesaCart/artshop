Ext.define('MC.view.QuantityPrompt', {
	extend:'Ext.window.Window',
	alias:'widget.QuantityPrompt',
	cls:'QuantityPromptCls',
	items:[
		{xtype:'form',
			items:[
				{xtype:'textfield',
					fieldLabel: 'Enter Quantity for selected item',
					name:'quantity',
					allowBlank:false
				}	
			],
			
			buttons: [ 
				{ text: 'Submit',
				formBind: true, //only enabled once the form is valid
				disabled: true,
				handler: function() {
					var form = this.up('form').getForm();
					if (form.isValid()) {
						
						form.submit({
							success: function(form, action) {
								Ext.Msg.alert('Success', action.result.msg);
							},
							failure: function(form, action) {
								Ext.Msg.alert('Failed', action.result.msg);
							}
						});
					}
				}
				}
			]	
		}
	]	
});