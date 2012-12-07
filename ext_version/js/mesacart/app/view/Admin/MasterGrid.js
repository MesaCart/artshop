Ext.define('MC.view.Admin.MasterGrid', {
        extend:'Ext.grid.Panel',
		alias:'widget.MasterAdminGrid',
		id:'button-grid',
		cls:'MasterGridCls',
		selModel: Ext.create('Ext.selection.CheckboxModel', {
			listeners: {
				selectionchange: function(sm, selections) {
					console.log(this);
					this.down('#removeButton').setDisabled(selections.length == 0);
				}
			}
		}),
        store: 'AllProducts',
        columns: [
            {text: "Id", sortable: true, dataIndex: 'id'},
            {text: "Name", dataIndex: 'name'},
            {text: "Description", dataIndex: 'description'},
            {text: "Type", dataIndex: 'type'},
            {text: "pictureURL", dataIndex: 'picture'},
			{text: "Price", dataIndex: 'price'}
            
		],
        columnLines: true,
        // inline buttons
        dockedItems: [{
            xtype: 'toolbar',
            dock: 'bottom',
            ui: 'footer',
            layout: {
                pack: 'center'
            },
            items: [{
                minWidth: 80,
                text: 'Save'
            },{
                minWidth: 80,
                text: 'Cancel'
            }]
        }, {
            xtype: 'toolbar',
            items: [{
                text:'Add Something',
                tooltip:'Add a new row',
                iconCls:'add'
            }, '-', {
                text:'Options',
                tooltip:'Set options',
                iconCls:'option'
            },'-',{
                itemId: 'removeButton',
                text:'Remove Something',
                tooltip:'Remove the selected item',
                iconCls:'remove',
                disabled: true
            }]
        }],

        width: 600,
        height: 300,
        frame: true,
        title: 'Support for standard Panel features such as framing, buttons and toolbars',
        iconCls: 'icon-grid',
        renderTo: Ext.getBody()
    });

