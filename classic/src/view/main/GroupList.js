Ext.define('sampleForm.view.main.GroupList', {
    extend: 'Ext.tab.Panel',
    requires: ['Ext.layout.container.Card', 'Ext.layout.container.Fit'],
    xtype: 'grouplist',
    style: 'background-color:#dfe8f6; ',
    defaults: {
        bodyPadding: 15,
        layout: 'fit'
    },
    items: [{
            title: 'Category Main',
            // items: [{
            xtype: 'mainlist'
                // }]
        },
        {
            title: 'Category Profile',
            // items: [{
            xtype: 'profilelist'
                // }]
        },
        {
            title: 'Category Group',
            closable: true,
            // items: [{
            xtype: 'productlist',
            // }]
        }
    ]
});