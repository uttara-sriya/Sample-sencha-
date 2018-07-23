Ext.create('Ext.Carousel', {
    fullscreen: true,
    title: 'Employee of the year',
    xtype: 'carousellist',
    defaults: {
        styleHtmlContent: true
    },

    items: [{
            html: 'Employee',
            style: 'background-color: #5E99CC'
        },
        {
            html: 'Item 2',
            style: 'background-color: #759E60'
        },
        {
            html: 'Item 3'
        }
    ]
});