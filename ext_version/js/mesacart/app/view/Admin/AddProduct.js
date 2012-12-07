Ext.define('MC.view.Admin.AddProduct', {
	extend:'Ext.window.Window',
	title:'Add a product',
	modal:true,
	height:300,
	width:400,
	layout:'vbox',
	//layout for fields or fieldset??
	//layout:'form'
	items:[
		{xtype:'form',
			layout:'anchor',
			defaults:{
				anchor:'100%'
			},
			defaultType:'textfield',
			/*
			baseParams:{
				id:'null'
			},
			*/
			url: 'http://www.mesacart.com/api/api.php/product/',
			items:[
				/*
				{hidden:true,
					name:'id',
					value:'null'
				},
				*/
				{fieldLabel: 'Product Name',
					name: 'name',
					allowBlank: false
				},{ fieldLabel: 'Product Description',
					name: 'description',
					allowBlank: true
				},{ fieldLabel: 'type',
					name: 'type',
					allowBlank: false
				},{ fieldLabel: 'Price',
					name: 'price',
					allowBlank: false
				},{ fieldLabel: 'Picture Location',
					name: 'picture',
					allowBlank: true
					//TODO maskeRe stripCharsRe regex for slashes??
				}
					
			],
			buttons: [
				{text:'Reset',
					handler: function(){
						this.up('form').getForm().reset();
					}
				},
				{text:'Add to Inventory',
					formBind: true,
					disabled:true,
					//initially disabled until form is valid
					handler: function() {
						var form = this.up('form').getForm(); //gets the 'BasicForm' instance						
						if( form.isValid()){
							
							var rec = Ext.create('MC.model.Product', form.getValues());
							rec.save();
							/*
							var nullParams = new Object();
							nullParams.id = 'null';
							var jsonParams = Ext.Object.merge(nullParams, form.getValues());
							console.log(jsonParams);
							theStore.add(jsonParams);
							theStore.sync();							
							*/
						}
						
						
					}
				
				}
			]
		}
	]

});