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
			//jsonSubmit:true,
			//doesnt work in this version of extjs :(
			baseParams:{
				id:'null'
			},
			url: 'http://www.mesacart.com/api/api.php/product/',
			items:[
				{hidden:true,
					name:'id',
					value:'null
				},{fieldLabel: 'Product Name',
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
				},
					
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
						console.log('this');
						console.log(this)
						//console.log(this.up('form').getModelData());
						var form = this.up('form').getForm(); //gets the 'BasicForm' instance
						//console.log(form.getModelData());
						//we can probably add to painting of Frame store,
						//since they use the same proxy
						var theStore = Ext.getStore('Paintings');
						if( form.isValid()){
							var jsonString
							form.getValues();
							//form.submit();
						}
					}
				
				}
			]
		}
	]

});