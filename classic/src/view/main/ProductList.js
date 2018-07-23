Ext.define('sampleForm.view.main.ProductList', {
    extend: 'Ext.grid.Panel',
    xtype: 'productlist',
    requires: [
        'sampleForm.store.Product'
    ],
    plugins: 'cellediting',

    title: 'Productlist',

    store: {
        type: 'Product'
    },

    columns: [
        { text: 'Product Name', dataIndex: ' userId', editor: { xtype: 'textfield' } },
        { text: 'Category', dataIndex: 'id', flex: 1, editor: { xtype: 'textfield' } },
        { text: 'price', dataIndex: 'title', flex: 1, editor: { xtype: 'textfield' } },
        { text: 'quantity', dataIndex: 'body', flex: 1, editor: { xtype: 'textfield' } },
        {
            text: 'View',
            xtype: 'widgetcolumn',
            dataIndex: 'widget',
            widget: {
                xtype: 'button',
                text: 'Action',
                handler: function(btn) {
                    var record = btn.getWidgetRecord();
                    console.log(record.get('name'));
                    console.log(record.get('price'));
                    console.log(record.get('quantity'));
                    console.log(record.get('category'));
                }
            }
        }
    ],

    listeners: {
        select: 'onItemSelected'
    },

    bbar: {
        xtype: 'pagingtoolbar',
        // plugins: 'ux-slidingpager',//needs to add ux under requires in app.jsonh
        plugins: 'ux-progressbarpager',
        displayInfo: true
    },
    // store: {
    //     fields: ['id', 'name', 'email', 'phone'],
    //     autoLoad: true,
    //     pageSize: 2,
    // type: 'personnel',//use when data to be fetched from temp store
    // proxy: { // For REST calls
    //     type: 'rest',
    //     url: 'app.php/users',
    //     reader: {
    //         type: 'json',
    //         rootProperty: 'data'
    //     },
    //     writer: {
    //         type: 'json'
    //     }
    // },
    // proxy: { 
    //     type: 'ajax', //For AJAX Calls
    //     url: 'http://localhost:8080/proxytest',
    //     reader: {
    //         type: 'json',
    //         rootProperty: 'data',
    //         totalProperty: 'total' // json containing total 
    //     }
    // }
    // }
});